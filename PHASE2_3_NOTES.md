# Phase 2 & 3 — Summary

## Phase 2 — Content & IA
- Rewrote all content in `src/data/` from the current resume: hero, about (now "Engineering Profile"), experience (4 internships), projects (InvestRight, Cronify, AI Chatbot), skills taxonomy, plus new files: `openSource.js`, `patent.js`, `certifications.js`, `achievements.js`, `education.js`.
- New sections added: Open Source (Bharat2Braille), Patent (Election Grade Mobile E-Voting System), Credentials (education + certifications + achievements, kept visually secondary).
- Positioning changed everywhere from generic "Full-Stack/MERN Developer" to "Backend Engineer — Distributed Systems — AI Infrastructure — Open Source".
- Hero now surfaces a curated set of 4 credibility metrics instead of all resume numbers at once.
- Project cards became mini case studies: click "Explore" to open a modal with Problem / Architecture (flow diagram) / Engineering Challenges / Implementation / Results.
- No fabricated project GitHub/live links: the resume's "GitHub"/"Live" labels had no resolvable URLs, so those CTAs are omitted rather than guessed.

## Phase 3 — Polish & Hardening
- Added a reusable, accessible `Modal` component: focus trap, Escape to close, focus restored to trigger on close, respects `prefers-reduced-motion`.
- Added `favicon.svg` (PG monogram) and a generated `og-image.png` (1200×630) — replaced the generic Vite favicon/preview.
- Full SEO/OpenGraph/Twitter-card metadata added to `index.html`. `rel=canonical`/`og:url` intentionally left as a comment placeholder rather than a fabricated domain — fill in once the production URL is known.
- Copied the actual resume PDF into `public/assets/` so the Resume CTA resolves in production (previously pointed at a path with no matching asset).
- Removed the unused `class-variance-authority` dependency.
- Contact form's API base URL was already environment-driven (`VITE_API_URL`) from Phase 1 — confirmed no hardcoded `127.0.0.1` ships to production, and no SMTP/credential values are ever sent to the client (backend only).
- All external links use `rel="noopener noreferrer"`.
- Verified `npm install && npm run build` succeeds cleanly (no errors/warnings).

## Known gaps / things to confirm before launch
- No profile photo asset was provided — the hero image still degrades gracefully (hidden on load error) rather than showing a broken image.
- Canonical URL / og:url need the real production domain.
- Project GitHub links are omitted since no verifiable per-project URLs were available — add them once known.
