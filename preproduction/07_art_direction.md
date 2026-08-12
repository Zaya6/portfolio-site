# Preproduction 07 — Art Direction

_Drafted 2026-08-11. Three distinct visual directions grounded in the positioning (02), voice (03), and scan (04). Goal of this step: pick a lean (or a blend), which then drives mockups._

---

## ★ CHOSEN DIRECTION (locked 2026-08-11) — "Dark Gallery"
Isaiah's call: **Direction B's aesthetic, but pure and simple** — a beautiful, distinct, minimalist site, NOT a whole-site shader showcase. The shader craft moves into its **own dedicated showcase page** instead of driving the global chrome.

**Locked constraints:**
- **Dark backgrounds** throughout — a warm near-black, not clinical pure black.
- **Accents: white + gold**, used sparingly and brightly. Gold is the signature (wordmark, links, key highlights, hover); white is the primary light. Two accents, high restraint.
- **Beautiful yet minimalist layout.** Artist-forward — this should feel like an artist made it, elegant and distinct, not a dev template. Minimal chrome, generous space, the work carries the color.
- **Distinct, visual style** — memorable, not generic dark-creative-dev. The gold-on-dark elegance + editorial restraint is the differentiator.
- **Global chrome stays SIMPLE** — no site-wide shader/heavy motion. Craft is concentrated, not smeared everywhere.
- **Dedicated `/shaders` showcase page** — the live shader/craft proof gets its own room (the one place things move/render in real time). This is where the "sees the math and the beauty" flex lives, contained.

**Working palette (to refine in mockup):** warm near-black ground · off-white/white text · gold accent (a warm, slightly antique gold, not brassy neon). Light mode optional/secondary — the identity is dark.

**Type intent (to choose in mockup):** something beautiful + distinct + minimal — likely a refined high-contrast serif or a characterful display for headings paired with a clean, quiet sans for body/UI. Gold + white + dark wants an elegant, gallery-grade pairing.

_Everything below is the exploration that led here; retained for rationale._

---

---

## North-star constraints (true for every direction)
- **Shibumi — restraint & subtraction.** Beauty in the simple; nothing on screen that doesn't earn its place. Rauno Freiberg / Roman Jean-Elie as proof this reads as *elite*, not empty.
- **Warmth, not clinical.** Voice is Gosling — approachable, human, unpretentious. Avoid cold Swiss-minimal sterility; the restraint should feel *inviting*, not austere.
- **The duality motif: math ↔ beauty.** The one differentiator to express visually — precision (grid, wireframe, code, mathematical transform) resolving into the organic/painterly. One well-placed expression of this beats ten.
- **The work is loud, so the chrome is quiet.** His art and shaders are already visually rich; the interface stays understated so it doesn't compete.
- **Text-first, one motion moment, perf-clean, reduced-motion aware.** (From the craft scan — non-negotiable floor.)

---

## Direction A — "Quiet Atelier" _(restraint-led; safest, most shibumi)_
The site as a calm, well-lit gallery. The chrome nearly disappears; the work is the color.

- **Palette:** warm paper/off-white ground, ink near-black text, ONE muted accent (e.g. a dusty indigo or a clay/terracotta) used sparingly. Optional dark mode as warm charcoal, not pure black.
- **Type:** an editorial serif for headlines (gives warmth + craft + a "considered" feel), a clean neutral sans for body/UI. Generous whitespace, deliberate rhythm.
- **Motion:** almost none in the chrome. Craft lives in **micro-interactions** — hover/focus states, unhurried transitions, typographic detail. The "math↔beauty" moment shows up as ONE subtle hero flourish (e.g. a wireframe that softly resolves into a rendered/painted form on load).
- **Feel:** a monograph, an artist's studio. Lets both the illustrations and the shaders breathe.
- **Best for:** maximizing the art; the purest shibumi read; lowest risk; fastest to build well.
- **Risk:** if underplayed, could read as "just clean" rather than "made by a senior TA" — the one hero flourish has to carry the craft signal.

## Direction B — "Ink & Signal" _(craft-forward; most overtly technical-artist)_
Dark, precise, luminous. Leans into the engineer half — the site itself demonstrates shader/render skill.

- **Palette:** deep near-black/ink ground, warm off-white text, ONE luminous accent (a signal color — think a controlled glow). Light mode as a bright inverse.
- **Type:** a precise grotesk/mono-inflected pairing; a hint of technical/monospace in labels and metadata to signal the engineering mind (used as seasoning, not theme).
- **Motion:** the **signature shader moment** is the centerpiece — a restrained, 60fps hero effect (scroll-velocity distortion, a subtle field/flow, or a wireframe→render reveal) that *is* the "sees the math" proof. Everything else stays quiet around it.
- **Feel:** a senior TA's workbench — controlled power. Signals technical credibility above the fold to the skeptical contract audience.
- **Best for:** the contract/studio door; making the site itself a portfolio piece; the "math↔beauty" thesis literally rendered.
- **Risk:** dark + luminous can drift toward generic "creative-dev" or gamer aesthetic if not restrained; must stay warm and subtractive to keep shibumi and not undercut the fine-art side.

## Direction C — "Atmosphere" _(image-led; leans into his concept-art strength)_
His own atmospheric artwork *is* the environment. Type and UI recede; mood dominates.

- **Palette:** derived from his paintings — muted, cinematic, moody; the accent is whatever the featured piece brings. Chrome is neutral and deferential.
- **Type:** quiet, recessive; large imagery, small confident text.
- **Motion:** slow atmospheric drift, gentle parallax, unhurried cross-fades — evokes the "backstory and atmosphere" he builds into every piece.
- **Feel:** stepping into one of his worlds. Emotional, immersive, narrative.
- **Best for:** the commission/art door; showcasing the digital-painting & concept work; emotional hook.
- **Risk:** image-led chrome fights the "quiet interface around loud work" rule and can bury the technical credibility a studio needs fast; heavier to keep perf-clean; weakest for the contract audience.

---

## Recommendation — **A as the skeleton, B's one flourish as the accent**
Base the site on **Quiet Atelier** (restraint, warmth, paper-and-ink, editorial serif) — it's the truest shibumi read, serves both the art and the tech without bias, lets the loud work breathe, and is fastest to build well. Then borrow **exactly one thing from "Ink & Signal"**: the **single "math↔beauty" hero moment** (wireframe/precision resolving into rendered/painted beauty), executed at 60fps, lazy, reduced-motion-aware. That one flourish delivers the senior-TA craft signal and literally renders the differentiator — without turning the whole site dark or gimmicky.

**"Atmosphere" (C) doesn't lose** — its mood lives *inside* the work imagery and the case-study/art detail pages, where big atmospheric visuals belong, rather than in the global chrome.

This gives: shibumi restraint (A) + one precise proof-of-craft (B) + atmospheric depth where the art lives (C). Restraint everywhere, one deliberate flourish, warmth throughout.

---

## Elements to nail down once a direction is chosen
- **Exact palette** (ground, ink, one accent; light + dark tokens).
- **Type pairing** (specific faces; licensing for self-hosting).
- **The signature moment** — decide precisely what the one hero effect *is* and where it lives.
- **Logo/wordmark** treatment (his name; restrained).
- **Grid & spacing system**, motion timing/easing language, reduced-motion behavior.
- **Art-direction of thumbnails** (consistent crop/treatment so the mixed work reads as one system).

_Next after a lean is chosen: a real visual mockup (likely a published mockup artifact) of the Home + one Work card, so we're reacting to something concrete instead of words._
