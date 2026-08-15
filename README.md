# History of India

An original, interactive website for exploring Indian history by scrolling through time. The
eventual experience will combine a changing historical timeline with responsive text, maps,
illustrations, and visual scenes.

This repository currently contains the production foundation, one presentation-only Prehistoric
India scaffold, and the focused three-event timeline prototype. It deliberately does not yet
include a complete historical narrative, database, authentication, CMS, or external storage.

## Current stack

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

The homepage is one continuous `1500vh` storytelling section containing a sticky viewport. Its
first phase is a data-driven opening cinematic: nine reversible beats move from darkness through
the supplied opening copy, abstract deep-time visuals, a placeholder landform, and a placeholder
artifact before resolving to `PREHISTORIC INDIA`. No external media or additional historical copy
is included.

A single ScrollTrigger maps the full section to normalized progress. The opening owns the first
portion, then dissolves into timeline progress zero without introducing a second scroll controller.
The remaining progress:

- interpolates the visible chronology, including deep-time and BCE/CE labels;
- moves the timeline rail indicator;
- selects the active prehistoric scaffold or one of the three later prototype events;
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
reversible, scroll-scrubbed fade, crossfade, slide, scale, and parallax transitions. The current
three scenes use gradients and SVG placeholders only.

The content system is organized as `Era -> Period -> Event`. The eight planned eras are declared
in the canonical dataset. Prehistoric India is prepared as one era containing eight periods. Lower
Palaeolithic has one explicitly marked placeholder event so its visual sequence can run; the other
seven periods remain empty until research is supplied. Dates use separate calendar and years-ago
representations, so deep time is not forced into BCE/CE. The original three later-era prototype
events remain intact.

Future researched prehistoric events belong in
`src/data/timeline/prehistoric-india.ts`. Their presentation-only scene definitions belong in
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

See [docs/architecture.md](docs/architecture.md) for the full architectural guidance.

## Deployment

The app is compatible with Vercel's standard Next.js deployment flow. No Vercel-specific runtime
configuration is required at this stage.

## Content and asset policy

Historical content must be stored outside component and animation code, sourced carefully, and
represented with explicit types. Only assets with clear usage rights should be committed, along
with attribution or license information when required. The project is original and does not copy
Neal.fun source code, visual designs, or assets.
