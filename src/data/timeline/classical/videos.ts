import type { HistoricalVideo } from "@/types/history";

/** Publisher videos are context, not substitutes for dated evidence. */
export const classicalVideoLibrary = {
  northwest: {
    id: "classical-video-northwest",
    title: "Indo - Greeks, Sakas and Kushanas",
    publisher: "Vidya-mitra",
    watchUrl: "https://www.youtube.com/watch?v=A_e0lce1hqs",
    description:
      "An Indian Culture course lecture on Indo-Greek, Saka and Kushan histories, introducing the chapter’s northwestern connections.",
    context:
      "These were distinct and changing kingdoms, not one uninterrupted empire. The lecture supplies political context; use museum records for individual coins.",
    durationSeconds: 2049,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "A_e0lce1hqs",
  },
  ajanta: {
    id: "classical-video-ajanta",
    title: "Ajanta Caves (UNESCO/NHK)",
    publisher: "UNESCO",
    watchUrl: "https://www.youtube.com/watch?v=InmFDhVyszw",
    description: "A short UNESCO/NHK introduction to Ajanta’s setting, caves and Buddhist art.",
    context:
      "The film spans early excavations and much later painted caves. Gupta-era is a broad time label, not proof that the Guptas commissioned the later Vakataka-period work.",
    durationSeconds: 178,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "InmFDhVyszw",
    catalogueUrl: "https://whc.unesco.org/en/list/242/",
  },
  gupta: {
    id: "classical-video-gupta",
    title: "The Gupta Period",
    publisher: "CEC",
    watchUrl: "https://www.youtube.com/watch?v=HTnFRpbrgcQ",
    description:
      "An extended CEC lecture introducing Gupta-period history and cultural developments.",
    context:
      "A broad overview, not a uniform golden age for every region or social group. The chapter’s sources distinguish court patronage from wider cultural activity.",
    durationSeconds: 2864,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "HTnFRpbrgcQ",
  },
  nalanda: {
    id: "classical-video-nalanda",
    title: "The Ancient University of Nalanda | It Happens Only in India | National Geographic",
    publisher: "National Geographic India",
    watchUrl: "https://www.youtube.com/watch?v=O67m2k70JLA",
    description:
      "A short National Geographic India introduction to the archaeological setting and memory of Nalanda.",
    context:
      "A television overview, not a full excavation or institutional history. Treat superlatives and dramatic summaries cautiously; the learning centre developed over centuries.",
    durationSeconds: 222,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "O67m2k70JLA",
  },
  aryabhata: {
    id: "classical-video-aryabhata",
    title: "Mod-01 Lec-7 Aryabhatıya of Aryabhata - Part 1",
    publisher: "nptelhrd",
    watchUrl: "https://www.youtube.com/watch?v=xNxK2lDm3hQ",
    description:
      "The first NPTEL lecture on the Aryabhatiya in Mathematics in India, from the IIT Bombay course.",
    context:
      "A detailed mathematical lecture rather than a short biography. Modern notation explains historical rules; it is not the typography of the original verses or surviving manuscripts.",
    durationSeconds: 3026,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "xNxK2lDm3hQ",
  },
  "tamil-bhakti": {
    id: "classical-video-tamil-bhakti",
    title: "South Indian Bhakti Movement",
    publisher: "Vidya-mitra",
    watchUrl: "https://www.youtube.com/watch?v=SpUlPgzwMrg",
    description:
      "A social and cultural history lecture on South Indian Bhakti, accompanying Tamil hymns and devotional communities.",
    context:
      "The lecture extends beyond the earliest phase shown here. Composition, oral transmission, collection and surviving manuscript dates are distinct.",
    durationSeconds: 2316,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "SpUlPgzwMrg",
  },
  bronze: {
    id: "classical-video-bronze",
    title: "3-D X-ray of a Gupta Bronze Buddha",
    publisher: "The Met",
    watchUrl: "https://www.youtube.com/watch?v=iYjfxvRr24Q",
    description:
      "A 24-second scientific imaging sequence of the same Bihar bronze, Met accession 69.222. Read the linked museum study to understand the internal casting channels.",
    context:
      "This is modern X-ray evidence, not a narrated workshop reconstruction. The study appeared in 2019; this YouTube upload is from 2022, not the date of the sculpture.",
    durationSeconds: 24,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "iYjfxvRr24Q",
    catalogueUrl: "https://www.metmuseum.org/essays/3d-xray-bronze-buddha",
  },
  "regional-sources": {
    id: "classical-video-regional-sources",
    title: "Sources of Early Medieval Indian History",
    publisher: "CH 02: CEC-UGC 02: History, Culture & Philosophy",
    watchUrl: "https://www.youtube.com/watch?v=51biazKvnYI",
    description:
      "A university-channel lecture introducing sources for early medieval Indian history. Start here before comparing the regional monuments.",
    context:
      "A guide to evidence, not a single chronology for every Indian region or an object-specific explanation of the galleries.",
    durationSeconds: 1709,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "51biazKvnYI",
  },
  ellora: {
    id: "classical-video-ellora",
    title: "Ellora Caves (UNESCO/NHK)",
    publisher: "UNESCO",
    watchUrl: "https://www.youtube.com/watch?v=YrDNeib0LaU",
    description: "A short UNESCO/NHK film on Ellora’s excavated architecture and religious spaces.",
    context:
      "The complex includes Buddhist, Hindu and Jain monuments built in different phases. Do not assign every cave to the Kailasa temple’s patronage or date.",
    durationSeconds: 176,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "YrDNeib0LaU",
    catalogueUrl: "https://whc.unesco.org/en/list/243/",
  },
  mahabalipuram: {
    id: "classical-video-mahabalipuram",
    title: "Group of Monuments at Mahabalipuram (UNESCO/NHK)",
    publisher: "UNESCO",
    watchUrl: "https://www.youtube.com/watch?v=CC3S2jTwqN4",
    description: "A short UNESCO/NHK introduction to the Pallava coastal monuments.",
    context:
      "Compare rock-cut sanctuaries, rathas, reliefs and structural temples as different forms and phases, rather than one building campaign.",
    durationSeconds: 179,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "CC3S2jTwqN4",
    catalogueUrl: "https://whc.unesco.org/en/list/249/",
  },
  brahmagupta: {
    id: "classical-video-brahmagupta",
    title: "Mod-01 Lec-11 Brahmasphutasiddhanta of Brahmagupta - Part 1",
    publisher: "nptelhrd",
    watchUrl: "https://www.youtube.com/watch?v=ez60V_IdITU",
    description:
      "The first NPTEL lecture on Brahmagupta’s Brahmasphutasiddhanta, for a detailed exploration of mathematical ideas.",
    context:
      "Historical treatments of zero and arithmetic are not identical to modern definitions. Division by zero is undefined in modern arithmetic; distinguish the text from later commentary.",
    durationSeconds: 2743,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "ez60V_IdITU",
  },
  pattadakal: {
    id: "classical-video-pattadakal",
    title: "Group of Monuments at Pattadakal (UNESCO/NHK)",
    publisher: "UNESCO",
    watchUrl: "https://www.youtube.com/watch?v=ZoUT7NCeiZ4",
    description: "A short UNESCO/NHK introduction to the Chalukya temple ensemble at Pattadakal.",
    context:
      "Keep the named temples and their dates separate. Lokamahadevi’s commission is not the construction date of the entire ensemble.",
    durationSeconds: 171,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "ZoUT7NCeiZ4",
    catalogueUrl: "https://whc.unesco.org/en/list/239/",
  },
  khajuraho: {
    id: "classical-video-khajuraho",
    title: "Khajuraho: India’s Forgotten Masterpiece | DD India Exclusive",
    publisher: "DD India",
    watchUrl: "https://www.youtube.com/watch?v=r5jtbIaJy3I",
    description:
      "A brief DD India visual introduction to Khajuraho’s temples and sculptural surfaces.",
    context:
      "This is a short broadcast overview, not a detailed study of every temple. Colonial rediscovery language does not establish that local communities had forgotten the site.",
    durationSeconds: 148,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "r5jtbIaJy3I",
  },
  chola: {
    id: "classical-video-chola",
    title: "Great Living Chola Temples\nGreat Living Chola Temples (UNESCO/NHK)",
    publisher: "UNESCO",
    watchUrl: "https://www.youtube.com/watch?v=sVSO9XiUMzI",
    description:
      "A short UNESCO/NHK visual guide to Chola temple architecture, accompanying the temple and bronze record.",
    context:
      "The publisher’s broad political description is not a reliable boundary map or dynasty-founder claim. Separate temple phases and the portable bronze’s museum date.",
    durationSeconds: 172,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "sVSO9XiUMzI",
    catalogueUrl: "https://whc.unesco.org/en/list/250/",
  },
  rani: {
    id: "classical-video-rani",
    title: "Rani-ki-Vav",
    publisher: "Gujarat Tourism",
    watchUrl: "https://www.youtube.com/watch?v=fm1e8SThsR0",
    description:
      "Gujarat Tourism’s short 360-degree view of Rani-ki-Vav, for exploring the stepwell and its sculptural setting.",
    context:
      "The publisher reports a 360-degree browser compatibility warning, so this card opens the source instead of loading an inline player. Use the chapter’s heritage record for dating; this is a modern visual tour.",
    durationSeconds: 136,
    verifiedAt: "2026-11-04",
    mode: "external",
  },
  hoysala: {
    id: "classical-video-hoysala",
    title: "UNESCO glory for Karnataka's Hoysala-era temples and what it means for the state",
    publisher: "ThePrint",
    watchUrl: "https://www.youtube.com/watch?v=LPJRc6ZqoCE",
    description:
      "An on-location report from Belur, Halebid and Somanathpura following their UNESCO recognition, useful for comparing Hoysala architectural detail.",
    context:
      "This is modern heritage reporting, not an excavation report. The temples span the twelfth and thirteenth centuries; the 2023 inscription is not their construction date.",
    durationSeconds: 432,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "LPJRc6ZqoCE",
  },
  delhi: {
    id: "classical-video-delhi",
    title: "History : Delhi Sultanate",
    publisher: "CEC",
    watchUrl: "https://www.youtube.com/watch?v=mwqx07WyRuM",
    description:
      "An extended CEC introduction to Delhi Sultanate history. Start here for the political setting of the later medieval records.",
    context:
      "The Sultanate continued beyond this chapter’s 1500 endpoint. Later material in the lecture belongs to later chronology; Delhi’s authority was never uniform across all India.",
    durationSeconds: 3537,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "mwqx07WyRuM",
  },
  bhakti: {
    id: "classical-video-bhakti",
    title: "The Bhakti Movement in India",
    publisher: "CH 02: CEC-UGC 02: History, Culture & Philosophy",
    watchUrl: "https://www.youtube.com/watch?v=V0Rk4Sp6hAs",
    description:
      "A university-channel overview of Bhakti traditions, paired with the separate Sufism lecture.",
    context:
      "A broad thematic lecture may include people after 1500. Bhakti and Sufi traditions are diverse, overlapping communities, not a single movement with one starting date.",
    durationSeconds: 1741,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "V0Rk4Sp6hAs",
  },
  sufi: {
    id: "classical-video-sufi",
    title: "Sufism during the Delhi sultanate (History of India, c. AD 650-1550)",
    publisher: "Vidya-mitra",
    watchUrl: "https://www.youtube.com/watch?v=2o6dIqqHoUg",
    description: "An undergraduate history lecture focused on Sufism during the Delhi Sultanate.",
    context:
      "Compare orders, teachers and local settings rather than treating every community as identical. The course title extends to 1550, beyond this chapter’s endpoint.",
    durationSeconds: 1531,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "2o6dIqqHoUg",
  },
  qutb: {
    id: "classical-video-qutb",
    title: "Qutb Minar and its Monuments, Delhi (UNESCO/NHK)",
    publisher: "UNESCO",
    watchUrl: "https://www.youtube.com/watch?v=6m_7fkjOKmU",
    description: "A short UNESCO/NHK film placing the Qutb tower within its surrounding monuments.",
    context:
      "The tower, gateway, earlier objects and later repairs have separate histories. The entire complex was not built at one time.",
    durationSeconds: 171,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "6m_7fkjOKmU",
    catalogueUrl: "https://whc.unesco.org/en/list/233/",
  },
  konark: {
    id: "classical-video-konark",
    title: "Sun Temple, Konârak (UNESCO/NHK)",
    publisher: "UNESCO",
    watchUrl: "https://www.youtube.com/watch?v=GqYAggbOh9I",
    description:
      "A short UNESCO/NHK introduction to Konark’s chariot imagery and surviving architecture.",
    context:
      "The footage shows surviving remains, not the complete original temple. Use the site sources for individual sculptural details rather than relying on abbreviated film descriptions.",
    durationSeconds: 185,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "GqYAggbOh9I",
    catalogueUrl: "https://whc.unesco.org/en/list/246/",
  },
  economy: {
    id: "classical-video-economy",
    title: "Delhi Sultanate Industry Trade and Commerce",
    publisher: "Vidya-mitra",
    watchUrl: "https://www.youtube.com/watch?v=TCbkw8Gl0Ag",
    description:
      "An economic history lecture on industry, trade and commerce during the Delhi Sultanate.",
    context:
      "A thematic guide rather than a dated catalogue of the specific coins shown here. Regional practices and source dates need separate comparison.",
    durationSeconds: 2328,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "TCbkw8Gl0Ag",
  },
  "sultanate-sources": {
    id: "classical-video-sultanate-sources",
    title: "Historiography and Sources of The Delhi Sultanate",
    publisher: "CH 02: CEC-UGC 02: History, Culture & Philosophy",
    watchUrl: "https://www.youtube.com/watch?v=LcL2c-NM0lA",
    description:
      "A lecture on the sources and historiography of the Delhi Sultanate, giving context for reading the traveller Ibn Battuta.",
    context:
      "This is broader source criticism, not a dedicated film tracing Ibn Battuta’s Indian itinerary. Keep his observations distinct from reported stories and later interpretation.",
    durationSeconds: 1680,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "LcL2c-NM0lA",
  },
  vijayanagara: {
    id: "classical-video-vijayanagara",
    title:
      "Socio-economic and political formations of the Vijayanagara empire (History of India, c. AD 650-1550",
    publisher: "Vidya-mitra",
    watchUrl: "https://www.youtube.com/watch?v=nALxBEGLKRA",
    description:
      "An undergraduate lecture on Vijayanagara’s political organisation and economy, accompanying the capital’s landscape.",
    context:
      "This lecture continues beyond 1500. Later rulers and events are context for the following era, not additions to this chapter’s date range.",
    durationSeconds: 1536,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "nALxBEGLKRA",
  },
  hampi: {
    id: "classical-video-hampi",
    title: "What Made Hampi One of the Greatest Cities of Its Time?",
    publisher: "HISTORY TV18",
    watchUrl: "https://www.youtube.com/watch?v=tMjVqBzSnGs",
    description:
      "A HISTORY TV18 site documentary complementing the longer Vijayanagara lecture with views of Hampi.",
    context:
      "Much of the programme concerns the sixteenth century, including Krishnadevaraya and later destruction. It is explicitly a later-context companion, not a reconstruction of Hampi before 1500.",
    durationSeconds: 656,
    verifiedAt: "2026-11-04",
    mode: "youtube",
    videoId: "tMjVqBzSnGs",
  },
} satisfies Readonly<Record<string, HistoricalVideo>>;

export const classicalPeriodVideos: Readonly<Record<string, readonly HistoricalVideo[]>> = {
  "classical-regional-roots": [classicalVideoLibrary["northwest"], classicalVideoLibrary["ajanta"]],
  "classical-learning": [
    classicalVideoLibrary["gupta"],
    classicalVideoLibrary["nalanda"],
    classicalVideoLibrary["aryabhata"],
    classicalVideoLibrary["tamil-bhakti"],
    classicalVideoLibrary["bronze"],
  ],
  "classical-regional-india": [
    classicalVideoLibrary["regional-sources"],
    classicalVideoLibrary["ellora"],
    classicalVideoLibrary["mahabalipuram"],
    classicalVideoLibrary["brahmagupta"],
    classicalVideoLibrary["pattadakal"],
    classicalVideoLibrary["khajuraho"],
    classicalVideoLibrary["chola"],
    classicalVideoLibrary["rani"],
    classicalVideoLibrary["hoysala"],
  ],
  "classical-medieval-india": [
    classicalVideoLibrary["delhi"],
    classicalVideoLibrary["bhakti"],
    classicalVideoLibrary["sufi"],
    classicalVideoLibrary["qutb"],
    classicalVideoLibrary["konark"],
    classicalVideoLibrary["economy"],
    classicalVideoLibrary["sultanate-sources"],
    classicalVideoLibrary["vijayanagara"],
    classicalVideoLibrary["hampi"],
  ],
};

export const classicalEventVideos: Readonly<Record<string, readonly HistoricalVideo[]>> = {
  "indo-greek-india": [classicalVideoLibrary["northwest"]],
  "ajanta-caves": [classicalVideoLibrary["ajanta"]],
  "kushan-connections": [classicalVideoLibrary["northwest"]],
  "gupta-world": [classicalVideoLibrary["gupta"]],
  "nalanda-learning": [classicalVideoLibrary["nalanda"]],
  "aryabhata-499": [classicalVideoLibrary["aryabhata"]],
  "tamil-devotion": [classicalVideoLibrary["tamil-bhakti"]],
  "bihar-buddha-bronze": [classicalVideoLibrary["bronze"]],
  "ellora-caves": [classicalVideoLibrary["ellora"]],
  "pallava-mahabalipuram": [classicalVideoLibrary["mahabalipuram"]],
  "brahmagupta-628": [classicalVideoLibrary["brahmagupta"]],
  "pattadakal-chalukya": [classicalVideoLibrary["pattadakal"]],
  "khajuraho-chandella": [classicalVideoLibrary["khajuraho"]],
  "chola-temples": [classicalVideoLibrary["chola"]],
  "rani-ki-vav": [classicalVideoLibrary["rani"]],
  "hoysala-temples": [classicalVideoLibrary["hoysala"]],
  "indian-devotional-dialogues": [classicalVideoLibrary["bhakti"], classicalVideoLibrary["sufi"]],
  "qutb-complex": [classicalVideoLibrary["qutb"]],
  "konark-sun-temple": [classicalVideoLibrary["konark"]],
  "delhi-sultanate": [classicalVideoLibrary["delhi"], classicalVideoLibrary["economy"]],
  "ibn-battuta-india": [classicalVideoLibrary["sultanate-sources"]],
  "vijayanagara-city": [classicalVideoLibrary["vijayanagara"], classicalVideoLibrary["hampi"]],
};
