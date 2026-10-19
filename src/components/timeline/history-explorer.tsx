"use client";

import { useRef, useState } from "react";
import type { TimelineDisplayEvent } from "@/types/timeline-presentation";
import { formatHistoricalDate } from "@/lib/historical-date";

interface HistoryExplorerProps {
  readonly events: readonly TimelineDisplayEvent[];
  readonly activeEvent: TimelineDisplayEvent;
  readonly onNavigate: (index: number) => void;
}

export function HistoryExplorer({ events, activeEvent, onNavigate }: HistoryExplorerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [mode, setMode] = useState<"browse" | "evidence">("browse");
  const [query, setQuery] = useState("");
  const [period, setPeriod] = useState("all");
  const [copyStatus, setCopyStatus] = useState("");
  const periods = [
    ...new Map(events.map((event) => [event.node.period.id, event.periodTitle])).entries(),
  ];
  const needle = query.trim().toLocaleLowerCase();
  const matches = events.filter(
    (event) =>
      (period === "all" || event.node.period.id === period) &&
      [
        event.title,
        event.description,
        event.periodTitle,
        ...(event.node.event.regions ?? []),
        ...event.node.event.categories,
      ]
        .join(" ")
        .toLocaleLowerCase()
        .includes(needle),
  );
  const open = (next: typeof mode) => {
    setMode(next);
    setCopyStatus("");
    dialogRef.current?.showModal();
  };
  const visit = (id: string) => {
    const index = events.findIndex((event) => event.id === id);
    if (index < 0) return;
    dialogRef.current?.close();
    onNavigate(index);
  };
  const copyLink = async () => {
    const url = new URL(window.location.href);
    url.hash = `event=${activeEvent.id}`;
    try {
      await navigator.clipboard.writeText(url.toString());
      setCopyStatus("Event link copied.");
    } catch {
      setCopyStatus(`Copy this link: ${url.toString()}`);
    }
  };
  const record = activeEvent.node.event;

  return (
    <>
      <button className="journey-button" type="button" onClick={() => open("browse")}>
        Explore chapter
      </button>
      <button
        className="journey-button journey-button-accent"
        type="button"
        onClick={() => open("evidence")}
      >
        Evidence & sources
      </button>
      <dialog ref={dialogRef} className="history-dialog" aria-labelledby="history-dialog-title">
        <header className="history-dialog-header">
          <div>
            <p className="exhibit-kicker">History of India</p>
            <h2 id="history-dialog-title">
              {mode === "browse" ? "Choose a moment" : activeEvent.title}
            </h2>
          </div>
          <button
            type="button"
            className="journey-button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close explorer"
          >
            Close ×
          </button>
        </header>
        <div className="history-dialog-switch">
          <button
            type="button"
            className="journey-button"
            aria-pressed={mode === "browse"}
            onClick={() => setMode("browse")}
          >
            Browse events
          </button>
          <button
            type="button"
            className="journey-button"
            aria-pressed={mode === "evidence"}
            onClick={() => setMode("evidence")}
          >
            Current evidence
          </button>
        </div>
        {mode === "browse" ? (
          <>
            <div className="history-search-controls">
              <label>
                Search events
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Try tools, rice, Kashmir…"
                />
              </label>
              <label>
                Period
                <select value={period} onChange={(event) => setPeriod(event.target.value)}>
                  <option value="all">All periods</option>
                  {periods.map(([id, title]) => (
                    <option key={id} value={id}>
                      {title}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <p className="history-result-count" role="status">
              {matches.length} {matches.length === 1 ? "event" : "events"}
            </p>
            <div className="history-search-results">
              {matches.map((event) => (
                <button
                  type="button"
                  key={event.id}
                  className="history-event-result"
                  onClick={() => visit(event.id)}
                  aria-current={event.id === activeEvent.id ? "true" : undefined}
                >
                  <span>
                    {event.dateLabel} · {event.periodTitle}
                  </span>
                  <strong>{event.title}</strong>
                  <small>{event.node.event.regions?.join(" · ") ?? event.eraTitle}</small>
                </button>
              ))}
              {!matches.length && (
                <p>
                  No matching events.{" "}
                  <button
                    className="journey-button"
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setPeriod("all");
                    }}
                  >
                    Clear filters
                  </button>
                </p>
              )}
            </div>
            <a
              className="history-reader-link"
              href="#prehistory-reader"
              onClick={() => dialogRef.current?.close()}
            >
              Read all periods, including undated evidence →
            </a>
          </>
        ) : (
          <div className="history-evidence">
            <p className="exhibit-date">
              {activeEvent.dateLabel}
              {record.dateEnd
                ? ` — ${formatHistoricalDate(record.dateEnd, { approximate: record.approximateDate })}`
                : ""}
            </p>
            <p>{record.description}</p>
            {record.significance && <p>{record.significance}</p>}
            <p className="exhibit-location">{record.regions?.join(" · ")}</p>
            {record.interpretationNotes?.map((note, index) => (
              <aside className="history-evidence-note" key={index}>
                <strong>Evidence & interpretation</strong>
                <p>{note.text}</p>
              </aside>
            ))}
            <h3>Sources</h3>
            {record.sources.length === 0 && (
              <p>This prototype record still needs historical citations.</p>
            )}
            <ol className="history-source-list">
              {record.sources.map((source) => (
                <li key={source.id}>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {source.title} ↗
                  </a>
                  <small>
                    {[source.author, source.publisher, source.publicationYear]
                      .filter(Boolean)
                      .join(" · ")}
                  </small>
                  {record.citations
                    ?.filter(({ sourceId }) => sourceId === source.id)
                    .map((citation, index) => (
                      <small key={index}>{citation.locator}</small>
                    ))}
                </li>
              ))}
            </ol>
            {record.media?.length ? (
              <>
                <h3>Images in this scene</h3>
                <ul className="history-source-list">
                  {record.media.map((media) => (
                    <li key={media.id}>
                      {media.alt}
                      <small>
                        {media.credit ?? "Credit not yet supplied"} ·{" "}
                        {media.license ?? "Reuse licence not yet verified"}
                      </small>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            {record.relatedEvents.length > 0 && (
              <>
                <h3>Connected evidence</h3>
                <div className="history-related">
                  {record.relatedEvents.map((id) => {
                    const related = events.find((event) => event.id === id);
                    return related ? (
                      <button
                        className="journey-button"
                        type="button"
                        key={id}
                        onClick={() => visit(id)}
                      >
                        {related.title} →
                      </button>
                    ) : null;
                  })}
                </div>
              </>
            )}
            <button type="button" className="journey-button" onClick={copyLink}>
              Copy event link
            </button>
            <p role="status" className="history-copy-status">
              {copyStatus}
            </p>
          </div>
        )}
      </dialog>
    </>
  );
}
