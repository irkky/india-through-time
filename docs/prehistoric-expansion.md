# Prehistoric chapter expansion: 19 October 2026

**Visual research update (27 October 2026):** see the [current media inventory](prehistory-media-inventory.md) for twelve newly sourced files, licences, optional viewing and exact remaining image requests. The chronology remains unchanged.

The chapter now contains 24 dated records. This is a sourced regional overview, not an exhaustive catalogue. Site phases, regional teaching frameworks and uncertain interpretations are distinguished in each evidence note. The earlier 15-record table in prehistoric-content.md describes the initial pass.

| Order | Record                                     | Published date / range                             | Period                                           |
| ----- | ------------------------------------------ | -------------------------------------------------- | ------------------------------------------------ |
| 1     | Attirampakkam: the Acheulian record        | ~1.51 million years ago                            | Lower Palaeolithic                               |
| 2     | A changing stone-tool tradition            | ~385 thousand years ago to ~172 thousand years ago | Middle Palaeolithic                              |
| 3     | Acheulian tools at the desert margin       | ~177 thousand years ago                            | Lower Palaeolithic                               |
| 4     | Toolmaking near the coast                  | ~114 thousand years ago                            | Middle Palaeolithic                              |
| 5     | Life across the Toba eruption              | ~80 thousand years ago to ~65 thousand years ago   | Middle Palaeolithic                              |
| 6     | Tools above and below the ash              | ~74 thousand years ago                             | Middle Palaeolithic                              |
| 7     | Small tools, early origins                 | ~48 thousand years ago                             | Upper Palaeolithic                               |
| 8     | Microblades in the Narmada Valley          | ~45 thousand years ago                             | Upper Palaeolithic                               |
| 9     | A rockshelter's long record                | ~35 thousand years ago                             | Upper Palaeolithic                               |
| 10    | Many ways of living with microliths        | ~10,000 BCE to ~2,000 BCE                          | Mesolithic                                       |
| 11    | Early rice use at Lahuradewa               | ~6,400 BCE                                         | Neolithic                                        |
| 12    | Mehrgarh: farming and a revised chronology | ~5,250 BCE to ~4,650 BCE                           | Neolithic                                        |
| 13    | A microlith-using community at Bagor       | ~5,000 BCE to ~2,800 BCE                           | Mesolithic                                       |
| 14    | Village life at Balathal                   | ~3,700 BCE to ~1,830 BCE                           | Chalcolithic                                     |
| 15    | Huts and pottery in the Belan Valley       | ~3,385 BCE to ~3,135 BCE                           | Mesolithic                                       |
| 16    | Harappa before the great city              | ~3,300 BCE to ~2,800 BCE                           | Transition toward early urban/Harappan societies |
| 17    | Living at Burzahom                         | ~3,000 BCE                                         | Neolithic                                        |
| 18    | Cattle and the southern ashmounds          | ~3,000 BCE to ~1,200 BCE                           | Neolithic                                        |
| 19    | Toward Indus urbanism                      | ~2,800 BCE to ~2,600 BCE                           | Transition toward early urban/Harappan societies |
| 20    | Gufkral before pottery                     | ~2,787 BCE to ~2,350 BCE                           | Neolithic                                        |
| 21    | Copper and stone in the Malwa region       | ~2,000 BCE to ~1,800 BCE                           | Chalcolithic                                     |
| 22    | Farming in the Belan Valley                | ~1,770 BCE to ~1,375 BCE                           | Neolithic                                        |
| 23    | Homes and harvests at Navdatoli            | ~1,700 BCE to ~1,500 BCE                           | Chalcolithic                                     |
| 24    | Houses beside the Ghod                     | ~1,600 BCE to ~700 BCE                             | Chalcolithic                                     |

## Adding remaining evidence

- Edit `src/data/timeline/prehistory/regional-expansion.ts` for the nine additional records, their source metadata and undated regional context. Existing records remain in `events.ts` and `prehistoric-india.ts`.
- Edit `src/data/timeline/prehistory/gaps.ts` for per-period research slots. These now render below each section in the evidence reader and never enter the chronology as dated events.
- Add site-specific photographs, artefact plates or plans to the relevant image folder. Attach a gallery in `src/data/scenes/prehistory-exhibits.ts`, following `palaeolithic-gallery.ts`. Every scene without a gallery has a visual-evidence slot in its expandable viewer with the metadata needed.
- Highest priorities: original sample tables and calibration for Chopani Mando, Mahagara and Gufkral; updated excavation chronologies for Kayatha/Malwa/Jorwe; dated context for Chirand, Daojali Hading, Ganges burials, Patne specimens and specific Bhimbetka panels; early Harappan regional comparisons.
- The Narmada fossil retains undated context rather than a speculative exact year or species. Geological prologue material remains optional and separate from human occupation.

## Chronology and motion

Records sort by their start dates, even when that returns to a different archaeological period. Singi Talav therefore follows the older Middle Palaeolithic transition at Attirampakkam. Weighted scrolling distances provide reading time, not a measured time scale. The Journey year counter interpolates approximate positions between event start dates and reverses with upward scrolling. These intermediate years are navigation positions, not newly dated evidence; event cards and the reader retain published ranges. The counter is visible on desktop and mobile. Existing generic years-ago values are coarse deep-time sorting coordinates, not calibrated radiocarbon ages; no new calendar conversion is applied to them.

Normal-motion scrolling eases the scene playhead over 0.22 seconds; SVG exhibits crossfade over 36% of an interval. Native scrolling remains available, reduced-motion mode updates directly, and wheel/touch/scroll keys cancel navigation tweens. Source readers and research slots remain server rendered. Browser checks sample forward and reverse crossfades for blank frames and verify only one scene is interactive.

## Staged scrolling and evidence viewers

The 24 prehistoric exhibits now use three stages: Locate, Examine and Interpret.
Scrolling advances the stages in either direction; the three buttons also let readers
choose a stage directly. Reduced-motion mode keeps stage selection manual.
Lower and Middle Palaeolithic scenes introduce supplied images before their teaching
diagrams. Complete image captions, unverified identifications, all ten supplied images
and longer evidence notes remain in the expandable viewer. Missing-media instructions
are available in that viewer and research gaps remain in the reading section.

Scenes use artefact, photographic, stratigraphic, comparison and settlement compositions.
Visual crossfades overlap while text fades out before the next text fades in.
Scene duration controls relative scroll spacing: image collections receive 2.2,
stratigraphy/pits/ashmounds 1.5, and other exhibits 1. Navigation and the moving year
counter use the same weighted anchors. These weights are reading time, not historical
duration; event dates, ranges and source records are unchanged.

The main exhibit has no internal scrolling. Long evidence and image collections scroll
only after opening the viewer. Close or Escape returns to the same journey position.
The full chronological reading section remains available without JavaScript.
