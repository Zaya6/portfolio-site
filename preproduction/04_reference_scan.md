# Preproduction 04 — Reference Scan

_Synthesis of four parallel research sweeps, 2026-08-11: senior-TA portfolios · art-commission conversion · multidisciplinary positioning · craft-as-proof custom sites. Deduped below._

---

## The five cross-cutting takeaways (if you read nothing else)

1. **Lead with the sensibility, not the breadth.** Every strong multidisciplinary site opens with a one-sentence thesis of *intent*; the disciplines follow as evidence. Breadth stated first = "master of none." Breadth stated as proof of a thesis = range. Your *shibumi / purity-through-subtraction* line is exactly the right shape — the risk was never the range, it's leading with it.
2. **The site must MOVE on first paint — but text paints first.** For a TA, shaders/VFX/sims only read as valuable in motion (reel or looping clips up top). BUT the headline/positioning/CTA must be real DOM text that paints instantly; the shader mounts *after* load, lazy, reduced-motion-aware. Never let first paint depend on shader compile.
3. **Subtraction is a real award-winning method, not just a vibe.** Roman Jean-Elie built an award site by *removing* features until only what mattered survived. Rauno Freiberg signals elite craft with near-zero color and pixel-level interaction detail, no 3D at all. This is shibumi, proven at the top. Rule to adopt: every effect must survive "does removing this hurt?"
4. **Context turns a gallery into evidence.** Both the TA and commission sweeps converged here: unlabeled thumbnails (your current problem) = no trust. Label pieces with title / medium / *made-for-client* / personal-vs-commission. That's what tells a buyer "you can make *my* thing."
5. **Add the business layer the current site lacks entirely.** Named service tiers, an anchor price or engagement model, live availability status, and a structured intake form. Beautiful-gallery-with-no-business-layer (Studio Tommy) only works if you're already famous. You're building a pipeline, so you need the machinery.

---

## Patterns worth stealing

### Positioning & structure
- **One identity sentence up top** that subordinates disciplines to a purpose ("immersive artist making dreamlike experiences with code"). Shaders/engines/paintings become *evidence of the sensibility*, not a menu.
- **One coherent project stream with per-project discipline tags** — NOT siloed top-level galleries per discipline (the #1 diluter: "several portfolios stapled together"). Let a recruiter filter to "technical," a buyer to "art," without the site fracturing.
- **Write in two vocabularies deliberately** — engineering terms (`GLSL`, `PBR`, `DOTS`) beside sensibility terms ("purity," "the lives depicted") in the same copy. The pairing itself argues the unifying thread and serves both audiences on one page.
- **Tailored entry point per audience, one canonical body of work** — e.g. a studio/contract landing framing + an art-commission framing that point at the *same* projects with different intros/CTAs. Duplicate the framing layer, not the work.
- **Front-load hard proof for the skeptical audience** (studio recruiter). Shipped titles, studio credits, awards above the fold — the commission buyer forgives a light résumé; the recruiter doesn't.
- **Order by significance; archive the weak stuff.** Curation itself reads as seniority (dedicated sections for major work, a "jam archive" for the rest).

### Proving the work
- **Reel-first**, then short looping per-effect clips (GIF/MP4) on each card. Show **parameters changing in real time** — proves it's a *system* an art director can drive, not a screenshot.
- **Show the node graph / the math.** Breakdowns with the wiring visible prove authorship and depth. This is your literal "sees the math and the beauty" claim, made concrete.
- **Pair every tool/system with a before→after or time-saved metric** ("cut retopo 2hr→5min"). Quantified impact is the single most common gap in strong TA sites and the easiest way to out-convert them.
- **Structure case studies as problem → approach → result**, not deliverable lists. "What I made" without "how/why" is the most-cited weakness.
- **Group skills by domain**, not an alphabetical tag wall (e.g. "Engine & Rendering" / "Languages & Extensions" / "Art & Motion").
- **Optional authority layer:** a breakdown/blog stream builds a referable name in the tech-art community (halisavakis.com model). Later-phase, not launch-critical.

### Converting to inquiries (commission side)
- **Split "hire me" into named, pickable services** — concept art, character design, environment art, 3D model, rig, shader/tool work, debugging/optimization. A viewer should self-identify their need in one glance.
- **Show pricing or an anchor** — a "starting at" number or a day-rate/engagement model filters tire-kickers and signals you've done this before. (Benchmarks gathered: freelance illustration ~$200–2,500/project; 3D rigging ~$45–85/hr NA; comparable day-rate ~$400. Sanity anchors, not prescriptions.)
- **State scope terms up front** — revision cycles, deposit threshold, ownership/licensing (Rights-Managed vs. Work-for-Hire). Reads as professional to studios, removes the buyer's open-ended-process fear.
- **Per-service CTA → structured intake form**, not a bare mailto. Fields for style, usage/licensing, deadline, budget, references — the form does the scoping and yields a *qualified* lead. Include a **Company Name / studio-vs-personal branch** so B2B contract work is visibly welcome.
- **Stack trust proof near the CTA** — named testimonials (strongest), studio credits, recognizable shipped titles.
- **Live availability status** — "Commissions OPEN / next slot [month]" or CLOSED + waitlist. Creates urgency; most sites omit it (easy differentiator).
- **Put a real human on it** — named identity, real contact. Lowers the risk of paying a stranger. Aligns with your Gosling "human, not narcissist" voice.

### Craft-as-proof (the site itself)
- **HTML-first, WebGL as progressive enhancement.** Styled H1/CTA paint instantly; shader fades in behind after `load`.
- **One signature shader moment, executed at 60fps** — not ten scattered effects. A scroll-velocity distortion or a single hero scene, kept subtle (low amplitude, registers subliminally).
- **Micro-interaction craft over spectacle** — crafted hover/focus/transition states and typography can signal senior skill with *no 3D at all* (Rauno). Most on-brand for shibumi.
- **Perf hygiene as a visible flex** — a TA shipping a fast WebGL site (OffscreenCanvas/Worker compile, lazy 3D bundle, reserved canvas dims to kill CLS) is demonstrating the exact optimization skill studios pay for.
- **Quiet interface around loud work** — when the shaders/art are already visually maximal, keep the chrome understated so it doesn't compete (Wolf van Veen / John O'Really gallery model).

---

## Traps to avoid
- **Stapled portfolios** — separate top-level galleries per discipline with no shared frame. Biggest diluter.
- **Skills-list-as-identity** — leading with a laundry list before a thesis.
- **Unlabeled thumbnails** — your current art page. No title/medium/client = no trust.
- **No business layer** — beautiful gallery, no services/pricing/availability/form (only works if already famous).
- **CTA buried where intent peaks** — even good sites forget a CTA *inside* the services/rates section.
- **Bare mailto only** — invites unqualified "how much?" and loses mobile.
- **Static-only galleries for motion work** — never make a decision-maker click out to YouTube to see it move.
- **Jargon with no translation** — loses the producer/art-director who signs the contract.
- **No metrics** — the most common, most fixable weakness.
- **The playable-world gimmick** — drive-a-car / explorable-city hero hijacks the 10-second hiring skim; antithetical to shibumi. Admire the *technique*, never make it the spine.
- **WebGL hero as the LCP element / ~600KB Three.js before content** — tanks Core Web Vitals, looks broken on slow connections.
- **No reduced-motion / noscript / mobile fallback** — accessibility + SEO hole; crawlers and time-boxed recruiters see an empty page.
- **Interactivity that gates content** — never make a recruiter earn your résumé.
- **Volume over selection** — a wall of okay work signals hobbyism; a few gems signal depth.

---

## Exemplar shortlist (worth actually looking at)

**Closest overall models**
- **Astrid Wilde** — astridwilde.com/portfolio — best TA *conversion* structure: reel-first, outcome language, domain-grouped skills, explicit "Hiring a technical artist?" CTA.
- **Santi Grau** — proper-code.com/pro-portfolio — closest to your situation & sensibility: per-project discipline tags in one feed, dual vocabulary ("GLSL" + "purity and essentiality"), early Apple/Google credibility.
- **Rengin Tumer** — rengintumer.com/commissions — best commission converter: tiered pricing, per-service intake forms, commercial-use FAQ, A-list testimonials (V.E. Schwab, Moon Studios).

**Aesthetic north stars (shibumi / restraint)**
- **Rauno Freiberg** — rauno.me & rauno.me/craft — elite craft via interaction detail + typography, near-zero color, no 3D. Purest restrained reference.
- **Roman Jean-Elie** — romanjeanelie.com (Codrops case study) — award WebGL built by *subtraction*; a few deep effects at 60fps.

**TA gallery / credibility models**
- **Wolf van Veen** — wolfvanveen.art — filterable effect cards (post-processing/shaders/particles), understated chrome. Direct shader-gallery template.
- **John O'Really** — johno.re — clean, text-forward, breakdown/gist-driven "show the math" layer; strong AAA curation.
- **Ben Cloward** — bencloward.com — the very-plain floor: studio-facing credibility tolerates almost no gimmick (too plain to copy, useful as the boundary).

**Commission engagement-model reference**
- **Chris Ables** — chrisablesart.com/illustration-services-rates-fees — clearest engagement model: day rate, per-page rates, Rights-Managed vs. Work-for-Hire, deposit/revision terms.
- **Monkey Feet** — monkeyfeetillustration.com/hire-an-illustrator — strong inquiry flow, B2B "Company Name" field, no published prices but heavy testimonials.

**Cautionary**
- **Studio Tommy** — studiotommy.co — elite visuals, zero business layer. What NOT to copy while building a pipeline.
- **Bruno Simon** — bruno-simon.com — drive-a-car world; admire the technique, avoid the structure.
- **Samsy** — WebGPU cyberpunk city; maximalist showpiece, cautionary for a shibumi site.

**Browse pool**
- Muzli "100 Best Designer Portfolios 2025" — muz.li/blog — for nav & section-sequencing patterns.

---

## How this reshapes the build (feeds IA + art direction)
- **Home** = thesis sentence + one restrained signature motion moment + hard-proof credentials + dual CTA (Commission / Contract).
- **Work** = one filterable stream, discipline-tagged, case-study depth on the top pieces, motion clips + node-graph breakdowns + time-saved metrics.
- **Services/Hire** = named tiers across art *and* tech, anchor pricing / engagement model, scope terms, live availability, structured intake with personal-vs-studio branch.
- **About** = self-taught narrative, the visualization superpower, shibumi thesis, Gosling-register voice.
- **Craft standard** = HTML-first, one 60fps shader moment, perf hygiene as flex, quiet chrome, reduced-motion/mobile fallbacks throughout.
