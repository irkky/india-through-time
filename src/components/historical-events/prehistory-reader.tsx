import type { HistoricalEra } from "@/types/history";
import { compareHistoricalDates, formatHistoricalDate } from "@/lib/historical-date";
import { prehistoryGaps } from "@/data/timeline/prehistory/gaps";

/** Server-rendered evidence remains readable without the scroll animation or JavaScript. */
export function PrehistoryReader({ era }: { readonly era: HistoricalEra }) {
  return (
    <section
      id="prehistory-reader"
      aria-labelledby="prehistory-reader-title"
      className="bg-[#f2ecdf] px-6 py-20 text-[#20251f] sm:px-10"
    >
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#8f3e28]">
          Read the evidence
        </p>
        <h2 id="prehistory-reader-title" className="mt-3 text-4xl font-semibold">
          Prehistoric India, in context
        </h2>
        <p className="mt-5 leading-7">
          Explore the records and their sources by period. The cinematic timeline sorts events by
          their starting dates; regional traditions overlap. Dates are approximate and refer to the
          specific evidence described. Regional overview ranges are distinguished from site and
          phase dates. This is an expandable overview, not an exhaustive catalogue of Indian
          prehistory.
        </p>
        <nav aria-label="Prehistory reading sections" className="my-8 flex flex-wrap gap-3">
          {era.periods.map((period) => (
            <a
              key={period.id}
              href={`#read-${period.id}`}
              className="rounded border border-[#20251f]/30 px-3 py-2 text-sm underline"
            >
              {period.title}
            </a>
          ))}
        </nav>
        {era.periods.map((period) => (
          <section
            key={period.id}
            id={`read-${period.id}`}
            className="scroll-mt-8 border-t border-[#20251f]/20 py-8"
          >
            <h3 className="text-2xl font-semibold">{period.title}</h3>
            {period.introduction && <p className="mt-3 leading-7">{period.introduction}</p>}
            {period.context?.map((context) => (
              <div key={context.title} className="my-5 rounded-lg bg-white/50 p-5">
                <h4 className="font-semibold">{context.title}</h4>
                <p className="mt-2 leading-7">{context.text}</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {context.sources.map((source) => (
                    <li key={source.id}>
                      <a className="underline" href={source.url}>
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {[...period.events]
              .sort((a, b) => compareHistoricalDates(a.dateStart, b.dateStart))
              .map((event) => (
                <details
                  key={event.id}
                  id={`read-${event.id}`}
                  className="my-4 scroll-mt-8 rounded-lg border border-[#20251f]/20 bg-white/40 p-5"
                >
                  <summary className="cursor-pointer font-semibold">
                    {event.title}
                    <span className="mt-1 block text-sm font-normal text-[#665c4a]">
                      {formatHistoricalDate(event.dateStart, {
                        approximate: event.approximateDate,
                      })}
                      {event.dateEnd &&
                        ` — ${formatHistoricalDate(event.dateEnd, { approximate: event.approximateDate })}`}
                    </span>
                  </summary>
                  <p className="mt-4 leading-7">{event.description}</p>
                  {event.regions && (
                    <p className="mt-3 text-sm">Location: {event.regions.join("; ")}</p>
                  )}
                  {event.significance && <p className="mt-3 leading-7">{event.significance}</p>}
                  {event.interpretationNotes?.map((note, index) => (
                    <p key={index} className="mt-4 border-l-2 border-[#8f3e28] pl-4 leading-7">
                      <strong>Evidence note: </strong>
                      {note.text}
                    </p>
                  ))}
                  <h5 className="mt-5 font-semibold">Sources</h5>
                  <ul className="mt-2 space-y-3 text-sm leading-6">
                    {event.sources.map((source) => (
                      <li key={source.id}>
                        <a href={source.url} className="underline">
                          {source.title}
                        </a>
                        <span className="block">
                          {[source.author, source.publisher, source.publicationYear]
                            .filter(Boolean)
                            .join(" · ")}
                        </span>
                        {event.citations
                          ?.filter(({ sourceId }) => sourceId === source.id)
                          .map((citation, index) => (
                            <span key={index} className="block text-[#665c4a]">
                              {citation.locator}
                              {citation.note ? ` — ${citation.note}` : ""}
                            </span>
                          ))}
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            {prehistoryGaps
              .filter((gap) => gap.periodId === period.id)
              .map((gap) => (
                <aside
                  key={gap.topic}
                  className="mt-6 rounded-lg border border-dashed border-[#8f3e28]/40 p-5"
                >
                  <h4 className="font-semibold">Evidence still to add: {gap.topic}</h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
                    {gap.missing.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs">
                    No invented date has been assigned to this research slot.
                  </p>
                </aside>
              ))}
          </section>
        ))}
      </div>
    </section>
  );
}
