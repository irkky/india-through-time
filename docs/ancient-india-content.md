# Ancient India & Early Transitions

Researched and integrated on 19 October 2026. This is an expandable, sourced overview,
not an exhaustive catalogue or a claim that every historical question is settled.

## Chapter structure

The chapter contains 15 dated records in four reading sections: Cities of the Indus,
Regional transformations, Vedic oral worlds, and Iron Age regional worlds.
Additional context covers Kalibangan, overseas exchange, oral preservation and
megalithic monuments without inventing precise event dates.

The single Indus prototype has been replaced; its `indus-valley-civilization` ID
is preserved so existing links still work. The main timeline now has 41 events.
The two later-era prototypes remain outside this research pass.

## Chronology and transitions

Records are sorted globally by their start date, including overlaps with Prehistoric
India. Selecting an era jumps to its earliest record; subsequent chronological
scrolling may revisit another era's regional evidence. This is intentional.

Several urban themes share 2600-1900 BCE. The year therefore stays at the same
historical anchor while moving between those contemporary topics; fake intervening
dates are not inserted for animation. Scrolling still changes scenes, stages and
progress. When event dates differ, the year interpolates normally in either direction.

Every ancient record has a `dateScope` explaining the meaning of its dates, cited
sources, and interpretation limits. PGW follows the cited review's chronology;
the early Upanishads deliberately overlap the following era. Megalithic traditions
remain contextual because the overview does not supply one defensible founding date.

The existing weighted scroll controller handles all new scenes. Ancient scenes use
the same three stages, separate text fades, reverse scrolling and reduced-motion
behaviour. Detailed notes, citations and additions open in the evidence viewer.
All 15 records and their sources also render in `#ancient-reader` without JavaScript.

## Where to add material

| Content                                                          | File                                   |
| ---------------------------------------------------------------- | -------------------------------------- |
| Event facts, dates, locators, related links and per-event tags   | `src/data/timeline/ancient/events.ts`  |
| Bibliographic records and URLs                                   | `src/data/timeline/ancient/sources.ts` |
| Period introductions, undated context and regional research gaps | `src/data/timeline/ancient-india.ts`   |
| Scene diagrams, captions and image galleries                     | `src/data/scenes/ancient-exhibits.ts`  |
| Local photographs and plates                                     | `public/assets/images/ancient_india/`  |

Open a scene's evidence viewer or its reading entry to find its **Collection checklist**.
Each item has a searchable tag such as `ADD_SITE_PHOTO`, `ADD_PHASE_PLAN`,
`ADD_ARCHAEOBOTANY`, `ADD_DATING_TABLE`, `ADD_AUDIO` or `ADD_TRANSLATION`.
These are instructions, not broken upload controls. Add files and metadata in the
locations above, then remove or revise the fulfilled tag.

Useful next additions:

- Dholavira: reservoir photograph and phase-labelled measured plan.
- Mohenjo-daro: drain/house section or Great Bath photograph.
- Crafts and weights: catalogued specimens with materials, dimensions and scale.
- Food: published archaeobotanical plate with site and phase.
- Lothal: measured basin plan and object-based evidence for any mapped trade routes.
- Regional transitions: comparative settlement datasets and sampling limitations.
- Early iron: calibrated sample table, stratigraphy and production evidence from
  the corrected publication; avoid isolated earliest-date claims.
- Vedic/Upanishadic entries: rights-cleared translations with passage identifiers;
  recordings must identify their modern performer, date and recitation tradition.
- PGW: excavated pottery plate and comparative site sequences.
- Wider coverage: site-specific Kalibangan, peninsular megalithic and eastern
  ironworking sequences before promoting those research slots to dated events.

## Sources and visual provenance

Each record links directly to its sources and includes a section/table locator.
The source registry includes UNESCO heritage records, HARP excavation reporting,
museum catalogues, peer-reviewed archaeological studies, INFLIBNET teaching
chapters and the Internet Encyclopedia of Philosophy. Regional summaries are
not used as exact dates for individual structures or objects.

The Met's object 49.40.1 image is downloaded locally. Its collection page explicitly
marks it Public Domain: <https://www.metmuseum.org/art/collection/search/324062>.
The ancient seal and its **modern** impression are distinguished in the caption.
Image credit: The Metropolitan Museum of Art, Dodge Fund, 1949.

Rakhigarhi includes Figure 3 from Shinde et al. (2018), PLOS ONE 13(2): e0192299,
downloaded unchanged from <https://doi.org/10.1371/journal.pone.0192299.g003>.
Credit: © 2018 Shinde et al.; [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
The gallery links the original figure and licence. This annotated aerial photograph
is a modern excavation record, not an ancient city reconstruction.

Six new original SVG teaching diagrams explain water, weights, seal impressions,
oral transmission, furnaces and pottery. All are labelled explanatory and not to
scale; they do not impersonate excavation plans, translate Indus signs, or invent
historical recordings. Existing diagrams are reused where appropriate.

## Checks

`npm run check` validates types, formatting, sources, related IDs, ranges and
navigation. `npm run build` verifies server rendering. Run
`node scripts/browser-smoke.cjs http://localhost:<port>` against the current build
for desktop/mobile scene fit, image loading, checklists, citations, chapter
boundaries, forward/reverse transitions, hydration and readers without JavaScript.
