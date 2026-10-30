# Early Modern India: research and authoring guide

The chapter adds 54 India-focused entries, 220 evidence sections, 33 illustrated galleries with 33 distinct local images, and four external UNESCO film guides. It covers 1498–1765 through political history, regional resistance, farming, women's work, devotional communities, trade, printing, textiles, art, architecture and astronomy. It is a substantial expandable selection, not a claim to contain every historical fact.

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

The closing sequence is Plassey (1757), Panipat (1761), Buxar (1764) and the Diwani grant (1765). It prepares the transition to the Colonial India chapter without implying that the Company conquered all India at once.

## Where to add material

1. Edit dates, historical text, people, regional labels, source keys and image briefs in `src/data/timeline/early-modern/records.ts`.
2. Add bibliographic references in `src/data/timeline/early-modern/sources.ts`. Cite the relevant page, section or object record in each entry's `locator`.
3. Put licensed photographs in `public/assets/images/early-modern/` and register them in `src/data/scenes/early-modern-galleries.ts`, keyed by event ID. Include alt text, object/site date, caption, creator or photographer, credit, licence and source URL. The new 28 assets are registered through `docs/early-modern-researched-media-manifest.json`, including exact event assignments and SHA-256 hashes. A contextual photograph does not automatically fulfil an outstanding manuscript or map request.
4. Edit visual reading notes, supplemental sources, video guides and remaining image briefs in `src/data/timeline/early-modern/evidence.ts`. Use the [complete inventory](early-modern-inventory.md) for exact image, map and research tags. Keep tags until the requested evidence is supplied and integrated.
5. Add new event records through the same schema. Events sort automatically; the phase boundaries in `src/data/timeline/early-modern-india.ts` must also cover their start dates. Update the chapter-count test when intentionally expanding coverage.

The existing renderer supplies three reading stages, selectable evidence points, a source panel, filters, related-event navigation and conceptual diagrams. Diagrams are labelled explanations, not measured plans or reconstructed historical borders. Prefer a licensed site photograph or a dated catalogue object over an invented historical scene.

## Images and provenance

The five original images come from The Metropolitan Museum of Art's Open Access collection: a Hamzanama folio, Mansur's nilgai study, Payag's Shah Jahan portrait, a kalamkari cover and a later Chand Bibi painting. Object-specific captions and dates appear beside them. Their download metadata, collection links and public-domain status are in [the media manifest](early-modern-media-manifest.json).

`node scripts/fetch-early-modern-media.cjs` is an optional manual maintenance command. It downloads only these five selected objects and refreshes the manifest. It requires internet access and never runs during normal website use. The website serves the saved local JPEGs.

## Research expansion: 29 October 2026

The 28 additional local JPEGs include Hampi's Krishna temple and tank, the Vittala chariot, Old Goa, Kartarpur, Humayun's tomb, Fatehpur Sikri, Gol Gumbaz, Ahmadnagar and Golconda forts, Itimad-ud-Daulah, the Taj Mahal, the Red Fort entrance, Raigad, Sindhudurg, Jaipur, Padmanabhapuram and Shaniwar Wada. They also include catalogued Mughal portraits, a Coromandel palampore, Malik Ambar, Shivaji and a later representation of the Diwani grant. Files are served locally; no external image host is required during scrolling.

The [researched-media manifest](early-modern-researched-media-manifest.json) records each file's original source, photographer or artist, reuse licence, capture or object date, event assignment and integrity hash. Commons provides the image record; historical interpretation also uses museum catalogues, UNESCO, ASI and institutional publications. Alt text describes the actual downloaded image. Publisher-supplied image derivatives are retained without further cropping or image generation.

Four guided film links lead to UNESCO's pages for [Goa](https://whc.unesco.org/en/list/234/video/), [Humayun's Tomb](https://whc.unesco.org/en/list/232/video/), [Fatehpur Sikri](https://whc.unesco.org/en/list/255/video/) and the [Taj Mahal](https://whc.unesco.org/en/list/252/video/). These are external viewing links, not downloaded video assets or autoplay embeds. Rights remain with the credited producers. Each has a short viewing prompt and is available through the source panel and chapter reader.

### Dating and relevance decisions

- The British Library dates Benjamin West's Diwani painting to about **1818**. It appears beside the **1765** event as a clearly labelled later representation, alongside an archive reference to the grant.
- The Shivaji portrait is dated **1680–1687**, after the **1674** coronation. Raigad supplies site context, not an invented ceremony scene.
- The portrait of Prince Aurangzeb, **c. 1653–55**, precedes the succession war. Its date is retained in the caption.
- The Coromandel palampore was made for the **Sri Lankan market** in the early eighteenth century. It does not stand for a documented European Company shipment.
- Kartarpur is identified as being in **present-day Pakistan** and included for its direct relationship to Guru Nanak and Punjab's history. Modern borders are not projected into the sixteenth century.
- Krishna temple captions distinguish commonly published **1513** dating from a Government Museum Chennai discussion of **1515** installation. The inscription and a checked translation remain requested.
- Modern buildings, conservation, shops and memorials retain their actual context. A present-day ruin is not an eyewitness image of a battle.
- A museum hawk coin with a problematic dating context, an uncatalogued private rupee photograph, unrelated search results and uncertain historical photograph provenance were not used as exact event evidence.

### Scroll and reading behaviour

The existing three-stage layout and crossfades remain. Multi-image galleries use their first two images in successive stages before returning to the conceptual diagram. Single-image galleries show the image in the central stage. Selectable gallery controls expose every registered image and its credit. Gallery scenes receive the existing longer reading duration; chronological years and event IDs are preserved. The static chapter reader includes all **220** detail sections, source links and acquisition tags.

## Research limits and next additions

Historical records reviewed on 24 October 2026 and visual evidence expanded on 29 October 2026 include NCERT, IGNOU, UNESCO, museum catalogues, academic publications and institutional regional histories. Each entry exposes its own references and qualification notes. Religious institutions' accounts are identified as such; older gazetteer narratives require comparison with contemporary documents for detailed claims.

The inventory and chapter reader retain specific requests for regional histories, primary documents and local evidence. Priorities include Bengal, Gujarat, Kashmir, Odisha, the Nayaka states and northeastern communities; deeper Sikh and Maratha developments; dated policies and their local effects; regional literature and knowledge traditions; and caste, labour, enslavement, famine, irrigation and forest communities. These topics need further sourced entries rather than being treated as completed by brief overview records.

Maps need documented locations, dates, legends and sources. Quantitative charts need units, geographic coverage and uncertainty. No unsupported population, GDP, casualty or fixed-border estimates have been invented to fill gaps.

## Verification

Run `npm run check` and `npm run build`. Start the production server, then run `npm run test:browser -- http://localhost:PORT` using its actual URL. The browser script checks all 252 scenes at desktop, tablet and phone widths, all Early Modern gallery choices, evidence controls, filters, chronological navigation, forward/reverse transitions, console errors and all eight server-rendered chapter readers without JavaScript. The unit suite verifies image integrity, provenance, valid stage assignments and the distinction between event dates and later imagery.

Four existing Lower Palaeolithic image-credit warnings are separate from this chapter and still need owner review.
