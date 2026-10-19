import { bce, yearsAgo } from "@/lib/historical-date";
import type { HistoricalEvent, HistoricalSource, HistoricalPeriod } from "@/types/history";
import { prehistorySources } from "./sources";

/** Research expansion checked 19 October 2026. Dates retain each source's scope. */
export const regionalSources = {
  singi: {
    id: "blinkhorn-2021-singi",
    title:
      "Constraining the chronology and ecology of Late Acheulean and Middle Palaeolithic occupations at the margins of the monsoon",
    author: "James Blinkhorn et al.",
    publicationYear: 2021,
    publisher: "Scientific Reports",
    url: "https://www.nature.com/articles/s41598-021-98897-7",
  },
  sandhav: {
    id: "sandhav-coastal-record",
    title:
      "The first directly dated evidence for Palaeolithic occupation on the Indian coast at Sandhav, Kachchh",
    publisher: "Quaternary Science Reviews",
    url: "https://www.sciencedirect.com/science/article/pii/S0277379119306730",
  },
  jwalapuram9: {
    id: "clarkson-2009-jwalapuram9",
    title:
      "The oldest and longest enduring microlithic sequence in India: 35 000 years of modern human occupation and change at the Jwalapuram Locality 9 rockshelter",
    author: "Chris Clarkson et al.",
    publicationYear: 2009,
    publisher: "Antiquity",
    url: "https://doi.org/10.1017/S0003598X0009846X",
  },
  mesolithic: {
    id: "ignou-early-cultures",
    title: "Reconstructing Ancient Indian History: prehistoric cultures",
    publisher: "IGNOU, BHIC-101, Block 1",
    url: "https://egyankosh.ac.in/bitstream/123456789/64776/1/BLOCK%201.pdf",
  },
  agriculture: {
    id: "ignou-agriculture-unit7",
    title: "Origin of Agriculture and Domestication of Animals",
    publisher: "IGNOU, Unit 7",
    url: "https://egyankosh.ac.in/bitstream/123456789/22402/1/Unit-7.pdf",
  },
  neolithic: {
    id: "inflibnet-neolithic",
    title: "Neolithic Revolution",
    author: "D. K. Bhattacharya",
    publisher: "INFLIBNET / e-PG Pathshala",
    url: "https://ebooks.inflibnet.ac.in/antp03/chapter/neolithic-revolution/",
  },
  kashmir: {
    id: "lone-kashmir-neolithic",
    title: "An Appraisal of the Prehistoric Archaeology of Kashmir",
    author: "Abdul Rashid Lone",
    publisher: "University of Kashmir, Institute of Kashmir Studies",
    url: "https://iks.uok.edu.in/Files/3a963738-5d67-4444-aeba-edda77283c15/Journal/75105ea0-a03c-4080-86a0-baf38a1312a8.pdf",
  },
  copper: {
    id: "inflibnet-copper-iron",
    title: "Copper and Iron age: Features and Distribution",
    author: "Ashutosh Saxena",
    publisher: "INFLIBNET / e-PG Pathshala",
    url: "https://ebooks.inflibnet.ac.in/antp03/chapter/copper-and-iron-age-features-and-distribution/",
  },
} as const satisfies Record<string, HistoricalSource>;

type Entry = { periodId: string; event: HistoricalEvent };
function record(
  periodId: string,
  event: Omit<
    HistoricalEvent,
    "contentStatus" | "approximateDate" | "people" | "sources" | "citations" | "interpretationNotes"
  >,
  source: HistoricalSource,
  locator: string,
  note: string,
): Entry {
  return {
    periodId,
    event: {
      ...event,
      contentStatus: "researched",
      approximateDate: true,
      people: [],
      sources: [source],
      citations: [{ sourceId: source.id, locator }],
      interpretationNotes: [{ kind: "uncertainty", text: note, sourceIds: [source.id] }],
    },
  };
}

export const regionalExpansion: readonly Entry[] = [
  record(
    "lower-palaeolithic",
    {
      id: "singi-talav-acheulian",
      title: "Acheulian tools at the desert margin",
      dateStart: yearsAgo(177000),
      description:
        "Singi Talav, near Didwana, preserves a handaxe-and-cleaver assemblage in Layer 4. Luminescence dating places this occupation around 177,000 years ago.",
      significance:
        "Acheulian traditions persisted in Rajasthan after Middle Palaeolithic technology appeared at Attirampakkam. Regional periods overlap rather than changing together.",
      regions: ["Rajasthan, India"],
      categories: ["stone-tools", "environment"],
      relatedEvents: ["attirampakkam-middle-palaeolithic", "lower-palaeolithic-scaffold"],
    },
    regionalSources.singi,
    "Results: dating; Discussion: Layer 4",
    "The Layer 4 estimate is 176.67 ± 16.83 ka. It dates a particular horizon, not all occupation at Singi Talav. The technological attribution of younger Layer 3 remains debated.",
  ),
  record(
    "middle-palaeolithic",
    {
      id: "sandhav-coastal-occupation",
      title: "Toolmaking near the coast",
      dateStart: yearsAgo(114000),
      description:
        "Survey and test excavation at Sandhav in Kachchh document Middle Palaeolithic occupation around 114,000 years ago, about 25 kilometres from today's shoreline.",
      significance:
        "The site extends the dated record to a near-coastal landscape, complementing inland river-valley sites.",
      regions: ["Gujarat, India"],
      categories: ["stone-tools", "landscape"],
      relatedEvents: ["dhaba-toba-sequence"],
    },
    regionalSources.sandhav,
    "Abstract and highlights",
    "The age is a rounded research estimate. The modern distance to the coast is not a reconstruction of the ancient shoreline; this site alone does not prove a coastal migration route or identify a human species.",
  ),
  record(
    "upper-palaeolithic",
    {
      id: "jwalapuram-rockshelter",
      title: "A rockshelter's long record",
      dateStart: yearsAgo(35000),
      description:
        "Jwalapuram Locality 9 has a microlithic sequence extending back about 35,000 years. Its excavated assemblages include stone tools, beads and worked bone.",
      significance:
        "The rockshelter adds evidence for activities beyond tool manufacture. It is a different archaeological context from the older Toba-associated deposits.",
      regions: ["Andhra Pradesh, India"],
      categories: ["stone-tools", "ornaments", "settlement"],
      relatedEvents: ["jwalapuram-toba", "dhaba-microliths"],
    },
    regionalSources.jwalapuram9,
    "Abstract; Antiquity 83 (2009), pp. 326–348",
    "The starting age follows the paper's rounded summary. Finds from the whole sequence are not all 35,000 years old. The paper's historical claim to the oldest sequence should not override subsequently published older microblade evidence.",
  ),
  record(
    "mesolithic",
    {
      id: "mesolithic-regional-overview",
      title: "Many ways of living with microliths",
      dateStart: bce(10000),
      dateEnd: bce(2000),
      description:
        "An IGNOU synthesis places dated Indian Mesolithic communities broadly between 10,000 and 2,000 BCE. Sites preserve small stone tools alongside evidence of habitation, burials and other activities.",
      significance:
        "This regional overview bridges the late Pleistocene record and later foraging communities. It is not a single site or a nationwide beginning of microlith production.",
      regions: ["Multiple regions of India"],
      categories: ["regional-overview", "subsistence"],
      relatedEvents: ["bagor-mesolithic", "chopani-mando-late-phase"],
    },
    regionalSources.mesolithic,
    "Mesolithic cultures, p. 60",
    "10,000–2,000 BCE is a broad teaching framework from a synthesis, not one occupation span. Microliths existed much earlier and foraging communities overlapped with farmers and urban societies.",
  ),
  record(
    "mesolithic",
    {
      id: "chopani-mando-late-phase",
      title: "Huts and pottery in the Belan Valley",
      dateStart: bce(3385),
      dateEnd: bce(3135),
      description:
        "The late phase at Chopani Mando combines hut floors, microliths, grinding equipment and handmade pottery. The cited synthesis reports gathering of wild rice without established plant or animal domestication.",
      significance:
        "Pottery and more settled activity need not mean that a community already depended on farming.",
      regions: ["Uttar Pradesh, India"],
      categories: ["settlement", "pottery", "subsistence"],
      relatedEvents: ["mahagara-neolithic", "lahuradewa-rice-use"],
    },
    regionalSources.agriculture,
    "Discussion of the Belan Valley, p. 12",
    "3385–3135 BC is the late-phase range reproduced in this synthesis, not the date of the entire site. Its calibration basis needs checking against the original samples before treating the endpoints as precise calendar limits.",
  ),
  record(
    "neolithic",
    {
      id: "gufkral-aceramic",
      title: "Gufkral before pottery",
      dateStart: bce(2787),
      dateEnd: bce(2350),
      description:
        "Gufkral's Period IA is described as an aceramic Neolithic phase, followed by ceramic phases. Its sequence provides a second Kashmir comparison alongside Burzahom.",
      significance:
        "The sequence separates the beginnings of Neolithic settlement from the later appearance of pottery at this site.",
      regions: ["Kashmir Valley, India"],
      categories: ["settlement", "neolithic"],
      relatedEvents: ["burzahom-neolithic"],
    },
    regionalSources.kashmir,
    "Gufkral discussion and Period IA chronology",
    "The 2787–2350 BCE interval follows this published synthesis; other accounts use different boundaries. It is a phase estimate, not an exact founding date, and does not date Gufkral's later megalithic occupation.",
  ),
  record(
    "neolithic",
    {
      id: "mahagara-neolithic",
      title: "Farming in the Belan Valley",
      dateStart: bce(1770),
      dateEnd: bce(1375),
      description:
        "Mahagara belongs to the Vindhyan Neolithic record discussed in the IGNOU synthesis. Rice cultivation forms part of this regional account of food production.",
      significance:
        "Its second-millennium dates should not be replaced by the much earlier, disputed rice claims associated with nearby Koldihwa.",
      regions: ["Uttar Pradesh, India"],
      categories: ["farming", "neolithic"],
      relatedEvents: ["chopani-mando-late-phase", "lahuradewa-rice-use"],
    },
    regionalSources.agriculture,
    "Belan Valley chronology, p. 12",
    "1770–1375 BC is the reported range in this synthesis, not a newly calibrated model. Sample associations and calibration need the original report; dates from neighbouring sites cannot be transferred here.",
  ),
  record(
    "chalcolithic",
    {
      id: "kayatha-culture",
      title: "Copper and stone in the Malwa region",
      dateStart: bce(2000),
      dateEnd: bce(1800),
      description:
        "Kayatha assemblages include painted pottery, copper implements, stone blades and beads. The teaching synthesis uses an approximate 2000–1800 BCE chronology.",
      significance: "Metalworking coexisted with stone technology in regional village communities.",
      regions: ["Madhya Pradesh, India"],
      categories: ["pottery", "metalworking", "settlement"],
      relatedEvents: ["malwa-villages", "balathal-ahar-banas"],
    },
    prehistorySources.chalcolithic,
    "Section 5: Kayatha Culture",
    "This is the cited module's preliminary chronology, not an agreed calibrated range for every Kayatha site. Revised excavation chronologies should be recorded explicitly when available.",
  ),
  record(
    "chalcolithic",
    {
      id: "malwa-villages",
      title: "Homes and harvests at Navdatoli",
      dateStart: bce(1700),
      dateEnd: bce(1500),
      description:
        "Navdatoli preserves round and rectangular wattle-and-daub houses associated with the Malwa tradition. Farming, animal husbandry and hunting contributed to subsistence.",
      significance:
        "Domestic archaeology connects pottery-based cultural labels with everyday work and food preparation.",
      regions: ["Madhya Pradesh, India"],
      categories: ["settlement", "farming", "pottery"],
      relatedEvents: ["kayatha-culture", "inamgaon-settlement"],
    },
    prehistorySources.chalcolithic,
    "Sections 2 and 6: Malwa Culture",
    "1700–1500 BCE follows this teaching module's Malwa framework. Regional and site-specific chronologies differ; it is not a precise lifespan for one Navdatoli house.",
  ),
];

type Context = NonNullable<HistoricalPeriod["context"]>[number];
export const regionalContext: Readonly<Record<string, readonly Context[]>> = {
  "before-history": [
    {
      title: "What survives, and what does not",
      text: "Tools, deposits, plant remains, bones and buildings answer different questions. Archaeological culture labels describe material patterns; they do not by themselves identify a language, ethnicity or human species. This chapter is a sourced overview, not an exhaustive catalogue of every find.",
      sources: [prehistorySources.middle, regionalSources.mesolithic],
    },
    {
      title: "Reading overlapping dates",
      text: "The scroll follows starting dates, with equal reading space per record rather than a uniform time scale. A regional overview can span later events. BC and BCE name the same calendar era; ka means thousands of years. Published radiocarbon ages must be calibrated before conversion into calendar years.",
      sources: [prehistorySources.rice, regionalSources.singi],
    },
  ],
  "lower-palaeolithic": [
    {
      title: "Isampur: evidence for making tools",
      text: "Excavation at Isampur in Karnataka documents an Acheulian workshop. Production contexts complement finished handaxes by showing toolmaking activity. A separate dated scene awaits a reviewed chronology and specimen-linked visuals.",
      sources: [prehistorySources.isampur],
    },
  ],
  mesolithic: [
    {
      title: "Burials and communities in the Ganges plain",
      text: "Sarai Nahar Rai, Mahadaha and Damdama preserve important Mesolithic burial evidence. Skeletons and burial contexts can inform research into life histories and mortuary practices; specific dates and interpretations require the individual excavation reports.",
      sources: [prehistorySources.bagor],
    },
  ],
  neolithic: [
    {
      title: "Chirand and the eastern record",
      text: "Chirand in Bihar is notable for bone and antler implements alongside stone tools. Northeastern sites such as Daojali Hading add shouldered stone tools and cord-impressed pottery to the regional picture. These sites require their own phase chronologies; they are not automatically contemporary with Kashmir's Neolithic.",
      sources: [regionalSources.neolithic],
    },
    {
      title: "Koldihwa: keep rice claims separate",
      text: "Early rice claims from Koldihwa involve disputed associations between dated material and plant remains. Keep evidence for gathering, cultivation and domestication distinct rather than treating any rice grain as proof of fully domesticated rice.",
      sources: [prehistorySources.rice, regionalSources.agriculture],
    },
  ],
  chalcolithic: [
    {
      title: "Jorwe communities and the later transition",
      text: "Jorwe communities in Maharashtra used painted pottery and both stone and copper implements. Inamgaon provides evidence for houses and food production. Iron-using and megalithic traditions require separate regional chronologies rather than a single nationwide end to prehistory.",
      sources: [regionalSources.copper],
    },
  ],
};
