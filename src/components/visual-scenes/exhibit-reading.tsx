"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import type { PrehistoryGalleryImage } from "@/types/prehistory-exhibit";

export function photoDescription(item: PrehistoryGalleryImage) {
  const subject = item.subject ?? item.alt;
  if (!subject || item.caption.toLowerCase().startsWith(subject.toLowerCase())) return item.caption;
  return subject.replace(/[.!?]?$/, ".") + " " + item.caption;
}
function ReadingDialog({
  title,
  label,
  children,
  className = "",
}: {
  title: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const id = useId();
  useLayoutEffect(() => {
    if (!open) return;
    const el = dialog.current!;
    const scene = trigger.current?.closest(".visual-scene");
    const observer = new MutationObserver(() => {
      if (scene?.getAttribute("aria-hidden") === "true") el.close();
    });
    if (scene) observer.observe(scene, { attributes: true, attributeFilter: ["aria-hidden"] });
    el.showModal();
    return () => observer.disconnect();
  }, [open]);
  return (
    <>
      <button
        type="button"
        ref={trigger}
        className={"reading-trigger " + className}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
      >
        {label}
      </button>
      {open &&
        createPortal(
          <dialog
            className="history-dialog reading-dialog"
            ref={dialog}
            aria-labelledby={id}
            onClose={(event) => {
              event.stopPropagation();
              setOpen(false);
              if (!trigger.current?.closest("[inert]"))
                trigger.current?.focus({ preventScroll: true });
            }}
          >
            <header className="history-dialog-header">
              <h2 id={id}>{title}</h2>
              <button
                type="button"
                className="journey-button"
                onClick={() => dialog.current?.close()}
              >
                Close
              </button>
            </header>
            {children}
          </dialog>,
          document.body,
        )}
    </>
  );
}

function ImageCredit({ item }: { item: PrehistoryGalleryImage }) {
  return (
    <p className="reading-credit">
      {item.credit ?? "Image credit pending verification"} ·{" "}
      {item.licenseUrl ? (
        <a href={item.licenseUrl} target="_blank" rel="noreferrer">
          {item.license ?? "Image licence"}
        </a>
      ) : (
        (item.license ?? "Reuse terms pending verification")
      )}{" "}
      {item.sourceUrl && (
        <a href={item.sourceUrl} target="_blank" rel="noreferrer">
          Original source ↗
        </a>
      )}
    </p>
  );
}

export function ClippedStoryText({
  text,
  title,
  kind,
  image,
}: {
  text: string;
  title: string;
  kind: "caption" | "explanation";
  image?: PrehistoryGalleryImage;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [clipped, setClipped] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () =>
      setClipped(
        !!text &&
          (!el.clientHeight ||
            el.scrollHeight > el.clientHeight + 1 ||
            el.scrollWidth > el.clientWidth + 1),
      );
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    measure();
    document.fonts.addEventListener("loadingdone", measure);
    return () => {
      observer.disconnect();
      document.fonts.removeEventListener("loadingdone", measure);
    };
  }, [text]);
  const Tag = kind === "caption" ? "span" : "p";
  return (
    <>
      <Tag
        ref={(el) => {
          ref.current = el;
        }}
      >
        {text}
      </Tag>
      {clipped && (
        <ReadingDialog title={title} label={"Read full " + kind}>
          <p>{text}</p>
          {image && <ImageCredit item={image} />}
        </ReadingDialog>
      )}
    </>
  );
}

function ImageDetail({ item }: { item: PrehistoryGalleryImage }) {
  const [zoom, setZoom] = useState(1);
  const viewport = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="zoom-tools" role="group" aria-label="Image magnification">
        <button
          type="button"
          className="journey-button"
          disabled={zoom <= 1}
          onClick={() => setZoom(zoom - 0.5)}
          aria-label="Zoom out"
        >
          −
        </button>
        <output>{zoom * 100}%</output>
        <button
          type="button"
          className="journey-button"
          disabled={zoom >= 4}
          onClick={() => setZoom(zoom + 0.5)}
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          type="button"
          className="journey-button"
          onClick={() => {
            setZoom(1);
            viewport.current?.scrollTo(0, 0);
          }}
        >
          Reset
        </button>
      </div>
      <div
        className="zoom-viewport"
        ref={viewport}
        tabIndex={0}
        role="region"
        aria-label="Enlarged image, scroll to pan"
      >
        <div style={{ position: "relative", width: zoom * 100 + "%", height: zoom * 100 + "%" }}>
          <Image src={item.src} alt={item.alt} fill unoptimized style={{ objectFit: "contain" }} />
        </div>
      </div>
      <details className="zoom-caption">
        <summary>Caption &amp; credit</summary>
        <p>{photoDescription(item)}</p>
        <ImageCredit item={item} />
      </details>
      <a href={item.src} target="_blank" rel="noreferrer">
        Open original image ↗
      </a>
    </>
  );
}

export function EnlargeImage({ item }: { item: PrehistoryGalleryImage }) {
  return (
    <ReadingDialog title={item.title} label="Enlarge image" className="enlarge-image">
      <ImageDetail item={item} />
    </ReadingDialog>
  );
}
