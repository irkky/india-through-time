import { eraOrientations } from "@/data/timeline/era-orientations";
import { SavedCollection } from "./saved-events";
import { ancientGaps, ancientIndiaEra } from "@/data/timeline/ancient-india";
import { classicalGaps, classicalMedievalEra } from "@/data/timeline/classical-medieval";
import { colonialGaps, colonialIndiaEra } from "@/data/timeline/colonial-india";
import { earlyModernGaps, earlyModernIndiaEra } from "@/data/timeline/early-modern-india";
import { empireGaps, secondUrbanizationEra } from "@/data/timeline/second-urbanization";
import { independenceGaps, independenceIndiaEra } from "@/data/timeline/independence-india";
import {
  postIndependenceGaps,
  postIndependenceIndiaEra,
} from "@/data/timeline/post-independence-india";
import { prehistoricIndiaEra } from "@/data/timeline/prehistoric-india";
import { PrehistoryReader } from "./prehistory-reader";

import { compareHistoricalDates, formatHistoricalDate } from "@/lib/historical-date";

const chapters = [
  {
    era: prehistoricIndiaEra,
    id: "prehistory-reader",
    description: "Stone tools, early farming and settlement.",
  },
  {
    era: ancientIndiaEra,
    id: "ancient-reader",
    gaps: ancientGaps,
    description: "Harappan cities, crafts and early intellectual traditions.",
  },
  {
    era: secondUrbanizationEra,
    id: "empires-reader",
    gaps: empireGaps,
    description: "New cities, religious traditions and the Mauryan state.",
  },
  {
    era: classicalMedievalEra,
    id: "classical-reader",
    gaps: classicalGaps,
    description: "Regional kingdoms, scholarship, devotion and architecture.",
  },
  {
    era: earlyModernIndiaEra,
    id: "early-modern-reader",
    gaps: earlyModernGaps,
    description: "Court life, maritime trade and regional powers.",
  },
  {
    era: colonialIndiaEra,
    id: "colonial-reader",
    gaps: colonialGaps,
    description: "Company expansion, colonial institutions and resistance.",
  },
  {
    era: independenceIndiaEra,
    id: "independence-reader",
    gaps: independenceGaps,
    description: "Organisations, campaigns and struggles for freedom.",
  },
  {
    era: postIndependenceIndiaEra,
    id: "post-independence-reader",
    gaps: postIndependenceGaps,
    description: "The republic, democratic institutions, rights and science.",
  },
];

export function AllReaders() {
  return (
    <>
      <nav id="chapter-index" className="chapter-index" aria-labelledby="chapter-index-title">
        <h2 id="chapter-index-title">Choose a chapter</h2>
        <p>Date ranges show the records covered here. Regional histories overlap.</p>
        <SavedCollection
          records={chapters.flatMap(({ era }) =>
            era.periods.flatMap((period) =>
              period.events.map((event) => ({
                id: event.id,
                title: event.title,
                dateLabel: formatHistoricalDate(event.dateStart, {
                  approximate: event.approximateDate,
                }),
              })),
            ),
          )}
        />
        <ul>
          {chapters.map(({ era, id, description }) => {
            const records = era.periods
              .flatMap((period) => [...period.events])
              .sort((a, b) => compareHistoricalDates(a.dateStart, b.dateStart));
            const first = records[0]!;
            const last = [...records].sort((a, b) =>
              compareHistoricalDates(b.dateEnd ?? b.dateStart, a.dateEnd ?? a.dateStart),
            )[0]!;
            return (
              <li key={id}>
                <strong>{era.title}</strong>
                <small>
                  {formatHistoricalDate(first.dateStart, { approximate: first.approximateDate })} to{" "}
                  {formatHistoricalDate(last.dateEnd ?? last.dateStart, {
                    approximate: last.approximateDate,
                  })}
                </small>
                <p>{description}</p>
                <details className="era-orientation">
                  <summary>About this era</summary>
                  <p>{eraOrientations[era.id]}</p>
                </details>
                <a href={"#" + id}>Read chapter</a>
                <a href={"/#event=" + first.id}>Enter timeline</a>
              </li>
            );
          })}
        </ul>
      </nav>
      {chapters.map(({ era, id, gaps }) => (
        <PrehistoryReader key={id} era={era} id={id} gaps={gaps} />
      ))}
    </>
  );
}
