import type { OpeningVisualType } from "@/types/opening";

interface OpeningVisualProps {
  readonly type: OpeningVisualType;
}

export function OpeningVisual({ type }: OpeningVisualProps) {
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

  if (type === "artifact-placeholder") {
    return (
      <svg className="opening-visual opening-artifact" viewBox="0 0 700 900" aria-hidden="true">
        <defs>
          <linearGradient id="artifact-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#d8b57b" stopOpacity="0.78" />
            <stop offset="0.48" stopColor="#8c6943" stopOpacity="0.72" />
            <stop offset="1" stopColor="#38291e" stopOpacity="0.92" />
          </linearGradient>
        </defs>
        <path
          className="opening-artifact-body"
          d="m345 58 148 104 74 171-38 204-128 294-132-96-98-190 20-214 66-184Z"
        />
        <path className="opening-artifact-edge" d="m345 58-17 173 76 83-121 102 104 112-118 207" />
        <path
          className="opening-artifact-edge opening-artifact-edge--soft"
          d="m493 162-89 152 125 223M191 331l92 85-112 129"
        />
      </svg>
    );
  }

  return <div className="opening-visual opening-atmosphere-mark" aria-hidden="true" />;
}
