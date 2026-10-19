import { yearsAgo } from "@/lib/historical-date";
import type { HistoricalEra, HistoricalEvent, HistoricalPeriod } from "@/types/history";
import { regionalExpansion, regionalContext } from "./prehistory/regional-expansion";
import { prehistorySources as sources } from "./prehistory/sources";
import {
  middlePalaeolithicEvents,
  upperPalaeolithicEvents,
  mesolithicEvents,
  neolithicEvents,
  chalcolithicEvents,
  harappanTransitionEvents,
} from "./prehistory/events";

/**
 * Canonical home for researched Prehistoric India records.
 *
 * Site-specific evidence is grouped by archaeological period. The timeline sorts
 * by date, allowing regional traditions to overlap. See docs/prehistoric-content.md.
 */
const withExhibit = (event: HistoricalEvent): HistoricalEvent => ({
  ...event,
  visualReference: { id: `exhibit-${event.id}`, kind: "svg" },
});

export const prehistoricIndiaEra = {
  id: "prehistoric-india",
  title: "Prehistoric India",
  subtitle: "The Dawn of Hominin Habitation and Cultural Evolution",
  order: 1,
  periods: (
    [
      {
        id: "before-history",
        title: "Before History",
        introduction:
          "Read the evidence before travelling through time. This chapter concerns the Indian subcontinent; site locations use present-day names. Archaeological periods overlap across regions and do not form a single nationwide succession.",
        context: [
          {
            title: "What the dates mean",
            text: "Dates describe particular finds, layers or site phases. A tool tradition does not automatically identify a human species. Approximate ages and competing interpretations are retained with each record; undated material is not assigned an invented timeline position.",
            sources: [sources.middle, sources.dhaba],
          },
        ],
        events: [],
      },
      {
        id: "lower-palaeolithic",
        title: "Lower Palaeolithic",
        introduction:
          "Begin with the dated Acheulian evidence at Attirampakkam, then compare the wider toolmaking tradition. Regional sites are not all contemporary; the later Middle Palaeolithic record follows on the timeline.",
        context: [
          {
            title: "The Narmada fossil: an unresolved date",
            text: "A partial hominin skull from Hathnora in the Narmada Valley is important evidence for human evolution. Reworked deposits and differing taxonomic interpretations complicate its age and identification. It is discussed here without assigning a precise year or species.",
            sources: [sources.narmada],
          },
        ],
        events: [
          {
            id: "lower-palaeolithic-scaffold",
            title: "Attirampakkam: the Acheulian record",
            dateStart: yearsAgo(1_510_000),
            approximateDate: true,
            contentStatus: "researched",
            description:
              "At Attirampakkam in Tamil Nadu, dated Acheulian layers preserve handaxes and cleavers. Burial dating gives a pooled age of about 1.51 million years for this early stone-tool record.",
            significance:
              "Handaxes and cleavers also occur at sites such as Isampur, Hunsgi and Bhimbetka, showing a wider Acheulian tradition across the subcontinent. These sites are not all the same age. Attirampakkam is a dated archaeological record, not a date for the first arrival of humans in India.",
            categories: ["stone-tools", "technology"],
            regions: ["Tamil Nadu, India"],
            archaeologicalSites: [{ id: "attirampakkam", name: "Attirampakkam" }],
            people: [],
            relatedEvents: ["attirampakkam-middle-palaeolithic"],
            visualReference: {
              id: "exhibit-lower-palaeolithic-scaffold",
              kind: "svg",
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
                primaryStatistic: "~1.51 MILLION",
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
            sources: [sources.acheulian, sources.isampur, sources.lowerSurvey],
            citations: [
              {
                sourceId: sources.acheulian.id,
                locator: "Abstract; Science 331, pp. 1596–1599",
                note: "Early Acheulian chronology and tool types",
              },
              {
                sourceId: sources.isampur.id,
                locator: "Excavated Acheulian workshop",
                note: "Isampur / Hunsgi regional comparison",
              },
              {
                sourceId: sources.lowerSurvey.id,
                locator: "Regional sites",
                note: "Distribution panel; sites are not all assigned Attirampakkam's date",
              },
            ],
            interpretationNotes: [
              {
                kind: "uncertainty",
                text: "Cosmogenic burial dating gives a pooled age of 1.51 ± 0.07 million years; the earliest levels are reported as no younger than 1.07 million years. This dates the studied deposits, not the entire Lower Palaeolithic period. Tool forms alone do not establish the toolmakers' species or a migration route.",
                sourceIds: [sources.acheulian.id, sources.lowerSurvey.id],
              },
            ],
          },
        ],
      },
      {
        id: "middle-palaeolithic",
        title: "Middle Palaeolithic",
        introduction:
          "Prepared-core technologies and changing tool assemblages are documented at particular sites; their timing differs across regions.",
        events: middlePalaeolithicEvents.map(withExhibit),
      },
      {
        id: "upper-palaeolithic",
        title: "Upper Palaeolithic",
        context: [
          {
            title: "Patne: an engraved eggshell",
            text: "A review describes an engraved ostrich-eggshell fragment from Patne and discusses it within a calibrated chronology of roughly 30,000 years before present. A specimen-specific visual needs the excavation context and original dating details; that calibrated estimate is not silently converted into the timeline's generic years-ago format.",
            sources: [sources.patne],
          },
        ],
        introduction:
          "Late Palaeolithic evidence includes early microblade and microlithic traditions. These technologies must not be restricted to the later Mesolithic in the story.",
        events: upperPalaeolithicEvents.map(withExhibit),
      },
      {
        id: "mesolithic",
        title: "Mesolithic",
        introduction:
          "Microlith-using communities, settlements and rock art have regional histories. Bagor is one dated example, not the beginning of the whole period.",
        context: [
          {
            title: "Bhimbetka: paintings across many periods",
            text: "Bhimbetka's sandstone shelters preserve paintings attributed from the Mesolithic through historical times. Individual panels require their own dating evidence; the whole painting tradition cannot be assigned one exact year.",
            sources: [sources.bhimbetka],
          },
        ],
        events: mesolithicEvents.map(withExhibit),
      },
      {
        id: "neolithic",
        title: "Neolithic",
        introduction:
          "Plant use, farming, herding and settled life took different forms and appeared at different times. Evidence for using a plant is not automatically evidence for its domestication.",
        events: neolithicEvents.map(withExhibit),
      },
      {
        id: "chalcolithic",
        title: "Chalcolithic",
        introduction:
          "Regional copper-age communities overlap with Neolithic and Harappan societies. The sequence below follows a site's evidence, not a universal replacement of stone tools.",
        events: chalcolithicEvents.map(withExhibit),
      },
      {
        id: "transition-to-early-urban-harappan-societies",
        title: "Transition toward early urban/Harappan societies",
        context: [
          {
            title: "Kalibangan: another regional sequence",
            text: "Excavations at Kalibangan distinguish an earlier settlement from the later Harappan occupation. Its evidence provides a regional comparison with Harappa; the two sites' phases should not be assigned identical dates without checking their chronologies.",
            sources: [sources.kalibangan],
          },
        ],
        introduction:
          "Harappa provides a regional sequence from early settlement to urbanism. Other contemporary communities followed different paths, and some continued long after cities emerged.",
        events: harappanTransitionEvents.map(withExhibit),
      },
    ] satisfies HistoricalPeriod[]
  ).map((period: HistoricalPeriod) => ({
    ...period,
    context: [...(period.context ?? []), ...(regionalContext[period.id] ?? [])],
    events: [
      ...period.events,
      ...regionalExpansion
        .filter((entry) => entry.periodId === period.id)
        .map(({ event }) => withExhibit(event)),
    ],
  })),
} as const satisfies HistoricalEra;
