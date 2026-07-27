# CHEDI — React Application

Production React conversion of the CHEDI CSA / Agri-Land / Farmer-Growth static site (`../main.html`).
Built with Vite, React Router, and Axios.

## Getting started

```bash
npm install
npm run dev       # start the dev server (http://localhost:5180)
npm run build     # production build to dist/
npm run preview   # preview the production build
npm run lint      # run ESLint
npm run format    # run Prettier
```

## Project structure

```
src/
├── assets/            # local static assets (this project's imagery is served from the
│                        original remote CDN — see constants/media.js — so this stays empty
│                        unless you add net-new local images)
├── components/
│   ├── common/        # PageLoader, ScrollToTop
│   ├── ui/            # (reserved for future shared primitives)
│   ├── layout/        # Header, Footer
│   ├── forms/         # (reserved — page-local forms currently live with their pages)
│   ├── cards/         # ModelPage, LegalPage — reusable templated page shells
│   └── tables/         # (reserved)
├── layouts/
│   └── MainLayout.jsx  # Header + Footer + page loader + scroll-to-top wrapper
├── pages/              # one folder per route (see routes/AppRoutes.jsx)
├── routes/
│   └── AppRoutes.jsx   # React Router route table, all pages lazy-loaded
├── hooks/               # useRevealObserver, useCounterObserver, useParallax,
│                          useHeaderShadow, useLongevityParticles
├── services/            # contactService.js (axios wrapper for /api/contact)
├── context/              # (reserved — no global state store was needed)
├── constants/            # routes, media URLs, and per-page content data arrays
├── styles/
│   ├── tokens.css        # CSS custom properties (design tokens)
│   ├── global.css        # reset + shared utility classes
│   └── legacy/           # the original site's CSS, ported verbatim (see below)
├── App.jsx
└── main.jsx
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/csa` | CSA (Community Supported Agriculture) |
| `/agri-land` | Agri-Land |
| `/farmer-growth` | Farmer-Growth |
| `/model-1`, `/model-2` | Partnership models |
| `/about` | About |
| `/projects` | Farm project categories |
| `/farm-listing/:categoryId` | Farms within a category |
| `/project-details/:farmId` | Plot selection + reservation flow |
| `/contact` | Contact form (posts to `/api/contact`) |
| `/terms-and-conditions`, `/privacy-policy` | Legal pages |
| `/agriland-classic` | Standalone "Agri-Land" landing page ported from `agriland.html` |

## Styling architecture — a deliberate deviation from strict CSS Modules

The source site is a ~15,000-line hand-built static site with hundreds of pre-existing,
already-uniquely-prefixed global classes (`hp-*`, `fg-*`, `land-*`, `csa-*`, `pd-*`, `fl-*`, `lng-*`, etc.)
and cross-page shared rules (`.btn`, `.cta-banner`, `.section-heading`, …). Remapping every one of those
selectors into CSS Modules would mean touching thousands of class references across markup that was ported
verbatim from `main.html`/`agriland.html` for pixel-fidelity — high risk, no visual benefit.

Instead:

- **`styles/legacy/`** contains the original `css/*.css` files and the two inline `<style>` blocks from
  `main.html`, extracted verbatim and imported once, in their original cascade order, in `main.jsx`. This is
  the styling for every page ported from `main.html`.
- **`agriland-classic`'s stylesheet is scoped**, not global: `agriland.html` shipped its own `:root` design
  tokens and generic class names (`.hero`, `.cta-btns`, `.section-header`, …) that collide by name — but not
  by value — with the main site's tokens. Its CSS was mechanically rewritten so every selector is scoped
  under `.agriland-classic-page`, and it's imported only inside that page's component (not globally), so it
  can never bleed into or be bled into by the rest of the site.
- **New components built from scratch** (`Error404`) use real CSS Modules (`*.module.css`),
  since there's no legacy selector debt to preserve there.

## Known environment caveat

The mobile hamburger drawer's open/close relies on a CSS `transition` (`opacity`/`transform`/`visibility`).
In this project's automated preview browser, CSS transitions were observed to not advance past their first
frame (confirmed independently: non-transitioned rules like `body.mobile-nav-open { overflow: hidden }`
apply instantly and correctly, while every transitioned rule stayed pinned to its start keyframe) — this is
a quirk of that specific headless preview, not the app. Verify the mobile menu in a real browser before
relying on the preview for that specific interaction.
