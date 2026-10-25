# Indian Independence Movement

This chapter adds 29 source-linked events in four phases, with 87 evidence sections and two local public-domain photographs. It complements the Colonial Era chapter: Congress's founding, Swadeshi, Rowlatt legislation, Jallianwala Bagh, Non-cooperation, Dandi, Quit India, the transfer negotiations and independence retain their existing records. The combined timeline has 197 events across seven populated chapters.

The chronology covers organisations and print, early satyagrahas, caste equality, constitutional proposals, revolutionary action, regional mobilisation, wartime resistance and constitution-making. The overseas locations concern Indian independence directly; places now in Pakistan or Bangladesh are identified in their historical context.

## Editorial and date conventions

- The moving counter is year-granular. Exact days, where established, appear in the prose. Same-year topic windows are not claims of a day-by-day sequence across chapters.
- The Purna Swaraj decision (1929), pledge (January 1930), independence (1947) and republic are distinct milestones.
- Kheda is dated to the 1918 campaign. Vaikom road access is distinguished from temple entry. The Objectives Resolution entry dates its introduction, not its later adoption.
- Constitutional proposals and political pledges are not described as enacted law. Social and economic demands are not treated as identical to Congress's programme.
- Official reports, organisational retrospectives, letters and commemorations have different evidentiary limits. Each entry explains its limitations; none claims to establish a single cause of British withdrawal.
- The connections panels contain editorial comparisons between the sourced entries; they are not quotations from their sources.

## Images and missing material

See [the inventory](independence-inventory.md) for each event's source and exact image/research tags. Put future files in `public/assets/images/independence/` and register them in `src/data/scenes/independence-galleries.ts`. Adding a gallery automatically replaces that event's image placeholder and exposes its credits in the evidence view. Adding files to the folder alone does not publish them.

Provide a title, image date, creator, collection/accession, original source URL, reuse terms, alt text and a caption explaining the relationship to the event. Add historical text and citations in `src/data/timeline/independence/records.ts`; remove a research tag only when its requested evidence is supplied.

The downloaded photographs retain the supplied framing and are rendered without further cropping:

| File                           | Event               | Context                                                                                                                  |
| ------------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `gandhi-naidu-1931.jpg`        | Round Table journey | Bombay departure, not the England arrival or conference proceedings. Catalogue month not used as a verified travel date. |
| `ghaffar-khan-gandhi-1940.jpg` | Khudai Khidmatgars  | A later contextual photograph, not a picture of the 1931 organisational decision.                                        |

Catalogue URLs and reuse statements are in the gallery data. The [download manifest](independence-media-manifest.json) also records original download URLs, file sizes and SHA-256 hashes. Both Commons pages list PD-India and PD-1996. Reviewed 25 October 2026. A candidate Ambedkar portrait was excluded because its page description and structured metadata conflict about the date.

## Further research queue

This is an expandable chapter, not an exhaustive catalogue of every freedom struggle. Tagged gaps remain for early associations and economic critiques; labour and socialist organisations; further Adivasi and princely-state movements; local Quit India campaigns; and responsibly sourced Partition testimony. Priority additions include the Khilafat alliance, Simon Commission protests, women's organisations, the All India Kisan Sabha's formation, Cripps proposals and regional parallel governments. Each needs its own dated source record before publication.

Some government repository pages redirect or intermittently fail to load. Source titles and original catalogue URLs are retained so that records can be located after website migrations. An image on a source page is not automatically available for republication.

## Interaction and maintenance

The chapter uses the shared scroll controller: weighted scene durations, reversible crossfades, evidence hotspots, three reading stages, chapter/century/people filters, event deep links and a server-rendered reader at `#independence-reader`. Constitutional entries use a teal palette; overseas and communication entries use blue; other struggles use warm ochre. Diagrams are explicitly conceptual, not historical maps.

Run `npm run check`, then `npm run build`. The optional `node scripts/browser-smoke.cjs http://localhost:PORT` checks all exhibits at desktop, tablet and mobile sizes against an already running production server. These scripts do not run during ordinary website use.

## Verification, 25 October 2026

- Lint, type checking, formatting and all 29 automated tests passed. The production build passed.
- Chrome checked all 197 exhibits at 1440, 768 and 390 pixels, image loading, evidence tags, filters, keyboard focus, event links and forward/reverse crossfades.
- No hydration exceptions, GSAP missing-target warnings or runtime exceptions were captured. All seven chapter readers were present with JavaScript disabled.
- Browser verification caught and resolved a reader-link bug: the link now follows the selected chapter filter, falling back to the active scene's chapter when the filter is All.
- Content validation retains four pre-existing Lower Palaeolithic media-credit warnings; no new content warnings were introduced. Other browser engines and physical devices were not tested.
