import type { PrehistoryDiagram } from "@/types/prehistory-exhibit";
import { classicalSources } from "./sources";

export interface ClassicalRecord {
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
  significance: string;
  limits: string;
  scope?: string;
  sources: (keyof typeof classicalSources)[];
  locator?: string;
  related: string[];
  image: string;
  map?: string;
}

/** India-focused records; signed years, with no year zero. */
export const classicalRecords: readonly ClassicalRecord[] = [
  {
    id: "indo-greek-india",
    title: "Indo-Greek kingdoms: bilingual coins in the northwest",
    start: -200,
    end: -1,
    civilization: "Indo-Greek kingdoms",
    region: "Northwestern Indian subcontinent",
    theme: "States",
    diagram: "coin",
    people: ["Apollodotus I"],
    description:
      "Indo-Greek rulers governed territories south of the Hindu Kush in the second and first centuries BCE. Their coinage connects this history directly to the northwestern subcontinent.",
    background:
      "Coins often pair Greek legends with Prakrit written in Kharoshthi. Weight standards and imagery changed for different audiences.",
    consequence:
      "Coin sequences help reconstruct rulers and relationships where surviving written narratives are limited.",
    significance: "Money provides evidence for political authority and multilingual exchange.",
    limits:
      "This broad window is not one continuous empire or a precise reign list. Coin finds alone cannot establish permanent borders.",
    sources: ["indogreek"],
    related: ["mauryan-successors", "kushan-connections"],
    image:
      "Add a licensed, dated photograph or catalogue plate for Indo-Greek kingdoms; include the site or findspot, accession if applicable, photographer, source URL and licence.",
    map: "Add a sourced location map of Northwestern Indian subcontinent, with modern orientation labels and a legend; do not imply fixed historical borders.",
  },
  {
    id: "ajanta-caves",
    title: "Ajanta: Buddhist caves, paintings and patronage",
    start: -200,
    end: 600,
    civilization: "Buddhist communities of the Deccan",
    region: "Ajanta, Maharashtra",
    theme: "Art",
    diagram: "stupa",
    people: [],
    description:
      "Ajanta preserves Buddhist caves from two major periods: the second to first centuries BCE and a later expansion in the fifth to sixth centuries CE.",
    background:
      "Rock-cut spaces brought worship, monastic life, painting and sculpture together in a cliff-side setting.",
    consequence:
      "The later decorated caves made Ajanta a major surviving record of Indian Buddhist visual culture.",
    significance:
      "Different building phases reveal renewal rather than a single uninterrupted construction project.",
    limits:
      "The range includes a long interval between phases. The term Gupta period in an art chronology does not by itself establish Gupta political control.",
    sources: ["ajanta"],
    related: ["sanchi-mauryan-core", "ellora-caves"],
    image:
      "Add a licensed, dated photograph or catalogue plate for Ajanta; include the site or findspot, accession if applicable, photographer, source URL and licence.",
    map: "Add a sourced location map of Ajanta, Maharashtra, with modern orientation labels and a legend; do not imply fixed historical borders.",
  },
  {
    id: "kushan-connections",
    title: "Kushans: Central Asia meets South Asia",
    start: 100,
    end: 300,
    civilization: "Kushan",
    region: "Bactria, Gandhara and northern India",
    people: ["Kanishka"],
    theme: "Religion",
    diagram: "stupa",
    description:
      "Kushan power connected Central and South Asian centres. Buddhist communities and artistic workshops participated in these wider networks.",
    background:
      "The dynasty emerged from a history of migration and political consolidation. Its first–third-century CE empire should not be conflated with earlier Yuezhi movements.",
    consequence:
      "Patronage and travel aided the transmission of Buddhist texts and images toward Central Asia and China. Gandhara and Mathura developed distinctive visual traditions.",
    significance:
      "Political connections supported religious movement without producing a single uniform culture.",
    limits:
      "This is a broad imperial window, not Kanishka's exact reign. Chronological debates and regional differences require object-specific dating.",
    sources: ["kushan", "kushanDates"],
    related: ["mauryan-successors", "buddha-early-sangha", "gupta-world"],
    image: "A dated Gandharan or Mathura sculpture with findspot and museum provenance.",
  },
  {
    id: "gupta-world",
    title: "Gupta courts and regional cultural worlds",
    start: 320,
    end: 550,
    civilization: "Gupta",
    region: "Northern India",
    people: ["Chandragupta I", "Samudragupta", "Faxian"],
    theme: "Culture",
    diagram: "coin",
    description:
      "Gupta rulers expanded through warfare and alliances. Patronage supported influential developments in sculpture, religious practice and literary culture.",
    background:
      "The dynasty rose from a regional base. Inscriptions, coins and travellers' accounts illuminate different aspects of rule and must be read for their purposes and audiences.",
    consequence:
      "Gupta-period Buddhist sculpture influenced art beyond India. Political fragmentation and pressures from the northwest did not erase these cultural traditions.",
    significance: "Cultural influence could outlast the political reach of a dynasty.",
    limits:
      "320–550 CE is approximate. The phrase 'golden age' describes selected achievements, not evidence of equal prosperity or freedom for everyone.",
    sources: ["gupta"],
    related: ["kushan-connections", "nalanda-learning", "aryabhata-499"],
    image:
      "A Gupta coin with readable legend, ruler attribution and accession; no invented imperial boundary.",
  },
  {
    id: "nalanda-learning",
    title: "Nalanda: a residential world of learning",
    start: 400,
    end: 1200,
    civilization: "South Asian monastic networks",
    region: "Bihar, India",
    people: ["Xuanzang"],
    theme: "Education",
    diagram: "village",
    description:
      "Nalanda became a major residential monastic and scholastic establishment, linking teaching, debate, patronage and religious life.",
    background:
      "Its surviving buildings accumulated across centuries. Monasteries, shrines and sculpture preserve an institutional landscape rather than a single building called a university.",
    consequence:
      "Students and teachers contributed to international Buddhist intellectual networks. Its organisational example influenced other monastic centres.",
    significance:
      "Education depended on institutions and continuing support, as well as celebrated individuals.",
    limits:
      "400–1200 CE rounds the fifth–thirteenth-century institutional history. Earlier site remains do not establish an equally early university founding.",
    sources: ["nalanda"],
    related: ["gupta-world"],
    image:
      "An excavated Nalanda monastery plan with construction phases, scale and publication credit.",
  },
  {
    id: "aryabhata-499",
    title: "Aryabhata: mathematics and the moving heavens",
    start: 499,
    exact: true,
    civilization: "South Asian scholarship",
    region: "Kusumapura, associated with Patna",
    people: ["Aryabhata"],
    theme: "Science",
    diagram: "oral",
    description:
      "The Aryabhatiya, composed in 499, set out mathematical procedures and astronomical models in compact Sanskrit verse.",
    background:
      "Aryabhata worked within established computational traditions. His text treated arithmetic, geometry and trigonometric quantities alongside celestial calculation.",
    consequence:
      "Commentators unpacked the concise verses for later learners. His account of apparent celestial motion included the rotation of Earth, without being a modern heliocentric theory.",
    significance: "Knowledge travelled through texts, calculation and commentary.",
    limits:
      "The date is for the composition, not a surviving autograph. Modern imagined portraits are not evidence of Aryabhata's appearance.",
    sources: ["aryabhata"],
    related: ["gupta-world", "brahmagupta-628"],
    image:
      "A catalogued Aryabhatiya manuscript page with its actual copying date and translation rights.",
  },
  {
    id: "tamil-devotion",
    title: "Tamil hymns and communities of devotion",
    start: 550,
    end: 1000,
    civilization: "Tamil devotional communities",
    region: "Tamil region, South India",
    people: ["Andal", "Karaikkal Ammaiyar", "Appar"],
    theme: "Literature",
    diagram: "oral",
    description:
      "Alvar and Nayanar poets expressed devotion to Vishnu and Shiva in Tamil. Songs linked shrines, travelling devotees and later temple practice.",
    background:
      "These traditions included women and people of different social backgrounds. Their poetry could question status while participating in changing religious institutions.",
    consequence:
      "Later compilations and saint biographies helped sustain communities. Andal and Karaikkal Ammaiyar show the importance of women's voices in this history.",
    significance: "Vernacular literature helped shape sacred geographies.",
    limits:
      "The broad window covers composition and compilation; later hagiographies are not precise contemporary biographies.",
    sources: ["devotion"],
    locator: "Sections 2.1–2.3",
    related: ["chola-temples", "indian-devotional-dialogues"],
    image: "A catalogued hymn manuscript or dated saint sculpture; label the object's later date.",
  },
  {
    id: "bihar-buddha-bronze",
    title: "Bihar and Buddhist bronze casting",
    start: 550,
    end: 650,
    civilization: "Buddhist artistic traditions",
    region: "Probably Bihar, India",
    theme: "Art",
    diagram: "stupa",
    people: [],
    description:
      "A copper-alloy Buddha, attributed probably to Bihar, raises a hand in the gesture of reassurance. The museum dates it to the late sixth or early seventh century.",
    background:
      "Casting and finishing created a devotional image with monastic robes and conventional signs of Buddhahood.",
    consequence:
      "The object offers material evidence for the continuation of Buddhist sculpture after the main Gupta imperial period.",
    significance:
      "Object dates and stylistic labels must be distinguished from political chronologies.",
    limits:
      "550–650 is a rounded display window. The museum qualifies the place of origin as probable; the image is not a portrait or an excavated Nalanda object.",
    sources: ["biharbronze"],
    related: ["gupta-world", "nalanda-learning"],
    image:
      "Add a licensed, dated photograph or catalogue plate for Bihar and Buddhist bronze casting; include the site or findspot, accession if applicable, photographer, source URL and licence.",
    map: "Add a sourced location map of Probably Bihar, India, with modern orientation labels and a legend; do not imply fixed historical borders.",
  },
  {
    id: "ellora-caves",
    title: "Ellora: Buddhist, Hindu and Jain rock-cut spaces",
    start: 600,
    end: 1000,
    civilization: "Deccan religious communities",
    region: "Ellora, Maharashtra",
    theme: "Architecture",
    diagram: "stupa",
    people: [],
    description:
      "Ellora contains a sequence of Buddhist, Hindu and Jain monasteries and temples cut into basalt cliffs, dating broadly from 600 to 1000 CE.",
    background:
      "The surviving group includes 34 caves and monuments, requiring sustained planning, excavation and sculptural work.",
    consequence:
      "Their different designs document changing devotional settings and exceptional rock-cut craftsmanship.",
    significance:
      "Shared geography allows comparison of distinct religious architectural traditions.",
    limits:
      "The date range covers multiple patrons and phases. Proximity alone cannot prove that relations between all communities were always harmonious.",
    sources: ["ellora"],
    related: ["ajanta-caves", "pallava-mahabalipuram"],
    image:
      "Add a licensed, dated photograph or catalogue plate for Ellora; include the site or findspot, accession if applicable, photographer, source URL and licence.",
    map: "Add a sourced location map of Ellora, Maharashtra, with modern orientation labels and a legend; do not imply fixed historical borders.",
  },
  {
    id: "pallava-mahabalipuram",
    title: "Pallava Mahabalipuram: architecture on the coast",
    start: 600,
    end: 799,
    civilization: "Pallava",
    region: "Mahabalipuram, Tamil Nadu",
    theme: "Architecture",
    diagram: "town",
    people: [],
    description:
      "Pallava patrons developed the coastal monuments of Mahabalipuram during the seventh and eighth centuries.",
    background:
      "Rock-cut mandapas, monolithic rathas, large reliefs and the Shore Temple demonstrate different approaches to sacred architecture.",
    consequence: "These monuments preserve an important phase in southern Indian temple design.",
    significance:
      "A single site can reveal experiments in form, carving and structural construction.",
    limits:
      "The window dates the monument group, not the entire Pallava dynasty. A conceptual diagram is not a measured reconstruction.",
    sources: ["pallava"],
    related: ["tamil-devotion", "pattadakal-chalukya"],
    image:
      "Add a licensed, dated photograph or catalogue plate for Pallava Mahabalipuram; include the site or findspot, accession if applicable, photographer, source URL and licence.",
    map: "Add a sourced location map of Mahabalipuram, Tamil Nadu, with modern orientation labels and a legend; do not imply fixed historical borders.",
  },
  {
    id: "brahmagupta-628",
    title: "Brahmagupta: zero and rules of calculation",
    start: 628,
    exact: true,
    civilization: "South Asian scholarship",
    region: "Western and central India",
    people: ["Brahmagupta"],
    theme: "Science",
    diagram: "weights",
    description:
      "Brahmagupta's Brahmasphutasiddhanta gave rules for arithmetic involving zero and negative quantities alongside astronomical calculation.",
    background:
      "His work addressed mathematical and astronomical problems within a tradition of competing models and commentary. It built on earlier knowledge while proposing new procedures.",
    consequence:
      "Indian mathematical texts later informed scholarship in Arabic. Some rules, especially concerning division by zero, differ from modern mathematics.",
    significance: "Mathematical concepts developed through revision, not one isolated invention.",
    limits:
      "628 dates the work. It should not be described as the invention of every use of zero or as a complete modern number theory.",
    sources: ["brahmagupta"],
    related: ["aryabhata-499"],
    image:
      "A manuscript folio or modern typeset worked example clearly marked as a teaching transcription.",
  },
  {
    id: "pattadakal-chalukya",
    title: "Pattadakal: Chalukya temples and royal patronage",
    start: 700,
    end: 799,
    civilization: "Chalukya",
    region: "Pattadakal, Karnataka",
    theme: "Architecture",
    diagram: "town",
    people: ["Lokamahadevi"],
    description:
      "Pattadakal brings together temple forms associated with northern and southern India under Chalukya patronage.",
    background:
      "Queen Lokamahadevi commissioned the Virupaksha Temple around 740 to commemorate her husband’s victory over southern kings.",
    consequence:
      "The group preserves Hindu temples and a Jain sanctuary, illustrating varied sacred building traditions.",
    significance:
      "Royal women were active patrons whose commissions shaped the surviving landscape.",
    limits:
      "This entry focuses on eighth-century patronage within a group with seventh- and eighth-century origins. Dates differ by monument.",
    sources: ["pattadakal"],
    related: ["pallava-mahabalipuram", "hoysala-temples"],
    image:
      "Add a licensed, dated photograph or catalogue plate for Pattadakal; include the site or findspot, accession if applicable, photographer, source URL and licence.",
    map: "Add a sourced location map of Pattadakal, Karnataka, with modern orientation labels and a legend; do not imply fixed historical borders.",
  },
  {
    id: "khajuraho-chandella",
    title: "Khajuraho: Chandella temples and sculptural programmes",
    start: 950,
    end: 1050,
    civilization: "Chandella",
    region: "Khajuraho, Madhya Pradesh",
    theme: "Art",
    diagram: "town",
    people: [],
    description:
      "Chandella-period Khajuraho developed a major temple landscape, with its peak placed around 950–1050 CE.",
    background:
      "Surviving Hindu and Jain temples combine architectural forms with extensive sculptural programmes.",
    consequence:
      "The remaining monuments provide evidence for religious patronage and highly specialised craft.",
    significance:
      "The ensemble should be understood through architecture, worship and its full range of imagery.",
    limits:
      "These dates describe the principal flourishing, not identical construction dates for every temple. Surviving monuments are a partial record.",
    sources: ["khajuraho"],
    related: ["chola-temples", "hoysala-temples"],
    image:
      "Add a licensed, dated photograph or catalogue plate for Khajuraho; include the site or findspot, accession if applicable, photographer, source URL and licence.",
    map: "Add a sourced location map of Khajuraho, Madhya Pradesh, with modern orientation labels and a legend; do not imply fixed historical borders.",
  },
  {
    id: "chola-temples",
    title: "Chola temples: power, worship and bronze casting",
    start: 1000,
    end: 1200,
    civilization: "Chola",
    region: "Tamil Nadu, South India",
    people: ["Rajaraja I", "Rajendra I", "Rajaraja II"],
    theme: "Architecture",
    diagram: "pillar",
    description:
      "Chola patrons sponsored monumental temples and remarkable sculpture. Thanjavur, Gangaikondacholisvaram and Darasuram preserve different building programmes.",
    background:
      "Royal patronage supported architecture, painting and bronze casting. These complexes also belonged to continuing communities of ritual practice.",
    consequence:
      "Nataraja images expressed Shiva's cosmic dance in a portable sculptural form. Later generations maintained and modified temple landscapes.",
    significance: "Art, worship and political patronage were closely connected.",
    limits:
      "1000–1200 CE selects the great temple-building centuries, not the entire Chola dynasty. The gallery bronze dates to the late eleventh century.",
    sources: ["chola"],
    related: ["tamil-devotion", "vijayanagara-city"],
    image: "A Chola Nataraja bronze with actual object date, museum accession and provenance.",
  },
  {
    id: "rani-ki-vav",
    title: "Rani-ki-Vav: water engineering and sacred space",
    start: 1000,
    end: 1099,
    civilization: "Chaulukya-era Gujarat",
    region: "Patan, Gujarat",
    theme: "Technology",
    diagram: "water",
    people: [],
    description:
      "The eleventh-century Rani-ki-Vav combines a subterranean water structure with an elaborate sculptural programme.",
    background:
      "Steps descend through multiple levels toward the well, turning access to water into a carefully designed architectural experience.",
    consequence: "Its memorial and sacred functions accompanied practical water infrastructure.",
    significance:
      "Water management belongs in the history of technology, patronage and religious life together.",
    limits:
      "The century is a broad dating window. The teaching diagram is not an engineering plan or a claim about the exact historic water level.",
    sources: ["ranivav"],
    related: ["chola-temples", "khajuraho-chandella"],
    image:
      "Add a licensed, dated photograph or catalogue plate for Rani-ki-Vav; include the site or findspot, accession if applicable, photographer, source URL and licence.",
    map: "Add a sourced location map of Patan, Gujarat, with modern orientation labels and a legend; do not imply fixed historical borders.",
  },
  {
    id: "hoysala-temples",
    title: "Hoysala Karnataka: temples and named artisans",
    start: 1100,
    end: 1299,
    civilization: "Hoysala",
    region: "Belur, Halebidu and Somanathapura, Karnataka",
    theme: "Art",
    diagram: "town",
    people: [],
    description:
      "Twelfth- and thirteenth-century Hoysala temples developed a distinctive architectural and sculptural identity in Karnataka.",
    background:
      "Elaborate platforms, patterned shrine forms and narrative friezes combined earlier and contemporary architectural features.",
    consequence:
      "Artist signatures preserved on the monuments make some individual makers visible in the historical record.",
    significance: "Artisans as well as rulers contributed to the creation of regional styles.",
    limits:
      "The range covers three separate ensembles and different building phases. It is not a foundation date for all Hoysala temples.",
    sources: ["hoysala"],
    related: ["pattadakal-chalukya", "vijayanagara-city"],
    image:
      "Add a licensed, dated photograph or catalogue plate for Hoysala Karnataka; include the site or findspot, accession if applicable, photographer, source URL and licence.",
    map: "Add a sourced location map of Belur, Halebidu and Somanathapura, Karnataka, with modern orientation labels and a legend; do not imply fixed historical borders.",
  },
  {
    id: "indian-devotional-dialogues",
    title: "Bhakti and Sufi communities: poetry and practice",
    start: 1200,
    end: 1500,
    civilization: "South Asian devotional networks",
    region: "South Asia",
    people: ["Nizamuddin Auliya", "Kabir"],
    theme: "Religion",
    diagram: "oral",
    description:
      "Diverse devotional communities used poetry, teaching and shared practice. Sufi establishments and bhakti traditions formed distinct, sometimes interacting social worlds.",
    background:
      "Teachers addressed different audiences and religious questions. Devotees transmitted compositions orally and collected them in changing textual forms.",
    consequence:
      "Poetry could challenge hierarchy and narrow religious boundaries, while institutions developed their own relationships with patrons and authority.",
    significance:
      "Regional-language expression widened the historical record beyond royal chronicles.",
    limits:
      "This is a selected medieval window. Do not merge all traditions into one movement or assign exact biographies from later hagiographies.",
    sources: ["devotion"],
    locator: "Sections on Chishti practice and Kabir",
    related: ["tamil-devotion", "delhi-sultanate"],
    image:
      "A dated manuscript or shrine photograph that distinguishes medieval evidence from later additions.",
  },
  {
    id: "qutb-complex",
    title: "Delhi’s Qutb complex: building and rebuilding power",
    start: 1200,
    end: 1311,
    civilization: "Delhi Sultanate",
    region: "Mehrauli, Delhi",
    theme: "Architecture",
    diagram: "pillar",
    people: [],
    description:
      "The early-thirteenth-century Qutb Minar and surrounding monuments document the architectural expression of Sultanate authority in Delhi.",
    background:
      "Mosques, reused carved materials and later additions preserve different construction histories within the complex.",
    consequence:
      "The Alai Darwaza, built in 1311, records a later stage in this architectural development.",
    significance: "Buildings can be read as layered evidence for conquest, patronage and craft.",
    limits:
      "The topic begins with the tower’s early-thirteenth-century phase; some surrounding structures are older. Reused materials require site-specific interpretation.",
    sources: ["qutb"],
    related: ["delhi-sultanate", "ibn-battuta-india"],
    image:
      "Add a licensed, dated photograph or catalogue plate for Delhi’s Qutb complex; include the site or findspot, accession if applicable, photographer, source URL and licence.",
    map: "Add a sourced location map of Mehrauli, Delhi, with modern orientation labels and a legend; do not imply fixed historical borders.",
  },
  {
    id: "konark-sun-temple",
    title: "Konark: the Sun Temple and the Odisha coast",
    start: 1200,
    end: 1299,
    civilization: "Eastern Ganga",
    region: "Konark, Odisha",
    theme: "Architecture",
    diagram: "town",
    people: [],
    description:
      "Konark’s thirteenth-century Sun Temple gives monumental architectural form to the chariot of Surya.",
    background:
      "Carved wheels, sculptural imagery and the temple’s coastal setting form part of its distinctive design.",
    consequence:
      "The surviving structure remains a major record of eastern Indian sacred architecture.",
    significance:
      "Odisha’s architectural history adds a regional perspective alongside the contemporary Sultanate and southern kingdoms.",
    limits:
      "The century marks the building period; the surviving remains are not the complete original temple.",
    sources: ["konark"],
    related: ["hoysala-temples", "delhi-sultanate"],
    image:
      "Add a licensed, dated photograph or catalogue plate for Konark; include the site or findspot, accession if applicable, photographer, source URL and licence.",
    map: "Add a sourced location map of Konark, Odisha, with modern orientation labels and a legend; do not imply fixed historical borders.",
  },
  {
    id: "delhi-sultanate",
    title: "Delhi Sultanate: power and a growing money economy",
    start: 1206,
    end: 1500,
    civilization: "Delhi Sultanate",
    region: "Delhi and changing South Asian territories",
    people: ["Alauddin Khalji", "Muhammad bin Tughluq"],
    theme: "Economy",
    diagram: "coin",
    description:
      "Successive Delhi dynasties governed changing territories. Gold, silver and copper coinages illuminate political authority and monetary exchange.",
    background:
      "Islamic calligraphy increasingly replaced earlier coin designs. The tanka and smaller jittal provided important monetary units, though issues changed under different rulers.",
    consequence:
      "Attempts at standardisation accompanied expansion of the money economy. Coin legends preserve rulers' titles and claims to authority.",
    significance: "Coins connect administrative ambitions with material economic evidence.",
    limits:
      "The Sultanate conventionally lasted 1206–1526; this chapter stops its account at 1500. Do not portray all India as under continuous Delhi control.",
    sources: ["delhi"],
    related: ["indian-devotional-dialogues", "ibn-battuta-india", "vijayanagara-city"],
    image: "A catalogued tanka with ruler, mint, date, weight and both faces.",
    map: "Delhi Sultanate extent under separately dated rulers; distinguish tributary claims from direct control.",
  },
  {
    id: "ibn-battuta-india",
    title: "Ibn Battuta: travelling through connected societies",
    start: 1333,
    end: 1347,
    civilization: "Indian Ocean networks",
    region: "Delhi, South Asia and Indian Ocean",
    people: ["Ibn Battuta", "Muhammad bin Tughluq"],
    theme: "Travel",
    diagram: "network",
    description:
      "Ibn Battuta's account describes travel, court service and journeys through South Asia and the Indian Ocean world.",
    background:
      "Scholarly credentials and patronage helped some travellers move between distant courts. His observations include cities, communications, commodities and social differences.",
    consequence:
      "The later written account provides a valuable but selective view of connected societies. It can be compared with archaeology and other documents.",
    significance:
      "Travellers' perspectives illuminate encounters without supplying a neutral survey.",
    limits:
      "The range follows the South Asian and onward travel episode broadly. The Rihla was composed after the journeys and includes reported material.",
    sources: ["travellers"],
    locator: "Ibn Battuta and the Rihla; communication and urban life",
    related: ["delhi-sultanate"],
    image:
      "A Rihla manuscript with shelfmark and copy date, or a sourced map distinguishing reported from visited places.",
  },
  {
    id: "vijayanagara-city",
    title: "Vijayanagara: capital and sacred landscape",
    start: 1336,
    end: 1500,
    civilization: "Vijayanagara",
    region: "Hampi, Karnataka, India",
    people: ["Harihara", "Bukka"],
    theme: "Cities",
    diagram: "town",
    description:
      "Vijayanagara developed a large capital at Hampi, integrating monumental architecture with a striking rocky and riverine landscape.",
    background:
      "Its rulers drew on regional political and architectural traditions. Temples and royal structures formed different parts of the city's organisation.",
    consequence:
      "Visitors described the capital's wealth and scale. Surviving remains span multiple reigns, including major works after this chapter's endpoint.",
    significance:
      "Regional Indian kingdoms had trajectories alongside, rather than simply beneath, Delhi's history.",
    limits:
      "1336 is the conventional foundation; 1500 is only the chapter boundary. The defeat and sack of 1565 lie later and must not date every visible ruin.",
    sources: ["hampi", "travellers"],
    related: ["chola-temples", "delhi-sultanate", "ibn-battuta-india"],
    image:
      "A Hampi monument or urban plan with construction phase; flag sixteenth-century buildings as later context.",
  },
];
