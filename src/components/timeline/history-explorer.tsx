"use client";

import { useRef, useState } from "react";
import type { TimelineDisplayEvent } from "@/types/timeline-presentation";
import { ContentNeeds } from "@/components/historical-events/content-needs";
import { EventDetails, ImageNeeds } from "@/components/historical-events/event-details";
import {
  centuryOptions,
  contemporaryEvents,
  emptyHistoryFilters,
  filterHistory,
} from "@/lib/history-explorer";

interface HistoryExplorerProps {
  readonly events: readonly TimelineDisplayEvent[];
  readonly activeEvent: TimelineDisplayEvent;
  readonly onNavigate: (index: number) => void;
}

export function HistoryExplorer({ events, activeEvent, onNavigate }: HistoryExplorerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [mode, setMode] = useState<"browse" | "evidence">("browse");
  const [filters, setFilters] = useState(emptyHistoryFilters);
  const [copyStatus, setCopyStatus] = useState("");
  const periods = [
    ...new Map(
      events
        .filter((event) => filters.era === "all" || event.node.era.id === filters.era)
        .map((event) => [event.node.period.id, event.periodTitle]),
    ).entries(),
  ];
  const eras = [...new Map(events.map((event) => [event.node.era.id, event.eraTitle])).entries()];
  const civilizations = [
    ...new Set(events.flatMap((event) => event.node.event.civilizations ?? [])),
  ].sort();
  const matches = filterHistory(events, filters);
  const readerEra = filters.era === "all" ? activeEvent.node.era.id : filters.era;
  const contemporaries = contemporaryEvents(events, activeEvent);
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
                  value={filters.query}
                  onChange={(event) => setFilters({ ...filters, query: event.target.value })}
                  placeholder="Try Aryabhata, Patan, temple…"
                />
              </label>
              <label>
                Period
                <select
                  value={filters.period}
                  onChange={(event) => setFilters({ ...filters, period: event.target.value })}
                >
                  <option value="all">All periods</option>
                  {periods.map(([id, title]) => (
                    <option key={id} value={id}>
                      {title}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Era
                <select
                  value={filters.era}
                  onChange={(event) =>
                    setFilters({ ...filters, era: event.target.value, period: "all" })
                  }
                >
                  <option value="all">All eras</option>
                  {eras.map(([id, title]) => (
                    <option key={id} value={id}>
                      {title}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Civilization or community
                <select
                  value={filters.civilization}
                  onChange={(event) => setFilters({ ...filters, civilization: event.target.value })}
                >
                  <option value="all">All communities</option>
                  {civilizations.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Century · overlapping dates
                <select
                  value={filters.century}
                  onChange={(event) => setFilters({ ...filters, century: event.target.value })}
                >
                  <option value="all">All dates, including prehistory</option>
                  {centuryOptions.map(({ id, label }) => (
                    <option key={id} value={id}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
              <button
                className="journey-button history-reset"
                type="button"
                onClick={() => setFilters(emptyHistoryFilters)}
              >
                Reset all filters
              </button>
            </div>
            <p className="history-filter-hint">
              Centuries cover 800 BCE–2000 CE and include overlapping topic ranges. Results stay in
              chronological order; selecting a result returns to the full timeline.
            </p>
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
                      setFilters(emptyHistoryFilters);
                    }}
                  >
                    Clear filters
                  </button>
                </p>
              )}
            </div>
            <a
              className="history-reader-link"
              href={
                readerEra === "post-independence-present"
                  ? "#post-independence-reader"
                  : readerEra === "indian-independence-movement"
                    ? "#independence-reader"
                    : readerEra === "colonial-era-british-rule"
                      ? "#colonial-reader"
                      : readerEra === "early-modern-india"
                        ? "#early-modern-reader"
                        : readerEra === "classical-medieval-eras"
                          ? "#classical-reader"
                          : readerEra === "second-urbanization-empires"
                            ? "#empires-reader"
                            : readerEra === "ancient-india-early-transitions"
                              ? "#ancient-reader"
                              : "#prehistory-reader"
              }
              onClick={() => dialogRef.current?.close()}
            >
              Read all periods, including undated evidence →
            </a>
          </>
        ) : (
          <div className="history-evidence">
            <p className="exhibit-date">{activeEvent.dateLabel}</p>
            <p>{record.description}</p>
            {record.dateScope && (
              <p>
                <strong>Date scope: </strong>
                {record.dateScope}
              </p>
            )}
            {record.significance && <p>{record.significance}</p>}
            <p className="exhibit-location">{record.regions?.join(" · ")}</p>
            {record.civilizations?.length ? (
              <p>
                <strong>Community: </strong>
                {record.civilizations.join(" · ")}
              </p>
            ) : null}
            {record.people.length ? (
              <p>
                <strong>People: </strong>
                {record.people.join(" · ")}
              </p>
            ) : null}
            {record.interpretationNotes?.map((note, index) => (
              <aside className="history-evidence-note" key={index}>
                <strong>Evidence & interpretation</strong>
                <p>{note.text}</p>
              </aside>
            ))}
            <EventDetails event={record} />
            <ImageNeeds event={record} />
            <h3>Sources</h3>
            <ContentNeeds event={record} />
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
            {contemporaries.length > 0 && (
              <section className="history-contemporaries">
                <h3>Also within these dates</h3>
                <p>
                  Overlapping topic windows, sometimes in distant regions. Comparison alone does not
                  establish contact or influence.
                </p>
                <div className="history-related">
                  {contemporaries.map((event) => (
                    <button
                      className="journey-button"
                      type="button"
                      key={event.id}
                      onClick={() => visit(event.id)}
                    >
                      {event.title}
                      <small>{event.dateLabel}</small>
                    </button>
                  ))}
                </div>
              </section>
            )}
            <p role="status" className="history-copy-status">
              {copyStatus}
            </p>
          </div>
        )}
      </dialog>
    </>
  );
}
