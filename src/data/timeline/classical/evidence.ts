import type { HistoricalSource } from "@/types/history";

/** Object-specific reading guidance, separate from political chronology. */
export const classicalEvidence: Readonly<
  Record<string, { text: string; tag: string; need: string }>
> = {
  "indo-greek-india": {
    text: "The paired coin faces make multilingual kingship visible: compare the elephant and Greek legend with the bull and Kharoshthi legend. This is an Apollodotus I issue, not a portrait of Alexander. Attribution follows the linked photographic record; exact mint and archaeological findspot remain unverified. A coin's circulation is not the same thing as a ruler's permanent territorial control.",
    tag: "ADD_APOLLODOTUS_CATALOGUE_AND_LEGEND",
    need: "Add the exact specimen's catalogue or auction identifier, weight, mint attribution and a checked transcription of both legends. Preserve both faces and identify any uncertain reading.",
  },
  "ajanta-caves": {
    text: "Padmapani belongs to the later painted caves, not the early BCE phase. UNESCO distinguishes the earlier excavations from renewed work under Vakataka-era patrons. The photograph preserves a damaged painted surface rather than a digitally completed reconstruction. Compare the mural with the cave's worship space before treating a detached detail as the entire decorative programme.",
    tag: "ADD_AJANTA_PHASE_PLAN",
    need: "Add a licensed cave-number plan distinguishing the early and later phases, plus a dated view of Cave 9 or 10. Include scale, publication and conservation context.",
  },
  "kushan-connections": {
    text: "Cleveland's sandstone Buddha is catalogued to Mathura in the 200s CE. Its missing head and incomplete arms are retained in the photograph. The robe's treatment offers a specific example of Mathura sculpture; one object cannot represent every Gandharan workshop or establish Kanishka's exact reign. The museum's regional attribution is not an excavation findspot.",
    tag: "ADD_GANDHARA_COMPARISON_OBJECT",
    need: "Add a securely catalogued Gandharan sculpture for comparison, with object date, material, accession, findspot if known, photograph credit and reuse licence. Keep modern country labels distinct from ancient regions.",
  },
  "gupta-world": {
    text: "The lyrist-type coin combines a musical royal image with a seated deity on its reverse. Such imagery is evidence for the representation of kingship, not proof that every subject shared courtly prosperity. The photographed specimen comes from CNG via Commons; measurements and accession numbers of similar museum coins must not be transferred to it.",
    tag: "ADD_GUPTA_INSCRIPTION_EDITION",
    need: "Add a licensed image of the Prayaga/Allahabad pillar's Gupta inscription with the relevant lines, edition and translation. Distinguish Samudragupta's panegyric from the pillar's earlier and later inscriptions.",
  },
  "nalanda-learning": {
    text: "The paired photographs connect Temple 3's brick mass with a surviving decorated niche. Nalanda's institutional history and the dates of particular walls are different questions: rebuilding accumulated over centuries. The temple is not a classroom plan. UNESCO's nomination dossier provides the appropriate starting point for relating excavated monasteries, shrines and construction phases.",
    tag: "ADD_NALANDA_PHASED_MONASTERY_PLAN",
    need: "Add an excavation plan with monastery and temple numbers, scale and phase key. Cite the report page; identify conservation work and do not label every exposed wall as fifth-century.",
  },
  "aryabhata-499": {
    text: "The composition date 499 CE does not date every surviving copy of the Aryabhatiya. A useful manuscript image needs a shelfmark, folio, script, copying date and edition reference. A modern portrait or satellite photograph would not show Aryabhata's appearance or his original text. The worked example below uses modern notation and is explicitly a teaching aid.",
    tag: "ADD_ARYABHATIYA_DATED_FOLIO",
    need: "Add a rights-cleared Aryabhatiya folio with repository, shelfmark, copying date, verse identifier and matching transcription/translation. Do not label a later copy as an autograph of 499.",
  },
  "tamil-devotion": {
    text: "The Ammaiyar bronze is dated around the late thirteenth century, centuries after the poet and beyond this entry's main window. The cymbals make devotional singing visible in later sculpture. The museum's account of her transformation belongs to sacred biography; it is not a clinical or contemporary eyewitness description. Poetry, later compilations and saint images provide different kinds of evidence.",
    tag: "ADD_TAMIL_HYMN_TEXT_AND_RECORDING",
    need: "Add an identified hymn by Andal, Appar or Karaikkal Ammaiyar with Tamil text, work/verse number, attributed translation and a permitted recording with performer and recording date. Separate composition, compilation and performance dates.",
  },
  "bihar-buddha-bronze": {
    text: "The frontal and profile photographs show the same bronze, Met 69.222, dated late sixth to early seventh century and attributed probably to Bihar. The qualified place label matters: it should not become an asserted Nalanda findspot. Its devotional gesture and robe are visible evidence; internal casting features require the museum's technical study rather than an inference from the surface photograph.",
    tag: "ADD_BIHAR_BRONZE_REVERSE_VIEW",
    need: "Add a rights-cleared reverse or casting-detail photograph of Met 69.222, if available. Retain the museum's probable Bihar attribution and do not substitute a different bronze.",
  },
  "ellora-caves": {
    text: "The exterior and courtyard views show Kailasa, Cave 16, within Ellora's Hindu group. They do not stand for the Buddhist and Jain caves. The timeline's 600-1000 CE range is a broad teaching window: UNESCO's detailed statement describes phases extending earlier and later, including Jain work into the twelfth century. Cave-specific dating is more precise than applying one range to every monument.",
    tag: "ADD_ELLORA_BUDDHIST_JAIN_COMPARISON",
    need: "Add identified Buddhist and Jain cave interiors with cave numbers, dating sources and licences, plus a phase-labelled site plan. Do not repeat unsupported claims about impossibly short construction times.",
  },
  "pallava-mahabalipuram": {
    text: "The Shore Temple gives a structural-masonry comparison for Mahabalipuram's monolithic rathas and rock-cut mandapas. Those categories describe how buildings were made, not successive stages visible in this single photograph. The site is coastal, but a temple view alone cannot establish the scale or routes of Pallava maritime trade.",
    tag: "ADD_MAHABALIPURAM_RATHA_COMPARISON",
    need: "Add a named ratha and a named mandapa image, with monument date and licence, to compare monolithic, excavated and structural architecture. A port-route map needs independent historical sources.",
  },
  "brahmagupta-628": {
    text: "A typeset arithmetic example can explain the work without pretending to be a seventh-century manuscript. Brahmagupta discussed positive and negative quantities and zero, but his treatment of division by zero must be distinguished from modern arithmetic. A folio should be linked to its copying date and a checked edition, not dated automatically to the work's composition in 628.",
    tag: "ADD_BRAHMASPHUTASIDDHANTA_FOLIO",
    need: "Add an identified folio of the Brahmasphutasiddhanta with shelfmark, copying date, chapter/verse and a permitted translation. Include a clear note where historical rules differ from modern mathematics.",
  },
  "pattadakal-chalukya": {
    text: "The photograph identifies the Virupaksha Temple at Pattadakal, associated with Lokamahadevi's patronage around 740. It must not be confused with Hampi's Virupaksha Temple. Comparing its tower with other monuments in the group reveals varied architectural choices, but patronage dates and building phases require inscriptions and architectural study rather than visual resemblance alone.",
    tag: "ADD_LOKAMAHADEVI_INSCRIPTION",
    need: "Add the relevant patronage inscription with its location, edition, readable photograph and translation, or a licensed comparative plan of named Pattadakal temples.",
  },
  "khajuraho-chandella": {
    text: "Kandariya's clustered spires help connect architectural form with the carved exterior. Khajuraho includes Hindu and Jain monuments; this one temple is not the whole ensemble. Its full sculptural programme should be examined rather than reducing the site to a few sensational details. Each close-up should identify its temple and location on the building.",
    tag: "ADD_KHAJURAHO_IDENTIFIED_SCULPTURE",
    need: "Add a labelled sculptural panel and a Jain-temple comparison, with exact monument, panel position, dating source, photographer and licence.",
  },
  "chola-temples": {
    text: "The gallery pairs an eleventh-century Nataraja with a modern Thanjavur festival view and a modern sanctuary-plan illustration. These are three different evidence types. The bronze is not identified as a find from this temple, the festival photograph includes later fabric and lighting, and the plan has no visible scale or phase key. Chola temples remain places of worship as well as historical monuments.",
    tag: "ADD_CHOLA_INSCRIPTION_AND_PHASED_PLAN",
    need: "Add a cited temple inscription and a scaled, phased plan. Identify later additions and distinguish the dates of Thanjavur, Gangaikondacholapuram and Darasuram; do not infer dimensions from the unscaled illustration.",
  },
  "rani-ki-vav": {
    text: "The descending corridor, pavilions and sculptural niches connect practical water access with sacred and memorial architecture. UNESCO describes seven levels in the design. The modern conserved remains should not be read as a direct measurement of the eleventh-century water table. A longitudinal section would explain the relationship between stairways, tank and well shaft more precisely.",
    tag: "ADD_RANI_KI_VAV_MEASURED_SECTION",
    need: "Add a rights-cleared longitudinal section with scale, orientation, tank and shaft labels, source and conservation phases. Mark any reconstructed or inferred historic water levels.",
  },
  "hoysala-temples": {
    text: "Halebidu's Hoysaleswara is one member of the three-site ensemble, alongside Belur and Somanathapura. The photograph shows the richly carved surfaces, not a complete plan. To connect the entry's named-artisan theme to direct evidence, a readable signature must be identified by monument, position, transcription and edition; a decorative close-up alone cannot supply an artist's name.",
    tag: "ADD_HOYSALA_ARTISAN_SIGNATURE",
    need: "Add a documented artisan signature with a readable image and translation, plus labelled comparisons from Belur and Somanathapura. Keep dates and dedications specific to each temple.",
  },
  "indian-devotional-dialogues": {
    text: "The modern Nizamuddin shrine view locates a continuing Chishti devotional centre. The official monument record lists several later building campaigns, so its present dome and other fabric cannot all be dated to the saint's lifetime. A shrine photograph is not an illustration of Kabir's poetry or of all bhakti traditions. Texts, biographies, performance and architecture need separate dates and attributions.",
    tag: "ADD_KABIR_TEXT_AND_PERFORMANCE",
    need: "Add an identified Kabir composition with collection and textual witness, translation credit and a permitted performance recording. Also add a phased Nizamuddin plan if illustrating medieval architecture.",
  },
  "qutb-complex": {
    text: "The paired tower and gateway make the site's chronology visible: the Alai Darwaza dates to 1311, later than the tower's initial phases. Modern photography records a layered surviving complex, including repairs. Read Arabic and other inscriptions through an edition; architectural reuse needs monument-specific evidence rather than a general claim about every carved stone.",
    tag: "ADD_QUTB_INSCRIPTION_AND_PHASE_KEY",
    need: "Add a dated inscription close-up with transcription and a plan distinguishing the mosque, tower, Alai Darwaza and later structures. Identify reused material and later restoration separately.",
  },
  "konark-sun-temple": {
    text: "The wheel and separate hub-detail photographs show the Sun Temple's chariot imagery at two scales. They are not confirmed as the same wheel. The surviving building is incomplete, so a full reconstruction needs published evidence. Avoid converting the symbolic wheels into unsupported claims of perfectly accurate clocks or attributing every visible carving to a precisely dated day.",
    tag: "ADD_KONARK_DOCUMENTED_SITE_PLAN",
    need: "Add a scaled plan or archaeological reconstruction that clearly distinguishes surviving and lost structures, with a phase key. Identify the exact wheel if adding an astronomical interpretation.",
  },
  "delhi-sultanate": {
    text: "The Commons photograph shows both faces of a coin attributed by its contributor to Muhammad bin Tughluq. It is useful as an attributed example, but its mint, issue year, metal and weight are not verified. A separate Smithsonian catalogue records a gold coin of 1325-1326; its data must not be transferred to the pictured private-collection coin. Monetary history requires specimen-level evidence.",
    tag: "ADD_CATALOGUED_SULTANATE_TANKA",
    need: "Add a museum or published tanka with accession, ruler, mint, issue year, metal, weight and both faces. The existing attributed photograph does not fulfil this catalogue-level requirement.",
  },
  "ibn-battuta-india": {
    text: "A Rihla manuscript image needs its own copy date and shelfmark; it should not be mistaken for a travel diary written on the spot. The account was composed after the journeys and includes information heard from others. A route map must distinguish places visited, reported places and uncertain sequences instead of turning the narrative into one precise modern GPS track.",
    tag: "ADD_RIHLA_FOLIO_AND_ANNOTATED_ROUTE",
    need: "Add a licensed Rihla folio with shelfmark and copy date, or a referenced route map with visited/reported/uncertain places distinguished. Cite the edition and pages used for the South Asian journey.",
  },
  "vijayanagara-city": {
    text: "Hazara Rama supplies an early-fifteenth-century monument within this chapter's pre-1500 window. Its carved narratives belong to a temple in the royal area, not a photographic chronicle of one ruler's reign. The foundation date does not automatically date each repair or panel. Later sixteenth-century Hampi monuments require explicit labels when used to explain the earlier capital.",
    tag: "ADD_HAMPI_PHASED_URBAN_PLAN",
    need: "Add a scaled urban plan distinguishing sacred and royal areas, waterworks and dated phases. Label sixteenth-century additions as later context; cite the survey and distinguish secure from proposed functions.",
  },
};

export const classicalAdditionalSources: Readonly<Record<string, readonly HistoricalSource[]>> = {
  "chola-temples": [
    {
      id: "classical-nataraja-audio",
      title: "Listen: the Met's Nataraja audio guide and transcript",
      url: "https://www.metmuseum.org/art/collection/search/39328",
      publisher: "The Metropolitan Museum of Art",
    },
  ],
  "nalanda-learning": [
    {
      id: "classical-nalanda-dossier",
      title: "Nalanda: ASI nomination dossier, plans and archaeological context",
      url: "https://whc.unesco.org/uploads/nominations/1502.pdf",
      publisher: "Archaeological Survey of India / UNESCO",
    },
  ],
  "indian-devotional-dialogues": [
    {
      id: "classical-nizamuddin-record",
      title: "Tomb of Hazrat Nizamuddin: official monument record and building phases",
      url: "https://nmma.nic.in/nmma/builtDetail.do?refId=11700&state=07",
      publisher: "Archaeological Survey of India, NMMA",
    },
  ],
  "delhi-sultanate": [
    {
      id: "classical-smithsonian-coin",
      title: "Separate comparison: gold coin S1999.18, 1325–1326",
      url: "https://asia-archive.si.edu/object/S1999.18/",
      publisher: "Smithsonian National Museum of Asian Art",
    },
  ],
  "ibn-battuta-india": [
    {
      id: "classical-travellers-reading",
      title: "Read: Ibn Battuta on cities and communication",
      url: "https://sathee.iitk.ac.in/sathee-cuet/student-corner/ncert-books/class-12/themes-in-indian-history/chapter-05-through-the-eyes-of-travellers-perceptions-of-society/",
      publisher: "IIT Kanpur SATHEE, NCERT chapter 5",
    },
  ],
  "vijayanagara-city": [
    {
      id: "classical-hazara-rama",
      title: "Hazara Rama: early fifteenth-century temple in Hampi",
      url: "https://www.incredibleindia.gov.in/en/karnataka/hampi/hazara-rama-temple",
      publisher: "Ministry of Tourism, Government of India",
    },
  ],
};

export const classicalVideoGuides: Readonly<
  Record<
    string,
    {
      site?: number;
      url?: string;
      publisher?: string;
      credit?: string;
      title: string;
      focus: string;
    }
  >
> = {
  "bihar-buddha-bronze": {
    url: "https://www.metmuseum.org/essays/3d-xray-bronze-buddha",
    title: "Inside the Bihar Buddha: 3D X-ray research",
    publisher: "The Metropolitan Museum of Art",
    credit: "The Metropolitan Museum of Art, Objects Conservation and Scientific Research",
    focus:
      "The museum's 2019 study and accompanying video examine internal casting channels in this same bronze, 69.222. Researchers interpret them as routes for molten metal into difficult parts of the robe. The moving X-ray views are modern scientific imaging, not a reconstruction of the entire historical workshop.",
  },
  "ajanta-caves": {
    site: 242,
    title: "Ajanta Caves",
    focus:
      "Compare the cliff setting, worship spaces and mural details. Separate early excavations from the later painted caves.",
  },
  "ellora-caves": {
    site: 243,
    title: "Ellora Caves",
    focus:
      "Compare excavated space and carved architectural forms. A site overview includes more traditions and phases than the two Kailasa photographs.",
  },
  "pallava-mahabalipuram": {
    site: 249,
    title: "Mahabalipuram",
    focus:
      "Look for differences between rathas, cave sanctuaries, open-air reliefs and structural temples.",
  },
  "pattadakal-chalukya": {
    site: 239,
    title: "Pattadakal",
    focus:
      "Compare the named monuments and their tower forms; keep Lokamahadevi's commission distinct from the rest of the ensemble.",
  },
  "khajuraho-chandella": {
    site: 240,
    title: "Khajuraho",
    focus:
      "Notice the relationship between sculptural surfaces and architecture, and the site's Hindu and Jain settings.",
  },
  "chola-temples": {
    site: 250,
    title: "Great Living Chola Temples",
    focus:
      "Compare the temple architecture with the portable bronze. The film description's broad political wording should not be treated as a precise imperial boundary map or reign list.",
  },
  "qutb-complex": {
    site: 233,
    title: "Qutb Minar and its Monuments",
    focus:
      "Identify the tower, gateway and surrounding structures as separate phases rather than a single construction campaign.",
  },
  "konark-sun-temple": {
    site: 246,
    title: "Sun Temple, Konark",
    focus:
      "Place the photographed wheels within the larger surviving monument; distinguish the present remains from the complete original temple.",
  },
};

export const classicalReadingNotes: Readonly<Record<string, { title: string; text: string }>> = {
  "chola-temples": {
    title: "Listen and look: the Nataraja's gestures",
    text: "The museum's object page includes an audio guide and transcript for this Nataraja. Compare the drum, flame, raised foot and gesture of reassurance with the photograph. This is modern curatorial interpretation of the sculpture's religious imagery, not a surviving Chola-period recording. The image's open-access licence does not automatically cover the audio.",
  },
  "aryabhata-499": {
    title: "Try the calculation: a modern notation example",
    text: "Aryabhata's circumference rule can be written in modern notation as ((100 + 4) × 8 + 62,000) ÷ 20,000 = 3.1416. Compare this approximation with π ≈ 3.14159265. The displayed symbols and decimal layout are modern teaching notation, not a facsimile or a claim that the original verse used this typography.",
  },
  "brahmagupta-628": {
    title: "Try the rules: fortunes, debts and zero",
    text: "Modern examples of the rules discussed in the historical account are 7 + 0 = 7, 0 − 7 = −7, and (−3) × (−4) = 12. These examples are newly chosen teaching illustrations. They do not reproduce manuscript notation. In modern arithmetic, division by zero is undefined; Brahmagupta's historical treatment must not be presented as the modern rule.",
  },
  "ibn-battuta-india": {
    title: "Read the account: communication and movement",
    text: "The NCERT selection discusses Ibn Battuta's description of horse and foot relay posts and the movement of information and goods. Read the passage as a traveller's account with a particular viewpoint, not a measured survey of every Indian route. Compare what he says he observed with reported information before drawing a journey map.",
  },
};
