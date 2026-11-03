# Second Urbanization & Empires: video guides

Reviewed **3 November 2026**. Fourteen original-publisher videos cover all four periods and
seventeen timeline records. Ashoka's reign appears in two relevant period guides, so the
reading section contains fifteen cards. All selected uploads currently allow embedding.

## Selected viewing

The first card in each period gives the starting point; further cards cover narrower topics.
The long lectures come from CEC / CEC-UGC and Vidya-mitra. Short UNESCO/NHK site footage
complements the lectures, and World of Antiquity supplies a focused critical discussion
of Barabar. This is a curated selection from public searches, not an exhaustive list of
all available videos or a claim that every lecture has been watched in full and fact-checked.

| Video                                                                                                                       | Publisher                                        | Duration | Timeline placement                            |
| --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------- | --------------------------------------------- |
| [16 Mahajanapada](https://www.youtube.com/watch?v=abVla4xxK_Q)                                                              | CH 02: CEC-UGC 02: History, Culture & Philosophy | 28:00    | mahajanapadas                                 |
| [Emergence of new culture: urbanization (History of India up to c. A.D. 1200)](https://www.youtube.com/watch?v=MAIDmzDqSe4) | Vidya-mitra                                      | 26:14    | ganga-urban-life                              |
| [The Nanda Dynasty of Magadha](https://www.youtube.com/watch?v=QA9BdPKTWuY)                                                 | CH 02: CEC-UGC 02: History, Culture & Philosophy | 26:59    | magadha-rise                                  |
| [Rise of Buddhism and Jainism](https://www.youtube.com/watch?v=6sCITATi2eM)                                                 | CEC                                              | 45:51    | mahavira-jain-traditions, buddha-early-sangha |
| [Janapada Coins](https://www.youtube.com/watch?v=rlkRcz1a3Mk)                                                               | CH 02: CEC-UGC 02: History, Culture & Philosophy | 30:00    | early-punchmarked-money                       |
| [Alexander's Invasion](https://www.youtube.com/watch?v=urD6_PJQ99w)                                                         | CH 02: CEC-UGC 02: History, Culture & Philosophy | 28:00    | taxila-northwest, alexander-taxila            |
| [Ancient Indian History : The Mauryan Period](https://www.youtube.com/watch?v=aJaV6krGpRI)                                  | CEC                                              | 60:43    | mauryan-empire                                |
| [Cultural life in Mauryan times (History of India up to c. A.D. 1200)](https://www.youtube.com/watch?v=58NCz9Ygp3Y)         | Vidya-mitra                                      | 27:33    | mauryan-ringstone                             |
| [Reign of Asoka (History of India up to c. A.D. 1200)](https://www.youtube.com/watch?v=SxCNEaFlAf4)                         | Vidya-mitra                                      | 28:05    | ashoka-rule, kalinga-war                      |
| [Asoka’s Dhamma (History of India up to c. A.D. 1200)](https://www.youtube.com/watch?v=tjS86ax9mKQ)                         | Vidya-mitra                                      | 27:59    | ashoka-dhamma                                 |
| [Who Made the BARABAR CAVES?](https://www.youtube.com/watch?v=on6W7p4xcdg)                                                  | World of Antiquity                               | 56:15    | barabar-ajivikas                              |
| [Buddhist Monuments at Sanchi (UNESCO/NHK)](https://www.youtube.com/watch?v=BkFpizJgwYk)                                    | UNESCO                                           | 2:54     | sanchi-mauryan-core                           |
| [Towards a sustainable Lumbini, the birthplace of Lord Buddha](https://www.youtube.com/watch?v=rsDpDvuXGjo)                 | UNESCO                                           | 19:48    | ashoka-lumbini                                |
| [Post-Mauryan developments- part 1 (History of India up to c. A.D. 1200)](https://www.youtube.com/watch?v=eDH6IaAeh1Q)      | Vidya-mitra                                      | 27:52    | mauryan-successors                            |

## Relevance and chronology

- **Cities, states and new paths:** state formation, urbanisation, Nanda Magadha, Buddhist/Jain traditions, early coinage and the northwestern campaign. The Taxila card uses campaign context, not a claimed full site documentary; the Nanda lecture covers the later portion of Magadha's rise.
- **An empire emerges:** a longer Mauryan overview, cultural background for the ring stone, and Ashoka's reign. The culture lecture is not presented as identification of the specific museum object.
- **Ashokan evidence:** reign and Kalinga, dhamma, Barabar, Sanchi and Lumbini. Sanchi's visible gateways and enlargements belong to later phases, as the [UNESCO site account](https://whc.unesco.org/en/list/524/) explains. The [Lumbini site account](https://whc.unesco.org/en/list/666/) accompanies a modern conservation film; traditional biographical dates remain distinct from the pillar's date.
- **Toward regional histories:** the first post-Mauryan lecture explicitly continues beyond 185 BCE. Its later material is not moved into a single timeline year.

Taxila in present-day Pakistan and Lumbini in present-day Nepal are included only through
their existing connections to this ancient Indian-subcontinental history. No unrelated
modern foreign history has been added. All timeline dates and existing evidence remain unchanged.

The Barabar discussion examines modern mystery claims critically; it is not an endorsement
of lost technology. Institutional lectures were preferred over anonymous reuploads, exam
shorts and dramatic reconstructions. A separate Jainism lecture was considered, but the
longer comparative CEC lecture already provides an introductory guide for both traditions.
No suitable verified object-specific film was identified for the ring stone; the card labels
its broader cultural context rather than claiming a precise match.

## Source verification and playback

The [manifest](empires-video-manifest.json) records original titles, publishers, durations,
publication timestamps, verification date, event/period mappings and embedding evidence.
Each selected public watch page returned `status=OK` and `playableInEmbed=true`; YouTube
oEmbed returned the matching title. Metadata was checked, not every statement in every
full-length lecture. Captions and language options depend on the publisher and are not promised.

Visitors select **Load video player**, then Play. The existing privacy-enhanced player
loads only after selection, with no autoplay or eager thumbnail/provider requests. Loading
another player unloads the previous one; closing the player or evidence dialog stops it.
Every card keeps a **Watch on YouTube** link, including without JavaScript, for blocked,
removed or unavailable playback. No automatic redirect interrupts reading. Videos are
embedded from their publishers, not downloaded or rehosted; embedding permission can change.

## Maintenance and checks

- Catalogue and mappings: `src/data/timeline/empires/videos.ts`.
- Attachments: `empires/events.ts` and `second-urbanization.ts`.
- Playback: the existing shared `HistoricalVideos` component; no chapter-specific player.
- Coverage regression: `tests/empires-videos.test.cjs` checks every record, manifest consistency and focused placement.

Run `npm run check` and `npm run build`, start the production server, then use:

```powershell
$env:VIDEOS_CHAPTER = 'empires'
node scripts/browser-videos.cjs http://localhost:3129
```

The optional browser check covers 1440, 768, 390 and 320px layouts, deferred loading,
source links, a single loaded player, closing dialogs and links without JavaScript.
Its final live sample is the CEC Mauryan lecture; it does not prove full playback of all fourteen videos.

## Verification results

- Lint, TypeScript and formatting passed. The initial sandboxed test launch hit Windows `spawn EPERM`; the authorized rerun passed all **51 tests**.
- Content validation: 252 events, 252 scenes and 8 eras; the four pre-existing Lower Palaeolithic image-credit warnings are unchanged.
- Production build passed with static routes.
- All fifteen card instances passed at 1440, 768, 390 and 320px: deferred loading, source fallbacks, player sizing, one loaded player, dialog cleanup and no-JavaScript links. No hydration/runtime exceptions were detected.
- A duplicate-video selector in the optional test was corrected so that both Ashoka cards are checked independently. Chrome then retained a temporary profile lock after the assertions passed; cleanup now uses asynchronous retries and reports a remaining `EBUSY` lock separately. The subsequent short provider/no-JavaScript run completed successfully.
- Live CEC Mauryan playback started inside the page, confirmed in a screenshot. Other uploads were checked for embedding permission, not individually played in full.
- Forward/reverse scrolling, chapter crossfades, the year counter and all eight static readers passed the motion regression.

These results are local production-build checks, not verification of the published Vercel deployment.
