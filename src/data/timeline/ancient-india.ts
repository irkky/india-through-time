import type { HistoricalEra } from "@/types/history";
import { cityEvents, transitionEvents, vedicEvents, ironAgeEvents } from "./ancient/events";
import { ancientSources as s } from "./ancient/sources";

export const ancientIndiaEra: HistoricalEra = {
  id: "ancient-india-early-transitions",
  title: "Ancient India & Early Transitions",
  order: 2,
  subtitle: "Cities, regional change, oral traditions and early ironworking",
  periods: [
    {
      id: "cities-of-the-indus",
      title: "Cities of the Indus",
      introduction:
        "Earlier village and Early Harappan records remain in Prehistoric India. This chapter follows the urban networks they helped create. Several thematic records share the same phase dates: they are different views of a contemporary world, not consecutive inventions.",
      events: [...cityEvents].sort(
        (a, b) =>
          Number(b.id === "indus-valley-civilization") -
          Number(a.id === "indus-valley-civilization"),
      ),
      context: [
        {
          title: "Kalibangan: a different urban arrangement",
          text: "Kalibangan's excavated mounds include a fortified settlement with streets, household spaces and features interpreted as fire altars. Published descriptions distinguish ovens from other installations. Their form alone does not establish a direct identity with later Vedic ritual. This contextual comparison awaits a separately checked local phase chronology before becoming a dated scene.",
          sources: [s.kalibangan],
        },
        {
          title: "Connections beyond the subcontinent",
          text: "The Met's third-millennium survey places the Indus within networks reaching the Gulf, Iran, Central Asia and Mesopotamia. Materials such as carnelian and lapis lazuli help investigate direct and indirect exchange. An object's presence does not by itself reveal the full route it travelled or the identity of its carrier.",
          sources: [s.exchange],
        },
        {
          title: "What objects cannot yet tell us",
          text: "An undeciphered script limits access to named rulers, institutions and religious identities. Animal motifs and unusual buildings invite interpretation, but an image alone does not securely identify a later deity. The seal viewer preserves the museum's question marks rather than replacing them with certainty.",
          sources: [s.seal],
        },
      ],
    },
    {
      id: "regional-transformations",
      title: "Regional transformations",
      introduction:
        "Urban contraction, continued settlement and new technologies had different regional histories. Environmental evidence is one part of this account, not a single explanation for every change.",
      events: transitionEvents,
    },
    {
      id: "vedic-oral-worlds",
      title: "Vedic oral worlds",
      introduction:
        "Textual traditions and archaeological cultures provide different kinds of evidence. These broad composition ranges overlap with material traditions in the neighbouring sections.",
      events: vedicEvents,
      context: [
        {
          title: "Text dates, manuscript dates and living practice",
          text: "Composition, oral transmission, a surviving manuscript and a modern recitation are distinct historical moments. Vedic chanting remains a living tradition. Its preservation methods can be discussed without presenting a recent recording as a sound from the second millennium BCE.",
          sources: [s.chanting],
        },
      ],
    },
    {
      id: "iron-age-regional-worlds",
      title: "Iron Age regional worlds",
      introduction:
        "There was no single moment when the whole subcontinent became an Iron Age society. Settlement sequences and burial practices require regional chronologies.",
      events: ironAgeEvents,
      context: [
        {
          title: "Megalithic monuments: a regional research window",
          text: "Peninsular megalithic traditions include tombs and memorials. The cited overview places much of the southern burial complex in an Iron Age framework beginning variously around 1200 or 1000 BCE, or later, and continuing into the early centuries CE. This broad, contested span is retained as context rather than made into one invented founding event. Similar-looking monuments do not prove one people or a single migration.",
          sources: [s.megaliths],
        },
      ],
    },
  ],
};

export const ancientGaps = [
  {
    periodId: "cities-of-the-indus",
    topic: "Kalibangan and additional regional centres",
    missing: [
      "ADD_SITE_RECORD: supply a specific excavation publication, phase chronology and page/table locator before adding another dated event.",
      "ADD_LICENSED_VISUAL: add a site plan or photograph with photographer, source URL and reuse terms.",
    ],
  },
  {
    periodId: "regional-transformations",
    topic: "Regional sequences and population history",
    missing: [
      "ADD_REGIONAL_SEQUENCE: expand Cemetery H, Jhukar and Rangpur separately using site-specific phase dates.",
      "ADD_RESEARCH_SYNTHESIS: population history needs dated ancient-DNA samples and linguistic/archaeological context; ancestry must not be equated directly with language or modern caste/community identity.",
    ],
  },
  {
    periodId: "vedic-oral-worlds",
    topic: "Texts, translations and recordings",
    missing: [
      "ADD_AUDIO: a permission-cleared recitation with performer, school, verse reference and recording date.",
      "ADD_TRANSLATION: precise passage references and translator/publication details; do not assign legendary battles exact dates without independent evidence.",
    ],
  },
  {
    periodId: "iron-age-regional-worlds",
    topic: "Peninsular and eastern regional coverage",
    missing: [
      "ADD_SITE_DATES: site-specific megalithic burial and occupation dates, with calibrated sample IDs and context.",
      "ADD_REGIONAL_RECORD: expand eastern Indian ironworking and peninsular sites from excavation reports; avoid extrapolating one early date to the entire subcontinent.",
    ],
  },
] as const;
