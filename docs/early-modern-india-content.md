# Early Modern India: research and authoring guide

The chapter adds 54 India-focused entries, 162 evidence sections and five public-domain museum images. It covers 1498–1765 through political history, regional resistance, farming, women's work, devotional communities, trade, printing, textiles, art, architecture and astronomy. It is a substantial expandable selection, not a claim to contain every historical fact.

## Chronology

Five navigation phases group entries by their starting dates:

| Phase                                      | Entry dates |
| ------------------------------------------ | ----------- |
| Ports, communities and competing states    | 1498–1555   |
| Imperial consolidation and regional voices | 1556–1604   |
| Courts, craft and cities                   | 1605–1657   |
| Contested power and new institutions       | 1658–1706   |
| Regional states and the Company transition | 1707–1765   |

These boundaries organise reading; they do not imply simultaneous transitions across India. Long-running topics cross phases and overlap the previous chapter. All chapters interleave by start date in the global timeline. Century filters intersect complete date ranges. Scroll distance allows reading time and is not proportional to elapsed years. Contemporary links indicate overlapping dates, not proven contact.

Exact events, reigns, approximate topic windows and individual object dates are distinguished. Chand Bibi's defence in 1595 and a painting remembering her around 1700 are separate records. The Nilgai painting and Shah Jahan portrait captions distinguish painting dates from older calligraphy on the reverse. The Taj Mahal entry distinguishes the principal mausoleum from the wider construction programme. Rani Durgavati's entry explicitly records the discrepancy between the NCERT attack date and the university biography's 1564 death date.

The closing sequence is Plassey (1757), Panipat (1761), Buxar (1764) and the Diwani grant (1765). It prepares the transition to the future Colonial India chapter without implying that the Company conquered all India at once.

## Where to add material

1. Edit dates, historical text, people, regional labels, source keys and image briefs in `src/data/timeline/early-modern/records.ts`.
2. Add bibliographic references in `src/data/timeline/early-modern/sources.ts`. Cite the relevant page, section or object record in each entry's `locator`.
3. Put licensed photographs in `public/assets/images/early-modern/` and register them in `src/data/scenes/early-modern-galleries.ts`, keyed by event ID. Include alt text, object/site date, caption, creator or photographer, credit, licence and source URL. A registered gallery replaces that event's image placeholder automatically.
4. Use the [complete inventory](early-modern-inventory.md) for exact image, map and research tags. Keep tags until the requested evidence is supplied and integrated.
5. Add new event records through the same schema. Events sort automatically; the phase boundaries in `src/data/timeline/early-modern-india.ts` must also cover their start dates. Update the chapter-count test when intentionally expanding coverage.

The existing renderer supplies three reading stages, selectable evidence points, a source panel, filters, related-event navigation and conceptual diagrams. Diagrams are labelled explanations, not measured plans or reconstructed historical borders. Prefer a licensed site photograph or a dated catalogue object over an invented historical scene.

## Images and provenance

The five images come from The Metropolitan Museum of Art's Open Access collection: a Hamzanama folio, Mansur's nilgai study, Payag's Shah Jahan portrait, a kalamkari cover and a later Chand Bibi painting. Object-specific captions and dates appear beside them. Their download metadata, collection links and public-domain status are in [the media manifest](early-modern-media-manifest.json).

`node scripts/fetch-early-modern-media.cjs` is an optional manual maintenance command. It downloads only these five selected objects and refreshes the manifest. It requires internet access and never runs during normal website use. The website serves the saved local JPEGs.

## Research limits and next additions

Sources reviewed on 24 October 2026 include NCERT, IGNOU, UNESCO, museum catalogues, academic publications and institutional regional histories. Each entry exposes its own references and qualification notes. Religious institutions' accounts are identified as such; older gazetteer narratives require comparison with contemporary documents for detailed claims.

The inventory and chapter reader retain specific requests for regional histories, primary documents and local evidence. Priorities include Bengal, Gujarat, Kashmir, Odisha, the Nayaka states and northeastern communities; deeper Sikh and Maratha developments; dated policies and their local effects; regional literature and knowledge traditions; and caste, labour, enslavement, famine, irrigation and forest communities. These topics need further sourced entries rather than being treated as completed by brief overview records.

Maps need documented locations, dates, legends and sources. Quantitative charts need units, geographic coverage and uncertainty. No unsupported population, GDP, casualty or fixed-border estimates have been invented to fill gaps.

## Verification

Run `npm run check` and `npm run build`. Start the production server, then run `npm run test:browser -- http://localhost:PORT` using its actual URL. The browser script checks all 132 scenes at desktop, tablet and phone widths, the five new images, evidence controls, filters, chronological navigation, forward/reverse transitions, console errors and all five server-rendered chapter readers without JavaScript.

Four existing Lower Palaeolithic image-credit warnings are separate from this chapter and still need owner review.
