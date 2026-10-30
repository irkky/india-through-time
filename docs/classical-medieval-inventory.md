# Classical & Medieval India: evidence and media inventory

Reviewed **29 October 2026**. **22 entries, 79 detailed reading sections, 25 local images across 19 galleries, nine external video guides and one museum audio/transcript link.** The original two museum photographs are retained; 23 images were added.

## How to contribute

Every entry retains a specific `ADD_...` request below. These requests describe remaining evidence, even when a gallery is already present. Aryabhata, Brahmagupta and Ibn Battuta retain manuscript/route placeholders rather than fabricated historical images. Existing map requests remain separate.

- Add the requested file with creator, source URL, reuse licence, object/monument date and photograph/copy date.
- Register additions in `docs/classical-researched-media-manifest.json`; `src/data/scenes/classical-galleries.ts` builds the galleries from it. Keep SHA-256 values in sync with the files.
- Update contextual notes and remaining requests in `src/data/timeline/classical/evidence.ts`.
- Downloads and research scripts are maintenance activities, not part of normal website use.

## Research decisions

- Museum and official heritage records provide dates and context; Commons supplies file-level attribution and reuse licences. All new local JPEGs were visually inspected.
- A Met frieze (1998.488.2, object 49818) was rejected because its current catalogue date is **Modern**, despite older Kushan-style explanatory text. Cleveland 1941.94 provides a dated Mathura example instead.
- The Met Ammaiyar bronze dates to the late thirteenth century, not the poet's sixth-century lifetime.
- Nalanda photographs show Temple 3 and a decorated niche, not a measured monastery plan.
- The Thanjavur plan is a modern unscaled illustration. Its Commons filename sounds like a monument photograph, but visual inspection identified it as a plan. The festival photograph is explicitly dated 2025.
- Ellora's 600–1000 timeline range is a selected teaching window. The detailed UNESCO statement describes a wider sequence, including later Jain work.
- Konark's two photographs are not confirmed as the same wheel. No minute-accurate sundial claim is made.
- The Tughluq coin is contributor-attributed and lacks verified mint, weight and issue date. The separate Smithsonian gold coin record is linked for comparison; its measurements are not assigned to the pictured coin.
- The modern Nizamuddin shrine is not presented as entirely medieval. The official monument record identifies later building campaigns.
- The Hazara Rama photograph belongs to an early-fifteenth-century temple context. The foundation does not establish the exact date of each photographed panel.
- UNESCO/NHK films and the Met conservation video/audio are **external viewing/listening links**, not downloaded, embedded or autoplayed. Open-image licences do not imply audio/video reuse rights.
- No securely identified, rights-cleared manuscript photograph was selected for Aryabhata, Brahmagupta or the Rihla. Modern typeset equations, imagined portraits and unrelated folios were not substituted for manuscripts.
- Official NCERT PDF endpoints failed during this pass; the traveller reading was cross-checked through IIT Kanpur SATHEE. Existing NCERT citations remain, with an alternate reading link added.

## Entry-by-entry coverage

### Indo-Greek kingdoms: bilingual coins in the northwest

- ID: `indo-greek-india`
- Timeline: 200 BCE–1 BCE (approximate topic window).
- Gallery: [Apollodotus I: bilingual coin](../public/assets/images/classical/researched/apollodotus-coin.jpg)
- **ADD_APOLLODOTUS_CATALOGUE_AND_LEGEND**: Add the exact specimen's catalogue or auction identifier, weight, mint attribution and a checked transcription of both legends. Preserve both faces and identify any uncertain reading.
- **MAP_PLACEHOLDER_INDO_GREEK_INDIA**: Add a sourced location map of Northwestern Indian subcontinent, with modern orientation labels and a legend; do not imply fixed historical borders.

### Ajanta: Buddhist caves, paintings and patronage

- ID: `ajanta-caves`
- Timeline: 200 BCE–600 CE (approximate topic window).
- Gallery: [Padmapani, Cave 1 at Ajanta](../public/assets/images/classical/researched/ajanta-padmapani.jpg)
- **ADD_AJANTA_PHASE_PLAN**: Add a licensed cave-number plan distinguishing the early and later phases, plus a dated view of Cave 9 or 10. Include scale, publication and conservation context.
- **MAP_PLACEHOLDER_AJANTA_CAVES**: Add a sourced location map of Ajanta, Maharashtra, with modern orientation labels and a legend; do not imply fixed historical borders.
- [Watch: Ajanta Caves](https://whc.unesco.org/en/list/242/video/)

### Kushans: Central Asia meets South Asia

- ID: `kushan-connections`
- Timeline: 100 CE–300 CE (approximate topic window).
- Gallery: [Mathura: seated Buddha, 200s CE](../public/assets/images/classical/researched/mathura-buddha.jpg)
- **ADD_GANDHARA_COMPARISON_OBJECT**: Add a securely catalogued Gandharan sculpture for comparison, with object date, material, accession, findspot if known, photograph credit and reuse licence. Keep modern country labels distinct from ancient regions.

### Gupta courts and regional cultural worlds

- ID: `gupta-world`
- Timeline: 320 CE–550 CE (approximate topic window).
- Gallery: [Samudragupta: lyrist-type gold coin](../public/assets/images/classical/researched/samudragupta-coin.jpg)
- **ADD_GUPTA_INSCRIPTION_EDITION**: Add a licensed image of the Prayaga/Allahabad pillar's Gupta inscription with the relevant lines, edition and translation. Distinguish Samudragupta's panegyric from the pillar's earlier and later inscriptions.

### Nalanda: a residential world of learning

- ID: `nalanda-learning`
- Timeline: 400 CE–1200 CE (approximate topic window).
- Gallery: [Nalanda: Temple 3](../public/assets/images/classical/researched/nalanda-temple.jpg); [Nalanda: a shrine detail at Temple 3](../public/assets/images/classical/researched/nalanda-stucco.jpg)
- **ADD_NALANDA_PHASED_MONASTERY_PLAN**: Add an excavation plan with monastery and temple numbers, scale and phase key. Cite the report page; identify conservation work and do not label every exposed wall as fifth-century.

### Aryabhata: mathematics and the moving heavens

- ID: `aryabhata-499`
- Timeline: 499 CE.
- Gallery: Reserved; no historical image substituted.
- **ADD_ARYABHATIYA_DATED_FOLIO**: Add a rights-cleared Aryabhatiya folio with repository, shelfmark, copying date, verse identifier and matching transcription/translation. Do not label a later copy as an autograph of 499.

### Tamil hymns and communities of devotion

- ID: `tamil-devotion`
- Timeline: 550 CE–1000 CE (approximate topic window).
- Gallery: [Karaikkal Ammaiyar: later devotional bronze](../public/assets/images/classical/researched/karaikkal-ammaiyar.jpg)
- **ADD_TAMIL_HYMN_TEXT_AND_RECORDING**: Add an identified hymn by Andal, Appar or Karaikkal Ammaiyar with Tamil text, work/verse number, attributed translation and a permitted recording with performer and recording date. Separate composition, compilation and performance dates.

### Bihar and Buddhist bronze casting

- ID: `bihar-buddha-bronze`
- Timeline: 550 CE–650 CE (approximate topic window).
- Gallery: [Buddha Offering Protection](../public/assets/images/classical/met-38965.jpg); [Buddha Offering Protection: profile view](../public/assets/images/classical/researched/bihar-buddha-profile.jpg)
- **ADD_BIHAR_BRONZE_REVERSE_VIEW**: Add a rights-cleared reverse or casting-detail photograph of Met 69.222, if available. Retain the museum's probable Bihar attribution and do not substitute a different bronze.
- **MAP_PLACEHOLDER_BIHAR_BUDDHA_BRONZE**: Add a sourced location map of Probably Bihar, India, with modern orientation labels and a legend; do not imply fixed historical borders.
- [Watch: Inside the Bihar Buddha: 3D X-ray research](https://www.metmuseum.org/essays/3d-xray-bronze-buddha)

### Ellora: Buddhist, Hindu and Jain rock-cut spaces

- ID: `ellora-caves`
- Timeline: 600 CE–1000 CE (approximate topic window).
- Gallery: [Kailasa, Ellora: exterior view](../public/assets/images/classical/researched/ellora-exterior.jpg); [Kailasa: carved courtyard and visitors](../public/assets/images/classical/researched/ellora-kailasa.jpg)
- **ADD_ELLORA_BUDDHIST_JAIN_COMPARISON**: Add identified Buddhist and Jain cave interiors with cave numbers, dating sources and licences, plus a phase-labelled site plan. Do not repeat unsupported claims about impossibly short construction times.
- **MAP_PLACEHOLDER_ELLORA_CAVES**: Add a sourced location map of Ellora, Maharashtra, with modern orientation labels and a legend; do not imply fixed historical borders.
- [Watch: Ellora Caves](https://whc.unesco.org/en/list/243/video/)

### Pallava Mahabalipuram: architecture on the coast

- ID: `pallava-mahabalipuram`
- Timeline: 600 CE–799 CE (approximate topic window).
- Gallery: [Shore Temple, Mahabalipuram](../public/assets/images/classical/researched/shore-temple.jpg)
- **ADD_MAHABALIPURAM_RATHA_COMPARISON**: Add a named ratha and a named mandapa image, with monument date and licence, to compare monolithic, excavated and structural architecture. A port-route map needs independent historical sources.
- **MAP_PLACEHOLDER_PALLAVA_MAHABALIPURAM**: Add a sourced location map of Mahabalipuram, Tamil Nadu, with modern orientation labels and a legend; do not imply fixed historical borders.
- [Watch: Mahabalipuram](https://whc.unesco.org/en/list/249/video/)

### Brahmagupta: zero and rules of calculation

- ID: `brahmagupta-628`
- Timeline: 628 CE.
- Gallery: Reserved; no historical image substituted.
- **ADD_BRAHMASPHUTASIDDHANTA_FOLIO**: Add an identified folio of the Brahmasphutasiddhanta with shelfmark, copying date, chapter/verse and a permitted translation. Include a clear note where historical rules differ from modern mathematics.

### Pattadakal: Chalukya temples and royal patronage

- ID: `pattadakal-chalukya`
- Timeline: 700 CE–799 CE (approximate topic window).
- Gallery: [Virupaksha Temple, Pattadakal](../public/assets/images/classical/researched/pattadakal-virupaksha.jpg)
- **ADD_LOKAMAHADEVI_INSCRIPTION**: Add the relevant patronage inscription with its location, edition, readable photograph and translation, or a licensed comparative plan of named Pattadakal temples.
- **MAP_PLACEHOLDER_PATTADAKAL_CHALUKYA**: Add a sourced location map of Pattadakal, Karnataka, with modern orientation labels and a legend; do not imply fixed historical borders.
- [Watch: Pattadakal](https://whc.unesco.org/en/list/239/video/)

### Khajuraho: Chandella temples and sculptural programmes

- ID: `khajuraho-chandella`
- Timeline: 950 CE–1050 CE (approximate topic window).
- Gallery: [Kandariya Mahadeva Temple](../public/assets/images/classical/researched/khajuraho-kandariya.jpg)
- **ADD_KHAJURAHO_IDENTIFIED_SCULPTURE**: Add a labelled sculptural panel and a Jain-temple comparison, with exact monument, panel position, dating source, photographer and licence.
- **MAP_PLACEHOLDER_KHAJURAHO_CHANDELLA**: Add a sourced location map of Khajuraho, Madhya Pradesh, with modern orientation labels and a legend; do not imply fixed historical borders.
- [Watch: Khajuraho](https://whc.unesco.org/en/list/240/video/)

### Chola temples: power, worship and bronze casting

- ID: `chola-temples`
- Timeline: 1000 CE–1200 CE (approximate topic window).
- Gallery: [Shiva as Lord of Dance (Nataraja)](../public/assets/images/classical/met-39328.jpg); [Brihadisvara: a living temple in 2025](../public/assets/images/classical/researched/thanjavur-festival.jpg); [Thanjavur: modern sanctuary-plan illustration](../public/assets/images/classical/researched/thanjavur-temple.jpg)
- **ADD_CHOLA_INSCRIPTION_AND_PHASED_PLAN**: Add a cited temple inscription and a scaled, phased plan. Identify later additions and distinguish the dates of Thanjavur, Gangaikondacholapuram and Darasuram; do not infer dimensions from the unscaled illustration.
- [Listen: the Met's Nataraja audio guide and transcript](https://www.metmuseum.org/art/collection/search/39328)
- [Watch: Great Living Chola Temples](https://whc.unesco.org/en/list/250/video/)

### Rani-ki-Vav: water engineering and sacred space

- ID: `rani-ki-vav`
- Timeline: 1000 CE–1099 CE (approximate topic window).
- Gallery: [Rani-ki-Vav: descending architecture](../public/assets/images/classical/researched/rani-ki-vav.jpg)
- **ADD_RANI_KI_VAV_MEASURED_SECTION**: Add a rights-cleared longitudinal section with scale, orientation, tank and shaft labels, source and conservation phases. Mark any reconstructed or inferred historic water levels.
- **MAP_PLACEHOLDER_RANI_KI_VAV**: Add a sourced location map of Patan, Gujarat, with modern orientation labels and a legend; do not imply fixed historical borders.

### Hoysala Karnataka: temples and named artisans

- ID: `hoysala-temples`
- Timeline: 1100 CE–1299 CE (approximate topic window).
- Gallery: [Hoysaleswara Temple, Halebidu](../public/assets/images/classical/researched/hoysaleswara.jpg)
- **ADD_HOYSALA_ARTISAN_SIGNATURE**: Add a documented artisan signature with a readable image and translation, plus labelled comparisons from Belur and Somanathapura. Keep dates and dedications specific to each temple.
- **MAP_PLACEHOLDER_HOYSALA_TEMPLES**: Add a sourced location map of Belur, Halebidu and Somanathapura, Karnataka, with modern orientation labels and a legend; do not imply fixed historical borders.

### Bhakti and Sufi communities: poetry and practice

- ID: `indian-devotional-dialogues`
- Timeline: 1200 CE–1500 CE (approximate topic window).
- Gallery: [Nizamuddin Dargah in modern Delhi](../public/assets/images/classical/researched/nizamuddin-shrine.jpg)
- **ADD_KABIR_TEXT_AND_PERFORMANCE**: Add an identified Kabir composition with collection and textual witness, translation credit and a permitted performance recording. Also add a phased Nizamuddin plan if illustrating medieval architecture.

### Delhi’s Qutb complex: building and rebuilding power

- ID: `qutb-complex`
- Timeline: 1200 CE–1311 CE (approximate topic window).
- Gallery: [Qutb Minar and Alai Darwaza](../public/assets/images/classical/researched/qutb-alai.jpg)
- **ADD_QUTB_INSCRIPTION_AND_PHASE_KEY**: Add a dated inscription close-up with transcription and a plan distinguishing the mosque, tower, Alai Darwaza and later structures. Identify reused material and later restoration separately.
- **MAP_PLACEHOLDER_QUTB_COMPLEX**: Add a sourced location map of Mehrauli, Delhi, with modern orientation labels and a legend; do not imply fixed historical borders.
- [Watch: Qutb Minar and its Monuments](https://whc.unesco.org/en/list/233/video/)

### Konark: the Sun Temple and the Odisha coast

- ID: `konark-sun-temple`
- Timeline: 1200 CE–1299 CE (approximate topic window).
- Gallery: [Konark: a carved chariot wheel](../public/assets/images/classical/researched/konark-wheel.jpg); [Konark: wheel-hub detail](../public/assets/images/classical/researched/konark-detail.jpg)
- **ADD_KONARK_DOCUMENTED_SITE_PLAN**: Add a scaled plan or archaeological reconstruction that clearly distinguishes surviving and lost structures, with a phase key. Identify the exact wheel if adding an astronomical interpretation.
- **MAP_PLACEHOLDER_KONARK_SUN_TEMPLE**: Add a sourced location map of Konark, Odisha, with modern orientation labels and a legend; do not imply fixed historical borders.
- [Watch: Sun Temple, Konark](https://whc.unesco.org/en/list/246/video/)

### Delhi Sultanate: power and a growing money economy

- ID: `delhi-sultanate`
- Timeline: 1206 CE–1500 CE (approximate topic window).
- Gallery: [Coin attributed to Muhammad bin Tughluq](../public/assets/images/classical/researched/tughluq-coin.jpg)
- **ADD_CATALOGUED_SULTANATE_TANKA**: Add a museum or published tanka with accession, ruler, mint, issue year, metal, weight and both faces. The existing attributed photograph does not fulfil this catalogue-level requirement.
- **MAP_PLACEHOLDER_DELHI_SULTANATE**: Delhi Sultanate extent under separately dated rulers; distinguish tributary claims from direct control.

### Ibn Battuta: travelling through connected societies

- ID: `ibn-battuta-india`
- Timeline: 1333 CE–1347 CE (approximate topic window).
- Gallery: Reserved; no historical image substituted.
- **ADD_RIHLA_FOLIO_AND_ANNOTATED_ROUTE**: Add a licensed Rihla folio with shelfmark and copy date, or a referenced route map with visited/reported/uncertain places distinguished. Cite the edition and pages used for the South Asian journey.
- [Read: Ibn Battuta on cities and communication](https://sathee.iitk.ac.in/sathee-cuet/student-corner/ncert-books/class-12/themes-in-indian-history/chapter-05-through-the-eyes-of-travellers-perceptions-of-society/)

### Vijayanagara: capital and sacred landscape

- ID: `vijayanagara-city`
- Timeline: 1336 CE–1500 CE (approximate topic window).
- Gallery: [Hazara Rama Temple: narrative reliefs](../public/assets/images/classical/researched/hampi-reliefs.jpg)
- **ADD_HAMPI_PHASED_URBAN_PLAN**: Add a scaled urban plan distinguishing sacred and royal areas, waterworks and dated phases. Label sixteenth-century additions as later context; cite the survey and distinguish secure from proposed functions.

## Provenance files

- [Original museum photographs](classical-media-manifest.json)
- [New image manifest, licences, download URLs and hashes](classical-researched-media-manifest.json)
- [Chapter editing guide](classical-medieval-content.md)
