import type { TimelineDisplayEvent } from "@/types/timeline-presentation";

interface EventContentProps {
  readonly event: TimelineDisplayEvent;
}

export function EventContent({ event }: EventContentProps) {
  return (
    <article
      className="timeline-event"
      style={
        {
          "--event-accent": event.palette.accent,
          "--event-muted": event.palette.muted,
          color: event.palette.foreground,
        } as React.CSSProperties
      }
    >
      <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-[var(--event-accent)] uppercase sm:text-sm">
        {event.periodTitle}
      </p>
      <h1 className="max-w-3xl text-5xl leading-[0.93] font-semibold tracking-[-0.05em] text-balance sm:text-7xl lg:text-8xl">
        {event.title}
      </h1>
      <p className="mt-7 max-w-xl text-base leading-7 text-[var(--event-muted)] sm:text-lg sm:leading-8">
        {event.description}
      </p>
    </article>
  );
}
