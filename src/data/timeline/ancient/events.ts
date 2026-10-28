import { bce } from "@/lib/historical-date";
import type { HistoricalEvent, HistoricalSource } from "@/types/history";
import { ancientSources as s } from "./sources";
import { enrichAncientEvent } from "./evidence";

type RecordInput = {
  id: string;
  title: string;
  start: number;
  end: number;
  region: string;
  description: string;
  significance: string;
  limits: string;
  scope: string;
  sources: readonly [HistoricalSource, string][];
  related: readonly string[];
  needs: readonly [string, string][];
};
const record = (r: RecordInput): HistoricalEvent =>
  enrichAncientEvent({
    id: r.id,
    title: r.title,
    dateStart: bce(r.start),
    dateEnd: bce(r.end),
    approximateDate: true,
    contentStatus: "researched",
    dateScope: r.scope,
    description: r.description,
    significance: r.significance,
    regions: [r.region],
    categories: ["ancient-india", "evidence"],
    ...(r.id === "indus-seals-writing"
      ? {
          media: [
            {
              id: "met-49-40-1-image",
              kind: "image" as const,
              alt: "Indus seal and modern impression, The Met 49.40.1",
              credit: "The Metropolitan Museum of Art, Dodge Fund, 1949",
              license: "Public Domain / The Met Open Access",
              sourceUrl: s.seal.url,
              historicalContext:
                "Ancient burnt-steatite seal, ca. 2600-1900 BCE; impression is modern.",
            },
          ],
        }
      : {}),
    people: [],
    ...(r.id === "rakhigarhi-cemetery"
      ? {
          media: [
            {
              id: "rakhigarhi-shinde-fig3",
              kind: "image" as const,
              alt: "Rakhigarhi excavation localities, Shinde et al. Figure 3",
              credit: "© 2018 Shinde et al., PLOS ONE",
              license: "CC BY 4.0",
              sourceUrl: "https://doi.org/10.1371/journal.pone.0192299.g003",
              historicalContext: "Modern aerial excavation record, reproduced unchanged.",
            },
          ],
        }
      : {}),
    relatedEvents: r.related,
    sources: r.sources.map(([source]) => source),
    citations: r.sources.map(([source, locator]) => ({ sourceId: source.id, locator })),
    interpretationNotes: [
      { kind: "uncertainty", text: r.limits, sourceIds: r.sources.map(([source]) => source.id) },
    ],
    visualReference: { id: `exhibit-${r.id}`, kind: "svg" },
    contentNeeds: r.needs.map(([tag, instruction]) => ({ tag, instruction })),
  });

export const cityEvents = [
  record({
    id: "rakhigarhi-cemetery",
    title: "Rakhigarhi: lives beyond the streets",
    start: 2600,
    end: 1900,
    region: "Rakhigarhi, Haryana, India",
    scope: "Mature Harappan cemetery attribution; not an exact date for each burial.",
    description:
      "Excavations during 2013-2016 investigated Rakhigarhi's cemetery, documenting graves, associated pottery and complete or partial human remains. The study connects burial arrangements with archaeological and anthropological evidence.",
    significance:
      "Burials offer a different perspective from streets and workshops. Recording their context helps distinguish burial practices from later disturbance and supports research on ancient lives.",
    limits:
      "The modern excavation dates are not the ancient dates. A cemetery sample is not representative of every inhabitant; grave goods do not automatically identify occupation, caste, ethnicity or exact religious beliefs.",
    sources: [[s.rakhigarhi, "Introduction; Materials and methods; Results"]],
    related: ["indus-valley-civilization", "harappan-craft-workshops"],
    needs: [
      [
        "OPTIONAL_BURIAL_CONTEXT",
        "The excavation-locality photograph is included. Add a cited grave inventory or measured burial plan with context and scale for a closer study.",
      ],
    ],
  }),
  record({
    id: "dholavira-water-city",
    title: "Dholavira: living with scarce water",
    start: 3000,
    end: 1500,
    region: "Khadir island, Kachchh, Gujarat, India",
    scope: "Whole-site occupation range; individual structures belong to different phases.",
    description:
      "Dholavira combined fortified urban spaces with reservoirs and channels in an arid setting supplied by seasonal streams. Its stone-built remains reveal a distinctive regional form of Harappan urbanism.",
    significance:
      "Water storage, streets, craft workshops and a cemetery connect engineering with everyday life and social organisation. Urban spaces and buildings differed in size and quality.",
    limits:
      "UNESCO gives an occupation span of about 3000-1500 BCE. This does not date every reservoir to 3000 BCE or imply uninterrupted urban prosperity. A conceptual water diagram is not an excavated plan.",
    sources: [[s.dholavira, "Description; Outstanding Universal Value"]],
    related: ["harappa-kot-diji-phase", "indus-valley-civilization"],
    needs: [
      [
        "ADD_SITE_PHOTO",
        "Add a credited Dholavira reservoir photograph with location and reuse licence.",
      ],
      [
        "ADD_PHASE_PLAN",
        "Add an excavation-based plan identifying construction phases, north arrow and scale.",
      ],
    ],
  }),
  record({
    id: "indus-valley-civilization",
    title: "The Mature Harappan urban world",
    start: 2600,
    end: 1900,
    region: "Indus region and adjoining parts of present-day Pakistan and India",
    scope: "Broad urban-phase framework, not a single founding event.",
    description:
      "Harappa became a major urban centre linked to other cities, smaller towns and rural settlements. The Mature Harappan phase is conventionally placed around 2600-1900 BCE.",
    significance:
      "The earlier Ravi and Kot Diji records lead into this urban network. Similar material traditions connected settlements without making their layouts or histories identical.",
    limits:
      "These phase boundaries are approximate. Harappa's local sequence provides a chronological framework, not an exact timetable for every Indus settlement. Modern national borders are location aids only.",
    sources: [[s.harappa, "Introduction; Table 1, Period 3A-3C"]],
    related: ["harappa-ravi-phase", "harappa-kot-diji-phase", "late-harappan-regionalisation"],
    needs: [
      [
        "ADD_SITE_MAP",
        "Add a sourced map of Harappa, Mohenjo-daro, Dholavira, Rakhigarhi, Kalibangan and Lothal. Mark modern borders as modern; avoid invented imperial boundaries.",
      ],
    ],
  }),
  record({
    id: "mohenjo-daro-urban-life",
    title: "Mohenjo-daro: streets, wells and drains",
    start: 2600,
    end: 1900,
    region: "Sindh, Pakistan",
    scope: "Urban-phase teaching range; structures require their own phase dates.",
    description:
      "Mohenjo-daro preserves baked-brick buildings, an organised street network, wells, drains and the Great Bath. Its raised western area and extensive lower settlement show coordinated construction.",
    significance:
      "Following water from a house to a drain makes urban infrastructure tangible. The Great Bath is a distinctive public structure, but its precise uses cannot be read directly from its architecture.",
    limits:
      "The phase range follows the Harappan chronological framework; UNESCO's heritage summary uses broader dating. Architecture alone does not identify named rulers, prove democracy or establish the exact rituals performed here.",
    sources: [
      [s.mohenjo, "Brief synthesis; integrity"],
      [s.harappa, "Introduction; urban phase chronology"],
    ],
    related: ["indus-valley-civilization", "dholavira-water-city"],
    needs: [
      [
        "ADD_DRAIN_PHOTO",
        "Add a licensed street-drain or Great Bath photograph with exact feature name.",
      ],
      [
        "ADD_MEASURED_PLAN",
        "Add a cited house-and-drain section; distinguish excavated remains from restoration.",
      ],
    ],
  }),
  record({
    id: "harappan-craft-workshops",
    title: "Beads: tracing skilled work",
    start: 2600,
    end: 1900,
    region: "Harappa, Punjab, Pakistan; wider Indus craft networks",
    scope: "Urban-phase thematic record; beadmaking began earlier.",
    description:
      "Bead production can be reconstructed from raw materials, drill tools, unfinished pieces and waste. At Harappa, agate and steatite followed different manufacturing sequences involving shaping, drilling, heating and finishing.",
    significance:
      "Workshop debris records labour and technical choices that finished ornaments alone cannot reveal. Craft traditions developed before the urban phase and changed through it.",
    limits:
      "The range locates this theme in the urban chapter; it is not the invention date of beads. Modern craft comparisons help test techniques but do not prove an unchanged ancient social organisation.",
    sources: [[s.crafts, "Comparative summary; Harappa Phase drill and perforation types"]],
    related: ["harappa-ravi-phase", "lothal-crafts-exchange"],
    needs: [
      [
        "ADD_CRAFT_PLATE",
        "Add a licensed plate of unfinished beads and drill tools with specimen IDs, material names and separate scales.",
      ],
    ],
  }),
  record({
    id: "indus-seals-writing",
    title: "Signs that remain unread",
    start: 2600,
    end: 1900,
    region: "Indus Valley; museum object 49.40.1",
    scope: "Museum object date range, not a dated decipherment or named owner.",
    description:
      "A burnt-steatite stamp seal in The Met pairs an animal conventionally called a unicorn with a short inscription. The photograph shows the ancient seal alongside a modern impression that reverses the carved design.",
    significance:
      "Seals could mark ownership and status. Examining an object and its impression explains how a small carved surface could transfer an image and signs to another material.",
    limits:
      "The Met dates object 49.40.1 to about 2600-1900 BCE. The Indus script remains undeciphered; no translation, personal name or language is assigned here. The suggested incense burner or altar identification is uncertain.",
    sources: [[s.seal, "Object details, accession 49.40.1; curatorial description"]],
    related: ["harappan-weights", "indus-valley-civilization"],
    needs: [
      [
        "OPTIONAL_OBJECT_CONTEXT",
        "Add a documented findspot or excavation context only if supported by the museum's provenance record; do not infer it from the photograph.",
      ],
    ],
  }),
  record({
    id: "harappan-weights",
    title: "Making exchange measurable",
    start: 2600,
    end: 1900,
    region: "Mohenjo-daro; CSMVS collection, Mumbai",
    scope: "Museum object range and associated exchange practices.",
    description:
      "CSMVS records a small chert weight from Mohenjo-daro, accession IV 483, dated about 2600-1900 BCE. Standardised weights and seals are evidence for organised exchange in Harappan cities.",
    significance:
      "A measuring system lets people compare quantities. The exhibit separates the surviving weight from the broader question of how transactions were supervised.",
    limits:
      "A standard does not by itself identify a single empire or reveal a tax rate. The teaching diagram uses illustrative blocks, not measured replicas or a reconstruction of an excavated balance.",
    sources: [[s.weights, "Object details; findspot; description"]],
    related: ["indus-seals-writing", "lothal-crafts-exchange"],
    needs: [
      [
        "ADD_WEIGHT_PHOTO",
        "Add an authorised photograph of CSMVS IV 483 or another catalogued weight; include accession, mass, dimensions and licence.",
      ],
    ],
  }),
  record({
    id: "indus-food-farming",
    title: "Many landscapes, many crops",
    start: 2600,
    end: 1900,
    region: "Indus settlements, including Harappa, Gujarat and Haryana",
    scope: "Urban-phase theme; agricultural evidence spans earlier and later periods.",
    description:
      "Plant remains reveal different combinations of winter and summer crops across Indus settlements. Farming strategies varied with local water, soils, labour and choices rather than following one uniform agricultural system.",
    significance:
      "Comparing crop and weed remains connects villages to urban food supplies. Wheat and barley cannot stand for every region; other crops and seasonal strategies mattered too.",
    limits:
      "Preservation and sampling affect what archaeologists recover. This is a regional synthesis, not a complete menu or proof that every settlement practised the same multi-cropping regime.",
    sources: [[s.farming, "Site comparisons and discussion of cropping strategies"]],
    related: ["lahuradewa-rice-use", "late-harappan-regionalisation"],
    needs: [
      [
        "ADD_ARCHAEOBOTANY",
        "Add a published, licensed seed plate with species, site, phase and scale; keep wild/domesticated identification explicit.",
      ],
    ],
  }),
  record({
    id: "lothal-crafts-exchange",
    title: "Lothal: crafts and coastal connections",
    start: 2400,
    end: 1600,
    region: "Bhogava river, Gujarat, India",
    scope: "Site range used by the UNESCO Tentative List submission.",
    description:
      "Lothal's remains include planned streets, drainage, bead production, a structure interpreted as a warehouse and a large brick-lined basin. Sealings and coastal materials help investigate exchange.",
    significance:
      "The site connects craft production with movement along river and coastal environments. The basin has been interpreted as a tidal dock, making water access central to discussions of the settlement.",
    limits:
      "The cited submission gives about 2400-1600 BCE. A Tentative List entry is not World Heritage inscription. The basin's function is presented as an interpretation, not proof of every proposed shipping route or a claim to the world's first dock.",
    sources: [[s.lothal, "Description; Justification of Outstanding Universal Value"]],
    related: ["harappan-craft-workshops", "harappan-weights"],
    needs: [
      ["ADD_BASIN_PLAN", "Add a licensed measured Lothal basin plan with inlet/outlet and source."],
      [
        "ADD_TRADE_EVIDENCE",
        "For a route map, supply dated findspots of imported/exported objects; show inferred routes as dashed lines.",
      ],
    ],
  }),
] as const;

export const transitionEvents = [
  record({
    id: "late-harappan-regionalisation",
    title: "After the cities: regional continuities",
    start: 1900,
    end: 1300,
    region: "Harappa and the wider northwestern subcontinent",
    scope: "Approximate Late Harappan framework; regional trajectories differ.",
    description:
      "After the Mature Harappan phase, settlement and material traditions changed unevenly. Harappa's sequence includes transitional and Late Harappan occupations rather than an instant disappearance of its inhabitants.",
    significance:
      "Research on rivers and monsoons links environmental change with altered farming and settlement opportunities. The transition involved regional adaptation as well as the decline of large urban centres.",
    limits:
      "Harappa's late-phase boundaries are approximate, with uncertainty around 1800 BCE and the final occupation. Environmental evidence does not establish one universal cause, one catastrophic year or a simple invasion explanation.",
    sources: [
      [s.harappa, "Table 1, Periods 4-5"],
      [s.climate, "Abstract; Discussion"],
    ],
    related: ["indus-valley-civilization", "painted-grey-ware"],
    needs: [
      [
        "ADD_SETTLEMENT_COMPARISON",
        "Add dated maps comparing Mature and Late Harappan settlement datasets, including survey coverage and uncertainty.",
      ],
    ],
  }),
  record({
    id: "early-iron-ganga-vindhyas",
    title: "Early ironworking: a regional record",
    start: 1800,
    end: 1000,
    region: "Central Ganga plain and eastern Vindhyas, Uttar Pradesh",
    scope: "Range of iron-associated layers reported in a study; not a universal Iron Age start.",
    description:
      "Rakesh Tewari reported iron objects, furnaces, tuyeres and slag from layers dated between about 1800 and 1000 BCE. Together these categories allow researchers to investigate production as well as use.",
    significance:
      "A tuyere directs air into a furnace; slag is waste from working ores and metals. Their archaeological context matters more than the appearance of an isolated iron object.",
    limits:
      "Early dates require careful association between the dated sample and metalworking evidence. The study has a publisher correction notice. This entry does not claim a settled earliest date for all India or infer the language of the metalworkers.",
    sources: [
      [
        s.iron,
        "Abstract; pp. 536-544; corrected version notice at antiquity.ac.uk/projgall/tewari298",
      ],
    ],
    related: ["painted-grey-ware", "later-vedic-societies"],
    needs: [
      [
        "ADD_DATING_TABLE",
        "Add sample IDs, calibrated ranges and stratigraphic associations from the corrected excavation publication.",
      ],
      [
        "ADD_FURNACE_PHOTO",
        "Add a licensed excavated furnace/tuyere photograph with trench, layer and scale.",
      ],
    ],
  }),
] as const;

export const vedicEvents = [
  record({
    id: "rigvedic-oral-traditions",
    title: "The Rigveda: a world carried by voice",
    start: 1500,
    end: 1000,
    region: "Northwestern subcontinent; Punjab and adjoining regions",
    scope: "Conventional early Vedic composition framework; not manuscript dates.",
    description:
      "The Rigveda preserves hymns in Vedic Sanskrit transmitted orally. Its poetry offers evidence about ritual, deities, cattle, patronage and social relationships in the world of its composers.",
    significance:
      "Oral transmission makes voice part of the historical evidence. UNESCO describes techniques of recitation designed to preserve wording, pronunciation and accent across generations.",
    limits:
      "About 1500-1000 BCE is a broad scholarly teaching range, not a date for every hymn. Surviving manuscripts and present-day recordings are much later witnesses. Religious poetry is not a complete census of society.",
    sources: [
      [s.vedic, "Chronological strata; Rig Vedic Age"],
      [s.chanting, "Description of oral preservation techniques"],
    ],
    related: ["later-vedic-societies", "early-upanishads"],
    needs: [
      [
        "ADD_AUDIO",
        "Add a permission-cleared recitation with school/tradition, performer, verse reference, recording date and a cited translation. Never label a modern recording ancient audio.",
      ],
    ],
  }),
  record({
    id: "later-vedic-societies",
    title: "Later Vedic worlds: land and authority",
    start: 1000,
    end: 600,
    region: "Upper Ganga-Yamuna region and areas farther east",
    scope: "Conventional later Vedic framework; textual layers are not precisely dated events.",
    description:
      "Later Vedic texts reflect expanding agrarian settings, larger political formations and increasingly elaborate royal rituals. Kuru and Panchala are important to this northern geographical setting.",
    significance:
      "Ideas about authority, social ordering and ritual changed alongside settlement. This provides context for the territorial states encountered in the next timeline era.",
    limits:
      "Textual prescriptions about varna describe ideals and claims, not a uniform account of every community. Archaeological pottery, a language and a political identity cannot simply be equated.",
    sources: [[s.vedic, "Later Vedic Age; polity; society"]],
    related: ["rigvedic-oral-traditions", "painted-grey-ware", "mahajanapadas"],
    needs: [
      [
        "ADD_TEXT_PASSAGE",
        "Add a short cited translation with text, section/verse and translator; identify whether it is a prescription, narrative or ritual instruction.",
      ],
    ],
  }),
  record({
    id: "early-upanishads",
    title: "Questions about self and reality",
    start: 700,
    end: 500,
    region: "Northern South Asia; later Vedic intellectual traditions",
    scope: "Approximate range for early prose Upanishads, overlapping the following era.",
    description:
      "Early Upanishads explore self, ultimate reality, action and knowledge through teaching and debate. The Brihadaranyaka and Chandogya belong to an early group generally placed around 700-500 BCE.",
    significance:
      "These works contain multiple voices and arguments rather than one uniform philosophical system. Their enquiries continued alongside ritual traditions and later religious movements.",
    limits:
      "The texts were composed and transmitted in layers; dialogue characters are not automatically securely dated biographies. The range extends beyond 600 BCE, deliberately showing overlap with Second Urbanization & Empires.",
    sources: [[s.upanishads, "Section 1, chronology; Sections 2-3, philosophy and self"]],
    related: ["rigvedic-oral-traditions", "later-vedic-societies", "mahajanapadas"],
    needs: [
      [
        "ADD_TRANSLATION",
        "Add a rights-cleared excerpt from Brihadaranyaka or Chandogya with precise passage and translator.",
      ],
      [
        "OPTIONAL_MANUSCRIPT",
        "A manuscript image must carry its actual later date, holding institution and licence.",
      ],
    ],
  }),
] as const;

export const ironAgeEvents = [
  record({
    id: "painted-grey-ware",
    title: "Painted Grey Ware: reading settlements",
    start: 1100,
    end: 500,
    region: "Indo-Ganga divide, Sutlej basin and upper Ganga plain",
    scope: "Review framework; some regional chronologies begin earlier or end later.",
    description:
      "Painted Grey Ware names a pottery tradition found in settlements including Hastinapura, Ahichchhatra and Bhagwanpura. Associated deposits provide evidence of houses, subsistence and iron objects.",
    significance:
      "Stratigraphy is varied: some sites show overlap with Late Harappan material, others a break. Pottery helps compare these sequences without assuming that every region followed the same path.",
    limits:
      "The cited review gives roughly 1100 to 500/400 BCE; this display uses 500 BCE as a rounded endpoint. PGW is not a direct ethnic label or proof of a precisely dated Mahabharata war.",
    sources: [[s.ironReview, "Section 4.2.1, Painted Grey Ware culture"]],
    related: ["late-harappan-regionalisation", "later-vedic-societies"],
    needs: [
      [
        "ADD_POTTERY_PLATE",
        "Add a licensed PGW vessel/sherd image with site, layer, catalogue number and scale.",
      ],
      [
        "ADD_SEQUENCE",
        "Add a cited stratigraphic comparison for Bhagwanpura and Hastinapura; retain differences between sites.",
      ],
    ],
  }),
] as const;
