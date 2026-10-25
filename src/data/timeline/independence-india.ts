import type { HistoricalEra } from "@/types/history";
import { independenceEvents } from "./independence/events";
const phases = [
  ["networks", "Networks and early satyagrahas", 1913, 1919],
  ["equality", "Local struggles and equal citizenship", 1920, 1928],
  ["visions", "Competing visions of freedom", 1929, 1939],
  ["transition", "Wartime mobilisation and constitution-making", 1940, 1947],
] as const;
export const independenceIndiaEra: HistoricalEra = {
  id: "indian-independence-movement",
  title: "Indian Independence Movement",
  order: 7,
  subtitle: "Organisations, regional struggles and competing visions of freedom",
  periods: phases.map(([id, title, start, end]) => ({
    id: `independence-${id}`,
    title: `${title} · ${start}–${end}`,
    introduction:
      "These thematic phases overlap Colonial India. Congress's founding, Swadeshi, Non-cooperation, the Salt March, Quit India and independence retain their existing Colonial Era records; related-event links connect the two chapters without duplicating dated scenes.",
    events: independenceEvents.filter(
      (e) =>
        e.dateStart.kind === "calendar" && e.dateStart.year >= start && e.dateStart.year <= end,
    ),
  })),
};
export const independenceGaps = [
  {
    periodId: "independence-networks",
    topic: "Earlier foundations and further regional depth",
    missing: [
      "HISTORICAL_DATA_PLACEHOLDER_FREEDOM_FOUNDATIONS: expand early associations, economic critiques, labour unions, socialist organisations, regional press and women organisers with dated primary evidence. The existing Colonial Era entries remain part of this chronology.",
    ],
  },
  {
    periodId: "independence-transition",
    topic: "Broaden representation and testimony",
    missing: [
      "SOURCE_PLACEHOLDER_FREEDOM_VOICES: deepen Khudai Khidmatgar, northeastern, Adivasi, peasant, princely-state and Muslim League histories; add local Quit India campaigns and Partition testimony. Do not present one organisation as the voice of every Indian.",
      "MAP_PLACEHOLDER_FREEDOM_REGIONS: supply dated campaign locations and routes with sources; historical Indian geography includes places now in Pakistan and Bangladesh.",
    ],
  },
] as const;
