import type { PrehistoryGalleryImage } from "@/types/prehistory-exhibit";
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

const images: Record<string, PrehistoryGalleryImage> = {
  "dholavira-reservoir.jpg": {
    src: "/assets/images/ancient_india/researched/dholavira-reservoir.jpg",
    title: "Dholavira: water held in stone",
    category: "Site photograph",
    alt: "Excavated stone reservoir with stepped sides at Dholavira",
    caption:
      "A surviving reservoir at Dholavira, photographed 27 May 2017. The city developed over several phases; its whole-site date range does not date this individual structure.",
    credit: "Bhajish Bharathan",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Water_reservoir_at_Dholavira_site.jpg",
  },
  "mohenjo-great-bath.jpg": {
    src: "/assets/images/ancient_india/researched/mohenjo-great-bath.jpg",
    title: "Mohenjo-daro: the Great Bath",
    category: "Site photograph",
    alt: "Brick-lined Great Bath with a later Buddhist stupa in the background",
    caption:
      "The Great Bath in the Harappan city; photograph 15 September 2016. The Buddhist stupa behind it belongs to the second century CE, not the Harappan phase. The photograph alone cannot establish the bath's precise rituals.",
    credit: "Nikesh chawla",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Great_bath_-_Mohenjo-daro.jpg",
  },
  "lothal-basin.jpg": {
    src: "/assets/images/ancient_india/researched/lothal-basin.jpg",
    title: "Lothal: the excavated basin",
    category: "Site photograph",
    alt: "Long brick-lined basin at Lothal, with water remaining in part of it",
    caption:
      "Photographed 29 October 2016. The basin is interpreted as a dock in the UNESCO Tentative List submission; its function and ancient water connections require archaeological argument, not just its present appearance.",
    credit: "Sanjunath S",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lothal_-_dockyard.jpg",
  },
  "mohenjo-weights.jpg": {
    src: "/assets/images/ancient_india/researched/mohenjo-weights.jpg",
    title: "Cubical weights: a museum comparison",
    category: "Artefact",
    alt: "Three cubical stone weights from Mohenjo-daro displayed at the Ashmolean",
    caption:
      "Mohenjo-daro weights, about 2600-1900 BCE, Ashmolean Museum; photographed 23 August 2022. These are different objects from CSMVS accession IV 483 discussed in the account. Perspective is not a scale for comparing their masses.",
    credit: "Zunkir",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cubical_weights_Mohenjodaro_Ashmolean.jpg",
  },
  "mohenjo-beads.jpg": {
    src: "/assets/images/ancient_india/researched/mohenjo-beads.jpg",
    title: "Carnelian and terracotta: finished beads",
    category: "Artefact",
    alt: "Red carnelian and pale terracotta tubular beads displayed together",
    caption:
      "Mohenjo-daro, about 2600-1900 BCE; British Museum 1939,0619.345-346 and 1939,0619.305-308. Photographed 9 March 2020. Finished objects provide a comparison for Harappan craft production; these are not excavated debris from the Harappa workshop.",
    credit: "Zunkir",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Harappan_carnelian_and_terracotta_beads_-_Mohenjo-daro.jpg",
  },
  "cemetery-h-pottery.png": {
    src: "/assets/images/ancient_india/researched/cemetery-h-pottery.png",
    title: "Cemetery H: a later Harappan assemblage",
    category: "Artefact",
    alt: "Two decorated pottery vessels attributed to Cemetery H at Harappa",
    caption:
      "Cemetery H pottery from Harappa, about 1900-1300 BCE, National Museum, New Delhi; photographed 18 November 2017. This later assemblage belongs here in the regional transition, not in the Mature Harappan cemetery at Rakhigarhi.",
    credit: "Avantiputra7",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cemetery_H_Pottery.png",
  },
  "pgw-sonkh.jpg": {
    src: "/assets/images/ancient_india/researched/pgw-sonkh.jpg",
    title: "Painted Grey Ware from Sonkh",
    category: "Artefact",
    alt: "Reassembled grey pottery bowl with dark painted lines in the Mathura museum",
    caption:
      "Sonkh vessel, museum date 1000-600 BCE, Government Museum, Mathura, showcase 6-15; photographed 24 February 2013. Pottery provides material comparison with the later Vedic period, not proof of a language, textual community or epic event.",
    credit: "Biswarup Ganguly",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Painted_Grey_Ware_-_Sonkh_-_1000-600_BCE_-_Showcase_6-15_-_Prehistory_and_Terracotta_Gallery_-_Government_Museum_-_Mathura_2013-02-24_6461.JPG",
  },
  "rigveda-manuscript.jpg": {
    src: "/assets/images/ancient_india/researched/rigveda-manuscript.jpg",
    title: "Rigveda: an early 19th-century copy",
    category: "Artefact",
    alt: "Devanagari manuscript leaf with red marks and corrections",
    caption:
      "Schoyen Collection MS 2097: an early 19th-century CE manuscript on paper. Its accents and corrections document a much later written witness to transmission; this is not a manuscript from the Rigveda's ancient composition period.",
    credit: "Unknown scribe; Schoyen Collection MS 2097",
    license: "Public domain (PD-Art)",
    licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rigveda_MS2097.jpg",
  },
  "crop-sites.gif": {
    src: "/assets/images/ancient_india/researched/crop-sites.gif",
    title: "A regional window on Indus farming",
    category: "Map",
    alt: "Published map of selected archaeobotanical study sites in northwest India",
    caption:
      "Bates et al., Figure 2: selected settlements used in a crop-processing study spanning about 3200-1500 BCE. This is a regional research map, not a map of all Indus cities or ancient political boundaries; the inset uses modern borders.",
    credit: "Bates et al., Vegetation History and Archaeobotany, Figure 2",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    sourceUrl: "https://link.springer.com/article/10.1007/s00334-016-0576-9",
  },
  "crop-processing.gif": {
    src: "/assets/images/ancient_india/researched/crop-processing.gif",
    title: "Reading crop-processing traces",
    category: "Illustration",
    alt: "Scatterplot comparing grain-to-chaff and grain-to-weed ratios across sampled settlements and phases",
    caption:
      "Bates et al., Figure 3: winter-cereal ratios compare processing evidence. MH marks Mature Harappan samples; Early Harappan, Late Harappan and PGW samples are comparisons, not all evidence from 2600-1900 BCE. Published figure retained with its original labels.",
    credit: "Bates et al., Vegetation History and Archaeobotany, Figure 3",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    sourceUrl: "https://link.springer.com/article/10.1007/s00334-016-0576-9",
  },
  "rakhigarhi-pot-counts.png": {
    src: "/assets/images/ancient_india/researched/rakhigarhi-pot-counts.png",
    title: "Burial pottery: a measured comparison",
    category: "Illustration",
    alt: "Box plots and scatterplot comparing numbers of votive pots by age at Rakhigarhi",
    caption:
      "Shinde et al. (2018), Figure 9. The plots compare numbers of votive pots associated with burials, not population totals. The sampled sub-adult graves had fewer pots; the pattern alone does not identify caste or the wealth of every household.",
    credit: "Shinde et al. (2018), PLOS ONE, Figure 9",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    sourceUrl: "https://doi.org/10.1371/journal.pone.0192299.g009",
  },
  "chandogya-manuscript.jpg": {
    src: "/assets/images/ancient_india/researched/chandogya-manuscript.jpg",
    title: "Chandogya Upanishad: an 1865 CE copy",
    category: "Artefact",
    alt: "Sanskrit manuscript leaf in Devanagari with marginal annotations",
    caption:
      "A later written witness: this copy is dated 1865 CE (1922 Vikram Samvat) in the photograph record. Photographed 24 October 2018. It illustrates manuscript transmission, not the date of the ancient work's composition or an identified passage translation.",
    credit: "Ms Sarah Welch",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Chandogya_Upanishad_sample_i%2C_Samaveda%2C_Sanskrit%2C_Devanagari_script%2C_1865_CE_manuscript.jpg",
  },
};
export const ancientGalleries: Readonly<Record<string, readonly PrehistoryGalleryImage[]>> = {
  "dholavira-water-city": [images["dholavira-reservoir.jpg"]!],
  "indus-valley-civilization": [images["crop-sites.gif"]!],
  "rakhigarhi-cemetery": [rakhigarhiImage, images["rakhigarhi-pot-counts.png"]!],
  "mohenjo-daro-urban-life": [images["mohenjo-great-bath.jpg"]!],
  "harappan-craft-workshops": [images["mohenjo-beads.jpg"]!],
  "indus-seals-writing": [indusSealImage],
  "harappan-weights": [images["mohenjo-weights.jpg"]!],
  "indus-food-farming": [images["crop-sites.gif"]!, images["crop-processing.gif"]!],
  "lothal-crafts-exchange": [images["lothal-basin.jpg"]!],
  "late-harappan-regionalisation": [images["cemetery-h-pottery.png"]!],
  "rigvedic-oral-traditions": [images["rigveda-manuscript.jpg"]!],
  "painted-grey-ware": [images["pgw-sonkh.jpg"]!],
  "later-vedic-societies": [images["pgw-sonkh.jpg"]!],
  "early-upanishads": [images["chandogya-manuscript.jpg"]!],
};
