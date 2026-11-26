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
  ...Array.from({ length: 21 }, (_, i) => ({
    id: `CE-${i + 1}`,
    label: `${i * 100 + 1}–${(i + 1) * 100} CE`,
  })),
];

export const centuryCoverageHelp = `Century options run from ${centuryOptions[0]!.label} through ${centuryOptions.at(-1)!.label}. Dated content in this timeline currently ends in 2025 CE; overlapping topic ranges remain included.`;

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

function searchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/palaeolithic/g, "paleolithic")
    .replace(/\bharappans?\b/g, "harappa")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

export function filterHistory(events: readonly TimelineDisplayEvent[], filters: HistoryFilters) {
  const terms = searchText(filters.query).split(" ").filter(Boolean);
  const matches = events.filter((event) => {
    const record = event.node.event;
    return (
      (filters.era === "all" || event.node.era.id === filters.era) &&
      (filters.period === "all" || event.node.period.id === filters.period) &&
      (filters.civilization === "all" || record.civilizations?.includes(filters.civilization)) &&
      matchesCentury(event, filters.century)
    );
  });
  if (!terms.length) return matches;
  return matches
    .flatMap((event) => {
      const record = event.node.event;
      const title = searchText(event.title);
      const places = searchText(
        [
          ...(record.regions ?? []),
          ...(record.locations ?? []).map((location) => location.name),
        ].join(" "),
      );
      const body = searchText(
        [
          event.description,
          event.periodTitle,
          event.eraTitle,
          record.significance,
          ...(record.civilizations ?? []),
          ...record.categories,
          ...record.people,
          ...(record.details ?? []).map((detail) => detail.title + " " + detail.text),
        ].join(" "),
      );
      let score = 0;
      for (const term of terms) {
        if (title.includes(term)) score += 4;
        else if (places.includes(term)) score += 2;
        else if (body.includes(term)) score += 1;
        else return [];
      }
      return [{ event, score }];
    })
    .sort((a, b) => b.score - a.score)
    .map((match) => match.event);
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
