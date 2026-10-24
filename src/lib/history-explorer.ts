import type { TimelineDisplayEvent } from "@/types/timeline-presentation";
import { bce, ce, toTimelineOrdinal } from "./historical-date";

export interface HistoryFilters {
  query: string;
  era: string;
  period: string;
  civilization: string;
  century: string;
}
export const emptyHistoryFilters: HistoryFilters = {
  query: "",
  era: "all",
  period: "all",
  civilization: "all",
  century: "all",
};
export const centuryOptions = [
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `BCE-${8 - i}`,
    label: `${(8 - i) * 100}–${(7 - i) * 100 + 1} BCE`,
  })),
  ...Array.from({ length: 18 }, (_, i) => ({
    id: `CE-${i + 1}`,
    label: `${i * 100 + 1}–${(i + 1) * 100} CE`,
  })),
];

export function matchesCentury(event: TimelineDisplayEvent, century: string): boolean {
  if (century === "all") return true;
  const [era, raw] = century.split("-");
  const number = Number(raw);
  if (!Number.isInteger(number) || number < 1 || !["BCE", "CE"].includes(era!)) return false;
  const record = event.node.event;
  if (record.dateStart.kind !== "calendar") return false;
  const start = toTimelineOrdinal(era === "BCE" ? bce(number * 100) : ce((number - 1) * 100 + 1));
  const end = toTimelineOrdinal(era === "BCE" ? bce((number - 1) * 100 + 1) : ce(number * 100));
  return (
    toTimelineOrdinal(record.dateStart) <= end &&
    toTimelineOrdinal(record.dateEnd ?? record.dateStart) >= start
  );
}

export function filterHistory(events: readonly TimelineDisplayEvent[], filters: HistoryFilters) {
  const needle = filters.query.trim().toLowerCase();
  return events.filter((event) => {
    const record = event.node.event;
    return (
      (filters.era === "all" || event.node.era.id === filters.era) &&
      (filters.period === "all" || event.node.period.id === filters.period) &&
      (filters.civilization === "all" || record.civilizations?.includes(filters.civilization)) &&
      matchesCentury(event, filters.century) &&
      [
        event.title,
        event.description,
        event.periodTitle,
        event.eraTitle,
        record.significance,
        ...(record.regions ?? []),
        ...(record.locations ?? []).map((location) => location.name),
        ...(record.civilizations ?? []),
        ...record.categories,
        ...record.people,
        ...(record.details ?? []).map((detail) => `${detail.title} ${detail.text}`),
      ]
        .join(" ")
        .toLowerCase()
        .includes(needle)
    );
  });
}

/** Overlap is chronological comparison, not evidence of historical contact. */
export function contemporaryEvents(
  events: readonly TimelineDisplayEvent[],
  active: TimelineDisplayEvent,
) {
  const record = active.node.event;
  const start = toTimelineOrdinal(record.dateStart);
  const end = toTimelineOrdinal(record.dateEnd ?? record.dateStart);
  return events
    .filter(
      (event) =>
        event.id !== active.id &&
        toTimelineOrdinal(event.node.event.dateStart) <= end &&
        toTimelineOrdinal(event.node.event.dateEnd ?? event.node.event.dateStart) >= start,
    )
    .sort(
      (a, b) =>
        Math.abs(toTimelineOrdinal(a.node.event.dateStart) - start) -
        Math.abs(toTimelineOrdinal(b.node.event.dateStart) - start),
    )
    .slice(0, 6);
}
