# Phase 2 — Sol Agency, clean React + Vite + TypeScript clone

A from-scratch, framework-independent rebuild of the **Sol Studio** agency
template. **No Framer runtime, no `framer-motion` Framer wrappers, no bundled
1.9 MB runtime** — just clean, typed, maintainable React.

## Stack
- **React 18 + Vite 5 + TypeScript** (strict)
- **framer-motion** for entrance / hover / scroll motion (the standalone library, not the Framer runtime)
- Plain CSS with design tokens (CSS custom properties) — co-located per component
- All assets **vendored locally** (`src/assets/img`) — no `framerusercontent.com` dependency

## Architecture
```
src/
  assets/        vendored images + video, mapped to semantic names (index.ts)
  components/ui/ Button, SectionHeader, Marquee, Reveal, Icons (inline SVG)
  data/          content.ts — all copy/data in one typed place
  hooks/         useLiveClock, useMediaQuery
  sections/      Navbar, Hero, Testimonials, About, Projects, Niches,
                 Services, Process, Faq, Pricing, Cta, Footer (+ co-located .css)
  styles/        tokens.css (design system), global.css (reset + fonts + utilities)
  types/         shared TypeScript interfaces
  App.tsx        composition
```

## Design system
- **Type:** Instrument Serif (headings), Satoshi (body), Gloria Hallelujah (handwritten), Inter (UI) — Google Fonts + Fontshare
- **Palette:** cream `rgb(252,249,245)`, ink `rgb(13,13,13)`, accent orange `rgb(255,84,46)`
- Tokens live in `src/styles/tokens.css`; change once, restyle everywhere.

## Motion (re-implemented, no Framer runtime)
- Scroll entrance reveals (`Reveal` + framer-motion `whileInView`)
- Hero floating-mockup loops + live Riga clock
- Niches infinite marquees (CSS), Projects sticky-stacking on scroll
- Pricing monthly/annual toggle, FAQ accordion, CTA glowing orb, hover states

## Run
```bash
npm install
npm run dev        # http://localhost:5174
npm run typecheck  # tsc --noEmit (strict, clean)
npm run build && npm run preview
```

Pixel-matched to the original Framer site and to the Phase 1 reconstruction
(see the 3-way comparison in the PR). Production-ready and fully customizable.
