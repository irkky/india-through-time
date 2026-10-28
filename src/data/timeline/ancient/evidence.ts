import type { HistoricalEvent, HistoricalSource } from "@/types/history";
import { ancientGalleries } from "@/data/scenes/ancient-galleries";

/** Evidence notes distinguish archaeological context, comparison and later witnesses. */
const notes: Record<string, readonly [string, string]> = {
  "dholavira-water-city": [
    "Dholavira's reservoirs and channels belong to a city adapted to seasonal water supplies on Khadir island. The photograph makes the stone construction visible; a phase-labelled plan is still needed to connect particular reservoirs to successive building episodes. The city's long occupation range cannot date every wall.",
    "Add a measured reservoir and city plan with excavation phase, north arrow, scale and publication figure number; distinguish restored masonry from excavated fabric.",
  ],
  "indus-valley-civilization": [
    "The farming-study map opens a regional window onto northwest India: villages and smaller settlements matter alongside the famous urban centres. Its selected sites are a research sample, not the full extent of the civilization. Read it alongside Harappa's excavation sequence rather than treating modern borders as ancient boundaries.",
    "Add a sourced map locating Harappa, Mohenjo-daro, Dholavira, Rakhigarhi and Lothal, with a legend separating excavated sites, modern boundaries and inferred exchange routes.",
  ],
  "rakhigarhi-cemetery": [
    "The excavation-locality photograph establishes where fieldwork took place; the pottery chart asks a different question about burial practice. Shinde and colleagues found fewer associated pots in the sampled sub-adult burials than in adult burials. Neither an age comparison nor a pot count is a direct measure of caste, occupation or the total population.",
    "Add a non-graphic measured grave plan and its pottery inventory, retaining burial identifier, orientation, scale and excavation context. Explain how disturbed deposits were classified.",
  ],
  "mohenjo-daro-urban-life": [
    "Mohenjo-daro's wells, drains and brick structures connect urban life to water management. The photograph also shows why layers matter: UNESCO dates the Buddhist stupa visible behind the Great Bath to the second century CE. That later monument must not be read as part of the Harappan city's original skyline.",
    "Add an excavated house drain or well photograph paired with a measured section, structure identifier and phase; mark modern conservation work and preserve the scale.",
  ],
  "harappan-craft-workshops": [
    "The finished carnelian and terracotta beads shown here come from Mohenjo-daro and are held by the British Museum. They provide a material comparison for the Harappa workshop account. A finished bead can show shape and surface treatment; reconstructing a production sequence additionally requires documented unfinished pieces, tools and waste from secure contexts.",
    "Add a Harappa workshop plate pairing drill or abrasive evidence, unfinished beads and waste with excavated context, catalogue references and a metric scale.",
  ],
  "indus-seals-writing": [
    "The museum photograph pairs an ancient burnt-steatite seal with a modern impression. Comparing the two reveals how a carved design reverses when impressed. The object is evidence for a material practice, but the signs remain undeciphered: the gallery supplies neither a speculative translation nor a named owner.",
    "Add a documented sealing from an excavated context, with accession, material, dimensions and a source explaining its association; distinguish it from a modern demonstration impression.",
  ],
  "harappan-weights": [
    "The Ashmolean photograph shows cubical weights from Mohenjo-daro; the cited CSMVS account concerns a separate object, IV 483. Keeping these identities apart prevents a photograph from acquiring another object's measurements. Testing a weight system requires recorded masses and a comparative sample, not estimating values from apparent size in a display.",
    "Add a museum-authorised table of accession numbers, measured masses, materials and uncertainty, paired with a scale-bearing photograph of those same objects.",
  ],
  "indus-food-farming": [
    "The crop-processing study combines charred plant remains with phytoliths, microscopic silica traces from plants. Its winter-cereal ratios compare grain, chaff and weeds across settlements and phases. These traces help investigate processing activities and household organisation; they do not directly measure crop yields or prove that every Indus settlement grew the same crops.",
    "Add a published charred-seed or phytolith plate with taxon, site, sample, phase, recovery method and scale. Retain uncertain identifications and distinguish wild plants from domesticated crops.",
  ],
  "lothal-crafts-exchange": [
    "The UNESCO Tentative List submission associates Lothal with a large basin, storage and craft activity, and interprets the basin as a dock. A photograph shows its surviving form, while its ancient function also depends on water access and excavation evidence. Tentative-list status is distinct from inscription as a World Heritage property.",
    "Add a licensed measured basin plan with inlet and outlet evidence, dated phases and reconstructed shoreline clearly separated from measured remains.",
  ],
  "late-harappan-regionalisation": [
    "Cemetery H vessels at Harappa illustrate one later regional assemblage, about 1900-1300 BCE. They should not be substituted for Mature Harappan burial pottery elsewhere. Changes in decorated ceramics can be compared with settlement and environmental evidence, but one assemblage cannot explain all regional transformations or establish a single migration event.",
    "Add comparable settlement counts or stratigraphic sequences before and after 1900 BCE, naming survey area, phase definitions and sampling limits rather than implying a simultaneous collapse everywhere.",
  ],
  "early-iron-ganga-vindhyas": [
    "Iron objects, slag and furnace remains answer different questions about use and production. Their dates depend on association with sampled deposits. Antiquity explicitly corrected the September 2003 Tewari paper in December 2003; future tables should be checked against that corrected version before presenting laboratory dates or an earliest-iron claim.",
    "Add a licensed furnace, tuyere or slag photograph from a site in the cited study, with feature number, stratigraphic association and corrected radiocarbon sample table. Do not substitute the much later Delhi Iron Pillar.",
  ],
  "rigvedic-oral-traditions": [
    "Schøyen Collection MS 2097 is an early nineteenth-century paper copy in Devanagari, with red accents and corrections and yellow deletions. It is a tangible witness to later transmission, not an object from the early Vedic composition period. Compare its written accent marks with the documented living practice of recitation without claiming an ancient recording survives.",
    "For an embedded recitation, supply permission, named performer, school, hymn and verse, recording date, transcript and cited translation. The linked modern recordings remain external resources.",
  ],
  "later-vedic-societies": [
    "The Sonkh vessel is dated 1000-600 BCE in its museum photograph record, allowing a material comparison with this broad textual period. Chronological overlap does not identify its makers as a particular Vedic community. Read ritual prescriptions as claims about social order, and compare them with archaeology without equating pottery, language and political identity.",
    "Add a rights-cleared Brahmana passage with book, chapter and paragraph, translator and edition, explaining whether it describes a ritual ideal, a narrative or an observable practice.",
  ],
  "early-upanishads": [
    "The photographed Chandogya manuscript is a copy dated 1865 CE in its image record, many centuries later than the text's ancient composition. The material object and the philosophical work therefore have different histories. A separate University of Pennsylvania catalogue offers another manuscript witness; neither should be assigned the timeline's 700-500 BCE range as its physical date.",
    "Add a cited translation of a specific Chandogya or Brihadaranyaka dialogue with section numbers, translator and reuse rights. Identify the photographed folio before associating it with that passage.",
  ],
  "painted-grey-ware": [
    "The Sonkh bowl supplies an identifiable example of Painted Grey Ware from the Government Museum at Mathura. Its display date, 1000-600 BCE, is narrower than this chapter's broad PGW framework. A museum object illustrates a ceramic tradition; a dated excavated sequence is needed to compare its local beginning, overlap and end with other sites.",
    "Add a scale-bearing excavated PGW plate with trench, layer and catalogue number, plus cited Bhagwanpura and Hastinapura sequences. Preserve differences in their overlaps and gaps.",
  ],
};

const supplements: Record<string, readonly HistoricalSource[]> = {
  "early-iron-ganga-vindhyas": [
    {
      id: "tewari-correction",
      title: "Tewari: December 2003 correction notice",
      publisher: "Antiquity",
      url: "https://www.antiquity.ac.uk/projgall/tewari/",
    },
  ],
  "rigvedic-oral-traditions": [
    {
      id: "schoyen-2097",
      title: "Rigveda-Samhita, MS 2097: manuscript catalogue",
      publisher: "The Schøyen Collection",
      url: "https://www.schoyencollection.com/23-religions/living-religions/23-16-hinduism/veda/rigveda-samhita-ms-2097",
    },
    {
      id: "vedic-film",
      title: "Watch: Tradition of Vedic chanting",
      publisher: "UNESCO Intangible Cultural Heritage",
      url: "https://ich.unesco.org/en/video/41576",
    },
    {
      id: "vedic-recitation",
      title: "Listen and read: Rigveda, Shakala Samhita, Maharashtra tradition",
      publisher: "IGNCA Vedic Heritage Portal",
      url: "https://vedicheritage.gov.in/samhitas/rigveda/shakala-samhita/maharashtra-tradition/",
    },
  ],
  "later-vedic-societies": [
    {
      id: "ignca-shatapatha",
      title: "Read: Shatapatha Brahmana, texts and editions",
      publisher: "IGNCA Vedic Heritage Portal",
      url: "https://vedicheritage.gov.in/brahmanas/shatapatha-brahmana/",
    },
  ],
  "early-upanishads": [
    {
      id: "penn-chandogya",
      title: "Explore: Chandogya manuscript, Ms. Coll. 390, Item 1146",
      publisher: "University of Pennsylvania Libraries / OPenn",
      url: "https://openn.library.upenn.edu/Data/0002/html/mscoll390_item1146.html",
    },
  ],
};

export function enrichAncientEvent(event: HistoricalEvent): HistoricalEvent {
  const note = notes[event.id];
  if (!note) return event;
  const gallery = ancientGalleries[event.id] ?? [];
  const visualSources: HistoricalSource[] = Array.from(
    new Map(gallery.map((image) => [image.sourceUrl, image])).values(),
  ).map((image, index) => ({
    id: `${event.id}-visual-${index + 1}`,
    title: `${image.credit}: visual evidence and provenance`,
    url: image.sourceUrl,
  }));
  const extra = supplements[event.id] ?? [];
  const sources = [...event.sources, ...visualSources, ...extra];
  const viewing =
    event.id === "rigvedic-oral-traditions"
      ? [
          {
            title: "Watch and listen: a living tradition",
            text: "Open UNESCO's film for a modern presentation of Vedic chanting, or the IGNCA portal for the identified Maharashtra tradition of the Shakala Samhita. These external resources document living transmission; they are not sound recordings from ancient India. Playback and availability are managed by the source websites.",
            sourceIds: ["vedic-film", "vedic-recitation"],
          },
        ]
      : [];
  return {
    ...event,
    sources,
    details: [
      {
        title: "Reading the evidence",
        text: note[0],
        sourceIds: sources
          .filter((source) => !["vedic-film", "vedic-recitation"].includes(source.id))
          .map((source) => source.id),
      },
      ...viewing,
      ...(event.id === "later-vedic-societies"
        ? [
            {
              title: "Read the textual tradition",
              text: "The IGNCA portal supplies access to Shatapatha Brahmana texts and editions. Use a named edition and passage number when comparing ritual descriptions with the material evidence shown here.",
              sourceIds: ["ignca-shatapatha"],
            },
          ]
        : []),
    ],
    imageNeeds: [
      { tag: `IMAGE_${event.id.replaceAll("-", "_").toUpperCase()}`, instruction: note[1] },
    ],
    contentNeeds: event.contentNeeds
      ?.filter(
        (need) => !["ADD_SITE_PHOTO", "ADD_WEIGHT_PHOTO", "OPTIONAL_MANUSCRIPT"].includes(need.tag),
      )
      .map((need) =>
        need.tag === "ADD_POTTERY_PLATE"
          ? {
              ...need,
              instruction:
                "The Sonkh museum photograph is included. Add an excavated pottery plate with layer, accession and metric scale to supply the missing archaeological context.",
            }
          : need,
      ),
    media: gallery.length
      ? gallery.map((image, index) => ({
          id: `${event.id}-gallery-${index + 1}`,
          kind: "image" as const,
          alt: image.alt,
          caption: image.caption,
          credit: image.credit,
          license: image.license,
          sourceUrl: image.sourceUrl,
          historicalContext: image.caption,
        }))
      : event.media,
  };
}
