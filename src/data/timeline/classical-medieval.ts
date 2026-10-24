import type { HistoricalEra } from "@/types/history";
import { toTimelineOrdinal, bce, ce } from "@/lib/historical-date";
import { classicalEvents } from "./classical/events";
const phases = [
  {
    id: "classical-regional-roots",
    title: "Regional kingdoms and Buddhist art · 200 BCE–299 CE",
    start: bce(200),
    end: ce(299),
    introduction:
      "The Mauryan decline did not lead to one successor state. Northwestern kingdoms and Deccan religious communities developed distinct traditions. These records overlap the closing events of Second Urbanization & Empires.",
  },
  {
    id: "classical-learning",
    title: "Gupta-era India and learning · 300–599 CE",
    start: ce(300),
    end: ce(599),
    introduction:
      "Explore courts, monastic institutions, mathematics and devotional traditions. Cultural developments crossed political boundaries and continued after dynasties declined.",
  },
  {
    id: "classical-regional-india",
    title: "Regional India · 600–1199 CE",
    start: ce(600),
    end: ce(1199),
    introduction:
      "Follow regional patronage, temple building, water engineering and scholarship across India. These traditions overlapped rather than replacing one another in a single sequence.",
  },
  {
    id: "classical-medieval-india",
    title: "Sultanates and regional societies · 1200–1500 CE",
    start: ce(1200),
    end: ce(1500),
    introduction:
      "Delhi, Odisha and southern India followed different political paths. Devotional communities and travellers offer additional perspectives. Coverage stops at 1500; Delhi and Vijayanagara continued beyond this chapter.",
  },
];
export const classicalMedievalEra: HistoricalEra = {
  id: "classical-medieval-eras",
  title: "Classical & Medieval India",
  order: 4,
  subtitle: "Regional kingdoms, learning, art and society · c. 200 BCE–1500 CE",
  periods: phases.map((phase) => ({
    id: phase.id,
    title: phase.title,
    introduction: phase.introduction,
    events: classicalEvents.filter((event) => {
      const start = toTimelineOrdinal(event.dateStart);
      return start >= toTimelineOrdinal(phase.start) && start <= toTimelineOrdinal(phase.end);
    }),
  })),
};
export const classicalGaps = [
  {
    periodId: "classical-regional-roots",
    topic: "Additional regional evidence",
    missing: [
      "HISTORICAL_DATA_PLACEHOLDER: add separately sourced Shunga, Satavahana, western Kshatrapa and early Tamil records, with dated inscriptions, coins and archaeological references.",
    ],
  },
  {
    periodId: "classical-regional-india",
    topic: "Expand regional and everyday histories",
    missing: [
      "HISTORICAL_DATA_PLACEHOLDER: add Harsha, Pala, Pratihara, Rashtrakuta, Kashmir and northeastern Indian case studies with independently verified dates.",
      "SOURCE_PLACEHOLDER: add evidence for agriculture, guilds, women’s work, land grants and regional literature; provide the inscription or text edition and distinguish composition from surviving manuscript dates.",
    ],
  },
  {
    periodId: "classical-medieval-india",
    topic: "Later medieval additions",
    missing: [
      "HISTORICAL_DATA_PLACEHOLDER: add sourced Bahmani, Bengal, Gujarat, Malwa, Ahom and early Sikh histories. Give dates, regional scope and primary evidence before creating scenes.",
      "MAP_PLACEHOLDER: add licensed regional maps with dates, legends and uncertain borders. Conceptual diagrams are not historical boundary maps.",
    ],
  },
] as const;
