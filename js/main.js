/*
 * Wedding invitation — behaviour.
 * Renders content from INVITE (config.js) and drives every animation.
 */
(function () {
  "use strict";

  var C = window.INVITE;
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function get(path) {
    return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, C);
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* Two laurel branches curving up around the monogram, as SVG paths */
  function laurelWreath() {
    var out = "", cx = 160, cy = 132;
    [-1, 1].forEach(function (side) {
      // branch: from the bottom centre, sweeping up the side
      // right branch sweeps clockwise through 0, left branch anticlockwise through PI (SVG y points down)
      var a0 = Math.PI / 2 - side * 0.25, a1 = side > 0 ? -Math.PI / 2 + 0.55 : 3 * Math.PI / 2 - 0.55;
      var R = 112, pts = [];
      for (var i = 0; i <= 40; i++) {
        var t = i / 40, a = a0 + (a1 - a0) * t;
        pts.push([cx + Math.cos(a) * R * (1 - t * 0.04), cy + Math.sin(a) * R * 0.92]);
      }
      out += '<path class="wr-stem" d="M' + pts.map(function (p) { return p[0].toFixed(1) + " " + p[1].toFixed(1); }).join(" L") + '"/>';
      for (var k = 2; k < 40; k += 2) {
        var p = pts[k], q = pts[k + 1], tx = q[0] - p[0], ty = q[1] - p[1], L = Math.hypot(tx, ty) || 1;
        tx /= L; ty /= L;
        var scale = 1 - k / 52;
        [1, -1].forEach(function (s2, j) {
          var ang = Math.atan2(ty, tx) + s2 * 0.95;
          var len = 15 * scale, w = 4.6 * scale;
          var dx = Math.cos(ang), dy = Math.sin(ang), nx = -dy, ny = dx;
          var tipx = p[0] + dx * len, tipy = p[1] + dy * len;
          var c1x = p[0] + dx * len * .45 + nx * w, c1y = p[1] + dy * len * .45 + ny * w;
          var c2x = p[0] + dx * len * .45 - nx * w, c2y = p[1] + dy * len * .45 - ny * w;
          out += '<path class="wr-leaf" d="M' + p[0].toFixed(1) + " " + p[1].toFixed(1) + " Q" + c1x.toFixed(1) + " " + c1y.toFixed(1) + " " + tipx.toFixed(1) + " " + tipy.toFixed(1) +
            " Q" + c2x.toFixed(1) + " " + c2y.toFixed(1) + " " + p[0].toFixed(1) + " " + p[1].toFixed(1) + '"/>';
        });
      }
      // berries near the top
      var tip = pts[40];
      out += '<circle class="wr-berry" cx="' + tip[0].toFixed(1) + '" cy="' + tip[1].toFixed(1) + '" r="2.2"/>';
    });
    return out;
  }

  /* =========================================================
     Render content
     ========================================================= */
  function render() {
    document.title = C.couple.shortNames + " · " + C.event;

    $$("[data-bind]").forEach(function (el) {
      var v = get(el.getAttribute("data-bind"));
      if (v != null) el.textContent = v;
    });

    function detail(p) {
      return (p.lines || []).map(esc).join("<br>");
    }
    $("#groomDetail").innerHTML = detail(C.couple.groom);
    $("#brideDetail").innerHTML = detail(C.couple.bride);

    // Intro paragraph, one span per word; words inside *asterisks* get script styling
    $("#introText").innerHTML = C.intro.split("*").map(function (chunk, i) {
      var cls = i % 2 ? "w name" : "w";
      return chunk.trim().split(/\s+/).filter(Boolean).map(function (w) {
        return '<span class="' + cls + '">' + esc(w) + "</span>";
      }).join(" ");
    }).join(" ");


    var tl = $("#timeline");
    tl.innerHTML = C.timeline.map(function (t, i) {
      // an evening sky with a crescent and twinkling stars crowns a single-event programme
      var art = C.timeline.length === 1 ?
        '<svg class="prog-sky" viewBox="0 0 300 90" aria-hidden="true">' +
          '<defs><linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a1f3d"/><stop offset="1" stop-color="#6b3a55"/></linearGradient></defs>' +
          '<path d="M0 0h300v62C240 86 160 92 90 84 50 80 20 72 0 62z" fill="url(#skyG)"/>' +
          '<g class="stars" fill="#fff">' +
            [[30,18,1.4],[62,40,1],[96,14,1.2],[128,34,.9],[172,12,1.3],[206,30,1],[244,16,1.1],[270,42,1.3],[150,52,.8],[80,56,.9],[226,54,1]].map(function (st, k) {
              return '<circle cx="' + st[0] + '" cy="' + st[1] + '" r="' + st[2] + '" style="--k:' + k + '"/>';
            }).join("") +
          '</g>' +
          '<path class="moon" d="M214 24a16 16 0 1 0 14 24 13 13 0 1 1-14-24z" fill="#f3d27a"/>' +
          '<g class="lanterns" fill="#f3d27a"><circle cx="54" cy="70" r="2.2"/><circle cx="120" cy="76" r="1.8"/><circle cx="180" cy="74" r="2"/><circle cx="246" cy="68" r="1.8"/></g>' +
        '</svg>' : "";
      return '<li data-reveal="up" style="--d:' + i + '">' + art + '<div class="tl-body"><h3>' + esc(t.title) + '</h3><p class="when">' +
        esc(t.when) + "</p>" + (t.time ? '<p class="time">' + esc(t.time) + "</p>" : "") + "<p>" + esc(t.text) + "</p></div></li>";
    }).join("");
    tl.classList.toggle("single", C.timeline.length === 1);

    $("#mapBtn").href = C.venue.mapUrl;
    var mapLink = $("#mapLink");
    if (mapLink) mapLink.href = C.venue.mapUrl;
    setupCalendar();
    var mono = $("#monogram");
    if (mono) mono.textContent = C.couple.groom.initial + " & " + C.couple.bride.initial;
    var wreath = $("#wreath");
    if (wreath) wreath.innerHTML = laurelWreath();

    $$("[data-icon]").forEach(function (el) { el.innerHTML = ART.icon(el.getAttribute("data-icon")); });

    document.documentElement.style.setProperty("--env-pattern", ART.envelopePattern());
    // the photo section only appears once a real photo is set in config.js
    var photo = $("#photoInner");
    if (C.photo) photo.style.backgroundImage = 'url("' + C.photo + '")';
    else $("#photo").hidden = true;
  }

  /* =========================================================
     Particle bursts (envelope opening, scratch reveal)
     ========================================================= */
  var Burst = (function () {
    var cv = $("#burst"), ctx = cv.getContext("2d"), parts = [], running = false, dpr = 1;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 3);
      cv.width = innerWidth * dpr;
      cv.height = innerHeight * dpr;
    }
    resize();
    addEventListener("resize", resize);

    function heart(c, s) {
      c.beginPath();
      c.moveTo(0, s * .35);
      c.bezierCurveTo(-s * 1.1, -s * .35, -s * .45, -s * 1.05, 0, -s * .45);
      c.bezierCurveTo(s * .45, -s * 1.05, s * 1.1, -s * .35, 0, s * .35);
      c.fill();
    }

    function frame() {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      parts = parts.filter(function (p) { return p.life > 0; });
      parts.forEach(function (p) {
        p.vx *= p.drag; p.vy = p.vy * p.drag + p.g;
        p.x += p.vx + Math.sin(p.life * .05 + p.seed) * p.sway;
        p.y += p.vy;
        p.rot += p.vr;
        p.life--;
        ctx.save();
        ctx.globalAlpha = Math.min(1, p.life / 40);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        if (p.shape === "heart") heart(ctx, p.size);
        else if (p.shape === "petal") { ctx.beginPath(); ctx.ellipse(0, 0, p.size, p.size * .55, 0, 0, Math.PI * 2); ctx.fill(); }
        else { ctx.beginPath(); ctx.arc(0, 0, p.size * .5, 0, Math.PI * 2); ctx.fill(); }
        ctx.restore();
      });
      if (parts.length) requestAnimationFrame(frame);
      else { running = false; ctx.clearRect(0, 0, cv.width, cv.height); }
    }

    function add(p) {
      parts.push(p);
      if (!running) { running = true; requestAnimationFrame(frame); }
    }

    return {
      explode: function (x, y, n, colors, shapes, power) {
        if (reduceMotion) return;
        for (var i = 0; i < n; i++) {
          var a = Math.random() * Math.PI * 2, sp = (2 + Math.random() * 9) * (power || 1);
          add({
            x: x, y: y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 2,
            g: .14, drag: .975, sway: .4, seed: Math.random() * 9,
            rot: Math.random() * 6, vr: (Math.random() - .5) * .2,
            size: 3 + Math.random() * 6, life: 110 + Math.random() * 90,
            color: colors[i % colors.length], shape: shapes[i % shapes.length],
          });
        }
      },
      rain: function (n, colors, shapes) {
        if (reduceMotion) return;
        for (var i = 0; i < n; i++) {
          add({
            x: Math.random() * innerWidth, y: -20 - Math.random() * innerHeight * .6,
            vx: (Math.random() - .5) * 1.2, vy: 1.5 + Math.random() * 2.5,
            g: .02, drag: .995, sway: .8, seed: Math.random() * 9,
            rot: Math.random() * 6, vr: (Math.random() - .5) * .1,
            size: 3 + Math.random() * 5, life: 240 + Math.random() * 120,
            color: colors[i % colors.length], shape: shapes[i % shapes.length],
          });
        }
      },
    };
  })();

  /* =========================================================
     Floating sparkles over the hero
     ========================================================= */
  function sparkles() {
    var cv = $("#sparkles"), ctx = cv.getContext("2d"), dpr = 1, pts = [], alpha = 1;
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 3);
      cv.width = innerWidth * dpr;
      cv.height = innerHeight * dpr;
    }
    resize();
    addEventListener("resize", resize);

    // pre-rendered soft dot
    var sprite = document.createElement("canvas");
    sprite.width = sprite.height = 32;
    var sg = sprite.getContext("2d"), grd = sg.createRadialGradient(16, 16, 0, 16, 16, 16);
    grd.addColorStop(0, "rgba(255,248,232,1)");
    grd.addColorStop(.3, "rgba(255,226,190,.55)");
    grd.addColorStop(1, "rgba(255,226,190,0)");
    sg.fillStyle = grd;
    sg.fillRect(0, 0, 32, 32);

    for (var i = 0; i < 46; i++) {
      pts.push({ x: Math.random(), y: Math.random(), s: 4 + Math.random() * 12, v: .00012 + Math.random() * .00035, ph: Math.random() * 6.3, dx: (Math.random() - .5) * .0002 });
    }

    function frame(t) {
      var hero = $("#hero").getBoundingClientRect();
      alpha = clamp(hero.bottom / hero.height, 0, 1);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      if (alpha > 0.02) {
        var colLeft = Math.max(0, (innerWidth - 520) / 2), colW = Math.min(innerWidth, 520);
        pts.forEach(function (p) {
          p.y -= p.v; p.x += p.dx;
          if (p.y < -.05) { p.y = 1.05; p.x = Math.random(); }
          var tw = .45 + .55 * Math.sin(t * .0015 + p.ph);
          ctx.globalAlpha = alpha * tw * .9;
          ctx.drawImage(sprite, colLeft + p.x * colW - p.s / 2, p.y * innerHeight - p.s / 2, p.s, p.s);
        });
      }
      requestAnimationFrame(frame);
    }
    if (!reduceMotion) requestAnimationFrame(frame);
  }

  /* =========================================================
     Music
     ========================================================= */
  var music = window.createMusic(C.music);
  var sealLabel = { line1: C.couple.groom.initial + " & " + C.couple.bride.initial };
  var musicBtn = $("#music");
  function setMusic(on) {
    musicBtn.setAttribute("aria-pressed", String(on));
    musicBtn.classList.toggle("is-playing", on);
    if (on) music.play().catch(function () { setMusic(false); });
    else music.pause();
  }
  musicBtn.addEventListener("click", function () {
    setMusic(musicBtn.getAttribute("aria-pressed") !== "true");
  });

  /* =========================================================
     Envelope opening
     ========================================================= */
  // shows the site once the envelope's light burst covers the screen
  function revealSite() {
    window.scrollTo(0, 0);
    document.body.classList.remove("is-locked");
    document.body.classList.add("is-open");
    $("#envelope").classList.add("is-flashed");
    musicBtn.classList.add("is-visible");
    // a tap before the hero was built: build it now, behind the white flash
    if (!heroBuilt) makeHero();
    if (hero3d) { hero3d.setActive(true); hero3d.intro(); }
    if (scroller) scroller.start();
    autoAdvance();
  }

  /* After the opening, guests sometimes wait, unsure whether to scroll. The cue
     says so plainly, tapping it scrolls on, and if nobody has touched the page
     once the names are written, it glides gently into the welcome text. */
  var advanced = false;
  function scrollOn() {
    if (advanced) return;
    advanced = true;
    var target = $("#intro");
    var lenis = scroller && scroller.lenis;
    if (lenis) lenis.scrollTo(target, { duration: 4.2, easing: function (t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; } });
    else target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  }
  function autoAdvance() {
    var stop = function () { advanced = true; cleanup(); };
    var events = ["wheel", "touchstart", "keydown"];
    function cleanup() { events.forEach(function (e) { window.removeEventListener(e, stop); }); }
    events.forEach(function (e) { window.addEventListener(e, stop, { passive: true, once: true }); });
    setTimeout(function () {
      cleanup();
      if (!advanced && window.scrollY < 40) scrollOn();
    }, 6500);
  }
  $("#scrollCue").addEventListener("click", function () { advanced = false; scrollOn(); });

  function openEnvelope() {
    var env = $("#envelope");
    if (env.classList.contains("is-opening")) return;
    if (env.classList.contains("gl-pending")) {
      // still preparing: start the music inside this tap, open as soon as it is ready
      window.__tapQueued = true;
      setMusic(true);
      return;
    }
    env.classList.add("is-opening");
    setMusic(true);
    // never build the hero scene in the middle of the opening: it would stall a frame
    if (!heroBuilt) clearTimeout(heroTimer);

    if (glEnv) {
      glEnv.open().then(function () { glEnv.destroy(); env.remove(); });
      return;
    }

    var seal = $("#seal").getBoundingClientRect();
    var cx = seal.left + seal.width / 2, cy = seal.top + seal.height / 2;
    var gold = ["#f3d27a", "#fff1c1", "#e9b949", "#ffffff", "#f2c4c4"];

    Burst.explode(cx, cy, 40, gold, ["dot", "dot", "petal"], .6);
    setTimeout(function () { env.classList.add("flap-open"); }, 350);
    setTimeout(function () {
      env.classList.add("is-glowing");
      Burst.explode(innerWidth / 2, innerHeight * .34, 120, gold, ["dot", "petal", "dot", "heart"], 1.1);
    }, 1300);
    setTimeout(function () {
      revealSite();
      env.classList.add("is-gone");
    }, 2300);
    setTimeout(function () { env.remove(); }, 3400);
  }

  /* =========================================================
     Scroll reveal
     ========================================================= */
  function reveals() {
    // Chrome counts a fully clipped element as not intersecting, so "write" headings
    // (hidden with clip-path) are watched through their parent instead.
    var targets = new Map();
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        targets.get(e.target).forEach(function (el) { el.classList.add("in"); });
        io.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.15 });
    $$("[data-reveal]").forEach(function (el) {
      var t = el.getAttribute("data-reveal") === "write" ? el.parentElement : el;
      if (!targets.has(t)) { targets.set(t, []); io.observe(t); }
      targets.get(t).push(el);
    });
  }

  /* =========================================================
     Scroll-linked effects
     ========================================================= */
  function scrollFx() {
    var hero = $("#hero"), heroContent = $("#heroContent"), heroArt = $("#heroArt");
    var intro = $("#intro"), words = $$(".w", intro), photo = $("#photoInner"), frame = $(".photo-frame");
    var ticking = false;

    function update() {
      ticking = false;
      var y = window.scrollY, vh = innerHeight, hh = hero.offsetHeight;

      if (y < hh * 1.2) {
        heroContent.style.transform = "translateY(" + (y * .38) + "px)";
        heroContent.style.opacity = clamp(1 - y / (hh * .7), 0, 1);
        heroArt.style.transform = "translateY(" + (y * .22) + "px)";
      }

      var r = intro.getBoundingClientRect();
      var p = clamp((vh * .55 - r.top) / (r.height - vh * .6), 0, 1);
      var lit = Math.round(p * 1.2 * words.length);
      words.forEach(function (w, i) { w.classList.toggle("on", i < lit); });
      intro.classList.toggle("is-done", lit >= words.length);

      var fr = frame.getBoundingClientRect();
      if (fr.bottom > 0 && fr.top < vh) {
        var q = (fr.top + fr.height / 2 - vh / 2) / vh;
        photo.style.transform = "translateY(" + (q * -14) + "%)";
      }

      musicBtn.classList.toggle("on-light", y > hh - 70);
    }

    addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    addEventListener("resize", update);
    update();
  }

  /* =========================================================
     Scratch to reveal
     ========================================================= */
  function scratchCard() {
    var section = $("#scratch"), cv = $("#scratchCanvas"), ctx = cv.getContext("2d", { willReadFrequently: true });
    var HEART = new Path2D("M150 252C112 222 22 166 22 92 22 50 52 22 90 22c26 0 46 14 60 36 14-22 34-36 60-36 38 0 68 28 68 70 0 74-90 130-128 160z");
    var dpr, w, h, total = 0, drawing = false, last = null, moves = 0, done = false;

    function paint() {
      // clientWidth ignores the reveal transform, so the canvas is sized at its final scale
      dpr = Math.min(window.devicePixelRatio || 1, 3);
      w = cv.width = Math.round(cv.clientWidth * dpr);
      h = cv.height = Math.round(cv.clientHeight * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalCompositeOperation = "source-over";
      ctx.scale(w / 300, h / 270);

      var g = ctx.createLinearGradient(30, 20, 270, 250);
      g.addColorStop(0, "#f6c9d3");
      g.addColorStop(.45, "#d06d88");
      g.addColorStop(1, "#8f2e4a");
      ctx.fillStyle = g;
      ctx.fill(HEART);

      // glitter
      ctx.save();
      ctx.clip(HEART);
      for (var i = 0; i < 2600; i++) {
        var x = 20 + Math.random() * 260, y = 20 + Math.random() * 235, r = Math.random() * 1.3 + .3;
        ctx.fillStyle = Math.random() > .45 ? "rgba(255,240,245," + (.35 + Math.random() * .6) + ")" : "rgba(110,20,45," + (.2 + Math.random() * .3) + ")";
        ctx.beginPath(); ctx.arc(x, y, r, 0, 6.283); ctx.fill();
      }
      var sheen = ctx.createLinearGradient(40, 40, 200, 200);
      sheen.addColorStop(0, "rgba(255,255,255,.35)");
      sheen.addColorStop(.35, "rgba(255,255,255,0)");
      ctx.fillStyle = sheen;
      ctx.fill(HEART);
      ctx.restore();

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      total = countOpaque();
    }

    function countOpaque() {
      var data = ctx.getImageData(0, 0, w, h).data, n = 0;
      for (var i = 3; i < data.length; i += 64) if (data[i] > 20) n++;
      return n;
    }

    function pos(e) {
      var r = cv.getBoundingClientRect();
      return { x: (e.clientX - r.left) * (w / r.width), y: (e.clientY - r.top) * (h / r.height) };
    }

    function scratch(p) {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineCap = ctx.lineJoin = "round";
      ctx.lineWidth = 34 * dpr;
      ctx.beginPath();
      ctx.moveTo(last ? last.x : p.x, last ? last.y : p.y);
      ctx.lineTo(p.x + .1, p.y + .1);
      ctx.stroke();
      last = p;
      if (++moves % 10 === 0) check();
    }

    function check() {
      if (!done && total && countOpaque() / total < .5) reveal();
    }

    function reveal() {
      if (done) return;
      done = true;
      section.classList.add("is-revealed");
      var r = cv.getBoundingClientRect();
      var colors = ["#8e2c45", "#c4566f", "#e79aab", "#f5c8d2", "#b0283f"];
      Burst.explode(r.left + r.width / 2, r.top + r.height / 2, 110, colors, ["heart", "petal", "dot"], 1);
      setTimeout(function () { Burst.rain(70, colors, ["petal", "dot", "heart"]); }, 250);
    }

    cv.addEventListener("pointerdown", function (e) {
      if (done) return;
      section.classList.add("is-scratching");
      drawing = true; last = null;
      cv.setPointerCapture(e.pointerId);
      scratch(pos(e));
    });
    cv.addEventListener("pointermove", function (e) { if (drawing) scratch(pos(e)); });
    ["pointerup", "pointercancel"].forEach(function (t) {
      cv.addEventListener(t, function () { drawing = false; last = null; check(); });
    });
    // keyboard users: Enter or Space reveals
    cv.tabIndex = 0;
    cv.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); reveal(); }
    });

    paint();
    var rw = cv.clientWidth;
    addEventListener("resize", function () {
      if (!done && Math.abs(cv.clientWidth - rw) > 2) { rw = cv.clientWidth; paint(); }
    });
  }

  /* =========================================================
     Countdown
     ========================================================= */
  function countdown() {
    var target = new Date(C.date).getTime();
    var els = { d: $('[data-cd="d"]'), h: $('[data-cd="h"]'), m: $('[data-cd="m"]'), s: $('[data-cd="s"]') };
    function set(el, v) {
      var t = String(v).padStart(2, "0");
      if (el.textContent !== t) {
        el.textContent = t;
        el.classList.remove("tick");
        void el.offsetWidth;
        el.classList.add("tick");
      }
    }
    function tick() {
      var diff = Math.max(0, target - Date.now());
      set(els.d, Math.floor(diff / 864e5));
      set(els.h, Math.floor(diff / 36e5) % 24);
      set(els.m, Math.floor(diff / 6e4) % 60);
      set(els.s, Math.floor(diff / 1e3) % 60);
    }
    tick();
    setInterval(tick, 1000);
  }

  /* =========================================================
     Save the Date: links for every calendar plus an .ics file
     ========================================================= */
  function setupCalendar() {
    if (!C.calendar) return;
    var cal = C.calendar;
    var location = C.venue.name + ", " + C.venue.address;
    var details = cal.details || "";
    var toIso = function (compact) { // 20261217T143000Z -> 2026-12-17T14:30:00Z
      return compact.replace(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z$/, "$1-$2-$3T$4:$5:$6Z");
    };
    var google = "https://calendar.google.com/calendar/render?action=TEMPLATE" +
      "&text=" + encodeURIComponent(cal.title) + "&dates=" + cal.start + "/" + cal.end +
      "&details=" + encodeURIComponent(details) + "&location=" + encodeURIComponent(location);
    var outlook = "https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent" +
      "&subject=" + encodeURIComponent(cal.title) + "&startdt=" + encodeURIComponent(toIso(cal.start)) + "&enddt=" + encodeURIComponent(toIso(cal.end)) +
      "&body=" + encodeURIComponent(details) + "&location=" + encodeURIComponent(location);
    var yahoo = "https://calendar.yahoo.com/?v=60&view=d&type=20" +
      "&title=" + encodeURIComponent(cal.title) + "&st=" + cal.start + "&et=" + cal.end +
      "&desc=" + encodeURIComponent(details) + "&in_loc=" + encodeURIComponent(location);
    var icsText = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Dawat-E-Valima//Invitation//EN", "CALSCALE:GREGORIAN", "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:" + cal.start + "-valima@invitation",
      "DTSTAMP:" + new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, ""),
      "DTSTART:" + cal.start, "DTEND:" + cal.end,
      "SUMMARY:" + cal.title.replace(/,/g, "\\,"),
      "DESCRIPTION:" + details.replace(/,/g, "\\,"),
      "LOCATION:" + location.replace(/,/g, "\\,"),
      "BEGIN:VALARM", "TRIGGER:-P1D", "ACTION:DISPLAY", "DESCRIPTION:" + cal.title, "END:VALARM",
      "END:VEVENT", "END:VCALENDAR",
    ].join("\r\n");
    var icsUrl = "data:text/calendar;charset=utf-8," + encodeURIComponent(icsText);

    var g = $("#calGoogle"), ap = $("#calApple"), ol = $("#calOutlook"), ya = $("#calYahoo"), ic = $("#calIcs");
    if (g) g.href = google;
    if (ol) ol.href = outlook;
    if (ya) ya.href = yahoo;
    if (ap) ap.href = icsUrl;
    if (ic) ic.href = icsUrl;
    var sub = $("#sheetSub");
    if (sub) sub.textContent = C.dateLabel + " · " + (C.timeline[0] && C.timeline[0].time ? C.timeline[0].time : C.timeLabel);
    $("#calBtn").href = google;

    var sheet = $("#calSheet");
    var lastFocus = null;
    function openSheet() {
      lastFocus = document.activeElement;
      sheet.hidden = false;
      requestAnimationFrame(function () { sheet.classList.add("is-open"); });
      document.body.classList.add("sheet-open");
      var first = sheet.querySelector(".sheet-item");
      if (first) first.focus({ preventScroll: true });
    }
    function closeSheet() {
      sheet.classList.remove("is-open");
      document.body.classList.remove("sheet-open");
      setTimeout(function () { sheet.hidden = true; }, 320);
      if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    }
    $$("[data-close]", sheet).forEach(function (el) { el.addEventListener("click", closeSheet); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !sheet.hidden) closeSheet(); });
    $$(".sheet-item", sheet).forEach(function (el) { el.addEventListener("click", function () { setTimeout(closeSheet, 250); }); });
    var openers = [$("#saveDateBtn"), $("#calBtn")];
    openers.forEach(function (btn) {
      if (!btn) return;
      btn.addEventListener("click", function (e) { e.preventDefault(); openSheet(); });
    });
  }

  /* =========================================================
     Boot
     ========================================================= */
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.scrollTo(0, 0);

  render();

  // Phones get lighter effects: no blur filters, capped pixel ratios
  var isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  if (isTouch) document.documentElement.classList.add("touch");

  // WebGL scenes and GSAP choreography when available; CSS/SVG versions otherwise
  var useGL = !!(window.GL && GL.available);
  if (!useGL) document.documentElement.classList.remove("gl-early");
  var hero3d = null, scroller = null, glEnv = null;

  // The hero scene is built after the envelope is on screen, so the envelope
  // never waits behind it. The scroll choreography waits for it and the fonts.
  var heroDone, heroTimer = null, heroBuilt = false;
  var heroReady = new Promise(function (resolve) { heroDone = resolve; });
  function makeHero() {
    if (heroBuilt) return;
    heroBuilt = true;
    clearTimeout(heroTimer);
    if (useGL) {
      try {
        hero3d = GL.createHero($("#heroArt"), { touch: isTouch });
        hero3d.setActive(false);
        $("#heroArt").classList.add("is-gl");
      } catch (err) { hero3d = null; }
    }
    if (!hero3d) { $("#heroArt").innerHTML = ART.heroScene(); sparkles(); }
    heroDone();
  }

  // Split text and measure scroll positions only once the web fonts are in
  var fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  var timeout = new Promise(function (r) { setTimeout(r, 2500); });
  Promise.all([Promise.race([fontsReady, timeout]), heroReady]).then(function () {
    if (useGL) {
      try {
        scroller = GL.initScroll({
          hero3d: hero3d,
          reduceMotion: reduceMotion,
          touch: isTouch,
          onLight: function (on) { musicBtn.classList.toggle("on-light", on); },
        });
        GL.mountPeonies();
      } catch (err) { scroller = null; }
    }
    if (!scroller) { reveals(); scrollFx(); }
    // the hero can be built after the opening (see openEnvelope); start scrolling then
    if (scroller && document.body.classList.contains("is-open")) scroller.start();
    window.__invite = { scroller: scroller, hero3d: hero3d };
    // compile the hero's shaders now, while the envelope is on screen, so the
    // opening never stalls on the first hero frame
    if (hero3d) hero3d.warmup();
  });
  scratchCard();
  countdown();

  var envelope = $("#envelope");
  var posterMode = document.documentElement.classList.contains("poster-mode");
  // The still of the envelope goes on screen before any 3D work starts, so the
  // first thing a guest sees is the finished envelope, not a blank card.
  function posterShown() {
    var img = $("#envPoster");
    if (!img || !img.getAttribute("src")) return Promise.resolve();
    var ready = img.decode ? img.decode().catch(function () {}) : new Promise(function (r) { img.onload = img.onerror = r; });
    var limit = new Promise(function (r) { setTimeout(r, 3000); });
    return Promise.race([ready, limit]).then(function () {
      return new Promise(function (r) { requestAnimationFrame(function () { requestAnimationFrame(r); }); });
    });
  }

  if (useGL) {
    envelope.classList.add("gl-pending");
    posterShown()
      .then(function () {
        return GL.createEnvelope($(".env-box"), { onTap: openEnvelope, onFlash: revealSite, reduceMotion: reduceMotion, seal: sealLabel, touch: isTouch });
      })
      .then(function (e) {
        glEnv = e;
        envelope.classList.add("has-gl");
        envelope.classList.remove("gl-pending");
        if (posterMode) { e.freeze(0); window.__posterReady = true; return; }
        // a tap that came early opens the envelope once its first frame is drawn
        if (window.__tapQueued) { e.firstFrame.then(openEnvelope); return; }
        music.prefetch();
        // after the envelope has faded in, so its first second stays perfectly smooth
        heroTimer = setTimeout(makeHero, 700);
      })
      .catch(function () {
        // the 3D envelope could not start: show the CSS envelope instead
        envelope.classList.remove("gl-pending");
        envelope.classList.add("gl-failed");
        document.documentElement.classList.remove("gl-early");
        makeHero();
      });
  } else {
    music.prefetch();
    makeHero();
  }
  envelope.addEventListener("click", openEnvelope);
  $("#seal").addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openEnvelope(); }
  });
})();
