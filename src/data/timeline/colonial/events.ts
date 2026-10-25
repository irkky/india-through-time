import { bce, ce } from "@/lib/historical-date";
import type { HistoricalEvent } from "@/types/history";
import { colonialGalleries } from "@/data/scenes/colonial-galleries";
import { colonialRecords } from "./records";
import { colonialSources } from "./sources";

const date = (year: number) => (year < 0 ? bce(-year) : ce(year));

export const colonialEvents: readonly HistoricalEvent[] = [...colonialRecords]
  .sort((a, b) => a.start - b.start)
  .map((entry) => {
    const gallery = colonialGalleries[entry.id] ?? [];
    const sources = entry.sources.map((id) => colonialSources[id]);
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
      categories: ["Colonial", entry.theme],
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
          publisher: "The Metropolitan Museum of Art, collection catalogue",
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
