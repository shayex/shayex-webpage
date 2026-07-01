/* =============================================================================
   SHAYEX — SITE DATA
   -----------------------------------------------------------------------------
   👉 THIS IS THE ONLY FILE YOU NEED TO EDIT to update the website content.
   Replace the placeholder values below with your real data.
   Every field is commented so you know exactly what goes where.
   Do NOT touch index.html, styles.css or main.js unless you want design changes.
   ============================================================================= */


/* -----------------------------------------------------------------------------
   1. SITE / HERO INFO
   Shown in the header, hero section and footer.
   ----------------------------------------------------------------------------- */
const SITE = {
  name: "SHAYEX",                                   // Your brand name (kept uppercase in the design)
  // Small badge line above the big title. Format suggestion: "ROLE • REGION".
  // Leave "" to hide the badge entirely (currently hidden).
  badge: "",
  // Big tagline under the title. Adjust the wording to your liking.
  tagline: "Fortnite Player Manager & Graphic Designer",
  // One short sentence pitch shown under the tagline (optional, keep it punchy).
  intro: "I manage Fortnite players and craft the visuals that make esport brands stand out.",
  // Brand logo shown beside the hero title. Leave "" to hide it.
  logo: "assets/shayex-logo.jpg",                   // TODO: replace with your logo file if it changes
};


/* -----------------------------------------------------------------------------
   2. PLAYERS — the players you manage
   Add / remove objects in this array. Order = display order.
   - name    : player gamertag / pseudo
   - org     : current organisation (use "Free Agent" if none)
   - avatar  : path to the player photo. Leave "" to use the grey placeholder.
   - twitter : full URL to their Twitter/X profile
   ----------------------------------------------------------------------------- */
const PLAYERS = [
  {
    name: "raitex",
    org: "Detect Esports",                          // handle: @DetectEsportsEU
    avatar: "assets/players/raitex.jpg",
    twitter: "https://x.com/raitexfv",
  },
  {
    name: "LORENTO",
    org: "2R Esport",                               // handle: @2R_Esport
    avatar: "assets/players/lorento.jpg",
    twitter: "https://x.com/LORENTOFN",
  },
  {
    name: "wilx",
    org: "EGY Esports",                             // handle: @EGYEsports
    avatar: "assets/players/wilx.jpg",
    twitter: "https://x.com/wilxfnr6",
  },
  {
    name: "keytu",
    org: "EGY Esports",                             // handle: @EGYEsports
    avatar: "assets/players/keytu.jpg",
    twitter: "https://x.com/7keytu",
  },
  {
    name: "levi",
    org: "Free Agent",
    avatar: "assets/players/levi.jpg",
    twitter: "https://x.com/levifn8",
  },
];


/* -----------------------------------------------------------------------------
   3. CAREER — your professional history
   Each entry can be a DESIGNER role or a MANAGER role.
   The website has tabs (All / Designer / Manager) that filter on the "type".
   - type        : "designer" OR "manager"  (must be exactly one of these two)
   - org         : organisation name
   - role        : your job title there (e.g. "Head Graphic Designer")
   - period      : free text, e.g. "2023 - 2024" or "2022 - Present"
   - description : optional short line (leave "" to hide it)
   - logo        : path to the org logo. Leave "" to use the grey placeholder.
   Tip: keep them in reverse-chronological order (most recent first).
   ----------------------------------------------------------------------------- */
const CAREER = [
  {
    type: "manager",
    org: "Sovereign Esport",
    role: "Head of Fortnite",
    period: "2026",
    description: "",
    logo: "assets/orgs/sovereign.jpg",                                       // TODO: e.g. "assets/orgs/sovereign.png"
  },
  {
    type: "designer",
    org: "EvozA Esport",
    role: "Art Director",
    period: "2023 - 2025",
    description: "",
    logo: "assets/orgs/evoza.jpg",
  },
  {
    type: "designer",
    org: "Lyost Esport",
    role: "Art Director",
    period: "2022",
    description: "",
    logo: "assets/orgs/lyost.jpg",
  },
  {
    type: "designer",
    org: "VCTRY Esport",
    role: "Graphic Designer",
    period: "2021 - 2022",
    description: "",
    logo: "assets/orgs/vctry.jpg",
  },
  {
    type: "designer",
    org: "Legion",
    role: "Graphic Designer",
    period: "2021 - 2022",
    description: "",
    logo: "assets/orgs/legion.webp",
  },
  {
    type: "designer",
    org: "Luminox Planet",
    role: "Graphic Designer",
    period: "2021",
    description: "",
    logo: "assets/orgs/luminox.jpg",
  },
  {
    type: "designer",
    org: "TT9 Esports",
    role: "Graphic Designer",
    period: "2021",
    description: "",
    logo: "assets/orgs/tt9.jpg",
  },
  {
    type: "designer",
    org: "EvozA Esport",
    role: "Art Director",
    period: "2021",
    description: "",
    logo: "assets/orgs/evoza.jpg",
  },
];


/* -----------------------------------------------------------------------------
   4. CONTACT LINKS
   Set any value to "" to hide that contact card automatically.
   ----------------------------------------------------------------------------- */
const CONTACT = {
  twitter: "https://x.com/ShayexFx",                // Twitter/X profile URL
  email: "shayex.pro@gmail.com",                    // contact email
  discord: "shayex",                                // Discord username (or "" to hide)
};


/* -----------------------------------------------------------------------------
   Do not edit below — makes the data available to main.js
   ----------------------------------------------------------------------------- */
window.SHAYEX_DATA = { SITE, PLAYERS, CAREER, CONTACT };
