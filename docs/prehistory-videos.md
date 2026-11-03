# Prehistoric India: video guides

Reviewed 3 November 2026. Nine viewing recommendations cover all eight existing reading
sections: eight YouTube lectures with embedding enabled and one external NPTEL course guide.
The seven populated periods also expose their guides in every associated timeline evidence
dialog. Before History has no dated event and keeps its methods lecture in the reading section.

## Selection

| Section                           | Selected lecture                                                                            | Publisher                                 | Length                        |
| --------------------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------- | ----------------------------- |
| Before History                    | [Definition, aim, genesis of archaeology](https://www.youtube.com/watch?v=oxL4xWNZLkM)      | Vidya-mitra; indexed by IGNOU eGyanKosh   | 26:23                         |
| Lower Palaeolithic                | [Prehistory in India: Palaeolithic Period – I](https://www.youtube.com/watch?v=kcf2SAxokVQ) | CEC                                       | 28:29                         |
| Middle Palaeolithic               | [Middle paleolithic culture of India](https://www.youtube.com/watch?v=kbWlDaql-aM)          | Vidya-mitra; indexed by IGNOU eGyanKosh   | 27:38                         |
| Upper Palaeolithic                | [Bhimbetka and Belan valley](https://www.youtube.com/watch?v=YSr4tiB9QWM)                   | Vidya-mitra / CEC anthropology courseware | 23:09                         |
| Mesolithic                        | [Prehistory in India: III](https://www.youtube.com/watch?v=xXp0vLJJsRo)                     | CEC                                       | 26:51                         |
| Mesolithic: rock art              | [Week 2: Bhimbetka rock painting](https://nptel.ac.in/courses/109104102)                    | IIT Kanpur / NPTEL, Soumik Nandy Majumdar | Select lecture on course page |
| Neolithic                         | [Prehistory in India: IV](https://www.youtube.com/watch?v=7Gh22zin6b0)                      | CEC                                       | 28:09                         |
| Chalcolithic                      | [Chalcolithic Cultures of India – I](https://www.youtube.com/watch?v=giCZpJiwz48)           | CEC-UGC History, Culture & Philosophy     | 30:02                         |
| Early urban / Harappan transition | [Indus valley civilization](https://www.youtube.com/watch?v=Gh5xERw1IUU)                    | Vidya-mitra; indexed by IGNOU eGyanKosh   | 33:28                         |

This is a curated selection, not a claim to have reviewed every available video or watched
every lecture in full. Selection prioritised identifiable academic publishers, topic fit,
substantial explanatory lectures and accessible original sources over exam shorts, anonymous
reuploads or speculative reconstructions. Publisher titles, descriptions, durations, catalogue
references and YouTube playback metadata were checked. Language and caption availability are
not promised; use the publisher player's available settings.

The methods lecture introduces archaeology generally and is framed as a toolkit for studying
Indian prehistory. Upper Palaeolithic viewing specifically concerns Bhimbetka and the Belan Valley,
not every site in the section. The Indus lecture extends into mature urbanism and is labelled as
a bridge to the next chapter. Sites now in Pakistan appear as subcontinental historical context.

The 2016 Middle Palaeolithic lecture predates the 2018 Attirampakkam and 2020 Dhaba papers.
The 2021 Neolithic lecture predates the 2025 Mehrgarh cemetery study. The timeline's dated,
site-specific sources remain authoritative for its claims; lecture period boundaries do not
overwrite them. No chronology or event count was changed.

## Playback and fallback

- Select **Explore videos, images & evidence** in a prehistoric scene, or open its reading section.
- **Load video player** creates the publisher's `youtube-nocookie.com` iframe; press play inside it.
- No player, remote thumbnail, provider script or video download is requested before selection.
- Loading another guide unloads the previous player. Closing the player or evidence dialog
  removes its iframe, stopping playback. Escape closes the native dialog when focus is outside
  the provider iframe; the visible Close control remains available.
- Every video retains an ordinary external link, including without JavaScript. Use that link
  if a publisher disables embedding, requires sign-in, applies regional restrictions or is
  blocked by the viewer's browser/network. No automatic navigation interrupts the reader.
- NPTEL stays external because a stable lecture-specific embed was not verified.

The [manifest](prehistory-video-manifest.json) records the eight original video references,
publication dates and `playableInEmbed=true` evidence obtained on the review date. This is a
point-in-time check, not a guarantee of future availability. Embedding uses the publisher's
player; the project does not download or redistribute video files or claim their copyright.

Players retain their controls, fullscreen capability and a minimum 200px height. The explicit
`strict-origin-when-cross-origin` referrer policy follows the publisher's oEmbed markup and
avoids suppressing the referring origin. See [YouTube player parameters](https://developers.google.com/youtube/player_parameters)
and [player errors](https://developers.google.com/youtube/iframe_api_reference#onError).

## Maintenance and checks

- Edit `src/data/timeline/prehistory/videos.ts` to change the period mapping and viewing notes.
- `HistoricalVideo` in `src/types/history.ts` distinguishes YouTube embeds from external links.
- The shared content validator checks source URLs, IDs, metadata and durations.
- `historical-videos.tsx` owns the on-demand player; `prehistory.css` owns its responsive styles.
- Run `npm run check` and `npm run build`.
- Start the production server, then run `node scripts/browser-videos.cjs http://localhost:3127`
  with the actual server port. This optional Chrome check exercises 1440/768/390/320px layouts,
  deferred requests, one-player behaviour, closure, external fallback and no-JavaScript links.
  It blocks provider requests for deterministic UI checks, then saves a separate live-provider
  screenshot. It does not establish complete playback of every lecture.

Verified on 3 November 2026: all 49 tests, lint, TypeScript, formatting, content validation
and the production build passed. Video UI checks passed at 1440, 768, 390 and 320px,
including blocked-provider fallback links, no eager provider requests, one loaded player,
dialog cleanup and source links without JavaScript. A separate live-provider check loaded
the CEC Palaeolithic player and started its opening sequence inside the page. The other
seven videos' embedding permissions were checked through publisher metadata; full playback
of every lecture was not tested. Scroll/year progression, forward/reverse chapter transitions
and all eight static readers passed with no hydration/runtime exceptions. Four existing
Lower Palaeolithic image-credit warnings remain.
