# Indian Independence Movement

Reviewed **30 October 2026**. The chapter contains **29 entries**, **130 evidence sections**, **17 illustrated galleries**, **19 distinct local images** (17 newly added) and **five external film guides**. Twelve entries still need suitable local images. Every entry retains a specific evidence acquisition tag.

This chapter complements Colonial Era & British Rule: Congress's founding, Swadeshi, Rowlatt legislation, Jallianwala Bagh, Non-cooperation, Dandi, Quit India, transfer negotiations and independence retain their existing records. The complete project contains 252 entries across eight populated chapters and ends in 2025. A photograph or catalogue reviewed later does not create a new historical milestone.

The chronology covers organisations and print, early satyagrahas, caste equality, constitutional proposals, revolutionary action, regional mobilisation, wartime resistance and constitution-making. Overseas locations concern Indian independence directly; places now in Pakistan or Bangladesh are identified in their historical context.

## Research and media coverage

- Newspaper evidence: the Punjabi Ghadar issue of 23 December 1913, distinguished from the first Urdu issue.
- Campaign photographs: Champaran organisers, Vaikom participants and Gandhi's 1925 visit, Bardoli leaders, Vedaranyam marchers and the Karachi Congress gathering.
- Portrait context: Annie Besant around 1897, Gandhi in 1918, Surya Sen's circulated portrait, Bhagat Singh in 1929 and Usha Mehta decades after Congress Radio.
- Documents and reading: a Home Rule organisational letter, Bardoli parliamentary discussion, the Karachi Resolution, Poona Pact, a diplomatic memorandum about military unrest and the Objectives Resolution debate.
- Later remembrance: Chauri Chaura and Vedaranyam memorials, a Mahad relief and the 1996 Gaidinliu stamp. Their captions state the distinction from contemporary evidence.

The [event-by-event inventory](independence-inventory.md) lists every image, film, source and remaining tag. The [new media manifest](independence-researched-media-manifest.json) records original file pages, derivative download URLs, creator, licence, capture date and SHA-256 checksum. The [original manifest](independence-media-manifest.json) preserves the two earlier photographs. Downloaded files retain their supplied framing and marks; the gallery displays them without cropping.

## Film guides

| Entry                   | Publisher and material                            | Interpretation                                                           |
| ----------------------- | ------------------------------------------------- | ------------------------------------------------------------------------ |
| Round Table journey     | British Pathe, Gandhi's 1931 UK arrival           | Newsreel selection; not conference proceedings                           |
| Karachi Congress        | Huntley Film Archives, Film 19544                 | Mixed 1931, 1936 and Bombay sequences; not one dated session             |
| Rani of Jhansi Regiment | Films Division, _Elephants Do Remember_ (2019)    | Rama Khandwala's retrospective biography; not continuous wartime footage |
| Naval uprising          | IWM, _Indian News Parade No. 155_ (1946)          | Official publicity about returning troops; not footage of the uprising   |
| Objectives Resolution   | CLPR, _The Making of India's Constitution_ (2021) | Modern educational animation; not a 1946 recording                       |

Films open on their publishers' sites from the evidence view. They are not downloaded, auto-played or represented as freely reusable files. Availability, regional access and playback remain controlled by the publisher. Links and catalogue descriptions were checked; complete external playback was not tested.

## Deliberate exclusions and remaining gaps

- The Library of Congress Gandhi arrival image has publication restrictions; it was not downloaded.
- Ashoka's Lakshmi Sahgal collection photograph No. 121 is a precise lead for the Rani regiment but requires permission under the archive's donor-controlled terms. Do not copy its preview merely because it is visible online.
- A photograph titled Hriday Kunj visibly showed Nandini Guest House and was rejected. Ahmedabad still needs an identified mill, strike bulletin or workers' source.
- Candidates for the naval uprising, Lahore session and Assembly sitting had uncertain provenance, occasion or conflicting dates. Modern trains named Tebhaga and search results about China's assembly were unrelated and rejected.
- The Mahad museum record has a date-field conflict. Its narrative date is distinguished from both that field and the modern relief used here. Chauri Chaura summaries disagree about casualties; no unsupported precise total was introduced.
- The existing 1931 Gandhi-Naidu photo shows Bombay departure, not Folkestone arrival. Its catalogue month is not treated as a verified travel date. The 1940 Gandhi-Ghaffar Khan photo is later context for the 1931 entry.

## Adding future material

Put files in `public/assets/images/independence/` and register them in `src/data/scenes/independence-galleries.ts`, or add a fully documented entry to the researched manifest. Adding files alone does not publish them. Provide the exact object, event, historical date, capture date, creator, archive/accession, original source URL, reuse licence, alt text and a caption explaining relevance.

Historical records remain in `src/data/timeline/independence/records.ts`; supplementary readings, films and acquisition briefs live in `evidence.ts`. The event builder combines these sources. Gallery stage indices select images during scrolling, and all images remain accessible through gallery controls. Do not remove a document request merely because a contextual portrait has been added.

## Editorial and date conventions

- The moving counter is year-granular. Exact days, where established, appear in the prose. Same-year topic windows are not claims of a day-by-day sequence across chapters.
- The Purna Swaraj decision (1929), pledge (January 1930), independence (1947) and republic are distinct milestones.
- Kheda is dated to the 1918 campaign. Vaikom road access is distinguished from temple entry. The Objectives Resolution entry dates its introduction, not its later adoption.
- Constitutional proposals and political pledges are not described as enacted law. Social and economic demands are not treated as identical to Congress's programme.
- Official reports, organisational retrospectives, letters and commemorations have different evidentiary limits. Each entry explains its limitations; none claims to establish a single cause of British withdrawal.
- The connections panels contain editorial comparisons between the sourced entries; they are not quotations from their sources.

## Verification

The 30 October 2026 implementation passed lint, TypeScript, formatting, all 45 tests, content validation and the production build. Chrome regression passed all 252 exhibits at 1440, 768 and 390 pixels, including the expanded galleries, evidence tags, filters, keyboard focus, forward/reverse transitions, reduced motion and all eight static readers without JavaScript. No hydration or runtime exceptions were reported. Representative desktop, tablet and phone screenshots were also inspected.

Four pre-existing Lower Palaeolithic media attribution warnings remain outside this chapter. External film publisher metadata and catalogue pages were checked; full external video playback was not tested. The optional browser script is a development check, not code run during normal visits.

## Video guide update ? 4 November 2026

The chapter now includes 28 selected publisher videos mapped to all four periods and 29 records.
On-page players load only on request and retain direct watch links. The earlier five archive
references remain available; the IWM newsreel continues as a publisher link. Earlier references
to external-only viewing describe the previous implementation. See the
[video guide](independence-videos.md) and [verification manifest](independence-video-manifest.json)
for placements, languages, historical qualifications and remaining research needs.
