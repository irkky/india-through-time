import { useId } from "react";
import type { PrehistoryDiagram as DiagramKind } from "@/types/prehistory-exhibit";

/** Original vector teaching diagrams; deliberately not presented as photographs or site plans. */
export function PrehistoryDiagram({
  kind,
  title,
}: {
  readonly kind: DiagramKind;
  readonly title: string;
}) {
  const id = useId().replaceAll(":", "");
  const fill = `url(#earth-${id})`;
  return (
    <svg
      viewBox="0 0 560 380"
      role="img"
      aria-label={`${title}. Explanatory illustration, not to scale.`}
      className="prehistory-diagram"
    >
      <defs>
        <linearGradient id={`earth-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#e3c19a" />
          <stop offset="1" stopColor="#826146" />
        </linearGradient>
        <pattern id={`grain-${id}`} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="3" r="0.8" fill="currentColor" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="560" height="380" rx="20" fill={`url(#grain-${id})`} />
      <g fill="none" stroke="currentColor" opacity="0.13">
        <circle cx="280" cy="190" r="150" />
        <circle cx="280" cy="190" r="115" />
        <path d="M20 190H540M280 20V360" strokeDasharray="3 9" />
      </g>
      <g stroke="#e7cda9" strokeWidth="2" strokeLinejoin="round">
        {kind === "water" && (
          <>
            <path
              d="M35 90Q90 50 140 90T250 90M310 90Q370 40 430 90T530 90"
              fill="none"
              stroke="#95c8d4"
              strokeWidth="8"
            />
            <path d="M140 92V145H210M430 92V145H350" fill="none" stroke="#95c8d4" strokeWidth="5" />
            <rect x="200" y="140" width="160" height="115" rx="4" fill="#385e6a" strokeWidth="8" />
            <path d="M215 170H345M215 195H345M215 220H345" stroke="#95c8d4" opacity=".5" />
            <path d="M280 255V305H430" stroke="#95c8d4" strokeWidth="5" fill="none" />
            <path d="M405 270h70v55h-70Z" fill={fill} />
            <g fill="currentColor" stroke="none" fontSize="13" textAnchor="middle">
              <text x="280" y="120">
                COLLECT
              </text>
              <text x="280" y="205">
                STORE
              </text>
              <text x="440" y="305">
                USE
              </text>
            </g>
          </>
        )}
        {kind === "weights" && (
          <>
            <path d="M280 85V285M180 290H380M110 125H450" fill="none" strokeWidth="8" />
            <path d="m130 125-50 105h100Zm300 0-50 105h100Z" fill="none" />
            <path d="M75 232q55 65 110 0M375 232q55 65 110 0" fill={fill} />
            <rect x="110" y="198" width="35" height="32" fill="#858d83" />
            <rect x="404" y="202" width="22" height="28" fill="#858d83" />
            <rect x="432" y="202" width="22" height="28" fill="#858d83" />
            <text
              x="280"
              y="328"
              fill="currentColor"
              stroke="none"
              fontSize="12"
              textAnchor="middle"
            >
              COMPARISON, NOT A CALIBRATED SERIES
            </text>
          </>
        )}
        {kind === "seal" && (
          <>
            <rect x="60" y="95" width="170" height="170" rx="12" fill={fill} />
            <rect x="330" y="95" width="170" height="170" rx="12" fill="#bc9275" />
            <path d="M100 140h90v30h-50v50h-40ZM460 140h-90v30h50v50h40Z" fill="#655547" />
            <path d="M250 180h60m-15-12 15 12-15 12" fill="none" />
            <g fill="currentColor" stroke="none" fontSize="12" textAnchor="middle">
              <text x="145" y="300">
                CARVED SURFACE
              </text>
              <text x="415" y="300">
                REVERSED IMPRESSION
              </text>
            </g>
          </>
        )}
        {kind === "oral" && (
          <>
            {[100, 280, 460].map((x, i) => (
              <g key={x}>
                <circle cx={x} cy="170" r="48" fill="#314253" />
                <path d={`M${x - 35} 175q18-65 35 0t35 0`} fill="none" strokeWidth="4" />
                <text
                  x={x}
                  y="255"
                  fill="currentColor"
                  stroke="none"
                  fontSize="13"
                  textAnchor="middle"
                >
                  {["LISTEN", "REMEMBER", "RECITE"][i]}
                </text>
              </g>
            ))}
            <path
              d="M153 170h70m110 0h70M455 285Q280 345 100 285"
              fill="none"
              strokeDasharray="5 7"
            />
          </>
        )}
        {kind === "furnace" && (
          <>
            <path d="M180 285 205 90h150l25 195Z" fill="#8b644c" strokeWidth="7" />
            <path d="M220 280 235 130h90l15 150Z" fill="#342b28" />
            <path d="m250 255 25-85 10 50 25-35-10 70Z" fill="#efab60" />
            <path d="M80 230h155m-20-12 20 12-20 12" stroke="#9dc0cc" strokeWidth="5" fill="none" />
            <path d="m350 285 45 15 30-7 35 15" strokeWidth="7" fill="none" />
            <g fill="currentColor" stroke="none" fontSize="13">
              <text x="80" y="210">
                AIR
              </text>
              <text x="390" y="335">
                SLAG
              </text>
            </g>
          </>
        )}
        {kind === "pottery" && (
          <>
            <path d="M135 105h290q-15 145-145 145T135 105Z" fill="#93958b" strokeWidth="5" />
            <path d="M150 132h260M168 158h224" stroke="#30352f" strokeWidth="4" />
            <path
              d="m190 180 20 20 20-20 20 20 20-20 20 20 20-20 20 20 20-20"
              fill="none"
              stroke="#30352f"
            />
            <path d="M70 285H490M70 310H490" strokeDasharray="8 5" opacity=".5" />
            <text
              x="280"
              y="335"
              fill="currentColor"
              stroke="none"
              fontSize="12"
              textAnchor="middle"
            >
              FORM + CONTEXT + DATING
            </text>
          </>
        )}
        {kind === "acheulian" && (
          <>
            <path
              d="M173 49Q143 77 106 163L91 229Q97 277 151 294Q207 298 229 250L229 207Q205 99 173 49Z"
              fill={fill}
            />
            <path
              d="m173 49-17 91-50 23 57 35-72 31 65 18-5 47m5-154 49-30-42 88 66 9-73 40 73 3M156 140l7 58-7 49"
              fill="none"
              stroke="#63503c"
            />
            <path d="m312 93 111 0-8 72-18 106q-36 32-67 0l-21-107Z" fill={fill} />
            <path
              d="m312 93 34 72-37-1 49 63-28 44m93-178-32 72 24 0-57 62 39 44m-51-106 45 0-33 62"
              fill="none"
              stroke="#63503c"
            />
            <path d="m466 196 30 37-14 53-29-39Zm-13-71 27 22-9 30-26-24Z" fill={fill} />
            <g fill="#e7cda9" stroke="none" fontSize="12" letterSpacing="2" textAnchor="middle">
              <text x="160" y="334">
                HANDAXE
              </text>
              <text x="365" y="334">
                CLEAVER
              </text>
              <text x="474" y="314">
                FLAKES
              </text>
            </g>
          </>
        )}
        {kind === "core" && (
          <>
            <path d="M215 62 290 85 339 161 323 268 242 307 163 256 145 170Z" fill={fill} />
            <path
              d="m215 62-8 105 83-82-38 118 87-42-82 103 66 4M145 170l62-3-44 89 94 8-15 43M207 167l45 36 5 61"
              fill="none"
              stroke="#574c3b"
            />
            <path d="m395 100 26 80-37 44-12-63Zm13 147 27 34-32 46-20-50Z" fill={fill} />
            <path d="m331 105 34-14m-28 119 27 6" strokeDasharray="4 6" />
          </>
        )}
        {kind === "strata" && (
          <>
            <path d="M70 95q100-27 210 0t210 0v68q-115 26-210-2T70 166Z" fill="#bda780" />
            <path d="M70 166q115-30 210-5t210 2v39q-115 23-210 0T70 205Z" fill="#d7d5c9" />
            <path d="M70 205q115-26 210-3t210 0v93q-110 22-210 0T70 300Z" fill="#8f6a4d" />
            <path d="m145 125 27-15 18 22-35 9Zm160 120 33-14 26 31-36 12Z" fill="#333a32" />
            <path d="M92 184h96m135-1h136" stroke="#59625a" strokeDasharray="3 7" />
          </>
        )}
        {kind === "blades" && (
          <>
            {[0, 1, 2, 3, 4].map((n) => (
              <g
                key={n}
                transform={`translate(${100 + n * 78} ${n % 2 ? 90 : 70}) rotate(${n * 4 - 8})`}
              >
                <path d="m24 0 25 35-8 181-29 24L0 190 5 42Z" fill={fill} />
                <path d="m24 0-3 72 20 144M5 42l16 30L0 190" fill="none" stroke="#5b5142" />
              </g>
            ))}
            <path d="M90 333h380" opacity="0.4" />
          </>
        )}
        {kind === "rice" && (
          <>
            <path
              d="M240 325q15-150-15-253m30 181q60-97 102-119m-111 90q-70-66-117-61"
              fill="none"
              stroke="#b7c88d"
              strokeWidth="4"
            />
            {[0, 1, 2, 3, 4, 5].map((n) => (
              <g key={n}>
                <ellipse
                  cx={221 + (n % 2 ? 20 : -10)}
                  cy={85 + n * 27}
                  rx="9"
                  ry="20"
                  transform={`rotate(${n % 2 ? 35 : -35} ${221 + (n % 2 ? 20 : -10)} ${85 + n * 27})`}
                  fill="#d9bd77"
                />
                <ellipse
                  cx={349 - n * 15}
                  cy={144 + n * 16}
                  rx="7"
                  ry="15"
                  transform={`rotate(45 ${349 - n * 15} ${144 + n * 16})`}
                  fill="#c4ad70"
                />
              </g>
            ))}
            <ellipse
              cx="410"
              cy="272"
              rx="39"
              ry="57"
              fill="#c7aa71"
              transform="rotate(30 410 272)"
            />
            <path d="m385 313 48-80" stroke="#6e613d" />
          </>
        )}
        {kind === "pit" && (
          <>
            <path d="M45 170h140l18 95q75 34 151 0l20-95h141v150H45Z" fill="#886a50" />
            <path d="M185 170q95-40 189 0" fill="none" strokeDasharray="6 5" />
            <path
              d="M160 169 280 68l120 101M200 145l80-77 80 77"
              fill="none"
              stroke="#c7b591"
              strokeWidth="5"
            />
            <path
              d="M235 158v118m23-115v120m-23-97h23m-23 29h23m-23 29h23"
              fill="none"
              strokeWidth="4"
            />
            <path
              d="M70 208h75m260 15h77M80 271h81m230 15h99"
              strokeDasharray="2 8"
              opacity="0.5"
            />
          </>
        )}
        {kind === "ashmound" && (
          <>
            <path d="M45 300q97-3 149-114 78-143 158-15 48 117 163 129Z" fill="#8c8875" />
            <path
              d="M100 286q88-43 130-130 49-57 92 13 66 111 140 117M150 300q82-54 104-105 27-45 52 4 43 72 106 101"
              fill="none"
              stroke="#d4d0bb"
              strokeWidth="5"
            />
            <path
              d="M240 106q-24-27 0-49m44 37q24-29 0-55m40 82q-20-28 2-47"
              fill="none"
              strokeDasharray="5 6"
              opacity="0.4"
            />
            <path d="M45 315h470" stroke="#b2ac8e" />
          </>
        )}
        {kind === "beads" && (
          <>
            <path d="M80 210q200-190 400 0" fill="none" stroke="#b9b19b" />
            {[0, 1, 2, 3, 4, 5, 6].map((n) => (
              <g
                key={n}
                transform={`translate(${88 + n * 63} ${200 - Math.sin((n / 6) * Math.PI) * 78})`}
              >
                <ellipse rx="23" ry="30" fill={n % 2 ? "#bf8062" : "#93a6a0"} />
                <circle r="5" fill="#29332e" />
              </g>
            ))}
            <path
              d="m150 287 29-26 23 34-40 17Zm119 24 17-48 24 24-13 35Zm117-46 29 8-9 38-32-11Z"
              fill={fill}
            />
          </>
        )}
        {(kind === "village" || kind === "town") && (
          <>
            {[0, 1, 2, 3, 4, 5].map((n) => {
              const x = 78 + (n % 3) * 142;
              const y = 85 + Math.floor(n / 3) * 135;
              return (
                <g key={n}>
                  <path d={`M${x} ${y}h105v88h-105Z`} fill="#98775b" strokeWidth="5" />
                  <path d={`M${x + 53} ${y}v88m-53-44h53`} fill="none" strokeWidth="4" />
                  <path d={`M${x + 65} ${y + 88}h22`} stroke="#25332d" strokeWidth="7" />
                  {kind === "village" && <circle cx={x + 77} cy={y + 26} r="12" fill="#c6a376" />}
                </g>
              );
            })}
            {kind === "town" && (
              <path d="M52 58h456v286H52Z" fill="none" strokeWidth="6" strokeDasharray="50 10" />
            )}
          </>
        )}
        {kind === "camp" && (
          <>
            <path
              d="M35 300q130-80 250 0t240 0"
              fill="none"
              stroke="#89aaa4"
              strokeWidth="16"
              opacity="0.4"
            />
            <path d="m88 231 82-117 83 117Zm209-29 65-95 69 95Z" fill="#9e8060" />
            <path d="m147 230 23-62 25 62m143-29 24-49 25 49" fill="#26372e" />
            <ellipse cx="282" cy="273" rx="31" ry="13" fill="#7b5943" />
            <path d="m270 274 12-35 11 35" fill="#d6a370" />
            <path d="M72 245h174m52-29h137" strokeDasharray="2 7" />
          </>
        )}
      </g>
      <text x="26" y="356" fill="currentColor" opacity="0.6" fontSize="10" letterSpacing="3">
        EXPLANATORY ILLUSTRATION · NOT TO SCALE
      </text>
    </svg>
  );
}
