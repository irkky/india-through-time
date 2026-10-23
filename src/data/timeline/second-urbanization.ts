import type { HistoricalEra } from "@/types/history";
import { empireEventsForPeriod } from "./empires/events";

export const secondUrbanizationEra: HistoricalEra = {
  id: "second-urbanization-empires",
  title: "Second Urbanization & Empires",
  subtitle: "Cities, teachings and the language of imperial power · c. 600–185 BCE",
  order: 3,
  periods: [
    {
      id: "landscape-of-states",
      title: "Cities, states and new paths",
      introduction:
        "Urban growth, competing states and ascetic traditions overlapped. These thematic records are ordered by their approximate starting dates, not presented as a simple chain of causes.",
      events: empireEventsForPeriod("landscape-of-states"),
    },
    {
      id: "an-empire-emerges",
      title: "An empire emerges",
      introduction:
        "Follow Mauryan political expansion and material evidence. Broad object dates can extend beyond a dynasty's conventional endpoints.",
      events: empireEventsForPeriod("an-empire-emerges"),
    },
    {
      id: "ashokan-evidence",
      title: "Ashoka: messages, monuments and communities",
      introduction:
        "Read inscriptions as situated royal statements, compare them with surviving monuments, and distinguish original phases from later additions.",
      events: empireEventsForPeriod("ashokan-evidence"),
    },
    {
      id: "after-mauryas",
      title: "Toward regional histories",
      introduction:
        "Dynastic change did not bring all settlements, exchange or religious communities to an end.",
      events: empireEventsForPeriod("after-mauryas"),
    },
  ],
};

export const empireGaps = [
  {
    periodId: "landscape-of-states",
    topic: "Regional coverage and everyday lives",
    missing: [
      "ADD_REGIONAL_EXCAVATIONS: dated settlement and burial reports from eastern, western and peninsular regions; the Ganga sequence is not a chronology for all South Asia.",
      "ADD_SOCIAL_EVIDENCE: cited evidence on labour, women, householders and donors; identify the date of the source rather than projecting later texts backwards.",
    ],
  },
  {
    periodId: "an-empire-emerges",
    topic: "Administration and diplomatic accounts",
    missing: [
      "ADD_TEXT_COMPARISON: a scholarly treatment of the composite dating of the Arthashastra and the fragmentary survival of Megasthenes before adding quotations or detailed administrative charts.",
      "ADD_DIPLOMATIC_RECORD: a scholarly source and precise locator for the Chandragupta–Seleucus agreement before adding its debated territorial and marriage details.",
    ],
  },
  {
    periodId: "after-mauryas",
    topic: "The following chapter",
    missing: [
      "ADD_REGIONAL_SUCCESSORS: develop Shunga, Indo-Greek and Satavahana histories with separate chronologies, rather than portraying them as one unified successor empire.",
    ],
  },
] as const;
