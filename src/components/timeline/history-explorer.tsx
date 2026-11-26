"use client";

import { useRef, useState } from "react";
import type { TimelineDisplayEvent } from "@/types/timeline-presentation";

import {
  centuryCoverageHelp,
  centuryOptions,
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
  const [filters, setFilters] = useState(emptyHistoryFilters);
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
  const visit = (id: string) => {
    const index = events.findIndex((event) => event.id === id);
    if (index < 0) return;
    dialogRef.current?.close();
    onNavigate(index);
  };
  return (
    <>
      <button
        className="journey-button"
        type="button"
        onClick={() => dialogRef.current?.showModal()}
      >
        <span className="desktop-browse-label">Search timeline</span>
        <span className="mobile-browse-label">Browse timeline</span>
      </button>
      <dialog ref={dialogRef} className="history-dialog" aria-labelledby="history-dialog-title">
        <header className="history-dialog-header">
          <div>
            <p className="exhibit-kicker">History of India</p>
            <h2 id="history-dialog-title">Search timeline</h2>
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
        <div className="history-dialog-switch" role="group" aria-label="Search scope">
          {(
            [
              ["all", "All eras"],
              [activeEvent.node.era.id, "This era"],
            ] as const
          ).map(([era, label]) => (
            <button
              key={era}
              type="button"
              className="journey-button"
              aria-pressed={filters.era === era}
              onClick={() => setFilters({ ...filters, era, period: "all" })}
            >
              {label}
            </button>
          ))}
        </div>
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
        <label className="mobile-event-picker">
          Jump to event
          <select value="" onChange={(e) => visit(e.target.value)}>
            <option value="" disabled>
              Choose an event ({matches.length})
            </option>
            {matches.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </label>
        <p className="history-filter-hint">{centuryCoverageHelp}</p>
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
              ? "/read#post-independence-reader"
              : readerEra === "indian-independence-movement"
                ? "/read#independence-reader"
                : readerEra === "colonial-era-british-rule"
                  ? "/read#colonial-reader"
                  : readerEra === "early-modern-india"
                    ? "/read#early-modern-reader"
                    : readerEra === "classical-medieval-eras"
                      ? "/read#classical-reader"
                      : readerEra === "second-urbanization-empires"
                        ? "/read#empires-reader"
                        : readerEra === "ancient-india-early-transitions"
                          ? "/read#ancient-reader"
                          : "/read#prehistory-reader"
          }
          onClick={() => dialogRef.current?.close()}
        >
          Read all periods, including undated evidence →
        </a>
      </dialog>
    </>
  );
}
