"use client";

import Image from "next/image";
import { useContext, useCallback, useEffect, useId, useRef, useState } from "react";
import type { HistoricalVideo } from "@/types/history";
import type { TimelineDisplayEvent } from "@/types/timeline-presentation";
import { PrehistoryDiagram } from "./prehistory-diagram";
import { PrehistoryGallery } from "./prehistory-gallery";
import { ContentNeeds } from "@/components/historical-events/content-needs";
import { EventDetails, ImageNeeds } from "@/components/historical-events/event-details";
import { HistoricalVideos } from "@/components/historical-events/historical-videos";

import { JourneyEvents, NavigateToEvent } from "@/components/timeline/journey-events";
import { contemporaryEvents } from "@/lib/history-explorer";

const storyStageLabels = ["What happened", "Why it matters", "Evidence & limits"] as const;
const selectedStageByEvent = new Map<string, number>();
const manuallySelectedEvents = new Set<string>();

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
  const [selected, setSelectedState] = useState(() => selectedStageByEvent.get(event.id) ?? 0);
  const navigate = useContext(NavigateToEvent);
  const events = useContext(JourneyEvents);
  const [copyStatus, setCopyStatus] = useState("");
  const [open, setOpen] = useState(false);
  const [imageChoice, setImageChoice] = useState<number | "video" | null>(null);
  const [lastImage, setLastImage] = useState(0);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const jumpToCredit = useRef(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const setSelected = useCallback(
    (index: number) => {
      selectedStageByEvent.set(event.id, index);
      setSelectedState(index);
    },
    [event.id],
  );
  const chooseStage = (index: number) => {
    manuallySelectedEvents.add(event.id);
    setSelected(index);
  };
  useEffect(() => {
    const root = rootRef.current;
    const update = () => {
      if (!manuallySelectedEvents.has(event.id)) setSelected(Number(root?.dataset.storyStep ?? 0));
    };
    root?.addEventListener("story-step", update);
    return () => root?.removeEventListener("story-step", update);
  }, [event.id, setSelected]);
  useEffect(() => {
    const resumeScrollStages = () => {
      if (!manuallySelectedEvents.size) return;
      if (document.querySelector("dialog[open]")) return;
      manuallySelectedEvents.clear();
      setSelected(Number(rootRef.current?.dataset.storyStep ?? 0));
    };
    window.addEventListener("wheel", resumeScrollStages, { passive: true });
    window.addEventListener("touchstart", resumeScrollStages, { passive: true });
    window.addEventListener("keydown", resumeScrollStages);
    return () => {
      window.removeEventListener("wheel", resumeScrollStages);
      window.removeEventListener("touchstart", resumeScrollStages);
      window.removeEventListener("keydown", resumeScrollStages);
    };
  }, [setSelected]);
  useEffect(() => {
    const scene = rootRef.current?.closest<HTMLElement>(".visual-scene");
    if (!scene) return;
    const closeWhenInactive = () => {
      if (scene.getAttribute("aria-hidden") !== "true" && !scene.inert) return;
      if (dialogRef.current?.open) dialogRef.current.close();
      setOpen(false);
    };
    const observer = new MutationObserver(closeWhenInactive);
    observer.observe(scene, { attributes: true, attributeFilter: ["aria-hidden", "inert"] });
    closeWhenInactive();
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    dialogRef.current?.showModal();
    if (jumpToCredit.current) {
      const credit = dialogRef.current?.querySelector<HTMLElement>(".gallery-selected small");
      credit?.focus({ preventScroll: true });
      credit?.scrollIntoView({ block: "center" });
    }
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
  const contemporaries = open ? contemporaryEvents(events, event) : [];
  const visit = (id: string) => {
    dialogRef.current?.close();
    const index = events.findIndex((item) => item.id === id);
    if (index >= 0) navigate(index);
  };
  const copyLink = async () => {
    const url = new URL(window.location.href);
    url.hash = "event=" + event.id;
    try {
      await navigator.clipboard.writeText(url.href);
      setCopyStatus("Event link copied.");
    } catch {
      setCopyStatus("Copy this link: " + url.href);
    }
  };
  const openEvidence = (opener: HTMLButtonElement, credit = false) => {
    openerRef.current = opener;
    jumpToCredit.current = credit;
    setOpen(true);
  };
  const handleDialogClose = () => {
    setCopyStatus("");
    setOpen(false);
    const scene = rootRef.current?.closest<HTMLElement>(".visual-scene");
    if (scene?.getAttribute("aria-hidden") === "false" && !scene.inert)
      requestAnimationFrame(() => openerRef.current?.focus({ preventScroll: true }));
  };
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
                onClick={() => chooseStage(index)}
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
          <button
            type="button"
            className="gallery-jump"
            onClick={(e) => openEvidence(e.currentTarget)}
          >
            Explore evidence
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
            {showPhoto ? (
              <button
                className="image-credit-link"
                type="button"
                onClick={(e) => openEvidence(e.currentTarget, true)}
              >
                Image credit
              </button>
            ) : (
              <span>{storyStageLabels[selected]}</span>
            )}
          </div>
          <div className="exhibit-drawing" id={`${panelId}-visual`} key={selected}>
            {showPhoto ? (
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 760px) calc(100vw - 48px), 48vw"
                loading="lazy"
                unoptimized={photo.src.toLowerCase().endsWith(".gif")}
              />
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
              {inlineVideo && (
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
              )}
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
        onClose={handleDialogClose}
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
            <nav className="evidence-sections" aria-label="Evidence sections">
              {["Images", "Videos", "Sources & interpretation"].map((label, index) => (
                <button
                  type="button"
                  className="journey-button"
                  key={label}
                  onClick={() => {
                    const section = document.getElementById(panelId + "-section-" + index);
                    section?.focus({ preventScroll: true });
                    section?.scrollIntoView({ block: "start" });
                  }}
                >
                  {label}
                </button>
              ))}
              <a className="journey-button" href={"/read#read-" + event.id}>
                Read this event
              </a>
            </nav>
            <section id={panelId + "-section-0"} tabIndex={-1}>
              <h3>Images</h3>
              {visual.gallery?.length ? (
                <PrehistoryGallery
                  images={visual.gallery}
                  initialIndex={showPhoto ? (displayedChoice as number) : lastImage}
                />
              ) : (
                <p>No photographs are available for this exhibit.</p>
              )}
            </section>
            <section id={panelId + "-section-1"} tabIndex={-1}>
              <h3>Videos</h3>
              {record.videos?.length ? (
                <HistoricalVideos videos={record.videos} />
              ) : (
                <p>No video is available for this exhibit.</p>
              )}
            </section>
            <section id={panelId + "-section-2"} tabIndex={-1}>
              <h3>Sources &amp; interpretation</h3>
              <div className="history-evidence">
                <p className="exhibit-date">{event.dateLabel}</p>
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
                <ContentNeeds event={record} />
                <ImageNeeds event={record} />
                <h3>Sources</h3>

                {record.sources.length === 0 && (
                  <p>No source list is currently published for this record.</p>
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
                      Overlapping topic windows, sometimes in distant regions. Comparison alone does
                      not establish contact or influence.
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
            </section>
          </>
        )}
      </dialog>
    </div>
  );
}
