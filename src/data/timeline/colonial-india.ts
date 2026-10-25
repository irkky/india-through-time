import type { HistoricalEra } from "@/types/history";
import { colonialEvents } from "./colonial/events";
const phases = [
  ["company", "Company power and revenue", 1765, 1818],
  ["conquest", "Conquest, education and social reform", 1819, 1856],
  ["crown", "Rebellion, Crown rule and changing livelihoods", 1857, 1884],
  ["politics", "Public politics and the colonial state", 1885, 1918],
  ["transfer", "Mass protest, war and the end of British rule", 1919, 1947],
] as const;
export const colonialIndiaEra: HistoricalEra = {
  id: "colonial-era-british-rule",
  title: "Colonial Era & British Rule",
  order: 6,
  subtitle: "Company expansion, Indian lives and resistance, Crown rule and independence",
  periods: phases.map(([id, title, start, end]) => ({
    id: `colonial-${id}`,
    title: `${title} · ${start}–${end}`,
    introduction:
      "Dates group entries for navigation; regional experiences overlap. Company rule, Crown rule and indirect rule through princely states were different arrangements. Read the evidence and its limitations alongside each event.",
    events: colonialEvents.filter(
      (e) =>
        e.dateStart.kind === "calendar" && e.dateStart.year >= start && e.dateStart.year <= end,
    ),
  })),
};
export const colonialGaps = [
  {
    periodId: "colonial-company",
    topic: "Extend regional and economic evidence",
    missing: [
      "HISTORICAL_DATA_PLACEHOLDER_COLONIAL_REGIONS: add sourced Carnatic, Anglo-Mysore and Anglo-Maratha war sequences, subsidiary alliances, Vellore, Poligar resistance, Sindh, Assam and northeastern histories.",
      "DATA_PLACEHOLDER_COLONIAL_ECONOMY: add ryotwari and mahalwari case studies, crafts, mills, indenture, plantations, famine policy and dated wages, prices and trade series with units and uncertainty.",
    ],
  },
  {
    periodId: "colonial-transfer",
    topic: "Deepen social history and independence connections",
    missing: [
      "HISTORICAL_DATA_PLACEHOLDER_COLONIAL_SOCIETY: add regional press, census, forest laws, anti-caste movements, women's organisations, labour unions, health and local environmental histories with specialist sources.",
      "HISTORICAL_DATA_PLACEHOLDER_INDEPENDENCE_LINKS: add detailed revolutionary, Dalit, Muslim League, socialist, INA and naval uprising histories, the world wars and princely-state transitions. Connect to the future Independence Movement chapter without duplicating events.",
    ],
  },
] as const;
