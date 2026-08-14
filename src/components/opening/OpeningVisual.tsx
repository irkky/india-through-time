import Image from "next/image";
import type { OpeningVisualType } from "@/types/opening";

interface OpeningVisualProps {
  readonly type: OpeningVisualType;
}

export function OpeningVisual({ type }: OpeningVisualProps) {
  if (type === "deep-time-map-image") {
    return (
      <Image
        className="opening-visual opening-deep-time-map"
        src="/assets/images/opening/indianmap.png"
        fill
        sizes="100vw"
        alt=""
      />
    );
  }

  if (type === "south-india-image") {
    return (
      <Image
        className="opening-visual opening-south-india"
        src="/assets/images/opening/southindiacontinent.png"
        width={720}
        height={407}
        alt=""
      />
    );
  }

  if (type === "india-tricolour") {
    return (
      <div className="opening-visual opening-india-tricolour" aria-hidden="true">
        <span className="opening-india-chakra" />
      </div>
    );
  }

  if (type === "time-depth") {
    return (
      <svg className="opening-visual opening-time-depth" viewBox="0 0 1200 800" aria-hidden="true">
        <g className="opening-time-rings">
          <ellipse cx="600" cy="400" rx="510" ry="330" />
          <ellipse cx="600" cy="400" rx="390" ry="250" />
          <ellipse cx="600" cy="400" rx="270" ry="170" />
          <ellipse cx="600" cy="400" rx="150" ry="90" />
        </g>
        <path className="opening-horizon-line" d="M90 400h1020" />
      </svg>
    );
  }

  if (type === "subcontinent-placeholder" || type === "chapter-placeholder") {
    return (
      <svg
        className={`opening-visual opening-landform ${
          type === "chapter-placeholder" ? "opening-landform--chapter" : ""
        }`}
        viewBox="0 0 800 900"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`landform-fill-${type}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.34" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0.03" />
          </linearGradient>
        </defs>
        <path
          className="opening-landform-shape"
          fill={`url(#landform-fill-${type})`}
          d="M199 84 335 49l95 55 117-19 78 72-41 88 45 83-76 81-18 137-85 197-70 91-58-160-91-92-27-137-76-83 48-104-28-97Z"
        />
        <path
          className="opening-landform-contour"
          d="m163 187 133 42 88-64 115 59 56 116-61 91 8 144-88 145"
        />
        <path
          className="opening-landform-contour opening-landform-contour--soft"
          d="m165 390 121-77 94 39 94-62 93 90"
        />
      </svg>
    );
  }

  if (type === "artifact-image") {
    return (
      <Image
        className="opening-visual opening-artifact"
        src="/assets/images/opening/stone.png"
        width={1690}
        height={945}
        alt=""
      />
    );
  }

  return <div className="opening-visual opening-atmosphere-mark" aria-hidden="true" />;
}
