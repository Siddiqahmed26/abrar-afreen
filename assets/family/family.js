/*
 * Family invitation: plays the scenes like the reference video. The first tap opens
 * it (and starts the music); after that it moves on by itself. A tap goes forward
 * (the left third goes back), swipes go either way.
 */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var stage = $("#stage"), scenes = $$(".scene"), bars = $("#bars");

  /* ---------- backgrounds: the first now, the rest right after ---------- */
  scenes.forEach(function (sc, i) {
    var img = document.createElement("img");
    img.className = "bg";
    img.alt = "";
    img.decoding = "async";
    img.setAttribute("data-src", "assets/family/scenes/" + sc.getAttribute("data-bg") + ".webp");
    if (i === 0) { img.fetchPriority = "high"; img.src = img.getAttribute("data-src"); }
    // the picture and its calligraphy share one layer, so the camera push moves them together
    var art = document.createElement("div");
    art.className = "art";
    art.appendChild(img);
    $$(".cal", sc).forEach(function (c) { art.appendChild(c); });
    sc.insertBefore(art, sc.firstChild);
  });
  function loadRest() { $$(".bg").forEach(function (img) { if (!img.getAttribute("src")) img.src = img.getAttribute("data-src"); }); }
  scenes[0].classList.add("idle");
  if (document.readyState === "complete") setTimeout(loadRest, 300);
  else window.addEventListener("load", function () { setTimeout(loadRest, 300); });

  /* ---------- sparkles ---------- */
  var html = "";
  for (var k = 0; k < 22; k++) {
    html += '<i style="left:' + (8 + Math.random() * 84).toFixed(1) + '%;top:' + (35 + Math.random() * 60).toFixed(1) +
      '%;--dx:' + ((Math.random() - .5) * 10).toFixed(1) + 'cqw;animation-duration:' + (7 + Math.random() * 7).toFixed(1) +
      's;animation-delay:-' + (Math.random() * 12).toFixed(1) + 's"></i>';
  }
  $(".sparkles").innerHTML = html;

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

  /* ---------- the story ---------- */
  bars.innerHTML = scenes.map(function () { return "<i><b></b></i>"; }).join("");
  var barEls = $$("i", bars);
  var idx = 0, timer = null, raf = 0, startAt = 0, dur = 0, playing = false, swap = null;

  function paint() {
    barEls.forEach(function (b, i) { b.classList.toggle("done", i < idx); if (i !== idx) b.firstChild.style.width = ""; });
    if (dur > 0) {
      var p = Math.min(1, (performance.now() - startAt) / dur);
      barEls[idx].firstChild.style.width = (p * 100) + "%";
      if (p < 1) raf = requestAnimationFrame(paint);
    } else barEls[idx].firstChild.style.width = "100%";
  }
  function show(i, immediate) {
    if (i < 0 || i >= scenes.length) return;
    clearTimeout(timer); clearTimeout(swap); cancelAnimationFrame(raf);
    if (!immediate) { stage.classList.remove("turning"); void stage.offsetWidth; stage.classList.add("turning"); }
    var go = function () {
      scenes.forEach(function (s, k) { if (k !== i) s.classList.remove("is-on"); });
      // re-trigger the text and camera animations, also when a scene comes back
      scenes[i].classList.remove("is-on"); void scenes[i].offsetWidth; scenes[i].classList.add("is-on");
      idx = i;
      dur = (parseFloat(scenes[i].getAttribute("data-time")) || 0) * 1000;
      startAt = performance.now();
      if (dur > 0) timer = setTimeout(function () { show(idx + 1); }, dur);
      paint();
    };
    // the scene changes at the whitest moment of the haze
    if (immediate) go(); else swap = setTimeout(go, 500);
  }

  function open() {
    if (playing) return;
    playing = true;
    stage.classList.add("playing");
    setMusic(true);
    loadRest();
    scenes[0].classList.remove("idle");
    show(0, true);
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
    if (document.hidden) { clearTimeout(timer); cancelAnimationFrame(raf); }
    else if (playing && dur > 0) show(idx, true);
  });
  $("#replay").addEventListener("click", function () { show(0); });
  window.__famShow = function (i) { if (!playing) open(); show(i, true); }; // test hook
})();
