# Colonial Era & British Rule

This chapter adds 36 sourced entries and 108 contextual reading sections to the Indian-history timeline, bringing the project to 168 events. The working chapter range is 1765–1947; the opening Diwani milestone remains in Early Modern India and links into the new chapter. The first new entry is the Bengal famine of 1770. The five phases are navigation conventions, not simultaneous changes across India.

Coverage includes Company regulation, conquest, revenue, rural resistance, education and social reform, 1857, Crown government, photography, rail infrastructure, public politics, constitutional changes, wartime hunger, independence and Partition. It is an expandable researched overview, not an exhaustive account. The reader exposes further regional, economic, social and independence-movement research requests. The separate Independence Movement chapter remains available for future expansion; its future events should interleave chronologically rather than restart the timeline.

## Editing and supplying images

- Historical records: `src/data/timeline/colonial/records.ts`. Rows contain the date, region, theme, source, event, background, consequences, qualification and requested image. Named people and explicit related-event links are maintained beneath the rows.
- References: `src/data/timeline/colonial/sources.ts`. Add a bibliographic source before making new factual claims. Distinguish a source's claim from an independently established conclusion.
- Chapter phases and broader gaps: `src/data/timeline/colonial-india.ts`.
- Local photographs: `public/assets/images/colonial/`. Register each in `src/data/scenes/colonial-galleries.ts` with the matching event ID, caption, alt text, creator, date, source URL and licence. Gallery registration automatically replaces that event's image placeholder.
- Scene presentation: `src/data/scenes/colonial-exhibits.ts`. Uses the existing three-stage interaction, reversible crossfades and source dialog. Diagrams are conceptual explanations, not reconstructed maps or primary evidence.

The [complete inventory](colonial-inventory.md) lists all 36 entries, references and exact image/research tags. There are 35 image slots still awaiting suitable material. Specific briefs distinguish archival evidence, later memorials and modern photographs. Do not use a generic battle painting for an unrelated conflict or an unidentified famine photograph.

## Images already added

Two public-domain Metropolitan Museum photographs dated 1858–61 accompany the Crown-rule entry: an equestrian statue of Lord Hardinge, photographed by an unidentified maker, and John Constantine Stanley's view of the Maidan from Government House. These illustrate colonial monuments and urban surroundings; neither depicts the transfer of government. Hardinge's statue commemorates an earlier governor-general. The captions explicitly state those limits.

The [media manifest](colonial-media-manifest.json) records accessions, dates, credits, source and download URLs. `node scripts/fetch-colonial-media.cjs` is an optional maintenance downloader for these two verified public-domain objects. It never runs during normal website use. A proposed Bourne album was excluded because its API record did not supply a verified public-domain image; that entry keeps its image request.

## Research and interpretation

Sources reviewed on 24 October 2026 include NCERT, SCERT Delhi, UNESCO, Indian government publications, museum catalogues, UK parliamentary histories, National Archives collections and contemporary diplomatic records. References appear with the individual entries. Some large textbook PDFs were available only through indexed extracts or institutional mirrors; further primary-source and regional research is explicitly requested rather than fabricated.

Official colonial records and military accounts have institutional viewpoints. Compare them with Indian-language documents, local histories and community testimony. Famine and massacre totals are not supplied without a documented method and uncertainty. The Bengal famine entry cites contemporary warnings, not a claim that one diplomatic letter explains the entire catastrophe.

Major further additions include revenue systems beyond Permanent Settlement, labour and industrialisation, indenture, plantations, censuses, forest laws, the press, anti-caste organising, women beyond the selected reform entries, northeastern histories, the world wars, revolutionary organisations, the INA, the naval uprising and detailed constitutional negotiations. The existing overview entries do not make these research gaps complete.

## Validation

Run `npm run check` and `npm run build`; then run `npm run test:browser -- http://localhost:PORT` against the running production server. The browser regression includes the new scenes, transition from 1765, 1857 and 1947 anchors, and the sixth evidence reader without JavaScript. Century filters now extend through 2000 CE and still intersect overlapping ranges. Four older Lower Palaeolithic image-credit warnings remain unrelated to this chapter.
