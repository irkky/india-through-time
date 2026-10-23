import type { HistoricalEvent } from "@/types/history";

export function EventDetails({ event }: { readonly event: HistoricalEvent }) {
  if (!event.details?.length) return null;
  return (
    <div className="event-details" aria-label="Detailed historical account">
      {event.details.map((detail) => (
        <section className="story-full-note" key={detail.title}>
          <h3>{detail.title}</h3>
          <p>{detail.text}</p>
          <p className="detail-sources">
            {detail.sourceIds.map((id) => {
              const source = event.sources.find((s) => s.id === id);
              return source ? (
                <a key={id} href={source.url} target="_blank" rel="noreferrer">
                  {source.title}
                </a>
              ) : null;
            })}
          </p>
        </section>
      ))}
    </div>
  );
}

export function ImageNeeds({
  event,
  compact = false,
}: {
  readonly event: HistoricalEvent;
  readonly compact?: boolean;
}) {
  if (!event.imageNeeds?.length) return null;
  return (
    <div
      className={compact ? "image-space image-space-compact" : "image-spaces"}
      aria-label="Reserved image spaces"
    >
      {(compact ? event.imageNeeds.slice(0, 1) : event.imageNeeds).map((need) => (
        <section className="image-space-card" key={need.tag}>
          <span className="image-space-icon" aria-hidden="true">
            ▧
          </span>
          <h3>Reserved for visual evidence</h3>
          <strong className="content-need-tag">{need.tag}</strong>
          <p>{need.instruction}</p>
          {!compact && (
            <small>
              Include creator, source URL, reuse licence, ancient date or phase, and the
              photograph&apos;s capture date. Keep archaeological scales and labels visible.
            </small>
          )}
        </section>
      ))}
    </div>
  );
}
