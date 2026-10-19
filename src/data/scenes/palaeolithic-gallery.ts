import type { PrehistoryGalleryImage } from "@/types/prehistory-exhibit";

const base = "/assets/images/prehistoric_india";
const lower = `${base}/lower_palaeolithic_india`;
const middle = `${base}/middle_palaeolithic_india`;

/** Supplied images. Add verified sourceUrl, credit and license when available. */
export const lowerPalaeolithicGallery: readonly PrehistoryGalleryImage[] = [
  {
    src: `${lower}/indiamapblack.png`,
    title: "Locating the story",
    category: "Map",
    alt: "Dark stylised outline map supplied for the Lower Palaeolithic chapter",
    caption:
      "Geographic orientation only. This stylised map does not show prehistoric borders, dated sites or migration routes.",
  },
  {
    src: `${lower}/handaxe_from_attirampakkam.png`,
    title: "Examining a handaxe",
    category: "Artefact",
    alt: "Pointed stone handaxe with a painted specimen label",
    caption:
      "Supplied as an Attirampakkam handaxe. Its collection record and original caption are still needed to confirm identification; the chapter date is not a verified date for this individual object.",
  },
  {
    src: `${lower}/auchelian_tool.png`,
    title: "Comparing stone-tool forms",
    category: "Artefact",
    alt: "Eight stone artefacts arranged in two rows",
    caption:
      "Supplied as an Acheulian tool assemblage. Findspots, specimen identifications and dates await the original catalogue caption; the objects are not shown at a confirmed common scale.",
  },
  {
    src: `${lower}/oldscene.png`,
    title: "Imagining a distant landscape",
    category: "Illustration",
    alt: "Artistic landscape with mountains, water, animals and an ape-like figure",
    caption:
      "Atmospheric artwork, not an evidence-based reconstruction of Attirampakkam. The figure, animals and scenery do not establish the identity of the toolmakers or their environment.",
  },
];

export const middlePalaeolithicGallery: readonly PrehistoryGalleryImage[] = [
  {
    src: `${middle}/attirampakkam_site.png`,
    title: "At the excavation",
    category: "Site photograph",
    alt: "Excavation trenches with gridded surfaces, labelled layers and people working",
    caption:
      "Supplied as an Attirampakkam excavation view. The original photographer, year and trench identification are pending; visible layers are not assigned dates from this image alone.",
  },
  {
    src: `${middle}/attirampakkam_artifacts.png`,
    title: "Reading the artefact record",
    category: "Artefact",
    alt: "Plate of stone artefacts labelled a to s, with specimen markings and a scale bar",
    caption:
      "Supplied as an Attirampakkam artefact plate. Open the full image to inspect labels and the scale. The original figure caption is needed to connect individual specimens to tool types and layers.",
  },
  {
    src: `${middle}/levallois_core.png`,
    title: "Preparing a core",
    category: "Teaching example",
    alt: "Multiple views of a stone core with numbered arrows on flake scars",
    caption:
      "Supplied as a Levallois core example. The original caption must explain arrows 1–6. Its findspot is unverified, so it is not presented as an Attirampakkam specimen.",
  },
  {
    src: `${middle}/levallois_flake.png`,
    title: "Looking at a detached flake",
    category: "Teaching example",
    alt: "Multiple views of a stone flake with a specimen marking and a two-centimetre scale bar",
    caption:
      "Supplied as a Levallois flake example; findspot and identification await the original source. It is not demonstrated to have been detached from the core shown in the preceding image.",
  },
  {
    src: `${middle}/middle_palaeolithic_side_scrapers.jpg`,
    title: "Tools on display",
    category: "Artefact",
    alt: "Two stone objects in a museum display with a label reading Side-Scrapper, Middle Palaeolithic Culture",
    caption:
      "The display label identifies side scrapers of Middle Palaeolithic culture. The museum, findspots and photographer are not yet documented; these are not assigned to the dated Attirampakkam sequence.",
  },
  {
    src: `${middle}/palaeolithic_sites_map.png`,
    title: "A wider regional view",
    category: "Map",
    alt: "Relief map titled Palaeolithic Sites with labelled locations across the subcontinent",
    caption:
      "General reference map spanning different archaeological contexts, not a Middle Palaeolithic distribution map. Site positions and labels await verification; markers do not imply a shared date or migration route.",
  },
];
