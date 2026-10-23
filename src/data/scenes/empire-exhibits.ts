import type { TimelineScenePresentation } from "@/types/timeline-presentation";
import type { PrehistoryGalleryImage } from "@/types/prehistory-exhibit";
import { empireEntries } from "@/data/timeline/empires/events";

export const ringstoneImage: PrehistoryGalleryImage = {
  src: "/assets/images/empires/ringstone-met-38080.jpg",
  title: "A surviving carved fragment",
  alt: "Fragment of a carved stone ring with small figures and palm-tree motifs",
  category: "Artefact",
  caption:
    "The Met, 1987.142.391. Stone, third–second century BCE; catalogued diameter 8.1 cm. The broad object date crosses the Mauryan dynastic boundary; its specific use is not established here.",
  credit:
    "The Metropolitan Museum of Art, Samuel Eilenberg Collection, Gift of Samuel Eilenberg, 1987",
  license: "Public Domain / The Met Open Access",
  sourceUrl: "https://www.metmuseum.org/art/collection/search/38080",
};

const captions: Record<string, string> = {
  network:
    "Conceptual connections between centres; not a geographic map, border claim or measured route.",
  pillar:
    "A generic pillar and message panel; no invented ancient script or replica of a specific monument.",
  coin: "Teaching diagram of separate punches; symbols are illustrative, not an attributed ancient coin type.",
  cave: "Conceptual rock-cut chamber; not a measured plan or a reconstruction of a named cave.",
  stupa: "Conceptual early core and later envelope; not a measured phase reconstruction of Sanchi.",
  ringstone:
    "A ring-shaped teaching silhouette; use the museum photograph to examine the actual fragment.",
  oral: "Conceptual transmission of teachings; not a portrait, manuscript or recording from antiquity.",
  town: "Conceptual town and hinterland; not an excavated city plan.",
};

export const empireGalleries: Readonly<Record<string, readonly PrehistoryGalleryImage[]>> = {
  "magadha-rise": [
    {
      src: "/assets/images/empires/rajgir-indianvagabond.jpg",
      title: "Rajgir: surviving wall and landscape",
      category: "Site photograph",
      alt: "Stone walls extending across a grassy hillside at Rajgir",
      caption:
        "Cyclopean Wall of Rajgir, photographed 23 October 2023. Landscape context only: this photograph does not date the visible masonry to a particular ruler. Wikimedia preview, resized without cropping.",
      credit: "Indianvagabond / Wikimedia Commons",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Cyclopean_Wall_of_Rajgir_2.jpg",
    },
  ],
  "early-punchmarked-money": [
    {
      src: "/assets/images/empires/punchmarked-world-imaging.jpg",
      title: "Punch-marked coin: a visual comparison",
      category: "Teaching example",
      alt: "Two faces of an irregular silver-coloured coin bearing several punched symbols",
      caption:
        "Separate specimen from British Museum 1869,1203.48. The Commons filename says Mauryan, but its description attributes the coin to the Nandas. Used only to illustrate punching and shape; exact dynasty, date and measurements are not adopted. Reproduced unchanged.",
      credit: "PHG / World Imaging (Per Honor et Gloria), Wikimedia Commons",
      license: "Public domain, released by the photographer",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:MauryanCoin.JPG",
    },
  ],
  "kalinga-war": [
    {
      src: "/assets/images/empires/dhauli-sidsahu.jpg",
      title: "Dhauli: the edict site in its modern setting",
      category: "Site photograph",
      alt: "Rock-cut elephant above the protected Ashokan edict site at Dhauli",
      caption:
        "Dhauli, photographed 23 January 2013. Site context, not a battle image or a photograph of Edict XIII: the separate Kalinga edicts differ from the major-rock series. Reproduced unchanged.",
      credit: "Sidsahu / Wikimedia Commons",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Dhauli_Ashoka_edict.jpg",
    },
  ],
  "barabar-ajivikas": [
    {
      src: "/assets/images/empires/sudama-peppe-1870.jpg",
      title: "Sudama Cave: the exterior",
      category: "Site photograph",
      alt: "Entrance cut into the rounded granite rock face at Sudama Cave",
      caption:
        "Sudama Cave, archival photograph attributed to Thomas Fraser Peppé, 1870, British Library via Wikimedia Commons. It records a nineteenth-century exterior, not the cave's ancient appearance. Reproduced unchanged.",
      credit: "Thomas Fraser Peppé (1870), British Library / Wikimedia Commons",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Sudama_cave.jpg",
    },
  ],
  "mauryan-ringstone": [ringstoneImage],
  "sanchi-mauryan-core": [
    {
      src: "/assets/images/empires/sanchi-aditya-maurya.jpg",
      title: "Sanchi today: several periods in one view",
      category: "Site photograph",
      alt: "Lateral view of the Great Stupa at Sanchi with stone enclosure and a carved gateway",
      caption:
        "Photographed 29 September 2012. The visible enlarged stupa, stone enclosure and gateway include later construction; this is not a view of the Mauryan brick core alone. Original photograph reproduced unchanged.",
      credit: "Aditya Maurya / Wikimedia Commons",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Main_Stupa.JPG",
    },
  ],
  "ashoka-lumbini": [
    {
      src: "/assets/images/empires/lumbini-pranish-subedi.jpg",
      title: "The surviving pillar at Lumbini",
      category: "Site photograph",
      alt: "Ashoka's surviving stone pillar at Lumbini inside a protective enclosure",
      caption:
        "Photograph taken 14 January 2013. Modern site surroundings are visible; the scene does not reconstruct the ancient setting. Original photograph reproduced unchanged.",
      credit: "Pranish subedi / Wikimedia Commons",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Ashoka_pillar,_lumbini.jpg",
    },
  ],
};

export const empireExhibitPresentations: Readonly<Record<string, TimelineScenePresentation>> =
  Object.fromEntries(
    empireEntries.map((entry) => {
      const gallery = empireGalleries[entry.id];
      const contemplative = entry.diagram === "oral" || entry.diagram === "stupa";
      return [
        `exhibit-${entry.id}`,
        {
          palette: {
            background: contemplative ? "#203731" : "#342b35",
            backgroundEnd: contemplative ? "#0d1c1b" : "#17131e",
            accent: contemplative ? "#d1d9a1" : "#edc68d",
            foreground: "#fff4e4",
            muted: "#cec3ba",
          },
          exhibit: {
            diagram: entry.diagram,
            title: entry.visualTitle,
            caption: captions[entry.diagram]!,
            layout:
              entry.diagram === "network" || entry.diagram === "town"
                ? "settlement"
                : entry.diagram === "oral"
                  ? "comparison"
                  : "artefact",
            ...(gallery ? { gallery, stageImages: [null, 0, null] } : {}),
            points: [
              { label: "Evidence", field: "description", x: 25, y: 40 },
              { label: "Context", field: "significance", x: 65, y: 50 },
              { label: "Dating & limits", field: "interpretation", x: 75, y: 25 },
            ],
          },
          scene: {
            id: `scene-${entry.id}`,
            timelinePointId: entry.id,
            duration: gallery ? 2.2 : 1.6,
            transitionIn: { type: "crossfade", portion: 0.36, ease: "sine.inOut" },
            layers: [
              { id: "background", kind: "background", renderer: "gradient" },
              { id: "exhibit", kind: "text", renderer: "prehistory-exhibit" },
            ],
          },
        } satisfies TimelineScenePresentation,
      ];
    }),
  );
