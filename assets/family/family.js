/*
 * Family invitation: plays the scenes the way the reference video does.
 *  - picture: each scene is the video's own footage with its sample text removed, so the
 *    camera and the characters move exactly as in the video;
 *  - the text is laid out on the video's frame and follows its camera (CAM, measured from the
 *    footage: scale and offset at the first and last frame, in 720 x 1280 pixels);
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

  /* camera path of each clip: [length in s, [scale, x, y] at the start, [scale, x, y] at the end] */
  var CAM = {
    title: [6.567, [1.09989, -35.98, -63.8], [0.96307, 13.25, 23.69]],
    verse: [5.967, [0.88476, 41.45, 73.7], [1.00908, -3.28, -5.76]],
    parents: [5.967, [1.05551, -19.99, -35.53], [0.93506, 23.38, 41.56]],
    heart: [5.9, [0.90003, 35.94, 64.0], [0.99869, 0.38, 0.78]],
    haldi: [5.9, [1.10291, -37.0, -0.02], [0.9667, 11.96, -0.02]],
    nikah: [5.867, [1.04848, -17.41, 0.22], [0.92049, 27.57, -0.65]],
    walima: [5.7, [0.95673, 15.61, 27.79], [1.13144, -47.66, -84.51]],
    thanks: [6.0, [1.07143, -25.73, 0.17], [0.93676, 22.73, 0.12]],
  };

  /* ---------- each scene: its footage, and a layer for its lettering that follows the camera ---------- */
  scenes.forEach(function (sc, i) {
    var clip = sc.getAttribute("data-clip");
    var v = document.createElement("video");
    v.className = "bg";
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");
    v.setAttribute("muted", "");
    v.preload = i === 0 ? "auto" : "none";
    v.poster = "assets/family/clips/" + clip + ".webp";
    // H.264 for phones, VP9 for browsers without it; each picks the first it can play
    ["mp4", "webm"].forEach(function (ext) {
      var so = document.createElement("source");
      so.src = "assets/family/clips/" + clip + "." + ext;
      so.type = "video/" + ext;
      v.appendChild(so);
    });
    var cam = document.createElement("div");
    cam.className = "cam";
    Array.prototype.slice.call(sc.children).forEach(function (c) { cam.appendChild(c); });
    sc.appendChild(v);
    sc.appendChild(cam);
    sc._v = v; sc._cam = cam; sc._path = CAM[clip];
    setCam(sc, 0);
  });
  // The lettering layer is laid out OVER (25%) larger than the frame and only ever scaled down:
  // phones draw a moving layer once and then stretch it, so scaling up would blur the text.
  var OVER = 1.25;
  function setCam(sc, p) {
    var a = sc._path[1], b = sc._path[2];
    var s = a[0] + (b[0] - a[0]) * p, x = a[1] + (b[1] - a[1]) * p, y = a[2] + (b[2] - a[2]) * p;
    sc._cam.style.transform = "translate(" + (x / 7.2).toFixed(3) + "cqw," + (y / 12.8).toFixed(3) + "cqh) scale(" + (s / OVER).toFixed(5) + ")";
  }
  // the next clip loads while the current one plays
  function warm(i) { var sc = scenes[i]; if (sc && sc._v.preload !== "auto") { sc._v.preload = "auto"; sc._v.load(); } }
  function loadRest() { warm(1); }
  scenes[0].classList.add("idle");

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

  /* the footage plays over the scene's whole length; the lettering follows its camera frame by frame */
  var camRaf = 0, camSc = null, camT0 = 0, camLen = 0;
  function follow() {
    var sc = camSc, v = sc._v, clipLen = sc._path[0];
    var p = (v.readyState >= 2 && v.currentTime > 0) ? v.currentTime / clipLen
      : (performance.now() - camT0) / camLen;
    setCam(sc, Math.max(0, Math.min(1, p)));
    camRaf = requestAnimationFrame(follow);
  }
  function roll(sc, dur) {
    cancelAnimationFrame(camRaf);
    scenes.forEach(function (o) { if (o !== sc && !o._v.paused) o._v.pause(); });
    var v = sc._v, clipLen = sc._path[0];
    camSc = sc; camT0 = performance.now(); camLen = dur > 0 ? dur : clipLen * 1000;
    // slower footage for the scenes that stay longer, so the characters keep moving to the end
    var rate = dur > 0 ? Math.max(0.5, Math.min(1, clipLen * 1000 / dur)) : 1;
    try { v.currentTime = 0; } catch (e) {}
    v.playbackRate = rate;
    if (calm) { setCam(sc, 0); return; }
    var pr = v.play();
    if (pr && pr.catch) pr.catch(function () {});
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
    enter(scenes[i], dur);
    warm(i + 1);
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
    if (document.hidden) { clearTimeout(timer); cancelAnimationFrame(raf); cancelAnimationFrame(camRaf); anims.forEach(function (a) { a.pause(); }); scenes[idx]._v.pause(); }
    else if (playing) show(idx, true);
  });
  actbar.addEventListener("click", function (e) { e.stopPropagation(); if (e.target.closest("#replay")) show(0); });
  window.__famShow = function (i) { if (!playing) open(); show(i, true); }; // test hooks
  window.__famCam = function (p) { cancelAnimationFrame(camRaf); scenes[idx]._v.pause(); setCam(scenes[idx], p); };
})();
