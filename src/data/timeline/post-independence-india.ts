import type { HistoricalEra } from "@/types/history";
import { postIndependenceEvents } from "./post-independence/events";
import { postIndependenceReviewedOn } from "./post-independence/records";

const phases = [
  ["republic", "Making the republic", 1948, 1961],
  ["development", "Development, conflict and constitutional tests", 1962, 1977],
  ["change", "Public life, justice and economic change", 1978, 1999],
  ["rights", "Rights, resilience and connected India", 2000, 2016],
  ["present", "Contemporary India: institutions and new horizons", 2017, 2025],
] as const;

export const postIndependenceIndiaEra: HistoricalEra = {
  id: "post-independence-present",
  title: "Post-Independence to 2025",
  order: 8,
  subtitle: "Democracy, development, everyday lives and a changing republic",
  periods: phases.map(([id, title, start, end]) => ({
    id: `republic-phase-${id}`,
    title: `${title} · ${start}–${end}`,
    introduction: `A sourced, expandable history of independent India. The 1947 independence and Partition entry remains in the preceding chapter. Years order the journey; precise dates and overlapping windows are explained in each record. Research reviewed ${postIndependenceReviewedOn}. Contemporary entries distinguish announcements, implementation and completed outcomes.`,
    events: postIndependenceEvents.filter(
      (e) =>
        e.dateStart.kind === "calendar" && e.dateStart.year >= start && e.dateStart.year <= end,
    ),
  })),
};
export const postIndependenceGaps = [
  {
    periodId: "republic-phase-republic",
    topic: "Regional integration and social transformation",
    missing: [
      "RESEARCH_PLACEHOLDER_REPUBLIC_REGIONS: add separately sourced histories of Kashmir's accession, Junagadh, Manipur, land reform, Hindu Code legislation, Ambedkar's 1956 conversion, language movements and refugee rehabilitation. Include civilian voices and distinguish territorial claims from control.",
    ],
  },
  {
    periodId: "republic-phase-change",
    topic: "Broaden social, cultural and regional coverage",
    missing: [
      "RESEARCH_PLACEHOLDER_REPUBLIC_VOICES: add Dalit, Adivasi and women's movements, Assam and Punjab histories, environmental displacement, labour, regional cinema, literature, music and sports beyond cricket. Establish dates and sources before adding scenes.",
    ],
  },
  {
    periodId: "republic-phase-present",
    topic: "Extend the living history responsibly",
    missing: [
      "DATA_PLACEHOLDER_REPUBLIC_SERIES: add dated Census, NSS, NFHS and RBI data with units, geography, methodology and comparable baselines; distinguish census counts from projections. Keep additions within the timeline cutoff of 2025.",
      "RESEARCH_PLACEHOLDER_REPUBLIC_RECENT: add verified coverage through 2025 of elections, movements, legislation, conflicts, climate events and scientific missions. For 2023 women's reservation legislation distinguish enactment from implementation; for ongoing disputes include current primary records and independent research.",
      "IMAGE_PLACEHOLDER_REPUBLIC_ORAL_HISTORY: add consent-cleared interviews or family archives with dates, transcription, translation and reuse permissions. Do not publish private household returns.",
    ],
  },
] as const;
