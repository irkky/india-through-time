import { yearsAgo } from "@/lib/historical-date";
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
      events: [
        {
          id: "lower-palaeolithic-scaffold",
          title: "Lower Palaeolithic India",
          dateStart: yearsAgo(1_500_000),
          approximateDate: true,
          contentStatus: "placeholder",
          description: "Awaiting the first researched archaeological dataset.",
          categories: [],
          people: [],
          relatedEvents: [],
          visualReference: {
            id: "lower-palaeolithic-placeholder-sequence",
            kind: "cinematic-scene",
          },
          media: [
            {
              id: "lower-palaeolithic-oldscene",
              kind: "image",
              alt: "Atmospheric landscape used behind the Lower Palaeolithic sequence",
              usageLocations: ["Lower Palaeolithic persistent background"],
            },
            {
              id: "lower-palaeolithic-india-map",
              kind: "map",
              alt: "Dark map of the Indian subcontinent",
              usageLocations: [
                "Lower Palaeolithic full map",
                "South India focus",
                "Attirampakkam marker",
              ],
            },
            {
              id: "attirampakkam-handaxe",
              kind: "image",
              alt: "Handaxe from Attirampakkam",
              usageLocations: ["Early stone-tool technology"],
            },
            {
              id: "acheulian-tool-assemblage",
              kind: "image",
              alt: "Selection of Acheulian stone tools",
              usageLocations: ["Acheulian handaxes and cleavers"],
            },
          ],
          factAnnotations: [
            {
              id: "early-acheulian-record",
              kind: "chronology",
              eyebrow: "EARLY ACHEULIAN RECORD",
              primaryStatistic: "~1.5 MILLION",
              statisticQualifier: "YEARS AGO",
              location: ["ATTIRAMPAKKAM", "TAMIL NADU"],
              text: "Archaeological evidence at Attirampakkam places Acheulian technology at around 1.5 million years ago. The assemblage includes handaxes, cleavers and other stone tools, providing some of the earliest securely dated evidence of Acheulian technology in South Asia.",
              supportingLine: "HANDAXES · CLEAVERS · FLAKES",
            },
            {
              id: "widespread-acheulian-record",
              kind: "distribution",
              eyebrow: "A WIDESPREAD TECHNOLOGY",
              statement: ["NOT ONE SITE.", "A WIDESPREAD RECORD."],
              text: "Acheulian stone-tool assemblages occur across widely separated regions of the Indian subcontinent. Handaxes, cleavers and other tools appear in diverse archaeological contexts, showing that this technology was not confined to a single site.",
              siteLine: "ATTIRAMPAKKAM · ISAMPUR · HUNSGI · BHIMBETKA",
              evidenceLabel: "STONE TOOLS ARE THE PRIMARY SURVIVING RECORD",
            },
          ],
          sources: [],
        },
      ],
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
