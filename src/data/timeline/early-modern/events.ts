import { bce, ce } from "@/lib/historical-date";
import type { HistoricalEvent } from "@/types/history";
import { earlyModernGalleries } from "@/data/scenes/early-modern-galleries";
import { earlyModernRecords } from "./records";
import { earlyModernSources } from "./sources";
import {
  earlyModernVisualNotes,
  earlyModernAdditionalSources,
  earlyModernVideoGuides,
  earlyModernAdditionalImageNeeds,
} from "./evidence";

const date = (year: number) => (year < 0 ? bce(-year) : ce(year));

export const earlyModernEvents: readonly HistoricalEvent[] = [...earlyModernRecords]
  .sort((a, b) => a.start - b.start)
  .map((entry) => {
    const gallery = earlyModernGalleries[entry.id] ?? [];
    const sources = entry.sources.map((id) => earlyModernSources[id]);
    const visualSources = gallery.map((image, index) => ({
      id: `${entry.id}-object-${index}`,
      title: `${image.title}: image record and provenance`,
      url: image.sourceUrl,
      publisher: image.credit,
    }));
    const extraSources = earlyModernAdditionalSources[entry.id] ?? [];
    const video = earlyModernVideoGuides[entry.id];
    const videoSource = video
      ? {
          id: `${entry.id}-heritage-video`,
          title: `Watch: ${video.title}`,
          url: `https://whc.unesco.org/en/list/${video.site}/video/`,
          publisher: "UNESCO World Heritage Centre / credited film producers",
        }
      : undefined;
    const visualNote = earlyModernVisualNotes[entry.id];
    if (!visualNote) throw new Error(`Missing early modern visual guidance: ${entry.id}`);
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
      categories: ["Early Modern", entry.theme],
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
        {
          title: "Explore the visual evidence",
          text: visualNote,
          sourceIds: [...sources, ...visualSources, ...extraSources].map((source) => source.id),
        },
        ...(video && videoSource
          ? [
              {
                title: "Watch the site: a guided comparison",
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
          instruction: earlyModernAdditionalImageNeeds[entry.id] ?? entry.image,
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
                alt: `Modern heritage film: ${video!.title}`,
                caption: video!.focus,
                credit: "UNESCO World Heritage Centre / NHK; Taj Mahal page also offers a TBS film",
                license: "External viewing link only; rights retained by the credited producer",
                sourceUrl: videoSource.url,
                historicalContext:
                  "Modern heritage footage, not contemporary footage of early modern events.",
              },
            ]
          : []),
      ],
      visualReference: { id: `exhibit-${entry.id}`, kind: "svg" },
    };
  });
