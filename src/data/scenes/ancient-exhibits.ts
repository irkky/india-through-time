import type { TimelineScenePresentation } from "@/types/timeline-presentation";
import type { PrehistoryDiagram, PrehistoryGalleryImage } from "@/types/prehistory-exhibit";
import { ancientIndiaEra } from "@/data/timeline/ancient-india";

export const indusSealImage: PrehistoryGalleryImage = {
  src: "/assets/images/ancient_india/indus-seal-met-49-40-1.jpg",
  title: "Ancient seal, modern impression",
  category: "Artefact",
  alt: "Square stone seal at left and its modern clay impression at right, showing reversed animal and inscription",
  caption:
    "The Met, 49.40.1. Burnt steatite, about 2600-1900 BCE; seal 3.8 × 3.8 × 1 cm. The right-hand impression is modern. No translation is supplied for the undeciphered signs.",
  credit: "The Metropolitan Museum of Art, Dodge Fund, 1949",
  license: "Public Domain / The Met Open Access",
  sourceUrl: "https://www.metmuseum.org/art/collection/search/324062",
};

const visuals: Record<string, [PrehistoryDiagram, string, string]> = {
  "rakhigarhi-cemetery": [
    "pottery",
    "Objects in their context",
    "A generic bowl and layer diagram; not a reconstruction of a burial or a replica of grave goods.",
  ],
  "dholavira-water-city": [
    "water",
    "Collect, store, use",
    "Conceptual water storage diagram; not Dholavira's measured plan or an assignment of dates to reservoirs.",
  ],
  "indus-valley-civilization": [
    "town",
    "An urban network",
    "Schematic buildings and streets, not a map of Harappa or a reconstruction of political borders.",
  ],
  "mohenjo-daro-urban-life": [
    "water",
    "Water through a city",
    "Explanatory water-system diagram; channels and buildings are not an excavated Mohenjo-daro layout.",
  ],
  "harappan-craft-workshops": [
    "beads",
    "Material, skill, finished object",
    "Illustrative beads and fragments; not catalogue specimens or objects at a common scale.",
  ],
  "indus-seals-writing": [
    "seal",
    "Carving and impression",
    "A blank seal-and-impression schematic explains reversal; it invents no Indus signs or translation.",
  ],
  "harappan-weights": [
    "weights",
    "Comparing quantities",
    "Illustrative blocks and balance; not an excavated weighing apparatus or a calibrated weight series.",
  ],
  "indus-food-farming": [
    "rice",
    "Plants as evidence",
    "Botanical teaching illustration, not a specimen plate or a claim that every settlement grew rice.",
  ],
  "lothal-crafts-exchange": [
    "water",
    "A basin and its setting",
    "Conceptual basin; not a measured dock plan or proof of a specific ancient coastline.",
  ],
  "late-harappan-regionalisation": [
    "village",
    "Settlements continue",
    "Conceptual domestic spaces; not a map of migration routes or evidence of one uniform transition.",
  ],
  "early-iron-ganga-vindhyas": [
    "furnace",
    "Air, heat and material traces",
    "Schematic furnace and airflow; not the excavated design of a dated furnace.",
  ],
  "rigvedic-oral-traditions": [
    "oral",
    "Listen, remember, recite",
    "A conceptual oral-transmission chain; not an ancient waveform, manuscript or recorded voice.",
  ],
  "later-vedic-societies": [
    "village",
    "Land and community",
    "Conceptual settlement; not an excavated Vedic village or a diagram of caste membership.",
  ],
  "early-upanishads": [
    "oral",
    "Teaching through dialogue",
    "A diagram of transmission and exchange, not portraits of named teachers or a dated philosophical school.",
  ],
  "painted-grey-ware": [
    "pottery",
    "A vessel in its layer",
    "Generic painted bowl and stratigraphic context; not a replica or a dating tool on its own.",
  ],
};
const rakhigarhiImage: PrehistoryGalleryImage = {
  src: "/assets/images/ancient_india/rakhigarhi-localities-shinde-2018.png",
  title: "Rakhigarhi excavation localities",
  category: "Site photograph",
  alt: "Annotated aerial photograph of RGR 7.2 and 7.3 showing excavation trenches, dimensions and north arrow",
  caption:
    "Shinde et al. (2018), Figure 3: excavation localities RGR 7.2 and 7.3. This modern fieldwork image documents archaeological context; it is not a reconstruction of the ancient city. Reproduced without alteration.",
  credit: "© 2018 Shinde et al., PLOS ONE 13(2): e0192299, Figure 3",
  license: "CC BY 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
  sourceUrl: "https://doi.org/10.1371/journal.pone.0192299.g003",
};
export const ancientExhibitPresentations: Readonly<Record<string, TimelineScenePresentation>> =
  Object.fromEntries(
    ancientIndiaEra.periods.flatMap((period) =>
      period.events.map((event) => {
        const [diagram, title, caption] = visuals[event.id]!;
        const textual = diagram === "oral";
        const gallery =
          diagram === "seal"
            ? [indusSealImage]
            : event.id === "rakhigarhi-cemetery"
              ? [rakhigarhiImage]
              : undefined;
        return [
          `exhibit-${event.id}`,
          {
            palette: {
              background: textual ? "#202d3b" : "#382b24",
              backgroundEnd: textual ? "#101923" : "#171410",
              accent: textual ? "#b8cce7" : "#efbb83",
              foreground: "#fff2df",
              muted: "#d1c4b2",
            },
            exhibit: {
              diagram,
              title,
              caption,
              layout:
                event.id === "rakhigarhi-cemetery"
                  ? "photograph"
                  : diagram === "water"
                    ? "settlement"
                    : diagram === "oral"
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
              id: `scene-${event.id}`,
              timelinePointId: event.id,
              duration: gallery ? 2.2 : 1.4,
              transitionIn: { type: "crossfade", portion: 0.36, ease: "sine.inOut" },
              layers: [
                { id: "background", kind: "background", renderer: "gradient" },
                { id: "exhibit", kind: "text", renderer: "prehistory-exhibit" },
              ],
            },
          } satisfies TimelineScenePresentation,
        ];
      }),
    ),
  );
