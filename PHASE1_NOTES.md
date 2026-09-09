# Phase 1 — Visual System & UI/UX Revamp: Summary

## Repository audit (before changes)
- Dead code: `IndustryProjects.jsx` was an empty/unused file — removed.
- `Projects.jsx` actually rendered work-experience data under `id="experience"` — the site had no real "projects" content despite the filename. Kept the experience content, built a separate reusable `ProjectCard` system for Phase 2, and left `src/data/projects.js` empty so no placeholder content ships.
- Background was a GIF (`bg.gif`) with a large black overlay — replaced with an engineered grid + radial glow + subtle noise background.
- Emoji icons (🐱 🔗 ✉️ 📸 💼 🌞 🌙) replaced with Lucide icons throughout.
- `typewriter-effect` dependency dropped in favor of a small dependency-free rotating-text component (fewer deps, same effect).
- Contact form's hardcoded `http://127.0.0.1:8000/send-email` moved behind `VITE_API_URL` (see `.env.example`), defaulting to the same local URL so nothing breaks today.
- No unused dependencies carried over (`@tailwindcss/forms`, `typography`, `aspect-ratio` were unused in the source — removed).

## What changed
- New component architecture: `components/ui` (primitives), `components/layout` (Navbar, Footer, SocialLinks), `components/sections` (Hero, About, Skills, Experience, Projects, Contact), `data/` (content), `lib/` (utils).
- New dark-first design system in `tailwind.config.js` (bg/surface/border/ink/accent tokens, type scale, spacing tokens).
- Framer Motion used for section reveals, nav active-indicator, hero entrance, rotating role text — all respect `prefers-reduced-motion` (global CSS override + a `useReducedMotion` hook for the JS-driven rotation).
- Floating, blurred, sticky navbar with scroll-spy active states and a proper mobile menu (keyboard-accessible, focus-visible states throughout).
- Contact form now has explicit idle/loading/success/error states.
- Production build verified: `npm run build` succeeds, 304KB JS / 17KB CSS gzip ~98KB.

## Content
No new experience, projects, metrics, or claims were invented — all copy is carried over verbatim from the existing site (see `src/data/*.js`), exactly per the Phase 1 constraint. Phase 2 can now drop resume-driven content straight into `src/data/*.js` and `ProjectCard`/`Experience` will pick it up with no further component work.

## Backend
`backend/` untouched — still the same FastAPI service. Point `VITE_API_URL` at wherever it's deployed when you're ready.
