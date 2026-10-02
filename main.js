(function () {
  "use strict";
  var ACCENT = "#D9AE55";

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.getElementById("menuBtn");
  var menuWrap = document.getElementById("menuWrap");
  var menuOpen = false;
  function setMenu(open) {
    if (!menuWrap || !menuBtn) return;
    menuOpen = open;
    menuWrap.style.display = open ? "contents" : "none";
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menuBtn.querySelector(".ic-open").style.display = open ? "none" : "flex";
    menuBtn.querySelector(".ic-close").style.display = open ? "flex" : "none";
  }
  if (menuBtn) menuBtn.addEventListener("click", function () { setMenu(!menuOpen); });
  document.querySelectorAll("[data-close-menu]").forEach(function (el) {
    el.addEventListener("click", function () { setMenu(false); });
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && menuOpen) setMenu(false); });

  /* ---------- Full credits ---------- */
  var defs = [["film", "Film"], ["tv", "Television"], ["ads", "Commercial"], ["stage", "Theatre"], ["mv", "Music video"], ["dir", "Directing"]];
  var shades = ["#201D1A", "#1F1C19", "#1C1916", "#1A1714", "#181613", "#171512"];
  var base = "position: relative; flex: 1 0 0; min-width: 132px; box-sizing: border-box; display: inline-flex; align-items: center; justify-content: center; gap: 8px; border-radius: 0; border: 0; font-family: 'DM Sans', sans-serif; font-size: 15px; cursor: pointer; white-space: nowrap; ";
  var chipBase = "font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 500; ";
  var cur = "film";
  var tablist = document.querySelector(".ctabs");
  var select = document.getElementById("credit-category-m");
  var tbody = document.getElementById("creditRows");
  var allRows = tbody.querySelectorAll("tr");
  function countOf(cat) { return tbody.querySelectorAll('tr[data-cat="' + cat + '"]').length; }
  document.getElementById("total").textContent = allRows.length;

  function esc(t) { var d = document.createElement("div"); d.textContent = t; return d.innerHTML; }

  defs.forEach(function (def) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "ctab"; b.setAttribute("role", "tab"); b.dataset.cat = def[0];
    b.innerHTML = esc(def[1]) + '<span class="chip">' + countOf(def[0]) + "</span>";
    b.addEventListener("click", function () { renderCredits(def[0]); });
    tablist.appendChild(b);
    var o = document.createElement("option");
    o.value = def[0]; o.textContent = def[1] + " (" + countOf(def[0]) + ")";
    select.appendChild(o);
  });
  select.addEventListener("change", function () { renderCredits(select.value); });

  function renderCredits(id) {
    cur = id;
    select.value = id;
    tablist.querySelectorAll(".ctab").forEach(function (b, i) {
      var on = b.dataset.cat === id;
      b.setAttribute("aria-selected", on ? "true" : "false");
      b.style.cssText = base + (i > 0 ? "margin-left: -8px; " : "") + (on
        ? "z-index: 10; min-height: 56px; padding: 0 16px; background: #26221E; color: #EDE7DD; font-weight: 700; box-shadow: inset 0 3px 0 " + ACCENT + ";"
        : "z-index: " + (8 - i) + "; min-height: 50px; padding: 0 16px; background: " + shades[i] + "; color: #A39C92; font-weight: 500;");
      b.querySelector(".chip").style.cssText = chipBase + (on ? "color: " + ACCENT + ";" : "color: inherit;");
    });
    var h = id === "dir" ? { role: "Credit", dir: "Recognition" } : { role: "Role", dir: "Director" };
    document.querySelector('[data-h="role"]').textContent = h.role;
    document.querySelector('[data-h="dir"]').textContent = h.dir;
    var count = 0;
    tbody.querySelectorAll("tr").forEach(function (tr) {
      var show = tr.dataset.cat === id;
      tr.hidden = !show;
      if (show) count++;
    });
    document.getElementById("rowCount").textContent = count;
  }
  renderCredits("film");

  /* ---------- Carousels ---------- */
  var carousels = {
    sen: { photos: ["images/senakulo-1.webp", "images/senakulo-2.webp", "images/senakulo-3.webp", "images/senakulo-4.webp", "images/senakulo-5.webp"], i: 0, off: "#4A4540", label: "Hindi Ito Senakulo production photo " },
    hari: { photos: ["images/tatlong-hari-1.webp", "images/tatlong-hari-2.webp", "images/tatlong-hari-3.webp"], i: 0, off: "#4A4540", label: "Ang Tatlong Hari production photo " },
    thea: { photos: ["images/ambon-fourthever-1.webp", "images/ambon-fourthever-2.webp"], i: 0, off: "#4A4540", label: "Ambon ng Kristal & #FourthEver production photo " },
    dahil: {
      photos: ["images/dahil-kay-maam.webp", "images/dahil-kay-maam-adobo-finalist.webp"],
      alts: ["Still from Dahil Kay Ma'am, Vibal Group ad", "Adobo VideoFest 2021 finalist poster for Dahil Kay Ma'am"],
      i: 0, off: "#6A645D", fade: true, playing: true, hovering: false
    }
  };

  function dotStyle(on, off) {
    return "display: block; width: " + (on ? "18px" : "8px") + "; height: 8px; border-radius: 999px; background: " + (on ? ACCENT : off) + ";";
  }

  Object.keys(carousels).forEach(function (key) {
    var c = carousels[key];
    var n = c.photos.length;
    if (c.fade) {
      var holder = document.querySelector('[data-slides="' + key + '"]');
      c.slides = c.photos.map(function (src, j) {
        var img = document.createElement("img");
        img.src = src; img.alt = c.alts[j];
        img.style.cssText = "position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; transition: opacity 700ms ease;";
        holder.parentNode.insertBefore(img, holder);
        return img;
      });
    }
    var dotsHolder = document.querySelector('[data-dots="' + key + '"]');
    c.dots = c.photos.map(function (_, j) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("aria-label", "Show photo " + (j + 1));
      btn.style.cssText = "width: " + (c.fade ? "24px; height: 36px" : "28px; height: 28px") + "; border: 0; background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 0";
      var dot = document.createElement("span");
      btn.appendChild(dot);
      btn.addEventListener("click", function () { go(key, j); });
      dotsHolder.parentNode.insertBefore(btn, dotsHolder);
      return dot;
    });
    document.querySelectorAll('[data-car="' + key + '"]').forEach(function (btn) {
      btn.addEventListener("click", function () { go(key, c.i + (btn.dataset.act === "next" ? 1 : -1)); });
    });
    c.n = n;
    go(key, 0);
  });

  function go(key, j) {
    var c = carousels[key];
    c.i = ((j % c.n) + c.n) % c.n;
    c.dots.forEach(function (d, k) { d.style.cssText = dotStyle(k === c.i, c.off); });
    if (c.fade) {
      c.slides.forEach(function (img, k) { img.style.opacity = k === c.i ? "1" : "0"; });
    } else {
      var img = document.querySelector('[data-car-img="' + key + '"]');
      img.src = c.photos[c.i];
      img.alt = c.label + (c.i + 1) + " / " + c.n;
      var pos = document.querySelector('[data-pos="' + key + '"]');
      if (pos) pos.textContent = (c.i + 1) + " / " + c.n;
    }
  }

  // Dahil Kay Ma'am autoplay with pause, hover-pause and reduced-motion support
  var dahil = carousels.dahil;
  var toggle = document.getElementById("dahilToggle");
  function setPlaying(p) {
    dahil.playing = p;
    toggle.setAttribute("aria-label", p ? "Pause slideshow" : "Play slideshow");
    toggle.querySelector(".ic-pause").style.display = p ? "flex" : "none";
    toggle.querySelector(".ic-play").style.display = p ? "none" : "flex";
  }
  toggle.addEventListener("click", function () { setPlaying(!dahil.playing); });
  var hoverBox = document.querySelector('[data-hover="dahil"]');
  hoverBox.addEventListener("mouseenter", function () { dahil.hovering = true; });
  hoverBox.addEventListener("mouseleave", function () { dahil.hovering = false; });
  try {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
  } catch (e) {}
  setInterval(function () {
    if (dahil.playing && !dahil.hovering) go("dahil", dahil.i + 1);
  }, 4500);

  /* ---------- Copy email ---------- */
  var copyBtn = document.getElementById("copyBtn");
  var note = document.getElementById("copyNote");
  var timer;
  function copied() {
    copyBtn.textContent = "Copied!";
    note.textContent = "Email address copied to your clipboard.";
    clearTimeout(timer);
    timer = setTimeout(function () { copyBtn.textContent = "Copy email"; note.textContent = ""; }, 2500);
  }
  copyBtn.addEventListener("click", function () {
    var email = "mizaeltilos.booking@gmail.com";
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = email; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); copied(); } catch (e) {}
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(email).then(copied, fallback);
    else fallback();
  });

  /* ---------- Scroll reveal (skipped when reduced motion is preferred) ---------- */
  (function () {
    try {
      if (!("IntersectionObserver" in window)) return;
      if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      var sel = "section h2, .stats > *, .pcard, section[aria-label='Profile'] img, #festivals article, .mfest > *, .mcom > *, .mmv > *, .mlist > *, #stage article, #credits table";
      var els = Array.prototype.filter.call(document.querySelectorAll(sel), function (el) { return !el.closest("#top"); });
      var vh = window.innerHeight || 800;
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.setAttribute("data-rv", "in"); obs.unobserve(en.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
      els.forEach(function (el) {
        if (el.getBoundingClientRect().top < vh * 0.92) return;
        var sib = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
        el.style.transitionDelay = (Math.min(sib, 5) % 4) * 70 + "ms";
        el.setAttribute("data-rv", "");
        obs.observe(el);
      });
    } catch (e) {}
  })();
})();
