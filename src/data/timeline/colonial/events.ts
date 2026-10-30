import { bce, ce } from "@/lib/historical-date";
import type { HistoricalEvent } from "@/types/history";
import { colonialGalleries } from "@/data/scenes/colonial-galleries";
import { colonialRecords } from "./records";
import { colonialSources } from "./sources";
import {
  colonialVisualNotes,
  colonialAdditionalSources,
  colonialVideoGuides,
  colonialAdditionalImageNeeds,
  colonialReadingNotes,
} from "./evidence";

const date = (year: number) => (year < 0 ? bce(-year) : ce(year));

export const colonialEvents: readonly HistoricalEvent[] = [...colonialRecords]
  .sort((a, b) => a.start - b.start)
  .map((entry) => {
    const gallery = colonialGalleries[entry.id] ?? [];
    const sources = entry.sources.map((id) => colonialSources[id]);
    const visualSources = gallery.map((image, index) => ({
      id: `${entry.id}-object-${index}`,
      title: `${image.title}: image record and provenance`,
      url: image.sourceUrl,
      publisher: image.credit,
    }));
    const extraSources = colonialAdditionalSources[entry.id] ?? [];
    const video = colonialVideoGuides[entry.id];
    const reading = colonialReadingNotes[entry.id];
    const videoSource = video
      ? {
          id: `${entry.id}-heritage-video`,
          title: `Watch: ${video.title}`,
          url: video.url,
          publisher: video.publisher,
        }
      : undefined;
    const visualNote = colonialVisualNotes[entry.id];
    if (!visualNote) throw new Error(`Missing colonial visual guidance: ${entry.id}`);
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
        ...(reading
          ? [
              {
                ...reading,
                sourceIds: extraSources.map((source) => source.id),
              },
            ]
          : []),
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
        {
          title: "Explore the visual evidence",
          text: visualNote,
          sourceIds: [...sources, ...visualSources, ...extraSources].map((source) => source.id),
        },
        ...(video && videoSource
          ? [
              {
                title: "Watch and compare the evidence",
                text: `${video.focus} Open the film on the publisher's site using the link below. Recording rights remain with the credited producer.`,
                sourceIds: [videoSource.id],
              },
            ]
          : []),
      ],
      interpretationNotes: [
        { kind: "uncertainty", text: entry.limits, sourceIds: sources.map((s) => s.id) },
      ],
      sources: [
        ...sources,
        ...visualSources,
        ...extraSources,
        ...(videoSource ? [videoSource] : []),
      ],
      citations: sources.map((source) => ({
        sourceId: source.id,
        locator:
          entry.locator ??
          "Historical overview and chronology; see the linked catalogue separately for pictured objects.",
      })),
      imageNeeds: [
        {
          tag: `ADD_${entry.id.replaceAll("-", "_").toUpperCase()}_EVIDENCE`,
          instruction: colonialAdditionalImageNeeds[entry.id] ?? entry.image,
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
      media: [
        ...gallery.map((image, index) => ({
          id: `${entry.id}-image-${index}`,
          kind: image.category === "Illustration" ? ("illustration" as const) : ("image" as const),
          alt: image.alt,
          caption: image.caption,
          credit: image.credit,
          license: image.license,
          sourceUrl: image.sourceUrl,
        })),
        ...(videoSource
          ? [
              {
                id: `${entry.id}-video`,
                kind: "video" as const,
                alt: `Film guide: ${video!.title}`,
                caption: video!.focus,
                credit: video!.publisher,
                license: "External viewing link only; rights retained by the credited producer",
                sourceUrl: videoSource.url,
                historicalContext: video!.focus,
              },
            ]
          : []),
      ],
      visualReference: { id: `exhibit-${entry.id}`, kind: "svg" },
    };
  });
