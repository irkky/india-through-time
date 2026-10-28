import { bce } from "@/lib/historical-date";
import type { HistoricalEvent } from "@/types/history";
import type { PrehistoryDiagram } from "@/types/prehistory-exhibit";
import { empireSources as s } from "./sources";
import { empireDetails } from "./details";
import { empireImageNeeds } from "./image-needs";
import { enrichEmpireEvent } from "./evidence";

export type EmpirePeriodId =
  "landscape-of-states" | "an-empire-emerges" | "ashokan-evidence" | "after-mauryas";

type Entry = {
  periodId: EmpirePeriodId;
  id: string;
  title: string;
  start: number;
  end?: number;
  region: string;
  description: string;
  significance: string;
  limits: string;
  scope: string;
  source: keyof typeof s;
  locator: string;
  related: string[];
  diagram: PrehistoryDiagram;
  visualTitle: string;
  need: string;
};

/** Dates locate evidence or a historical process, never an invented precise biography. */
export const empireEntries: readonly Entry[] = [
  {
    id: "mahajanapadas",
    periodId: "landscape-of-states",
    title: "Mahajanapadas: a landscape of states",
    start: 600,
    end: 400,
    region: "Northern subcontinent",
    description:
      "Buddhist and Jain texts name sixteen major states, though their lists differ. Monarchies coexisted with ganas or sanghas in which power belonged to groups of elite men.",
    significance:
      "Fortified capitals, armies and officials depended on resources collected from surrounding communities.",
    limits: "These oligarchies were not modern democracies. Boundaries and lists changed.",
    scope: "Broad sixth–fourth-century BCE political setting.",
    source: "states",
    locator: "Section 2.1",
    related: ["later-vedic-societies", "magadha-rise"],
    diagram: "network",
    visualTitle: "Many centres of power",
    need: "ADD_STATE_MAP: a dated, cited map distinguishing approximate areas from firm borders.",
  },
  {
    id: "ganga-urban-life",
    periodId: "landscape-of-states",
    title: "Cities, fields and workshops",
    start: 600,
    end: 300,
    region: "Ganga valley and neighbouring regions",
    description:
      "Towns grew alongside agricultural production and craft activity. Northern Black Polished Ware is one archaeological indicator associated with early historic settlements.",
    significance:
      "Urban life depended on cultivators, labourers, traders and artisans as well as rulers.",
    limits: "One pottery type does not identify a people or establish a city's founding year.",
    scope: "A broad urbanisation window, not a synchronous change everywhere.",
    source: "states",
    locator: "Sections 2 and 6",
    related: ["painted-grey-ware", "early-punchmarked-money"],
    diagram: "town",
    visualTitle: "A city and its hinterland",
    need: "ADD_EXCAVATION_PLATE: a licensed NBPW vessel photograph with site, layer, scale and date.",
  },
  {
    id: "magadha-rise",
    periodId: "landscape-of-states",
    title: "Magadha: toward a larger kingdom",
    start: 600,
    end: 321,
    region: "Bihar and the middle Ganga valley",
    description:
      "Magadha expanded between the sixth and fourth centuries BCE. Traditions associate its rise with Bimbisara, Ajatashatru and the Nandas. Its capital shifted from Rajagriha to Pataliputra.",
    significance: "River routes and agricultural resources helped support political expansion.",
    limits: "Exact reign dates and dynastic narratives require caution.",
    scope: "Regional rise ending near the Mauryan succession.",
    source: "states",
    locator: "Section 2.2",
    related: ["mahajanapadas", "mauryan-empire"],
    diagram: "network",
    visualTitle: "From regional to imperial centres",
    need: "ADD_CAPITAL_PLAN: a published Rajgir or Pataliputra plan identifying excavation phases.",
  },
  {
    id: "mahavira-jain-traditions",
    periodId: "landscape-of-states",
    title: "Mahavira and Jain paths of liberation",
    start: 600,
    end: 400,
    region: "Eastern Ganga plain",
    description:
      "Jain tradition honours Mahavira as the twenty-fourth tirthankara of the present age. Discipline, non-violence and freedom from karmic bondage are central to the tradition.",
    significance:
      "Ascetics and householders participated in a religious world that questioned attachment and the causes of rebirth. Jain accounts understand the teaching as eternal, not newly invented by Mahavira.",
    limits:
      "The sixth–fifth-century setting is approximate. Traditional birth and death chronologies are not secure modern historical dates; later Jain philosophical formulations should not all be assigned to one teacher.",
    scope: "Historical setting of early Jain traditions, not Mahavira's lifespan.",
    source: "jain",
    locator: "Introduction; Metaphysics; Ethics",
    related: ["buddha-early-sangha", "mahajanapadas"],
    diagram: "oral",
    visualTitle: "Teaching, discipline, community",
    need: "ADD_JAIN_PASSAGE: a short permission-cleared translation with text, section, translator and edition; label later manuscript images by their actual date.",
  },
  {
    id: "taxila-northwest",
    periodId: "landscape-of-states",
    title: "Taxila: a northwestern crossroads",
    start: 600,
    end: 300,
    region: "Taxila, present-day Pakistan",
    description:
      "Bhir Mound preserves an early historic settlement at Taxila with house foundations and irregular streets. UNESCO places its probable beginnings in the sixth century BCE, in an Achaemenid setting.",
    significance:
      "The northwest connected the subcontinent with Iranian and Central Asian worlds. Taxila is a succession of settlements rather than one unchanged city.",
    limits:
      "The later grid-plan city of Sirkap must not illustrate sixth-century Bhir as if they were contemporary. The Achaemenid founding attribution remains qualified.",
    scope: "Early historic Bhir phase; not the whole chronology of Taxila.",
    source: "taxila",
    locator: "Outstanding Universal Value: Bhir and Sirkap",
    related: ["alexander-taxila", "early-punchmarked-money"],
    diagram: "network",
    visualTitle: "Connections across the northwest",
    need: "ADD_BHIR_PLAN: licensed Bhir Mound plan or photograph, explicitly distinguished from Sirkap.",
  },
  {
    id: "buddha-early-sangha",
    periodId: "landscape-of-states",
    title: "The Buddha and the early sangha",
    start: 500,
    end: 400,
    region: "Ganga plain; Lumbini in present-day Nepal",
    description:
      "Gautama Buddha's teaching addressed suffering, its causes and the path to liberation. Teachings passed through oral communities before being written down; Buddhist traditions preserve accounts of a monastic sangha and its supporters.",
    significance:
      "Ethics, meditation and understanding offered a path of practice. The teaching of impermanence and non-self became central to Buddhist philosophy.",
    limits:
      "Scholars disagree on the Buddha's dates. The fifth-century placement is a working historical window, not a settled birth–death range. Later biographies combine teaching, memory and devotional narrative.",
    scope: "Approximate fifth-century setting; traditional chronologies differ.",
    source: "buddha",
    locator: "1a Dates; 1b Sources; philosophical discussion",
    related: ["early-upanishads", "ashoka-lumbini", "sanchi-mauryan-core"],
    diagram: "oral",
    visualTitle: "An oral teaching community",
    need: "ADD_BUDDHIST_PASSAGE: a cited early discourse and licensed translation; distinguish a later Buddha statue from a contemporary portrait.",
  },
  {
    id: "early-punchmarked-money",
    periodId: "landscape-of-states",
    title: "Silver, weight and punched marks",
    start: 500,
    end: 300,
    region: "Gandhara and northern India",
    description:
      "Early coins were cut from silver and struck with separate punches. The British Museum documents fifth-century BCE monetary connections in Gandhara and a Magadha punch-marked example dated 350–300 BCE.",
    significance:
      "Small objects connect exchange, metal supplies and systems of weight. Different regional issues preceded and accompanied imperial coinage.",
    limits:
      "Dates for the earliest coinage are debated. An individual coin cannot establish universal cash use; uninscribed marks do not automatically identify a named king.",
    scope: "Selected museum-documented examples, not a claim for the first coin ever issued.",
    source: "money",
    locator: "Case 1: India; Coins in trade",
    related: ["ganga-urban-life", "mauryan-empire"],
    diagram: "coin",
    visualTitle: "Metal → weight → separate punches",
    need: "ADD_COIN_PHOTO: licensed obverse/reverse images with accession number, weight, dimensions and catalogue date.",
  },
  {
    id: "alexander-taxila",
    periodId: "landscape-of-states",
    title: "326 BCE: Alexander at Taxila",
    start: 326,
    region: "Northwestern subcontinent",
    description:
      "UNESCO associates Bhir Mound with Alexander's entry into Taxila in 326 BCE. This anchors a northwestern encounter within the city's longer history.",
    significance:
      "The episode belongs to the changing political connections that preceded Mauryan expansion.",
    limits:
      "This date is an event anchor, not the founding date of Taxila. It does not imply conquest of the whole subcontinent.",
    scope: "Recorded historical encounter in 326 BCE.",
    source: "taxila",
    locator: "Outstanding Universal Value: Bhir Mound",
    related: ["taxila-northwest", "mauryan-empire"],
    diagram: "network",
    visualTitle: "An encounter in a connected region",
    need: "ADD_CAMPAIGN_MAP: a scholarly route map with dated stops and uncertainty; avoid modern national borders as ancient boundaries.",
  },
  {
    id: "mauryan-empire",
    periodId: "an-empire-emerges",
    title: "Chandragupta and the Mauryan Empire",
    start: 321,
    end: 185,
    region: "Pataliputra and the wider subcontinent",
    description:
      "Chandragupta established Mauryan power around 321 BCE. Expansion connected the Ganga heartland with the northwest; his successor Bindusara extended rule into central and parts of southern India.",
    significance:
      "Pataliputra became an imperial centre. Greek diplomatic accounts, archaeology and later inscriptions provide different perspectives on this larger political world.",
    limits:
      "Founding dates vary around 322–321 BCE. Imperial reach changed over time; a single shaded map cannot demonstrate uniform control. Later literary descriptions are not contemporary administrative records.",
    scope: "Dynastic span; not the lifespan or reign of Chandragupta.",
    source: "maurya",
    locator: "Opening paragraphs: Chandragupta, Pataliputra and Bindusara",
    related: ["magadha-rise", "ashoka-rule", "mauryan-successors"],
    diagram: "network",
    visualTitle: "An empire with many regional centres",
    need: "ADD_PHASED_EMPIRE_MAP: separate Chandragupta, Bindusara and Ashoka layers with evidence and uncertain frontier zones.",
  },
  {
    id: "mauryan-ringstone",
    periodId: "an-empire-emerges",
    title: "A carved ring stone: evidence in miniature",
    start: 300,
    end: 100,
    region: "India; exact findspot not supplied in this catalogue record",
    description:
      "The Met preserves a stone fragment carved with goddesses and palm trees, accession 1987.142.391. Its catalogue dates it to the third–second century BCE and lists a diameter of 8.1 cm.",
    significance:
      "A close view reveals a material world beyond royal inscriptions. Compare the surviving carving with the limits of what an isolated museum object can tell us.",
    limits:
      "The catalogue's broad date extends beyond Mauryan rule. It does not establish an exact workshop, owner or ritual use. This is an object date, not a new political phase.",
    scope:
      "Museum attribution: third–second century BCE; intentionally overlaps the following era.",
    source: "ring",
    locator: "Artwork Details; object 1987.142.391",
    related: ["mauryan-empire", "mauryan-successors"],
    diagram: "ringstone",
    visualTitle: "Look closely at the surviving fragment",
    need: "OPTIONAL_OBJECT_CONTEXT: add a published findspot or functional study if securely linked to this accession; do not infer one from appearance.",
  },
  {
    id: "ashoka-rule",
    periodId: "an-empire-emerges",
    title: "Ashoka: kingship in his own inscriptions",
    start: 268,
    end: 232,
    region: "Mauryan domains",
    description:
      "Ashoka's rock and pillar inscriptions make royal policies unusually visible. Their author often calls himself Beloved-of-the-Gods and Piyadasi, and dates instructions by years since consecration.",
    significance:
      "These records let us compare what a ruler wished to communicate with later stories about his reign.",
    limits:
      "About 268–232 BCE is a conventional reign framework. Accession, coronation and regnal-year conversion are not interchangeable. Royal proclamations express intentions, not proof that every instruction was fulfilled.",
    scope: "Conventional reign window; inscription dates require their own regnal references.",
    source: "ashoka",
    locator: "Extract: reign chronology and inscriptions",
    related: ["kalinga-war", "ashoka-dhamma"],
    diagram: "pillar",
    visualTitle: "A royal message made durable",
    need: "ADD_INSCRIPTION_PHOTO: a licensed, located pillar or rock inscription with script, edict number and transcription reference.",
  },
  {
    id: "kalinga-war",
    periodId: "ashokan-evidence",
    title: "Kalinga: conquest and its human cost",
    start: 261,
    region: "Kalinga, eastern coast",
    description:
      "Major Rock Edict XIII dates Kalinga's conquest to Ashoka's eighth regnal year. It reports 150,000 people deported, 100,000 killed and many further deaths, then describes the ruler's remorse.",
    significance:
      "The inscription foregrounds suffering and separation alongside victory. Read its figures as claims made by the royal text, not independently verified casualty counts.",
    limits:
      "About 261 BCE is a conventional conversion of the regnal date. The edict is not an eyewitness census or proof of a single overnight religious conversion.",
    scope: "Approximate absolute date of the campaign, not the date every copy was carved.",
    source: "kalinga",
    locator: "Edict XIII, Greek text and translation",
    related: ["ashoka-rule", "ashoka-dhamma"],
    diagram: "pillar",
    visualTitle: "Read the claim; examine its limits",
    need: "ADD_EDICT_COMPARISON: licensed photographs and scholarly translations of identified versions of Edict XIII.",
  },
  {
    id: "ashoka-dhamma",
    periodId: "ashokan-evidence",
    title: "Dhamma: welfare, restraint and communication",
    start: 260,
    end: 232,
    region: "Rock and pillar sites across Mauryan domains",
    description:
      "Edicts promote care for living beings, respect among religious communities and responsibility toward relatives and dependants. They mention medical provision and officials called dhamma-mahamatras.",
    significance:
      "Public inscriptions link moral language to government. Their different locations and audiences invite comparison rather than treatment as one uniform document.",
    limits:
      "Dhamma is not simply a name for imposing Buddhist doctrine. Statements about welfare and restraint are royal claims; punishments and unequal social relations persisted.",
    scope:
      "Broad inscriptional programme during Ashoka's reign, not an exact beginning for every measure.",
    source: "edicts",
    locator: "Major Rock Edicts II, V and XII; Pillar Edicts",
    related: ["kalinga-war", "barabar-ajivikas", "ashoka-lumbini"],
    diagram: "pillar",
    visualTitle: "Messages across a diverse realm",
    need: "ADD_SCRIPT_PANEL: verified Brahmi, Kharosthi, Greek and Aramaic examples, each tied to its actual inscription and translation.",
  },
  {
    id: "barabar-ajivikas",
    periodId: "ashokan-evidence",
    title: "Barabar: stone shelters for ascetics",
    start: 257,
    end: 200,
    region: "Barabar and Nagarjuni hills, Bihar",
    description:
      "Polished rock-cut chambers preserve Mauryan patronage of ascetic communities. The Sudama dedication records Ashoka's twelfth year; inscriptions also connect Dasaratha with the Ajivikas at Nagarjuni.",
    significance:
      "Royal religious patronage extended beyond Buddhist establishments. Architecture and dedicatory inscriptions together identify patrons and intended beneficiaries.",
    limits:
      "The date window follows the conventional Sudama date and later Mauryan patronage. Do not assign all seven caves one date, patron or dedication; the Ajivikas were a distinct tradition.",
    scope:
      "Selected dedications from around 257 BCE into the later third century; individual caves differ.",
    source: "caves",
    locator: "Section 3.3, history; Sudama dedication",
    related: ["ashoka-dhamma", "mauryan-successors"],
    diagram: "cave",
    visualTitle: "A chamber cut from living rock",
    need: "ADD_CAVE_PLAN: a licensed measured plan and interior photograph naming the cave, dedication and scale.",
  },
  {
    id: "sanchi-mauryan-core",
    periodId: "ashokan-evidence",
    title: "Sanchi: an early core, centuries of additions",
    start: 250,
    end: 200,
    region: "Sanchi, Madhya Pradesh",
    description:
      "Sanchi's beginnings as a Buddhist centre are associated with Ashoka. A brick stupa and a monumental pillar preceded the enlargement and elaborate gateways visible in later phases.",
    significance:
      "A monument can preserve many periods at once. The stupa's growth connects Mauryan patronage to subsequent communities and donors.",
    limits:
      "This broad third-century window is not an exact construction date. The great stupa's present appearance includes post-Mauryan work; its famous gateways must not be shown as entirely Ashokan.",
    scope: "Approximate early monumental phase; later phases remain labelled as later.",
    source: "sanchi",
    locator: "Outstanding Universal Value: synthesis and architectural phases",
    related: ["buddha-early-sangha", "mauryan-successors"],
    diagram: "stupa",
    visualTitle: "Core and later envelope",
    need: "ADD_SANCHI_PHASES: the site photograph is included; add a published phase plan identifying the early core and later construction.",
  },
  {
    id: "ashoka-lumbini",
    periodId: "ashokan-evidence",
    title: "Lumbini: a visit recorded in stone",
    start: 249,
    region: "Lumbini, Nepal",
    description:
      "Ashoka's pillar at Lumbini records his visit to the place honoured as the Buddha's birthplace. UNESCO dates the commemorative pillar to 249 BCE.",
    significance:
      "A surviving inscription provides a third-century BCE anchor for royal pilgrimage and the recognition of a sacred place.",
    limits:
      "The pillar was erected long after the Buddha's lifetime. It does not settle the disputed year of his birth; traditional dates should remain separate from the inscription's date.",
    scope: "Conventional absolute date for the commemorative visit and pillar.",
    source: "lumbini",
    locator: "Brief synthesis; authenticity",
    related: ["buddha-early-sangha", "ashoka-rule"],
    diagram: "pillar",
    visualTitle: "Place, memory and a dated visit",
    need: "ADD_LUMBINI_RECORD: the pillar photograph is included; add a scholarly line-by-line translation with regnal dating.",
  },
  {
    id: "mauryan-successors",
    periodId: "after-mauryas",
    title: "After Ashoka: a changing political landscape",
    start: 185,
    region: "Former Mauryan territories",
    description:
      "Mauryan rule continued after Ashoka, ending conventionally around 185 BCE. Political authority became more regional, while sites such as Sanchi continued to develop under later patrons.",
    significance:
      "The next chapter can follow regional kingdoms and expanding artistic and trading connections without treating the end of a dynasty as the end of urban life.",
    limits:
      "There is no single adequately demonstrated cause of imperial decline. Do not turn later stories of dynastic replacement into a simultaneous collapse across the subcontinent.",
    scope: "Conventional dynastic endpoint; the transition unfolded over preceding decades.",
    source: "maurya",
    locator: "Dynastic chronology in title and opening",
    related: ["mauryan-empire", "sanchi-mauryan-core", "mauryan-ringstone"],
    diagram: "network",
    visualTitle: "From imperial rule to regional histories",
    need: "ADD_NEXT_CHAPTER: dated evidence for Shunga, Indo-Greek, Satavahana and other regional histories; map each on its own chronology.",
  },
];

export const empireEvents: readonly HistoricalEvent[] = empireEntries.map((entry) =>
  enrichEmpireEvent({
    id: entry.id,
    title: entry.title,
    dateStart: bce(entry.start),
    ...(entry.end ? { dateEnd: bce(entry.end) } : {}),
    approximateDate: entry.id !== "alexander-taxila",
    contentStatus: "researched",
    dateScope: entry.scope,
    description: entry.description,
    significance: entry.significance,
    regions: [entry.region],
    categories: ["early-historic", "evidence"],
    people: [],
    relatedEvents: entry.related,
    sources: [
      ...new Map(
        [s[entry.source], ...(empireDetails[entry.id] ?? []).map((d) => d.source)].map((source) => [
          source.id,
          source,
        ]),
      ).values(),
    ],
    details: (empireDetails[entry.id] ?? []).map((d) => ({
      title: d.title,
      text: d.text,
      sourceIds: [d.source.id],
    })),
    imageNeeds: empireImageNeeds[entry.id] ? [empireImageNeeds[entry.id]!] : [],
    citations: [
      { sourceId: s[entry.source].id, locator: entry.locator },
      ...(empireDetails[entry.id] ?? []).map((d) => ({
        sourceId: d.source.id,
        locator: d.locator,
      })),
    ],
    interpretationNotes: [
      { kind: "uncertainty", text: entry.limits, sourceIds: [s[entry.source].id] },
    ],
    visualReference: { id: `exhibit-${entry.id}`, kind: "svg" },
    contentNeeds: [
      { tag: entry.need.split(": ")[0]!, instruction: entry.need.split(": ").slice(1).join(": ") },
    ],
  }),
);

export const empireEventsForPeriod = (periodId: EmpirePeriodId): readonly HistoricalEvent[] => {
  const ids = new Set(
    empireEntries.filter((entry) => entry.periodId === periodId).map((entry) => entry.id),
  );
  return empireEvents.filter((event) => ids.has(event.id));
};
