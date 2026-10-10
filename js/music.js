/*
 * Background music.
 * Plays the file named in INVITE.music when it exists. Until then a soft
 * flute-style melody generated with the Web Audio API plays instead, so the
 * site is never silent and swapping in the real track needs no code change.
 */
(function () {
  "use strict";

  function FileMusic(src, onFail) {
    var audio = new Audio();
    audio.loop = true;
    audio.volume = 0.6;
    // nothing downloads until prefetch(): the envelope's bundle gets the network first
    audio.preload = "none";
    var failed = false;
    audio.addEventListener("error", function () { failed = true; onFail(); });
    audio.src = src;
    return {
      prefetch: function () { audio.preload = "auto"; audio.load(); },
      play: function () {
        if (failed) return Promise.reject(new Error("missing"));
        return audio.play();
      },
      pause: function () { audio.pause(); },
    };
  }

  /* A bansuri-like voice: breathy sine with slow vibrato, playing a gentle
     original melody in a pentatonic mode over a soft drone. */
  function Flute() {
    var ctx, master, verb, timer, step = 0, nextTime = 0;
    var BEAT = 60 / 66;
    // scale degrees in semitones from the tonic (D4)
    var SCALE = [0, 2, 4, 7, 9, 12, 14, 16];
    // melody: [degree index, beats], null = breath
    var PHRASE = [
      [2, 1.5], [3, 0.5], [4, 2], [3, 1], [2, 1], [1, 2], [null, 1],
      [4, 1.5], [5, 0.5], [6, 2], [5, 1], [4, 1], [3, 1], [2, 1], [null, 1],
      [1, 1], [2, 1], [3, 1.5], [2, 0.5], [1, 2], [0, 2], [null, 2],
      [3, 1], [4, 1], [5, 1.5], [4, 0.5], [3, 2], [2, 1], [1, 1], [0, 2], [null, 2],
    ];
    var TONIC = 293.66;

    function freq(deg) { return TONIC * Math.pow(2, SCALE[deg] / 12); }

    function tone(f, t0, dur) {
      var osc = ctx.createOscillator(), osc2 = ctx.createOscillator();
      var g = ctx.createGain(), lfo = ctx.createOscillator(), lfoG = ctx.createGain();
      osc.type = "sine"; osc.frequency.value = f;
      osc2.type = "triangle"; osc2.frequency.value = f * 2;
      var g2 = ctx.createGain(); g2.gain.value = 0.06;
      lfo.frequency.value = 5.2; lfoG.gain.value = f * 0.006;
      lfo.connect(lfoG); lfoG.connect(osc.frequency); lfoG.connect(osc2.frequency);
      // gentle slide into the note, soft attack, long release
      osc.frequency.setValueAtTime(f * 0.985, t0);
      osc.frequency.exponentialRampToValueAtTime(f, t0 + 0.12);
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.22, t0 + 0.14);
      g.gain.setValueAtTime(0.22, t0 + dur * 0.6);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur + 0.25);
      osc.connect(g); osc2.connect(g2).connect(g); g.connect(master);
      lfo.start(t0); osc.start(t0); osc2.start(t0);
      lfo.stop(t0 + dur + 0.4); osc.stop(t0 + dur + 0.4); osc2.stop(t0 + dur + 0.4);
      // breath: a whisper of filtered noise at the attack
      var n = noise(), bp = ctx.createBiquadFilter(), ng = ctx.createGain();
      bp.type = "bandpass"; bp.frequency.value = f * 2; bp.Q.value = 1.2;
      ng.gain.setValueAtTime(0.0001, t0);
      ng.gain.exponentialRampToValueAtTime(0.025, t0 + 0.05);
      ng.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.5);
      n.connect(bp).connect(ng).connect(master);
      n.start(t0); n.stop(t0 + 0.6);
    }

    function noise() {
      var len = ctx.sampleRate, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
      for (var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      var src = ctx.createBufferSource(); src.buffer = buf; return src;
    }

    function drone() {
      [TONIC / 2, TONIC / 2 * 1.5].forEach(function (f, i) {
        var o = ctx.createOscillator(), g = ctx.createGain();
        o.type = "sine"; o.frequency.value = f;
        g.gain.value = i ? 0.028 : 0.045;
        o.connect(g).connect(master);
        o.start();
      });
    }

    function reverb() {
      var len = ctx.sampleRate * 3.2, buf = ctx.createBuffer(2, len, ctx.sampleRate);
      for (var c = 0; c < 2; c++) {
        var d = buf.getChannelData(c);
        for (var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6);
      }
      var conv = ctx.createConvolver(); conv.buffer = buf; return conv;
    }

    function schedule() {
      while (nextTime < ctx.currentTime + 0.4) {
        var ev = PHRASE[step % PHRASE.length];
        var dur = ev[1] * BEAT;
        if (ev[0] !== null) tone(freq(ev[0]), nextTime, dur * 0.92);
        nextTime += dur;
        step++;
      }
    }

    return {
      play: function () {
        if (!ctx) {
          var AC = window.AudioContext || window.webkitAudioContext;
          if (!AC) return Promise.reject(new Error("no audio"));
          ctx = new AC();
          master = ctx.createGain(); master.gain.value = 0;
          var wet = ctx.createGain(); wet.gain.value = 0.5;
          verb = reverb();
          master.connect(ctx.destination);
          master.connect(verb).connect(wet).connect(ctx.destination);
          drone();
        }
        return ctx.resume().then(function () {
          master.gain.cancelScheduledValues(ctx.currentTime);
          master.gain.setTargetAtTime(0.9, ctx.currentTime, 0.8);
          nextTime = ctx.currentTime + 0.2;
          clearInterval(timer);
          timer = setInterval(schedule, 120);
          schedule();
        });
      },
      pause: function () {
        if (!ctx) return;
        clearInterval(timer);
        master.gain.setTargetAtTime(0, ctx.currentTime, 0.3);
      },
    };
  }

  window.createMusic = function (src) {
    var flute = null, current = null, wanted = false;
    var fallback = function () {
      flute = flute || Flute();
      current = flute;
      if (wanted) flute.play().catch(function () {});
    };
    current = src ? FileMusic(src, fallback) : (flute = Flute());
    return {
      // start downloading the track once the opening screen is up
      prefetch: function () { if (current.prefetch) current.prefetch(); },
      play: function () { wanted = true; return current.play().catch(function (e) { if (current !== flute) { fallback(); return; } throw e; }); },
      pause: function () { wanted = false; current.pause(); },
    };
  };
})();
