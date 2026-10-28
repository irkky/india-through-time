# Ancient India: evidence and media inventory

Expanded 28 October 2026. All 15 existing records retain their dates and IDs. Twelve new
local files join the two existing images: **14 distinct images across 14 records**.
Related sites now in Pakistan appear as part of the shared Indus archaeological world;
modern national boundaries are not projected into ancient history.

## Scene coverage and what to add next

| Record                        | Included visual evidence                                                 | Remaining tagged addition                                                    |
| ----------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| Dholavira                     | Reservoir photograph, 2017                                               | Phase-labelled city/reservoir plan with scale                                |
| Indus urban network           | Published map of selected northwest Indian farming-study sites           | Full sourced city map; distinguish inferred routes and modern borders        |
| Rakhigarhi                    | Excavation localities, Figure 3; burial pottery comparison, Figure 9     | Measured grave plan and identified pottery inventory                         |
| Mohenjo-daro                  | Great Bath photograph, 2016; later Buddhist stupa explicitly identified  | House drain/well section with phase and conservation annotations             |
| Craft workshops               | British Museum carnelian and terracotta beads from Mohenjo-daro          | Harappa workshop waste, tools and unfinished pieces with excavated context   |
| Seals and writing             | Met 49.40.1, ancient seal and modern impression                          | Excavated sealing with context and catalogue reference                       |
| Weights                       | Three Ashmolean weights from Mohenjo-daro                                | Measured masses and accessions for those same specimens                      |
| Farming                       | Crop-study map and winter-cereal processing chart                        | Seed/phytolith specimen plate with taxon, sample and scale                   |
| Lothal                        | Basin photograph, 2016                                                   | Measured plan, water connections and phase-specific exchange evidence        |
| Late Harappan transformations | Cemetery H pottery from Harappa                                          | Comparable settlement data and stratigraphic sequences                       |
| Early iron                    | Labelled explanatory furnace diagram; correction notice                  | Licensed excavated furnace/tuyere/slag photo and corrected dating table      |
| Rigveda                       | MS 2097, early nineteenth-century copy                                   | Permission-cleared embedded recitation with performer, verse and translation |
| Painted Grey Ware             | Sonkh vessel, museum date 1000–600 BCE                                   | Excavated pottery plate with layer and scale; comparative site sequences     |
| Later Vedic societies         | Sonkh vessel as a chronological comparison, not an ethnic identification | Translated Brahmana passage with edition and paragraph references            |
| Early Upanishads              | Chandogya manuscript copy dated 1865 CE                                  | Identified passage and rights-cleared translation tied to a specific folio   |

Every record's `IMAGE_<EVENT_ID>` tag supplies the exact requirements in the evidence
viewer and reading mode. Existing collection checklists retain more specialised requests.
An image can illustrate an object while still leaving its excavation context unresolved.

## Research and external viewing

- [UNESCO: Dholavira](https://whc.unesco.org/en/list/1645/),
  [Mohenjo-daro](https://whc.unesco.org/en/list/138/) and
  [Lothal Tentative List submission](https://whc.unesco.org/en/tentativelists/5918/)
  support the site context. The basin's dock interpretation is attributed, not presented
  as a conclusion established by the photograph. The Great Bath's background stupa is later.
- [Shinde et al., Rakhigarhi cemetery](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0192299)
  supplies Figures 3 and 9. Pot counts are not population counts or direct caste assignments.
- [Bates et al., crop processing](https://link.springer.com/article/10.1007/s00334-016-0576-9)
  supplies Figures 2 and 3. Selected sites and mixed-phase comparisons are explicitly identified.
- [Schøyen MS 2097](https://www.schoyencollection.com/23-religions/living-religions/23-16-hinduism/veda/rigveda-samhita-ms-2097)
  dates the physical Rigveda manuscript separately from the text's composition.
- [Watch UNESCO's Vedic chanting film](https://ich.unesco.org/en/video/41576) and
  [listen/read at IGNCA](https://vedicheritage.gov.in/samhitas/rigveda/shakala-samhita/maharashtra-tradition/).
  These are external modern resources, not ancient recordings. Playback, accessibility
  and any anti-bot checks are controlled by their publishers. No video is downloaded,
  embedded or autoplayed; reuse permission for local recordings remains a tagged task.
- [Read Shatapatha Brahmana editions at IGNCA](https://vedicheritage.gov.in/brahmanas/shatapatha-brahmana/)
  and [explore a separate Chandogya manuscript at Penn](https://openn.library.upenn.edu/Data/0002/html/mscoll390_item1146.html).
  The Penn manuscript is not the locally displayed 1865 copy.
- [Antiquity's Tewari correction notice](https://www.antiquity.ac.uk/projgall/tewari/)
  explains why future ironworking tables need the corrected publication. Its linked PDF
  could not be retrieved during this pass, so no new laboratory dates were transcribed.

## Reuse and provenance

The [machine-readable manifest](ancient-media-manifest.json) records all twelve additions:
source and download URLs, creator, licence link, caption, event assignments and SHA-256.
Photographs use CC BY-SA 4.0, except the Sonkh photograph (CC BY 3.0) and the public-domain
Rigveda reproduction. Research figures use CC BY 4.0. The existing Met seal is public domain;
the existing Rakhigarhi locality image is CC BY 4.0. Credit and source links remain visible
in each gallery. No rights are asserted over third-party files.

Downloads are unchanged originals or Commons-supplied resized versions. Published chart
labels and image edges remain visible through `object-fit: contain`; the two crop figures
are small publisher originals, so their sources should be opened for detailed study.
No generative reconstructions or invented ancient photographs were added.

## Maintenance

- Images and attribution: `src/data/scenes/ancient-galleries.ts`.
- Evidence notes, further viewing and outstanding requests: `src/data/timeline/ancient/evidence.ts`.
- Existing event chronology: `src/data/timeline/ancient/events.ts`.
- Stage assignments and transitions: `src/data/scenes/ancient-exhibits.ts`.
- Downloads: `public/assets/images/ancient_india/researched/`.
- Integrity and relevance checks: `tests/ancient-media.test.cjs`.

Two-image scenes show their images in the first two stages and the explanatory diagram
in the third. Single-image scenes preserve the diagram/image/diagram sequence. Evidence
viewers allow deliberate image selection independently of scroll. No dates are invented
to separate simultaneous themes, and no additional loading occurs from third-party sites
until a visitor follows an external link.
