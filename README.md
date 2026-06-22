# Sol Agency — Framer → React (two-phase rebuild)

Reproduction of the **Sol Studio** agency template (source: `solagency.framer.website`)
delivered in two independent, side-by-side implementations.

| Phase | Branch | What it is |
|-------|--------|------------|
| **Phase 1** | `phase-1-framer-reconstruction` | The Framer "Design to AI" code export assembled into a runnable **Vite + React** app. Renders through the bundled Framer runtime + `framer-motion` + Lenis. Faithful to the exported code. |
| **Phase 2** | `phase-2-react-clone` | A clean, framework-independent **React + Vite + TypeScript** rebuild. No Framer runtime. Modular typed components, vendored assets, animations re-implemented. Production-ready and fully customizable. |

Both reproduce the same design: identical layout, spacing, typography, colors,
animations and responsive behavior — pixel-for-pixel with the original.

## Sections
Navbar · Hero · Testimonials · About ("Design that delivers") · Projects · Niches ·
Services (+ stats) · Process · FAQ · Pricing · CTA · Footer.

## Design system
- **Type:** Instrument Serif (headings), Satoshi (body), Gloria Hallelujah (handwritten), Inter (UI)
- **Palette:** cream `rgb(252,249,245)`, near-black `rgb(13,13,13)`, accent orange `rgb(255,84,46)`

See each branch for build/run instructions.
