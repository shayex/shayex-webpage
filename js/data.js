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
  // TODO: replace [YOUR REGION] with your country/region (e.g. "EU", "France").
  badge: "PLAYER MANAGER & GRAPHIC DESIGNER • [YOUR REGION]",
  // Big tagline under the title. Adjust the wording to your liking.
  tagline: "Fortnite Player Manager & Graphic Designer",
  // One short sentence pitch shown under the tagline (optional, keep it punchy).
  intro: "I manage professional Fortnite players and craft the visuals that make esport brands stand out.",
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
    avatar: "",                                     // TODO: e.g. "assets/players/raitex.jpg"
    twitter: "https://x.com/raitexfv",
  },
  {
    name: "LORENTO",
    org: "2R Esport",                               // handle: @2R_Esport
    avatar: "",                                     // TODO: e.g. "assets/players/lorento.jpg"
    twitter: "https://x.com/LORENTOFN",
  },
  {
    name: "wilx",
    org: "EGY Esports",                             // handle: @EGYEsports
    avatar: "",                                     // TODO: e.g. "assets/players/wilx.jpg"
    twitter: "https://x.com/wilxfnr6",
  },
  {
    name: "keytu",
    org: "EGY Esports",                             // handle: @EGYEsports
    avatar: "",                                     // TODO: e.g. "assets/players/keytu.jpg"
    twitter: "https://x.com/7keytu",
  },
  {
    name: "levi",
    org: "Free Agent",
    avatar: "",                                     // TODO: e.g. "assets/players/levi.jpg"
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
    type: "manager",                                // "designer" or "manager"
    org: "Organisation Name",                       // TODO
    role: "Player Manager",                         // TODO
    period: "2024 - Present",                       // TODO
    description: "Managing the competitive Fortnite roster.", // optional
    logo: "",                                       // TODO: e.g. "assets/orgs/org.png"
  },
  {
    type: "designer",
    org: "Organisation Name",
    role: "Graphic Designer",
    period: "2023 - 2024",
    description: "Full visual identity, social media assets and matchday graphics.",
    logo: "",
  },
  {
    type: "designer",
    org: "Organisation Name",
    role: "Freelance Designer",
    period: "2022 - 2023",
    description: "",
    logo: "",
  },
  {
    type: "manager",
    org: "Organisation Name",
    role: "Assistant Manager",
    period: "2022 - 2023",
    description: "",
    logo: "",
  },
];


/* -----------------------------------------------------------------------------
   4. CONTACT LINKS
   Set any value to "" to hide that contact card automatically.
   ----------------------------------------------------------------------------- */
const CONTACT = {
  twitter: "https://x.com/",                        // TODO: your Twitter/X profile URL
  email: "your@email.com",                          // TODO: your contact email
  discord: "yourdiscord",                           // TODO: your Discord username (or "" to hide)
};


/* -----------------------------------------------------------------------------
   Do not edit below — makes the data available to main.js
   ----------------------------------------------------------------------------- */
window.SHAYEX_DATA = { SITE, PLAYERS, CAREER, CONTACT };
