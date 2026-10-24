import type { PrehistoryDiagram } from "@/types/prehistory-exhibit";
import { earlyModernSources } from "./sources";

export interface EarlyModernRecord {
  id: string;
  title: string;
  start: number;
  end?: number;
  exact?: boolean;
  civilization: string;
  region: string;
  people: string[];
  theme: string;
  diagram: PrehistoryDiagram;
  description: string;
  background: string;
  consequence: string;
  evidence: string;
  significance: string;
  limits: string;
  scope?: string;
  sources: (keyof typeof earlyModernSources)[];
  locator: string;
  related: string[];
  image: string;
  map?: string;
  research?: string;
}

/** CE years; topic windows, reigns and individual events are distinguished in every record. */
export const earlyModernRecords: readonly EarlyModernRecord[] = [
  {
    id: "calicut-1498",
    title: "Calicut: a new arrival in an established trading world",
    start: 1498,
    exact: true,
    civilization: "Malabar trading communities",
    region: "Kozhikode (Calicut), Kerala",
    people: ["Vasco da Gama"],
    theme: "Trade",
    diagram: "network",
    description:
      "Vasco da Gama reached Calicut by sea in 1498. His arrival brought Portuguese merchants into an Indian Ocean trading system that already connected Indian producers and ports with distant markets.",
    background:
      "Indian cloth was already traded across Asia and beyond; European arrival did not create these networks.",
    consequence: "Later European companies competed for access to Indian goods and customers.",
    evidence:
      "Textile collections document products made for different markets, not a single export style.",
    significance: "Begin with Indian ports, merchants and makers as active participants.",
    limits: "1498 dates the arrival, not the beginning of Indian overseas trade or British rule.",
    sources: ["ports"],
    locator: "Trade and international markets",
    related: ["goa-1510", "textile-workshops"],
    image:
      "Add a licensed historical map of Calicut or a documented port artefact; label later maps with their production date.",
    map: "Map Malabar ports and established Indian Ocean connections; mark routes as schematic rather than exact voyages.",
  },
  {
    id: "deccan-sultanate-cultures",
    title: "Deccan courts: regional power and artistic exchange",
    start: 1500,
    end: 1687,
    civilization: "Deccan Sultanates",
    region: "Ahmadnagar, Bijapur, Bidar and Golconda",
    people: [],
    theme: "Culture",
    diagram: "town",
    description:
      "The Deccan sultanates supported distinctive traditions of painting, metalwork and textiles while competing with neighbouring states and, later, Mughal expansion.",
    background:
      "Indian and Persian artists, African elites and commercial contacts contributed to these courtly societies. Their histories cannot be reduced to a southern extension of the Mughal court.",
    consequence:
      "Mughal conquest altered political patronage, but regional artistic traditions continued to circulate.",
    evidence:
      "Compare works attributed to particular courts, materials and workshops rather than treating all Deccani objects as interchangeable.",
    significance: "Regional courts were important centres of invention and exchange.",
    limits:
      "1500–1687 is a chapter window, not the shared lifespan of every sultanate. Political boundaries and patronage changed repeatedly.",
    sources: ["deccan"],
    locator: "Exhibition historical overview and media traditions",
    related: ["vijayanagara-krishnadevaraya", "chand-bibi-defence", "deccan-annexations"],
    image:
      "Add a securely attributed Deccani metalwork object or architectural photograph with court, date, accession and licence.",
    map: "Show separately dated Deccan states; do not turn their changing alliances into fixed religious blocs.",
  },
  {
    id: "vijayanagara-krishnadevaraya",
    title: "Krishnadevaraya: Vijayanagara’s sixteenth-century expansion",
    start: 1509,
    end: 1529,
    exact: true,
    civilization: "Vijayanagara",
    region: "Southern India; Krishna–Tungabhadra region",
    people: ["Krishnadevaraya"],
    theme: "States",
    diagram: "town",
    description:
      "Krishnadevaraya’s reign combined military expansion with temple patronage and a flourishing capital.",
    background:
      "Competition with the Deccan sultanates and Odisha concerned fertile land and trade as well as royal authority.",
    consequence: "His Telugu Amuktamalyada also reflects attention to merchants and governance.",
    evidence:
      "Inscriptions, buildings and travellers’ descriptions offer different perspectives on the reign.",
    significance: "Literature, commerce and warfare belong in the same political history.",
    limits:
      "1509–1529 is the reign, not the empire’s full duration. Courtly prosperity did not mean equal conditions for every inhabitant.",
    sources: ["vijayanagara"],
    locator: "Sections 2.1–2.2; Krishnadeva Raya and trade",
    related: ["vijayanagara-city", "talikota-1565"],
    image:
      "Add a dated royal inscription or a monument securely assigned to this reign; distinguish additions from original construction.",
  },
  {
    id: "goa-1510",
    title: "Goa: Portuguese conquest and a coastal colonial base",
    start: 1510,
    exact: true,
    civilization: "Goa and Portuguese Estado da Índia",
    region: "Goa, western Indian coast",
    people: ["Afonso de Albuquerque"],
    theme: "Trade",
    diagram: "network",
    description:
      "Portuguese forces under Afonso de Albuquerque conquered Goa in 1510. It became a headquarters of the Estado da Índia and an important base in regional maritime commerce.",
    background:
      "Portuguese forts and trading establishments developed along Indian coasts in the early sixteenth century.",
    consequence:
      "Military control of a port altered commercial bargaining and local political relationships; it did not give Portugal control over all Indian trade.",
    evidence:
      "Commercial accounts and dated maps can be compared with the surviving coastal built environment.",
    significance:
      "Colonial footholds appeared long before Company territorial expansion in Bengal.",
    limits:
      "The date marks conquest, not the founding of Goa or the beginning of its maritime activity.",
    sources: ["goaTrade"],
    locator: "India chronology: 1502–35 and 1510",
    related: ["calicut-1498", "goa-printing"],
    image:
      "Add a licensed map or view of Old Goa, with its actual date and a caption identifying colonial features.",
    research:
      "Add separately sourced accounts of Goan communities, conversion, coercion and resistance; do not infer social experience from architecture alone.",
  },
  {
    id: "nanak-kartarpur",
    title: "Guru Nanak: community, work and devotion at Kartarpur",
    start: 1520,
    end: 1539,
    civilization: "Early Sikh community",
    region: "Kartarpur, Punjab (now Pakistan)",
    people: ["Guru Nanak", "Guru Angad"],
    theme: "Religion",
    diagram: "oral",
    description:
      "In the early 1520s Guru Nanak settled at Kartarpur, where communal worship, daily work and sharing food formed part of an emerging Sikh community.",
    background:
      "His teaching and journeys preceded this settlement. The community brought religious practice into household and working life.",
    consequence:
      "Before his death in 1539, Nanak appointed Lehna, known as Guru Angad, as his successor.",
    evidence:
      "The SGPC preserves the Sikh community’s account of Kartarpur and succession. Later biographical traditions should be identified as such.",
    significance:
      "Sikh history includes institutions and practices as well as individual teachers.",
    limits:
      "1520 is a rounded entry point: accounts place settlement around 1521–1522. This is not a precise founding year for Sikhism.",
    sources: ["nanak"],
    locator: "Kartarpur settlement and succession",
    related: ["indian-devotional-dialogues", "adi-granth-1604", "khalsa-1699"],
    image:
      "Add a manuscript or site photograph with provenance; label modern portraits and later Janamsakhi paintings explicitly.",
  },
  {
    id: "panipat-1526",
    title: "First Panipat: the beginning of Mughal rule",
    start: 1526,
    exact: true,
    civilization: "Early Mughal state",
    region: "Panipat, Haryana; Delhi–Agra region",
    people: ["Babur", "Ibrahim Lodi"],
    theme: "States",
    diagram: "network",
    description:
      "Babur defeated Ibrahim Lodi at Panipat on 21 April 1526, opening the way to Mughal control of Delhi and Agra.",
    background: "The battle followed Babur’s campaigns into northern India.",
    consequence: "A new dynasty still faced the task of consolidation.",
    evidence: "The district’s historical overview identifies the date and opposing rulers.",
    significance: "A battlefield victory began a contested political transformation.",
    limits: "1526 was not immediate Mughal control of the whole subcontinent.",
    sources: ["panipat"],
    locator: "First Battle of Panipat",
    related: ["delhi-sultanate", "humayun-restoration"],
    image:
      "Add a sourced battle plan; label later paintings as retrospective rather than eyewitness images.",
  },
  {
    id: "humayun-restoration",
    title: "Humayun: defeat, exile and restoration",
    start: 1530,
    end: 1555,
    civilization: "Mughal and Sur states",
    region: "Northern India; Kabul and Persian connections",
    people: ["Humayun", "Sher Shah Suri"],
    theme: "States",
    diagram: "network",
    description:
      "Humayun inherited Babur’s position in 1530 but lost his north Indian dominions to Afghan opposition in 1540. He recovered Delhi and Agra in 1555.",
    background:
      "Rivalries within the ruling family and challenges from Afghan leaders made the succession insecure.",
    consequence:
      "Sur rule interrupted the Mughal succession. Its administrative experience remained relevant when Mughal authority was restored.",
    evidence:
      "Compare the sequence of conquest, displacement and recovery; maps of a single year cannot represent the entire period.",
    significance: "Mughal power developed through reversals as well as expansion.",
    limits:
      "This entry ends with restoration in 1555, not Humayun’s death in 1556. Exile involved several places and changing allies.",
    sources: ["earlyMughals"],
    locator: "Humayun, Afghan opposition and restoration; summary",
    related: ["panipat-1526", "sur-currency", "akbar-consolidation"],
    image:
      "Add a Humayun-era document or manuscript with provenance; avoid portraying later illustrated histories as contemporary photographs.",
  },
  {
    id: "sur-currency",
    title: "Sher Shah: the rupee and a monetary legacy",
    start: 1540,
    end: 1545,
    exact: true,
    civilization: "Sur dynasty",
    region: "Northern India",
    people: ["Sher Shah Suri"],
    theme: "Economy",
    diagram: "coin",
    description:
      "During Sher Shah’s rule, a monetary system based on gold, silver and copper denominations took shape. The silver rupiya became an important predecessor of later rupee coinage.",
    background:
      "The Reserve Bank’s museum attributes much of the Mughal tri-metallic system’s foundation to the Sur period.",
    consequence:
      "Mughal rulers developed this monetary inheritance rather than creating every component from the beginning.",
    evidence:
      "Legends, metal, weight and mint attribution allow individual coins to be checked against catalogues.",
    significance: "A short-lived dynasty could leave a durable institutional legacy.",
    limits:
      "1540–1545 dates Sher Shah’s reign. A historical silver rupee should not be equated with a modern rupee’s purchasing power.",
    sources: ["coins"],
    locator: "Origins of Mughal tri-metallic coinage",
    related: ["humayun-restoration", "mughal-administration"],
    image:
      "Add both faces of an authenticated Sher Shah rupiya, with mint, date, weight, accession and image licence.",
  },
  {
    id: "akbar-consolidation",
    title: "Akbar: expansion, alliances and imperial consolidation",
    start: 1556,
    end: 1605,
    exact: true,
    civilization: "Mughal",
    region: "Northern and central India; Gujarat and Bengal",
    people: ["Akbar"],
    theme: "States",
    diagram: "network",
    description:
      "Akbar’s reign transformed a precarious inheritance into a much larger, more durable empire.",
    background:
      "Campaigns and alliances extended authority across northern and central India. Gujarat gave access to wealthy commercial centres and Arabian Sea trade.",
    consequence:
      "Administration and artistic patronage helped connect the expanding court to diverse regional elites.",
    evidence:
      "Court art and chronicles express imperial ambition and require comparison with regional evidence.",
    significance: "Consolidation required institutions and negotiation as well as victories.",
    limits:
      "1556–1605 dates the reign. Expansion occurred unevenly and did not erase regional autonomy or resistance.",
    sources: ["akbar"],
    locator: "Akbar’s territorial expansion and patronage",
    related: ["humayun-restoration", "mughal-administration", "akbar-religious-dialogue"],
    image:
      "Add an authenticated Akbar portrait or dated farman; identify artist, manuscript and actual production date.",
    map: "Use dated stages of expansion, distinguishing campaigns, annexation and allied rulers.",
  },
  {
    id: "goa-printing",
    title: "Goa, 1556: a printing press enters a manuscript world",
    start: 1556,
    exact: true,
    civilization: "Goan print and manuscript communities",
    region: "Old Goa",
    people: ["João de Bustamante"],
    theme: "Technology",
    diagram: "oral",
    description:
      "A European printing press and the Jesuit printer João de Bustamante reached Goa in 1556. Printing became part of missionary communication in India.",
    background:
      "The equipment had been intended for another destination; its use in Goa emerged from the circumstances of the journey.",
    consequence:
      "Printed texts developed alongside existing manuscript, oral and scribal practices, rather than immediately replacing them.",
    evidence:
      "The history of the press must be distinguished from the dates, languages and surviving copies of individual publications.",
    significance: "Technology travelled through institutions, people and local language work.",
    limits:
      "This is a documented European press in India, not the invention of printing in Asia or the beginning of Indian literacy.",
    sources: ["printing"],
    locator: "Bustamante’s arrival and establishment of the Goa press",
    related: ["goa-1510", "vernacular-devotion"],
    image:
      "Add a verified early Goan printed page with library shelfmark, language, edition date and reproduction permission.",
    research:
      "Add separately verified early Tamil and Konkani publications; distinguish printing location, script and language when making first-book claims.",
  },
  {
    id: "talikota-1565",
    title: "Talikota: defeat and the relocation of Vijayanagara power",
    start: 1565,
    exact: true,
    civilization: "Vijayanagara and Deccan Sultanates",
    region: "Northern Karnataka and the Vijayanagara capital",
    people: ["Rama Raya"],
    theme: "States",
    diagram: "network",
    description:
      "At Rakshasi-Tangadi, also called Talikota, an alliance of Deccan sultanates defeated Rama Raya’s army in 1565. The capital was subsequently sacked.",
    background: "Earlier relations included alliances and intervention in succession disputes.",
    consequence:
      "Vijayanagara authority continued under the Aravidu rulers from other centres, including Penukonda and Chandragiri.",
    evidence: "NCERT distinguishes the fate of the capital from the continuation of the dynasty.",
    significance: "A capital’s destruction need not end a political tradition immediately.",
    limits:
      "Do not portray the conflict as an inevitable, permanent division between religious communities.",
    sources: ["vijayanagara"],
    locator: "Section 2.2: Rakshasi-Tangadi and the Aravidu centres",
    related: ["vijayanagara-krishnadevaraya", "deccan-sultanate-cultures"],
    image:
      "Add a sourced map separating the battle location, Hampi and later capitals; do not use a later ruin as an image of the battle itself.",
  },
  {
    id: "humayun-garden-tomb",
    title: "Humayun’s tomb: a garden and a dynastic memorial",
    start: 1570,
    civilization: "Mughal",
    region: "Nizamuddin, Delhi",
    people: ["Humayun"],
    theme: "Architecture",
    diagram: "water",
    description:
      "Completed around 1570, Humayun’s garden-tomb became a major architectural precedent for later Mughal mausoleums.",
    background:
      "The building placed a monumental tomb within a carefully organised garden landscape. Its significance lies in the relationship between architecture, movement, water and royal remembrance.",
    consequence:
      "Later Mughal projects developed related garden-tomb ideas, culminating in major complexes such as the Taj Mahal.",
    evidence:
      "Read the monument and garden plan together; isolated photographs of the dome leave out much of the design.",
    significance:
      "Dynastic memory was expressed through designed landscapes as well as inscriptions.",
    limits:
      "The date refers to the monument’s completion, not Humayun’s reign. Restored garden features must be distinguished from surviving original fabric.",
    sources: ["tomb"],
    locator: "Description and Outstanding Universal Value",
    related: ["humayun-restoration", "taj-mahal"],
    image:
      "Add a licensed site photograph or measured garden plan with conservation context and north arrow.",
  },
  {
    id: "hamzanama-workshop",
    title: "The Hamzanama: collaboration in Akbar’s painting workshop",
    start: 1570,
    civilization: "Mughal manuscript workshops",
    region: "Mughal India",
    people: ["Kesav Das", "Mah Muhammad", "Akbar"],
    theme: "Art",
    diagram: "oral",
    description:
      "A large Hamzanama folio dated around 1570 illustrates the scale and collaborative character of early Mughal book painting.",
    background:
      "The Met attributes this page to Kesav Das and Mah Muhammad. Ink, opaque colour and gold were applied to cloth mounted on paper.",
    consequence:
      "Such projects brought artists and narrative traditions together under court patronage.",
    evidence:
      "The pictured episode belongs to the literary adventures of Hamza. Its elaborate buildings and figures are part of storytelling, not a documentary view of Akbar’s capital.",
    significance: "Named makers and material techniques help recover the work behind courtly art.",
    limits:
      "The date and artist attributions are approximate. This is one surviving folio, not the complete manuscript or an eyewitness military scene.",
    sources: ["hamza"],
    locator: "Object 23.264.1; date, attributions and materials",
    related: ["akbar-consolidation", "mansur-nilgai"],
    image: "A credited photograph of the catalogued Hamzanama folio.",
  },
  {
    id: "fatehpur-sikri",
    title: "Fatehpur Sikri: architecture for an imperial capital",
    start: 1571,
    end: 1585,
    civilization: "Mughal",
    region: "Fatehpur Sikri, Uttar Pradesh",
    people: ["Akbar"],
    theme: "Cities",
    diagram: "town",
    description:
      "Akbar developed Fatehpur Sikri as an imperial capital in the 1570s. Palaces, courtyards, religious buildings and gateways formed an extensive planned ensemble.",
    background:
      "UNESCO dates a principal construction phase to 1571–1573. Buildings occupied different levels of a ridge beside an artificial lake.",
    consequence: "The court’s later move did not erase the city’s architectural importance.",
    evidence:
      "The Jama Masjid, palace spaces and red-sandstone structures should be examined by function and building phase.",
    significance:
      "Architecture organised courtly authority, worship and circulation through space.",
    limits:
      "1571–1585 is the selected capital phase, not the date of every structure. A single environmental explanation cannot account for every decision to relocate.",
    sources: ["sikri"],
    locator: "Brief synthesis and construction chronology",
    related: ["akbar-consolidation", "akbar-religious-dialogue", "shahjahanabad"],
    image:
      "Add a licensed panoramic photograph and a sourced site plan distinguishing public, residential and religious spaces.",
  },
  {
    id: "akbar-religious-dialogue",
    title: "Akbar’s court: debate and sulh-i kul",
    start: 1570,
    end: 1605,
    civilization: "Mughal",
    region: "Fatehpur Sikri and the Mughal court",
    people: ["Akbar", "Abu’l Fazl"],
    theme: "Philosophy",
    diagram: "oral",
    description:
      "Debates among religious scholars helped shape Akbar’s approach to rule over diverse communities.",
    background: "The principle of sulh-i kul emphasised peace across religious divisions.",
    consequence:
      "Abu’l Fazl connected such ideas with an imperial ethic of justice and governance.",
    evidence:
      "Court accounts articulate a political ideal, not proof that all subjects experienced equal treatment.",
    significance: "Religious debate could inform the language of statecraft.",
    limits:
      "This topic window is not a single decree or the founding date of one uniform new religion.",
    sources: ["administration"],
    locator: "Akbar’s policies and sulh-i kul",
    related: ["akbar-consolidation", "vernacular-devotion"],
    image:
      "Add an authenticated manuscript depiction of a court discussion with manuscript date and interpretive caption.",
  },
  {
    id: "mughal-administration",
    title: "Mansabs, jagirs and the financing of empire",
    start: 1580,
    end: 1700,
    civilization: "Mughal",
    region: "Mughal provinces, with regional variation",
    people: ["Akbar", "Todar Mal"],
    theme: "Economy",
    diagram: "weights",
    description:
      "Mansabdars held ranked imperial service positions; jagirs assigned revenue income rather than simple private ownership of the land.",
    background: "Military obligations and salaries linked officials to the court.",
    consequence:
      "Assessment and collection depended on cultivators, local intermediaries and regional conditions.",
    evidence:
      "Administrative categories describe claims and obligations; they do not prove uniform collection everywhere.",
    significance:
      "Revenue supported the military and connected rural production to imperial power.",
    limits:
      "The range illustrates a developing system, not one unchanged regulation across all provinces.",
    sources: ["administration"],
    locator: "Mansabdars and Jagirdars; zabt and revenue assessment",
    related: ["sur-currency", "agrarian-production", "regional-successor-states"],
    image:
      "Add a readable revenue record or mansab list with archive reference, translation and a clear explanation of its units.",
    research:
      "Add a sourced worked example comparing assessed revenue with realised collection; never invent tax totals to fill a chart.",
  },
  {
    id: "agrarian-production",
    title: "Fields, markets and the claims of the state",
    start: 1590,
    end: 1700,
    civilization: "Rural communities",
    region: "Northern India, Gujarat, Rajasthan and the Deccan",
    people: ["Abu’l Fazl"],
    theme: "Economy",
    diagram: "rice",
    description:
      "Agriculture linked households, zamindars, markets and state revenue demands. Villages produced food and commercial crops.",
    background:
      "The Ain-i Akbari recorded cultivation and fiscal arrangements from the court’s viewpoint.",
    consequence: "Revenue claims could generate negotiation and conflict as well as cooperation.",
    evidence: "Regional documents help test the court’s account and recover local disputes.",
    significance: "Rural labour sustained cities, armies and commerce.",
    limits:
      "The window represents late-sixteenth- and seventeenth-century evidence, not the beginning of Indian agriculture. Conditions varied by crop and region.",
    sources: ["agriculture"],
    locator: "Sections 1 and 8: agricultural production and the Ain",
    related: ["mughal-administration", "women-rural-work", "diwani-1765"],
    image:
      "Add a dated agricultural scene or document; label court paintings as representations rather than statistical surveys.",
    research:
      "Add local crop, irrigation and price series with dates, units and archival references; leave unavailable figures unfilled.",
  },
  {
    id: "women-rural-work",
    title: "Women’s labour and claims in rural society",
    start: 1590,
    end: 1700,
    civilization: "Peasant and artisan households",
    region: "Regional evidence from western and northern India",
    people: [],
    theme: "Society",
    diagram: "village",
    description:
      "Women worked in cultivation, spinning, pottery preparation and other production. Household economies depended on this labour.",
    background:
      "Work outside the home coexisted with unequal authority and restrictive social norms.",
    consequence:
      "Petitions and property transactions reveal women making claims, although records often identify them through male relatives.",
    evidence: "NCERT compares labour accounts with regional legal and land records.",
    significance: "Economic participation must not be confused with social equality.",
    limits:
      "These examples cannot establish one uniform experience for women of every caste, class, religion or region.",
    sources: ["agriculture"],
    locator: "Section 3: Women in Agrarian Society",
    related: ["agrarian-production", "nur-jahan", "textile-workshops"],
    image:
      "Add a documented spinning or agricultural image, or a translated petition with archive identifier and reproduction rights.",
  },
  {
    id: "chand-bibi-defence",
    title: "Chand Bibi and the defence of Ahmadnagar",
    start: 1595,
    exact: true,
    civilization: "Ahmadnagar Sultanate",
    region: "Ahmadnagar, Deccan",
    people: ["Chand Bibi", "Prince Murad"],
    theme: "States",
    diagram: "town",
    description: "Chand Bibi led resistance when Mughal forces besieged Ahmadnagar in 1595.",
    background:
      "The campaign formed part of Mughal attempts to extend authority into the Deccan, where succession disputes and alliances shaped the conflict.",
    consequence:
      "The struggle demonstrates that expansion required prolonged military and political effort, rather than automatic submission by regional courts.",
    evidence:
      "Later paintings celebrate Chand Bibi, but they are evidence of her remembered reputation rather than eyewitness records of the siege.",
    significance:
      "Women could exercise military and political authority in early modern Indian states.",
    limits:
      "This entry dates the siege episode only. Exact troop numbers and dramatic anecdotes require separate verification.",
    sources: ["conquests"],
    locator: "Deccan campaigns: Ahmadnagar in 1595",
    related: ["deccan-sultanate-cultures", "chand-bibi-memory", "malik-ambar"],
    image:
      "Add a sourced Ahmadnagar fort plan; if using a later portrait, display its actual date prominently.",
  },
  {
    id: "vernacular-devotion",
    title: "Devotional poetry in regional languages",
    start: 1500,
    end: 1700,
    civilization: "Regional devotional communities",
    region: "North India, Maharashtra and Assam",
    people: ["Mirabai", "Tulsidas", "Tukaram", "Shankaradeva"],
    theme: "Literature",
    diagram: "oral",
    description:
      "Regional devotional traditions used song, poetry and performance to express relationships with the divine and address social life.",
    background:
      "Mirabai’s Krishna devotion, Tulsidas’s Awadhi writing and Marathi saint poetry belonged to distinct settings. Shankaradeva’s Assamese tradition developed devotional institutions and performance.",
    consequence:
      "Songs travelled through communities and later compilations, sometimes questioning inherited status while also interacting with established institutions.",
    evidence:
      "A poem’s attributed composer, approximate composition period and the date of a surviving manuscript are different kinds of evidence.",
    significance: "Regional languages broadened the forms and audiences of religious expression.",
    limits:
      "1500–1700 groups overlapping traditions, not one unified movement. Later life stories should not be treated as precise contemporary biographies.",
    sources: ["devotion"],
    locator: "Saints of Maharashtra; new religious developments; regional devotional traditions",
    related: ["tamil-devotion", "nanak-kartarpur", "adi-granth-1604"],
    image:
      "Add dated manuscript folios or performance documentation with attribution, language and recording permissions.",
    research:
      "Add independently sourced entries for individual poets and regional institutions, distinguishing textual history from devotional tradition.",
  },
  {
    id: "textile-workshops",
    title: "Textile makers: cotton, colour and distant markets",
    start: 1600,
    end: 1750,
    civilization: "Indian weaving and dyeing communities",
    region: "Gujarat, Coromandel, Bengal and other textile regions",
    people: [],
    theme: "Technology",
    diagram: "beads",
    description:
      "Indian textiles supplied regional and overseas markets. Makers combined spinning, weaving, dyeing, printing and painting to produce fabrics for different uses and customers.",
    background:
      "Cotton required preparation to receive lasting colour. Mordants fixed dyes, while resist materials prevented colour from reaching selected areas.",
    consequence:
      "Kalamkari and other specialised techniques helped producers adapt patterns to demand. Cloth circulated both as a desired commodity and within wider exchanges for other goods.",
    evidence:
      "Fibre, weave and dye analysis can reveal techniques that a painted pattern alone cannot explain.",
    significance:
      "Technical skill and coordinated labour were central to India’s commercial importance.",
    limits:
      "This is a selected early modern window, not the invention date of these techniques. Museum luxury textiles do not represent all everyday clothing or labour conditions.",
    sources: ["textiles"],
    locator: "Trade; dyes; printing, resist dyeing and painting",
    related: ["calicut-1498", "women-rural-work", "kalamkari-cover"],
    image:
      "Add textile close-ups showing weave, mordant painting and resist dyeing, with catalogue identifiers and scale.",
    research:
      "Add sourced workshop wages and production processes by region; avoid presenting one modern craft demonstration as universal historical practice.",
  },
  {
    id: "malik-ambar",
    title: "Malik Ambar: power and resistance in the Deccan",
    start: 1600,
    end: 1620,
    civilization: "Ahmadnagar Sultanate",
    region: "Ahmadnagar and the Deccan",
    people: ["Malik Ambar"],
    theme: "States",
    diagram: "network",
    description:
      "Malik Ambar, an African-born man who had experienced enslavement, rose to become a powerful Deccani military leader and statesman.",
    background:
      "Indian Ocean connections brought people as well as goods to Indian courts, including through coercive systems of enslavement.",
    consequence:
      "After the Mughals took Ahmadnagar’s capital in 1600, Ambar rebuilt regional resistance and challenged imperial power by 1620.",
    evidence:
      "The Philadelphia Museum’s portrait is only tentatively identified as Ambar. Its uncertainty matters as much as the biographical association.",
    significance:
      "Early modern Indian political society included influential people with diverse origins.",
    limits:
      "1600–1620 selects a political episode, not his lifespan. An individual’s rise does not make enslavement benign or typical advancement easy.",
    sources: ["ambar"],
    locator: "Portrait of an African Official: historical context and identification",
    related: ["chand-bibi-defence", "deccan-annexations"],
    image:
      "Add a rights-cleared portrait with the museum’s tentative identification retained; do not relabel an uncertain sitter as certain.",
  },
  {
    id: "adi-granth-1604",
    title: "The Adi Granth: compilation and community",
    start: 1604,
    exact: true,
    civilization: "Sikh community",
    region: "Amritsar, Punjab",
    people: ["Guru Arjan"],
    theme: "Religion",
    diagram: "oral",
    description:
      "Guru Arjan compiled the Adi Granth and installed it at Harmandir Sahib in Amritsar in 1604.",
    background:
      "The collection brought together the hymns of Sikh Gurus and other devotional voices in a shared scriptural setting.",
    consequence:
      "Compilation and communal recitation strengthened the textual and institutional life of the Sikh community.",
    evidence:
      "The SGPC’s account explains the scripture’s history and religious significance; manuscript studies can further distinguish particular copies and textual stages.",
    significance:
      "Texts become historically important through compilation, preservation and collective use.",
    limits:
      "1604 dates the Adi Granth’s installation. It must not be conflated with all later stages in the history of the Guru Granth Sahib.",
    sources: ["granth"],
    locator: "Compilation by Guru Arjan and installation in 1604",
    related: ["nanak-kartarpur", "khalsa-1699"],
    image:
      "Add a permission-cleared manuscript image with shelfmark and copy date; follow the holding institution’s display guidance.",
  },
  {
    id: "jahangir-court",
    title: "Jahangir: connoisseurship and the imperial image",
    start: 1605,
    end: 1627,
    exact: true,
    civilization: "Mughal",
    region: "Mughal court, northern India",
    people: ["Jahangir", "Mansur"],
    theme: "Art",
    diagram: "oral",
    description:
      "Jahangir’s court placed strong emphasis on portraiture, observation and the distinctive work of individual painters.",
    background:
      "Imperial collecting and artistic judgement developed from earlier Mughal workshop traditions.",
    consequence: "Albums combined images and calligraphy, sometimes produced in different periods.",
    evidence:
      "Artist attributions and album construction help distinguish a painting’s date from its later setting.",
    significance: "Courtly art records acts of selection as well as depicted subjects.",
    limits: "1605–1627 dates the reign; not every folio in a later album belongs to those years.",
    sources: ["laterMughals"],
    locator: "Jahangir and the rise of individual artists",
    related: ["hamzanama-workshop", "mansur-nilgai", "nur-jahan"],
    image:
      "Add a catalogued Jahangir-period portrait with original and later album dates clearly separated.",
  },
  {
    id: "nur-jahan",
    title: "Nur Jahan: political influence and imperial patronage",
    start: 1611,
    end: 1627,
    exact: true,
    civilization: "Mughal",
    region: "Mughal court, Agra and Lahore",
    people: ["Nur Jahan", "Jahangir"],
    theme: "Society",
    diagram: "seal",
    description:
      "After her marriage to Jahangir in 1611, Nur Jahan became an influential participant in Mughal court politics and patronage.",
    background:
      "Family connections, access to the emperor and the organisation of the royal household helped create paths to authority.",
    consequence:
      "Jahangir’s death in 1627 altered the political balance and the position of the imperial household.",
    evidence:
      "Her history should be examined through documents, material patronage and scholarship, rather than reduced to stories of romance or intrigue.",
    significance:
      "Women’s political agency formed part of imperial government, not merely its private background.",
    limits:
      "1611–1627 marks her position during Jahangir’s reign, not her whole life. Elite opportunity cannot stand for the experience of all women.",
    sources: ["nur"],
    locator: "Biography: marriage, power and succession",
    related: ["jahangir-court", "women-rural-work", "shah-jahan-court"],
    image:
      "Add a verified Nur Jahan coin, seal or document with accession and translation; later idealised portraits need an explicit date warning.",
  },
  {
    id: "mansur-nilgai",
    title: "Mansur’s nilgai: close observation in court painting",
    start: 1620,
    civilization: "Mughal painting workshops",
    region: "Mughal India",
    people: ["Mansur", "Jahangir"],
    theme: "Art",
    diagram: "oral",
    description:
      "Mansur’s study of a nilgai, dated around 1620, shows the attention to animals associated with Jahangir-period painting.",
    background:
      "The painting was incorporated into the Shah Jahan Album. The associated calligraphy belongs to an earlier period.",
    consequence:
      "An album leaf can preserve several histories of making, collecting and arrangement in one object.",
    evidence:
      "The museum dates the painted verso to about 1620 and the calligraphic recto to about 1540; these dates should not be merged.",
    significance:
      "Careful object reading connects natural observation with workshop and collecting practices.",
    limits:
      "This is a courtly animal study, not a modern zoological dataset or a photograph. The date is approximate.",
    sources: ["mansur"],
    locator: "Object catalogue: painter, verso/recto dates and materials",
    related: ["jahangir-court", "shah-jahan-court"],
    image:
      "The catalogued painting by Mansur, with the album’s different dates retained in its caption.",
  },
  {
    id: "shah-jahan-court",
    title: "Shah Jahan: ceremony, portraiture and luxury arts",
    start: 1628,
    end: 1658,
    exact: true,
    civilization: "Mughal",
    region: "Agra and Delhi",
    people: ["Shah Jahan", "Payag"],
    theme: "Art",
    diagram: "beads",
    description:
      "Shah Jahan’s court developed highly formal royal imagery alongside refined architecture and luxury objects.",
    background:
      "Workshops used materials including precious stone, metal, textiles and painted paper.",
    consequence:
      "Imperial images projected hierarchy and authority rather than offering neutral scenes of everyday life.",
    evidence:
      "Payag’s mounted portrait is dated around 1630; its associated calligraphy is earlier.",
    significance: "Materials and ceremony helped make sovereignty visible.",
    limits:
      "The reign dates are not the dates of every pictured object. Album components need separate dating.",
    sources: ["laterMughals", "shahPortrait"],
    locator: "Shah Jahan’s patronage; Payag portrait catalogue",
    related: ["taj-mahal", "shahjahanabad", "mughal-succession-war"],
    image: "The catalogued Payag portrait of Shah Jahan on horseback, with its component dates.",
  },
  {
    id: "taj-mahal",
    title: "The Taj Mahal: memorial, garden and skilled labour",
    start: 1632,
    end: 1653,
    civilization: "Mughal",
    region: "Agra, Uttar Pradesh",
    people: ["Shah Jahan", "Mumtaz Mahal"],
    theme: "Architecture",
    diagram: "water",
    description:
      "Shah Jahan commissioned the Taj Mahal in memory of Mumtaz Mahal. Its mausoleum, garden, subsidiary buildings and riverfront setting form one planned complex.",
    background:
      "UNESCO’s detailed account dates the main construction from 1632 to 1648, with associated works completed by 1653.",
    consequence:
      "The complex developed earlier Mughal garden-tomb traditions through a carefully balanced architectural ensemble.",
    evidence:
      "Marble carving, inlay, calligraphy and landscape planning show distinct kinds of skilled work. The garden and river are essential to understanding the design.",
    significance: "Monumental patronage depended on coordinated labour and technical expertise.",
    limits:
      "The displayed range covers successive building phases. Sources also use 1631 for the commission context; this is not a claim that every structure took exactly the same years.",
    sources: ["taj"],
    locator: "Brief synthesis: 1632–1648 and subsidiary works through 1653",
    related: ["humayun-garden-tomb", "shah-jahan-court"],
    image:
      "Add a licensed photograph and dated plan, identifying the mausoleum, mosque, guest house, gateway, garden and river.",
    research:
      "Add archival evidence for named craft specialists, materials and labour arrangements; do not insert unsupported popular construction anecdotes.",
  },
  {
    id: "shahjahanabad",
    title: "Shahjahanabad: a new capital and the Red Fort",
    start: 1638,
    end: 1648,
    civilization: "Mughal",
    region: "Shahjahanabad, Delhi",
    people: ["Shah Jahan"],
    theme: "Cities",
    diagram: "town",
    description:
      "The Red Fort served as the palace-fort of Shah Jahan’s new capital, Shahjahanabad, developed in the seventeenth century.",
    background:
      "Its pavilions, gardens and water channel organised the royal residential landscape within a fortified enclosure.",
    consequence: "The complex influenced later architectural and garden design in northern India.",
    evidence:
      "The adjoining Salimgarh is older, dating to 1546. Buildings within the combined heritage property therefore require separate chronologies.",
    significance:
      "Urban history connects a court’s ceremonial centre to the design of its wider capital.",
    limits:
      "1638–1648 is the principal foundation and construction phase. Later damage, rebuilding and restoration mean that present appearances are not an untouched seventeenth-century snapshot.",
    sources: ["redFort"],
    locator: "Description, planning and historical context",
    related: ["fatehpur-sikri", "shah-jahan-court", "nadir-delhi"],
    image:
      "Add a licensed historic city plan or site photograph with the date and building phase clearly stated.",
    research:
      "Add separately sourced accounts of Jahanara’s patronage, bazaars, neighbourhoods, water supply and urban workers.",
  },
  {
    id: "kalamkari-cover",
    title: "A seventeenth-century kalamkari: technology in cloth",
    start: 1640,
    end: 1650,
    civilization: "Indian textile workshops",
    region: "India, textile-producing workshops",
    people: [],
    theme: "Technology",
    diagram: "beads",
    description:
      "A cotton rumal dated 1640–1650 preserves painted and dyed decoration made through multiple stages of preparation and colour application.",
    background:
      "The museum describes a plain-woven cotton base with mordant-painted, dyed and resist-dyed patterning.",
    consequence:
      "Such surviving objects allow the study of practical craft knowledge and the visual language of furnishing textiles.",
    evidence:
      "Examine the distinction between the woven structure and colours applied afterwards. A museum photograph shows the surface, while technical analysis establishes materials and processes.",
    significance:
      "An object can explain production more precisely than a generic illustration of trade.",
    limits:
      "The catalogue dates this cover approximately. It does not identify every maker, workshop or original owner; those details remain unknown here.",
    sources: ["kalamkari"],
    locator: "Object catalogue: date and medium",
    related: ["textile-workshops", "women-rural-work"],
    image: "The museum’s open-access image of the dated kalamkari cover.",
  },
  {
    id: "company-trading-networks",
    title: "European companies within Indian commercial networks",
    start: 1600,
    end: 1750,
    civilization: "Indian merchants and European companies",
    region: "Indian ports and textile-producing regions",
    people: [],
    theme: "Trade",
    diagram: "network",
    description:
      "English and Dutch trading companies entered markets already served by Indian merchants and manufacturers.",
    background:
      "Indian textiles were exchanged in Asian trade and increasingly exported to Europe.",
    consequence:
      "Makers adapted products to buyers, while commercial pressure could also exploit weavers.",
    evidence: "Different export fabrics reveal varied customer preferences.",
    significance: "Trade history includes Indian commercial agency and unequal bargaining.",
    limits: "Company trading activity was not yet the same as territorial sovereignty over India.",
    sources: ["ports"],
    locator: "Overseas markets, European companies and weavers",
    related: ["textile-workshops", "plassey-1757", "diwani-1765"],
    image:
      "Add a dated factory account, port map or textile sample with provenance and an explanation of the word factory as a trading establishment.",
  },
  {
    id: "mughal-succession-war",
    title: "The succession war: competing claims to the Mughal throne",
    start: 1657,
    end: 1659,
    exact: true,
    civilization: "Mughal and allied regional elites",
    region: "Northern and central India",
    people: ["Dara Shikoh", "Aurangzeb", "Shah Shuja", "Murad Bakhsh", "Shah Jahan"],
    theme: "States",
    diagram: "network",
    description:
      "Shah Jahan’s illness in 1657 precipitated a struggle among his sons. Aurangzeb emerged victorious and took imperial power.",
    background:
      "Princes depended on military followings and shifting alliances. Rajput participation did not follow a single, uniform political position.",
    consequence:
      "The war reshaped the ruling household and relationships between imperial contenders and regional elites.",
    evidence:
      "Modern research compares accounts of allegiance and honour rather than assuming that one religious identity dictated every alliance.",
    significance: "Succession involved institutions, rival households and negotiated loyalties.",
    limits:
      "1657–1659 marks the central conflict, not the lifespan of its consequences. Avoid reducing the war to a simple modern ideological contest.",
    sources: ["succession"],
    locator: "Succession chronology and Rajput allegiances",
    related: ["shah-jahan-court", "aurangzeb-reign"],
    image:
      "Add a sourced sequence of battles and alliances; distinguish confirmed movements from later narrative claims.",
  },
  {
    id: "aurangzeb-reign",
    title: "Aurangzeb: expansion and pressures on imperial rule",
    start: 1658,
    end: 1707,
    exact: true,
    civilization: "Mughal",
    region: "Northern India and the Deccan",
    people: ["Aurangzeb"],
    theme: "States",
    diagram: "network",
    description:
      "Aurangzeb’s long reign combined territorial expansion with sustained conflict and increasing demands on imperial resources.",
    background:
      "Mansabdari and jagirdari arrangements linked service, troop maintenance and claims on agricultural revenue.",
    consequence:
      "The relationship between military commitments, available revenue and regional resistance became central to later debates about imperial decline.",
    evidence:
      "Historians disagree about the relative weight of institutional, fiscal and political causes. The linked teaching chapter presents several interpretations.",
    significance: "Territorial size alone is not a measure of administrative strength.",
    limits:
      "1658–1707 dates the reign, not the end of the Mughal dynasty. Neither one ruler’s personality nor one policy explains all subsequent changes.",
    sources: ["aurangzeb"],
    locator: "Introduction; jagirdari crisis and interpretations of decline",
    related: [
      "mughal-administration",
      "saraighat-1671",
      "deccan-annexations",
      "regional-successor-states",
    ],
    image:
      "Add a dated farman, coin or portrait with provenance and context rather than a modern imagined likeness.",
    research:
      "Add a separately sourced dossier on jizya, temple policies, grants and local conflicts, distinguishing individual orders, implementation and historical interpretations.",
  },
  {
    id: "saraighat-1671",
    title: "Saraighat: Ahom resistance on the Brahmaputra",
    start: 1667,
    end: 1671,
    exact: true,
    civilization: "Ahom kingdom",
    region: "Guwahati and the Brahmaputra, Assam",
    people: ["Lachit Borphukan", "Ram Singh"],
    theme: "States",
    diagram: "water",
    description:
      "After the Ahoms recovered Guwahati in 1667, renewed Mughal campaigns culminated in the Ahom victory at Saraighat in 1671.",
    background:
      "Lachit Borphukan commanded Ahom forces against an expedition led by Ram Singh. The campaign included an Ahom defeat at Alaboi in 1669.",
    consequence:
      "River warfare at Saraighat checked Mughal efforts to establish control in the region.",
    evidence:
      "The Kamrup district account identifies the campaign sequence and the importance of boats and river terrain.",
    significance: "Northeastern Indian states shaped the limits of imperial expansion.",
    limits:
      "The range follows this campaign, not all Ahom–Mughal relations. Modern memorials are commemorations, not surviving battle installations; casualty totals need independent scrutiny.",
    sources: ["saraighat"],
    locator: "Guwahati recovery, Alaboi and Saraighat sequence",
    related: ["aurangzeb-reign", "regional-successor-states"],
    image:
      "Add a sourced Brahmaputra battle-location map; label modern memorial photographs as modern.",
    map: "Show the river and named campaign locations without inventing exact ship positions.",
  },
  {
    id: "shivaji-coronation",
    title: "Shivaji’s coronation and Maratha state formation",
    start: 1674,
    exact: true,
    civilization: "Maratha",
    region: "Raigad and the western Deccan",
    people: ["Shivaji"],
    theme: "States",
    diagram: "seal",
    description:
      "Shivaji’s coronation at Raigad in 1674 gave ceremonial expression to a Maratha sovereignty built through years of military and political activity.",
    background:
      "Fort control, mobile forces, coastal defence and negotiation were important to the growth of his state.",
    consequence:
      "Administrative organisation and royal authority accompanied campaigning; later Maratha rulers inherited and transformed this political project.",
    evidence:
      "The IGNOU unit separates the coronation from earlier campaigns, military organisation and administrative structures.",
    significance:
      "State formation required revenue, institutions and legitimacy as well as territorial gains.",
    limits:
      "1674 is the coronation year, not the beginning of all Maratha activity. Later imperial frontiers must not be projected back onto Shivaji’s kingdom.",
    sources: ["shivaji"],
    locator: "Sections 15.4, 15.6 and 15.8",
    related: ["maratha-fort-networks", "maratha-expansion", "aurangzeb-reign"],
    image:
      "Add a verified seal, contemporary document or photograph of Raigad with construction phases; identify later coronation paintings as retrospective.",
    research:
      "Add sourced campaign entries for Pratapgad, Surat, Purandar and the Agra episode, separating documented events from later anecdotes.",
  },
  {
    id: "tegh-bahadur-1675",
    title: "Guru Tegh Bahadur’s execution and Sikh memory",
    start: 1675,
    exact: true,
    civilization: "Sikh community",
    region: "Delhi and Punjab",
    people: ["Guru Tegh Bahadur", "Aurangzeb"],
    theme: "Religion",
    diagram: "pillar",
    description:
      "Guru Tegh Bahadur was executed in Delhi in 1675 under Mughal authority. Sikh tradition remembers his death as martyrdom in defence of religious conscience.",
    background:
      "The SGPC account places the event within conflict over coercion and faith and explains its central place in Sikh remembrance.",
    consequence:
      "The episode became important to Sikh understandings of sacrifice and the protection of others’ religious practice.",
    evidence:
      "Gurdwara Sis Ganj commemorates the execution site. A later commemorative building should not be mistaken for the original seventeenth-century setting.",
    significance: "Political violence and its remembrance both require historical attention.",
    limits:
      "The year is well established; the cited narrative is a Sikh institutional account. Detailed motives and sequences warrant comparison with other contemporary sources.",
    sources: ["tegh"],
    locator: "Execution at Delhi in 1675 and Sis Ganj commemoration",
    related: ["adi-granth-1604", "khalsa-1699", "aurangzeb-reign"],
    image:
      "Add a licensed site photograph with construction history, or an appropriately contextualised manuscript source.",
  },
  {
    id: "maratha-fort-networks",
    title: "Maratha forts: terrain, defence and coastal connections",
    start: 1680,
    end: 1760,
    civilization: "Maratha",
    region: "Sahyadri ranges, Konkan coast and peninsular India",
    people: [],
    theme: "Technology",
    diagram: "network",
    description:
      "Maratha power depended on a connected landscape of hill, coastal and island forts, not simply on isolated strongholds.",
    background:
      "Fortifications were built, adapted and expanded in relation to terrain, routes and military needs. Existing structures could acquire new roles under later rulers.",
    consequence:
      "The network supported defence, territorial control and the protection of trade through mountain passes and along the coast.",
    evidence:
      "Raigad, Sindhudurg and other surviving forts contain multiple phases; UNESCO’s serial property covers a much longer chronology than this entry.",
    significance: "Landscape knowledge and engineering formed part of military organisation.",
    limits:
      "1680–1760 is a selected viewing window. The full fort tradition extends from the seventeenth into the nineteenth century, with some structures older still.",
    sources: ["forts"],
    locator: "Brief synthesis: terrain, networks and building phases",
    related: ["shivaji-coronation", "maratha-expansion"],
    image:
      "Add licensed photographs of a hill fort and an island fort with their names and construction histories.",
    map: "Plot identified forts and passes on a sourced regional map; distinguish routes from political borders.",
  },
  {
    id: "deccan-annexations",
    title: "Bijapur and Golconda: annexation without an end to war",
    start: 1686,
    end: 1687,
    exact: true,
    civilization: "Mughal and Deccan states",
    region: "Bijapur and Golconda, Deccan",
    people: ["Aurangzeb"],
    theme: "States",
    diagram: "town",
    description:
      "Mughal forces annexed Bijapur in 1686 and Golconda in 1687, ending the sovereignty of two major Deccan sultanates.",
    background:
      "The conquests followed a long history of campaigning and shifting relations between imperial and regional powers.",
    consequence:
      "Territorial annexation did not end resistance or make the enlarged empire easy to administer.",
    evidence:
      "A conquest date should be distinguished from the continuing work of occupation, revenue collection and local negotiation.",
    significance: "Military success could create new governing burdens.",
    limits:
      "The dates refer to the two annexations, not to uniform Mughal control over the entire Deccan.",
    sources: ["conquests"],
    locator: "Aurangzeb’s Deccan campaigns and annexations",
    related: ["deccan-sultanate-cultures", "malik-ambar", "aurangzeb-reign"],
    image:
      "Add a dated fort plan or siege account with source and translation; do not invent army deployment diagrams.",
  },
  {
    id: "khalsa-1699",
    title: "The Khalsa: a new form of Sikh collective identity",
    start: 1699,
    exact: true,
    civilization: "Sikh community",
    region: "Anandpur Sahib, Punjab",
    people: ["Guru Gobind Singh"],
    theme: "Religion",
    diagram: "oral",
    description:
      "Guru Gobind Singh established the Khalsa at Anandpur in 1699, giving new institutional form to Sikh collective commitment and discipline.",
    background:
      "The development followed changes in Sikh leadership, community organisation and relations with political authorities.",
    consequence: "Khalsa identity became central to later Sikh religious and political life.",
    evidence:
      "The SGPC account explains the event within Sikh tradition, including its association with the Baisakhi gathering.",
    significance: "Religious community-building could also reshape political organisation.",
    limits:
      "1699 dates the Khalsa’s establishment, not the origin of Sikhism. Calendar conversions for the exact day should be specified rather than silently mixed.",
    sources: ["khalsa"],
    locator: "Baisakhi 1699 at Anandpur and formation of the Khalsa",
    related: ["nanak-kartarpur", "adi-granth-1604", "tegh-bahadur-1675"],
    image:
      "Add a sourced manuscript or licensed Anandpur site photograph; distinguish later commemorative art from contemporary evidence.",
    research:
      "Add dated records for Banda Singh Bahadur, Sikh misls and later confederation, with a clear transition into the next chapter.",
  },
  {
    id: "chand-bibi-memory",
    title: "Remembering Chand Bibi in Deccani painting",
    start: 1700,
    civilization: "Deccani painting traditions",
    region: "Deccan, India",
    people: ["Chand Bibi"],
    theme: "Art",
    diagram: "oral",
    description:
      "A painting made around 1700 presents Chand Bibi hawking with attendants, showing how an earlier queen became a lasting subject of Deccani art.",
    background:
      "Her defence of Ahmadnagar belonged to the sixteenth century. The painting was produced much later and follows a popular visual theme.",
    consequence:
      "Images could preserve an admired political figure through courtly and symbolic conventions.",
    evidence:
      "The museum interprets the red colouring on the horse’s lower body as henna associated with bravery. This is symbolic representation, not proof of an observed incident.",
    significance: "Later memory is a historical subject in its own right.",
    limits:
      "The date belongs to the painting, not Chand Bibi’s lifetime. It is not an eyewitness portrait of the 1595 siege.",
    sources: ["bibi"],
    locator: "Object 1999.403: date, subject and iconographic interpretation",
    related: ["chand-bibi-defence", "deccan-sultanate-cultures"],
    image: "The catalogued c. 1700 painting, explicitly labelled as a later representation.",
  },
  {
    id: "regional-successor-states",
    title: "After 1707: authority shifts toward the regions",
    start: 1707,
    end: 1761,
    civilization: "Regional Indian states",
    region: "Bengal, Awadh, Hyderabad and other regions",
    people: [],
    theme: "States",
    diagram: "network",
    description:
      "After Aurangzeb’s death in 1707, provincial governors and regional powers gained greater control over revenue and military resources.",
    background: "Imperial institutions persisted even as effective authority shifted.",
    consequence:
      "New political formations developed alongside, rather than simply after, the Mughal court.",
    evidence:
      "Compare provincial offices and local fiscal control instead of treating every state as identically independent.",
    significance: "Political fragmentation also involved regional state-building.",
    limits:
      "1707 was not the formal end of the Mughal dynasty or an instant collapse across India.",
    sources: ["regional"],
    locator: "Crisis of the empire and emergence of new states",
    related: ["provincial-courts", "maratha-expansion", "nadir-delhi"],
    image:
      "Add separately dated regional maps with uncertainty and the distinction between nominal and effective authority.",
  },
  {
    id: "provincial-courts",
    title: "Bengal, Awadh and Hyderabad: provincial states take shape",
    start: 1710,
    end: 1740,
    civilization: "Mughal successor states",
    region: "Bengal, Awadh and Hyderabad",
    people: ["Murshid Quli Khan", "Saadat Khan", "Asaf Jah"],
    theme: "Economy",
    diagram: "coin",
    description:
      "Provincial rulers consolidated authority by controlling revenue, appointments and armed forces while retaining elements of Mughal political language.",
    background:
      "Bengal, Awadh and Hyderabad followed distinct paths. Hyderabad emerged as an autonomous regional power after 1724.",
    consequence:
      "Courts, bankers and revenue intermediaries became important to the operation of these states.",
    evidence:
      "Administrative titles and coin legends may acknowledge an emperor even when practical authority rests in a province.",
    significance: "Sovereignty could be layered rather than simply present or absent.",
    limits:
      "1710–1740 is a comparative window, not a shared founding date. Each province needs its own detailed chronology.",
    sources: ["successor"],
    locator: "Regional polities: Bengal, Awadh and Hyderabad",
    related: ["regional-successor-states", "plassey-1757", "buxar-1764"],
    image:
      "Add coins or provincial documents with ruler, mint, year, archive reference and translation.",
    research:
      "Add separate Bengal, Awadh, Hyderabad, Mysore, Jat and Rajput sequences with verified appointments, treaties and fiscal evidence.",
  },
  {
    id: "maratha-expansion",
    title: "Maratha expansion under the Peshwas",
    start: 1720,
    end: 1761,
    civilization: "Maratha",
    region: "Deccan, western, central and northern India",
    people: ["Baji Rao I"],
    theme: "States",
    diagram: "network",
    description:
      "Maratha power expanded beyond its western Deccan base during the eighteenth century.",
    background: "Campaigning and revenue claims connected distant regions to Maratha leaders.",
    consequence: "Tributary demands brought resources but also resistance and rival alliances.",
    evidence: "Directly administered territory must be distinguished from areas paying tribute.",
    significance: "A map of influence is not necessarily a map of uniform rule.",
    limits:
      "1720–1761 is an expansion window. The defeat at Panipat did not erase all Maratha institutions or later political activity.",
    sources: ["regional"],
    locator: "The Marathas: expansion, tribute and administration",
    related: ["shivaji-coronation", "maratha-fort-networks", "panipat-1761"],
    image:
      "Add a sourced map that separately marks direct rule, tribute and campaigns at named dates.",
    research:
      "Add detailed evidence for Tarabai, Shahu, the Peshwas and regional Maratha houses; preserve their competing claims and changing alliances.",
  },
  {
    id: "jaipur-1727",
    title: "Jaipur: a planned commercial capital",
    start: 1727,
    exact: true,
    civilization: "Kachhwaha Rajput state",
    region: "Jaipur, Rajasthan",
    people: ["Sawai Jai Singh II"],
    theme: "Cities",
    diagram: "town",
    description:
      "Sawai Jai Singh II founded Jaipur in 1727 on a plain, with an organised street grid and major intersections known as chaupars.",
    background:
      "Its planning brought together architectural ideas and practical arrangements for markets, workshops, residences and temples.",
    consequence:
      "The city developed as a commercial and artisanal centre, connecting royal planning with everyday urban production.",
    evidence:
      "Street organisation and frontage patterns preserve evidence of the planned city, though the present fabric includes later changes.",
    significance: "Regional state-building also produced new cities and commercial infrastructure.",
    limits:
      "1727 is the foundation date, not the completion date of every building. Later monuments must not be placed in the founding scene.",
    sources: ["jaipur"],
    locator: "Foundation, grid plan and commercial purpose",
    related: ["jaipur-observatory", "regional-successor-states"],
    image:
      "Add a licensed early plan or aerial photograph with later additions identified; do not use the later Hawa Mahal as a 1727 building.",
  },
  {
    id: "jaipur-observatory",
    title: "Jantar Mantar: astronomy built in stone",
    start: 1734,
    exact: true,
    civilization: "Jaipur court and astronomical scholars",
    region: "Jaipur, Rajasthan",
    people: ["Sawai Jai Singh II"],
    theme: "Science",
    diagram: "weights",
    description:
      "Completed in 1734, Jai Singh II’s Jaipur observatory brought monumental instruments into the practice of naked-eye positional astronomy.",
    background:
      "Masonry instruments translated geometrical principles into large structures for observing celestial positions.",
    consequence:
      "The observatory supported astronomical tables and exchange among different scholarly traditions.",
    evidence:
      "UNESCO identifies around twenty principal fixed instruments and emphasises their architectural and instrumental innovations.",
    significance:
      "Scientific work depended on patronage, calculation, construction and repeated observation.",
    limits:
      "1734 marks the reported completion, not the date of every instrument or later restoration. These were positional instruments, not telescopes.",
    sources: ["astronomy", "astronomyDate"],
    locator: "UNESCO: instruments and observation; Rajasthan Tourism: completion in 1734",
    related: ["jaipur-1727", "aryabhata-499", "brahmagupta-628"],
    image:
      "Add a licensed photograph or measured drawing of an identified instrument, with scale and an explanation of what it measures.",
    research:
      "Add instrument-specific dates and a sourced worked observation before displaying numerical accuracy claims.",
  },
  {
    id: "nadir-delhi",
    title: "1739: invasion, Karnal and the sack of Delhi",
    start: 1739,
    exact: true,
    civilization: "Mughal India",
    region: "Karnal and Delhi",
    people: ["Nadir Shah", "Muhammad Shah"],
    theme: "States",
    diagram: "network",
    description:
      "Nadir Shah’s invading army defeated Mughal forces at Karnal in 1739. The subsequent occupation and sack of Delhi inflicted severe violence and removed immense wealth.",
    background:
      "The campaign connected military ambitions and demands for revenue with weaknesses in Mughal defence and coordination.",
    consequence:
      "The invasion damaged imperial prestige and resources without immediately abolishing the Mughal throne.",
    evidence:
      "Accounts differ in their emphases and numerical estimates; the sequence of invasion, defeat, occupation and plunder should remain distinct.",
    significance: "The event exposed the vulnerability of the imperial centre.",
    limits:
      "This entry concerns the invasion’s impact in India, not a general history of Iran. Unverified casualty and treasure totals are omitted.",
    sources: ["nadir"],
    locator: "Nader Shah and India: Karnal and Delhi, 1739",
    related: ["shahjahanabad", "regional-successor-states"],
    image:
      "Add a dated account or map of the invasion route with provenance; label later battle paintings as retrospective.",
  },
  {
    id: "colachel-1741",
    title: "Colachel: Travancore defeats Dutch forces",
    start: 1741,
    exact: true,
    civilization: "Travancore",
    region: "Colachel, present-day Tamil Nadu; southern Travancore",
    people: ["Marthanda Varma"],
    theme: "States",
    diagram: "water",
    description:
      "Travancore’s forces under Marthanda Varma defeated the Dutch at Colachel in 1741.",
    background:
      "Marthanda Varma expanded the kingdom that had developed from Venad, incorporating neighbouring territories.",
    consequence:
      "The victory illustrates that European commercial and military expansion faced effective opposition from Indian states.",
    evidence:
      "The Thiruvananthapuram municipal history places the battle within Travancore’s wider consolidation.",
    significance: "Southern Indian state formation continued on its own regional trajectory.",
    limits:
      "This was a specific regional victory, not the expulsion of all European traders from India. The present state boundary is a modern orientation label.",
    sources: ["travancore"],
    locator: "Marthanda Varma and the Battle of Colachel",
    related: ["company-trading-networks", "regional-successor-states"],
    image:
      "Add a sourced coastal map or a licensed photograph of the memorial, clearly identifying it as commemorative.",
  },
  {
    id: "plassey-1757",
    title: "Plassey: Company intervention in Bengal’s politics",
    start: 1757,
    exact: true,
    civilization: "Bengal and the East India Company",
    region: "Palashi (Plassey), Bengal",
    people: ["Siraj ud-Daulah", "Robert Clive", "Mir Jafar"],
    theme: "States",
    diagram: "network",
    description:
      "The Company defeated Siraj ud-Daulah at Plassey in 1757 with support from conspirators within Bengal’s political establishment.",
    background: "Commercial disputes and court rivalries shaped the confrontation.",
    consequence:
      "Mir Jafar became nawab, increasing Company influence over Bengal’s government and resources.",
    evidence:
      "The outcome depended on alliances and non-participation as well as battlefield force.",
    significance: "Commercial power was becoming political intervention.",
    limits:
      "1757 did not establish Company rule over all India or complete Bengal’s administrative takeover.",
    sources: ["company"],
    locator: "The Battle of Plassey",
    related: ["company-trading-networks", "provincial-courts", "buxar-1764"],
    image:
      "Add a sourced battle plan or contemporary document; avoid unsupported troop and casualty diagrams.",
  },
  {
    id: "panipat-1761",
    title: "Third Panipat: a major Maratha defeat",
    start: 1761,
    exact: true,
    civilization: "Maratha and north Indian powers",
    region: "Panipat, Haryana",
    people: ["Ahmad Shah Abdali", "Sadashivrao Bhau"],
    theme: "States",
    diagram: "network",
    description:
      "Ahmad Shah Abdali’s forces defeated the Maratha army under Sadashivrao Bhau at Panipat in 1761.",
    background: "The conflict followed Maratha expansion into northern India.",
    consequence: "The defeat severely disrupted Maratha military power and leadership.",
    evidence: "The district history records the opposing commanders and outcome.",
    significance: "Regional alliances mattered to the balance of power.",
    limits:
      "The battle did not itself transfer India to British rule. Avoid treating later Company expansion as an inevitable immediate result.",
    sources: ["panipat"],
    locator: "Third Battle of Panipat",
    related: ["maratha-expansion", "plassey-1757"],
    image:
      "Add a verified campaign map and distinguish documented movements from later reconstructions.",
  },
  {
    id: "buxar-1764",
    title: "Buxar: a coalition defeated by the Company",
    start: 1764,
    exact: true,
    civilization: "Bengal, Awadh and Mughal authority",
    region: "Buxar, Bihar",
    people: ["Mir Qasim", "Shuja ud-Daulah", "Shah Alam II"],
    theme: "States",
    diagram: "network",
    description:
      "Company forces defeated the coalition of Mir Qasim, Shuja ud-Daulah and Shah Alam II at Buxar in 1764.",
    background:
      "Conflict had continued after Plassey over political authority and commercial privileges.",
    consequence:
      "The victory strengthened the Company’s position in the negotiations that followed.",
    evidence: "Distinguish the military event from the subsequent grant of revenue authority.",
    significance: "Buxar linked Bengal’s conflict to wider north Indian politics.",
    limits: "The battle occurred in 1764; the Diwani grant followed in 1765.",
    sources: ["company", "buxar"],
    locator: "Mir Qasim, Buxar and Company expansion; university course section on Buxar",
    related: ["plassey-1757", "diwani-1765"],
    image:
      "Add a sourced battle-location map or treaty-related document with archive reference and translation.",
  },
  {
    id: "diwani-1765",
    title: "1765: revenue rights and the transition to Company rule",
    start: 1765,
    exact: true,
    civilization: "Mughal authority and East India Company",
    region: "Bengal, Bihar and Orissa (historical revenue designation)",
    people: ["Shah Alam II", "Robert Clive"],
    theme: "Economy",
    diagram: "seal",
    description:
      "In 1765 the Company received the Diwani, or revenue-administration rights, for Bengal, Bihar and Orissa from the Mughal emperor.",
    background:
      "Military victories had strengthened its bargaining position. The grant connected a trading company directly to the fiscal resources of an extensive territory.",
    consequence:
      "Revenue could now help finance export purchases and the Company’s growing commitments, changing its relationship with producers and local authorities.",
    evidence:
      "NCERT contrasts the likely modest setting of the grant with a later grand painting commissioned to commemorate it.",
    significance:
      "This is a clear bridge from early modern political competition to the next chapter’s history of colonial rule.",
    limits:
      "The historical revenue designation is not a modern state map or proof of uniform control. Mughal and regional institutions continued after 1765.",
    sources: ["diwani"],
    locator: "The Company Becomes the Diwan; Revenue for the Company",
    related: ["buxar-1764", "agrarian-production"],
    image:
      "Add a verified Diwani document or licensed later commemorative painting, with its actual creation date and purpose.",
    research:
      "Continue in the Colonial Era chapter with revenue administration, the Bengal famine, resistance and changing land settlements, using separately verified records.",
  },
  {
    id: "panipat-1556",
    title: "Second Panipat: Hemu and the contested succession",
    start: 1556,
    exact: true,
    civilization: "Mughal and Sur successor powers",
    region: "Delhi and Panipat, Haryana",
    people: ["Hemu", "Akbar", "Bairam Khan"],
    theme: "States",
    diagram: "network",
    description:
      "On 5 November 1556, Mughal forces defeated Hemu at Panipat after his seizure of Delhi and Agra.",
    background:
      "Humayun’s death left the young Akbar’s position vulnerable. Hemu’s rise showed that the restoration of 1555 had not settled the contest for northern India.",
    consequence:
      "The victory secured a crucial opportunity for Akbar’s subsequent consolidation under the early guidance of Bairam Khan.",
    evidence:
      "The date and outcome are distinguished from disputed or embellished accounts of Hemu’s capture and death.",
    significance: "The Mughal succession remained contested even after a ruler’s formal accession.",
    limits:
      "The battle did not instantly secure all northern India. Precise troop totals and dramatic last-moment stories are not supplied without corroboration.",
    sources: ["secondPanipat"],
    locator: "Battle date, background and outcome",
    related: ["humayun-restoration", "akbar-consolidation"],
    image:
      "Add a verified battle-location plan or source extract with translation; label later commemorative images by their production date.",
  },
  {
    id: "durgavati-1564",
    title: "Garha Katanga: Rani Durgavati resists Mughal conquest",
    start: 1564,
    exact: true,
    civilization: "Gond kingdom of Garha Katanga",
    region: "Central India, present-day Madhya Pradesh",
    people: ["Rani Durgavati", "Bir Narain", "Asaf Khan"],
    theme: "States",
    diagram: "town",
    description:
      "Rani Durgavati resisted a Mughal invasion of Garha Katanga in 1564. She died during the conflict, followed by further resistance under Bir Narain.",
    background:
      "Gond political organisation developed through layered local authority and expanding kingdoms. Durgavati had ruled on behalf of her young son.",
    consequence:
      "Conquest altered regional power but did not erase Gond society or all local ruling lineages.",
    evidence:
      "The NCERT account connects political change with social organisation, rather than presenting forest and tribal communities as outside history.",
    significance:
      "Central Indian kingdoms were active participants in the politics of empire and resistance.",
    limits:
      "The university biography dates Durgavati’s death to 1564; the NCERT chapter prints 1565 for the attack. This entry follows the former for chronology and the latter for social context. Modern tribal categories should not be projected unchanged onto the past.",
    sources: ["gond", "durgavatiDate"],
    locator: "A Closer Look: the Gonds; university biography, death date (24 June 1564)",
    related: ["akbar-consolidation", "regional-successor-states"],
    image:
      "Add a documented regional map or inscription; label modern statues and imagined portraits as commemorative.",
  },
  {
    id: "tarabai-regency",
    title: "Tarabai: leadership during the Maratha–Mughal wars",
    start: 1700,
    end: 1707,
    civilization: "Maratha",
    region: "Western Deccan, Satara and Panhala",
    people: ["Tarabai", "Rajaram"],
    theme: "States",
    diagram: "seal",
    description:
      "After Rajaram’s death in 1700, Tarabai exercised leadership during the continuing struggle against Mughal forces.",
    background:
      "War required coordination among commanders, forts and revenue resources. The Satara Gazetteer treats her regency as a distinct phase of Maratha history.",
    consequence:
      "Her authority helped sustain resistance; later succession disputes brought further changes to Maratha politics.",
    evidence:
      "The gazetteer records her movement to Panhala in 1705 and the importance of ministers and commanders alongside royal leadership.",
    significance:
      "Maratha resilience involved women’s authority and institutional continuity after a ruler’s death.",
    limits:
      "1700–1707 is the selected wartime phase, not Tarabai’s entire political career. The gazetteer’s older narrative should be compared with contemporary documents for detailed claims.",
    sources: ["tarabai"],
    locator: "Tarabai’s Regency, 1700–1707",
    related: ["shivaji-coronation", "maratha-expansion", "aurangzeb-reign"],
    image:
      "Add a verified letter, seal or site photograph; identify later portraits and commemorative paintings explicitly.",
  },
];
