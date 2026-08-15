import {
  compareHistoricalDates,
  formatHistoricalDate,
  interpolateHistoricalDates,
} from "@/lib/historical-date";
import type { HistoricalEra } from "@/types/history";
import type {
  ResolvedTimelinePosition,
  TimelineEventNode,
  TimelineNavigationEra,
  TimelinePoint,
} from "@/types/timeline";

const clampProgress = (progress: number) => Math.min(Math.max(progress, 0), 1);

export const flattenTimeline = (eras: readonly HistoricalEra[]): readonly TimelineEventNode[] => {
  const nodes = [...eras]
    .sort((left, right) => left.order - right.order)
    .flatMap((era) =>
      era.periods.flatMap((period) => period.events.map((event) => ({ era, period, event }))),
    )
    .sort(
      (left, right) =>
        compareHistoricalDates(left.event.dateStart, right.event.dateStart) ||
        left.era.order - right.era.order,
    );

  const eventIds = new Set<string>();

  for (const { event } of nodes) {
    if (eventIds.has(event.id)) {
      throw new Error(`Duplicate historical event id: ${event.id}`);
    }

    if (event.dateEnd && compareHistoricalDates(event.dateStart, event.dateEnd) > 0) {
      throw new Error(`Historical event ends before it starts: ${event.id}`);
    }

    eventIds.add(event.id);
  }

  return nodes;
};

export const toTimelinePoints = (nodes: readonly TimelineEventNode[]): readonly TimelinePoint[] =>
  nodes.map(({ event }) => ({
    id: event.id,
    date: event.dateStart,
    approximate: event.approximateDate,
    dateLabel: formatHistoricalDate(event.dateStart, { approximate: event.approximateDate }),
    interpolateToNext: event.contentStatus !== "placeholder",
  }));

export function resolveTimelinePosition<T>(
  items: readonly T[],
  points: readonly TimelinePoint[],
  progress: number,
): ResolvedTimelinePosition<T> {
  if (items.length === 0 || items.length !== points.length) {
    throw new Error("Timeline items and points must be non-empty and have matching lengths.");
  }

  const boundedProgress = clampProgress(progress);
  const position = boundedProgress * (items.length - 1);
  const index = Math.round(position);
  const isAtPoint = Math.abs(position - index) < 0.002;
  const fromIndex = isAtPoint ? index : Math.floor(position);
  const toIndex = isAtPoint ? index : Math.ceil(position);
  const segmentProgress = isAtPoint ? 0 : position - fromIndex;
  const item = items[index];
  const fromPoint = points[fromIndex];
  const toPoint = points[toIndex];

  if (!item || !fromPoint || !toPoint) {
    throw new Error("Timeline position resolved outside the available data.");
  }

  const interpolatesDate = fromPoint.interpolateToNext;
  const date = interpolatesDate
    ? interpolateHistoricalDates(fromPoint.date, toPoint.date, segmentProgress)
    : index === fromIndex
      ? fromPoint.date
      : toPoint.date;
  const nearestPoint = points[index];

  return {
    index,
    item,
    date,
    dateLabel:
      (isAtPoint || !interpolatesDate) && nearestPoint
        ? nearestPoint.dateLabel
        : formatHistoricalDate(date, { approximate: true }),
    progress: boundedProgress,
    segmentProgress,
    fromIndex,
    toIndex,
  };
}

export const resolveTimelinePoint = (points: readonly TimelinePoint[], progress: number) =>
  resolveTimelinePosition(points, points, progress);

export const buildTimelineNavigation = (
  eras: readonly HistoricalEra[],
  nodes: readonly TimelineEventNode[],
): readonly TimelineNavigationEra[] => {
  const eventIndexes = new Map(nodes.map(({ event }, index) => [event.id, index]));

  return [...eras]
    .sort((left, right) => left.order - right.order)
    .map((era) => {
      const periods = era.periods.map((period) => {
        const indexes = period.events
          .map((event) => eventIndexes.get(event.id))
          .filter((index): index is number => index !== undefined);

        return {
          id: period.id,
          title: period.title,
          firstEventIndex: indexes.length > 0 ? Math.min(...indexes) : null,
        };
      });
      const eraIndexes = periods
        .map((period) => period.firstEventIndex)
        .filter((index): index is number => index !== null);

      return {
        id: era.id,
        title: era.title,
        firstEventIndex: eraIndexes.length > 0 ? Math.min(...eraIndexes) : null,
        periods,
      };
    });
};
