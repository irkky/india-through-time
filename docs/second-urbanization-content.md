# Second Urbanization & Empires

Expanded 28 October 2026: **55 detailed reading sections** across the existing 17 records,
**18 distinct local images** (11 new additions), and specific remaining evidence requests.
All 17 entries now have a relevant gallery; shared images are explicitly used as regional
or chronological comparisons. Read the [media inventory](empires-media-inventory.md) for
coverage, rights, sources and the exact material still needed.

Edit `src/data/scenes/empire-galleries.ts` for image metadata and
`src/data/timeline/empires/evidence.ts` for the new evidence notes and reading/viewing links.
Two-image scenes use both images before returning to the explanatory diagram. Single-image
scenes retain their diagram/image/diagram sequence. Dates and event identifiers are unchanged.

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
| `src/data/scenes/empire-exhibits.ts`                  | Palettes, visual types, pacing and gallery stage assignments              |
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

The [media inventory](empires-media-inventory.md) explains the remaining evidence for every
entry. Keep photographer, original URL, licence link and modification notes with each image.
The included images are not a substitute for measured plans, stratigraphy or specimen records.
The following Classical & Medieval chapter is populated; preserve cross-chapter chronology.

## Image completion list

| Record                                        | Gallery images | Remaining tag                       |
| --------------------------------------------- | -------------: | ----------------------------------- |
| Mahajanapadas: a landscape of states          |              1 | `ADD_MAHAJANAPADA_MAP`              |
| Cities, fields and workshops                  |              1 | `ADD_NBPW_STRATIGRAPHIC_PLATE`      |
| Magadha: toward a larger kingdom              |              2 | `ADD_PATALIPUTRA_PHASE_PLAN`        |
| Mahavira and Jain paths of liberation         |              1 | `ADD_JAIN_FOLIO_TRANSCRIPTION`      |
| Taxila: a northwestern crossroads             |              1 | `ADD_BHIR_PHASE_PLAN`               |
| The Buddha and the early sangha               |              1 | `ADD_EARLY_BUDDHIST_SITE_SEQUENCE`  |
| Silver, weight and punched marks              |              2 | `ADD_CATALOGUED_COIN_PLATE`         |
| 326 BCE: Alexander at Taxila                  |              1 | `ADD_TAXILA_ENCOUNTER_MAP`          |
| Chandragupta and the Mauryan Empire           |              1 | `ADD_MAURYAN_PHASE_MAP`             |
| A carved ring stone: evidence in miniature    |              1 | `ADD_RINGSTONE_DETAIL_VIEW`         |
| Ashoka: kingship in his own inscriptions      |              1 | `ADD_SARNATH_PILLAR_RECORD`         |
| Kalinga: conquest and its human cost          |              2 | `ADD_EDICT_XIII_VERSION_COMPARISON` |
| Dhamma: welfare, restraint and communication  |              2 | `ADD_GREEK_ARAMAIC_EDICT_EVIDENCE`  |
| Barabar: stone shelters for ascetics          |              2 | `ADD_SUDAMA_MEASURED_PLAN`          |
| Sanchi: an early core, centuries of additions |              1 | `ADD_SANCHI_CONSTRUCTION_PHASES`    |
| Lumbini: a visit recorded in stone            |              2 | `ADD_LUMBINI_LINE_ALIGNMENT`        |
| After Ashoka: a changing political landscape  |              1 | `ADD_POST_MAURYAN_REGIONAL_MAP`     |
