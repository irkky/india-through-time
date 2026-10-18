import { compareHistoricalDates, toTimelineOrdinal } from "@/lib/historical-date";
import type { HistoricalEra } from "@/types/history";

export interface ContentIssue {
  readonly severity: "error" | "warning";
  readonly path: string;
  readonly message: string;
}

/** Semantic validation for typed local content; external JSON still needs schema parsing. */
export function validateHistory(eras: readonly HistoricalEra[]): readonly ContentIssue[] {
  const issues: ContentIssue[] = [];
  const ids = new Set<string>();
  const orders = new Set<number>();
  const events = eras.flatMap((era) => era.periods.flatMap((period) => period.events));
  const eventIds = new Set(events.map((event) => event.id));
  const report = (path: string, message: string, severity: ContentIssue["severity"] = "error") =>
    issues.push({ path, message, severity });
  const identify = (id: string, path: string) => {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) report(path, "Use a stable kebab-case identifier.");
    if (ids.has(id)) report(path, `Duplicate identifier: ${id}`);
    ids.add(id);
  };
  const localIds = (records: readonly { readonly id: string }[], path: string) => {
    const seen = new Set<string>();
    for (const { id } of records) {
      if (!id.trim() || seen.has(id)) report(path, `Empty or duplicate identifier: ${id}`);
      seen.add(id);
    }
    return seen;
  };
  for (const era of eras) {
    identify(era.id, era.id);
    if (!era.title.trim()) report(era.id, "Title is required.");
    if (!Number.isInteger(era.order) || orders.has(era.order))
      report(era.id, "Era order must be a unique integer.");
    orders.add(era.order);
    for (const period of era.periods) {
      const path = `${era.id}/${period.id}`;
      identify(period.id, path);
      if (!period.title.trim()) report(path, "Title is required.");
      for (const record of [period, ...period.events]) {
        const recordPath = `${path}/${record.id}`;
        try {
          if (record.dateStart) toTimelineOrdinal(record.dateStart);
          if (record.dateEnd) toTimelineOrdinal(record.dateEnd);
          if (
            record.dateStart &&
            record.dateEnd &&
            compareHistoricalDates(record.dateStart, record.dateEnd) > 0
          )
            report(recordPath, "End date precedes start date.");
        } catch {
          report(recordPath, "Dates must contain positive integer years and a valid calendar era.");
        }
      }
      for (const event of period.events) {
        const eventPath = `${path}/${event.id}`;
        identify(event.id, eventPath);
        if (!event.title.trim() || !event.description.trim())
          report(eventPath, "Title and description are required.");
        const sources = localIds(event.sources, `${eventPath}/sources`);
        localIds(event.media ?? [], `${eventPath}/media`);
        localIds(event.factAnnotations ?? [], `${eventPath}/facts`);
        for (const id of event.relatedEvents) {
          if (!eventIds.has(id) || id === event.id)
            report(eventPath, `Invalid related event: ${id}`);
        }
        for (const citation of event.citations ?? []) {
          if (!sources.has(citation.sourceId))
            report(eventPath, `Unknown citation source: ${citation.sourceId}`);
        }
        for (const note of event.interpretationNotes ?? []) {
          for (const id of note.sourceIds ?? []) {
            if (!sources.has(id)) report(eventPath, `Unknown interpretation source: ${id}`);
          }
        }
        if (!event.sources.length)
          report(
            eventPath,
            "No historical sources supplied.",
            event.contentStatus === "researched" ? "error" : "warning",
          );
        if (event.contentStatus !== "researched")
          report(eventPath, "Content has not been marked researched.", "warning");
        for (const media of event.media ?? []) {
          if (!media.alt.trim()) report(eventPath, `Media requires alternative text: ${media.id}`);
          if (!media.license || !(media.credit || media.attribution))
            report(eventPath, `Media rights/credit need review: ${media.id}`, "warning");
        }
      }
    }
  }
  return issues;
}
