import Image from "next/image";
import type { OpeningVisualType } from "@/types/opening";

interface OpeningVisualProps {
  readonly type: OpeningVisualType;
}

export function OpeningVisual({ type }: OpeningVisualProps) {
  if (type === "chapter-map") {
    return (
      <svg className="opening-visual opening-chapter-map" viewBox="0 0 400 400" aria-hidden="true">
        <defs>
          <pattern id="chapter-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 4V0h4M40 36v4h-4" fill="none" stroke="currentColor" opacity=".3" />
          </pattern>
        </defs>
        <ellipse cx="200" cy="200" rx="195" ry="190" fill="url(#chapter-grid)" />
        {/* Schematic geographic frame. Paths use longitude and latitude in degrees. */}
        <g transform="translate(-655 408) scale(10 -10)" strokeLinejoin="round">
          <path
            d="M67 24.8 Q68 25 68.4 24 L69.4 23.9 70.4 23.6 68.6 23.4 69.1 22.9 70.3 22.6 69 22.4 Q70.1 20.8 71.3 20.8 L72.1 21.2 72.6 22.2 72.7 21.4 72.9 20.6 72.8 19.2 Q73 17.4 73.8 15.4 T75 12.8 Q75.6 11.5 76.2 10 T77.5 8.1 Q78.1 8.4 78.2 9 L79.2 9.3 79 9.6 79.9 10.3 Q79.7 11.7 80.3 13.1 L80.2 14.5 80 15.3 80.9 15.8 81.2 16.3 82.3 16.6 82.4 17 Q84 17.8 85.4 19.5 L86.4 20 86.8 20.7 87 21.5 88 21.7 88.8 21.6 89.4 21.7 90.6 22.1 91.7 22.4 92.2 21.2 L94 26 96 28 Q93 29.8 89 28.2 Q83 28.6 78 33.3 L75 35.7 Q72 36 70.6 33 Q68.7 30.4 67 24.8Z"
            fill="currentColor"
            fillOpacity=".09"
            stroke="currentColor"
            strokeWidth=".17"
          />
          <path
            d="M79.8 9.8Q80.6 9.5 81.6 7.5T80.5 6Q79.5 6.4 79.8 9.8Z"
            fill="currentColor"
            opacity=".55"
          />
          <path
            d="M73 34q3 1 5.3-2t6-3.7 6.5-1.1 3.6.7M73.2 33.5q2.8.8 5.1-2.1t6-3.5 6.5-1"
            fill="none"
            stroke="currentColor"
            strokeWidth=".11"
            opacity=".6"
          />
          <g transform="translate(79.9 13.2)" fill="none" stroke="currentColor">
            <circle r=".83" strokeWidth=".1" />
            <circle r=".28" fill="currentColor" stroke="none" />
          </g>
        </g>
      </svg>
    );
  }

  if (type === "deep-time-landscape") {
    return (
      <svg
        className="opening-visual opening-deep-landscape"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="deep-sky" cx=".56" cy=".36" r=".71">
            <stop stopColor="#685238" />
            <stop offset=".52" stopColor="#244140" />
            <stop offset="1" stopColor="#101e21" />
          </radialGradient>
          <linearGradient id="deep-river" x2=".2" y2="1">
            <stop stopColor="#e1b77a" />
            <stop offset=".55" stopColor="#709791" />
            <stop offset="1" stopColor="#365c60" />
          </linearGradient>
        </defs>
        <rect width="1200" height="700" fill="url(#deep-sky)" />
        <circle cx="676" cy="171" r="34" fill="#dab27c" opacity=".7" />
        <path
          d="M0 344Q94 292 160 300T310 280L391 248 444 261 506 243 590 268 665 253 750 276 840 249 923 265 1050 223 1200 266V700H0Z"
          fill="#344645"
          stroke="#8b8974"
        />
        <path
          d="M0 322Q167 301 257 349T497 354Q610 319 750 347T970 317T1200 302V700H0Z"
          fill="#273c39"
        />
        <path
          d="M634 353c-170 18 101 31-11 54-122 26-197 50-110 71 93 24 32 47-54 71-105 29-145 85-248 151h318c28-72 139-116 109-159-19-28-145-46-89-68 80-32 204-56 119-79-79-21-105-25-34-41Z"
          fill="url(#deep-river)"
        />
        <path
          d="M0 403q165-31 365 35T163 577L0 644ZM1200 362q-162 8-345 74t-98 97q116 31 443-12Z"
          fill="#182b29"
        />
        <g fill="none" stroke="#bd9a69" opacity=".5">
          {[0, 1, 2, 3, 4].map((band) => (
            <path
              key={band}
              transform={`translate(0 ${band * 9})`}
              d="M0 418q195-28 382 31M0 562q98-52 205-65M1200 374q-181 10-349 78t-76 70"
            />
          ))}
        </g>
      </svg>
    );
  }

  if (type === "attirampakkam-map") {
    return (
      <svg
        className="opening-visual opening-site-map"
        viewBox="0 0 420 400"
        role="img"
        aria-label="Modern coastline of southern India and Sri Lanka, with Attirampakkam marked inland in northern Tamil Nadu"
      >
        <defs>
          <linearGradient id="site-land" x2=".8" y2="1">
            <stop stopColor="#32534e" />
            <stop offset="1" stopColor="#897248" />
          </linearGradient>
          <linearGradient id="site-edge" x2="0" y2="1">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset=".17" stopColor="white" />
          </linearGradient>
          <mask id="site-frame">
            <rect width="420" height="400" fill="url(#site-edge)" />
          </mask>
          <pattern id="site-grid" width="44" height="46" patternUnits="userSpaceOnUse">
            <path d="M0 6V0h6" stroke="#b8ae87" fill="none" />
          </pattern>
        </defs>
        <g mask="url(#site-frame)">
          <rect width="420" height="400" fill="url(#site-grid)" opacity=".38" />
          {/* Longitude and latitude share one north-up projection with the marker. */}
          <g transform="translate(-1555 505) scale(22 -23)" strokeLinejoin="round">
            <path
              d="M72.8 22V19.2Q73 17.4 73.8 15.4T75 12.8Q75.6 11.5 76.2 10T77.5 8.08Q78.1 8.4 78.2 9L79.15 9.25 79 9.6 79.85 10.3Q79.7 11.7 80.3 13.1L80.2 14.5 80 15.3 80.9 15.8 81.2 16.3 82.3 16.6 82.4 17Q84 17.8 85.4 19.5L88 22Z"
              fill="url(#site-land)"
              stroke="#d3ad78"
              strokeWidth=".075"
            />
            <path
              d="M79.8 9.8Q80.55 9.6 81.55 7.55T80.55 5.95Q79.65 6.05 79.85 7.65T79.8 9.8Z"
              fill="#686748"
              stroke="#c4a576"
              strokeWidth=".07"
            />
            {/* Pappu et al., Antiquity 77 (2003): 13°13′50″ N, 79°53′20″ E. */}
            <g transform="translate(79.88889 13.23056)" stroke="#ffe2a1">
              <circle r=".57" fill="none" strokeWidth=".035" opacity=".6" />
              <circle r=".31" fill="none" strokeWidth=".055" />
              <circle r=".12" fill="#fff2c9" stroke="none" />
            </g>
          </g>
        </g>
      </svg>
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

  if (type === "subcontinent-placeholder") {
    return (
      <svg className="opening-visual opening-landform" viewBox="0 0 800 900" aria-hidden="true">
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
