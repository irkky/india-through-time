import type { HistoricalEvent } from "@/types/history";

export function ContentNeeds({ event }: { readonly event: HistoricalEvent }) {
  if (!event.contentNeeds?.length) return null;
  return (
    <aside className="exhibit-media-slot" aria-label="Content to add">
      <h3>Collection checklist</h3>
      <ul className="content-needs-list">
        {event.contentNeeds.map((need) => (
          <li key={need.tag}>
            <strong className="content-need-tag">{need.tag}</strong>
            <p>{need.instruction}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
