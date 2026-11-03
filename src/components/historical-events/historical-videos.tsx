"use client";

import { useEffect, useId, useState } from "react";
import type { HistoricalVideo } from "@/types/history";

/** Publisher players load only after a deliberate click; source links also work without JS. */
export function HistoricalVideos({ videos }: { readonly videos?: readonly HistoricalVideo[] }) {
  const instance = useId();
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const stopOthers = (event: Event) => {
      if ((event as CustomEvent<string>).detail !== instance) setActive(null);
    };
    window.addEventListener("history-video-start", stopOthers);
    return () => window.removeEventListener("history-video-start", stopOthers);
  }, [instance]);
  if (!videos?.length) return null;
  return (
    <section className="history-videos" aria-labelledby={`${instance}-heading`}>
      <p className="exhibit-kicker">Watch & understand</p>
      <h3 id={`${instance}-heading`}>Video guide to this period</h3>
      <p className="history-videos-intro">
        Selected lectures to accompany the evidence. These cover the wider period, not every
        individual site on the timeline.
      </p>
      {videos.map((video, index) => {
        const playing = active === video.id;
        const playerId = `${instance}-${video.id}`;
        return (
          <article className="history-video-card" key={video.id} data-video-id={video.id}>
            <div className="history-video-meta">
              <span>{index === 0 ? "Start here" : "Explore further"}</span>
              <span>{video.publisher}</span>
              {video.durationSeconds && (
                <span>
                  {Math.floor(video.durationSeconds / 60)} min {video.durationSeconds % 60} sec
                </span>
              )}
            </div>
            <h4>{video.title}</h4>
            <p>{video.description}</p>
            <p className="history-video-context">{video.context}</p>
            {video.mode === "youtube" && (
              <>
                <button
                  type="button"
                  className="history-video-toggle"
                  aria-expanded={playing}
                  aria-controls={playerId}
                  onClick={() => {
                    if (playing) setActive(null);
                    else {
                      window.dispatchEvent(
                        new CustomEvent("history-video-start", { detail: instance }),
                      );
                      setActive(video.id);
                    }
                  }}
                >
                  <span aria-hidden="true">{playing ? "■" : "▶"}</span>
                  {playing ? "Close player" : "Load video player"}
                </button>
                <div id={playerId}>
                  {playing && (
                    <iframe
                      className="history-video-frame"
                      src={`https://www.youtube-nocookie.com/embed/${video.videoId}?playsinline=1&rel=0`}
                      title={video.title}
                      allow="encrypted-media; fullscreen; picture-in-picture"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  )}
                </div>
                <p className="history-video-help">
                  Loads YouTube when selected. Press play in the player to begin. If playback is
                  blocked or unavailable, use the direct link below.
                </p>
              </>
            )}
            {video.mode === "external" && (
              <p className="history-video-help">Watch this video on the publisher&apos;s site.</p>
            )}
            <div className="history-video-links">
              <a href={video.watchUrl} target="_blank" rel="noopener noreferrer">
                {video.mode === "youtube" ? "Watch on YouTube ↗" : "Open video source ↗"}
              </a>
              {video.catalogueUrl && (
                <a href={video.catalogueUrl} target="_blank" rel="noopener noreferrer">
                  Course / catalogue ↗
                </a>
              )}
            </div>
          </article>
        );
      })}
    </section>
  );
}
