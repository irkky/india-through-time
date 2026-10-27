# Post-Independence to 2025

This chapter adds 55 selected historical entries across five phases, with 165 evidence sections,
three locally stored, credited images and 52 specific image placeholders. It continues from the
existing 1947 independence and Partition entry rather than duplicating it. The full site has
252 entries across eight populated chapters. This is an expandable overview, not every event
in independent India's history.

Research reviewed: **25 October 2026**. The timeline ends in 2025 with the UNESCO inscription of the Maratha Military Landscapes.
Future updates should check amended notifications and distinguish announcement, enactment,
commencement and measured outcomes.

## Coverage and chronology

| Phase     | Coverage                                                                                                                                                              |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1948–1961 | Gandhi's assassination, Hyderabad, Constitution, republic, planning, elections, cinema, linguistic states, broadcasting and Goa                                       |
| 1962–1977 | Wars, agriculture, banks, ISRO, dairy cooperatives, Bangladesh, Simla, constitutional doctrine, Chipko, Aryabhata and Emergency                                       |
| 1978–1999 | Cricket, anti-Sikh violence, Bhopal, Mizoram accord, economic reforms, Mandal judgment, Babri demolition, local government, nuclear tests and Kargil                  |
| 2000–2016 | Gujarat violence, tsunami, information/employment/education rights, Mumbai attacks, polio, Mars, UPI and demonetisation                                               |
| 2017–2025 | GST, privacy, Section 377, Jammu and Kashmir reorganisation, pandemic, vaccination, farm-law repeal, Chandrayaan-3, G20, election results, SpaDeX, UNESCO inscription |

Start years determine scroll order. Precise dates and the meanings of overlapping windows
remain in the text. A span is not a claim that all related developments happened at its start.
Photograph dates are distinct from event dates: the 2018 Raigad image illustrates the site,
not the 2025 UNESCO ceremony. Modern heritage recognition belongs here; fort construction
belongs in the earlier chapter.

## Sources and interpretation

Each entry links its source and three evidence panels. Sources include constitutional and
judicial records, election statistics, RBI, ICAR, NDDB, ISRO, WHO, UNESCO, parliamentary
statements, commission reports and NCERT. Official records establish dates and institutional
actions but do not independently prove every claim about policy success. Judgment dates are
not the dates of the underlying violence; allegations, commission findings and convictions
must remain distinct. Historic statistics must retain their reference period.

The diagrams are labelled conceptual teaching diagrams. They are not geographic maps,
historical documents or measured reconstructions. The interface retains themed palettes,
three selectable explanatory stages, image/evidence dialogs, related-event links, search,
century filters, weighted scroll transitions and the accessible reader. No new runtime
network requests or animation dependency were introduced.

## Where to edit

- `src/data/timeline/post-independence/records.ts`: dated narratives, source URLs, people,
  relationships and per-entry image/research briefs.
- `src/data/timeline/post-independence/events.ts`: transforms records into the shared schema.
- `src/data/timeline/post-independence-india.ts`: five periods and broader research gaps.
- `src/data/scenes/post-independence-galleries.ts`: image paths, captions, provenance and licences.
- `src/data/scenes/post-independence-exhibits.ts`: palettes, stage imagery and transitions.
- `public/assets/images/post-independence/`: local image assets.
- [Entry inventory](post-independence-inventory.md): every source, tag and requested addition.

To fill a slot, put the image in the asset folder and register it under the matching event ID
in the galleries file. Include alt text, capture date, photographer, collection, source and
reuse licence. The shared builder automatically replaces that entry's image placeholder.
For factual additions, update the record and supporting source together. New entries also
need a unique ID and a phase covering their start year; update regression counts deliberately.

## Image provenance

- [NASA's Chandrayaan-3 observation](https://www.nasa.gov/image-article/nasas-lro-observes-chandrayaan-3-landing-site/):
  NASA Goddard/Arizona State University, 27 August 2023; NASA educational/informational usage guidelines.
- [NASA's Indian-coast tsunami observations](https://science.nasa.gov/earth/earth-observatory/breaking-tsunami-waves-along-indias-eastern-coast-5186/):
  NASA/GSFC/LaRC/JPL MISR Team, 26 December 2004; original timestamps and scale retained.
- [Raigad, 6 June 2018](https://commons.wikimedia.org/wiki/File:Raighad_Fort_by_21st.jpg):
  Sagarkolhe21, watermark-removed revision by R8cocin8; CC BY-SA 4.0, reduced resolution.

NASA material is not labelled CC0. No endorsement is implied. For additional modern photographs,
check the particular item's rights rather than assuming a government or newspaper image is free.

## Further research already tagged

Regional integration, refugee rehabilitation, land reform, Hindu Code legislation, Ambedkar's
conversion, Dalit/Adivasi/women's movements, Assam and Punjab, labour, displacement, regional
arts and sports deserve dedicated sourced entries. Recent legislation and conflicts need
careful follow-up. Census/NSS/NFHS/RBI statistical additions should state units, geography,
methodology and comparable baselines. Oral histories require consent and clear transcription.

## Verification

Run `npm run check`, `npm run build`, then start the production server and run
`npm run test:browser -- http://localhost:3121` (use the actual server port).
The optional browser script checks all 252 scenes at desktop/tablet/mobile widths, new-century
filtering, images, source panels, forward/reverse chapter transitions, reduced motion and
all eight readers without JavaScript. It creates local screenshots in `.browser-artifacts`;
it does not run during ordinary website use.
