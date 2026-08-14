# History of India

An original, interactive website for exploring Indian history by scrolling through time. The
eventual experience will combine a changing historical timeline with responsive text, maps,
illustrations, and visual scenes.

This repository currently contains the production foundation and a focused three-event timeline
prototype. It deliberately does not yet include a complete historical narrative, database,
authentication, CMS, or external storage.

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

## Prototype interaction

The homepage is a single `400vh` storytelling section containing a sticky viewport. ScrollTrigger
maps the distance through that section to a normalized progress value from 0 to 1. That progress:

- interpolates the visible BCE year;
- moves the timeline rail indicator;
- selects the nearest of three historical events;
- scrubs GSAP crossfades between event copy and abstract SVG scenes.

With reduced motion enabled, the same scroll positions switch states directly without scrubbed
crossfade or movement effects.

A persistent navigation panel shows the resolved date, era, period, event, nearby events, and
overall progress. Event, era, and period controls navigate through the same central GSAP timeline;
they do not maintain a second timeline calculation.

The storytelling viewport uses a reusable layered Scene System. Scene definitions live outside
React and declare their timeline point, transition, duration, and background/decorative/text/media
or map layers. A generic GSAP Scene Controller consumes the resolved timeline position and renders
reversible, scroll-scrubbed fade, crossfade, slide, scale, and parallax transitions. The current
three scenes use gradients and SVG placeholders only.

The content system is organized as `Era -> Period -> Event`. The eight planned eras are declared
in the canonical dataset, while only the three prototype events are currently populated. BCE/CE
dates use an explicit calendar-era field and are normalized only inside sorting/interpolation
utilities; historical content never uses negative years or a year zero.

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
