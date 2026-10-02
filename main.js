(function () {
  "use strict";
  var ACCENT = "#D9AE55";
  var DATA = {
      film: [
        ["Sutsot", "Lead — Brian", "Kislap Films (UST)", "Xzarriane Lim", "Mar 2017"],
        ["Isa't Kalahati", "Lead — Ian (Imaginary Son)", "Frankie's Angels (DLSU Lipa)", "Judy Ann Hernandez", "Jan 2019"],
        ["The End \"Lunod\"", "Lead — Choi", "Adober Studios – ABS-CBN", "Rai Clemente", "Mar 2019"],
        ["Gugma", "Lead — Anton (Albularyo's Son)", "Moviesaurus Production (UST)", "Paolo Valera", "Apr 2019"],
        ["Istorya ng Pagkawala", "Lead — Mizael (Manglalakbay)", "Binhi Productions (FEU)", "Novi Francisco", "Apr 2019"],
        ["Stalker", "Lead", "OgieD Productions Inc.", "Ogie Diaz", "Aug 2019"],
        ["Limbo", "Lead — Anton (Beggar)", "Jerks Production", "Luke Miraflor", "Sep 2019"],
        ["Tao Po", "Lead — Nico (Spirit)", "Illuminare Production", "Mizael Tilos", "Jun 2021"],
        ["Arcanghel", "Lead — Romeo", "Arcanghel Production (Mapúa)", "Theophany Dionisio", "Jun 2022"],
        ["All The Things Left Unsaid", "Lead", "Recto Pictures", "Josh Van Ulric Campo", "Dec 2022"]
      ],
      tv: [
        ["Luv U", "Bit — Guitarist Student", "ABS-CBN", "Edgar Mortiz", "2015 – 2016"],
        ["MMK \"Spoken Words\"", "Bit — Student Bully", "ABS-CBN", "—", "Nov 2015"],
        ["All Of Me", "Bit — Student Bully", "ABS-CBN", "Dondon Santos", "Dec 2015"],
        ["And I Love You So", "Bit — Friend of Kenzo", "ABS-CBN", "Onat Diaz", "—"],
        ["Class 3C Has A Secret", "Bit — Student Bully", "ABS-CBN", "—", "—"],
        ["Be My Lady", "Bit — Nephew of Yayo", "ABS-CBN", "Theodore Boborol", "Mar 2016"],
        ["Home Sweetie Home", "Bit — Store Staff", "ABS-CBN", "Edgar Mortiz", "Jan 2018"],
        ["Ipaglaban Mo \"Hazing\"", "Bit — Frat Student", "ABS-CBN", "Ludwig Peralta", "Jan 2018"]
      ],
      ads: [
        ["Nature Spring (Flavored)", "Support", "Nature Spring", "—", "2016"],
        ["Dahil Kay Ma'am", "Lead — CJ Tolentino", "Vibal Group Inc.", "Luke Miraflor", "Oct 2017"],
        ["Pei Pa Koa", "Lead", "Pei Pa Koa", "Silver Belen", "Jul 2019"],
        ["Everything But Cheese", "Lead", "Arkos Digital", "Ken Leviste", "Mar 2021"],
        ["Globe (Reinvented Globe Rewards)", "Support", "Arcade Film Factory Inc.", "—", "Mar 2021"],
        ["Chippy", "Lead", "Universal Robina Corporation", "—", "Apr 2021"],
        ["Netflix — May K Ka Pala: Kingdom", "Support", "Gigil Production", "Rae Red", "Apr 2022"],
        ["Smart", "Support", "—", "—", "Feb 2023"],
        ["Samsung Galaxy A34 / A54 5G", "Lead", "—", "—", "Nov 2023"],
        ["Netflix — Okey ka Kokey!", "Support", "Gigil Production", "Marius Talampas", "Dec 2023"],
        ["Jollibee (Yum Burger)", "Lead", "—", "—", "Apr 2024"],
        ["PS Bank", "Lead", "—", "—", "Aug 2024"],
        ["Cobra", "Support", "—", "Sid Maderazo", "Jul 2025"]
      ],
      stage: [
        ["Ambon ng Kristal", "Lead — Ambet", "Vineyard Production", "Bong Ramos", "2017 – 2020"],
        ["#FourthEver", "Lead — Danda", "Vineyard Production", "Bong Ramos", "2017 – 2020"],
        ["Solo Para Adultos", "Support — Young Veronica", "Red Lantern Production", "Bong Ramos", "2018"],
        ["Hindi Ito Senakulo (Jesus Christ Superstar, Tagalog Adaptation)", "Lead — Ryan, Jesus Christ & Judas", "Edukultura Entertainment", "Bong Ramos", "2024 – present"],
        ["Ang Tatlong Hari (Musical)", "Support — Jasper", "Pamahalaang Lungsod ng Pasig", "Bong Ramos", "2025"]
      ],
      mv: [
        ["Bawat Kaluluwa (IV of Spades)", "Lead", "Twofold Production", "Raymond Dacones", "Jan 2019"],
        ["Sigurado (Imago)", "Lead", "Universal Records", "Dan Angelo Eligado", "May 2021"],
        ["Dahan-Dahan (Mizael)", "Lead / Artist", "Universal Records PH", "—", "2023"]
      ],
      dir: [
        ["Tao Po", "Writer / Director", "Illuminare Production", "2nd Best Eastern Visayan Film (Experimental), Pambujan Int'l Film Festival (Mar 2022)", "Jun 2021"],
        ["VR Animation", "Director", "Unfold Production", "—", "Jul 2024"],
        ["My Superman (MV)", "Director", "—", "—", "Dec 2024"]
      ]
    };

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
  var total = 0;
  Object.keys(DATA).forEach(function (k) { total += DATA[k].length; });
  document.getElementById("total").textContent = total;

  function esc(t) { var d = document.createElement("div"); d.textContent = t; return d.innerHTML; }

  defs.forEach(function (def) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "ctab"; b.setAttribute("role", "tab"); b.dataset.cat = def[0];
    b.innerHTML = esc(def[1]) + '<span class="chip">' + DATA[def[0]].length + "</span>";
    b.addEventListener("click", function () { renderCredits(def[0]); });
    tablist.appendChild(b);
    var o = document.createElement("option");
    o.value = def[0]; o.textContent = def[1] + " (" + DATA[def[0]].length + ")";
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
    var rows = DATA[id].slice().reverse();
    var td = "padding: 14px 18px; border-bottom: 1px solid #322D28; ";
    tbody.innerHTML = rows.map(function (r) {
      return "<tr>" +
        '<td style="' + td + 'font-weight: 700">' + esc(r[0]) + "</td>" +
        '<td style="' + td + 'color: #CFC8BD" data-label="' + h.role + '">' + esc(r[1]) + "</td>" +
        '<td style="' + td + 'color: #CFC8BD" data-label="Production">' + esc(r[2]) + "</td>" +
        '<td style="' + td + 'color: #CFC8BD" data-label="' + h.dir + '">' + esc(r[3]) + "</td>" +
        '<td style="' + td + "font-family: 'IBM Plex Mono', monospace; font-size: 13px; color: #A39C92; text-align: right; white-space: nowrap\">" + esc(r[4]) + "</td>" +
        "</tr>";
    }).join("");
    document.getElementById("rowCount").textContent = rows.length;
  }
  renderCredits("film");

  /* ---------- Carousels ---------- */
  var carousels = {
    sen: { photos: ["images/senakulo-1.jpg", "images/senakulo-2.jpg", "images/senakulo-3.jpg", "images/senakulo-4.jpg", "images/senakulo-5.jpg"], i: 0, off: "#4A4540", label: "Hindi Ito Senakulo production photo " },
    hari: { photos: ["images/tatlong-hari-1.jpg", "images/tatlong-hari-2.jpg", "images/tatlong-hari-3.jpg"], i: 0, off: "#4A4540", label: "Ang Tatlong Hari production photo " },
    thea: { photos: ["images/ambon-fourthever-1.jpg", "images/ambon-fourthever-2.jpg"], i: 0, off: "#4A4540", label: "Ambon ng Kristal & #FourthEver production photo " },
    dahil: {
      photos: ["images/dahil-kay-maam.jpg", "images/dahil-kay-maam-adobo-finalist.jpg"],
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
})();
