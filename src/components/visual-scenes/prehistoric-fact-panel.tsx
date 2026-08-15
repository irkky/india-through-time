import type { HistoricalFactAnnotation } from "@/types/history";

export type FactPanelPart =
  | "frame"
  | "eyebrow"
  | "date"
  | "location"
  | "statement"
  | "fact"
  | "sites"
  | "supporting"
  | "evidence";

interface PrehistoricFactPanelProps {
  readonly annotation: HistoricalFactAnnotation;
  readonly part: FactPanelPart;
}

export function PrehistoricFactPanel({ annotation, part }: PrehistoricFactPanelProps) {
  let content: React.ReactNode = null;

  switch (part) {
    case "eyebrow":
      content = <p className="prehistoric-fact-eyebrow">{annotation.eyebrow}</p>;
      break;
    case "date":
      content =
        annotation.kind === "chronology" ? (
          <p className="prehistoric-fact-date">
            <strong>{annotation.primaryStatistic}</strong>
            <span>{annotation.statisticQualifier}</span>
          </p>
        ) : null;
      break;
    case "location":
      content =
        annotation.kind === "chronology" ? (
          <p className="prehistoric-fact-location">
            {annotation.location.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
        ) : null;
      break;
    case "statement":
      content =
        annotation.kind === "distribution" ? (
          <p className="prehistoric-fact-statement">
            {annotation.statement.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
        ) : null;
      break;
    case "fact":
      content = <p className="prehistoric-fact-copy">{annotation.text}</p>;
      break;
    case "supporting":
      content =
        annotation.kind === "chronology" && annotation.supportingLine ? (
          <p className="prehistoric-fact-supporting">{annotation.supportingLine}</p>
        ) : null;
      break;
    case "sites":
      content =
        annotation.kind === "distribution" ? (
          <p className="prehistoric-fact-sites">{annotation.siteLine}</p>
        ) : null;
      break;
    case "evidence":
      content =
        annotation.kind === "distribution" ? (
          <p className="prehistoric-fact-evidence">{annotation.evidenceLabel}</p>
        ) : null;
      break;
    default:
      break;
  }

  return (
    <aside
      className={`prehistoric-fact-panel prehistoric-fact-panel--${annotation.kind} prehistoric-fact-panel--${part}`}
    >
      {content}
    </aside>
  );
}
