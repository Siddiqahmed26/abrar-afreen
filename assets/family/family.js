/*
 * Family invitation: cream-and-gold scenes under Mughal arches (the reference video's own
 * artwork, with the figures removed and a floral base of roses, lanterns and candles), set to
 * the wording of the printed card.
 *  - camera: each scene drifts slowly in or out; picture, calligraphy and text move together;
 *  - life: rose petals fall, candles flicker, gold dust twinkles;
 *  - text: .w writes on from the left, .wr (Arabic) from the right, .b comes into focus;
 *  - between scenes the text wipes away, the picture veils into a soft white flash and the
 *    next one comes out of it.
 * The first tap opens it (and starts the music); after that it moves on by itself.
 * A tap goes forward (the left third goes back), swipes go either way.
 */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var stage = $("#stage"), frame = $("#frame"), haze = $("#haze"), bars = $("#bars"), actbar = $("#actbar");
  var scenes = $$(".scene");
  var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* camera: [scale at the start, scale at the end]; scenes alternate drifting in and out */
  var DRIFT = [[1, 1.06], [1.06, 1]];
  // candle flames in the floral base (percent of the picture), each given a soft flickering glow
  var FLAMES = [[11.1, 95.8, 1], [25.1, 98.7, .7], [84.5, 93.8, 1.2], [94.5, 95.7, .9]];

  /* ---------- each scene: picture, glows and lettering on one camera layer ---------- */
  scenes.forEach(function (sc, i) {
    var cam = document.createElement("div");
    cam.className = "cam";
    var img = document.createElement("img");
    img.className = "bg";
    img.alt = "";
    img.decoding = "async";
    img.setAttribute("data-src", "assets/family/scenes/" + sc.getAttribute("data-bg") + ".webp");
    if (i === 0) { img.fetchPriority = "high"; img.src = img.getAttribute("data-src"); }
    cam.appendChild(img);
    FLAMES.forEach(function (f, k) {
      var g = document.createElement("i");
      g.className = "glow";
      g.style.cssText = "left:" + f[0] + "%;top:" + f[1] + "%;--s:" + f[2] + ";animation-delay:-" + (k * 0.37).toFixed(2) + "s";
      cam.appendChild(g);
    });
    Array.prototype.slice.call(sc.children).forEach(function (c) { cam.appendChild(c); });
    sc.appendChild(cam);
    var d = DRIFT[i % 2];
    sc._cam = cam; sc._path = [0, [d[0], 360 * (1 - d[0]), 640 * (1 - d[0])], [d[1], 360 * (1 - d[1]), 640 * (1 - d[1])]];
    setCam(sc, 0);
  });
  // The camera layer is laid out OVER (25%) larger than the frame and only ever scaled down:
  // phones draw a moving layer once and then stretch it, so scaling up would blur the text.
  var OVER = 1.25;
  function setCam(sc, p) {
    var a = sc._path[1], b = sc._path[2];
    var s = a[0] + (b[0] - a[0]) * p, x = a[1] + (b[1] - a[1]) * p, y = a[2] + (b[2] - a[2]) * p;
    sc._cam.style.transform = "translate(" + (x / 7.2).toFixed(3) + "cqw," + (y / 12.8).toFixed(3) + "cqh) scale(" + (s / OVER).toFixed(5) + ")";
  }
  function loadRest() { $$(".bg").forEach(function (img) { if (!img.getAttribute("src")) img.src = img.getAttribute("data-src"); }); }
  scenes[0].classList.add("idle");
  if (document.readyState === "complete") setTimeout(loadRest, 300);
  else window.addEventListener("load", function () { setTimeout(loadRest, 300); });

  /* ---------- falling rose petals and gold dust (one light canvas over all scenes) ---------- */
  var cv = $("#petals"), cx = cv.getContext("2d"), petals = [], dust = [], W = 0, H = 0, DPR = 1, petalRaf = 0, lastT = 0;
  var TONES = [["#f6d5d3", "#e9aeb0"], ["#fbeee0", "#ecd3b4"], ["#f3dfa6", "#d8b25c"], ["#f8e1e4", "#dfa3ad"]];
  function sizeCanvas() {
    // the canvas sits on the camera layer (between picture and text), which is 1.25x the frame
    var r = frame.getBoundingClientRect();
    DPR = Math.min(2, window.devicePixelRatio || 1);
    W = r.width * OVER; H = r.height * OVER;
    cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR);
  }
  function petal(top) {
    var t = TONES[Math.floor(Math.random() * TONES.length)];
    return { x: Math.random() * W, y: top ? -20 - Math.random() * H * .6 : Math.random() * H, r: (6 + Math.random() * 7) * W / 400,
      vy: (14 + Math.random() * 16) * H / 800, sway: 18 + Math.random() * 30, ph: Math.random() * 6.3, sp: .6 + Math.random() * .9,
      rot: Math.random() * 6.3, vr: (Math.random() - .5) * 1.4, flip: Math.random() * 6.3, c: t };
  }
  function makeAmbience() {
    sizeCanvas();
    petals = []; dust = [];
    for (var k = 0; k < 16; k++) petals.push(petal(false));
    for (k = 0; k < 34; k++) dust.push({ x: Math.random(), y: .08 + Math.random() * .8, r: .6 + Math.random() * 1.4, ph: Math.random() * 6.3, sp: .7 + Math.random() * 1.6 });
  }
  function drawAmbience(t) {
    var dt = Math.min(.05, (t - lastT) / 1000 || 0); lastT = t;
    cx.setTransform(DPR, 0, 0, DPR, 0, 0);
    cx.clearRect(0, 0, W, H);
    dust.forEach(function (d) {
      var a = Math.max(0, Math.sin(t / 1000 * d.sp + d.ph)); a = a * a;
      if (a < .02) return;
      var x = d.x * W, y = d.y * H, r = d.r * W / 400;
      var g = cx.createRadialGradient(x, y, 0, x, y, r * 4);
      g.addColorStop(0, "rgba(255,248,220," + (.95 * a) + ")"); g.addColorStop(.35, "rgba(240,200,110," + (.55 * a) + ")"); g.addColorStop(1, "rgba(240,200,110,0)");
      cx.fillStyle = g; cx.beginPath(); cx.arc(x, y, r * 4, 0, 6.283); cx.fill();
    });
    petals.forEach(function (p, k) {
      p.y += p.vy * dt; p.ph += p.sp * dt; p.rot += p.vr * dt; p.flip += 1.6 * dt;
      var x = p.x + Math.sin(p.ph) * p.sway;
      if (p.y > H + 30) petals[k] = petal(true);
      cx.save(); cx.translate(x, p.y); cx.rotate(p.rot); cx.scale(Math.max(.18, Math.abs(Math.cos(p.flip))), 1);
      var g = cx.createLinearGradient(-p.r, -p.r, p.r, p.r);
      g.addColorStop(0, p.c[0]); g.addColorStop(1, p.c[1]);
      cx.fillStyle = g; cx.globalAlpha = .88;
      cx.beginPath();
      cx.moveTo(0, -p.r);
      cx.bezierCurveTo(p.r * .95, -p.r * .7, p.r * .8, p.r * .75, 0, p.r);
      cx.bezierCurveTo(-p.r * .8, p.r * .75, -p.r * .95, -p.r * .7, 0, -p.r);
      cx.fill();
      cx.restore();
    });
    petalRaf = requestAnimationFrame(drawAmbience);
  }
  function startAmbience() { if (calm) return; cancelAnimationFrame(petalRaf); lastT = performance.now(); petalRaf = requestAnimationFrame(drawAmbience); }
  makeAmbience();
  window.addEventListener("resize", sizeCanvas);

  /* ---------- maps and calendar ---------- */
  var MAPS = {
    amc: "https://www.google.com/maps/search/?api=1&query=A.M.C.+Fortune+Mahal%2C+36+Jayamahal+Main+Road%2C+J.C.+Nagar%2C+Bengaluru+560006",
    shams: "https://www.google.com/maps/search/?api=1&query=Shams+Convention+Centre%2C+67+Haines+Road%2C+Sulthangunta%2C+Shivaji+Nagar%2C+Bengaluru+560001",
  };
  var AMC = "A.M.C. Fortune Mahal, #36 Jayamahal Main Road, Opp. Fun World, Next to S.B.I. Bank, J.C. Nagar, Bengaluru 560006";
  var SHAMS = "Shams Convention Centre, #67 Haines Road, Sulthangunta, Shivaji Nagar, Bengaluru 560001";
  // times in UTC (IST minus 5:30)
  var CAL = {
    haldi: ["Haldi & Shukrana · Abrar & Afreen", "20261215T143000Z", "20261215T180000Z", "Dinner from 8:00 PM onwards.", AMC],
    nikah: ["Nikah · Abrar & Afreen", "20261217T053000Z", "20261217T090000Z", "Nikah at 11:00 AM, lunch from 12:30 PM onwards.", AMC],
    valima: ["Dawat-E-Valima · Abrar & Afreen", "20261217T143000Z", "20261217T180000Z", "Dinner from 8:00 PM onwards.", SHAMS],
  };
  $$("[data-map]").forEach(function (a) { a.href = MAPS[a.getAttribute("data-map")]; });
  $$("[data-cal]").forEach(function (a) {
    var c = CAL[a.getAttribute("data-cal")];
    a.href = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent(c[0]) +
      "&dates=" + c[1] + "/" + c[2] + "&details=" + encodeURIComponent(c[3]) + "&location=" + encodeURIComponent(c[4]);
  });

  /* ---------- music ---------- */
  var music = window.createMusic("assets/music.mp3");
  var musicBtn = $("#music");
  function setMusic(on) {
    musicBtn.setAttribute("aria-pressed", String(on));
    if (on) music.play().catch(function () { setMusic(false); }); else music.pause();
  }
  musicBtn.addEventListener("click", function (e) { e.stopPropagation(); setMusic(musicBtn.getAttribute("aria-pressed") !== "true"); });

  /* ---------- one scene's animations ---------- */
  var anims = [];
  function stopAll() { anims.forEach(function (a) { a.cancel(); }); anims = []; }
  function play(el, frames, opts) { var a = el.animate(frames, opts); anims.push(a); return a; }
  var WRITE = "cubic-bezier(.3,.1,.5,1)";

  /* the camera drifts over the scene's whole length */
  var camRaf = 0, camSc = null, camT0 = 0, camLen = 0;
  function follow() {
    setCam(camSc, Math.max(0, Math.min(1, (performance.now() - camT0) / camLen)));
    camRaf = requestAnimationFrame(follow);
  }
  function roll(sc, dur) {
    cancelAnimationFrame(camRaf);
    camSc = sc; camT0 = performance.now(); camLen = dur > 0 ? dur : 9000;
    if (calm) { setCam(sc, 0); return; }
    follow();
  }

  function enter(sc, dur) {
    stopAll();
    roll(sc, dur);
    $$(".w, .wr, .b", sc).forEach(function (el) {
      var at = (parseFloat(el.getAttribute("data-at")) || 0) * 1000;
      if (calm) at = 0;
      if (el.classList.contains("b")) {
        el.style.opacity = "";
        var f = play(el, [{ opacity: 0, filter: "blur(9px)" }, { opacity: 1, filter: "blur(0)" }],
          { duration: calm ? 200 : 550, delay: at, easing: "ease-out", fill: "backwards" });
        // once in focus the line keeps no filter at all (a leftover filter makes phones draw text soft)
        f.onfinish = function () { el.style.opacity = "1"; };
      } else {
        var d = calm ? 200 : (parseFloat(el.getAttribute("data-d")) || 1) * 1000;
        var from = el.classList.contains("wr") ? "inset(-30% -8% -30% 100%)" : "inset(-30% 100% -30% -8%)";
        play(el, [{ clipPath: from }, { clipPath: "inset(-30% -8% -30% -8%)" }],
          { duration: d, delay: at, easing: WRITE, fill: "both" });
      }
    });
  }
  // at the end of a scene the lettering wipes away left to right, as in the video
  function leave(sc) {
    $$(".w, .wr, .b", sc).forEach(function (el) {
      play(el, [{ clipPath: "inset(-30% -8% -30% -8%)", opacity: 1 }, { clipPath: "inset(-30% -8% -30% 100%)", opacity: 1 }],
        { duration: 200, easing: "linear", fill: "forwards" });
    });
  }

  /* ---------- the white flash between scenes ---------- */
  var FLASH = 720, SWAP = 340;
  function flash() {
    if (calm) return;
    haze.animate([
      { opacity: 0, backgroundColor: "#d7d1c8" },
      { opacity: .7, backgroundColor: "#ddd8d0", offset: .3 },
      { opacity: 1, backgroundColor: "#fbfaf7", offset: .47 },
      { opacity: 1, backgroundColor: "#fbfaf7", offset: .53 },
      { opacity: .65, backgroundColor: "#ddd8d0", offset: .7 },
      { opacity: 0, backgroundColor: "#e3ded6" },
    ], { duration: FLASH, easing: "linear" });
    frame.animate([
      { filter: "blur(0)" }, { filter: "blur(6px)", offset: .42 }, { filter: "blur(6px)", offset: .58 }, { filter: "blur(0)" },
    ], { duration: FLASH, easing: "ease-in-out" });
  }

  /* ---------- the story ---------- */
  bars.innerHTML = scenes.map(function () { return "<i><b></b></i>"; }).join("");
  var barEls = $$("i", bars);
  var actT = null, idx = 0, timer = null, raf = 0, startAt = 0, dur = 0, playing = false, swapT = null, leaveT = null;

  function paint() {
    barEls.forEach(function (b, i) { b.classList.toggle("done", i < idx); if (i !== idx) b.firstChild.style.width = ""; });
    if (dur > 0) {
      var p = Math.min(1, (performance.now() - startAt) / dur);
      barEls[idx].firstChild.style.width = (p * 100) + "%";
      if (p < 1) raf = requestAnimationFrame(paint);
    } else barEls[idx].firstChild.style.width = "100%";
  }
  function go(i) {
    scenes.forEach(function (s, k) { s.classList.toggle("is-on", k === i); s.classList.remove("idle"); });
    idx = i;
    dur = (parseFloat(scenes[i].getAttribute("data-time")) || 0) * 1000;
    startAt = performance.now();
    // petals drift between the picture and the lettering of the scene on screen
    var firstText = scenes[i]._cam.querySelector(".cal, .txt");
    scenes[i]._cam.insertBefore(cv, firstText);
    enter(scenes[i], dur);
    // the scene's buttons appear in the bar once its details are in
    var acts = $(".acts", scenes[i]);
    actbar.classList.remove("on");
    clearTimeout(actT);
    actbar.innerHTML = acts ? acts.innerHTML : "";
    if (acts) actT = setTimeout(function () { actbar.classList.add("on"); }, (parseFloat(acts.getAttribute("data-at")) || 2) * 1000);
    // the scene's own time includes its exit, so the next one starts at the white peak
    if (dur > 0) timer = setTimeout(function () { show(idx + 1); }, dur);
    paint();
  }
  function show(i, immediate) {
    if (i < 0 || i >= scenes.length) return;
    clearTimeout(timer); clearTimeout(swapT); clearTimeout(leaveT); cancelAnimationFrame(raf);
    if (immediate) { go(i); return; }
    leave(scenes[idx]);
    actbar.classList.remove("on");
    leaveT = setTimeout(flash, 120);
    swapT = setTimeout(function () { go(i); }, 120 + SWAP);
  }

  function open() {
    if (playing) return;
    playing = true;
    stage.classList.add("playing");
    setMusic(true);
    loadRest();
    startAmbience();
    go(0);
    // once faded, the opener leaves the page entirely
    setTimeout(function () { $("#opener").classList.add("gone"); }, 1300);
  }
  $("#opener").addEventListener("click", function (e) { e.stopPropagation(); open(); });

  stage.addEventListener("click", function (e) {
    if (!playing || e.target.closest("a, button")) return;
    var r = stage.getBoundingClientRect();
    if (e.clientX - r.left < r.width * 0.3) show(idx - 1); else show(idx + 1);
  });
  var sx = 0, sy = 0;
  stage.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  stage.addEventListener("touchend", function (e) {
    if (!playing) return;
    var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 50) return;
    e.preventDefault();
    if (Math.abs(dy) > Math.abs(dx)) { if (dy < 0) show(idx + 1); else show(idx - 1); }
    else { if (dx < 0) show(idx + 1); else show(idx - 1); }
  });
  window.addEventListener("keydown", function (e) {
    if (!playing) { if (e.key === "Enter" || e.key === " ") open(); return; }
    if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") show(idx + 1);
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") show(idx - 1);
  });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) { clearTimeout(timer); cancelAnimationFrame(raf); cancelAnimationFrame(camRaf); anims.forEach(function (a) { a.pause(); }); cancelAnimationFrame(petalRaf); }
    else if (playing) { show(idx, true); startAmbience(); }
  });
  actbar.addEventListener("click", function (e) { e.stopPropagation(); if (e.target.closest("#replay")) show(0); });
  window.__famShow = function (i) { if (!playing) open(); show(i, true); }; // test hooks
  window.__famCam = function (p) { cancelAnimationFrame(camRaf); setCam(scenes[idx], p); };
})();
