/* script.js — two small behaviours, both load-bearing, neither decorative.
   1. Project cards: compress-then-reconstruct disclosure (button + aria-expanded).
   2. Nav: marks the section currently in view with the accent — the page
      answering "where am I", which paper cannot do. */

(function () {
  "use strict";

  // 1. Card disclosure ---------------------------------------------------
  var toggles = document.querySelectorAll(".card-toggle");
  for (var i = 0; i < toggles.length; i++) {
    (function (btn) {
      btn.addEventListener("click", function () {
        var open = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!open));
        var card = btn.closest(".card");
        if (card) card.classList.toggle("is-open", !open);
      });
    })(toggles[i]);
  }

  // 2. Active nav section --------------------------------------------------
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".nav-links a");
  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    var map = {};
    for (var j = 0; j < navLinks.length; j++) {
      var href = navLinks[j].getAttribute("href") || "";
      if (href.charAt(0) === "#") map[href.slice(1)] = navLinks[j];
    }
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = map[entry.target.id];
          if (!link || !entry.isIntersecting) return;
          for (var k = 0; k < navLinks.length; k++) {
            navLinks[k].classList.remove("is-active");
          }
          link.classList.add("is-active");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(function (s) { obs.observe(s); });
  }
})();
