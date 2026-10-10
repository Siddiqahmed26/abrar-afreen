/*
 * Hand-built SVG artwork: hero scene, photo placeholder, envelope pattern, icons.
 * Everything is generated in code so the site has no image dependencies.
 */
(function () {
  "use strict";

  // Small seeded RNG so the artwork looks the same on every load
  function rng(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  var f = function (n) { return Math.round(n * 10) / 10; };

  /* ---------- Roses ---------- */
  function rose(x, y, r, grad, rnd) {
    var rot = f(rnd() * 360);
    var s = '<g transform="translate(' + f(x) + ' ' + f(y) + ') rotate(' + rot + ')">';
    s += '<circle r="' + f(r) + '" fill="url(#' + grad + ')"/>';
    // petal swirls
    s += '<path d="M' + f(-r * .55) + ' 0a' + f(r * .55) + ' ' + f(r * .55) + ' 0 0 1 ' + f(r * 1.1) + ' 0" fill="none" stroke="rgba(70,15,30,.35)" stroke-width="' + f(r * .09) + '"/>';
    s += '<path d="M' + f(r * .3) + ' ' + f(r * .1) + 'a' + f(r * .32) + ' ' + f(r * .32) + ' 0 1 1 ' + f(-r * .5) + ' ' + f(-r * .15) + '" fill="none" stroke="rgba(70,15,30,.4)" stroke-width="' + f(r * .08) + '"/>';
    s += '<path d="M' + f(-r * .8) + ' ' + f(r * .25) + 'q' + f(r * .8) + ' ' + f(r * .9) + ' ' + f(r * 1.6) + ' 0" fill="none" stroke="rgba(255,235,235,.35)" stroke-width="' + f(r * .07) + '"/>';
    s += '<circle r="' + f(r * .14) + '" fill="rgba(70,15,30,.45)"/>';
    return s + "</g>";
  }
  function leaf(x, y, len, angle, grad) {
    return '<path transform="translate(' + f(x) + ' ' + f(y) + ') rotate(' + f(angle) + ')" d="M0 0q' + f(len * .5) + ' ' + f(-len * .32) + ' ' + f(len) + ' 0q' + f(-len * .5) + ' ' + f(len * .32) + ' ' + f(-len) + ' 0z" fill="url(#' + grad + ')"/>';
  }
  function cluster(cx, cy, count, spread, rMin, rMax, grads, seed, leafGrad) {
    var rnd = rng(seed), s = "", i;
    for (i = 0; i < count * 1.4; i++) {
      var a = rnd() * Math.PI * 2, d = rnd() * spread * 1.15;
      s += leaf(cx + Math.cos(a) * d, cy + Math.sin(a) * d * .8, rMax * (1.2 + rnd()), rnd() * 360, leafGrad || "leaf");
    }
    for (i = 0; i < count; i++) {
      var a2 = rnd() * Math.PI * 2, d2 = Math.sqrt(rnd()) * spread;
      s += rose(cx + Math.cos(a2) * d2, cy + Math.sin(a2) * d2 * .8, rMin + rnd() * (rMax - rMin), grads[Math.floor(rnd() * grads.length)], rnd);
    }
    return s;
  }

  /* ---------- Hero scene: moonlit arch, drapes, columns, roses ---------- */
  function heroScene() {
    var rnd = rng(7), s = "", i;
    var W = 400, H = 820;

    var defs =
      '<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#1d3a66"/><stop offset=".45" stop-color="#4e78a6"/>' +
        '<stop offset=".72" stop-color="#9aa5bb"/><stop offset=".88" stop-color="#e3b18c"/><stop offset="1" stop-color="#f0c69c"/></linearGradient>' +
      '<linearGradient id="wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#16141f"/><stop offset=".6" stop-color="#2b2330"/><stop offset="1" stop-color="#1b1620"/></linearGradient>' +
      '<linearGradient id="floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4b3d49"/><stop offset="1" stop-color="#120e16"/></linearGradient>' +
      '<linearGradient id="stone" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#4f3e36"/><stop offset=".45" stop-color="#a8876e"/><stop offset=".6" stop-color="#c6a487"/><stop offset="1" stop-color="#4a3a33"/></linearGradient>' +
      '<linearGradient id="curtain" x1="0" y1="0" x2="1" y2="0">' +
        '<stop offset="0" stop-color="#1f2a3e"/><stop offset=".14" stop-color="#5f7698"/><stop offset=".26" stop-color="#2c3a54"/>' +
        '<stop offset=".42" stop-color="#7890b2"/><stop offset=".56" stop-color="#34445f"/><stop offset=".72" stop-color="#8aa1c1"/>' +
        '<stop offset=".86" stop-color="#3a4a66"/><stop offset="1" stop-color="#9db2cf"/></linearGradient>' +
      '<linearGradient id="valance" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1b2335"/><stop offset=".7" stop-color="#4a5d7d"/><stop offset="1" stop-color="#7d93b4"/></linearGradient>' +
      '<radialGradient id="glow"><stop offset="0" stop-color="#ffd9a8" stop-opacity=".75"/><stop offset="1" stop-color="#ffd9a8" stop-opacity="0"/></radialGradient>' +
      '<radialGradient id="moon"><stop offset="0" stop-color="#fffaf0"/><stop offset=".25" stop-color="#fff2dc" stop-opacity=".9"/><stop offset="1" stop-color="#fff2dc" stop-opacity="0"/></radialGradient>' +
      '<radialGradient id="rose1" cx=".4" cy=".35"><stop offset="0" stop-color="#f9d3d5"/><stop offset=".5" stop-color="#d98a96"/><stop offset="1" stop-color="#7b3243"/></radialGradient>' +
      '<radialGradient id="rose2" cx=".4" cy=".35"><stop offset="0" stop-color="#ffe5d2"/><stop offset=".5" stop-color="#e5a48c"/><stop offset="1" stop-color="#8a4a3f"/></radialGradient>' +
      '<radialGradient id="rose3" cx=".4" cy=".35"><stop offset="0" stop-color="#fff6f0"/><stop offset=".55" stop-color="#e9cdc8"/><stop offset="1" stop-color="#94706d"/></radialGradient>' +
      '<linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4f6b48"/><stop offset="1" stop-color="#1c2a1f"/></linearGradient>' +
      '<radialGradient id="vignette" cx=".5" cy=".45" r=".75"><stop offset=".55" stop-color="#05050c" stop-opacity="0"/><stop offset="1" stop-color="#05050c" stop-opacity=".8"/></radialGradient>' +
      '<clipPath id="archClip"><path d="M110 560V310a90 90 0 0 1 180 0v250z"/></clipPath>' +
      '<filter id="soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6"/></filter>';

    s += '<rect width="' + W + '" height="' + H + '" fill="url(#wall)"/>';

    // faint distant arcade on the wall
    for (i = 0; i < 4; i++) {
      var ax = i < 2 ? 18 + i * 34 : 290 + (i - 2) * 34;
      s += '<path d="M' + ax + ' 420V250a17 17 0 0 1 34 0v170" fill="none" stroke="#6d5848" stroke-opacity=".18" stroke-width="2"/>';
    }

    // sky through the arch
    s += '<g clip-path="url(#archClip)">';
    s += '<rect x="100" y="200" width="200" height="370" fill="url(#sky)"/>';
    for (i = 0; i < 55; i++) {
      s += '<circle cx="' + f(110 + rnd() * 180) + '" cy="' + f(220 + rnd() * 210) + '" r="' + f(.3 + rnd() * .9) + '" fill="#fff" opacity="' + f(.3 + rnd() * .7) + '"/>';
    }
    s += '<circle cx="232" cy="292" r="36" fill="url(#moon)"/><circle cx="232" cy="292" r="9" fill="#fffaf0"/>';
    // horizon: soft hills and water
    s += '<path d="M100 512q40-22 80-8t70-12 60 6v80H100z" fill="#5b5874" opacity=".85"/>';
    s += '<path d="M100 530q50-12 100-2t100-4v40H100z" fill="#3e3a55" opacity=".9"/>';
    s += '<ellipse cx="200" cy="535" rx="80" ry="6" fill="#ffd9b0" opacity=".35" filter="url(#soft)"/>';
    s += "</g>";

    // arch frame + keystone
    s += '<path d="M110 562V310a90 90 0 0 1 180 0v252" fill="none" stroke="url(#stone)" stroke-width="16"/>';
    s += '<path d="M118 560V310a82 82 0 0 1 164 0v250" fill="none" stroke="#f1d6b8" stroke-opacity=".35" stroke-width="1.5"/>';
    s += '<path d="M190 212h20l-3 24h-14z" fill="#b8967b"/>';

    // balustrade
    s += '<rect x="96" y="516" width="208" height="9" rx="2" fill="#9a7d6b"/>';
    for (i = 0; i < 14; i++) {
      var bx = 108 + i * 13.5;
      s += '<path d="M' + f(bx) + ' 525c-4 6 4 9 0 14s-4 10 0 16h7c4-6 4-11 0-16s4-8 0-14z" fill="#7d6253"/>';
    }
    s += '<rect x="96" y="555" width="208" height="9" rx="2" fill="#6e5547"/>';

    // floor with warm reflection
    s += '<path d="M0 564H400V820H0z" fill="url(#floor)"/>';
    s += '<ellipse cx="200" cy="640" rx="120" ry="38" fill="url(#glow)" opacity=".55"/>';
    for (i = 0; i < 7; i++) {
      s += '<path d="M200 566L' + (i * 66 - 0) + ' 820" stroke="#fff" stroke-opacity=".035" stroke-width="1"/>';
    }

    // columns
    [[44, 92], [308, 356]].forEach(function (c) {
      var x0 = c[0], x1 = c[1], w = x1 - x0;
      s += '<rect x="' + (x0 - 6) + '" y="236" width="' + (w + 12) + '" height="16" rx="3" fill="#a6876f"/>';
      s += '<rect x="' + (x0 - 3) + '" y="252" width="' + (w + 6) + '" height="6" fill="#7d6352"/>';
      s += '<rect x="' + x0 + '" y="258" width="' + w + '" height="440" fill="url(#stone)"/>';
      for (var k = 1; k < 5; k++) {
        s += '<line x1="' + (x0 + k * w / 5) + '" y1="262" x2="' + (x0 + k * w / 5) + '" y2="694" stroke="#3a2c26" stroke-opacity=".35" stroke-width="1.2"/>';
      }
      s += '<rect x="' + (x0 - 8) + '" y="694" width="' + (w + 16) + '" height="18" rx="3" fill="#8c705e"/>';
      s += '<circle cx="' + (x0 + w / 2) + '" cy="236" r="70" fill="url(#glow)" opacity=".5"/>';
    });

    // curtains (left, then mirrored)
    var curtain =
      '<path d="M0 0H158C150 110 132 220 108 318C98 360 78 392 68 430C56 480 46 600 34 820H0Z" fill="url(#curtain)"/>' +
      '<path d="M0 0H70C76 140 72 300 60 430C50 560 40 700 30 820H0Z" fill="#0f1522" opacity=".35"/>' +
      '<path d="M120 0C116 120 104 230 86 330" fill="none" stroke="#c2d2ea" stroke-opacity=".35" stroke-width="2"/>' +
      '<path d="M58 424q14 4 22 0" fill="none" stroke="#c9a65e" stroke-opacity=".8" stroke-width="2.4" stroke-linecap="round"/>';
    s += curtain + '<g transform="translate(400 0) scale(-1 1)">' + curtain + "</g>";
    s += '<path d="M0 0H400V46C340 98 262 110 200 76 138 110 60 98 0 46Z" fill="url(#valance)"/>';
    s += '<path d="M0 46C60 98 138 110 200 76 262 110 340 98 400 46" fill="none" stroke="#d8b261" stroke-opacity=".7" stroke-width="2"/>';

    // roses: corners, column bases, balustrade ends, arch shoulders
    var g3 = ["rose1", "rose2", "rose3"];
    s += cluster(30, 720, 16, 52, 9, 17, g3, 11);
    s += cluster(372, 728, 16, 52, 9, 17, g3, 12);
    s += cluster(98, 600, 9, 30, 6, 11, g3, 13);
    s += cluster(302, 602, 9, 30, 6, 11, g3, 14);
    s += cluster(78, 470, 6, 22, 5, 9, g3, 15);
    s += cluster(324, 474, 6, 22, 5, 9, g3, 16);
    s += cluster(200, 800, 12, 70, 8, 14, g3, 19);

    s += '<rect width="' + W + '" height="' + H + '" fill="url(#vignette)"/>';

    return '<svg viewBox="0 0 ' + W + " " + H + '" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs>' + defs + "</defs>" + s + "</svg>";
  }

  /* ---------- Photo placeholder: floral arch in a meadow ---------- */
  function floralArch() {
    var rnd = rng(31), s = "", i;
    var defs =
      '<linearGradient id="pSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d7e2ea"/><stop offset=".7" stop-color="#f2ece4"/><stop offset="1" stop-color="#f6efe6"/></linearGradient>' +
      '<linearGradient id="pField" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a3b386"/><stop offset="1" stop-color="#5f7449"/></linearGradient>' +
      '<linearGradient id="pDrape" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset=".5" stop-color="#efe7e1" stop-opacity=".85"/><stop offset="1" stop-color="#fff" stop-opacity=".95"/></linearGradient>' +
      '<radialGradient id="pr1" cx=".4" cy=".35"><stop offset="0" stop-color="#ffd8cc"/><stop offset=".55" stop-color="#ec8a73"/><stop offset="1" stop-color="#a6493a"/></radialGradient>' +
      '<radialGradient id="pr2" cx=".4" cy=".35"><stop offset="0" stop-color="#fff"/><stop offset=".6" stop-color="#f3e5dc"/><stop offset="1" stop-color="#b9a296"/></radialGradient>' +
      '<radialGradient id="pr3" cx=".4" cy=".35"><stop offset="0" stop-color="#e58ea0"/><stop offset=".5" stop-color="#a83a55"/><stop offset="1" stop-color="#5c1527"/></radialGradient>' +
      '<radialGradient id="pr4" cx=".4" cy=".35"><stop offset="0" stop-color="#fff0d6"/><stop offset=".55" stop-color="#f4c08f"/><stop offset="1" stop-color="#b37946"/></radialGradient>' +
      '<radialGradient id="pr5" cx=".4" cy=".35"><stop offset="0" stop-color="#ffe7ec"/><stop offset=".55" stop-color="#f1b4c0"/><stop offset="1" stop-color="#b56b7b"/></radialGradient>' +
      '<linearGradient id="pleaf" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8aa37a"/><stop offset="1" stop-color="#3f5a3a"/></linearGradient>' +
      '<radialGradient id="pSun" cx=".85" cy=".1" r=".7"><stop offset="0" stop-color="#fff6e2" stop-opacity=".9"/><stop offset="1" stop-color="#fff6e2" stop-opacity="0"/></radialGradient>';

    s += '<rect width="400" height="500" fill="url(#pSky)"/>';
    s += '<path d="M0 300q80-30 160-10t140-14 100 10v60H0z" fill="#b8c3a9" opacity=".7"/>';
    s += '<path d="M0 318q100-18 200-4t200-6v192H0z" fill="url(#pField)"/>';
    for (i = 0; i < 160; i++) {
      var gx = rnd() * 400, gy = 330 + rnd() * 170;
      s += '<path d="M' + f(gx) + " " + f(gy) + "l" + f(rnd() * 4 - 2) + " " + f(-4 - rnd() * 8) + '" stroke="#4d6239" stroke-opacity=".45" stroke-width="1"/>';
    }
    for (i = 0; i < 24; i++) {
      s += '<circle cx="' + f(rnd() * 400) + '" cy="' + f(345 + rnd() * 150) + '" r="' + f(1 + rnd() * 1.5) + '" fill="' + (rnd() > .5 ? "#f6e9d8" : "#e7a7a0") + '"/>';
    }

    // arch posts and beam
    s += '<rect x="96" y="70" width="12" height="320" fill="#f4efe9"/><rect x="292" y="70" width="12" height="320" fill="#ece6df"/>';
    s += '<rect x="84" y="62" width="232" height="14" rx="2" fill="#faf6f1"/>';
    s += '<path d="M96 76h12v314H96z" fill="#000" opacity=".06"/>';
    // flowing drapes
    s += '<path d="M90 76c40 30 70 34 110 30s70 0 110-30v20c-40 34-70 40-110 36s-70-4-110-36z" fill="url(#pDrape)"/>';
    s += '<path d="M300 80c26 70 18 160 34 230 8 36 22 60 40 80l-30 2c-16-30-26-60-30-100-6-70 4-140-14-212z" fill="url(#pDrape)" opacity=".92"/>';
    s += '<path d="M310 120c6 60 4 120 16 180" fill="none" stroke="#d8cec6" stroke-width="1.2"/>';

    var g5 = ["pr1", "pr2", "pr3", "pr4", "pr5"];
    s += cluster(112, 92, 22, 58, 9, 18, g5, 41, "pleaf");
    s += cluster(70, 150, 7, 28, 7, 12, g5, 42, "pleaf");
    s += cluster(300, 390, 10, 34, 7, 13, g5, 43, "pleaf");
    s += cluster(100, 392, 8, 30, 6, 11, g5, 44, "pleaf");

    s += '<rect width="400" height="500" fill="url(#pSun)"/>';
    return '<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs>' + defs + "</defs>" + s + "</svg>";
  }

  /* ---------- Embossed floral pattern for the envelope ---------- */
  function envelopePattern() {
    // a leafy sprig, placed four times per tile at different angles for an organic, non-grid look
    var sprig =
      '<path d="M0 22C4 12 2 2-4-8"/>' +
      '<path d="M1 16c6-2 10-7 10-13-6 2-9 7-10 13zM2 8c-6-1-10-6-10-12 6 1 9 6 10 12zM-1 0c5-3 7-8 6-13-5 3-7 8-6 13z"/>' +
      '<path d="M0 22c-5-1-9-5-10-10 5 1 9 5 10 10z"/>' +
      '<circle cx="-4" cy="-10" r="2.2"/><circle cx="-4" cy="-10" r=".6"/>';
    var place = [[22, 26, -20, 1], [76, 18, 35, .8], [50, 70, 160, .95], [100, 84, -110, .75], [8, 92, 70, .7]];
    var motif = place.map(function (p) {
      return '<g transform="translate(' + p[0] + ' ' + p[1] + ') rotate(' + p[2] + ') scale(' + p[3] + ')">' + sprig + "</g>";
    }).join("") +
      '<circle cx="60" cy="40" r="1.4"/><circle cx="30" cy="58" r="1.1"/><circle cx="88" cy="56" r="1.2"/><circle cx="70" cy="104" r="1.1"/>';
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="112" height="112" viewBox="0 0 112 112">' +
      '<g fill="none" stroke-width="1.05" stroke-linecap="round" stroke-linejoin="round">' +
      '<g stroke="rgb(255,236,236)" stroke-opacity=".5" transform="translate(-.7 -.7)">' + motif + "</g>" +
      '<g stroke="rgb(118,52,58)" stroke-opacity=".22" transform="translate(.7 .7)">' + motif + "</g>" +
      "</g></svg>";
    return 'url("data:image/svg+xml,' + encodeURIComponent(svg) + '")';
  }

  /* ---------- Line icons ---------- */
  var icons = {
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    dress: '<path d="M9.5 3h5l-1 3.5 4.5 13.5H6l4.5-13.5z"/><path d="M8.2 11h7.6"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"/>',
    car: '<rect x="3.5" y="5" width="17" height="12" rx="2.5"/><path d="M3.5 11h17M7 14h1.5M15.5 14H17"/><path d="M6.5 17v2M17.5 17v2"/>',
    hotel: '<path d="M4 20V5h9v15M13 10h7v10M2.5 20h19"/><path d="M7 8.5h1M10 8.5h1M7 11.5h1M10 11.5h1M7 14.5h1M10 14.5h1M16 13.5h1.5M16 16.5h1.5"/>',
    gift: '<rect x="3.5" y="8" width="17" height="4" rx="1"/><rect x="5" y="12" width="14" height="8.5" rx="1"/><path d="M12 8v12.5"/><path d="M12 8C10.5 5 7 4 6.5 6.3S10 8 12 8zm0 0c1.5-3 5-4 5.5-1.7S14 8 12 8z"/>',
    mail: '<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/>',
  };
  function icon(name) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (icons[name] || "") + "</svg>";
  }

  window.ART = {
    heroScene: heroScene,
    floralArch: floralArch,
    envelopePattern: envelopePattern,
    icon: icon,
  };
})();
