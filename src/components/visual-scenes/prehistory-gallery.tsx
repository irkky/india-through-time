"use client";

import { useId, useState } from "react";
import type { PrehistoryGalleryImage } from "@/types/prehistory-exhibit";

export function PrehistoryGallery({
  images,
}: {
  readonly images: readonly PrehistoryGalleryImage[];
}) {
  const [selected, setSelected] = useState(0);
  const [failed, setFailed] = useState<string | null>(null);
  const id = useId();
  const item = images[selected];
  if (!item) return null;
  return (
    <section className="prehistory-gallery" aria-label="Image collection">
      <div className="gallery-heading">
        <div>
          <p className="exhibit-kicker">Look closer</p>
          <h3>Images & visual context</h3>
        </div>
        <span>
          {selected + 1} / {images.length}
        </span>
      </div>
      <div className="gallery-layout">
        <figure id={id} className="gallery-selected">
          <div className="gallery-image-surface">
            {failed === item.src ? (
              <p>Image unavailable. Choose another image below.</p>
            ) : (
              // Preserve complete plates, scales and labels; never crop archaeological images.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={item.src}
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                onError={() => setFailed(item.src)}
              />
            )}
          </div>
          <figcaption aria-live="polite" aria-atomic="true">
            <span className="gallery-category">{item.category}</span>
            <h4>{item.title}</h4>
            <p>{item.caption}</p>
            <small>
              {item.credit ?? "Image credit pending"} · {item.license ?? "Reuse terms pending"}
            </small>
            <div className="gallery-links">
              <a href={item.src} target="_blank" rel="noopener noreferrer">
                Open full image ↗
              </a>
              {item.sourceUrl && (
                <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">
                  Original source ↗
                </a>
              )}
            </div>
          </figcaption>
        </figure>
        <div className="gallery-choices" role="group" aria-label="Choose an image">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-pressed={selected === index}
              aria-controls={id}
              onClick={() => setSelected(index)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.src} alt="" loading="lazy" decoding="async" />
              <span>
                <small>
                  {String(index + 1).padStart(2, "0")} · {image.category}
                </small>
                {image.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
