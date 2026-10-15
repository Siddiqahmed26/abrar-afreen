/*
 * Family invitation: the 3D envelope opens onto a story of cream-and-gold scenes
 * under Mughal arches (lanterns, curtains, flowers, a gold couple silhouette).
 * The story plays by itself; a tap moves it on, a swipe goes either way.
 */
(function () {
  "use strict";

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  if (isTouch) document.documentElement.classList.add("touch");

  var EVENT = {
    date: "2026-12-17T20:00:00+05:30",
    title: "Dawat-E-Valima · Abrar & Afreen",
    start: "20261217T143000Z",
    end: "20261217T180000Z",
    details: "Dinner from 8:00 PM onwards at Shams Convention Centre.",
    venue: "Shams Convention Centre, #67 Haines Road, Sulthangunta, Shivaji Nagar, Bengaluru 560001",
    map: "https://www.google.com/maps/search/?api=1&query=Shams+Convention+Centre%2C+67+Haines+Road%2C+Sulthangunta%2C+Shivaji+Nagar%2C+Bengaluru+560001",
  };

  /* =========================================================
     Art (inline SVG, drawn to the size of the stage)
     ========================================================= */
  var DEFS =
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
    '<linearGradient id="fGold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6dc96"/><stop offset=".35" stop-color="#c99a3a"/><stop offset=".7" stop-color="#9b7020"/><stop offset="1" stop-color="#e2bd6a"/></linearGradient>' +
    '<linearGradient id="fGoldV" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3d68a"/><stop offset=".5" stop-color="#b98a2c"/><stop offset="1" stop-color="#8a6418"/></linearGradient>' +
    '<radialGradient id="fPanel" cx="50%" cy="38%" r="70%"><stop offset="0" stop-color="#fffdf8"/><stop offset=".55" stop-color="#fbf4e6"/><stop offset="1" stop-color="#efe0c3"/></radialGradient>' +
    '<linearGradient id="fDrape" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fffaf0"/><stop offset=".25" stop-color="#efe3cc"/><stop offset=".5" stop-color="#fffdf7"/><stop offset=".75" stop-color="#eadcc1"/><stop offset="1" stop-color="#fbf4e6"/></linearGradient>' +
    '<radialGradient id="fLamp" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fffbe6"/><stop offset=".45" stop-color="#ffd987"/><stop offset="1" stop-color="#e09a2e" stop-opacity=".0"/></radialGradient>' +
    '<radialGradient id="fRose" cx="45%" cy="40%" r="65%"><stop offset="0" stop-color="#fffefa"/><stop offset=".6" stop-color="#f6ecd9"/><stop offset="1" stop-color="#dcc7a0"/></radialGradient>' +
    '<radialGradient id="fBlush" cx="45%" cy="40%" r="65%"><stop offset="0" stop-color="#fff7f2"/><stop offset=".6" stop-color="#f3dccf"/><stop offset="1" stop-color="#d9b3a0"/></radialGradient>' +
    '<linearGradient id="fFloor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ead9b8" stop-opacity="0"/><stop offset=".4" stop-color="#e3cfa8" stop-opacity=".55"/><stop offset="1" stop-color="#d4bb8c" stop-opacity=".8"/></linearGradient>' +
    '<linearGradient id="fSil" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9b25e"/><stop offset=".5" stop-color="#b48526"/><stop offset="1" stop-color="#8d661b"/></linearGradient>' +
    '<linearGradient id="fVeil" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8c97e" stop-opacity=".95"/><stop offset="1" stop-color="#e8c97e" stop-opacity=".45"/></linearGradient>' +
    '</defs></svg>';

  function f(n) { return Math.round(n * 10) / 10; }

  // A Mughal arch: a pointed arch whose edge is scalloped into small lobes.
  function archPath(W, H, m, top, ys, lobes) {
    var cx = W / 2;
    function curve(t, side) { // cubic from the springline to the apex
      var x0 = side < 0 ? m : W - m, y0 = ys, x3 = cx, y3 = top;
      var x1 = x0, y1 = ys - (ys - top) * 0.58;
      var x2 = cx + side * (cx - m) * 0.32, y2 = top + (ys - top) * 0.12;
      var u = 1 - t;
      return [u * u * u * x0 + 3 * u * u * t * x1 + 3 * u * t * t * x2 + t * t * t * x3,
              u * u * u * y0 + 3 * u * u * t * y1 + 3 * u * t * t * y2 + t * t * t * y3];
    }
    var d = "M" + m + " " + H + " L" + m + " " + f(ys), i, p, q, r;
    for (i = 0; i < lobes; i++) {
      p = curve(i / lobes, -1); q = curve((i + 1) / lobes, -1);
      r = Math.hypot(q[0] - p[0], q[1] - p[1]) * 0.58;
      d += " A" + f(r) + " " + f(r) + " 0 0 1 " + f(q[0]) + " " + f(q[1]);
    }
    for (i = lobes; i > 0; i--) {
      p = curve(i / lobes, 1); q = curve((i - 1) / lobes, 1);
      r = Math.hypot(q[0] - p[0], q[1] - p[1]) * 0.58;
      d += " A" + f(r) + " " + f(r) + " 0 0 1 " + f(q[0]) + " " + f(q[1]);
    }
    return d + " L" + (W - m) + " " + H;
  }

  function archSVG(W, H) {
    var ys = H * 0.36, top = H * 0.035, lobes = 5;
    var outer = archPath(W, H, W * 0.06, top, ys, lobes);
    var mid = archPath(W, H, W * 0.06 + 9, top + 11, ys + 4, lobes);
    var inner = archPath(W, H, W * 0.06 + 16, top + 20, ys + 8, lobes);
    var cx = W / 2;
    // pillars with capitals at the springline
    var pil = function (x, s) {
      var w = 22;
      return '<rect x="' + f(x - w / 2) + '" y="' + f(ys - 6) + '" width="' + w + '" height="10" rx="2" fill="url(#fGoldV)"/>' +
        '<rect x="' + f(x - w / 2 + 3) + '" y="' + f(ys + 6) + '" width="' + (w - 6) + '" height="4" rx="1" fill="url(#fGoldV)" opacity=".8"/>' +
        '<line x1="' + f(x + s * 3) + '" y1="' + f(ys + 14) + '" x2="' + f(x + s * 3) + '" y2="' + H + '" stroke="url(#fGoldV)" stroke-width="1" opacity=".55"/>';
    };
    return '<svg viewBox="0 0 ' + f(W) + ' ' + f(H) + '" preserveAspectRatio="none">' +
      '<path d="' + outer + '" fill="none" stroke="url(#fGold)" stroke-width="4.5"/>' +
      '<path d="' + mid + '" fill="none" stroke="url(#fGold)" stroke-width="1.2" stroke-dasharray="1.5 5" stroke-linecap="round"/>' +
      '<path d="' + inner + ' Z" fill="url(#fPanel)" stroke="url(#fGold)" stroke-width="1.6"/>' +
      pil(W * 0.06, 1) + pil(W - W * 0.06, -1) +
      // finial at the apex
      '<path d="M' + f(cx) + ' ' + f(top - 26) + ' c5 8 8 12 0 20 c-8 -8 -5 -12 0 -20z" fill="url(#fGoldV)"/>' +
      '<circle cx="' + f(cx) + '" cy="' + f(top - 1) + '" r="3.5" fill="url(#fGoldV)"/>' +
      '</svg>';
  }

  function curtainsSVG(W, H) {
    var cw = W * 0.3;
    function drape(side) {
      var x0 = side < 0 ? 0 : W, xi = side < 0 ? cw : W - cw, tie = H * 0.78;
      var d = "M" + x0 + " 0 L" + f(xi) + " 0 C" + f(xi - side * cw * 0.1) + " " + f(H * 0.35) + " " + f(x0 - side * -cw * 0.42) + " " + f(tie * 0.85) + " " + f(x0 + (side < 0 ? cw * 0.34 : -cw * 0.34)) + " " + f(tie) +
        " C" + f(x0 + (side < 0 ? cw * 0.2 : -cw * 0.2)) + " " + f(H * 0.92) + " " + f(x0 + (side < 0 ? cw * 0.1 : -cw * 0.1)) + " " + f(H) + " " + x0 + " " + f(H) + " Z";
      var folds = "";
      for (var k = 1; k <= 4; k++) {
        var fx = x0 + (side < 0 ? 1 : -1) * cw * k * 0.19;
        folds += '<path d="M' + f(fx) + ' 0 Q' + f(fx + (side < 0 ? 1 : -1) * cw * 0.05) + ' ' + f(tie * 0.6) + ' ' + f(x0 + (side < 0 ? 1 : -1) * cw * 0.3) + ' ' + f(tie) + '" fill="none" stroke="#d8c39a" stroke-width="1" opacity=".55"/>';
      }
      var tx = x0 + (side < 0 ? cw * 0.3 : -cw * 0.3);
      return '<path d="' + d + '" fill="url(#fDrape)" stroke="#e2cfa8" stroke-width=".8"/>' + folds +
        '<ellipse cx="' + f(tx) + '" cy="' + f(tie) + '" rx="10" ry="5" fill="url(#fGoldV)"/>' +
        '<path d="M' + f(tx - 2) + ' ' + f(tie + 4) + ' l-3 22 M' + f(tx + 2) + ' ' + f(tie + 4) + ' l3 22" stroke="url(#fGoldV)" stroke-width="2" stroke-linecap="round"/>';
    }
    var swag = "M0 0 H" + W + " V" + f(H * 0.06) + " Q" + f(W * 0.75) + " " + f(H * 0.2) + " " + f(W / 2) + " " + f(H * 0.13) + " Q" + f(W * 0.25) + " " + f(H * 0.2) + " 0 " + f(H * 0.06) + " Z";
    return '<svg viewBox="0 0 ' + f(W) + ' ' + f(H) + '" preserveAspectRatio="none">' +
      drape(-1) + drape(1) +
      '<path d="' + swag + '" fill="url(#fDrape)" stroke="#e2cfa8" stroke-width=".8"/>' +
      '<path d="M0 ' + f(H * 0.06) + ' Q' + f(W * 0.25) + ' ' + f(H * 0.2) + ' ' + f(W / 2) + ' ' + f(H * 0.13) + ' Q' + f(W * 0.75) + ' ' + f(H * 0.2) + ' ' + W + ' ' + f(H * 0.06) + '" fill="none" stroke="url(#fGold)" stroke-width="2"/>' +
      '</svg>';
  }

  var LANTERN =
    '<svg viewBox="0 0 100 220" preserveAspectRatio="xMidYMin meet">' +
    '<line x1="50" y1="0" x2="50" y2="70" stroke="url(#fGoldV)" stroke-width="1.6"/>' +
    '<circle class="lamp-glow" cx="50" cy="128" r="46" fill="url(#fLamp)" opacity=".9"/>' +
    '<path d="M50 70 l5 6 h-10z" fill="url(#fGoldV)"/>' +
    '<path d="M30 92 Q50 66 70 92 Z" fill="url(#fGold)"/>' +
    '<rect x="28" y="92" width="44" height="5" rx="1.5" fill="url(#fGoldV)"/>' +
    '<path d="M31 97 L69 97 L74 125 L69 156 L31 156 L26 125 Z" fill="#fff3cf" fill-opacity=".55" stroke="url(#fGold)" stroke-width="2.2"/>' +
    '<path d="M50 97 V156 M38 97 L34 125 L38 156 M62 97 L66 125 L62 156" stroke="url(#fGold)" stroke-width="1.3" fill="none"/>' +
    '<path d="M26 125 H74" stroke="url(#fGold)" stroke-width="1" opacity=".7"/>' +
    '<ellipse cx="50" cy="132" rx="5" ry="9" fill="#fff7d6"/>' +
    '<rect x="29" y="156" width="42" height="5" rx="1.5" fill="url(#fGoldV)"/>' +
    '<path d="M33 161 Q50 186 67 161 Z" fill="url(#fGold)"/>' +
    '<path d="M50 180 c4 6 5 10 0 16 c-5 -6 -4 -10 0 -16z" fill="url(#fGoldV)"/>' +
    '</svg>';

  // A cluster of cream and blush roses with gold leaves, for the bottom corners.
  function rose(x, y, r, fill) {
    var s = '<g transform="translate(' + x + ' ' + y + ')">' +
      '<circle r="' + r + '" fill="url(#' + fill + ')" stroke="#cdb183" stroke-width=".8"/>';
    for (var k = 0; k < 5; k++) {
      var a = k / 5 * Math.PI * 2, px = Math.cos(a) * r * 0.62, py = Math.sin(a) * r * 0.62;
      s += '<path d="M' + f(px * 0.2) + ' ' + f(py * 0.2) + ' Q' + f(px * 1.5) + ' ' + f(py * 1.5 - r * 0.2) + ' ' + f(px * 1.05) + ' ' + f(py * 1.05) + '" fill="none" stroke="#c9ab78" stroke-width=".9" opacity=".8"/>';
    }
    s += '<path d="M0 0 m-' + f(r * 0.35) + ' 0 a' + f(r * 0.35) + ' ' + f(r * 0.3) + ' 0 1 1 ' + f(r * 0.5) + ' ' + f(r * 0.2) + ' a' + f(r * 0.22) + ' ' + f(r * 0.2) + ' 0 1 1 -' + f(r * 0.25) + ' -' + f(r * 0.3) + '" fill="none" stroke="#b9975f" stroke-width="1.1"/>';
    return s + '</g>';
  }
  function leaf(x, y, len, ang) {
    return '<g transform="translate(' + x + ' ' + y + ') rotate(' + ang + ')">' +
      '<path d="M0 0 Q' + f(len * 0.5) + ' -' + f(len * 0.28) + ' ' + len + ' 0 Q' + f(len * 0.5) + ' ' + f(len * 0.28) + ' 0 0Z" fill="url(#fGold)" opacity=".92"/>' +
      '<path d="M2 0 H' + f(len * 0.92) + '" stroke="#8a6418" stroke-width=".7" opacity=".7"/></g>';
  }
  var FLOWERS = (function () {
    var s = '<svg viewBox="0 0 300 220" preserveAspectRatio="xMinYMax meet">';
    s += leaf(40, 150, 70, -60) + leaf(70, 140, 62, -25) + leaf(150, 170, 66, -15) + leaf(20, 190, 60, -95) + leaf(190, 190, 58, 5) + leaf(110, 120, 50, -70);
    s += rose(60, 175, 40, "fRose") + rose(128, 192, 32, "fBlush") + rose(26, 120, 24, "fRose") + rose(180, 205, 22, "fRose") + rose(95, 128, 18, "fBlush");
    for (var k = 0; k < 14; k++) {
      var a = k * 2.4, d = 90 + (k % 4) * 14;
      s += '<circle cx="' + f(60 + Math.cos(a) * d * 0.9) + '" cy="' + f(175 - Math.abs(Math.sin(a)) * d * 0.8) + '" r="' + (2 + (k % 3)) + '" fill="#fffaf0" stroke="#d8c08c" stroke-width=".6"/>';
    }
    return s + '</svg>';
  })();

  var FLOOR = '<svg viewBox="0 0 100 40" preserveAspectRatio="none"><rect width="100" height="40" fill="url(#fFloor)"/>' +
    '<ellipse cx="50" cy="30" rx="34" ry="7" fill="none" stroke="#c9a564" stroke-width=".35" opacity=".7"/>' +
    '<ellipse cx="50" cy="30" rx="26" ry="5" fill="none" stroke="#c9a564" stroke-width=".25" stroke-dasharray=".6 1.2" opacity=".7"/></svg>';

  // The couple, seen from behind: groom in a sherwani and safa, bride in a lehenga
  // with her dupatta over her head, standing close together.
  var COUPLE =
    '<svg viewBox="0 0 200 320" preserveAspectRatio="xMidYMax meet">' +
    '<ellipse cx="104" cy="309" rx="92" ry="7" fill="#9b7330" opacity=".16"/>' +
    // groom
    '<g fill="url(#fSil)">' +
    '<path d="M76 66 h12 v14 h-12z"/>' +
    '<ellipse cx="82" cy="57" rx="12.5" ry="13"/>' +
    '<path d="M56 92 C60 81 72 78 82 78 C92 78 104 81 108 92 L112 142 L116 238 C96 247 68 247 48 238 L52 142 Z"/>' +
    '<path d="M56 94 C50 122 48 152 50 198 L58 198 C58 162 60 126 63 102 Z"/>' +
    '<path d="M106 96 C114 114 118 130 123 147 L117 151 C111 134 105 118 100 106 Z"/>' +
    '<path d="M60 238 C60 260 62 282 63 300 L73 300 C73 280 76 258 78 241 Z M86 241 C88 258 90 280 91 300 L101 300 C102 282 103 260 104 238 Z"/>' +
    '<path d="M60 300 q9 -4 18 0 l1 5 h-20z M88 300 q9 -4 18 0 l1 5 h-20z"/>' +
    '</g>' +
    '<g fill="url(#fGold)">' +
    '<path d="M67 52 C66 38 75 31 84 31 C95 31 102 39 100 50 C93 45 74 45 67 52 Z"/>' +       // safa
    '<path d="M86 48 C91 62 92 78 88 100 L83 100 C85 80 84 64 81 50 Z" opacity=".9"/>' +    // safa tail down the back
    '<path d="M97 35 C101 27 103 19 101 10 C107 19 105 31 99 39 Z"/>' +                    // kalgi
    '</g>' +
    '<path d="M104 92 C88 130 72 180 58 236" stroke="#f7e3a6" stroke-width="5" opacity=".5" stroke-linecap="round" fill="none"/>' + // stole
    '<path d="M50 236 C70 244 94 244 114 236" stroke="#f7e3a6" stroke-width="1.4" fill="none" opacity=".7"/>' +
    '<path d="M82 80 V236" stroke="#8a6418" stroke-width=".8" opacity=".35"/>' +
    // bride
    '<g fill="url(#fSil)">' +
    '<path d="M118 126 C132 132 146 132 158 126 C170 180 182 250 189 303 C154 314 122 314 90 303 C100 250 108 180 118 126 Z"/>' +
    '<path d="M122 92 C128 85 148 85 154 92 L157 128 C144 133 132 133 119 128 Z"/>' +
    '<ellipse cx="138" cy="62" rx="11.5" ry="12.5"/>' +
    '</g>' +
    '<path d="M138 40 C124 40 117 52 117 67 C111 120 99 222 90 304 C124 315 160 315 191 304 C179 222 165 120 159 67 C159 52 152 40 138 40 Z" fill="url(#fVeil)" opacity=".5"/>' + // dupatta
    '<path d="M93 291 C124 301 160 301 188 291" stroke="#f7e3a6" stroke-width="3" fill="none" opacity=".8"/>' +
    '<path d="M96 281 C126 290 158 290 185 281" stroke="#f7e3a6" stroke-width="1" stroke-dasharray="2 3" fill="none" opacity=".85"/>' +
    '<path d="M100 268 C128 276 156 276 182 268" stroke="#f7e3a6" stroke-width=".8" stroke-dasharray="1 4" fill="none" opacity=".7"/>' +
    '<path d="M119 132 C132 137 146 137 157 132" stroke="#f7e3a6" stroke-width="1.4" fill="none" opacity=".8"/>' +
    '<path d="M117 67 C111 120 99 222 90 304 M159 67 C165 120 179 222 191 304" stroke="#f7e3a6" stroke-width="1.2" fill="none" opacity=".6"/>' +
    '</svg>';

  // Heart line art with a rose and leaves, drawn on when its scene starts.
  var HEART =
    '<svg viewBox="0 0 300 290" preserveAspectRatio="xMidYMin meet">' +
    '<path class="heart-line" d="M150 274 C 56 208 4 150 18 90 C 30 38 94 22 128 58 C 140 70 146 80 150 90 C 154 80 160 70 172 58 C 206 22 270 38 282 90 C 296 150 244 208 150 274 Z" fill="rgba(255,253,246,.8)" stroke="url(#fGold)" stroke-width="3"/>' +
    '<path class="heart-line" d="M150 262 C 64 200 16 148 29 94 C 40 50 94 36 125 68 C 138 80 145 90 150 100 C 155 90 162 80 175 68 C 206 36 260 50 271 94 C 284 148 236 200 150 262 Z" fill="none" stroke="#3b2a14" stroke-width="1.1" opacity=".8"/>' +
    '<g transform="translate(150 286)">' + '<path d="M0 0 c-12 -6 -26 -4 -34 4 c10 6 24 6 34 -4z M0 0 c12 -6 26 -4 34 4 c-10 6 -24 6 -34 -4z" fill="url(#fGold)"/>' + '<circle r="3.5" fill="url(#fGoldV)"/></g>' +
    '<g transform="translate(150 84)">' + '<path d="M0 0 c4 -8 4 -14 0 -20 c-4 6 -4 12 0 20z" fill="url(#fGoldV)"/></g>' +
    '</svg>';

  function sizeOf(el) { return { w: el.clientWidth || 360, h: el.clientHeight || 720 }; }

  function decorate() {
    var stage = $("#story");
    var s = sizeOf(stage);
    $$(".scene").forEach(function (sc) {
      var html = '<div class="art art-curtains">' + curtainsSVG(s.w, s.h * 0.46) + '</div>' +
        '<div class="art art-floor">' + FLOOR + '</div>' +
        '<div class="art art-arch">' + archSVG(s.w * 0.92, s.h * 0.955) + '</div>' +
        '<div class="art art-lantern l1">' + LANTERN + '</div><div class="art art-lantern l2">' + LANTERN + '</div>' +
        '<div class="art art-lantern l3">' + LANTERN + '</div><div class="art art-lantern l4">' + LANTERN + '</div>' +
        '<div class="art art-flowers fl">' + FLOWERS + '</div><div class="art art-flowers fr">' + FLOWERS + '</div>' +
        (sc.hasAttribute("data-couple") ? '<div class="art art-couple">' + COUPLE + '</div>' : "");
      var old = sc.querySelector(".scene-art");
      if (old) old.remove();
      var wrap = document.createElement("div");
      wrap.className = "scene-art";
      wrap.setAttribute("aria-hidden", "true");
      wrap.innerHTML = html;
      sc.insertBefore(wrap, sc.firstChild);
    });
    $$('[data-art="heart"]').forEach(function (el) { el.innerHTML = HEART; });
  }

  /* =========================================================
     Details: map, calendar, countdown
     ========================================================= */
  function details() {
    $("#famMap").href = EVENT.map;
    $("#famCal").href = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent(EVENT.title) +
      "&dates=" + EVENT.start + "/" + EVENT.end + "&details=" + encodeURIComponent(EVENT.details) + "&location=" + encodeURIComponent(EVENT.venue);
    var ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Dawat-E-Valima//Family//EN", "BEGIN:VEVENT",
      "UID:" + EVENT.start + "-valima-family@invitation",
      "DTSTAMP:" + new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, ""),
      "DTSTART:" + EVENT.start, "DTEND:" + EVENT.end, "SUMMARY:" + EVENT.title,
      "DESCRIPTION:" + EVENT.details, "LOCATION:" + EVENT.venue.replace(/,/g, "\\,"),
      "BEGIN:VALARM", "TRIGGER:-P1D", "ACTION:DISPLAY", "DESCRIPTION:" + EVENT.title, "END:VALARM",
      "END:VEVENT", "END:VCALENDAR"].join("\r\n");
    $("#famIcs").href = "data:text/calendar;charset=utf-8," + encodeURIComponent(ics);
    var days = Math.ceil((new Date(EVENT.date) - Date.now()) / 86400000);
    $("#famCount").textContent = days > 1 ? "In sha Allah, in " + days + " days" : days === 1 ? "In sha Allah, tomorrow" : "";
  }

  /* =========================================================
     The story
     ========================================================= */
  var Story = (function () {
    var stage = $("#story"), scenes = $$(".scene"), bars = $("#bars");
    var idx = -1, timer = null, raf = 0, startAt = 0, dur = 0, running = false, taps = 0;
    bars.innerHTML = scenes.map(function () { return "<i><b></b></i>"; }).join("");
    var barEls = $$("i", bars);

    function paint() {
      barEls.forEach(function (b, i) {
        b.classList.toggle("done", i < idx);
        if (i !== idx) b.firstChild.style.width = "";
      });
      if (dur > 0 && running) {
        var p = Math.min(1, (performance.now() - startAt) / dur);
        barEls[idx].firstChild.style.width = (p * 100) + "%";
        if (p < 1) raf = requestAnimationFrame(paint);
      } else if (barEls[idx]) {
        barEls[idx].firstChild.style.width = dur > 0 ? "0%" : "100%";
      }
    }
    function show(i) {
      if (i < 0 || i >= scenes.length || i === idx) return;
      clearTimeout(timer); cancelAnimationFrame(raf);
      if (idx >= 0) {
        stage.classList.remove("is-turning"); void stage.offsetWidth; stage.classList.add("is-turning");
      }
      scenes.forEach(function (s, k) { s.classList.toggle("is-on", k === i); });
      idx = i;
      var t = parseFloat(scenes[i].getAttribute("data-time")) || 0;
      dur = t * 1000;
      startAt = performance.now();
      running = true;
      if (dur > 0) timer = setTimeout(function () { show(idx + 1); }, dur);
      paint();
      // the hint says plainly that a tap moves on; it fades once the guest has tapped
      stage.classList.toggle("show-hint", taps === 0 && i < scenes.length - 1);
    }
    function next() { show(idx + 1); }
    function prev() { show(idx - 1); }

    stage.addEventListener("click", function (e) {
      if (!document.body.classList.contains("is-open")) return;
      if (e.target.closest("a, button")) return;
      taps++;
      var r = stage.getBoundingClientRect();
      if (e.clientX - r.left < r.width * 0.3) prev(); else next();
    });
    var sx = 0, sy = 0;
    stage.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    stage.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 50) return;
      taps++;
      e.preventDefault();
      if (Math.abs(dy) > Math.abs(dx)) { if (dy < 0) next(); else prev(); }
      else { if (dx < 0) next(); else prev(); }
    });
    window.addEventListener("keydown", function (e) {
      if (!document.body.classList.contains("is-open")) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    });
    window.addEventListener("wheel", function (e) {
      if (!document.body.classList.contains("is-open") || Math.abs(e.deltaY) < 30) return;
      var now = Date.now();
      if (now - (window.__wheelAt || 0) < 900) return;
      window.__wheelAt = now;
      if (e.deltaY > 0) next(); else prev();
    }, { passive: true });
    // a hidden tab doesn't run the story on without the guest
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { clearTimeout(timer); running = false; }
      else if (idx >= 0 && dur > 0) { var keep = idx; idx = -1; show(keep); }
    });
    $("#famReplay").addEventListener("click", function () { show(0); });

    window.__famShow = show; // test hook
    return { start: function () { show(0); } };
  })();

  /* =========================================================
     Music
     ========================================================= */
  var music = window.createMusic("assets/music.mp3");
  var musicBtn = $("#music");
  function setMusic(on) {
    musicBtn.setAttribute("aria-pressed", String(on));
    musicBtn.classList.toggle("is-playing", on);
    if (on) music.play().catch(function () { setMusic(false); }); else music.pause();
  }
  musicBtn.addEventListener("click", function (e) { e.stopPropagation(); setMusic(musicBtn.getAttribute("aria-pressed") !== "true"); });

  /* =========================================================
     Envelope
     ========================================================= */
  var envelope = $("#envelope"), glEnv = null;
  var useGL = !!(window.GL && GL.available);
  if (!useGL) document.documentElement.classList.remove("gl-early");

  function reveal() {
    window.scrollTo(0, 0);
    document.body.classList.remove("is-locked");
    document.body.classList.add("is-open");
    envelope.classList.add("is-flashed");
    musicBtn.classList.add("is-visible");
    Story.start();
  }
  function openEnvelope() {
    if (envelope.classList.contains("is-opening")) return;
    if (envelope.classList.contains("gl-pending")) {
      window.__tapQueued = true;
      envelope.classList.add("is-waking");
      setMusic(true);
      return;
    }
    envelope.classList.add("is-opening");
    setMusic(true);
    if (glEnv) {
      glEnv.open().then(function () { glEnv.destroy(); envelope.remove(); });
      return;
    }
    // CSS envelope (no WebGL)
    setTimeout(function () { envelope.classList.add("flap-open"); }, 300);
    setTimeout(function () { envelope.classList.add("is-glowing"); }, 1200);
    setTimeout(function () { reveal(); envelope.classList.add("is-gone"); }, 2200);
    setTimeout(function () { envelope.remove(); }, 3300);
  }
  function posterShown() {
    var img = $("#envPoster");
    if (!img || !img.getAttribute("src")) return Promise.resolve();
    var ready = img.decode ? img.decode().catch(function () {}) : new Promise(function (r) { img.onload = img.onerror = r; });
    return Promise.race([ready, new Promise(function (r) { setTimeout(r, 3000); })])
      .then(function () { return new Promise(function (r) { requestAnimationFrame(function () { requestAnimationFrame(r); }); }); });
  }

  // the scenes are drawn first: they are light, and then nothing competes with the opening
  decorate();
  details();
  var rz = null;
  window.addEventListener("resize", function () { clearTimeout(rz); rz = setTimeout(decorate, 250); });

  if (useGL) {
    envelope.classList.add("gl-pending");
    posterShown()
      .then(function () {
        return GL.createEnvelope($(".env-box"), { onTap: openEnvelope, onFlash: reveal, reduceMotion: reduceMotion, seal: { line1: "A & A" }, touch: isTouch, grain: 0 });
      })
      .then(function (e) {
        glEnv = e;
        envelope.classList.add("has-gl");
        envelope.classList.remove("gl-pending");
        if (window.__tapQueued) { envelope.classList.add("is-waking"); e.firstFrame.then(openEnvelope); return; }
        if (music.prefetch) music.prefetch();
      })
      .catch(function () {
        envelope.classList.remove("gl-pending");
        envelope.classList.add("gl-failed");
        document.documentElement.classList.remove("gl-early");
      });
  } else if (music.prefetch) {
    music.prefetch();
  }
  envelope.addEventListener("click", openEnvelope);
  $("#seal").addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openEnvelope(); }
  });

  document.body.insertAdjacentHTML("afterbegin", DEFS);
})();
