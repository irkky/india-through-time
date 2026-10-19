"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { TimelineDisplayEvent } from "@/types/timeline-presentation";
import { PrehistoryDiagram } from "./prehistory-diagram";
import { PrehistoryGallery } from "./prehistory-gallery";

export function PrehistoryExhibit({ event }: { readonly event: TimelineDisplayEvent }) {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const root = rootRef.current;
    const update = () => setSelected(Number(root?.dataset.storyStep ?? 0));
    root?.addEventListener("story-step", update);
    return () => root?.removeEventListener("story-step", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    dialogRef.current?.showModal();
    return () => {
      document.documentElement.style.overflow = previous;
    };
  }, [open]);
  const visual = event.exhibit;
  if (!visual) return null;
  const record = event.node.event;
  const point = visual.points[selected] ?? visual.points[0];
  const detailFor = (field: string) =>
    field === "interpretation"
      ? (record.interpretationNotes?.[0]?.text ?? event.description)
      : field === "significance"
        ? (record.significance ?? event.description)
        : event.description;
  const photo = visual.gallery?.[selected === 0 ? 0 : visual.diagram === "core" ? 2 : 1];
  const showPhoto = photo && selected < 2;
  const layout = visual.gallery
    ? visual.diagram === "core"
      ? "photograph"
      : "artefact"
    : ["strata", "ashmound"].includes(visual.diagram)
      ? "strata"
      : ["village", "town", "pit", "camp", "rice"].includes(visual.diagram)
        ? "settlement"
        : "comparison";
  return (
    <div className="prehistory-exhibit story-exhibit" data-layout={layout} ref={rootRef}>
      <div className="prehistory-exhibit-inner">
        <div className="prehistory-exhibit-copy story-copy">
          <p className="exhibit-kicker">{event.periodTitle}</p>
          <p className="exhibit-date">{event.dateLabel}</p>
          <h2>{event.title}</h2>
          <p className="exhibit-location">{record.regions?.join(" / ")}</p>
          <div className="story-steps" role="group" aria-label="Story stages">
            {visual.points.map((item, index) => (
              <button
                key={item.field}
                type="button"
                className="exhibit-point"
                aria-label={`${index + 1}. ${item.label}`}
                aria-pressed={selected === index}
                aria-controls={panelId}
                onClick={() => setSelected(index)}
              >
                <span>0{index + 1}</span>
                {["Locate", "Examine", "Interpret"][index]}
              </button>
            ))}
          </div>
          <div id={panelId} className="exhibit-insight">
            <span className="exhibit-insight-number">0{selected + 1}</span>
            <div>
              <h3>{point?.label}</h3>
              <p>{detailFor(point?.field ?? "description")}</p>
            </div>
          </div>
          <button type="button" className="gallery-jump" onClick={() => setOpen(true)}>
            {visual.gallery?.length
              ? `Explore ${visual.gallery.length} images & full evidence`
              : "Read full evidence & image requirements"}
          </button>
        </div>
        <figure className="exhibit-figure">
          <div className="exhibit-figure-header story-copy">
            <span>{showPhoto ? photo.category : "Teaching diagram"}</span>
            <span>{["Location", "Material evidence", "Interpretation"][selected]}</span>
          </div>
          <div className="exhibit-drawing" key={selected}>
            {showPhoto ? (
              // Keep archaeological scales and labels intact.
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
            ) : (
              <PrehistoryDiagram kind={visual.diagram} title={visual.title} />
            )}
          </div>
          <figcaption className="story-copy">
            <strong>{showPhoto ? photo.title : visual.title}</strong>
            <span>{showPhoto ? photo.caption : visual.caption}</span>
          </figcaption>
        </figure>
      </div>
      <dialog
        ref={dialogRef}
        className="history-dialog exhibit-dialog"
        aria-labelledby={`${panelId}-title`}
        onClose={() => setOpen(false)}
      >
        {open && (
          <>
            <header className="history-dialog-header">
              <h2 id={`${panelId}-title`}>{event.title}</h2>
              <button
                type="button"
                className="journey-button"
                onClick={() => dialogRef.current?.close()}
              >
                Close
              </button>
            </header>
            <p>
              {event.dateLabel} / {record.regions?.join(" / ")}
            </p>
            {visual.points.map((item) => (
              <section className="story-full-note" key={item.field}>
                <h3>{item.label}</h3>
                <p>{detailFor(item.field)}</p>
              </section>
            ))}
            {visual.gallery?.length ? (
              <PrehistoryGallery images={visual.gallery} />
            ) : (
              <aside className="exhibit-media-slot">
                <h3>Visual evidence to add</h3>
                <p>
                  Add a site photograph, artefact plate or measured plan for{" "}
                  {event.title.toLowerCase()}. Include the original caption, site or specimen ID,
                  scale, source link and image credit. The scene uses a labelled teaching diagram.
                </p>
              </aside>
            )}
            <p>
              Source references and the complete chronological account are available in Evidence &
              sources and the reading section below the journey.
            </p>
          </>
        )}
      </dialog>
    </div>
  );
}
