import type { HistoricalEvent, HistoricalSource } from "@/types/history";
import { empireGalleries } from "@/data/scenes/empire-galleries";

const notes: Readonly<Record<string, string>> = {
  mahajanapadas:
    "Rajgir illustrates one political centre within the wider landscape of states. Its surviving wall is landscape evidence, not a map of all sixteen states or a secure construction date for a named king. Read the changing textual lists alongside separate local settlement histories.",
  "ganga-urban-life":
    "The Sonkh fragment makes the glossy ceramic surface visible. Its museum-photo date of 500-100 BCE spans more than this entry's 600-300 BCE framework. The modern supports are display equipment. Without a trench, layer and associated finds, this particular object cannot establish the beginning of urban life at Sonkh.",
  "magadha-rise":
    "The Rajgir landscape and Kumrahar pillar belong to different kinds of evidence. The latter provides a later Mauryan comparison for Pataliputra, not a structure dated to Bimbisara's reign. Photographs connect places discussed in the account while excavation phases are still needed to reconstruct the transfer and growth of political centres.",
  "mahavira-jain-traditions":
    "The Gujarat painting represents Mahavira at the centre of a samavasarana, a preaching assembly in Jain tradition. Its fifteenth-century date is part of its meaning: the folio documents later devotion and manuscript culture. It does not supply a contemporary portrait or settle the historical dates of Mahavira's life.",
  "taxila-northwest":
    "The photograph identifies Bhir Mound rather than Sirkap. Low walls and irregular spaces reveal an excavated settlement; their present appearance also reflects exposure and conservation. UNESCO's sequence distinguishes Bhir from the later planned city. The photograph is not evidence that a particular room was a classroom or a university building.",
  "buddha-early-sangha":
    "The sculpture was made in Bihar, probably Nalanda, in the eleventh century CE, while its subject is the first sermon at Sarnath. The museum identifies the teaching gesture and records the sculptor Vijaka in the base inscription. Production place, depicted place and the period of the Buddha's teaching must remain distinct.",
  "early-punchmarked-money":
    "The bent-bar specimen adds a Gandhara type comparison from the INHCRF Coin Museum. It is neither the existing irregular teaching coin nor British Museum 1869,1203.48. The photograph documents visible punches, but its record supplies no accession, measured mass or secure specimen date. Regional forms should not be collapsed into one imperial currency.",
  "alexander-taxila":
    "Bhir's modern photograph places the encounter within an existing settlement landscape. It neither identifies Alexander's route through these particular remains nor demonstrates a battlefield. The 326 BCE anchor belongs to the documented visit; the archaeological settlement has a longer sequence.",
  "mauryan-empire":
    "Kumrahar's excavated pillared hall provides architectural evidence for ancient Pataliputra. The displayed broken pillar is a surviving component, not a complete palace reconstruction. Modern official descriptions offer different functional interpretations, so the photograph is not treated as proof of a particular use. Its later monastery-hospital should not be assigned to the Mauryan phase.",
  "mauryan-ringstone":
    "The surviving fragment remains the primary visual evidence here. Its central opening, carving and broken edge can be inspected directly, while missing portions are not reconstructed. The third-second-century BCE museum date overlaps dynastic change: the fragment cannot by itself identify a Mauryan owner, a Shunga patron or a particular ritual.",
  "ashoka-rule":
    "The Sarnath lion capital gives a material counterpart to the account of royal communication. It is the sculpted upper element of a pillar, not an inscribed text panel. Keep the capital, surviving shaft and any associated inscription separately identified before comparing their evidence with the ruler's proclamations.",
  "kalinga-war":
    "The Girnar plate specifically reproduces Major Rock Edict XIII in Brahmi, while the existing Dhauli photograph shows a different edict site. The facsimile's broken areas and line numbers belong to an editorial record. Compare versions and translations rather than treating every Ashokan inscription as a copy of the Kalinga-war passage.",
  "ashoka-dhamma":
    "Shahbazgarhi's published plate identifies Edicts VII and XII in Kharosthi; Lumbini provides a photographed Brahmi comparison. These are different texts as well as different scripts. Their visual contrast cannot be used as a line-for-line translation exercise. Greek and Aramaic examples remain a separate, explicitly tagged research need.",
  "barabar-ajivikas":
    "The archival exterior and modern interior detail show different aspects of Sudama. The close-up reveals worked curved surfaces but cannot establish the dimensions of the rectangular and circular chambers. Surface scratches are not automatically ancient writing; identify the dedicatory inscription separately before drawing conclusions about patrons and beneficiaries.",
  "sanchi-mauryan-core":
    "The site photograph and UNESCO film show an accumulated monument. Distinguish the early brick stupa and pillar from the enlarged stone-covered structure and later carved gateways. Present-day footage is useful for orientation, but a phase drawing is still needed to assign individual features to their construction periods.",
  "ashoka-lumbini":
    "The whole pillar and close-up now complement one another. The photograph shows part of the inscription on a curved surface, so not every line is fully visible. In the cited translation the royal visit is dated by twenty years since consecration; that reference must remain separate from disputed dates for the Buddha's birth.",
  "mauryan-successors":
    "Sanchi provides a visual bridge into the next chapter: its enlarged stupa and gateways demonstrate a longer building history than the Mauryan dynasty. This is continuity at a specific religious site, not evidence for a single successor kingdom or uniform political conditions across the subcontinent in 185 BCE.",
};

const resources: Readonly<
  Record<
    string,
    readonly { source: HistoricalSource; title: string; text: string; locator: string }[]
  >
> = {
  "mahavira-jain-traditions": [
    {
      source: {
        id: "acaranga-jacobi-1884",
        title: "Acaranga Sutra I.4.1: Righteousness",
        author: "Hermann Jacobi (translator)",
        publicationYear: 1884,
        publisher: "Sacred Books of the East 22 / Internet Sacred Text Archive",
        url: "https://original.sacred-texts.com/jai/sbe22/sbe2220.htm",
      },
      title: "Read a passage: restraint toward living beings",
      text: "Acaranga Sutra I.4.1, paragraphs 1-3, presents restraint toward living beings as a religious obligation. The linked Jacobi translation was published in 1884; its English wording and editorial notes are modern scholarship, not a verbatim transcript of Mahavira. Compare the rule with the distinction between ascetic and householder commitments.",
      locator: "Book I, lecture 4, lesson 1, paragraphs 1-3; pp. 36-37",
    },
  ],
  "buddha-early-sangha": [
    {
      source: {
        id: "sn5611-thanissaro",
        title: "SN 56.11: Setting the Wheel of Dhamma in Motion",
        author: "Thanissaro Bhikkhu (translator)",
        publisher: "Access to Insight",
        url: "https://accesstoinsight.org/tipitaka/sn/sn56/sn56.011.than.html",
      },
      title: "Read a discourse: SN 56.11",
      text: "This discourse situates the teaching at the Deer Park near Varanasi and sets out the middle way and Four Noble Truths. Open the named translation to read its sequence in context. It is a transmitted canonical account, not a contemporary recording; the eleventh-century sculpture is a separate visual interpretation of the sermon.",
      locator: "Samyutta Nikaya 56.11; opening setting, middle way and four truths",
    },
  ],
  "mauryan-empire": [
    {
      source: {
        id: "bihar-kumhrar",
        title: "Kumhrar Park: excavated Pataliputra remains",
        publisher: "Department of Tourism, Government of Bihar",
        url: "https://tourism.bihar.gov.in/en/destinations/patna/kumrahar-puratav-park",
      },
      title: "Read the site in phases",
      text: "The official site account identifies an eighty-pillared hall and separately dates Arogya Vihar, the monastery-hospital, to the fourth-fifth centuries CE. Its descriptions differ over the hall's precise function. Treat the surviving pillar as architectural evidence and keep later buildings separate from the Mauryan account.",
      locator: "Site description: pillared hall and Arogya Vihar",
    },
  ],
  "sanchi-mauryan-core": [
    {
      source: {
        id: "unesco-sanchi-film",
        title: "Watch: Buddhist Monuments at Sanchi",
        publisher: "UNESCO / NHK",
        url: "https://whc.unesco.org/en/list/524/video",
      },
      title: "Watch the monument in its landscape",
      text: "UNESCO's NHK heritage film provides a modern view of the site. Look for the stupa, enclosure and gateways, while keeping their different building phases in mind. The film remains on the publisher's site because its footage is all rights reserved; no local copy or automatic playback is supplied.",
      locator: "UNESCO/NHK Videos on Heritage: Sanchi",
    },
  ],
};

const pending: Readonly<Record<string, readonly [string, string]>> = {
  "ganga-urban-life": [
    "ADD_NBPW_STRATIGRAPHIC_PLATE",
    "The Sonkh museum photograph is included. Add a scale-bearing excavation plate with trench, layer, accession and independently dated context; the display's broad range is not stratigraphy.",
  ],
  "mahavira-jain-traditions": [
    "ADD_JAIN_FOLIO_TRANSCRIPTION",
    "The fifteenth-century painted detail and an identified Acaranga passage are included. Add a complete folio with legible text, catalogue reference, transcription and a rights-cleared translation tied to that same folio.",
  ],
  "taxila-northwest": [
    "ADD_BHIR_PHASE_PLAN",
    "Bhir's photograph is included. Add a measured plan with street and house identifiers, phase boundaries, north arrow, scale and excavation-report reference; do not substitute the later Sirkap plan.",
  ],
  "buddha-early-sangha": [
    "ADD_EARLY_BUDDHIST_SITE_SEQUENCE",
    "A later sermon sculpture and SN 56.11 reading link are included. Add a securely dated early Buddhist site sequence with excavation context, phase labels and scale; keep later images separate from lifetime evidence.",
  ],
  "ashoka-rule": [
    "ADD_SARNATH_PILLAR_RECORD",
    "The lion capital is included. Add a located photograph or estampage of the surviving Sarnath pillar inscription, with script identification, transcription and an explicit distinction between capital and shaft.",
  ],
  "kalinga-war": [
    "ADD_EDICT_XIII_VERSION_COMPARISON",
    "The Girnar Edict XIII facsimile is included. Add a line-aligned transcription and scholarly comparison with another identified version, retaining damaged readings and identifying the translator and edition.",
  ],
  "ashoka-dhamma": [
    "ADD_GREEK_ARAMAIC_EDICT_EVIDENCE",
    "Brahmi and Kharosthi examples are included. Add securely sourced, rights-cleared Greek and Aramaic examples with their actual site, text, edition and translation; do not imply they reproduce the same passage.",
  ],
  "barabar-ajivikas": [
    "ADD_SUDAMA_MEASURED_PLAN",
    "Sudama's exterior and an interior surface detail are included. Add a measured two-chamber plan, dimensions and dedication location, with publication reference and scale; identify later alterations separately.",
  ],
  "ashoka-lumbini": [
    "ADD_LUMBINI_LINE_ALIGNMENT",
    "The overall pillar and inscription detail are included. Add a complete line-by-line transcription aligned to an uncropped record, including regnal dating and uncertain readings; do not infer missing edges from this photograph.",
  ],
};

export function enrichEmpireEvent(event: HistoricalEvent): HistoricalEvent {
  const gallery = empireGalleries[event.id] ?? [];
  const visualSources: HistoricalSource[] = Array.from(
    new Map(gallery.map((image) => [image.sourceUrl, image])).values(),
  ).map((image, index) => ({
    id: `${event.id}-visual-${index + 1}`,
    title: `${image.credit}: image record and provenance`,
    url: image.sourceUrl,
  }));
  const reading = resources[event.id] ?? [];
  const sources = [...event.sources, ...visualSources, ...reading.map((item) => item.source)];
  const request = pending[event.id];
  return {
    ...event,
    sources,
    details: [
      ...(event.details ?? []),
      {
        title: "Visual evidence and its limits",
        text: notes[event.id]!,
        sourceIds: [...event.sources, ...visualSources, ...reading.map((item) => item.source)].map(
          (source) => source.id,
        ),
      },
      ...reading.map((item) => ({
        title: item.title,
        text: item.text,
        sourceIds: [item.source.id],
      })),
    ],
    citations: [
      ...(event.citations ?? []),
      ...reading.map((item) => ({ sourceId: item.source.id, locator: item.locator })),
    ],
    imageNeeds: request ? [{ tag: request[0], instruction: request[1] }] : event.imageNeeds,
    contentNeeds: request ? [{ tag: request[0], instruction: request[1] }] : event.contentNeeds,
    media: gallery.map((image, index) => ({
      id: `${event.id}-gallery-${index + 1}`,
      kind: image.category === "Illustration" ? ("illustration" as const) : ("image" as const),
      alt: image.alt,
      caption: image.caption,
      credit: image.credit,
      license: image.license,
      sourceUrl: image.sourceUrl,
      historicalContext: image.caption,
    })),
  };
}
