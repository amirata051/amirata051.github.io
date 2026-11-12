// Day/night switch for the navbar theme button (#light-toggle).
//
// Design and motion adapted from Hamzeh Ghoreyshi's "interactive-day-night-toggle" (MIT License):
// https://github.com/HamzehGhoreyshi/interactive-day-night-toggle
//
// This script only adds the drawing (sky, stars, sun/moon knob, clouds) inside the theme's own button
// and turns its three-step cycle (system → light → dark) into a two-state switch. Which state is shown
// is decided in CSS from <html data-theme="…">, so it always matches the theme, whoever changed it.
// Styles live in assets/css/main.scss.
(function () {
  var button = document.getElementById("light-toggle");
  if (!button || !window.CSS || !CSS.supports("width", "1cqw")) return;

  var root = document.documentElement;
  var SPARKLE = "M0 -1 Q0.12 -0.12 1 0 Q0.12 0.12 0 1 Q-0.12 0.12 -1 0 Q-0.12 -0.12 0 -1Z";
  // [x, y, size, twinkle seconds] in a 530 × 243 box. Sizes are larger than in the original,
  // which was drawn for a 530px-wide toggle; this one is about 60px wide.
  var sparkles = [
    [70, 70, 15, 3.2],
    [160, 92, 11, 2.6],
    [232, 72, 13, 3.8],
    [250, 160, 16, 3.1],
    [120, 175, 11, 2.9],
  ];
  var dots = [
    [48, 130, 5, 2.2],
    [110, 40, 4, 2.7],
    [200, 130, 4.5, 3.4],
    [296, 108, 3.5, 2.4],
    [180, 205, 4, 3],
    [82, 205, 3.5, 2.5],
    [288, 45, 3, 3.6],
  ];
  // Three cloud layers, back to front; each is a cluster of circles [cx, cy, r].
  var clouds = [
    [
      [230, 232, 42],
      [310, 205, 48],
      [388, 172, 54],
      [462, 110, 70],
      [528, 48, 72],
      [480, 262, 100],
      [540, 150, 60],
    ],
    [
      [180, 248, 40],
      [262, 228, 44],
      [345, 212, 46],
      [428, 180, 54],
      [505, 118, 66],
      [548, 62, 58],
      [500, 252, 90],
    ],
    [
      [118, 268, 42],
      [200, 254, 42],
      [285, 246, 44],
      [370, 238, 46],
      [452, 208, 52],
      [530, 150, 66],
      [510, 262, 85],
    ],
  ];

  var index = 0;
  var star = function (x, y, scale, seconds, shape) {
    var place = scale ? "translate(" + x + " " + y + ") scale(" + scale + ")" : "translate(" + x + " " + y + ")";
    return '<g transform="' + place + '"><g class="dn-star" style="--i:' + index++ + ";--t:" + seconds + 's">' + shape + "</g></g>";
  };
  var starsMarkup = sparkles
    .map(function (s) {
      return star(s[0], s[1], s[2], s[3], '<path d="' + SPARKLE + '"/>');
    })
    .concat(
      dots.map(function (d) {
        return star(d[0], d[1], 0, d[3], '<circle r="' + d[2] + '"/>');
      })
    )
    .join("");
  var cloudsMarkup = clouds
    .map(function (circles, layer) {
      return (
        '<svg class="dn-cloud dn-cloud-' +
        (layer + 1) +
        '" viewBox="0 0 530 243" aria-hidden="true"><g>' +
        circles
          .map(function (c) {
            return '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + c[2] + '"/>';
          })
          .join("") +
        "</g></svg>"
      );
    })
    .join("");

  var pill = document.createElement("span");
  pill.className = "dn-pill";
  pill.setAttribute("aria-hidden", "true");
  pill.innerHTML =
    '<span class="dn-layer dn-sky-night"></span>' +
    '<svg class="dn-layer dn-stars" viewBox="0 0 530 243">' +
    starsMarkup +
    "</svg>" +
    '<span class="dn-shooting"></span>' +
    '<span class="dn-knob-track"><span class="dn-halo"></span><span class="dn-knob"><span class="dn-sun"></span>' +
    '<span class="dn-moon"><span class="dn-crater dn-c1"></span><span class="dn-crater dn-c2"></span><span class="dn-crater dn-c3"></span></span>' +
    "</span></span>" +
    cloudsMarkup;
  button.appendChild(pill);
  var knob = pill.querySelector(".dn-knob");

  // A real switch for assistive technology: checked means dark mode.
  var syncState = function () {
    button.setAttribute("aria-checked", String(root.getAttribute("data-theme") === "dark"));
  };
  button.setAttribute("role", "switch");
  button.setAttribute("aria-label", "Dark mode");
  button.setAttribute("title", "Switch between light and dark mode");
  syncState();
  new MutationObserver(syncState).observe(root, { attributes: true, attributeFilter: ["data-theme"] });

  // setThemeSetting comes from the theme's theme.js. Without it, leave the theme's own click handler alone.
  if (typeof setThemeSetting !== "function") return;

  // Capture phase, so this runs instead of the theme's handler (which would also visit "system").
  button.addEventListener(
    "click",
    function (event) {
      event.stopImmediatePropagation();
      button.classList.add("dn-flipped"); // lets the halo ripple, which should not play on page load
      setThemeSetting(root.getAttribute("data-theme") === "dark" ? "light" : "dark");

      // Squash and stretch while the knob travels.
      if (knob.animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        knob.animate(
          [
            { transform: "scale(1, 1)" },
            { transform: "scale(1.14, .88)", offset: 0.25 },
            { transform: "scale(.94, 1.06)", offset: 0.55 },
            { transform: "scale(1.02, .98)", offset: 0.75 },
            { transform: "scale(1, 1)" },
          ],
          { duration: 800, easing: "ease-out" }
        );
      }
    },
    true
  );
})();
