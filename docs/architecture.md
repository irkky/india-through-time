# Architecture

**Content update, 18 October 2026:** Prehistoric India now contains 24 sourced records and an
undated introduction. See [the current chapter guide](prehistoric-content.md); the scaffold-only
descriptions below document the original prototype and are superseded by that guide. The server
also supplies an evidence reader as children of the interactive experience, so the sources remain
readable without JavaScript. Scroll space now grows with the event count.

The current ingestion boundary and prioritized remaining work are documented in
[Project review](project-review.md). `src/lib/content/compile.ts` assembles a validated model in
the server page; `TimelineExperience` consumes its props. CLI checks additionally audit local scene
assets and report missing sources/rights. Events without a visual reference get a default text scene.

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

## Opening cinematic

The opening is a separate storytelling layer, not a historical event or a special case in the
generic Scene Controller:

```text
TimelineExperience / one ScrollTrigger
  -> normalized opening progress
    -> OpeningCinematic controller
  -> handoff frame
  -> normalized historical progress
    -> existing Timeline Engine
      -> historical Scene Controller
```

`src/data/opening/opening-sequence.ts` is the serializable source of truth for opening copy,
normalized ranges, visual kinds, transition choices, and animation settings. The dedicated React
renderers in `src/components/opening` turn those records into semantic text and placeholder SVGs.
`src/animations/opening/cinematic.ts` consumes DOM bindings and updates only opacity and transforms;
`transitions.ts` owns frame interpolation and the handoff dissolve.

`TimelineExperience` remains the sole resolved-state owner. Its existing ScrollTrigger delegates
the first progress partition to the opening controller and holds historical progress at zero. Near
the boundary, the chapter frame clears while the already-matched teal atmosphere reveals the first
timeline scene; the remaining progress is remapped from zero to one for the unchanged historical
resolver. Navigation performs the inverse mapping, so event buttons target the historical partition
without maintaining a second scroll model.

The Lower Palaeolithic record retains its original scaffold ID but now uses the shared SVG exhibit layout and carries sourced
content. The opening hands into this scene, followed by the illustrated prehistoric records and the
later prototype scenes through the same timeline resolver. Regional prehistoric records may overlap
the later eras chronologically.

Reduced-motion users receive discrete scene states and a direct boundary handoff. Inactive opening
and timeline layers update `aria-hidden`, and continuous animation does not cause React renders.

### Opening media insertion points

- Put opening-only stills and illustrations in `public/assets/opening/images/`, videos or image
  sequences in `public/assets/opening/video/`, and opt-in music/atmosphere in
  `public/assets/opening/audio/`.
- Extend the relevant entry in `src/data/opening/opening-sequence.ts` with asset metadata; keep copy,
  rights, credit, poster, and playback configuration serializable and outside JSX.
- Render new still/video visual kinds in `src/components/opening/OpeningVisual.tsx`. Keep the SVG
  placeholders there until real licensed assets are ready.
- Bind scroll-driven video time, image-sequence frames, or camera scale in
  `src/animations/opening/cinematic.ts`; keep easing and handoff interpolation in
  `src/animations/opening/transitions.ts`.
- Add future audio through a focused client component under `src/components/opening/` with an
  explicit play/mute control. Playback must never autoplay audibly, and synchronization should
  consume opening progress from the same controller.
- Historical event imagery, video, maps, and other assets do not go through the opening system.
  Add them to event media metadata, reference them from `src/data/scenes`, and render them through
  the existing generic `SceneLayer` path.

### `src/data`

Owns structured, machine-readable records for the timeline, historical events, and maps. Data
files should be serializable, validated at their boundary, and independent of React and animation
libraries. `src/data/timeline/indian-history.ts` is the canonical hierarchy and contains all eight
top-level eras. `src/data/timeline/prehistoric-india.ts` owns the Prehistoric India era and its
periods. Unresearched periods and eras remain empty; placeholder events must never be invented
simply to fill the tree.

### `src/content`

Owns long-form authored narrative, organized initially into `eras` and `events`. MDX can be added
when narrative content begins. Content should reference stable data identifiers rather than import
UI or animation modules.

### `src/types`

Owns shared domain types. The historical hierarchy is `HistoricalEra -> HistoricalPeriod ->
HistoricalEvent`. Events own structured dates, content metadata, relationships, asset references,
and sources. Presentation-only types are separate from these historical records. Avoid duplicating
types inside components.

`HistoricalEvent` supports date ranges and approximation, description and significance,
categories, regions and locations, archaeological sites, people and hominins, related events,
media and map references, sources and citations, and explicit uncertainty or scholarly-
interpretation notes. Fields that do not apply to a particular event stay absent; unsupported
claims must never be filled with guesses.

### `src/lib`

Owns pure utilities and thin adapters around third-party libraries. Keep browser-only packages
behind client boundaries, and expose the smallest practical API to the rest of the application.

## Historical dates

Content dates are a discriminated union. Calendar dates use
`{ kind: "calendar", year, era: "BCE" | "CE" }`; the year remains a positive integer, so content
never contains year zero or uses a negative year to imply BCE. Deep-time expressions use
`{ kind: "years-ago", years }` and therefore do not pretend that phrases such as “1.5 million years
ago” are BCE calendar dates. Approximation is stored on the event because it describes the
certainty of the historical claim, not the chronology representation.

Date utilities convert values to an internal sortable ordinal:

```text
2 BCE -> -1
1 BCE ->  0
1 CE  ->  1
2 CE  ->  2
```

This coordinate is used only for comparison and interpolation. It makes BCE/CE sorting continuous
and also places deep-time values correctly before later calendar dates. Formatted output preserves
the appropriate display form, such as `~1.5 million years ago` or `~10,000 BCE`. `dateEnd` is
optional for point events, and hierarchy compilation rejects ranges whose end precedes their start.

## Timeline compilation

`flattenTimeline` traverses every era and period, validates event identifiers and date ranges, and
returns one chronologically sorted list of nodes. Each node retains references to its parent era
and period, so the UI can resolve all three hierarchy levels without copying metadata.

The current prototype then projects those nodes through `timeline-presentation.ts`, which resolves
each event's scene reference and adds presentation metadata. The canonical historical records do
not contain CSS colors or animation settings. Scroll progress is distributed evenly across the
resulting event list; the resolver selects the nearest event and interpolates a display date between
adjacent event dates.

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
existing `visualReference.id` through `scene-presentations.ts` to a scene definition. React's
`SceneStage` renders the declared layers through small layer renderers, while the Scene Controller
only manipulates their generic DOM bindings. A scene can declare multiple image, video,
image-sequence, text, decorative, or map layers. A layer may also declare a normalized `timeline`
range with fade, scale, and vertical-travel settings. The generic controller applies those values
from reversible local scene progress; it never checks prehistoric event IDs. A media layer's
`referenceId` links it back to event-owned media metadata without moving styling or playback
behavior into the historical record.

Incoming scene transitions may set `portion` to confine a crossfade/slide/scale to a smaller window
around the boundary between two events. The Lower Palaeolithic scaffold uses this through the
existing Indus presentation, allowing its final configured beat to finish before the prototype
scene appears.

To add a future visual without editing the controller:

1. Give the historical event a stable `visualReference.id`.
2. Add a scene definition for that ID with its layers, assets, transition, and duration.
3. Add a renderer only if the asset/layer type is genuinely new.
4. Connect media progress through lifecycle hooks when playback or frame seeking is required.

## Prehistoric India ingestion workflow

Prehistoric India is one `HistoricalEra` with the subtitle supplied for this chapter. Its eight
ordered `HistoricalPeriod` records are:

1. Before History
2. Lower Palaeolithic
3. Middle Palaeolithic
4. Upper Palaeolithic
5. Mesolithic
6. Neolithic
7. Chalcolithic
8. Transition toward early urban/Harappan societies

The introduction has undated context, and the seven archaeological periods contain 24 sourced
records. The stable ID `lower-palaeolithic-scaffold` is retained for stable links, and its
content is now researched. Other records live in `src/data/timeline/prehistory/events.ts`; bibliography
and research gaps have their own files. Do not place palettes, layer positions or playback settings
in historical records. See the chapter guide for the current chronology and remaining gaps.

If the event has a cinematic presentation, give it a stable `visualReference.id` and add the
matching entry to `src/data/scenes/prehistoric-scenes.ts`. The scene entry targets the event ID with
`timelinePointId`, declares its ordered layers and event-owned media/map references, and selects its
duration and incoming transition. `scene-presentations.ts` merges that registry with the unchanged
prototype scenes, while `timeline-presentation.ts` verifies that every populated timeline event has
a matching scene aimed at the correct event ID.

The legacy `lower-palaeolithic-placeholder-sequence` remains available in the scene registry, but is
not selected by the current data. All 24 records use registered SVG exhibits. Their points resolve the event's
description, significance/location or interpretation note. The native-dialog explorer reads the same
compiled events for search, source inspection and related-event jumps. Hash links delegate to the
existing scroll controller. Inactive scenes and opening layers are inert as well as aria-hidden.

The runtime path remains generic:

```text
Prehistoric HistoricalEvent
  -> visualReference.id
    -> prehistoric scene presentation
      -> resolved timeline progress
        -> SceneController
          -> layered SceneStage
```

Scroll progress drives the resolved date and current event. The same position then drives reversible
scene transitions. `onEnter` and `onLeave` provide scene lifecycle boundaries; `onProgress` provides
normalized scene progress for video seeking, image sequences, progressive zoom/parallax behavior,
or future map-state adapters. None of these adapters should branch on prehistoric event names.

### `public/assets`

Owns static files served without transformation:

- `images`: raster source imagery.
- `illustrations`: authored visual artwork.
- `maps`: GeoJSON or other map assets suitable for direct serving.
- `models`: compressed 3D assets, only when a scene justifies them.
- `videos` and `audio`: period-specific cinematic media when supplied and licensed.

Prehistoric collections should be grouped below `public/assets/` as
`images/prehistoric/`, `maps/prehistoric/`, `videos/prehistoric/`, and
`audio/prehistoric/`. Browser references always begin with `/assets/`.

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
