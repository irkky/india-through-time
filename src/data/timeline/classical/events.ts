import { bce, ce } from "@/lib/historical-date";
import type { HistoricalEvent, HistoricalSource } from "@/types/history";
import { classicalGalleries } from "@/data/scenes/classical-galleries";
import { classicalRecords } from "./records";
import { classicalSources } from "./sources";
import {
  classicalAdditionalSources,
  classicalEvidence,
  classicalReadingNotes,
  classicalVideoGuides,
} from "./evidence";

const date = (year: number) => (year < 0 ? bce(-year) : ce(year));

export const classicalEvents: readonly HistoricalEvent[] = classicalRecords.map((entry) => {
  const gallery = classicalGalleries[entry.id] ?? [];
  const sources = entry.sources.map((id) => classicalSources[id]);
  const visualSources: HistoricalSource[] = gallery.map((image, index) => ({
    id: `${entry.id}-object-${index}`,
    title: `${image.title}: image record and provenance`,
    url: image.sourceUrl,
    publisher: image.credit,
  }));
  const evidence = classicalEvidence[entry.id];
  if (!evidence) throw new Error(`Missing Classical evidence: ${entry.id}`);
  const reading = classicalReadingNotes[entry.id];
  const video = classicalVideoGuides[entry.id];
  const videoSource: HistoricalSource | undefined = video
    ? {
        id: `${entry.id}-heritage-video`,
        title: `Watch: ${video.title}`,
        url: video.url ?? `https://whc.unesco.org/en/list/${video.site}/video/`,
        publisher: video.publisher ?? "UNESCO World Heritage Centre / NHK",
      }
    : undefined;
  const evidenceSources = [
    ...sources,
    ...visualSources,
    ...(classicalAdditionalSources[entry.id] ?? []),
  ];
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
    categories: [entry.start < 600 ? "Classical" : "Medieval", entry.theme],
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
        title: "Visual evidence and its limits",
        text: evidence.text,
        sourceIds: evidenceSources.map((source) => source.id),
      },
      ...(reading
        ? [
            {
              ...reading,
              sourceIds: [...sources, ...(classicalAdditionalSources[entry.id] ?? [])].map(
                (source) => source.id,
              ),
            },
          ]
        : []),
      ...(video && videoSource
        ? [
            {
              title: "Watch the site: a guided comparison",
              text: `${video.focus} Open the video on the publisher's site using the link below. Film and recording rights remain with the credited publisher.`,
              sourceIds: [videoSource.id],
            },
          ]
        : []),
    ],
    interpretationNotes: [
      { kind: "uncertainty", text: entry.limits, sourceIds: sources.map((s) => s.id) },
    ],
    sources: [...evidenceSources, ...(videoSource ? [videoSource] : [])],
    citations: sources.map((source) => ({
      sourceId: source.id,
      locator:
        entry.locator ??
        "Historical overview and chronology; see the linked catalogue separately for pictured objects.",
    })),
    imageNeeds: [{ tag: evidence.tag, instruction: evidence.need }],
    contentNeeds: entry.map
      ? [
          {
            tag: `MAP_PLACEHOLDER_${entry.id.replaceAll("-", "_").toUpperCase()}`,
            instruction: entry.map,
          },
        ]
      : [],
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
              credit: video!.credit ?? "UNESCO TV / NHK Nippon Hoso Kyokai",
              license: "External viewing link only; rights retained by the publisher",
              sourceUrl: videoSource.url,
              historicalContext:
                "Modern educational footage or scientific imaging, not contemporary footage of ancient or medieval events.",
            },
          ]
        : []),
    ],
    visualReference: { id: `exhibit-${entry.id}`, kind: "svg" },
  };
});
