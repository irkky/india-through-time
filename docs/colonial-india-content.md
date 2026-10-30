# Colonial Era & British Rule: content and media guide

The chapter contains **36 chronological entries**, **154 evidence sections**, **17 illustrated galleries**, **21 distinct local images** and **six external film guides**. Reviewed 29 October 2026. It connects the 1765 Diwani entry in Early Modern India to independence and Partition in 1947; the wider timeline still ends in 2025.

## Explore the collection

Nineteen new images supplement the two existing Met photographs. They include Bhide Wada, Ram Mohan Roy, railway construction, Santhal press imagery, Lucknow after the rebellion, the Crown proclamation, indigo production, Bourne and Tripe photographs, the first Congress, a Bengal gazetteer map, an Indian soldier in France, salt protest imagery, Quit India remembrance and the Independence Act.

The films are linked to UNESCO, IWM, BFI and British Council publisher pages. These are external viewing guides, not locally redistributed videos or autoplay embeds. Some pages contain several films: the guide names the exact title to select. Archive access and playback availability are controlled by the publisher.

Every entry retains a specific `ADD_COLONIAL_*_EVIDENCE` request, including entries with contextual photographs. **19 entries still have no verified local gallery**. Their conceptual diagrams remain clearly labelled, with acquisition instructions in the [complete inventory](colonial-inventory.md).

## Where to edit

| File                                           | Purpose                                                                                   |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `src/data/timeline/colonial/records.ts`        | Dates, regional scope, core accounts and original research requests                       |
| `src/data/timeline/colonial/sources.ts`        | Original historical references                                                            |
| `src/data/timeline/colonial/evidence.ts`       | Visual reading notes, added sources, document context, film guides and remaining requests |
| `src/data/timeline/colonial/events.ts`         | Combines records, media and references for the timeline and static reader                 |
| `src/data/scenes/colonial-galleries.ts`        | Combines original and researched media by event ID                                        |
| `src/data/scenes/colonial-exhibits.ts`         | Three-stage presentation, image choices, timing and reversible crossfades                 |
| `public/assets/images/colonial/researched/`    | Nineteen local JPEG derivatives                                                           |
| `docs/colonial-researched-media-manifest.json` | Credits, licences, source and download URLs, dates, event assignments and SHA-256 hashes  |

The [original manifest](colonial-media-manifest.json) retains the two Met objects. `scripts/fetch-colonial-media.cjs` is an optional maintenance downloader for those originals only; it never runs during normal website use. New downloads are documented separately and are served locally without runtime requests to the archives.

## Historical relevance and source limits

- Separate event dates, artwork dates and modern capture dates. The railway construction photograph is later than the 1853 inaugural service; the Lucknow photograph records an aftermath, not combat or annexation.
- The indigo image is Simpson's **1863 watercolour, WD 1017**. Commons describes it as the 1867 chromolithograph; the National Trust bulletin identifies the original and later print separately. Preserve the correction and catalogue links.
- The salt-campaign image has conflicting day-level metadata. It is labelled April 1930 context without claiming the exact Dandi law-breaking moment.
- The gazetteer map shows Eastern Bengal and Assam after 1905, not the final 1947 boundaries. A proposed Chenab-line map was rejected as unsuitable for a final Partition map.
- The 1947 statute is correctly placed at independence, not the 1935 Act. The official 1935 text remains linked separately.
- The BFI film's inherited title says Calcutta but the publisher identifies Varanasi. The 1915 IWM film is selected official wartime footage, not a complete account of Indian service overseas.
- Later memorials, portraits, official records and colonial press illustrations have different evidential limits. Add Indian-language and community testimony with identifiable provenance. Do not substitute unidentified famine photographs or invent precise casualty totals.

## Complete an evidence tag

Use the inventory's event-specific brief. Supply the object/site title, archive identifier, historical date, recording date, creator, source URL, reuse permission or licence, alt text and a caption explaining its relevance. Keep document, map and research requests until those exact needs are met. An architectural photograph does not complete a request for a statute or participant account.

## Validation

Run `npm run check`, `npm run build`, then `npm run test:browser -- http://localhost:PORT` against a production server. Media tests verify JPEG completeness, hashes, credits, assignments, stage indices, source references and key chronology distinctions. The browser suite exercises all gallery choices, responsive exhibits, evidence requests, forward/reverse transitions, filters, reduced motion and static readers. Four older Lower Palaeolithic attribution warnings remain outside this chapter.
