/*
 * Family invitation: plays the scenes the way the reference video does.
 *  - camera: each scene zooms slowly in or out over its whole length (data-cam="from to"),
 *    with the text riding on the picture;
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
  var stage = $("#stage"), frame = $("#frame"), haze = $("#haze"), bars = $("#bars");
  var scenes = $$(".scene");
  var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- build each scene's camera layer: picture, calligraphy and text together ---------- */
  scenes.forEach(function (sc, i) {
    var art = document.createElement("div");
    art.className = "art";
    var img = document.createElement("img");
    img.className = "bg";
    img.alt = "";
    img.decoding = "async";
    img.setAttribute("data-src", "assets/family/scenes/" + sc.getAttribute("data-bg") + ".webp");
    if (i === 0) { img.fetchPriority = "high"; img.src = img.getAttribute("data-src"); }
    art.appendChild(img);
    Array.prototype.slice.call(sc.children).forEach(function (c) { art.appendChild(c); });
    sc.appendChild(art);
  });
  function loadRest() { $$(".bg").forEach(function (img) { if (!img.getAttribute("src")) img.src = img.getAttribute("data-src"); }); }
  scenes[0].classList.add("idle");
  if (document.readyState === "complete") setTimeout(loadRest, 300);
  else window.addEventListener("load", function () { setTimeout(loadRest, 300); });

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

  function enter(sc, dur) {
    stopAll();
    var cam = (sc.getAttribute("data-cam") || "1 1").split(" ").map(parseFloat);
    var camTime = (parseFloat(sc.getAttribute("data-camtime")) || dur / 1000 || 7) * 1000;
    if (!calm) {
      play($(".art", sc), [{ transform: "scale(" + cam[0] + ")" }, { transform: "scale(" + cam[1] + ")" }],
        { duration: camTime, easing: "linear", fill: "forwards" });
    }
    $$(".w, .wr, .b", sc).forEach(function (el) {
      var at = (parseFloat(el.getAttribute("data-at")) || 0) * 1000;
      if (calm) at = 0;
      if (el.classList.contains("b")) {
        play(el, [{ opacity: 0, filter: "blur(9px)" }, { opacity: 1, filter: "blur(0)" }],
          { duration: calm ? 200 : 550, delay: at, easing: "ease-out", fill: "both" });
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
  var idx = 0, timer = null, raf = 0, startAt = 0, dur = 0, playing = false, swapT = null, leaveT = null;

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
    // the scene's own time includes its exit, so the next one starts at the white peak
    if (dur > 0) timer = setTimeout(function () { show(idx + 1); }, dur);
    paint();
  }
  function show(i, immediate) {
    if (i < 0 || i >= scenes.length) return;
    clearTimeout(timer); clearTimeout(swapT); clearTimeout(leaveT); cancelAnimationFrame(raf);
    if (immediate) { go(i); return; }
    leave(scenes[idx]);
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
    if (document.hidden) { clearTimeout(timer); cancelAnimationFrame(raf); anims.forEach(function (a) { a.pause(); }); }
    else if (playing) show(idx, true);
  });
  $("#replay").addEventListener("click", function () { show(0); });
  window.__famShow = function (i) { if (!playing) open(); show(i, true); }; // test hook
})();
