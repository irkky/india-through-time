# Prehistoric India: content and completion guide

**Visual research update (27 October 2026):** see the [current media inventory](prehistory-media-inventory.md) for twelve newly sourced files, licences, optional viewing and exact remaining image requests. The chronology remains unchanged.

**Latest expansion (19 October 2026):** the chapter now has 24 dated records and visible research
slots. See [the current chronological inventory and editing guide](prehistoric-expansion.md).
The initial research-pass table below is retained as a record of the first 15 entries.

Research pass: **18 October 2026**. This is a sourced initial chapter, not an exhaustive inventory
of Indian prehistory or a substitute for specialist editorial review. Fifteen dated records now
feed the existing timeline. Undated context and a visible sources reader accompany them.

## Where to edit

| File                                      | What belongs there                                                                   |
| ----------------------------------------- | ------------------------------------------------------------------------------------ |
| `src/data/timeline/prehistoric-india.ts`  | Period order, introductions, undated context and the Lower Palaeolithic record       |
| `src/data/timeline/prehistory/events.ts`  | The other dated events: descriptions, significance, locations, citations and caveats |
| `src/data/timeline/prehistory/sources.ts` | Shared bibliography, stable source IDs and links                                     |
| `src/data/timeline/prehistory/gaps.ts`    | Unfinished research slots; each has a null date and an explicit checklist            |
| `src/data/scenes/prehistoric-scenes.ts`   | Custom visuals and media paths, when ready                                           |

Sources and evidence notes are available in the **Evidence & sources** dialog and in the reader
below the cinematic. All fifteen records have original SVG exhibits with three selectable evidence
points ordered as evidence, context, then dating and limits. Every new diagram is labelled
as an explanatory illustration, not a measured site plan, photograph or replica of a specific find.

## Using the chapter

1. Scroll through the opening or choose **Enter the timeline**.
2. Select numbered points on a diagram to read evidence, context, or dating limits. On small screens,
   the scene panel scrolls internally to keep the selected note readable.
3. Use previous/next, period and event selectors, or **Explore chapter**. The explorer searches titles,
   descriptions, regions and categories; its period filter works together with search.
4. Open **Evidence & sources** for citations, uncertainty notes, related events and media credits.
   **Copy event link** creates a shareable hash such as `#event=jwalapuram-toba`.
5. Use Escape or Close to dismiss the dialog. Hidden scenes are inert so their controls do not enter
   the keyboard focus order. The reading section remains available without JavaScript.

The interactive diagrams and palettes live in `src/data/scenes/prehistory-exhibits.ts`; their SVG
renderer lives in `src/components/visual-scenes/prehistory-diagram.tsx`. Diagram points reuse
existing event fields rather than duplicating historical claims in animation code.

## Reading order

The chapter groups content as Before History → Lower Palaeolithic → Middle Palaeolithic → Upper
Palaeolithic → Mesolithic → Neolithic → Chalcolithic → early Harappan transition. These are thematic
groups. The playable timeline sorts by the start of each site's evidence, producing this order:

| Order | Record                                                  | Display date/range                           | Group                     |
| ----- | ------------------------------------------------------- | -------------------------------------------- | ------------------------- |
| –     | Before History                                          | Undated introduction                         | Before History            |
| 1     | Attirampakkam Acheulian                                 | About 1.51 million years ago                 | Lower Palaeolithic        |
| 2     | Attirampakkam technological transition                  | About 385–172 thousand years ago             | Middle Palaeolithic       |
| 3     | Dhaba across Toba                                       | About 80–65 thousand years ago               | Middle Palaeolithic       |
| 4     | Jwalapuram across Toba                                  | About 74 thousand years ago, eruption anchor | Middle Palaeolithic       |
| 5     | Dhaba microliths                                        | About 48 thousand years ago                  | Upper/Late Palaeolithic   |
| 6     | Mehtakheri microblades                                  | About 45 thousand years ago                  | Upper/Late Palaeolithic   |
| 7     | Lahuradewa rice use                                     | About 6400 BCE                               | Neolithic themes          |
| 8     | Mehrgarh aceramic cemetery                              | About 5250–4650 BCE, 2025 model              | Neolithic                 |
| 9     | Bagor Phase I                                           | About 5000–2800 BCE, teaching synthesis      | Mesolithic                |
| 10    | Balathal occupation                                     | About 3700–1830 BCE, cited synthesis         | Chalcolithic              |
| 11    | Harappa Ravi phase                                      | About 3300–2800 BCE                          | Harappan transition       |
| 12    | Burzahom early occupation                               | About 3000 BCE                               | Neolithic                 |
| 13    | Southern ashmound tradition                             | Broadly 3000–1200 BCE                        | Neolithic                 |
| 14    | Harappa Kot Diji phase                                  | About 2800–2600 BCE                          | Harappan transition       |
| 15    | Inamgaon settlement                                     | About 1600–700 BCE, excavation account       | Chalcolithic              |
| –     | Narmada fossil, Patne, Bhimbetka and Kalibangan context | No invented exact dates                      | Relevant reading sections |

Each row's supporting links and source locators are in the live evidence reader and the event's
`sources`/`citations`. The two approximately 3000 BCE records have no implied precedence over one
another. End dates show overlap: regional prehistory did not stop everywhere when Indus cities
appeared. Present-day Pakistan is included for the broader subcontinent and explicitly labelled.

The source review caught two especially important qualifications: [Mehrgarh's newer dating
study](https://www.nature.com/articles/s41598-025-92621-5) and the [debate over early rice use versus
domestication](https://doi.org/10.3389/fevo.2022.924977). Both remain visible as qualifications, not
silent replacements of contested history. Older conventional dates are identified as such.

## What is left for you to add

These slots record remaining research or asset work. Some have a sourced overview now, while
others remain outside the dated event list. Supply the missing evidence before creating a timed scene. A blank slot means this pass did not establish enough detail; it does
not mean no research exists.

| Slot                        | Add this material                                                                                                         |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Optional geological opening | Scope decision, geological source, dated plate reconstruction and licensed map                                            |
| Hathnora/Narmada fossil     | Current dating paper, stratigraphic context, uncertainty range and competing species assignments                          |
| Jwalapuram measured section | Event and schematic are implemented; supply a licensed measured section with layer identifiers for a more detailed visual |
| Patne ornaments             | Excavation report, specimen/catalogue number, dated context, scale and licensed specimen photograph                       |
| Bhimbetka timed art scene   | Exact shelter/panel ID and defensible range; retain the undated overview if unavailable                                   |
| Ganges Mesolithic burials   | Reports for selected sites such as Sarai Nahar Rai, Mahadaha and Damdama; dates, calibration and burial context           |
| Other Neolithic regions     | Phase-specific records for Koldihwa/Mahagara, Chirand and northeastern sites such as Daojali Hading                       |
| Later Chalcolithic cultures | Inamgaon overall chronology is implemented; finer Malwa/Jorwe phases and other sites still need phase-specific sources    |
| Early Harappan comparisons  | Selected Kalibangan, Kunal or Bhirrana phases, dating methods and any disputed early chronology                           |

Do not populate `people`, `hominins`, map coordinates or migration routes merely to fill fields.
They are empty/absent where the cited evidence does not establish them. Named modern excavators
belong in source authorship, not the list of people living in the prehistoric event.

## Asset checklist

The content can already render without new assets. Before wiring a photograph or map, record its
creator, source page, licence, required attribution, accurate caption and alternative text. An image
file's presence in the repository does not establish its identity or reuse rights.

| Event/group                        | Asset to add or verify                                                                                                                                                                            |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Archived Lower Palaeolithic assets | Verify identity/provenance and credit for `oldscene.png`, `indiamapblack.png`, `handaxe_from_attirampakkam.png`, `auchelian_tool.png`                                                             |
| Middle Palaeolithic                | Existing files in `public/assets/images/prehistoric_india/middle_palaeolithic_india/` remain unwired: verify Attirampakkam site/artifact photos, Levallois core/flake, side-scrapers and site map |
| Dhaba / Mehtakheri                 | Licensed assemblage images and site-context maps with scales; avoid an asserted migration arrow                                                                                                   |
| Bagor                              | Phase-specific plan or photographed microliths with scale                                                                                                                                         |
| Lahuradewa                         | Identified archaeobotanical specimen; do not substitute a modern rice field as proof                                                                                                              |
| Mehrgarh / Burzahom                | Dated excavation context or a reconstruction clearly labelled interpretive                                                                                                                        |
| Southern Neolithic / Balathal      | Identified ashmound or excavated house plan with phase and credit                                                                                                                                 |
| Harappa transition                 | Ravi/Kot Diji objects or plans; do not use mature-city imagery without identifying the different phase                                                                                            |

For each new asset, add metadata to the event's `media`, then a matching `referenceId` and `src`
to its custom scene. Do not create a missing-file reference just to reserve a place. Original SVG
exhibits require no external image downloads or image licences.

## Copy-and-fill event template

Copy into the appropriate array in `prehistory/events.ts` only when a supported date is available.
For an undated topic, use `context` on its period or add a checklist item to `gaps.ts` instead.
For a new illustrated event, add its ID to `prehistoryExhibits` in `src/data/scenes/prehistory-exhibits.ts`.
The period composition attaches `exhibit-<event-id>` through `withExhibit`; the compiler verifies
that it resolves. Events outside that mapping can still use the generic text-scene fallback.

```ts
{
  id: "site-specific-stable-id",
  title: "Short visitor-facing title",
  dateStart: bce(3000), // EXAMPLE ONLY: replace with the supported date
  approximateDate: true,
  contentStatus: "researched",
  description: "What was found, where, and what the evidence establishes.",
  categories: ["settlement"],
  regions: ["Present-day location"],
  people: [],
  relatedEvents: [], // existing event IDs only
  sources: [sources.yourNewSource],
  citations: [{ sourceId: sources.yourNewSource.id, locator: "Page, table or section" }],
  interpretationNotes: [{
    kind: "uncertainty",
    text: "Age range, dating method, alternative interpretation or other limit.",
    sourceIds: [sources.yourNewSource.id],
  }],
}
```

Retain the original dating system in the note: calendar BCE, calibrated BCE, uncalibrated radiocarbon
BP and luminescence ages are not interchangeable. Do not subtract an uncalibrated BP age from 1950
to manufacture a calendar date. The existing deep-time helper uses synthetic sorting coordinates;
the current years-ago records are all much older than the calendar records, so their order is
unambiguous. Do not treat interpolated dates between scenes as measured archaeological dates.

Run `npm run check` and `npm run build`. All new events should have a source, a matching citation,
an evidence note and a valid chronological range. The audit still warns about existing media rights
and the three later-era prototype summaries; those are separate from this research pass.

## Verification

`npm run check` covers types, lint, formatting, data tests and the content audit. To run the browser
suite, use Node 22+ and installed Chrome/Chromium (set `CHROME_PATH` if needed). Start a production
server after building, then pass its printed URL:

```powershell
npm run build
npm run start
# In a second terminal, substitute the server's actual URL:
npm run test:browser -- http://localhost:3000
```

The browser script launches hidden headless Chrome with a temporary profile. It tests all new
exhibits at desktop/mobile viewport sizes, point selection, search, source links, Escape/focus,
previous/next navigation, event hashes, normal/reduced motion and the reader without JavaScript.
Screenshots go to ignored `.browser-artifacts/`. The script is development-only; visitors never run it.
Physical phones and other browser engines still need manual coverage.

## Lower and Middle Palaeolithic image galleries

All ten supplied images are registered in `src/data/scenes/palaeolithic-gallery.ts`.
The Lower gallery follows location, handaxe, tool comparison, then artistic landscape.
The Middle gallery follows excavation, artefact plate, core, flake, scrapers, then the general map.
These are teaching sequences within events, not additional dated timeline events.
The general map is labelled as spanning different archaeological contexts.

To add an image:

1. Save it in the appropriate existing folder under `public/assets/images/prehistoric_india/`.
2. Add an entry to the appropriate array in `src/data/scenes/palaeolithic-gallery.ts` with `src`,
   `title`, `alt`, `caption` and `category`. Use the public URL beginning `/assets/`, without `public`.
3. Supply `sourceUrl`, `credit` and `license` when verified. Until then the gallery displays pending
   attribution; filenames are not treated as proof of a specimen's site or date.
4. Preserve original labels and scales. Add original figure captions, specimen IDs, excavation
   trench/year and any image-editing information to the caption where relevant.
5. Run `npm run validate:content` to catch missing image paths.

The gallery component supports any number of entries, thumbnail selection, keyboard access,
full-image links, lazy loading and an unavailable-image fallback. Images use contain sizing to
preserve the complete frame. Existing source images are unchanged.
For Dhaba or Jwalapuram, create separate gallery arrays and attach them to their own exhibit entries
in `src/data/scenes/prehistory-exhibits.ts`; do not reuse the Attirampakkam photographs as their evidence.
