import type { HistoricalVideo } from "@/types/history";

/** Period-level viewing, not specimen-level dating evidence. */
export const prehistoryVideos: Readonly<Record<string, readonly HistoricalVideo[]>> = {
  "before-history": [
    {
      id: "video-before-history",
      title: "Definition, aim, genesis of archaeology (ANT)",
      publisher: "Vidya-mitra",
      watchUrl: "https://www.youtube.com/watch?v=oxL4xWNZLkM",
      description:
        "Begin with the aims of archaeology and how material remains are studied. This provides a methods toolkit for reading the Indian sites that follow.",
      context:
        "A general archaeology introduction, not a chronology of Indian prehistory. Use the site records for local dates and findings.",
      durationSeconds: 1583,
      verifiedAt: "2026-11-03",
      mode: "youtube",
      videoId: "oxL4xWNZLkM",
      catalogueUrl: "https://egyankosh.ac.in/handle/123456789/55532",
    },
  ],
  "lower-palaeolithic": [
    {
      id: "video-lower-palaeolithic",
      title: "Prehistory in India : Palaeolithic Period - I",
      publisher: "CEC",
      watchUrl: "https://www.youtube.com/watch?v=kcf2SAxokVQ",
      description:
        "An India-focused introduction to the Palaeolithic period, useful before exploring handaxes, cleavers and the wider stone-tool record.",
      context:
        "This is a broad period lecture. Attirampakkam's dated deposits do not date every Acheulian site or the first arrival of humans in India.",
      durationSeconds: 1709,
      verifiedAt: "2026-11-03",
      mode: "youtube",
      videoId: "kcf2SAxokVQ",
    },
  ],
  "middle-palaeolithic": [
    {
      id: "video-middle-palaeolithic",
      title: "Middle paleolithic culture of India (ANT)",
      publisher: "Vidya-mitra",
      watchUrl: "https://www.youtube.com/watch?v=kbWlDaql-aM",
      description:
        "Study the Middle Palaeolithic of India alongside the prepared-core and flake-tool evidence in this section.",
      context:
        "Published in 2016, before the 2018 Attirampakkam study and 2020 Dhaba study cited here. Read those newer site-specific dates in the evidence panels.",
      durationSeconds: 1658,
      verifiedAt: "2026-11-03",
      mode: "youtube",
      videoId: "kbWlDaql-aM",
      catalogueUrl: "https://egyankosh.ac.in/handle/123456789/55568",
    },
  ],
  "upper-palaeolithic": [
    {
      id: "video-upper-palaeolithic",
      title:
        "Upper palaeolithic culture of India: Bhimbetka and Belan valley (Pre-historic archaeology)",
      publisher: "Vidya-mitra",
      watchUrl: "https://www.youtube.com/watch?v=YSr4tiB9QWM",
      description:
        "A focused lecture on Bhimbetka and the Belan Valley, offering regional comparisons for the Upper Palaeolithic.",
      context:
        "The focus is Bhimbetka and the Belan Valley, not a film about Mehtakheri or Jwalapuram. Tool traditions and paintings require their own contextual dates.",
      durationSeconds: 1389,
      verifiedAt: "2026-11-03",
      mode: "youtube",
      videoId: "YSr4tiB9QWM",
    },
  ],
  mesolithic: [
    {
      id: "video-mesolithic",
      title: "Prehistory in India : III (Mesolithic Culture)",
      publisher: "CEC",
      watchUrl: "https://www.youtube.com/watch?v=xXp0vLJJsRo",
      description:
        "An India-focused overview of Mesolithic culture to accompany the regional settlement and microlith records.",
      context:
        "Regional traditions overlap. Neither this lecture nor a modern shelter photograph establishes a single date for all Bhimbetka paintings.",
      durationSeconds: 1611,
      verifiedAt: "2026-11-03",
      mode: "youtube",
      videoId: "xXp0vLJJsRo",
    },
    {
      id: "video-bhimbetka-nptel",
      title: "Pre-historic art: Rock painting of Bhimbetka",
      publisher: "IIT Kanpur / NPTEL ? Soumik Nandy Majumdar",
      watchUrl: "https://nptel.ac.in/courses/109104102",
      description:
        "An art-history companion to the Mesolithic overview. Open Introduction to Indian Art ? An Appreciation and select the Week 2 Bhimbetka lecture.",
      context:
        "The course is a viewing guide, not a dating source for every rock-art panel. A stable individual player was not verified, so this card opens the course.",
      verifiedAt: "2026-11-03",
      mode: "external",
    },
  ],
  neolithic: [
    {
      id: "video-neolithic",
      title: "Prehistory in India : IV (Neolithic Culture)",
      publisher: "CEC",
      watchUrl: "https://www.youtube.com/watch?v=7Gh22zin6b0",
      description:
        "Explore Neolithic culture in India before comparing the chapter's regional evidence for settlement, farming and herding.",
      context:
        "Published in 2021, before the 2025 Mehrgarh cemetery study used here. Plant use, cultivation and domestication remain separate claims.",
      durationSeconds: 1689,
      verifiedAt: "2026-11-03",
      mode: "youtube",
      videoId: "7Gh22zin6b0",
    },
  ],
  chalcolithic: [
    {
      id: "video-chalcolithic",
      title: "Chalcolithic Cultures of India - I",
      publisher: "CH 02: CEC-UGC 02: History, Culture & Philosophy",
      watchUrl: "https://www.youtube.com/watch?v=giCZpJiwz48",
      description:
        "An introductory lecture on India's Chalcolithic cultures to accompany Ahar-Banas, Kayatha, Malwa and Jorwe settlement evidence.",
      context:
        "This is Part I of a broader teaching sequence. Copper use did not replace stone tools everywhere, and rural communities overlapped with Harappan urbanism.",
      durationSeconds: 1802,
      verifiedAt: "2026-11-03",
      mode: "youtube",
      videoId: "giCZpJiwz48",
    },
  ],
  "transition-to-early-urban-harappan-societies": [
    {
      id: "video-transition-to-early-urban-harappan-societies",
      title: "Indus valley civilization (ANT)",
      publisher: "Vidya-mitra",
      watchUrl: "https://www.youtube.com/watch?v=Gh5xERw1IUU",
      description:
        "A broader Indus civilisation lecture that bridges this chapter's early settlement phases and the urban archaeology of the next chapter.",
      context:
        "The lecture extends beyond the early Ravi and Kot Diji phases. Mature Harappan monuments must not be treated as pictures of those earlier phases. Present-day Pakistan sites are included as subcontinental context.",
      durationSeconds: 2008,
      verifiedAt: "2026-11-03",
      mode: "youtube",
      videoId: "Gh5xERw1IUU",
      catalogueUrl: "https://egyankosh.ac.in/handle/123456789/55561",
    },
  ],
};
