# Classical & Medieval India

This expandable chapter covers selected Indian histories from c. 200 BCE to 1500 CE. It preserves the 56 existing records and adds 22 India-focused entries. Standalone histories of other continents are excluded. Indo-Greek rulers, Kushan connections and travellers are included for their direct relationship to the subcontinent, whose historical geography is not limited to modern national borders.

## Chronology and interpretation

Four navigation phases group entry dates: 200 BCE–299 CE, 300–599, 600–1199 and 1200–1500. Regional traditions overlap. Approximate topic windows are not precise reign dates. Ajanta has distinct construction phases; the overall span does not imply uninterrupted building. Delhi and Vijayanagara continue after 1500. Nalanda's dates are rounded. There is no year zero. Dates and uncertainty notes remain visible in the evidence reader.

Scroll distance gives readers time to examine content; it is not proportional to elapsed historical years. The global timeline sorts all events by start date. Filters intersect event date ranges, so a long-lived institution can appear in several centuries. Contemporary links indicate overlap, not proof of contact.

## Editing and adding evidence

- Edit historical text, dates, people, regional labels and source keys in `src/data/timeline/classical/records.ts`.
- Add references in `src/data/timeline/classical/sources.ts`; the event builder attaches them to evidence sections.
- Place licensed photos in `public/assets/images/classical/` and register captions, alt text and credits in `src/data/scenes/classical-galleries.ts`. The two current photos have provenance in `docs/classical-media-manifest.json`.
- The [inventory](classical-medieval-inventory.md) gives each exact image/map tag and requested subject. Adding a gallery automatically replaces that event's image request.
- Add further regional research through the tagged gaps in `src/data/timeline/classical-medieval.ts`. Shunga, Satavahana, Harsha, Pala, Pratihara, Rashtrakuta, northeastern kingdoms, regional Sultanates and early Sikh histories still need separate sourced entries. Everyday life and regional literature also need deeper coverage.

Every scene has three reading stages, evidence hotspots and a conceptual diagram. Diagrams are explicitly labelled; they are not measured plans, border maps or fabricated primary evidence. Museum images show a Chola Nataraja and a late-sixth/early-seventh-century Buddha probably from Bihar. Neither is presented as a ruler's portrait. The latter is a separate dated entry, not an earlier Gupta imperial artefact or an identified Nalanda find.

## Sources reviewed

Reviewed 24 October 2026. Source links also appear with the relevant records in the website.

- [Buddhism on the Silk Roads: the Kushan Empire](https://idp.bl.uk/discover/learning/buddhism-on-the-silk-roads/articles/transmission-of-buddhism/the-kushan-empire/) — British Library, International Dunhuang Programme
- [Kushan Dynasty: Dynastic History](https://www.iranicaonline.org/articles/kushan-dynasty-i-history/) — Encyclopaedia Iranica
- [The Gupta Dynasty](https://depts.washington.edu/silkroad/exhibit/guptas/essay.html) — University of Washington, Silk Road Seattle
- [Archaeological Site of Nalanda Mahavihara](https://whc.unesco.org/en/list/1502/) — UNESCO World Heritage Centre
- [Aryabhata the Elder](https://mathshistory.st-andrews.ac.uk/Biographies/Aryabhata_I/) — University of St Andrews, MacTutor
- [Bhakti-Sufi Traditions](https://ncert.nic.in/textbook/pdf/lehs202.pdf) — NCERT, Themes in Indian History II, chapter 6
- [Brahmagupta](https://mathshistory.st-andrews.ac.uk/Biographies/Brahmagupta/) — University of St Andrews, MacTutor
- [Great Living Chola Temples](https://whc.unesco.org/en/list/250/) — UNESCO World Heritage Centre
- [Coinage: Medieval India](https://m.rbi.org.in/Commonman/English/Currency/Scripts/Medieval.aspx) — Reserve Bank of India Currency Museum
- [Through the Eyes of Travellers](https://ncert.nic.in/textbook/pdf/lehs201.pdf) — NCERT, Themes in Indian History II, chapter 5
- [Group of Monuments at Hampi](https://whc.unesco.org/en/list/241/) — UNESCO World Heritage Centre
- [Indo-Greek dynasty](https://www.iranicaonline.org/articles/indo-greek-dynasty/) — Encyclopaedia Iranica
- [Ajanta Caves](https://whc.unesco.org/en/list/242/) — UNESCO World Heritage Centre
- [Buddha Offering Protection, accession 69.222](https://www.metmuseum.org/art/collection/search/38965) — The Metropolitan Museum of Art
- [Ellora Caves](https://whc.unesco.org/en/list/243/) — UNESCO World Heritage Centre
- [Group of Monuments at Mahabalipuram](https://whc.unesco.org/en/list/249/) — UNESCO World Heritage Centre
- [Group of Monuments at Pattadakal](https://whc.unesco.org/en/list/239/) — UNESCO World Heritage Centre
- [Khajuraho Group of Monuments](https://whc.unesco.org/en/list/240/) — UNESCO World Heritage Centre
- [Rani-ki-Vav at Patan](https://whc.unesco.org/en/list/922/) — UNESCO World Heritage Centre
- [Sacred Ensembles of the Hoysalas](https://whc.unesco.org/en/list/1670/) — UNESCO World Heritage Centre
- [Qutb Minar and its Monuments](https://whc.unesco.org/en/list/233/) — UNESCO World Heritage Centre
- [Sun Temple, Konark](https://whc.unesco.org/en/list/246/) — UNESCO World Heritage Centre

## Validation

Run `npm run check`, `npm run build`, then start the production server and run `npm run test:browser -- http://localhost:PORT`. The browser script checks all scenes at desktop, tablet and phone widths, image loading, filters, forward/reverse transitions, focus, console errors and the server-rendered evidence readers without JavaScript.

The manual `scripts/fetch-classical-media.cjs` downloads only the two selected Met public-domain images and writes their provenance. It does not run during normal website use.
