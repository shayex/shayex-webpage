# SHAYEX — One-Page Website

A fast, mobile-first one-page site for **SHAYEX** — Fortnite player manager & graphic designer.
Built with plain **HTML / CSS / JS** (no framework, no build step) so it deploys anywhere in seconds.

---

## ✏️ How to edit the content

**You only ever need to edit one file:** [`js/data.js`](js/data.js).

It contains four clearly commented sections:

| Section     | What it controls                                        |
|-------------|---------------------------------------------------------|
| `SITE`      | Brand name, hero badge, tagline and intro sentence      |
| `PLAYERS`   | The players you manage (name, org, avatar, Twitter)     |
| `CAREER`    | Your history — each entry is `"manager"` or `"designer"`|
| `CONTACT`   | Twitter, email and Discord links                        |

- To **add** a player or career entry, copy an existing `{ ... }` block and edit the values.
- To **remove** one, delete its block.
- Leave a link/field as its placeholder value (or `""`) and it hides itself automatically.

### Adding real images
Placeholders are used until you add real files:
- **Player photos** → drop them in `assets/` (e.g. `assets/players/alex.jpg`) and set the `avatar` field.
- **Org logos** → drop them in `assets/` and set the `logo` field.
- Keep images optimized (compressed JPG/PNG or SVG) for fast loading.

Search the code for `TODO` to find every spot that expects your input.

---

## 👀 Preview locally

Just open `index.html` in your browser, or run a tiny local server:

```bash
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## 🚀 Deploy on Netlify

**Option 1 — Drag & drop (fastest)**
1. Go to <https://app.netlify.com/drop>
2. Drag the whole project folder onto the page. Done — you get a live URL.

**Option 2 — Connect the Git repo**
1. Push this repo to GitHub.
2. In Netlify: *Add new site → Import an existing project* → pick the repo.
3. **Build command:** leave empty. **Publish directory:** `.` (the root).
4. Deploy. Every push auto-updates the site.

Works identically on **Vercel** (framework preset: *Other*, no build command).

> After deploying, update the `og:url` and `og:image` meta tags in `index.html`
> so Twitter/X and Discord show a nice link preview.

---

## 🎨 Design

- **Palette:** "Electric Violet" — electric blue `#3B82F6`, violet `#8B5CF6` and pink `#EC4899` on a near-black violet `#08060F` background.
- **Fonts:** Orbitron (display/titles) + Inter (body), loaded from Google Fonts.
- To retheme, change the CSS variables at the top of [`css/styles.css`](css/styles.css) — everything updates from there.

---

## 📁 File structure

```
shayex-webpage/
├── index.html                    # Page structure + section anchors
├── css/styles.css                # All styling + animations
├── js/data.js                    # ⭐ YOUR CONTENT lives here
├── js/main.js                    # Rendering + scroll/menu/tab interactions
├── assets/avatar-placeholder.svg # Generic grey avatar
├── assets/logo-placeholder.svg   # Generic org logo
├── favicon.svg
└── README.md
```

© 2026 SHAYEX • All rights reserved
