# Preproduction 06 — Information Architecture

_Drafted 2026-08-11. Turns the positioning (02), voice (03), scan (04), and inventory (05) into a sitemap + content model. Built to the ship-as-WIP + append-friendly constraint._

---

## Design principles carried in from the scan
1. **Lead with the sensibility.** Home opens on the shibumi thesis sentence; disciplines read as evidence.
2. **One coherent, filterable work stream** — NOT siloed galleries per discipline (the "stapled portfolios" trap).
3. **Two audiences, one body of work.** A Commission path and a Contract path *frame* the same work differently and route to different intakes. Duplicate the framing layer, not the work.
4. **Append-friendly.** Adding a project / art piece / shader = drop one content entry; no page restruct: the structure is a stream + filters, not hand-built pages.
5. **Text paints first, craft enhances.** Real DOM headline + CTA instant; one restrained motion moment mounts lazily.
6. **Context = trust.** Every entry carries title + medium/stack + personal-vs-client, even if placeholder at launch.

---

## Sitemap (v1)

```
/                 Home — thesis, signature motion moment, hard-proof strip, dual door (Commission | Contract), curated highlights
/work             Unified work index — filterable card stream (the core of the site)
/work/:slug       Case study — problem → approach → result, embedded video, breakdown, metric
/art              Art gallery — curated pieces, lightbox detail (title + medium, placeholder OK)
/shaders          Shader / craft showcase — the ONE place things render live (art-direction decision 07)
/commissions      ART page — commission tiers (illustration/character/concept/environment/3D/rig), process, pricing, art intake, availability
/contract         STUDIO page — tech-art & engineering services (shaders/tools/pipeline/debug-opt/engine/full-game), engagement model, contract intake
/about            Self-taught arc, shibumi thesis, the visualization superpower, résumé, real face
/contact          (or folded into /hire) — routes to intake, email, LinkedIn
```

**Primary nav:** Work · Art · Shaders · Commissions · Contract · About  _(Commissions + Contract may collapse under a single "Hire ▾" if the bar gets crowded on mobile)_
**Persistent CTA** in header: "Work with me" → a light chooser or defaults to `/commissions`.

> **Update 2026-08-11 (Isaiah):** Commission work is its **own dedicated page** (`/commissions`), distinct from `/contract`. The two home doors now route to two real pages — "Commission art →" → `/commissions`, "Hire for a contract →" → `/contract` — rather than two sections of one combined hire page. Both are append-friendly (add a tier = add a block) and both still draw from the one canonical work stream.

> **Art-direction decision (07):** live shader craft is concentrated on `/shaders`, NOT smeared across the global chrome — the rest of the site stays simple, dark, minimalist. Home's "signature moment" is therefore restrained (elegant type + gold-on-dark), with the real render-craft reserved for the Shaders room. `/shaders` is append-friendly too: new shaders drop in as entries.

> Kept deliberately small. WIP means the smallest nav that holds the two audiences; sections get added, not rearranged.

---

## Audience routing model

Rather than two separate homepages at launch (Ekemini's `/ct-home` pattern — parked as a **future** enhancement), v1 uses **two doors on one home**:

- **"Commission art →"** — pre-filters `/work` + `/art` to illustration / concept / 3D / character work, routes to the **art intake** (personal-or-studio).
- **"Hire for a contract →"** — pre-filters to tech-art / shaders / tools / engine / game work, routes to the **contract intake** (studio-oriented, day-rate/engagement framing).

Both doors point at the *same* entries — only the framing, default filter, and intake differ. This is the cheapest way to serve both without maintaining two sites, and it stays append-friendly.

---

## The work stream taxonomy (the append-friendly core)

Every entry (project OR art piece) is one content record with:
- `title`, `year`, `type` (case-study | art-piece), `thumb`, `video?`
- `disciplines[]` — the filter facets (see below)
- `stack[]` — tools/langs (Godot, HLSL, SDL3, Maya…)
- `audience[]` — `commission` | `contract` (drives which door surfaces it)
- `context` — personal | client | shipped-title; `client?` (NDA-gated)
- `metric?` — time-saved / perf (e.g. "~1mo → 3 days")
- `body?` — case-study long-form (problem→approach→result) for `type: case-study`

**Discipline filter facets (the public filter bar):**
`Games · Technical Art · Shaders/VFX · Tools/Pipeline · 3D & Rigging · Illustration · Concept · Design`

Adding work later = add a record + tag it. Filters, both doors, and search pick it up automatically. **This is what makes the WIP model work.**

---

## Per-page content spec (slotting the inventory)

### `/` Home
> **Update (Isaiah, latest):** Home is a **single long page mirroring the original portfolio's layout**. Top stays minimal & locked (hero + doors + proof strip — "don't change this"). Below it, **Professional Work highlighted first** (grouped: Light & Wonder → Kong/UFL Olvera Street; Everi → technical art), then a **second Personal Projects area** (Games & Engines; Tech Demos). No generic "selected work" teaser — full grouped sections instead.
- **Thesis line** (H1, real text) — chosen in the voice pass; draft: *"Finding the purest form of a single idea — in code, in art, in story."*
- **One signature motion moment** — restrained shader/canvas, lazy, reduced-motion-aware. (Candidate: a subtle shibumi-flavored effect, decided in art direction.)
- **Hard-proof strip** (above fold, for the skeptical contract audience): Light & Wonder · Everi (TA IV) · shipped titles · "25 years, self-taught."
- **Two doors:** Commission art · Hire for a contract.
- **Curated highlights:** 3–4 cards pulled across disciplines (e.g. dungeon engine, a shader, a flagship illustration) — proof of range in one screen.
- **Footer CTA + availability status** (placeholder OK).

### `/work`
> **Update (Isaiah):** Work opens on **studio work grouped by studio** — **Light & Wonder** (Kong: Skull Island, UFL Olvera Street) and **Everi** (Technical Artist IV). Each title → its own case-study page; L&W titles have placeholder pages built. Filterable stream sits alongside/below the studio grouping.
- Filter bar (facets above) + card grid.
- **Case studies (type: case-study):** dungeon (hero), BoxByte / BoxByte Next, Star Raider, Axis Engine, Hi-Score, High Voltage Link, Zoltar Speaks, Big Pig, tech demos. Each card → `/work/:slug`.
- Embedded **YouTube video per project** (already exists) on the card/detail.

### `/work/:slug` (case-study template)
- Hero (video or still) · one-line what-it-is · problem → approach → result · breakdown (node graph / process shots — add as recovered) · **metric** where available (Python ~1mo→3days) · stack tags · role/attribution (first-person, NDA-safe).
- **dungeon** gets the deepest treatment — custom C++/SDL3/SDL_GPU engine is the standout "math + beauty" story; source is locally accessible for accurate writeup (describe, don't refactor).

### `/art`
- Curated galleries (curate down from the 36; don't caption filler). Groupings kept as facets, not separate pages: Digital Painting · Concept · Design · 3D.
- Each piece: **placeholder title + medium at launch** (approved), upgraded over time; lightbox detail; personal-vs-client tag when known.

### `/commissions` and `/contract` (two dedicated pages — split per Isaiah)
- **`/commissions` (art):** named tiers — illustration, character, concept, environment, 3D model, rig — each with examples pulled from the work stream, process, and the **art intake** (personal-or-studio branch).
- **`/contract` (studio):** tech-art & engineering services — shaders, tools/pipeline, debugging & optimization, engine work, full game contracts — with a day-rate/engagement-model framing and the **contract intake**.
- Both pages share the components below; the split is framing + intake, not duplicated work.
- **Pricing/engagement:** placeholder at launch (per Isaiah) — structure ready for anchors or "starting at" / day-rate later.
- **Scope terms** (revisions/deposit/licensing): placeholder blocks, fill post-v1.
- **Availability status** component (OPEN/CLOSED + next slot).
- **Intake form** with a personal-vs-studio branch (fields: type, discipline, usage/licensing, deadline, budget, references, company name).
- **CTA repeated inside the section**, not just the footer (scan trap).

### `/about`
- The self-taught, lifelong-maker arc; shibumi as method; the **visualization superpower** (sees the math transform before coding) as the lead differentiator; range-as-depth; résumé (linked or inline); a real photo (human, not narcissist — Gosling register).

---

## Reusable components (build once, reuse everywhere — serves WIP)
- **WorkCard** (thumb, title, disciplines, video badge) — used on Home highlights, /work, filtered doors.
- **CaseStudy** template — one layout, many entries.
- **ArtPiece / Lightbox** — one layout, many pieces.
- **ServiceTier** block — repeatable across art + tech services.
- **AvailabilityStatus** — single source of truth, shown on Home + /hire.
- **IntakeForm** — one form, branched.
- **FilterBar** — drives /work, /art, and both doors.

---

## v1 vs. deferred (WIP staging)

**v1 (launch):** Home (thesis + one motion moment + doors + highlights), /work with filters + embedded videos, /art with placeholder labels, /hire with services + intake + availability (placeholder pricing), /about. dungeon case study written deep.

**Deferred (append over time):** per-audience dedicated landing pages · testimonials section · published pricing/day-rate · inline shader breakdowns with node graphs · replacing external YouTube with tasteful inline loops · breakdown/blog authority stream · recovered older work (Intel AppUp, shader library) · NDA-cleared studio visuals.

---

## Open decisions before art direction (07)
- **NDA scope** on Kong/Everi — show vs. describe-only (affects case-study depth).
- **Art vs. Work separation** — confirm the project/piece split feels right, or prefer a single fully-merged stream.
- **Home motion moment** — what the one signature effect *is* (decided in 07).
- **Domain/tech stack** for the actual build (custom-coded confirmed; framework TBD — feeds a later build-setup step, not IA).
