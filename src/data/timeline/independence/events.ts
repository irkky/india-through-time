import { bce, ce } from "@/lib/historical-date";
import type { HistoricalEvent } from "@/types/history";
import { independenceGalleries } from "@/data/scenes/independence-galleries";
import { independenceRecords } from "./records";
import { independenceSources } from "./records";

const date = (year: number) => (year < 0 ? bce(-year) : ce(year));
// Same-year entries remain year-granular; order known episodes within that year.
const withinYear = [
  "ahmedabad",
  "kheda",
  "bhagat-singh",
  "karachi",
  "khudai-khidmatgar",
  "round-table",
  "poona-pact",
  "gaidinliu",
  "naval-uprising",
  "tebhaga",
  "objectives",
];
const rank = (id: string) => withinYear.indexOf(id.replace("freedom-", ""));

export const independenceEvents: readonly HistoricalEvent[] = [...independenceRecords]
  .sort((a, b) => a.start - b.start || rank(a.id) - rank(b.id))
  .map((entry) => {
    const gallery = independenceGalleries[entry.id] ?? [];
    const sources = entry.sources.map((id) => {
      const source = independenceSources[id];
      if (!source) throw new Error(`Missing independence source: ${id}`);
      return source;
    });
    return {
      id: entry.id,
      title: entry.title,
      dateStart: date(entry.start),
      ...(entry.end !== undefined ? { dateEnd: date(entry.end) } : {}),
      approximateDate: !entry.exact,
      contentStatus: "researched",
      dateScope:
        entry.scope ??
        `${entry.exact ? "Calendar date or conventional political span." : "Approximate topic window; not an exact date for every development."} ${entry.limits}`,
      description: entry.description,
      significance: entry.significance,
      civilizations: [entry.civilization],
      regions: [entry.region],
      categories: ["Independence", entry.theme],
      people: entry.people,
      relatedEvents: entry.related,
      details: [
        {
          title: "Background and conditions",
          text: entry.background,
          sourceIds: sources.map((s) => s.id),
        },
        {
          title: "Consequences and connections",
          text: entry.consequence,
          sourceIds: sources.map((s) => s.id),
        },
        {
          title: "Reading the evidence",
          text: entry.evidence,
          sourceIds: sources.map((s) => s.id),
        },
      ],
      interpretationNotes: [
        { kind: "uncertainty", text: entry.limits, sourceIds: sources.map((s) => s.id) },
      ],
      sources: [
        ...sources,
        ...gallery.map((image, index) => ({
          id: `${entry.id}-object-${index}`,
          title: image.title,
          url: image.sourceUrl,
          publisher: "Image collection catalogue",
        })),
      ],
      citations: sources.map((source) => ({
        sourceId: source.id,
        locator:
          entry.locator ??
          "Historical overview and chronology; see the linked catalogue separately for pictured objects.",
      })),
      imageNeeds: gallery.length
        ? []
        : [
            {
              tag: `IMAGE_PLACEHOLDER_${entry.id.replaceAll("-", "_").toUpperCase()}`,
              instruction: entry.image,
            },
          ],
      contentNeeds: [
        ...(entry.research
          ? [
              {
                tag: `RESEARCH_PLACEHOLDER_${entry.id.replaceAll("-", "_").toUpperCase()}`,
                instruction: entry.research,
              },
            ]
          : []),
        ...(entry.map
          ? [
              {
                tag: `MAP_PLACEHOLDER_${entry.id.replaceAll("-", "_").toUpperCase()}`,
                instruction: entry.map,
              },
            ]
          : []),
      ],
      media: gallery.map((image, index) => ({
        id: `${entry.id}-image-${index}`,
        kind: "image",
        alt: image.alt,
        caption: image.caption,
        credit: image.credit,
        license: image.license,
        sourceUrl: image.sourceUrl,
      })),
      visualReference: { id: `exhibit-${entry.id}`, kind: "svg" },
    };
  });
