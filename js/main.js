/* =============================================================================
   SHAYEX — MAIN LOGIC
   Renders the content from js/data.js and wires up interactions.
   You normally don't need to edit this file — put your content in data.js.
   ============================================================================= */

(function () {
  "use strict";

  // Always open the page at the top: stop the browser from restoring the
  // scroll position from a previous visit. If the URL targets a section
  // (e.g. .../#career), we leave that anchor jump alone.
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  if (!location.hash) {
    window.scrollTo(0, 0);
    window.addEventListener("load", () => window.scrollTo(0, 0));
  }

  const { SITE, PLAYERS, CAREER, CONTACT } = window.SHAYEX_DATA;

  // Placeholder assets used when a real image path isn't provided in data.js
  const AVATAR_PLACEHOLDER = "assets/avatar-placeholder.svg";
  const LOGO_PLACEHOLDER = "assets/logo-placeholder.svg";

  /* Tiny helper to safely escape user-provided text before inserting as HTML */
  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ------------------------------ Inline icons ---------------------------- */
  const ICON = {
    twitter: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.65l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4-8 5-8-5V6l8 5 8-5z"/></svg>',
    discord: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.317 4.369A19.8 19.8 0 0 0 15.885 3a13.8 13.8 0 0 0-.617 1.27 18.3 18.3 0 0 0-5.535 0A13 13 0 0 0 9.11 3 19.7 19.7 0 0 0 4.677 4.37C1.86 8.55 1.1 12.63 1.48 16.65a19.9 19.9 0 0 0 6.075 3.075 14.6 14.6 0 0 0 1.3-2.11 12.9 12.9 0 0 1-2.048-.98c.172-.126.34-.257.502-.392a14.2 14.2 0 0 0 12.087 0c.164.14.332.27.5.392-.652.386-1.34.714-2.05.98a14.4 14.4 0 0 0 1.3 2.11 19.8 19.8 0 0 0 6.076-3.076c.447-4.66-.764-8.705-3.205-12.28M8.02 14.18c-1.182 0-2.157-1.085-2.157-2.42s.955-2.42 2.157-2.42 2.177 1.096 2.156 2.42c0 1.335-.955 2.42-2.156 2.42m7.96 0c-1.182 0-2.157-1.085-2.157-2.42s.955-2.42 2.157-2.42 2.177 1.096 2.156 2.42c0 1.335-.954 2.42-2.156 2.42"/></svg>',
  };

  /* ================================ HERO ================================= */
  function renderHero() {
    setText("heroBadge", SITE.badge);
    // Hide the badge pill entirely when no badge text is set
    const badgeEl = document.getElementById("heroBadge");
    if (badgeEl) badgeEl.hidden = !SITE.badge || SITE.badge.trim() === "";
    setText("heroTitle", SITE.name);
    setText("heroTagline", SITE.tagline);
    setText("heroIntro", SITE.intro);
    // Hero logo (rounded square next to the text). Hide the media column if none.
    const heroMedia = document.getElementById("heroMedia");
    const heroLogo = document.getElementById("heroLogo");
    if (heroMedia && heroLogo) {
      if (SITE.logo && SITE.logo.trim() !== "") {
        heroLogo.src = SITE.logo;
        heroLogo.alt = SITE.name + " logo";
        heroMedia.hidden = false;
      } else {
        heroMedia.hidden = true;
      }
    }
    // Brand + footer already contain "SHAYEX" statically; keep them in sync with data.
    document.querySelectorAll(".brand, .footer__brand").forEach((el) => {
      el.textContent = SITE.name;
    });
  }
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value || "";
  }

  /* =============================== PLAYERS =============================== */
  function renderPlayers() {
    const grid = document.getElementById("playersGrid");
    if (!grid) return;

    grid.innerHTML = PLAYERS.map((p) => {
      const avatar = p.avatar ? esc(p.avatar) : AVATAR_PLACEHOLDER;
      const hasLink = p.twitter && p.twitter.trim() !== "" && p.twitter.trim() !== "https://x.com/";
      const link = hasLink
        ? `<a class="player-card__link" href="${esc(p.twitter)}" target="_blank" rel="noopener">
             ${ICON.twitter}<span>Follow</span>
           </a>`
        : "";
      return `
        <article class="player-card reveal">
          <img class="player-card__avatar" src="${avatar}" alt="${esc(p.name)} avatar" loading="lazy" />
          <h3 class="player-card__name">${esc(p.name)}</h3>
          <span class="player-card__org">${esc(p.org)}</span>
          <div>${link}</div>
        </article>`;
    }).join("");
  }

  /* =============================== CAREER =============================== */
  function renderCareer() {
    const wrap = document.getElementById("timeline");
    if (!wrap) return;

    wrap.innerHTML = CAREER.map((c) => {
      const logo = c.logo ? esc(c.logo) : LOGO_PLACEHOLDER;
      const type = c.type === "designer" ? "designer" : "manager";
      const desc = c.description && c.description.trim() !== ""
        ? `<p class="timeline-item__desc">${esc(c.description)}</p>`
        : "";
      return `
        <div class="timeline-item reveal" data-type="${type}">
          <img class="timeline-item__logo" src="${logo}" alt="${esc(c.org)} logo" loading="lazy" />
          <div class="timeline-item__body">
            <div class="timeline-item__top">
              <h3 class="timeline-item__org">${esc(c.org)}</h3>
              <span class="timeline-item__period">${esc(c.period)}</span>
            </div>
            <p class="timeline-item__role timeline-item__role--${type}">${esc(c.role)}</p>
            ${desc}
          </div>
        </div>`;
    }).join("");

    wireTabs();
  }

  /* Career filter tabs (All / Manager / Designer) */
  function wireTabs() {
    const tabs = document.querySelectorAll("#careerTabs .tab");
    const items = document.querySelectorAll("#timeline .timeline-item");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => {
          t.classList.remove("is-active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");

        const filter = tab.dataset.filter;
        items.forEach((item) => {
          const show = filter === "all" || item.dataset.type === filter;
          item.classList.toggle("is-hidden", !show);
        });
      });
    });
  }

  /* =============================== CONTACT =============================== */
  function renderContact() {
    const grid = document.getElementById("contactGrid");
    if (!grid) return;

    const cards = [];

    if (CONTACT.twitter && CONTACT.twitter.trim() !== "" && CONTACT.twitter.trim() !== "https://x.com/") {
      cards.push(contactCard(ICON.twitter, "Twitter / X", handleAt(CONTACT.twitter), CONTACT.twitter, true));
    }
    if (CONTACT.email && CONTACT.email.trim() !== "" && CONTACT.email.trim() !== "your@email.com") {
      cards.push(contactCard(ICON.email, "Email", CONTACT.email, "mailto:" + CONTACT.email, false));
    }
    if (CONTACT.discord && CONTACT.discord.trim() !== "" && CONTACT.discord.trim() !== "yourdiscord") {
      cards.push(contactCard(ICON.discord, "Discord", CONTACT.discord, null, false));
    }

    // If everything is still a placeholder, show a friendly hint (visible only to you while editing)
    if (cards.length === 0) {
      cards.push(`<div class="contact-card"><div class="contact-card__icon">${ICON.email}</div>
        <div><span class="contact-card__label">Contact</span>
        <p class="contact-card__value">Add your links in js/data.js</p></div></div>`);
    }

    grid.innerHTML = cards.join("");
  }

  function contactCard(icon, label, value, href, external) {
    const inner = `<div class="contact-card__icon">${icon}</div>
      <div><span class="contact-card__label">${esc(label)}</span>
      <p class="contact-card__value">${esc(value)}</p></div>`;
    if (href) {
      const attrs = external ? ' target="_blank" rel="noopener"' : "";
      return `<a class="contact-card" href="${esc(href)}"${attrs}>${inner}</a>`;
    }
    return `<div class="contact-card">${inner}</div>`;
  }

  /* Turn a Twitter URL into a nice "@handle" display string */
  function handleAt(url) {
    const m = String(url).match(/(?:twitter\.com|x\.com)\/(@?[A-Za-z0-9_]+)/);
    if (m && m[1]) return "@" + m[1].replace(/^@/, "");
    return url;
  }

  /* ============================ STICKY HEADER =========================== */
  function wireHeader() {
    const header = document.getElementById("header");
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ============================= MOBILE MENU ============================ */
  function wireMobileMenu() {
    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("nav");
    if (!toggle || !nav) return;

    const close = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    // Close the menu after tapping a link
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  }

  /* ========================= SCROLL REVEAL (fade/slide) ================= */
  function wireReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Small stagger for cards/items sharing a container
          const siblings = Array.from(entry.target.parentElement.children).filter((c) => c.classList.contains("reveal"));
          const idx = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = Math.min(idx * 70, 350) + "ms";
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    els.forEach((el) => io.observe(el));
  }

  /* ================================ INIT ================================ */
  function init() {
    renderHero();
    renderPlayers();
    renderCareer();
    renderContact();
    wireHeader();
    wireMobileMenu();
    // Reveal must run after content is injected so it picks up the new .reveal nodes
    wireReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
