import { bce, yearsAgo } from "@/lib/historical-date";
import type { HistoricalEvent } from "@/types/history";
import { prehistorySources as sources } from "./sources";

/** Site-specific dates, not universal start/end boundaries for an archaeological period. */
export const middlePalaeolithicEvents: readonly HistoricalEvent[] = [
  {
    id: "jwalapuram-toba",
    title: "Tools above and below the ash",
    dateStart: yearsAgo(74_000),
    approximateDate: true,
    contentStatus: "researched",
    description:
      "At Jwalapuram in the Jurreru Valley, Middle Palaeolithic tools occur below and above deposits from the Toba eruption. Their broad technological continuity suggests regional persistence across the volcanic event.",
    significance:
      "Excavated layers let researchers compare toolmaking before and after an environmental disruption.",
    categories: ["stone-tools", "environment", "excavation"],
    regions: ["Andhra Pradesh, India"],
    archaeologicalSites: [{ id: "jwalapuram", name: "Jwalapuram" }],
    people: [],
    relatedEvents: ["dhaba-toba-sequence"],
    sources: [sources.jwalapuram],
    citations: [{ sourceId: sources.jwalapuram.id, locator: "Abstract; Science 317, pp. 114–116" }],
    interpretationNotes: [
      {
        kind: "uncertainty",
        text: "74,000 years is an approximate eruption anchor, not the date of every tool or the duration of occupation. Technological continuity alone does not identify a human species or establish uninterrupted occupation.",
        sourceIds: [sources.jwalapuram.id],
      },
    ],
  },
  {
    id: "attirampakkam-middle-palaeolithic",
    title: "A changing stone-tool tradition",
    dateStart: yearsAgo(385_000),
    dateEnd: yearsAgo(172_000),
    approximateDate: true,
    contentStatus: "researched",
    description:
      "At Attirampakkam, smaller tools and prepared-core techniques mark a transition from Acheulian to Middle Palaeolithic technology. Luminescence dating places this transition around 385,000 years ago.",
    significance:
      "The site's sequence changes the timing of a major technological transition in South Asia.",
    categories: ["stone-tools", "technology"],
    regions: ["Tamil Nadu, India"],
    archaeologicalSites: [{ id: "attirampakkam", name: "Attirampakkam" }],
    people: [],
    relatedEvents: ["lower-palaeolithic-scaffold", "dhaba-toba-sequence"],
    sources: [sources.middle],
    citations: [{ sourceId: sources.middle.id, locator: "Abstract; Nature 554, pp. 97–101" }],
    interpretationNotes: [
      {
        kind: "uncertainty",
        text: "Published estimates are 385 ± 64 ka and 172 ± 41 ka. These are site-specific dates; tools alone do not identify their makers as Homo sapiens.",
        sourceIds: [sources.middle.id],
      },
    ],
  },
  {
    id: "dhaba-toba-sequence",
    title: "Life across the Toba eruption",
    dateStart: yearsAgo(80_000),
    dateEnd: yearsAgo(65_000),
    approximateDate: true,
    contentStatus: "researched",
    description:
      "Stone tools at Dhaba in the Middle Son Valley occur in deposits spanning the Toba eruption, about 74,000 years ago. The sequence records continuity in toolmaking across this interval.",
    significance:
      "A local archaeological sequence helps test claims about the eruption's effects on human populations.",
    categories: ["stone-tools", "environment"],
    regions: ["Madhya Pradesh, India"],
    archaeologicalSites: [{ id: "dhaba", name: "Dhaba" }],
    people: [],
    relatedEvents: ["dhaba-microliths"],
    sources: [sources.dhaba],
    citations: [{ sourceId: sources.dhaba.id, locator: "Abstract and Results: IRSL chronology" }],
    interpretationNotes: [
      {
        kind: "uncertainty",
        text: "The bracketing dates are 79.6 ± 3.2 and 65.2 ± 3.1 ka. A local tool sequence is not proof that the eruption had no effects elsewhere. Attribution to Homo sapiens is an interpretation, not a fossil identification.",
        sourceIds: [sources.dhaba.id],
      },
    ],
  },
];

export const upperPalaeolithicEvents: readonly HistoricalEvent[] = [
  {
    id: "dhaba-microliths",
    title: "Small tools, early origins",
    dateStart: yearsAgo(48_000),
    approximateDate: true,
    contentStatus: "researched",
    description:
      "Microlithic tools appear at Dhaba around 48,000 years ago, alongside some continuing Levallois technology. Small-tool traditions therefore predate the later Mesolithic.",
    categories: ["stone-tools", "technology"],
    regions: ["Madhya Pradesh, India"],
    archaeologicalSites: [{ id: "dhaba", name: "Dhaba" }],
    people: [],
    relatedEvents: ["dhaba-toba-sequence", "mehtakheri-microblades"],
    sources: [sources.dhaba],
    citations: [{ sourceId: sources.dhaba.id, locator: "Discussion; strata J and E" }],
    interpretationNotes: [
      {
        kind: "scholarly-interpretation",
        text: "Grouped here as a Late Palaeolithic development; this does not establish a single nationwide Upper Palaeolithic boundary.",
        sourceIds: [sources.dhaba.id],
      },
    ],
  },
  {
    id: "mehtakheri-microblades",
    title: "Microblades in the Narmada Valley",
    dateStart: yearsAgo(45_000),
    approximateDate: true,
    contentStatus: "researched",
    description:
      "Optically dated deposits at Mehtakheri contain microblade assemblages about 45,000 years old. The site adds another dated example of small-blade technology in central India.",
    categories: ["stone-tools"],
    regions: ["Madhya Pradesh, India"],
    archaeologicalSites: [{ id: "mehtakheri", name: "Mehtakheri" }],
    people: [],
    relatedEvents: ["dhaba-microliths"],
    sources: [sources.microblades],
    citations: [
      { sourceId: sources.microblades.id, locator: "Abstract and optical-dating results" },
    ],
    interpretationNotes: [
      {
        kind: "uncertainty",
        text: "The age dates an archaeological context. It should not be presented as the exact arrival date of modern humans in India.",
        sourceIds: [sources.microblades.id],
      },
    ],
  },
];

export const mesolithicEvents: readonly HistoricalEvent[] = [
  {
    id: "bagor-mesolithic",
    title: "A microlith-using community at Bagor",
    dateStart: bce(5000),
    dateEnd: bce(2800),
    approximateDate: true,
    contentStatus: "researched",
    description:
      "Bagor, beside the Kothari River in Rajasthan, preserves a settlement with abundant microliths, animal remains and burials. Its earliest phase illustrates a local community rather than a uniform way of life across the subcontinent.",
    categories: ["settlement", "stone-tools", "burial"],
    regions: ["Rajasthan, India"],
    archaeologicalSites: [{ id: "bagor", name: "Bagor" }],
    people: [],
    relatedEvents: [],
    sources: [sources.bagor],
    citations: [
      { sourceId: sources.bagor.id, locator: "Bagor: Cultural Sequence, Phase I, printed p. 23" },
    ],
    interpretationNotes: [
      {
        kind: "uncertainty",
        text: "The approximate 5000–2800 BCE range follows the teaching synthesis. It is not a newly calibrated radiocarbon model or the beginning of the Indian Mesolithic; details of early herding need specialist review.",
        sourceIds: [sources.bagor.id],
      },
    ],
  },
];

export const neolithicEvents: readonly HistoricalEvent[] = [
  {
    id: "lahuradewa-rice-use",
    title: "Early rice use at Lahuradewa",
    dateStart: bce(6400),
    approximateDate: true,
    contentStatus: "researched",
    description:
      "Charred rice grains at Lahuradewa in the Middle Ganges region are reported from the seventh millennium BCE. They document early rice use; whether this was wild-rice gathering, cultivation or domesticated rice is debated.",
    categories: ["plants", "subsistence"],
    regions: ["Uttar Pradesh, India"],
    archaeologicalSites: [{ id: "lahuradewa", name: "Lahuradewa" }],
    people: [],
    relatedEvents: [],
    sources: [sources.rice],
    citations: [{ sourceId: sources.rice.id, locator: "Origins of Rice in the Ganges" }],
    interpretationNotes: [
      {
        kind: "uncertainty",
        text: "The review reports 6409 BCE (8359 cal BP), rounded here for the timeline. Rice presence does not by itself establish domestication. Grouping under Neolithic themes is not a claim that farming began everywhere at this date.",
        sourceIds: [sources.rice.id],
      },
    ],
  },
  {
    id: "mehrgarh-aceramic-cemetery",
    title: "Mehrgarh: farming and a revised chronology",
    dateStart: bce(5250),
    dateEnd: bce(4650),
    approximateDate: true,
    contentStatus: "researched",
    description:
      "Mehrgarh in present-day Pakistan is a key early farming settlement. A 2025 tooth-enamel study proposes a much later chronology for its aceramic cemetery than the familiar seventh-millennium BCE account.",
    categories: ["farming", "settlement", "dating"],
    regions: ["Balochistan, Pakistan"],
    archaeologicalSites: [{ id: "mehrgarh", name: "Mehrgarh" }],
    people: [],
    relatedEvents: ["harappa-ravi-phase"],
    sources: [sources.mehrgarh, sources.mehrgarhEarlier],
    citations: [
      { sourceId: sources.mehrgarh.id, locator: "Abstract and chronology discussion" },
      {
        sourceId: sources.mehrgarhEarlier.id,
        locator: "Earlier chronology in archaeologists' responses",
      },
    ],
    interpretationNotes: [
      {
        kind: "uncertainty",
        text: "The timeline follows the 2025 study's approximate 5250–4650 cal BCE envelope. Its model places the cemetery's beginning between 5200 and 4900 BCE. Earlier accounts use about 7000 BCE; a cemetery model should not silently be treated as a settled date for every phase of the site.",
        sourceIds: [sources.mehrgarh.id, sources.mehrgarhEarlier.id],
      },
    ],
  },
  {
    id: "burzahom-neolithic",
    title: "Living at Burzahom",
    dateStart: bce(3000),
    approximateDate: true,
    contentStatus: "researched",
    description:
      "At Burzahom in Kashmir, excavations reveal pit dwellings, later surface structures, and stone and bone tools. The site's changing architecture offers a regional view of Neolithic life.",
    categories: ["settlement", "architecture", "tools"],
    regions: ["Kashmir, India"],
    archaeologicalSites: [{ id: "burzahom", name: "Burzahom" }],
    people: [],
    relatedEvents: [],
    sources: [sources.burzahom],
    citations: [{ sourceId: sources.burzahom.id, locator: "Description and cultural sequence" }],
    interpretationNotes: [
      {
        kind: "uncertainty",
        text: "The submission describes an overall sequence around 3000–1000 BCE, including Neolithic, Megalithic and Early Historical phases. That entire range must not be labelled Neolithic. This is a Tentative List submission, not an inscribed World Heritage designation.",
        sourceIds: [sources.burzahom.id],
      },
    ],
  },
  {
    id: "southern-neolithic-ashmounds",
    title: "Cattle and the southern ashmounds",
    dateStart: bce(3000),
    dateEnd: bce(1200),
    approximateDate: true,
    contentStatus: "researched",
    description:
      "Southern Neolithic communities left large ashmounds formed by burning accumulated cattle dung. These features connect herding, settlement and the use of the landscape in the southern Deccan.",
    categories: ["herding", "settlement", "landscape"],
    regions: ["Southern Deccan, India"],
    people: [],
    relatedEvents: [],
    sources: [sources.ashmounds, sources.southernDates],
    citations: [
      { sourceId: sources.ashmounds.id, locator: "Abstract" },
      { sourceId: sources.southernDates.id, locator: "Extract; Antiquity 81, pp. 755–778" },
    ],
    interpretationNotes: [
      {
        kind: "scholarly-interpretation",
        text: "3000–1200 BCE is a broad regional framework, not the duration of one mound. Proposed ritual functions are interpretations. These communities overlapped with urban societies elsewhere.",
        sourceIds: [sources.ashmounds.id, sources.southernDates.id],
      },
    ],
  },
];

export const chalcolithicEvents: readonly HistoricalEvent[] = [
  {
    id: "inamgaon-settlement",
    title: "Houses beside the Ghod",
    dateStart: bce(1600),
    dateEnd: bce(700),
    approximateDate: true,
    contentStatus: "researched",
    description:
      "Excavations at Inamgaon in Maharashtra exposed a substantial Chalcolithic settlement beside the Ghod River. Surviving house plans make it possible to study how its inhabitants organised domestic space.",
    significance:
      "Later regional prehistory continued after the rise of Indus cities elsewhere in the subcontinent.",
    categories: ["settlement", "architecture", "chalcolithic"],
    regions: ["Maharashtra, India"],
    archaeologicalSites: [{ id: "inamgaon", name: "Inamgaon" }],
    people: [],
    relatedEvents: ["balathal-ahar-banas"],
    sources: [sources.inamgaon],
    citations: [
      { sourceId: sources.inamgaon.id, locator: "Opening chronology and settlement description" },
    ],
    interpretationNotes: [
      {
        kind: "uncertainty",
        text: "The approximate 1600–700 BCE span follows the excavation account's overall chronology. It includes different phases and is not a freshly calibrated model or the age of a single house.",
        sourceIds: [sources.inamgaon.id],
      },
    ],
  },
  {
    id: "balathal-ahar-banas",
    title: "Village life at Balathal",
    dateStart: bce(3700),
    dateEnd: bce(1830),
    approximateDate: true,
    contentStatus: "researched",
    description:
      "Balathal in Rajasthan preserves Ahar-Banas Chalcolithic occupation, with stone and mud-built houses, storage facilities and evidence of food processing. Copper-age village traditions developed alongside other regional lifeways.",
    categories: ["settlement", "food-processing", "chalcolithic"],
    regions: ["Rajasthan, India"],
    archaeologicalSites: [{ id: "balathal", name: "Balathal" }],
    people: [],
    relatedEvents: [],
    sources: [sources.chalcolithic],
    citations: [
      {
        sourceId: sources.chalcolithic.id,
        locator: "Balathal excavation and radiocarbon chronology",
      },
    ],
    interpretationNotes: [
      {
        kind: "uncertainty",
        text: "The 3700–1830 calibrated BCE range follows this synthesis for Balathal. Other publications use different rounded limits; it is not a nationwide Chalcolithic range.",
        sourceIds: [sources.chalcolithic.id],
      },
    ],
  },
];

export const harappanTransitionEvents: readonly HistoricalEvent[] = [
  {
    id: "harappa-ravi-phase",
    title: "Harappa before the great city",
    dateStart: bce(3300),
    dateEnd: bce(2800),
    approximateDate: true,
    contentStatus: "researched",
    description:
      "Ravi-phase levels at Harappa contain houses, pottery and bead-making debris. Imported raw materials show connections with places beyond the settlement before its mature urban phase.",
    categories: ["craft", "exchange", "settlement"],
    regions: ["Punjab, Pakistan"],
    archaeologicalSites: [{ id: "harappa", name: "Harappa" }],
    people: [],
    relatedEvents: ["harappa-kot-diji-phase"],
    sources: [sources.ravi, sources.harappaChronology],
    citations: [
      { sourceId: sources.ravi.id, locator: "Ravi-phase objects and excavation contexts" },
      {
        sourceId: sources.harappaChronology.id,
        locator: "Ravi and Kot Diji Phases; chronology discussion",
      },
    ],
    interpretationNotes: [
      {
        kind: "uncertainty",
        text: "This is Harappa's site chronology, not an exact founding date for all early Indus settlements. Excavators note that earlier occupation may remain buried.",
        sourceIds: [sources.harappaChronology.id],
      },
    ],
  },
  {
    id: "harappa-kot-diji-phase",
    title: "Toward Indus urbanism",
    dateStart: bce(2800),
    dateEnd: bce(2600),
    approximateDate: true,
    contentStatus: "researched",
    description:
      "Harappa's Kot Diji phase precedes its mature urban development. Excavations place the subsequent transformation around 2600–2500 BCE, linking this chapter to the later Indus cities.",
    categories: ["urbanism", "settlement"],
    regions: ["Punjab, Pakistan"],
    archaeologicalSites: [{ id: "harappa", name: "Harappa" }],
    people: [],
    relatedEvents: ["harappa-ravi-phase", "indus-valley-civilization"],
    sources: [sources.harappaChronology],
    citations: [
      {
        sourceId: sources.harappaChronology.id,
        locator: "Table 1 and chronology discussion, p. 209",
      },
    ],
    interpretationNotes: [
      {
        kind: "uncertainty",
        text: "The phase labels are conventional approximations. The excavators describe the beginning of the Kot Diji phase at Harappa as poorly dated.",
        sourceIds: [sources.harappaChronology.id],
      },
    ],
  },
];
