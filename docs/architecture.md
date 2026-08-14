# Architecture

## Goals

This foundation is designed for a long-form, scroll-driven historical experience that can grow
without coupling content, presentation, and animation. It favors a small initial dependency set,
server-rendered output by default, and progressive enhancement for expensive visuals.

## Folder responsibilities

### `src/app`

Owns Next.js routes, route layouts, metadata, global styles, and route-level composition. Keep page
files small: they should assemble domain components and load data, not contain a complete scene or
timeline implementation.

### `src/components`

Owns React UI. Components are grouped by domain:

- `timeline`: timeline controls, markers, labels, and viewport UI.
- `historical-events`: event cards, summaries, and related presentation.
- `maps`: map containers, overlays, legends, and accessible fallbacks.
- `visual-scenes`: SVG, canvas, and eventual 3D scene presentation.
- `site`: small site-wide or foundation-level components.

Prefer focused, composable components. Use Client Components only at interactive leaves; keep
parents as Server Components whenever possible.

### `src/animations`

Owns animation orchestration, timelines, easing, ScrollTrigger setup, and cleanup. Animation
modules may consume typed state and element references, but must never own historical facts or
copy. Keep GSAP contexts and browser listeners scoped to a component lifecycle, and always clean
them up.

The current timeline controller lives in `src/animations/timeline/index.ts`. It accepts DOM
references and timeline values from the UI boundary, creates the scrubbed ScrollTrigger sequence,
and returns one cleanup function that reverts the complete GSAP context.

### `src/data`

Owns structured, machine-readable records for the timeline, historical events, and maps. Data
files should be serializable, validated at their boundary, and independent of React and animation
libraries. `src/data/timeline/indian-history.ts` is the canonical hierarchy and contains all eight
top-level eras. Unresearched eras remain empty; placeholder events must never be invented simply
to fill the tree.

### `src/content`

Owns long-form authored narrative, organized initially into `eras` and `events`. MDX can be added
when narrative content begins. Content should reference stable data identifiers rather than import
UI or animation modules.

### `src/types`

Owns shared domain types. The historical hierarchy is `HistoricalEra -> HistoricalPeriod ->
HistoricalEvent`. Events own structured dates, content metadata, relationships, asset references,
and sources. Presentation-only types are separate from these historical records. Avoid duplicating
types inside components.

### `src/lib`

Owns pure utilities and thin adapters around third-party libraries. Keep browser-only packages
behind client boundaries, and expose the smallest practical API to the rest of the application.

## Historical dates

Content dates use `{ year: number, era: "BCE" | "CE" }`. The year must be a positive integer, so
the content model never contains year zero or uses a negative year to imply BCE. Approximation is
stored on the event because it describes the certainty of the historical claim, not the calendar.

Date utilities convert values to an internal sortable ordinal:

```text
2 BCE -> -1
1 BCE ->  0
1 CE  ->  1
2 CE  ->  2
```

This coordinate is used only for comparison and interpolation. It makes BCE/CE sorting continuous
while formatted output always returns a valid historical date. `dateEnd` is optional for point
events, and hierarchy compilation rejects ranges whose end precedes their start.

## Timeline compilation

`flattenTimeline` traverses every era and period, validates event identifiers and date ranges, and
returns one chronologically sorted list of nodes. Each node retains references to its parent era
and period, so the UI can resolve all three hierarchy levels without copying metadata.

The current prototype then projects those nodes through `prototype-presentation.ts`, which adds
temporary palettes and abstract scene identifiers. The canonical historical records do not contain
CSS colors. Scroll progress is distributed evenly across the resulting event list; the resolver
selects the nearest event and interpolates a display date between adjacent event dates.

## Navigation state flow

`TimelineExperience` is the only stateful owner of the active event index. The GSAP timeline
controller resolves scroll progress through the shared timeline resolver and reports an index only
when the nearest event changes. React therefore updates era, period, event, and nearby-event UI at
event boundaries rather than on every animation frame.

Continuous date and progress readouts are updated directly by that same GSAP controller. The
navigation UI does not calculate scroll positions. Event, period, and era buttons pass a compiled
event index back to `TimelineExperience`, which delegates to the controller's `scrollToIndex`
method. That method uses the shared timeline-position utilities and the active ScrollTrigger's
measured start/end range. Reduced-motion navigation jumps directly instead of tweening.

The storytelling layer and persistent navigation are sibling components. Both consume the same
active event, but navigation markup remains independent from scene markup and animation setup.

## Scene system

The scene system is the boundary between resolved timeline state and visual rendering:

```text
Timeline ScrollTrigger
  -> ResolvedTimelinePosition
    -> SceneController
      -> SceneStage and layered DOM
```

`src/types/scene.ts` defines asset-neutral scene contracts. A `SceneDefinition` identifies its
timeline point, logical duration metadata, incoming transition, and ordered layers. Layer roles include
background, image, video, text, map, and decorative content. Optional asset metadata already
supports images, videos, and image sequences; map layers carry reference/state IDs rather than map
implementation details.

The generic controller lives in `src/animations/scenes`. It receives scene definitions and DOM
bindings, then consumes resolved timeline positions from the timeline engine. It owns scene
enter/leave state and renders fade, crossfade, slide, scale, or depth-based parallax frames with
GSAP. Transitions are set from continuous scroll progress, so reversing scroll reverses the visual
transition without replaying a one-shot animation.

Scene lifecycle hooks expose `onEnter`, `onLeave`, and normalized `onProgress`. Future media
adapters will use these hooks to seek a video, choose an image-sequence frame, or update a map
state. The duration value is already validated and travels with the definition; a future scroll
geometry compiler can use it to allocate unequal scene lengths without changing the controller.
Those behaviors belong in adapters; they must not add historical conditionals to the core controller.

Scene definitions remain outside React in `src/data/scenes`. The current prototype maps an event's
existing `visualReference.id` to a scene definition. React's `SceneStage` renders the declared
layers through small layer renderers, while the Scene Controller only manipulates their generic DOM
bindings.

To add a future visual without editing the controller:

1. Give the historical event a stable `visualReference.id`.
2. Add a scene definition for that ID with its layers, assets, transition, and duration.
3. Add a renderer only if the asset/layer type is genuinely new.
4. Connect media progress through lifecycle hooks when playback or frame seeking is required.

### `public/assets`

Owns static files served without transformation:

- `images`: raster source imagery.
- `illustrations`: authored visual artwork.
- `maps`: GeoJSON or other map assets suitable for direct serving.
- `models`: compressed 3D assets, only when a scene justifies them.

Use descriptive lowercase filenames, optimize assets before committing, and record required
attribution or license details alongside each asset collection.

## Dependency direction

```text
app -> components -> animations/lib
 |         |
 +------> data/content -> types
```

Data and content must not import from components or animations. Animation code may read typed
values supplied by UI code, but it must not import historical records directly. This keeps the
same content reusable in static, animated, map, and accessibility-focused views.

## Development rules

1. Keep TypeScript strict; do not use `any` to bypass a modeling decision.
2. Keep historical facts and narrative out of JSX and animation setup.
3. Default to Server Components and static rendering. Add `"use client"` at the smallest boundary
   that needs browser APIs, state, or effects.
4. Respect `prefers-reduced-motion` and ensure content remains understandable without animation.
5. Use transforms and opacity for frequent animation, avoid layout thrashing, and batch DOM reads
   before writes.
6. Load Three.js, mapping, and other heavy browser code dynamically and only on routes or scenes
   that need it.
7. Use D3 primarily for scales, geometry, and data transforms; let React own ordinary SVG markup
   unless direct rendering is measurably necessary.
8. Prefer SVG for accessible vector scenes, Canvas for high object counts, and WebGL only when it
   materially improves the experience.
9. Give every visual an accessible textual equivalent. Keyboard access and semantic reading order
   are requirements, not later enhancements.
10. Verify `npm run check` and `npm run build` before merging.

## Performance budget mindset

- Do not install a planned library until its first real use.
- Avoid global Client Components that force the entire page into the client bundle.
- Lazy-load below-the-fold scenes and release observers, timelines, textures, and WebGL resources
  when they leave their lifecycle.
- Prefer responsive, modern image formats and explicit dimensions to avoid layout shift.
- Measure on mid-range mobile hardware as the timeline becomes interactive.

## Deferred decisions

The complete content schema, source citation format, MDX pipeline, mapping stack, 3D renderer,
analytics, and persistence layer are intentionally deferred until requirements exist. Supabase,
authentication, a CMS, and external storage remain out of scope.
