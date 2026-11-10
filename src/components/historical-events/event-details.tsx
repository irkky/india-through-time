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
      aria-label="Visual evidence status"
    >
      {(compact ? event.imageNeeds.slice(0, 1) : event.imageNeeds).map((need) => (
        <section className="image-space-card" key={need.tag}>
          <span className="image-space-icon" aria-hidden="true">
            ▧
          </span>
          <h3>Visual evidence under review</h3>
          <p>
            A verified image is not yet published for this part of {event.title}. The teaching
            diagram remains in place until a source, context and reuse status can be documented.
          </p>
          {!compact && (
            <small>
              Image provenance and archaeological context are reviewed separately from the
              event&apos;s historical sources.
            </small>
          )}
        </section>
      ))}
    </div>
  );
}
