import Image from "next/image";
import { notFound } from "next/navigation";
import { ancientIndiaEra } from "@/data/timeline/ancient-india";
import { ancientGalleries } from "@/data/scenes/ancient-galleries";
import { formatHistoricalDate } from "@/lib/historical-date";
import { SaveEvent } from "@/components/historical-events/saved-events";
import type { HistoricalEvent } from "@/types/history";

const stops = [
  { id: "dholavira-water-city", question: "How could a city store water between seasonal flows?" },
  {
    id: "mohenjo-daro-urban-life",
    question: "How did water move from individual households into shared urban infrastructure?",
  },
  {
    id: "indus-food-farming",
    question:
      "Beyond the city streets, what do plant remains reveal about farming with different water supplies?",
  },
  {
    id: "lothal-crafts-exchange",
    question:
      "What evidence links Lothal to coastal exchange, and how certain is the basin’s purpose?",
  },
  {
    id: "late-harappan-regionalisation",
    question: "When settlement patterns shifted, what continued beyond the large cities?",
  },
];
const name = "Water and settlement in the Indus world";
export const metadata = { title: name + " | India Through Time" };
export const dynamicParams = false;
export function generateStaticParams() {
  return [...stops.map((stop) => ({ stop: stop.id })), { stop: "complete" }];
}

export default async function TrailStop({ params }: { params: Promise<{ stop: string }> }) {
  const { stop } = await params;
  const index = stops.findIndex((item) => item.id === stop);
  const done = stop === "complete";
  if (index < 0 && !done) notFound();
  const records: readonly HistoricalEvent[] = ancientIndiaEra.periods.flatMap((period) => [
    ...period.events,
  ]);
  const events = stops.map((item) => {
    const record = records.find((record) => record.id === item.id);
    if (!record) throw Error("Missing trail record: " + item.id);
    return record;
  });
  const event = events[index];
  const picture = ancientGalleries[stop]?.[0];
  return (
    <main className="learning-trail">
      <article>
        <a href="/read#chapter-index">All chapters</a>
        <p className="trail-label">{name}</p>
        {done ? (
          <>
            <h1>Five stops complete</h1>
            <p>
              You traced water from seasonal reservoirs and household drains to farmland and coastal
              exchange. Which piece of evidence best explains why communities settled where they
              did?
            </p>
            <ol>
              {events.map((record) => (
                <li key={record.id}>
                  <a href={"/trail/" + record.id}>{record.title}</a>
                </li>
              ))}
            </ol>
            <a className="trail-next" href={"/#event=" + events[events.length - 1]!.id}>
              Continue on the timeline
            </a>
          </>
        ) : (
          event && (
            <>
              <p className="trail-position">
                Stop {index + 1} of {stops.length} ·{" "}
                {formatHistoricalDate(event.dateStart, { approximate: event.approximateDate })}
                {event.dateEnd &&
                  " – " +
                    formatHistoricalDate(event.dateEnd, { approximate: event.approximateDate })}
              </p>
              <h1>{event.title}</h1>
              <p className="trail-question">{stops[index]!.question}</p>
              {picture && (
                <figure>
                  <Image
                    loading="eager"
                    src={picture.src}
                    alt={picture.alt}
                    width={800}
                    height={450}
                    sizes="(max-width:800px) 92vw, 720px"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "38vh",
                      objectFit: "contain",
                    }}
                  />
                  <figcaption>
                    {picture.title} · {picture.credit ?? "Credit pending verification"}{" "}
                    {picture.sourceUrl && <a href={picture.sourceUrl}>Source</a>}{" "}
                    {picture.licenseUrl ? (
                      <a href={picture.licenseUrl}>{picture.license}</a>
                    ) : (
                      picture.license
                    )}
                  </figcaption>
                </figure>
              )}
              <p>{event.description}</p>
              <p>{event.significance}</p>
              {event.interpretationNotes?.[0] && (
                <p>
                  <strong>Evidence &amp; limits. </strong>
                  {event.interpretationNotes[0].text}
                </p>
              )}
              <div className="trail-actions">
                <SaveEvent id={event.id} />
                <a href={"/read#read-" + event.id}>Read the evidence and sources</a>
                <a href={"/#event=" + event.id}>View on timeline</a>
              </div>
              <nav aria-label="Trail stops">
                {index > 0 && <a href={"/trail/" + stops[index - 1]!.id}>Previous stop</a>}
                <a className="trail-next" href={"/trail/" + (stops[index + 1]?.id ?? "complete")}>
                  {stops[index + 1] ? "Next stop" : "Finish trail"}
                </a>
              </nav>
            </>
          )
        )}
      </article>
    </main>
  );
}
