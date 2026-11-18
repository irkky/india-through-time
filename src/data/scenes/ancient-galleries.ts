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
  "dholavira-water-city": [
    images["dholavira-reservoir.jpg"]!,
    {
      src: "/assets/images/ancient_india/researched/dholavira-city-layout.svg",
      title: "Dholavira — Layout of the Harappan City",
      alt: "Schematic layout showing Dholavira's castle, bailey, middle town, lower town and surrounding urban features.",
      caption:
        "Modern schematic plan of Dholavira, showing the principal urban divisions. This helps explain the city's spatial organization but does not date every feature or reproduce a complete phase-by-phase excavation plan.",
      category: "Map",
      credit: "Yodaspirine, based on Nizil Shah / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Dholavira-layout-en.svg",
      license: "CC BY-SA 4.0",
      licenseUrl:
        "https://creativecommons.org/licenses/by-sa/4.0/",
    },
    {
      src: "/assets/images/ancient_india/researched/dholavira-water-system.jpg",
      title: "Dholavira — Water Storage and Channels",
      alt: "Archaeological photograph of surviving water-storage structures and channels at Dholavira.",
      caption:
        "Surviving components of the water-management system at Dholavira, photographed on 27 May 2017. The photograph documents exposed remains rather than the complete ancient hydraulic network.",
      category: "Site photograph",
      credit: "Bhajish Bharathan / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:System_of_reservoirs_and_canals_found_at_Dholavira.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl:
        "https://creativecommons.org/licenses/by-sa/4.0/",
    },
  ],  
  "indus-valley-civilization": [
    {
      src: "/assets/images/ancient_india/researched/indus-major-sites-map.png",
      title: "Indus Civilisation — Major Settlements",
      alt: "Map showing selected Harappan settlements including Harappa, Mohenjo-daro, Dholavira and Lothal across northwestern South Asia.",
      caption:
        "Modern map showing selected major settlements of the Indus civilisation. The map provides geographical context rather than a complete inventory of sites or the boundaries of a single ancient state. Present-day political borders are modern reference information.",
      category: "Map",
      credit: "Merikanto / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Simple_map_of_Indus_valley_civilization.png",
      license: "CC BY 4.0",
      licenseUrl:
        "https://creativecommons.org/licenses/by/4.0/",
    },
    {
      src: "/assets/images/ancient_india/researched/indus-mature-phase-topography.svg",
      title: "Mature Harappan Settlements and Landscape",
      alt: "Topographic map locating mature Indus civilisation sites in relation to rivers and surrounding terrain.",
      caption:
        "Topographic distribution map of sites associated with the Mature Harappan phase, approximately 2600–1900 BCE. The positions of archaeological sites help explain regional connections, but do not establish exact routes of movement or a unified political boundary.",
      category: "Map",
      credit: "Merikanto / Wikimedia Commons (2018)",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Indus_sites_mature_phase_topo_map.svg",
      license: "CC BY-SA 4.0",
      licenseUrl:
        "https://creativecommons.org/licenses/by-sa/4.0/",
    },
    {
      src: "/assets/images/ancient_india/researched/harappa-archaeological-mounds.jpg",
      title: "Harappa — Archaeological Mounds and Ruins",
      alt: "Modern photograph showing excavated brick remains, archaeological mounds and exposed structures at Harappa, Pakistan.",
      caption:
        "Archaeological remains at Harappa in Punjab, Pakistan, photographed on 3 February 2013. Harappa developed into a major urban centre during the Mature Harappan period. The photograph documents the surviving site and does not independently date every visible structure.",
      category: "Site photograph",
      credit: "Amir Islam / Wikimedia Commons (2013)",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Mounds_at_Harappa.JPG",
      license: "CC BY-SA 4.0",
      licenseUrl:
        "https://creativecommons.org/licenses/by-sa/4.0/",
    },
  ],  
  "rakhigarhi-cemetery": [
    rakhigarhiImage,
    {
      src: "/assets/images/ancient_india/researched/rakhigarhi-cemetery-plan.png",
      title: "Rakhigarhi — Cemetery Excavation Map",
      alt: "Archaeological map of the excavated cemetery, showing the spatial arrangement of graves at Rakhigarhi.",
      caption:
        "Map of the Rakhigarhi cemetery excavation, showing the distribution and organisation of investigated graves. Shinde et al. (2018), Figure 7. This records archaeological fieldwork rather than the full original extent of the cemetery.",
      category: "Map",
      credit: "Shinde et al. (2018), PLOS ONE, Figure 7",
      sourceUrl:
        "https://doi.org/10.1371/journal.pone.0192299.g007",
      license: "CC BY 4.0",
      licenseUrl:
        "https://creativecommons.org/licenses/by/4.0/",
    },
    {
      src: "/assets/images/ancient_india/researched/rakhigarhi-burial-types.png",
      title: "Rakhigarhi — Different Burial Practices",
      alt: "Two excavation photographs showing a primary burial in a plain grave and another with brick-lined grave architecture.",
      caption:
        "Two primary burials at Rakhigarhi: a typical burial (A2/BR 36) and an atypical brick-lined burial (A2/BR 22). Shinde et al. (2018), Figure 5. The differences illustrate variation in funerary practices, without independently establishing the individuals' social status.",
      category: "Site photograph",
      credit: "Shinde et al. (2018), PLOS ONE, Figure 5",
      sourceUrl:
        "https://doi.org/10.1371/journal.pone.0192299.g005",
      license: "CC BY 4.0",
      licenseUrl:
        "https://creativecommons.org/licenses/by/4.0/",
    },
    {
      src: "/assets/images/ancient_india/researched/rakhigarhi-symbolic-grave.png",
      title: "Rakhigarhi — Symbolic Grave",
      alt: "Excavated grave BR16 containing pottery vessels and small animal bones, with an archaeological measurement scale.",
      caption:
        "Symbolic grave BR16 at Rakhigarhi, containing pottery and small mammal bones without identified human remains. Shinde et al. (2018), Figure 6. The researchers classified this as a symbolic burial based on its archaeological context.",
      category: "Site photograph",
      credit: "Shinde et al. (2018), PLOS ONE, Figure 6",
      sourceUrl:
        "https://doi.org/10.1371/journal.pone.0192299.g006",
      license: "CC BY 4.0",
      licenseUrl:
        "https://creativecommons.org/licenses/by/4.0/",
    },
    images["rakhigarhi-pot-counts.png"]!,
  ],  
  "mohenjo-daro-urban-life": [
    {
      src: "/assets/images/ancient_india/researched/mohenjo-street.jpg",
      title: "Mohenjo-daro — An Ancient City Street",
      alt: "Excavated street lined with surviving brick walls near the stupa mound at Mohenjo-daro.",
      caption:
        "An excavated street near the stupa mound at Mohenjo-daro, photographed on 8 March 2014. The exposed brickwork illustrates the surviving urban layout. The later Buddhist stupa belongs to a different historical period.",
      category: "Site photograph",
      credit: "Saqib Qayyum / Wikimedia Commons (2014)",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Street_-_Mohenjodaro.JPG",
      license: "CC BY-SA 3.0",
      licenseUrl:
        "https://creativecommons.org/licenses/by-sa/3.0/",
    },
    {
      src: "/assets/images/ancient_india/researched/mohenjo-brick-well.jpg",
      title: "Mohenjo-daro — Brick-Lined Well",
      alt: "Modern photograph of a surviving brick-lined well at the archaeological site of Mohenjo-daro.",
      caption:
        "A surviving well at Mohenjo-daro, photographed on 23 January 2010. Brick-lined wells formed an important part of the city's water infrastructure. The photograph illustrates the structure without establishing its precise construction date.",
      category: "Site photograph",
      credit: "Najamuddin Shahwani / Wikimedia Commons (2010)",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Monejodaro_well_-_panoramio.jpg",
      license: "CC BY 3.0",
      licenseUrl:
        "https://creativecommons.org/licenses/by/3.0/",
    },
    {
      src: "/assets/images/ancient_india/researched/mohenjo-bath-channel.jpg",
      title: "Mohenjo-daro — Channel Near the Great Bath",
      alt: "Photograph of a surviving channel-like masonry feature in the Great Bath area at Mohenjo-daro.",
      caption:
        "A masonry channel-like feature associated with the Great Bath area, photographed on 16 November 2013. The Wikimedia source identifies it as a water canal. This photograph should not be treated as independent proof of a household sewer or a specific direction of water flow.",
      category: "Site photograph",
      credit: "Quratulain / Wikimedia Commons (2013)",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Water_canal_for_the_great_bath_-_Mohenjo-daro.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl:
        "https://creativecommons.org/licenses/by-sa/3.0/",
    },
    images["mohenjo-great-bath.jpg"]!,
  ],  
  "harappan-craft-workshops": [
    {
      src: "/assets/images/ancient_india/researched/harappa-unfinished-steatite-beads.jpg",
      title: "Harappa — Unfinished Steatite Beads",
      alt: "Archaeological photograph of numerous unfinished steatite bead pieces found on an ashy workshop floor at Harappa.",
      caption:
        "Unfinished steatite bead pieces recovered from an ashy floor in Trench 54 at Harappa. Some specimens were already perforated. This archaeological evidence helps reconstruct different stages of bead production during the Indus civilisation.",
      category: "Artefact",
      credit: "Harappa Archaeological Research Project",
      sourceUrl:
        "https://www.harappa.com/indus3/222.html",
    },
    {
      src: "/assets/images/ancient_india/researched/harappa-bead-drilling-techniques.png",
      title: "Harappan Bead-Drilling Techniques",
      alt: "Archaeological research illustration comparing techniques used to perforate stone beads in the Indus civilisation.",
      caption:
        "Research illustration explaining bead-perforation techniques. Different drilling methods and tools helped craftspeople produce holes through hard stone materials. This is an explanatory research diagram, not a photograph of an excavated workshop.",
      category: "Illustration",
      credit: "J. Mark Kenoyer / Harappa.com",
      sourceUrl:
        "https://www.harappa.com/content/trade-and-technology-indus-valley",
    },
    images["mohenjo-beads.jpg"]!,
    {
      src: "/assets/images/ancient_india/researched/dholavira-harappan-beads.jpg",
      title: "Harappan Beads — Dholavira",
      alt: "Photograph of beads identified as originating from a Harappan archaeological site and associated with Dholavira.",
      caption:
        "Beads photographed in 2017 and catalogued on Wikimedia Commons in association with Dholavira. The photograph illustrates bead forms within the wider Harappan tradition, although the individual excavation contexts and manufacturing stages are not documented.",
      category: "Artefact",
      credit: "Ranjith Kumar Inbasekaran / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Beads_found_from_harappan_site.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl:
        "https://creativecommons.org/licenses/by-sa/4.0/",
    },
    {
      src: "/assets/images/ancient_india/researched/chanhu-daro-decorated-beads.jpg",
      title: "Chanhu-daro — Decorated Harappan Beads",
      alt: "Museum photograph showing four decorated beads associated with Chanhu-daro, including different stone materials.",
      caption:
        "Decorated beads associated with Chanhu-daro, an important Harappan craft-producing settlement. The objects illustrate specialised material selection, surface decoration and finishing techniques. These are finished artefacts rather than workshop debris.",
      category: "Artefact",
      credit: "Museum of Fine Arts, Boston / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Chanhu-Daro_beads.jpg",
      license: "Public Domain Mark 1.0",
      licenseUrl:
        "https://creativecommons.org/publicdomain/mark/1.0/",
    },
  ],  
  "indus-seals-writing": [
    indusSealImage,
    {
      src: "/assets/images/ancient_india/researched/dholavira-north-gate-signboard.svg",
      title: "Dholavira — Ten Signs at the North Gate",
      alt: "Vector illustration showing ten large Indus script signs associated with the northern gate of Dholavira.",
      caption:
        "Modern vector tracing of the ten signs reported from the northern gate of Dholavira. The signboard dates to approximately 2500–1900 BCE, and individual signs were reportedly up to 37 centimetres high. This illustration records the shapes and arrangement of the signs; it does not provide a deciphered reading.",
      category: "Illustration",
      credit: "Swastik Harish / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Banner_at_the_North_Gate_of_Dholavira.svg",
      license: "CC BY-SA 4.0",
      licenseUrl:
        "https://creativecommons.org/licenses/by-sa/4.0/",
    },
    {
      src: "/assets/images/ancient_india/researched/susa-indus-seal-impression.jpg",
      title: "Susa — Indus Seal Impression and Sign Sequence",
      alt: "Annotated image of a cylinder-seal impression associated with Susa excavations, showing an elongated buffalo and Indus signs, with modern sign identifiers above.",
      caption:
        "Annotated image derived from an Indus-related cylinder-seal impression associated with the Susa excavations and identified with Louvre object Sb 2425. The image illustrates the presence of Indus signs in a wider archaeological context. The sign identifiers above the impression are modern catalogue labels, not a deciphered translation.",
      category: "Artefact",
      credit: "ALFGRN; sign transcription by Pataliputra / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Susa_seal_with_Indus_signs.jpg",
      license: "CC BY-SA 2.0",
      licenseUrl:
        "https://creativecommons.org/licenses/by-sa/2.0/",
    },
  ],
  "harappan-weights": [
    images["mohenjo-weights.jpg"]!,
    {
      src: "/assets/images/ancient_india/researched/harappan-balance-weights-national-museum.jpg",
      title: "Harappan balance and weights",
      category: "Artefact",
      alt: "Museum photograph showing an ancient balance and a collection of Harappan stone weights.",
      caption:
        "A balance and weights associated with the Indus Valley civilisation, photographed at the National Museum, New Delhi. The objects illustrate the material evidence for weighing and measurement in Harappan society.",
      credit: "Gary Todd / Wikimedia Commons",
      license: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Harappan_(Indus_Valley)_Balance_%26_Weights.jpg",
    },
    {
      src: "/assets/images/ancient_india/researched/harappan-cubical-weights-british-museum.jpg",
      title: "Cubical weights from the Harappan world",
      category: "Artefact",
      alt: "A group of cubical stone weights of different sizes from the Harappan civilisation.",
      caption:
        "Cubical weights associated with Mohenjo-daro, now in the British Museum collection. Their different sizes illustrate the variety of weight denominations used in the Harappan system. The photograph is not a calibrated comparison of their masses.",
      credit: "Zunkir / Wikimedia Commons",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Poids_cubiques_harapp%C3%A9ens_-_BM.jpg",
    },
  ],
  "indus-food-farming": [
    images["crop-sites.gif"]!,
    images["crop-processing.gif"]!,
    {
      src: "/assets/images/ancient_india/researched/indus-regional-cropping-strategies-map.jpg",
      title: "Different cropping strategies across the Indus region",
      category: "Map",
      alt: "Research map showing proposed regional differences in cropping strategies across the Indus region.",
      caption:
        "Petrie and Bates (2017), Figure 6. The map presents a research interpretation of regional cropping strategies based on archaeobotanical evidence. It is not a map of ancient political boundaries, and the proposed zones should not be treated as rigid divisions.",
      credit: "C. A. Petrie and J. Bates (2017)",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
      sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6991972/",
    },
    {
      src: "/assets/images/ancient_india/researched/balu-mature-harappan-seed-remains.jpg",
      title: "Ancient crop remains from Balu",
      category: "Artefact",
      alt: "Published archaeological plate showing plant remains identified from excavations at Balu, Haryana.",
      caption:
        "Archaeological Survey of India, Indian Archaeology 1996–97: A Review, Plate LV, printed page 200. The published plate documents plant remains identified at Balu, including cereals and pulses. These finds provide evidence for crop diversity; they do not establish that every crop was cultivated at every Harappan settlement.",
      credit: "Archaeological Survey of India, Indian Archaeology 1996–97: A Review, Plate LV",
      license: "Reuse permission required; licence not verified",
      sourceUrl:
        "https://nmma.nic.in/nmma/NAS1/nmma_doc/IAR/Indian%20Archaeology%201996_97%20A%20Review.pdf",
    },
  ],
  "lothal-crafts-exchange": [images["lothal-basin.jpg"]!],
  "late-harappan-regionalisation": [images["cemetery-h-pottery.png"]!],
  "rigvedic-oral-traditions": [images["rigveda-manuscript.jpg"]!],
  "painted-grey-ware": [images["pgw-sonkh.jpg"]!],
  "later-vedic-societies": [images["pgw-sonkh.jpg"]!],
  "early-upanishads": [images["chandogya-manuscript.jpg"]!],
};
