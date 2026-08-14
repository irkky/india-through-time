import type { HistoricalEra } from "@/types/history";

/**
 * Canonical home for researched Prehistoric India records.
 *
 * Periods remain intentionally empty until researched events, dates, sources,
 * and asset references are supplied for them.
 */
export const prehistoricIndiaEra = {
  id: "prehistoric-india",
  title: "Prehistoric India",
  subtitle: "The Dawn of Hominin Habitation and Cultural Evolution",
  order: 1,
  periods: [
    {
      id: "before-history",
      title: "Before History",
      events: [],
    },
    {
      id: "lower-palaeolithic",
      title: "Lower Palaeolithic",
      events: [],
    },
    {
      id: "middle-palaeolithic",
      title: "Middle Palaeolithic",
      events: [],
    },
    {
      id: "upper-palaeolithic",
      title: "Upper Palaeolithic",
      events: [],
    },
    {
      id: "mesolithic",
      title: "Mesolithic",
      events: [],
    },
    {
      id: "neolithic",
      title: "Neolithic",
      events: [],
    },
    {
      id: "chalcolithic",
      title: "Chalcolithic",
      events: [],
    },
    {
      id: "transition-to-early-urban-harappan-societies",
      title: "Transition toward early urban/Harappan societies",
      events: [],
    },
  ],
} as const satisfies HistoricalEra;
