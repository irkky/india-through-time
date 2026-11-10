import type { HistoricalEvent } from "@/types/history";

export function ContentNeeds({ event }: { readonly event: HistoricalEvent }) {
  if (!event.contentNeeds?.length) return null;
  return (
    <aside className="exhibit-media-slot" aria-label="Coverage note">
      <h3>Coverage note</h3>
      <p>
        This record is part of an evolving educational catalogue. Additional regional evidence and
        specialist research have been identified for review, but will appear here only after their
        dates and sources are verified.
      </p>
    </aside>
  );
}
