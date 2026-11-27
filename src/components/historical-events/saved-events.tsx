"use client";

import { useSyncExternalStore } from "react";

const key = "india-through-time.saved-events";
const changed = "history-collection-change";
let fallback = "[]";
let memoryOnly = false;
function snapshot() {
  if (memoryOnly) return fallback;
  try {
    return localStorage.getItem(key) ?? "[]";
  } catch {
    return fallback;
  }
}
function subscribe(notify: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === key || event.key === null) notify();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(changed, notify);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(changed, notify);
  };
}
function decode(value: string): string[] {
  try {
    const ids: unknown = JSON.parse(value);
    return Array.isArray(ids) ? ids.filter((id): id is string => typeof id === "string") : [];
  } catch {
    return [];
  }
}
function toggle(id: string) {
  const ids = decode(snapshot());
  const next = JSON.stringify(ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id]);
  fallback = next;
  try {
    localStorage.setItem(key, next);
    memoryOnly = false;
  } catch {
    memoryOnly = true;
  }
  window.dispatchEvent(new Event(changed));
}
const serverSnapshot = () => null;
function useSaved() {
  const value = useSyncExternalStore<string | null>(subscribe, snapshot, serverSnapshot);
  return value === null ? null : decode(value);
}

export function SaveEvent({ id }: { id: string }) {
  const ids = useSaved();
  const saved = ids?.includes(id) ?? false;
  return (
    <button
      className="save-event"
      disabled={ids === null}
      type="button"
      aria-pressed={saved}
      onClick={() => toggle(id)}
    >
      {saved ? "Saved to collection" : "Save event"}
    </button>
  );
}

export function SavedCollection({
  records,
  onVisit,
}: {
  records: readonly { id: string; title: string; dateLabel: string }[];
  onVisit?: (id: string) => void;
}) {
  const ids = useSaved();
  const items = records.filter((record) => ids?.includes(record.id));
  return (
    <details className="saved-collection">
      <summary>Saved events ({items.length})</summary>
      {!items.length && (
        <p>
          Choose “Save event” in a reader entry or exhibit’s evidence viewer to collect records on
          this browser.
        </p>
      )}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <div>
              {onVisit ? (
                <button type="button" onClick={() => onVisit(item.id)}>
                  {item.title}
                </button>
              ) : (
                <a href={"#read-" + item.id}>{item.title}</a>
              )}
              <small>{item.dateLabel}</small>
            </div>
            <button
              type="button"
              aria-label={"Remove " + item.title + " from collection"}
              onClick={() => toggle(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </details>
  );
}
