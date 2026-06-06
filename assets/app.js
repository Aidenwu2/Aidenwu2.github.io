/* =====================================================================
   app.js — rendering + interactions for the homepage.
   Reads SITE and I18N from data.js. Re-renders dynamic sections when
   the language changes; chrome (hero, nav) uses CSS [data-lang] spans.
   ===================================================================== */
(function () {
  "use strict";
  var root = document.documentElement;
  var lang = root.getAttribute("data-lang") || "en";

  /* pick a localized string from a value that may be a plain string
     (language-neutral) or an { en, zh } object */
  function t(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[lang] != null ? v[lang] : (v.en != null ? v.en : "");
  }
  function el(id) { return document.getElementById(id); }

  /* small icon set ------------------------------------------------- */
  var ICON = {
    ext: '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>',
    book: '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  };

  function head(kicker, title) {
    return '<div class="section__head"><span class="section__kicker">' + kicker +
           '</span><h2 class="section__title">' + t(title) + "</h2></div>";
  }

  /* ---- Renderers -------------------------------------------------- */
  function renderMetrics() {
    el("metrics").innerHTML = SITE.metrics.map(function (m) {
      return '<div class="metric"><div class="metric__value">' + m.value +
             '</div><div class="metric__label">' + t(m.label) + "</div></div>";
    }).join("");
    el("metricsNote").innerHTML = t(SITE.metricsNote);
  }

  function renderAbout() {
    el("about").innerHTML = head("Profile", I18N.head.about) +
      '<div class="prose">' + SITE.about[lang].map(function (p) { return "<p>" + p + "</p>"; }).join("") + "</div>";
  }

  function renderNews() {
    el("news").innerHTML = head("Recent", I18N.head.news) +
      '<ul class="news">' + SITE.news.map(function (n) {
        return '<li><span class="news__year">' + n.year + '</span><span class="news__text">' + t(n) + "</span></li>";
      }).join("") + "</ul>";
  }

  function renderResearch() {
    var cards = SITE.research.areas.map(function (a) {
      return '<article class="card"><h3 class="card__title">' + t({ en: a.en, zh: a.zh }) +
             '</h3><p class="card__desc">' + (lang === "zh" ? a.dZh : a.dEn) + "</p></article>";
    }).join("");
    el("research").innerHTML = head("Focus", I18N.head.research) +
      '<p class="research-intro">' + t(SITE.research.intro) + "</p>" +
      '<div class="cards">' + cards + "</div>";
  }

  function pubItem(p) {
    var title = (lang === "zh" && p.titleZh) ? p.titleZh : p.title;
    var venue = (lang === "zh" && p.venueZh) ? p.venueZh : p.venue;
    var titleHtml = p.url
      ? '<a href="' + p.url + '" target="_blank" rel="noopener">' + title + "</a>"
      : title;
    var badges = '<span class="badge badge--role">' + t(p.role) + "</span>";
    (p.badges || []).forEach(function (b) {
      var cls = /citation|被引/i.test(b) ? "badge badge--cite" : "badge";
      badges += '<span class="' + cls + '">' + b + "</span>";
    });
    var link = p.url ? '<a class="pub__link" href="' + p.url + '" target="_blank" rel="noopener">DOI ' + ICON.ext + "</a>" : "";
    return '<li class="pub' + (p.lead ? " is-lead" : "") + '" data-year="' + p.year + '">' +
      '<h3 class="pub__title">' + titleHtml + "</h3>" +
      '<p class="pub__meta"><span class="pub__authors">' + p.authors + '</span> &middot; ' + t(p.date) +
      ' &middot; <span class="pub__venue">' + venue + "</span> " + (p.detail ? "&middot; " + p.detail : "") + "</p>" +
      '<div class="pub__badges">' + badges + " " + link + "</div></li>";
  }

  function renderPublications() {
    var years = [];
    SITE.publications.forEach(function (p) { if (years.indexOf(p.year) < 0) years.push(p.year); });
    years.sort(function (a, b) { return b - a; });
    var chips = '<button class="chip' + (activeYearFilter === "all" ? " active" : "") + '" data-filter="all">' + t(I18N.misc.allYears) + "</button>" +
      years.map(function (y) {
        return '<button class="chip' + (String(activeYearFilter) === String(y) ? " active" : "") + '" data-filter="' + y + '">' + y + "</button>";
      }).join("");

    var chapters = SITE.bookChapters.map(function (c) {
      var title = (lang === "zh" && c.titleZh) ? c.titleZh : c.title;
      return '<li class="pub"><h3 class="pub__title">' + title + "</h3>" +
        '<p class="pub__meta"><span class="pub__authors">' + c.authors + "</span> &middot; " + c.year +
        " &middot; " + t(c.venue) + "</p></li>";
    }).join("");

    var working = SITE.working.map(function (w) {
      return '<li class="pub"><h3 class="pub__title">' + w.title + "</h3>" +
        '<p class="pub__meta">' + '<span class="pub__authors">' + w.authors + "</span></p>" +
        '<div class="pub__badges"><span class="badge badge--role">' + t(w.status) + "</span></div></li>";
    }).join("");

    el("publications").innerHTML = head("Scholarship", I18N.head.pubs) +
      '<div class="pub-filter" id="pubFilter">' + chips + "</div>" +
      '<h3 class="pub-subhead">' + t(I18N.head.journals) + "</h3>" +
      '<ul class="pub-list" id="pubList">' + SITE.publications.map(pubItem).join("") + "</ul>" +
      (SITE.bookChapters.length ? '<h3 class="pub-subhead">' + t(I18N.head.chapters) + '</h3><ul class="pub-list">' + chapters + "</ul>" : "") +
      (SITE.working.length ? '<h3 class="pub-subhead">' + t(I18N.head.working) + '</h3><ul class="pub-list">' + working + "</ul>" : "");

    wirePubFilter();
    applyYearFilter();
  }

  var activeYearFilter = "all";
  function applyYearFilter() {
    var list = el("pubList");
    if (!list) return;
    list.querySelectorAll(".pub").forEach(function (li) {
      var keep = activeYearFilter === "all" || li.getAttribute("data-year") === String(activeYearFilter);
      li.style.display = keep ? "" : "none";
    });
  }
  function wirePubFilter() {
    var filter = el("pubFilter");
    if (!filter) return;
    filter.addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      filter.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("active"); });
      btn.classList.add("active");
      activeYearFilter = btn.getAttribute("data-filter");
      applyYearFilter();
    });
  }

  function renderGrants() {
    el("grants").innerHTML = head("Funded research", I18N.head.grants) +
      '<div class="grants">' + SITE.grants.map(function (g) {
        return '<article class="grant' + (g.pi ? " is-pi" : "") + '">' +
          '<h3 class="grant__title">' + t(g.title) + "</h3>" +
          '<span class="grant__role">' + t(g.role) + "</span>" +
          '<p class="grant__org">' + t(g.org) + " &middot; " + g.period + "</p></article>";
      }).join("") + "</div>";
  }

  function renderTalks() {
    el("talks").innerHTML = head("Invited & conference", I18N.head.talks) +
      '<ul class="talks">' + SITE.talks.map(function (k) {
        return '<li class="talk"><span class="talk__year">' + k.year + "</span><div>" +
          '<p class="talk__title">' + t(k.title) + "</p>" +
          '<p class="talk__venue">' + t(k.venue) + "</p></div></li>";
      }).join("") + "</ul>";
  }

  function renderTeaching() {
    el("teaching").innerHTML = head("Courses", I18N.head.teaching) +
      '<p class="teach-note">' + t(SITE.teaching.note) + "</p>" +
      '<div class="courses">' + SITE.teaching.courses.map(function (c) {
        return '<div class="course">' + ICON.book + "<span>" + t(c) + "</span></div>";
      }).join("") + "</div>";
  }

  function renderTimeline() {
    el("experience").innerHTML = head("Path", I18N.head.cv) +
      '<ul class="timeline">' + SITE.timeline.map(function (it) {
        return '<li class="tl-item ' + (it.kind === "edu" ? "is-edu" : "is-exp") + '">' +
          '<div class="tl-period">' + it.period + "</div>" +
          '<div class="tl-role">' + t(it.role) + "</div>" +
          '<div class="tl-org">' + t(it.org) + "</div>" +
          '<div class="tl-note">' + t(it.note) + "</div></li>";
      }).join("") + "</ul>";
  }

  function renderHonors() {
    el("honors").innerHTML = head("Recognition", I18N.head.honors) +
      '<ul class="honors">' + SITE.honors.map(function (h) {
        return '<li><span class="honors__year">' + h.year + "</span><span>" + t(h) + "</span></li>";
      }).join("") + "</ul>";
  }

  function renderService() {
    var s = SITE.service;
    el("service").innerHTML = head("Profession", I18N.head.service) +
      '<div class="service-grid">' +
        '<div class="svc-block"><p class="svc-block__label">' + t(I18N.misc.editorial) + "</p>" +
          '<ul class="svc-list">' + s.editorial.map(function (x) { return "<li>" + t(x) + "</li>"; }).join("") + "</ul></div>" +
        '<div class="svc-block"><p class="svc-block__label">' + t(I18N.misc.reviewing) + "</p><p>" + t(s.reviewing) + "</p></div>" +
        '<div class="svc-block"><p class="svc-block__label">' + t(I18N.misc.memberships) + "</p><p>" + t(s.memberships) + "</p></div>" +
        '<div class="svc-block"><p class="svc-block__label">' + t(I18N.misc.practice) + "</p>" +
          '<ul class="svc-list">' + s.practice.map(function (x) { return "<li>" + t(x) + "</li>"; }).join("") + "</ul></div>" +
      "</div>";
  }

  function renderContact() {
    el("contactInner").innerHTML = head("Get in touch", I18N.head.contact) +
      '<div class="contact-grid"><div>' +
        '<p class="contact__affil">' + t(I18N.misc.affiliation) + "</p>" +
        '<div class="contact__rows">' +
          '<div class="contact-row"><span class="contact-row__k">' + t(I18N.misc.primaryEmail) + '</span><span class="contact-row__v"><a href="mailto:' + SITE.links.email + '">' + SITE.links.email + "</a></span></div>" +
          '<div class="contact-row"><span class="contact-row__k">' + t(I18N.misc.altEmail) + '</span><span class="contact-row__v"><a href="mailto:' + SITE.links.email2 + '">' + SITE.links.email2 + "</a></span></div>" +
          '<div class="contact-row"><span class="contact-row__k">ORCID</span><span class="contact-row__v"><a href="' + SITE.links.orcid + '" target="_blank" rel="noopener">' + SITE.links.orcid.split("/").pop() + '</a></span></div>' +
        "</div></div>" +
        '<div class="contact__links">' +
          '<a class="btn btn--primary" href="mailto:' + SITE.links.email + '">' + t(I18N.btn.email) + "</a>" +
          '<a class="btn" href="' + SITE.links.scholar + '" target="_blank" rel="noopener">Google Scholar</a>' +
          '<a class="btn" href="' + SITE.links.orcid + '" target="_blank" rel="noopener">ORCID</a>' +
          '<a class="btn" href="' + SITE.links.cvEn + '" target="_blank" rel="noopener">' + t(I18N.btn.cvEn) + "</a>" +
          '<a class="btn" href="' + SITE.links.cvZh + '" target="_blank" rel="noopener">' + t(I18N.btn.cvZh) + "</a>" +
        "</div></div>";
    el("footerNote").innerHTML = t(SITE.footerNote);
  }

  /* Keep accessible names for icon-only / stateful controls in sync with
     the current language and theme. Called from renderAll and setTheme. */
  function applyA11yLabels() {
    var isDark = root.getAttribute("data-theme") === "dark";
    var ph = document.querySelector(".hero__photo"); if (ph) ph.alt = t(I18N.a11y.portraitAlt);
    var lt = el("langToggle"); if (lt) lt.setAttribute("aria-label", t(I18N.a11y.switchLang));
    var tt = el("themeToggle");
    if (tt) {
      tt.setAttribute("aria-label", t(isDark ? I18N.a11y.themeToLight : I18N.a11y.themeToDark));
      tt.setAttribute("aria-pressed", isDark ? "true" : "false");
    }
    var cv = el("cvBtn"); if (cv) cv.setAttribute("aria-label", t(I18N.a11y.cvMenu));
    var bg = el("burger"), nl = el("navLinks");
    if (bg) bg.setAttribute("aria-label", t(nl && nl.classList.contains("open") ? I18N.a11y.closeMenu : I18N.a11y.openMenu));
  }

  function renderAll() {
    renderMetrics(); renderAbout(); renderNews(); renderResearch();
    renderPublications(); renderGrants(); renderTalks(); renderTeaching();
    renderTimeline(); renderHonors(); renderService(); renderContact();
    applyA11yLabels(); observeReveal();
  }

  /* ---- Interactions ---------------------------------------------- */
  function setLang(next) {
    lang = next;
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "zh" ? "zh-Hans" : "en");
    try { localStorage.setItem("lang", lang); } catch (e) {}
    renderAll();
  }
  function setTheme(next) {
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    applyA11yLabels();
  }

  function wireChrome() {
    el("langToggle").addEventListener("click", function () { setLang(lang === "en" ? "zh" : "en"); });
    el("themeToggle").addEventListener("click", function () {
      setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });

    // Mobile menu
    var burger = el("burger"), links = el("navLinks"), scrim = el("scrim");
    function setBurgerLabel(open) { burger.setAttribute("aria-label", t(open ? I18N.a11y.closeMenu : I18N.a11y.openMenu)); }
    function closeMenu(restoreFocus) {
      links.classList.remove("open"); scrim.classList.remove("show");
      burger.setAttribute("aria-expanded", "false"); setBurgerLabel(false);
      if (restoreFocus) burger.focus();
    }
    function openMenu() {
      links.classList.add("open"); scrim.classList.add("show");
      burger.setAttribute("aria-expanded", "true"); setBurgerLabel(true);
      var first = links.querySelector("a"); if (first) first.focus();
    }
    burger.addEventListener("click", function () {
      if (links.classList.contains("open")) closeMenu(); else openMenu();
    });
    scrim.addEventListener("click", function () { closeMenu(); });
    links.addEventListener("click", function (e) { if (e.target.closest("a")) closeMenu(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("open")) closeMenu(true);
    });

    // CV dropdown
    var cvBtn = el("cvBtn"), cvMenu = el("cvMenu");
    function toggleCv(force) {
      var open = force != null ? force : !cvMenu.classList.contains("open");
      cvMenu.classList.toggle("open", open);
      cvBtn.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) { var first = cvMenu.querySelector("a"); if (first) first.focus(); }
    }
    cvBtn.addEventListener("click", function (e) { if (!e.target.closest(".cv-menu")) toggleCv(); });
    cvBtn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleCv(); }
      if (e.key === "Escape") toggleCv(false);
    });
    document.addEventListener("click", function (e) { if (!e.target.closest("#cvBtn")) toggleCv(false); });

    // Header shadow on scroll
    var header = document.querySelector(".site-header");
    function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Scrollspy
    var navMap = {};
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      navMap[a.getAttribute("href").slice(1)] = a;
    });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var a = navMap[en.target.id];
        if (!a) return;
        if (en.isIntersecting) {
          Object.keys(navMap).forEach(function (k) { navMap[k].classList.remove("active"); });
          a.classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(navMap).forEach(function (id) { var s = el(id); if (s) spy.observe(s); });
  }

  var revealObserver;
  function revealAll() { document.querySelectorAll(".reveal:not(.in)").forEach(function (n) { n.classList.add("in"); }); }
  function observeReveal() {
    if (!("IntersectionObserver" in window)) { revealAll(); return; }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.04 });
    }
    document.querySelectorAll(".reveal:not(.in)").forEach(function (n) { revealObserver.observe(n); });
    // Safety net: never let content stay hidden if the observer never fires.
    clearTimeout(observeReveal._t);
    observeReveal._t = setTimeout(revealAll, 2600);
  }

  /* ---- Boot ------------------------------------------------------- */
  renderAll();
  wireChrome();
})();
