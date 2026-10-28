import type { PrehistoryGalleryImage } from "@/types/prehistory-exhibit";
export const ringstoneImage: PrehistoryGalleryImage = {
  src: "/assets/images/empires/ringstone-met-38080.jpg",
  title: "A surviving carved fragment",
  alt: "Fragment of a carved stone ring with small figures and palm-tree motifs",
  category: "Artefact",
  caption:
    "The Met, 1987.142.391. Stone, third–second century BCE; catalogued diameter 8.1 cm. The broad object date crosses the Mauryan dynastic boundary; its specific use is not established here.",
  credit:
    "The Metropolitan Museum of Art, Samuel Eilenberg Collection, Gift of Samuel Eilenberg, 1987",
  license: "Public Domain / The Met Open Access",
  sourceUrl: "https://www.metmuseum.org/art/collection/search/38080",
};

const legacyGalleries: Readonly<Record<string, readonly PrehistoryGalleryImage[]>> = {
  "magadha-rise": [
    {
      src: "/assets/images/empires/rajgir-indianvagabond.jpg",
      title: "Rajgir: surviving wall and landscape",
      category: "Site photograph",
      alt: "Stone walls extending across a grassy hillside at Rajgir",
      caption:
        "Cyclopean Wall of Rajgir, photographed 23 October 2023. Landscape context only: this photograph does not date the visible masonry to a particular ruler. Wikimedia preview, resized without cropping.",
      credit: "Indianvagabond / Wikimedia Commons",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Cyclopean_Wall_of_Rajgir_2.jpg",
    },
  ],
  "early-punchmarked-money": [
    {
      src: "/assets/images/empires/punchmarked-world-imaging.jpg",
      title: "Punch-marked coin: a visual comparison",
      category: "Teaching example",
      alt: "Two faces of an irregular silver-coloured coin bearing several punched symbols",
      caption:
        "Separate specimen from British Museum 1869,1203.48. The Commons filename says Mauryan, but its description attributes the coin to the Nandas. Used only to illustrate punching and shape; exact dynasty, date and measurements are not adopted. Reproduced unchanged.",
      credit: "PHG / World Imaging (Per Honor et Gloria), Wikimedia Commons",
      license: "Public domain, released by the photographer",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:MauryanCoin.JPG",
    },
  ],
  "kalinga-war": [
    {
      src: "/assets/images/empires/dhauli-sidsahu.jpg",
      title: "Dhauli: the edict site in its modern setting",
      category: "Site photograph",
      alt: "Rock-cut elephant above the protected Ashokan edict site at Dhauli",
      caption:
        "Dhauli, photographed 23 January 2013. Site context, not a battle image or a photograph of Edict XIII: the separate Kalinga edicts differ from the major-rock series. Reproduced unchanged.",
      credit: "Sidsahu / Wikimedia Commons",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Dhauli_Ashoka_edict.jpg",
    },
  ],
  "barabar-ajivikas": [
    {
      src: "/assets/images/empires/sudama-peppe-1870.jpg",
      title: "Sudama Cave: the exterior",
      category: "Site photograph",
      alt: "Entrance cut into the rounded granite rock face at Sudama Cave",
      caption:
        "Sudama Cave, archival photograph attributed to Thomas Fraser Peppé, 1870, British Library via Wikimedia Commons. It records a nineteenth-century exterior, not the cave's ancient appearance. Reproduced unchanged.",
      credit: "Thomas Fraser Peppé (1870), British Library / Wikimedia Commons",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Sudama_cave.jpg",
    },
  ],
  "mauryan-ringstone": [ringstoneImage],
  "sanchi-mauryan-core": [
    {
      src: "/assets/images/empires/sanchi-aditya-maurya.jpg",
      title: "Sanchi today: several periods in one view",
      category: "Site photograph",
      alt: "Lateral view of the Great Stupa at Sanchi with stone enclosure and a carved gateway",
      caption:
        "Photographed 29 September 2012. The visible enlarged stupa, stone enclosure and gateway include later construction; this is not a view of the Mauryan brick core alone. Original photograph reproduced unchanged.",
      credit: "Aditya Maurya / Wikimedia Commons",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Main_Stupa.JPG",
    },
  ],
  "ashoka-lumbini": [
    {
      src: "/assets/images/empires/lumbini-pranish-subedi.jpg",
      title: "The surviving pillar at Lumbini",
      category: "Site photograph",
      alt: "Ashoka's surviving stone pillar at Lumbini inside a protective enclosure",
      caption:
        "Photograph taken 14 January 2013. Modern site surroundings are visible; the scene does not reconstruct the ancient setting. Original photograph reproduced unchanged.",
      credit: "Pranish subedi / Wikimedia Commons",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Ashoka_pillar,_lumbini.jpg",
    },
  ],
};

const images: Record<string, PrehistoryGalleryImage> = {
  "bhir-mound.jpg": {
    src: "/assets/images/empires/researched/bhir-mound.jpg",
    title: "Bhir Mound: the earlier Taxila",
    category: "Site photograph",
    alt: "Low stone walls and irregular building remains at Bhir Mound",
    caption:
      "Bhir Mound, photographed December 2008. This is the early settlement component of Taxila, not the later planned city of Sirkap. Individual exposed walls are not assigned to Alexander's visit in 326 BCE. Modern pylons and buildings belong to the present landscape.",
    credit: "Dawoodmajoka",
    license: "Public domain",
    licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:BhirMound.JPG",
  },
  "nbpw-sonkh.jpg": {
    src: "/assets/images/empires/researched/nbpw-sonkh.jpg",
    title: "Northern Black Polished Ware from Sonkh",
    category: "Artefact",
    alt: "Dark polished pottery fragment held by modern display supports",
    caption:
      "Government Museum, Mathura, showcase 6-15; Sonkh fragment with a museum-photo attribution of 500-100 BCE, photographed 24 February 2013. That broad object range extends beyond this scene's urbanisation window. No excavation layer or exact manufacture year is inferred.",
    credit: "Biswarup Ganguly",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Fragment_-_Northern_Black_Polished_Ware_-_500-100_BCE_-_Sonkh_-_Showcase_6-15_-_Prehistory_and_Terracotta_Gallery_-_Government_Museum_-_Mathura_2013-02-24_6458.JPG",
  },
  "kumrahar-pillar.jpg": {
    src: "/assets/images/empires/researched/kumrahar-pillar.jpg",
    title: "Kumrahar: a surviving hall pillar",
    category: "Site photograph",
    alt: "Broken stone pillar displayed horizontally under a modern shelter at Kumrahar",
    caption:
      "Mauryan hall pillar at Kumrahar, Patna, uploaded 3 November 2008; capture date unverified. This architectural fragment gives material context for Pataliputra. The shelter and supports are modern; the photograph does not establish the hall's precise function or reconstruct the entire building.",
    credit: "Manoj nav",
    license: "Public domain",
    licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mauryan_Hall_pillar.jpg",
  },
  "sudama-interior.jpg": {
    src: "/assets/images/empires/researched/sudama-interior.jpg",
    title: "Sudama: the worked stone surface",
    category: "Site photograph",
    alt: "Close interior view of smooth curved granite wall and ceiling at Sudama cave",
    caption:
      "Sudama Cave interior detail, photographed 6 October 2023. The curved surfaces show the treatment of the living rock; this close view is not a measured plan of its two chambers. Modern surface marks should not be read as an Ashokan inscription.",
    credit: "Sumitsurai",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Sudama_Cave_Interiors_-_Babar_Hill_Caves_(4).jpg",
  },
  "sarnath-capital.jpg": {
    src: "/assets/images/empires/researched/sarnath-capital.jpg",
    title: "Sarnath: the lion capital",
    category: "Artefact",
    alt: "Back-to-back carved lions above a wheel-and-animal abacus and bell-shaped base",
    caption:
      "Sarnath Museum: Ashokan lion capital, conventionally dated about 250 BCE. Photograph record dated 9 July 2011; Commons publishes a detail view. This is the surviving capital, not the complete pillar or a photograph of an edict.",
    credit: "Chrisi1964; published detail via Wikimedia Commons",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sarnath_capital.jpg",
  },
  "lumbini-inscription.jpg": {
    src: "/assets/images/empires/researched/lumbini-inscription.jpg",
    title: "Lumbini: detail of the Brahmi inscription",
    category: "Site photograph",
    alt: "Lines of Brahmi letters cut into the curved stone surface of the Lumbini pillar",
    caption:
      "Photographed 12 March 2013 by Anandajoti / Photo Dharma. This close view complements the whole-pillar photograph. It shows part of the inscription on a curved surface, not a complete flat transcription; consult the linked edition for missing edges and line readings.",
    credit: "Anandajoti / Photo Dharma",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Lumbini_-_Pillar_Edict_in_Brahmi_Script%2C_Lumbini_(9241396121).jpg",
  },
  "girnar-edict-xiii.jpg": {
    src: "/assets/images/empires/researched/girnar-edict-xiii.jpg",
    title: "Girnar: Major Rock Edict XIII",
    category: "Illustration",
    alt: "Historical printed facsimile of Girnar Edict XIII with line numbers and damaged areas",
    caption:
      "Published facsimile of the Girnar version of Major Rock Edict XIII, via the Commons extraction from the Girnar plate. This is an editorial record of the inscription, not a modern photograph of the rock. Damage and line numbering remain visible; it is distinct from Dhauli's separate Kalinga edicts.",
    credit: "Alexander Cunningham / Eugen Hultzsch, historical plate via Wikimedia Commons",
    license: "Public domain",
    licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Girnar_Major_Rock_Edict_No13.jpg",
  },
  "shahbazgarhi-edicts.jpg": {
    src: "/assets/images/empires/researched/shahbazgarhi-edicts.jpg",
    title: "Shahbazgarhi: Edicts VII and XII",
    category: "Illustration",
    alt: "Published inscription plate headed Seventh and Twelfth Rock Edicts Shahbazgarhi",
    caption:
      "Eugen Hultzsch, Inscriptions of Asoka (1925): Shahbazgarhi Edicts VII and XII in Kharosthi. The page preserves the edition's labels and line numbers. It documents two specified texts, not a generic alphabet chart or a Greek/Aramaic inscription.",
    credit: "Eugen Hultzsch, Inscriptions of Asoka (1925)",
    license: "Public domain",
    licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Shahbazgarhi_Edicts_7_and_12.jpg",
  },
  "gandhara-bentbar.jpg": {
    src: "/assets/images/empires/researched/gandhara-bentbar.jpg",
    title: "Gandhara: a bent-bar comparison",
    category: "Artefact",
    alt: "Elongated bent-bar coin with separate punched marks in a museum display",
    caption:
      "INHCRF Coin Museum, Nashik; identified in the photographer's record as a Gandhara bent-bar type. Photograph dated 31 July 2026, not an ancient event date. Accession, mass and the individual specimen's date remain unverified; do not transfer the British Museum coin's measurements to it.",
    credit: "SpeakingArch",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Bentbar_type_Punch-marked_Coin%2C_Gandhara_Mahajanpad%2C_INHCRF_Coin_Museum%2C_Nashik%2C_Maharashtra.jpg",
  },
  "mahavira-folio.jpg": {
    src: "/assets/images/empires/researched/mahavira-folio.jpg",
    title: "Mahavira: a 15th-century painted witness",
    category: "Artefact",
    alt: "Painted panel showing Mahavira at the centre of a circular preaching assembly",
    caption:
      "The Met, 55.121.38.18, Gujarat, 15th century CE: painted detail from a Kalpasutra folio, ink, opaque watercolour and gold on paper. This later devotional image represents Mahavira's samavasarana; it is not a contemporary portrait or a picture made in the sixth century BCE.",
    credit: "The Metropolitan Museum of Art, Rogers Fund, 1955",
    license: "Public domain",
    licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/74993",
  },
  "buddha-sermon.jpg": {
    src: "/assets/images/empires/researched/buddha-sermon.jpg",
    title: "The first sermon: an 11th-century interpretation",
    category: "Artefact",
    alt: "Black stone Buddha seated with hands in a teaching gesture on a lotus base",
    caption:
      "The Met, 20.43, Bihar, probably Nalanda, 11th century CE. This Pala-period sculpture interprets the first sermon at Sarnath. It is a later work about the Buddha, not an object from his lifetime; its place of production differs from the place represented.",
    credit: "The Metropolitan Museum of Art, Rogers Fund, 1920",
    license: "Public domain",
    licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/38123",
  },
};
export const empireGalleries: Readonly<Record<string, readonly PrehistoryGalleryImage[]>> = {
  ...legacyGalleries,
  mahajanapadas: legacyGalleries["magadha-rise"]!,
  "mauryan-successors": legacyGalleries["sanchi-mauryan-core"]!,
  "ganga-urban-life": [...(legacyGalleries["ganga-urban-life"] ?? []), images["nbpw-sonkh.jpg"]!],
  "magadha-rise": [...(legacyGalleries["magadha-rise"] ?? []), images["kumrahar-pillar.jpg"]!],
  "mahavira-jain-traditions": [
    ...(legacyGalleries["mahavira-jain-traditions"] ?? []),
    images["mahavira-folio.jpg"]!,
  ],
  "taxila-northwest": [...(legacyGalleries["taxila-northwest"] ?? []), images["bhir-mound.jpg"]!],
  "buddha-early-sangha": [
    ...(legacyGalleries["buddha-early-sangha"] ?? []),
    images["buddha-sermon.jpg"]!,
  ],
  "early-punchmarked-money": [
    ...(legacyGalleries["early-punchmarked-money"] ?? []),
    images["gandhara-bentbar.jpg"]!,
  ],
  "alexander-taxila": [...(legacyGalleries["alexander-taxila"] ?? []), images["bhir-mound.jpg"]!],
  "mauryan-empire": [...(legacyGalleries["mauryan-empire"] ?? []), images["kumrahar-pillar.jpg"]!],
  "ashoka-rule": [...(legacyGalleries["ashoka-rule"] ?? []), images["sarnath-capital.jpg"]!],
  "kalinga-war": [...(legacyGalleries["kalinga-war"] ?? []), images["girnar-edict-xiii.jpg"]!],
  "ashoka-dhamma": [
    ...(legacyGalleries["ashoka-dhamma"] ?? []),
    images["shahbazgarhi-edicts.jpg"]!,
    images["lumbini-inscription.jpg"]!,
  ],
  "barabar-ajivikas": [
    ...(legacyGalleries["barabar-ajivikas"] ?? []),
    images["sudama-interior.jpg"]!,
  ],
  "ashoka-lumbini": [
    ...(legacyGalleries["ashoka-lumbini"] ?? []),
    images["lumbini-inscription.jpg"]!,
  ],
};
