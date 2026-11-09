"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { HistoricalVideo } from "@/types/history";
import type { TimelineDisplayEvent } from "@/types/timeline-presentation";
import { PrehistoryDiagram } from "./prehistory-diagram";
import { PrehistoryGallery } from "./prehistory-gallery";
import { ContentNeeds } from "@/components/historical-events/content-needs";
import { EventDetails, ImageNeeds } from "@/components/historical-events/event-details";
import { HistoricalVideos } from "@/components/historical-events/historical-videos";

const storyStageLabels = ["What happened", "Why it matters", "Evidence & limits"] as const;

function InlineHistoricalVideo({ video }: { readonly video: HistoricalVideo }) {
  const instance = useId();
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!playing) return;
    // Scenes remain mounted while scrolling; hidden iframes otherwise keep playing.
    const stopWhenHidden = () => {
      if (playerRef.current?.closest('[aria-hidden="true"], [inert]')) setPlaying(false);
    };
    const observer = new MutationObserver(stopWhenHidden);
    for (let parent = playerRef.current?.parentElement; parent; parent = parent.parentElement) {
      observer.observe(parent, { attributes: true, attributeFilter: ["aria-hidden", "inert"] });
    }
    stopWhenHidden();
    return () => observer.disconnect();
  }, [playing]);

  useEffect(() => {
    const stopOthers = (event: Event) => {
      if ((event as CustomEvent<string>).detail !== instance) setPlaying(false);
    };
    window.addEventListener("history-video-start", stopOthers);
    return () => window.removeEventListener("history-video-start", stopOthers);
  }, [instance]);

  const loadPlayer = () => {
    window.dispatchEvent(new CustomEvent("history-video-start", { detail: instance }));
    setPlaying(true);
  };

  return (
    <div className="inline-exhibit-video" ref={playerRef}>
      {video.mode === "youtube" && playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.videoId}?playsinline=1&rel=0`}
          title={video.title}
          allow="encrypted-media; fullscreen; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          loading="lazy"
          allowFullScreen
        />
      ) : (
        <div className="inline-video-prompt">
          <span aria-hidden="true">▶</span>
          <strong>{video.title}</strong>
          <small>{video.publisher}</small>
          {video.mode === "youtube" && (
            <button type="button" aria-label={`Load video: ${video.title}`} onClick={loadPlayer}>
              Load video
            </button>
          )}
        </div>
      )}
      <a href={video.watchUrl} target="_blank" rel="noopener noreferrer">
        {video.mode === "youtube" ? "Watch on YouTube ↗" : "Open video source ↗"}
      </a>
    </div>
  );
}

export function PrehistoryExhibit({ event }: { readonly event: TimelineDisplayEvent }) {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [imageChoice, setImageChoice] = useState<number | "video" | null>(null);
  const [lastImage, setLastImage] = useState(0);
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
  const imageIndex = visual.stageImages
    ? visual.stageImages[selected]
    : selected === 0
      ? 0
      : visual.diagram === "core"
        ? 2
        : 1;
  const canBrowse = visual.browseImages && !!visual.gallery?.length;
  const inlineVideo = visual.watchVideo
    ? (record.videos?.find((video) => video.mode === "youtube") ?? record.videos?.[0])
    : undefined;
  const defaultChoice = selected === 2 && inlineVideo ? "video" : imageIndex;
  const displayedChoice = canBrowse && imageChoice !== null ? imageChoice : defaultChoice;
  const showVideo = displayedChoice === "video" && !!inlineVideo;
  const photo = typeof displayedChoice === "number" ? visual.gallery?.[displayedChoice] : undefined;
  const showPhoto = photo && (selected < 2 || (canBrowse && typeof imageChoice === "number"));
  const browseImage = (direction: number) => {
    const count = visual.gallery?.length ?? 0;
    if (!count) return;
    const current = showPhoto && typeof displayedChoice === "number" ? displayedChoice : lastImage;
    const next = (current + direction + count) % count;
    setLastImage(next);
    setImageChoice(next);
  };
  const showImageSpace = !canBrowse && !showPhoto && selected === 1 && !!record.imageNeeds?.length;
  const layout =
    visual.layout ??
    (visual.gallery
      ? visual.diagram === "core"
        ? "photograph"
        : "artefact"
      : ["strata", "ashmound"].includes(visual.diagram)
        ? "strata"
        : ["village", "town", "pit", "camp", "rice"].includes(visual.diagram)
          ? "settlement"
          : "comparison");
  return (
    <div
      className="prehistory-exhibit story-exhibit"
      data-layout={layout}
      data-media-browser={canBrowse || showVideo || undefined}
      ref={rootRef}
    >
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
                aria-label={`${index + 1}. ${storyStageLabels[index]}`}
                aria-pressed={selected === index}
                aria-controls={panelId}
                onClick={() => setSelected(index)}
              >
                <span>0{index + 1}</span>
                {storyStageLabels[index]}
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
            {record.videos?.length
              ? "Explore videos, images & evidence"
              : visual.gallery?.length
                ? `Explore ${visual.gallery.length} ${visual.gallery.length === 1 ? "image" : "images"} & full evidence`
                : "Read full evidence & image requirements"}
          </button>
        </div>
        <figure className="exhibit-figure">
          <div className="exhibit-figure-header story-copy">
            <span>
              {showPhoto
                ? photo.category
                : showVideo
                  ? "Video guide"
                  : showImageSpace
                    ? "Image to add"
                    : "Teaching diagram"}
            </span>
            <span>{storyStageLabels[selected]}</span>
          </div>
          <div className="exhibit-drawing" id={`${panelId}-visual`} key={selected}>
            {showPhoto ? (
              // Keep archaeological scales and labels intact.
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
            ) : showVideo ? (
              <InlineHistoricalVideo video={inlineVideo} />
            ) : showImageSpace ? (
              <ImageNeeds event={record} compact />
            ) : (
              <PrehistoryDiagram kind={visual.diagram} title={visual.title} />
            )}
          </div>
          {canBrowse && (
            <div className="exhibit-media-controls" role="group" aria-label="Browse exhibit images">
              <button
                type="button"
                aria-label="Previous image"
                aria-controls={`${panelId}-visual`}
                onClick={() => browseImage(-1)}
              >
                ←
              </button>
              <span role="status" aria-live="polite">
                {showPhoto && typeof displayedChoice === "number"
                  ? `${displayedChoice + 1} / ${visual.gallery!.length}`
                  : showVideo
                    ? "Video"
                    : "Diagram"}
              </span>
              <button
                type="button"
                aria-label="Next image"
                aria-controls={`${panelId}-visual`}
                onClick={() => browseImage(1)}
              >
                →
              </button>
              <button
                type="button"
                aria-controls={`${panelId}-visual`}
                onClick={() => {
                  if (showPhoto) {
                    setLastImage(displayedChoice as number);
                    setImageChoice("video");
                  } else {
                    setImageChoice(lastImage);
                  }
                }}
              >
                {showPhoto ? "Watch video" : "View images"}
              </button>
            </div>
          )}
          <figcaption className="story-copy">
            <strong>
              {showPhoto
                ? photo.title
                : showVideo
                  ? inlineVideo.title
                  : showImageSpace
                    ? "A place for the original evidence"
                    : visual.title}
            </strong>
            <span>
              {showPhoto
                ? photo.caption
                : showVideo
                  ? inlineVideo.context
                  : showImageSpace
                    ? "Open full evidence for the image specification and historical sources."
                    : visual.caption}
            </span>
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
            {record.dateScope && (
              <p className="story-full-note">
                <strong>Date scope: </strong>
                {record.dateScope}
              </p>
            )}
            {!!record.videos?.length && <HistoricalVideos videos={record.videos} />}
            {visual.points.map((item) => (
              <section className="story-full-note" key={item.field}>
                <h3>{item.label}</h3>
                <p>{detailFor(item.field)}</p>
              </section>
            ))}
            <EventDetails event={record} />
            {visual.gallery?.length ? (
              <PrehistoryGallery images={visual.gallery} />
            ) : record.contentNeeds?.length ? null : (
              <aside className="exhibit-media-slot">
                <h3>Visual evidence to add</h3>
                <p>
                  Add a site photograph, artefact plate or measured plan for{" "}
                  {event.title.toLowerCase()}. Include the original caption, site or specimen ID,
                  scale, source link and image credit. The scene uses a labelled teaching diagram.
                </p>
              </aside>
            )}
            <ContentNeeds event={record} />
            <ImageNeeds event={record} />
            {record.sources.length > 0 && (
              <section className="story-full-note">
                <h3>Sources for this record</h3>
                <ul className="history-source-list">
                  {record.sources.map((source) => (
                    <li key={source.id}>
                      <a href={source.url} target="_blank" rel="noreferrer">
                        {source.title}
                      </a>
                      {record.citations
                        ?.filter((c) => c.sourceId === source.id)
                        .map((c, i) => (
                          <small key={i}>{c.locator}</small>
                        ))}
                    </li>
                  ))}
                </ul>
              </section>
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
