import type { HistoricalEra } from "@/types/history";
import { earlyModernEvents } from "./early-modern/events";
import { toTimelineOrdinal, ce } from "@/lib/historical-date";

const phases = [
  {
    id: "early-modern-encounters",
    title: "Ports, communities and competing states · 1498–1555",
    start: 1498,
    end: 1555,
    introduction:
      "Indian ports were already connected to wide trading networks. New coastal encounters, Vijayanagara, Sikh community-building and the contest between Mughal and Sur rulers followed different but overlapping trajectories.",
  },
  {
    id: "early-modern-consolidation",
    title: "Imperial consolidation and regional voices · 1556–1604",
    start: 1556,
    end: 1604,
    introduction:
      "Expansion depended on administration, alliances and labour. Explore regional resistance, devotional literature, farming households, workshops and new forms of print alongside the Mughal court.",
  },
  {
    id: "early-modern-courts",
    title: "Courts, craft and cities · 1605–1657",
    start: 1605,
    end: 1657,
    introduction:
      "Portraits, textiles, gardens and buildings reveal skilled production and patronage. Individual objects have their own dates; later album assembly and commemoration are distinguished from the events they depict.",
  },
  {
    id: "early-modern-contested-power",
    title: "Contested power and new institutions · 1658–1706",
    start: 1658,
    end: 1706,
    introduction:
      "Mughal expansion met Ahom and Maratha resistance, while Sikh institutions developed new forms. Conquests, fort systems and remembered heroes tell different parts of these histories.",
  },
  {
    id: "early-modern-regional-states",
    title: "Regional states and the Company transition · 1707–1765",
    start: 1707,
    end: 1765,
    introduction:
      "Provincial courts, Maratha expansion, planned cities and Travancore demonstrate regional state-building. Plassey, Buxar and the Diwani grant form a sequence toward Company revenue rule, not one instant conquest of India.",
  },
];

export const earlyModernIndiaEra: HistoricalEra = {
  id: "early-modern-india",
  title: "Early Modern India",
  order: 5,
  subtitle: "Regional states, empire, everyday work and changing power · 1498–1765 CE",
  periods: phases.map((phase) => ({
    id: phase.id,
    title: phase.title,
    introduction: phase.introduction,
    // Entry dates determine placement; long-lived topics legitimately cross these boundaries.
    events: earlyModernEvents.filter((event) => {
      const start = toTimelineOrdinal(event.dateStart);
      return (
        start >= toTimelineOrdinal(ce(phase.start)) && start <= toTimelineOrdinal(ce(phase.end))
      );
    }),
  })),
};

export const earlyModernGaps = [
  {
    periodId: "early-modern-encounters",
    topic: "More regional depth",
    missing: [
      "HISTORICAL_DATA_PLACEHOLDER_EARLY_REGIONS: add sourced histories of Bengal, Gujarat, Kashmir, Odisha, the Nayaka states, Gond polities and northeastern communities. Supply dates, specific locations, primary evidence and modern scholarship.",
    ],
  },
  {
    periodId: "early-modern-consolidation",
    topic: "Everyday lives and local archives",
    missing: [
      "SOURCE_PLACEHOLDER_LOCAL_LIVES: add translated records of caste relations, labour, enslavement, forest communities, pastoralists, irrigation, famine and resistance. Do not infer population-wide conditions from court paintings.",
      "DATA_PLACEHOLDER_REGIONAL_SERIES: add dated price, wage, crop and trade series with units, coverage and uncertainty. No unsourced all-India GDP or population charts.",
    ],
  },
  {
    periodId: "early-modern-courts",
    topic: "Knowledge, language and patronage",
    missing: [
      "HISTORICAL_DATA_PLACEHOLDER_KNOWLEDGE: add dated evidence for medicine, metallurgy, music, Sanskrit and Persian scholarship, regional literature and individual women’s patronage. Identify manuscript copying dates separately from composition.",
    ],
  },
  {
    periodId: "early-modern-contested-power",
    topic: "Compare contested evidence",
    missing: [
      "SOURCE_PLACEHOLDER_POLICY_DOSSIERS: add independently checked documents for religious taxation, grants, destruction, conversion, conflict and local negotiation. Attribute interpretations and avoid treating one region as the whole empire.",
    ],
  },
  {
    periodId: "early-modern-regional-states",
    topic: "Continue the regional narrative",
    missing: [
      "HISTORICAL_DATA_PLACEHOLDER_REGIONAL_SEQUENCES: extend Sikh misls, Jat states, Mysore, Maratha houses and coastal powers with separate dated entries. Add the Carnatic wars with both Indian and company actors.",
      "MAP_PLACEHOLDER_DATED_AUTHORITY: supply maps distinguishing direct administration, tributary claims, commercial establishments and campaign routes at particular dates.",
    ],
  },
] as const;
