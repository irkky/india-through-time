# Second Urbanization & Empires

The expanded edition adds **34 detailed reading sections** across the existing 17 records,
**seven photographs/visual examples**, and **17 explicitly tagged image spaces**. Open an event's
full evidence view for the longer account. A scene without a photograph displays its image request
during **Examine**; all requests also remain available in the evidence dialog and no-JavaScript reader.

New detail covers the sixteen-state list, pottery production and distribution, Magadha's geography,
Jain vows, Buddhist teachings, domestic finds at Bhir, museum coin measurements, imperial centres,
inscription audiences, the separate Kalinga edicts, Sudama's chambers, Sanchi's phases and Lumbini's
fiscal provision. Each reading block links directly to its supporting source.

Edit `src/data/timeline/empires/details.ts` for extended reading and
`src/data/timeline/empires/image-needs.ts` for image requests. Place a supplied image in
`public/assets/images/empires/`, register it under the event ID in `empireGalleries` in
`src/data/scenes/empire-exhibits.ts`, and remove or revise the fulfilled image request.
Scenes use the first gallery image during Examine automatically. No upload service is required.

The chapter now has **17 researched records**, replacing its two prototype events. It follows
early historic cities and states through Mauryan rule and the conventional dynastic endpoint
around 185 BCE. It is an expandable overview, not an exhaustive account of every region.

## Read, scroll and explore

Scroll advances three reversible stages: **Locate → Examine → Interpret**. The buttons also
work independently. Full evidence, sources, photographs and tagged additions open in the
existing accessible dialog. Reduced-motion readers retain the same content and controls.
The complete server-rendered reader at `#empires-reader` works without JavaScript.

The journey year interpolates between event starting dates. Contemporary themes share dates
instead of being given invented sequential years. Published ranges remain visible separately.
The last anchor is approximately 185 BCE. Museum object ranges can extend beyond that endpoint;
the ring stone's third–second century attribution is deliberately preserved.

## Content and order

| Starting date (BCE) | Record                       | Scope                                                             |
| ------------------- | ---------------------------- | ----------------------------------------------------------------- |
| c. 600              | Mahajanapadas                | States and elite assemblies; changing lists                       |
| c. 600              | Cities, fields and workshops | Urbanisation and archaeological evidence                          |
| c. 600              | Magadha                      | Regional expansion and changing capitals                          |
| c. 600              | Mahavira and Jain traditions | Broad setting, not a precise lifespan                             |
| c. 600              | Taxila                       | Bhir phase and northwestern connections                           |
| c. 500              | Buddha and sangha            | Disputed chronology and oral transmission                         |
| c. 500              | Punch-marked money           | Dated examples, not a definitive first invention                  |
| 326                 | Alexander at Taxila          | A specific encounter                                              |
| c. 321              | Mauryan Empire               | Dynastic overview through c. 185                                  |
| c. 300              | Ring-stone fragment          | Museum attribution through the second century                     |
| c. 268              | Ashoka                       | Conventional reign chronology                                     |
| c. 261              | Kalinga                      | Regnal-year conversion; casualty figures are inscriptional claims |
| c. 260              | Dhamma                       | Broad programme; specific edicts have individual dates            |
| c. 257              | Barabar                      | Selected dedications and later Mauryan patronage                  |
| c. 250              | Sanchi                       | Approximate early core, distinguished from later work             |
| c. 249              | Lumbini                      | Pillar and visit; not the Buddha's birth date                     |
| c. 185              | Mauryan successors           | Dynastic endpoint and transition to regional histories            |

Sources are linked with locators in each record: NCERT, the Internet Encyclopedia of Philosophy,
UNESCO, the British Museum, The Met, Oxford Classical Dictionary, Macquarie University,
the National Monuments Authority and an identified translation of Ashoka's edicts.
No long translated passages are reproduced. The old Met synthesis is used for broad dynastic
history, not its unqualified attribution of the Arthashastra or the legendary 84,000 stupas.
Oxford's accessible extract supports Ashoka's conventional reign dates. Different chronological
conventions for coronation and regnal years are acknowledged rather than silently harmonised.

## Where to edit

| File                                                  | Purpose                                                                   |
| ----------------------------------------------------- | ------------------------------------------------------------------------- |
| `src/data/timeline/empires/events.ts`                 | Historical records, dates, limitations, source locators and addition tags |
| `src/data/timeline/empires/sources.ts`                | Bibliography                                                              |
| `src/data/timeline/second-urbanization.ts`            | Reading sections and broader research gaps                                |
| `src/data/scenes/empire-exhibits.ts`                  | Palettes, visual types, pacing and image galleries                        |
| `public/assets/images/empires/`                       | Local photographs                                                         |
| `src/components/visual-scenes/prehistory-diagram.tsx` | Original explanatory SVGs shared by chapters                              |

Add an event's historical information and its presentation together. Preserve existing IDs for
shared links. Set the record's `periodId` to choose its reading section; the compiler sorts the
cinematic sequence chronologically. Run `npm run check` and the browser smoke check after changes.

## Included photographs and reuse terms

| Local file                      | Source and credit                                                                                                                                               | Licence                                                             |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `ringstone-met-38080.jpg`       | [The Met, 1987.142.391](https://www.metmuseum.org/art/collection/search/38080), Samuel Eilenberg Collection, Gift of Samuel Eilenberg, 1987                     | Public Domain / Met Open Access                                     |
| `sanchi-aditya-maurya.jpg`      | [Main Stupa](https://commons.wikimedia.org/wiki/File:Main_Stupa.JPG), Aditya Maurya, 29 September 2012                                                          | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)     |
| `lumbini-pranish-subedi.jpg`    | [Ashoka pillar, Lumbini](https://commons.wikimedia.org/wiki/File:Ashoka_pillar,_lumbini.jpg), Pranish subedi, 14 January 2013                                   | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)     |
| `rajgir-indianvagabond.jpg`     | [Cyclopean Wall of Rajgir 2](https://commons.wikimedia.org/wiki/File:Cyclopean_Wall_of_Rajgir_2.jpg), Indianvagabond, 23 October 2023; Wikimedia 1280px preview | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)     |
| `punchmarked-world-imaging.jpg` | [MauryanCoin.JPG](https://commons.wikimedia.org/wiki/File:MauryanCoin.JPG), PHG / World Imaging (Per Honor et Gloria)                                           | Public-domain release by photographer                               |
| `dhauli-sidsahu.jpg`            | [Dhauli Ashoka edict](https://commons.wikimedia.org/wiki/File:Dhauli_Ashoka_edict.jpg), Sidsahu, 23 January 2013                                                | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)     |
| `sudama-peppe-1870.jpg`         | [Sudama cave](https://commons.wikimedia.org/wiki/File:Sudama_cave.jpg), Thomas Fraser Peppe, 1870, British Library via Commons                                  | [Public domain](https://creativecommons.org/publicdomain/mark/1.0/) |

Photographs are fitted without cropping and credited in the gallery. Rajgir uses Wikimedia's
smaller preview to reduce transfer size; other downloaded files are unchanged.
The Wikimedia images retain their individual share-alike licences. Their presence does not
relicense unrelated project code. Modern photographs are explicitly distinguished from ancient
reconstructions. Six new original SVG types explain networks, pillars, coin punching, caves,
stupa phases and ring stones; their captions identify them as conceptual illustrations.

## What you can add next

Every record has a visible tag in its full evidence view. Most useful additions:

- `ADD_STATE_MAP` / `ADD_PHASED_EMPIRE_MAP`: sourced maps with dates, legends and uncertain borders.
- `ADD_EXCAVATION_PLATE`: NBPW photograph with site, excavation layer, scale and licence.
- `ADD_COIN_PHOTO`: both sides, accession number, weight and catalogue date.
- `ADD_INSCRIPTION_PHOTO` / `ADD_SCRIPT_PANEL`: located inscriptions with verified script and translation.
- `ADD_CAVE_PLAN`: a named Barabar cave's measured plan and photograph.
- `ADD_SANCHI_PHASES`: phase plan separating the early core from later construction; a site photo is included.
- `ADD_LUMBINI_RECORD`: scholarly transcription and translation; the pillar photo is included.
- `ADD_JAIN_PASSAGE` / `ADD_BUDDHIST_PASSAGE`: edition and translator details, plus permission for any recording.

Keep photographer, original URL, licence link and modification notes with each new image. Supply
regional excavation and textual research in the reader's broader research slots before adding
precise dates for uncertain events. The following Classical & Medieval chapter remains unbuilt.

The coin photograph is a teaching comparison with uncertain dynastic attribution: its filename and description disagree. It is not British Museum 1869,1203.48. The Dhauli photograph is site context, not the text of Major Rock Edict XIII. An ambiguously identified modern cave image was excluded in favour of the archival Sudama view.

## Image completion list

| Record                                        | Image status                        | Tag to fill                      |
| --------------------------------------------- | ----------------------------------- | -------------------------------- |
| Mahajanapadas: a landscape of states          | Tagged space                        | `ADD_MAHAJANAPADA_MAP`           |
| Cities, fields and workshops                  | Tagged space                        | `ADD_NBPW_EXCAVATION_IMAGE`      |
| Magadha: toward a larger kingdom              | Included; additional view requested | `ADD_PATALIPUTRA_PHASE_PLAN`     |
| Mahavira and Jain paths of liberation         | Tagged space                        | `ADD_JAIN_CONTEXT_IMAGE`         |
| Taxila: a northwestern crossroads             | Tagged space                        | `ADD_BHIR_MOUND_PHOTO`           |
| The Buddha and the early sangha               | Tagged space                        | `ADD_EARLY_BUDDHIST_CONTEXT`     |
| Silver, weight and punched marks              | Included; additional view requested | `ADD_CATALOGUED_COIN_PLATE`      |
| 326 BCE: Alexander at Taxila                  | Tagged space                        | `ADD_TAXILA_ENCOUNTER_MAP`       |
| Chandragupta and the Mauryan Empire           | Tagged space                        | `ADD_MAURYAN_PHASE_MAP`          |
| A carved ring stone: evidence in miniature    | Included; additional view requested | `ADD_RINGSTONE_DETAIL_VIEW`      |
| Ashoka: kingship in his own inscriptions      | Tagged space                        | `ADD_IDENTIFIED_ASHOKAN_PILLAR`  |
| Kalinga: conquest and its human cost          | Included; additional view requested | `ADD_ROCK_EDICT_XIII_PLATE`      |
| Dhamma: welfare, restraint and communication  | Tagged space                        | `ADD_EDICT_SCRIPT_COMPARISON`    |
| Barabar: stone shelters for ascetics          | Included; additional view requested | `ADD_SUDAMA_INTERIOR_PLAN`       |
| Sanchi: an early core, centuries of additions | Included; additional view requested | `ADD_SANCHI_CONSTRUCTION_PHASES` |
| Lumbini: a visit recorded in stone            | Included; additional view requested | `ADD_LUMBINI_INSCRIPTION_DETAIL` |
| After Ashoka: a changing political landscape  | Tagged space                        | `ADD_POST_MAURYAN_REGIONAL_MAP`  |
