# History of India

An original, interactive website for exploring Indian history by scrolling through time. The
eventual experience will combine a changing historical timeline with responsive text, maps,
illustrations, and visual scenes.

This repository contains 24 sourced Prehistoric India records, 15 researched Ancient India &
Early Transitions records, and 17 Second Urbanization & Empires records, with interactive scenes
and readable evidence sections. Regional overlaps and uncertainty notes are explicit; these are expandable
overviews, not an exhaustive historical narrative. There is no database, authentication, CMS, or
external storage. See [the ancient chapter guide](docs/ancient-india-content.md) for sources,
image credits and tagged additions.

The [Second Urbanization & Empires guide](docs/second-urbanization-content.md) covers the new
chapter, its seven credited photographs and visual examples, chronology and exactly where to add further evidence.

Start with [the Prehistoric India content guide](docs/prehistoric-content.md) for the chronology,
editable files, sources, missing-research slots and asset checklist.

## Recovering a stale development page

If a hydration error appears after editing content or components, stop the development server
with **Ctrl+C**. From `D:\Indian History`, run `npm run dev:fresh`, then open the URL printed by
Next.js and hard-refresh the browser with **Ctrl+Shift+R**.

This optional command clears only generated `.next/dev` output before starting development.
It preserves your source files, images and production build. It refuses to clean while a Next.js
development lock exists or if the output directory is redirected. It does not run during normal
website use. An already-open page can still contain older HTML; reload after restarting.

The browser regression can run against either a development or production server:
`npm run test:browser -- http://localhost:3000` (replace the URL with the running server's URL).
It captures hydration errors before loading the page and checks scrolling to the bottom and reloading.

## Current stack

The data pipeline now validates and compiles historical content on the server before handing a
single model to the interactive timeline. New events can use a default scene; custom scenes remain
separate from historical content. See [the project review and roadmap](docs/project-review.md) for
the current limits, data-flow diagram, and step-by-step authoring workflow.

- Next.js 16 with the App Router
- React 19
- TypeScript with strict checking
- Tailwind CSS 4
- GSAP with ScrollTrigger
- ESLint 9 and Prettier

D3, Three.js, React Three Fiber, and MapLibre will be added individually when a concrete feature
requires them. Keeping them out of the initial bundle avoids unused dependencies and makes
performance costs explicit.

## Opening cinematic and prototype interaction

The homepage is one continuous storytelling section containing a sticky viewport. Scroll space
grows with the event count, while the opening retains its own allocation. Its
first phase is a data-driven opening cinematic: nine reversible beats move from darkness through
the supplied opening copy, abstract deep-time visuals, a placeholder landform, and a placeholder
artifact before resolving to `PREHISTORIC INDIA`. No external media or additional historical copy
is included.

A single ScrollTrigger maps the full section to normalized progress. The opening owns the first
portion, then dissolves into timeline progress zero without introducing a second scroll controller.
The remaining progress:

- animates a full-year journey counter between event start dates; event cards retain their published ranges;
- moves the timeline rail indicator;
- selects the active record across all three researched chapters;
- scrubs GSAP crossfades between event copy and abstract SVG scenes.

With reduced motion enabled, the same scroll positions switch states directly without scrubbed
crossfade or movement effects.

Opening copy, progress ranges, visual kinds, transition choices, and animation settings live in
`src/data/opening/opening-sequence.ts`. React renderers live in `src/components/opening`, and the
scrubbed controller and frame interpolation live in `src/animations/opening`. The historical event
model remains unaware of the opening.

A persistent navigation panel shows the resolved date, era, period, event, nearby events, and
overall progress. Event, era, and period controls navigate through the same central GSAP timeline;
they do not maintain a second timeline calculation.

The storytelling viewport uses a reusable layered Scene System. Scene definitions live outside
React and declare their timeline point, transition, duration, and background/decorative/text/media
or map layers. A generic GSAP Scene Controller consumes the resolved timeline position and renders
reversible, scroll-scrubbed fade, crossfade, slide, scale, and parallax transitions. Prehistoric exhibits use original explanatory SVG diagrams with selectable evidence points; the
Lower Palaeolithic exhibit now shares this layout and uses an original handaxe-and-cleaver diagram.

The content system is organized as `Era -> Period -> Event`. The eight planned eras are declared
in the canonical dataset. Prehistoric India has eight reading sections: an undated introduction
and seven archaeological periods containing 24 sourced records. Dates use separate calendar and
years-ago representations. The timeline sorts by event start dates rather than forcing regional
periods into a non-overlapping sequence. The original later-era prototype IDs now point to researched exhibits.

Prehistoric period composition and the existing Lower Palaeolithic record belong in
`src/data/timeline/prehistoric-india.ts`; the other events, bibliography and research gaps live in
`src/data/timeline/prehistory/`. Their presentation-only scene definitions belong in
`src/data/scenes/prehistoric-scenes.ts`. See the Prehistoric India ingestion workflow in
[docs/architecture.md](docs/architecture.md#prehistoric-india-ingestion-workflow).

Future opening assets should be stored under `public/assets/opening/`: images in `images/`, video
in `video/`, and music or atmospheric sound in `audio/`. Add their serializable references to the
matching scene in `src/data/opening/opening-sequence.ts`, render or seek them through
`src/components/opening/OpeningVisual.tsx` and `src/animations/opening/cinematic.ts`, and keep audio
opt-in behind a user control. Historical event media continues to use event-owned media references
and the generic scene layer system rather than the opening asset path.

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available commands

```bash
npm run dev          # Start the development server
npm run build        # Create a production build
npm run start        # Serve the production build
npm run lint         # Run ESLint
npm run typecheck    # Run the TypeScript compiler without emitting files
npm run format       # Format supported files
npm run format:check # Verify formatting
npm run check        # Run lint, type checking, and formatting checks
npm run test         # Run content and timeline regression tests
npm run test:browser -- http://localhost:3000 # Check a running production site in headless Chrome
npm run validate:content # Audit content references, scene assets, and editorial gaps
```

## Project structure

```text
src/
  app/                 Routes, layouts, metadata, and global styles
  animations/          Framework-agnostic animation setup and lifecycle code
  components/          Reusable React UI grouped by domain
  content/             Authored historical narratives (MDX later, when needed)
  data/                Structured historical, timeline, and map data
  lib/                 Shared utilities and third-party integration adapters
  types/               Shared TypeScript domain types
public/
  assets/               Static images, illustrations, maps, and 3D models
docs/
  architecture.md       Boundaries, responsibilities, and development rules
```

See [docs/architecture.md](docs/architecture.md) for the full architectural guidance and
[docs/project-review.md](docs/project-review.md) for the implemented compilation boundary and roadmap.

## Deployment

The app is compatible with Vercel's standard Next.js deployment flow. No Vercel-specific runtime
configuration is required at this stage.

## Content and asset policy

Historical content must be stored outside component and animation code, sourced carefully, and
represented with explicit types. Only assets with clear usage rights should be committed, along
with attribution or license information when required. The project is original and does not copy
Neal.fun source code, visual designs, or assets.
