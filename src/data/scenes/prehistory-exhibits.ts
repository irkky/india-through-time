import type { PrehistoryDiagram, PrehistoryExhibit } from "@/types/prehistory-exhibit";
import type { TimelineScenePresentation } from "@/types/timeline-presentation";
import { lowerPalaeolithicGallery, middlePalaeolithicGallery } from "./palaeolithic-gallery";
import { prehistoryGalleries } from "./prehistory-galleries";

const exhibit = (
  diagram: PrehistoryDiagram,
  title: string,
  caption: string,
  gallery?: PrehistoryExhibit["gallery"],
): PrehistoryExhibit => ({
  gallery,
  diagram,
  title,
  caption,
  points: [
    { label: "Evidence", x: 29, y: 44, field: "description" },
    { label: "Context", x: 70, y: 65, field: "significance" },
    { label: "Dating & limits", x: 72, y: 25, field: "interpretation" },
  ],
});

/** Original explanatory artwork, not excavation plans or replicas of individual finds. */
const baseExhibits: Readonly<Record<string, PrehistoryExhibit>> = {
  "singi-talav-acheulian": exhibit(
    "acheulian",
    "Traditions overlap",
    "Schematic handaxe and cleaver forms; not specimens from Singi Talav.",
  ),
  "sandhav-coastal-occupation": exhibit(
    "core",
    "Near a changing coastline",
    "A conceptual core-and-flake illustration, not an excavated Sandhav specimen.",
  ),
  "jwalapuram-rockshelter": exhibit(
    "beads",
    "Tools and ornaments",
    "Illustrative bead forms; not replicas or a claim that every find shares one date.",
  ),
  "mesolithic-regional-overview": exhibit(
    "camp",
    "A mosaic of communities",
    "Conceptual campsite; this regional overview does not reconstruct a particular settlement.",
  ),
  "chopani-mando-late-phase": exhibit(
    "camp",
    "Returning to a place",
    "An interpretive settlement vignette, not a measured plan of Chopani Mando.",
  ),
  "gufkral-aceramic": exhibit(
    "pit",
    "A Kashmir sequence",
    "Conceptual pit cutaway; not a surveyed Gufkral dwelling or a claim about the function of every pit.",
  ),
  "mahagara-neolithic": exhibit(
    "rice",
    "Reading plant evidence",
    "Botanical teaching illustration; not a photograph or identification of an excavated grain.",
  ),
  "kayatha-culture": exhibit(
    "beads",
    "Crafts in a village world",
    "Schematic beads and fragments; not a catalogue of Kayatha finds.",
  ),
  "malwa-villages": exhibit(
    "village",
    "Making a home",
    "Conceptual domestic space; not an archaeological plan of Navdatoli.",
  ),
  "lower-palaeolithic-scaffold": exhibit(
    "acheulian",
    "Shaping an edge",
    "Handaxe, cleaver and flakes: schematic Acheulian tool forms, not replicas of excavated Attirampakkam specimens. Not to scale.",
    lowerPalaeolithicGallery,
  ),
  "attirampakkam-middle-palaeolithic": exhibit(
    "core",
    "Thinking through a stone",
    "Prepared core and detached flakes: a schematic explanation of toolmaking.",
    middlePalaeolithicGallery,
  ),
  "dhaba-toba-sequence": exhibit(
    "strata",
    "Reading a sequence",
    "An abstract sequence of deposits. This is not a measured Dhaba section.",
  ),
  "jwalapuram-toba": exhibit(
    "strata",
    "The ash as a marker",
    "A conceptual ash layer between tool-bearing deposits, not a scaled excavation drawing.",
  ),
  "dhaba-microliths": exhibit(
    "blades",
    "A smaller cutting edge",
    "Illustrative small-tool silhouettes. Shape and size do not identify a particular specimen.",
  ),
  "mehtakheri-microblades": exhibit(
    "blades",
    "Small blades, long histories",
    "Microblade forms shown schematically, without an archaeological scale.",
  ),
  "bagor-mesolithic": exhibit(
    "camp",
    "A place to return to",
    "An interpretive settlement vignette, not a reconstruction of Bagor's excavated layout.",
  ),
  "lahuradewa-rice-use": exhibit(
    "rice",
    "A grain of evidence",
    "A botanical illustration. It does not identify the archaeological grains as domesticated rice.",
  ),
  "mehrgarh-aceramic-cemetery": exhibit(
    "village",
    "A settlement in time",
    "Conceptual earthen structures, not a reconstruction of a dated Mehrgarh building.",
  ),
  "burzahom-neolithic": exhibit(
    "pit",
    "Below the ground",
    "A schematic cutaway of a pit dwelling; dimensions and construction are illustrative.",
  ),
  "southern-neolithic-ashmounds": exhibit(
    "ashmound",
    "A landscape of ash",
    "An explanatory mound cross-section, not the stratigraphy of a specific excavated mound.",
  ),
  "balathal-ahar-banas": exhibit(
    "village",
    "Spaces for everyday life",
    "A conceptual house and storage arrangement, not a surveyed Balathal plan.",
  ),
  "inamgaon-settlement": exhibit(
    "village",
    "Reading domestic space",
    "A schematic grouping of rooms, not a copy of an Inamgaon house plan.",
  ),
  "harappa-ravi-phase": exhibit(
    "beads",
    "Traces of making",
    "Illustrative beads and working fragments, not a catalogue of Ravi-phase specimens.",
  ),
  "harappa-kot-diji-phase": exhibit(
    "town",
    "From settlement to city",
    "An abstract settlement grid explaining urban development, not Harappa's street plan.",
  ),
};

const themes = {
  stone: {
    background: "#172e32",
    backgroundEnd: "#091719",
    accent: "#e2bc76",
    foreground: "#fff4dd",
    muted: "#c1ceca",
  },
  earth: {
    background: "#382b24",
    backgroundEnd: "#171410",
    accent: "#efbb83",
    foreground: "#fff2df",
    muted: "#d1c4b2",
  },
  plant: {
    background: "#23382c",
    backgroundEnd: "#101c16",
    accent: "#d8c784",
    foreground: "#f7f0da",
    muted: "#c3ceb8",
  },
};

export const prehistoryExhibits: Readonly<Record<string, PrehistoryExhibit>> = Object.fromEntries(
  Object.entries(baseExhibits).map(([id, visual]) => {
    const gallery = prehistoryGalleries[id];
    return [
      id,
      gallery ? { ...visual, gallery, stageImages: [0, gallery.length > 1 ? 1 : 0, null] } : visual,
    ];
  }),
);

export const prehistoryExhibitPresentations: Readonly<Record<string, TimelineScenePresentation>> =
  Object.fromEntries(
    Object.entries(prehistoryExhibits).map(([eventId, visual]) => {
      const palette = ["rice", "ashmound", "camp"].includes(visual.diagram)
        ? themes.plant
        : ["village", "town", "pit", "beads"].includes(visual.diagram)
          ? themes.earth
          : themes.stone;
      return [
        `exhibit-${eventId}`,
        {
          palette,
          exhibit: visual,
          scene: {
            id: `scene-${eventId}`,
            timelinePointId: eventId,
            duration: visual.gallery
              ? 2.2
              : ["strata", "pit", "ashmound"].includes(visual.diagram)
                ? 1.5
                : 1,
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
