import type { PrehistoryGalleryImage } from "@/types/prehistory-exhibit";

const root = "/assets/images/prehistoric_india/researched/";
const by = "https://creativecommons.org/licenses/by/4.0/";
const publications = {
  singi: [
    "Blinkhorn et al. (2021), Scientific Reports",
    "https://www.nature.com/articles/s41598-021-98897-7",
    "CC BY 4.0",
    by,
  ],
  dhaba: [
    "Clarkson et al. (2020), Nature Communications",
    "https://www.nature.com/articles/s41467-020-14668-4",
    "CC BY 4.0",
    by,
  ],
  mehtakheri: [
    "Mishra, Chauhan & Singhvi (2013), PLOS ONE",
    "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0069280",
    "Creative Commons Attribution (article licence)",
    "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0069280#copyright",
  ],
  rice: [
    "Jennifer Bates (2022), Frontiers in Ecology and Evolution",
    "https://www.frontiersin.org/journals/ecology-and-evolution/articles/10.3389/fevo.2022.924977/full",
    "CC BY 4.0",
    by,
  ],
  mehrgarh: [
    "Mutin et al. (2025), Scientific Reports",
    "https://www.nature.com/articles/s41598-025-92621-5",
    "CC BY-NC-ND 4.0 · unmodified figure; noncommercial use",
    "https://creativecommons.org/licenses/by-nc-nd/4.0/",
  ],
  balathal: [
    "Robbins et al. (2009), PLOS ONE",
    "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0005669",
    "Creative Commons Attribution (article licence)",
    "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0005669#copyright",
  ],
  brahmagiri: [
    "Hill et al. (2026), American Antiquity",
    "https://doi.org/10.1017/aaq.2026.10194",
    "CC BY-NC-SA 4.0 · noncommercial use",
    "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  ],
  bhimbetka: [
    "Yayawar monk, photographed 9 October 2022 / Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Rock_paintings_at_bhimbetka_rock_shelter.jpg",
    "CC BY-SA 4.0",
    "https://creativecommons.org/licenses/by-sa/4.0/",
  ],
  bhimbetkaShelter: [
    "Bernard Gagnon, photographed 4 December 2013 / Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Rock_Shelter_8,_Bhimbetka_01.jpg",
    "CC BY-SA 3.0",
    "https://creativecommons.org/licenses/by-sa/3.0/",
  ],
  burzahomVessel: [
    "Ismoon, photographed 18 January 2012 at the National Museum, New Delhi / Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Horned_figure_on_pottery._Pr%C3%A9-Indus_civilization._Kashmir.jpg",
    "CC0 1.0",
    "https://creativecommons.org/publicdomain/zero/1.0/",
  ],
} as const;

function plate(
  file: string,
  publication: keyof typeof publications,
  title: string,
  alt: string,
  caption: string,
  category: PrehistoryGalleryImage["category"] = "Illustration",
): PrehistoryGalleryImage {
  const [credit, sourceUrl, license, licenseUrl] = publications[publication];
  return {
    src: root + file,
    title,
    alt,
    caption,
    category,
    credit,
    sourceUrl,
    license,
    licenseUrl,
  };
}

const singiTools = plate(
  "singi-figure-3.jpg",
  "singi",
  "Singi Talav · tools in context",
  "Five labelled groups of stone artefacts with a five-centimetre scale.",
  "Published Figure 3. Panel c is from Layer 4; a and b belong to other layers. Panels d and e came from an eroding quarry edge, so the entire plate must not be assigned the scene's approximately 177,000-year date.",
  "Artefact",
);
const singiSection = plate(
  "singi-figure-2.png",
  "singi",
  "Singi Talav · excavated sequence",
  "Excavation sections SGT6 and SGT7 beside age estimates and environmental measurements.",
  "Published Figure 2 preserves the separate layers, age estimates and environmental proxies. Open the full image to read the labels; the timeline highlights one part of this longer sequence.",
);
const dhabaSection = plate(
  "dhaba-figure-3.png",
  "dhaba",
  "Dhaba · layers and dated samples",
  "Four labelled sediment profiles with luminescence ages and sample locations.",
  "Published Figure 3. Ages refer to sampled sediments and include uncertainties. Cryptotephra at Dhaba 1 lies between samples dated approximately 78,000 and 71,000 years ago.",
);
const dhabaTools = plate(
  "dhaba-figure-4.png",
  "dhaba",
  "Dhaba · a changing toolkit",
  "Labelled Levallois flakes, cores, ochre and microlithic artefacts with scale bars.",
  "Published Figure 4 combines finds across roughly 80,000–25,000 years. Microblade cores h–i, blades n–o and backed pieces t–u come from Dhaba 3. This is a comparative plate, not a single dated assemblage.",
  "Artefact",
);
const riceMap = (site: string, number: number) =>
  plate(
    "rice-sites.webp",
    "rice",
    `${site} · regional plant-evidence map`,
    `Regional archaeological map; ${site} is numbered ${number}.`,
    `Bates (2022), Figure 1: ${site} is site ${number}. The map collects sites discussed in the review; it does not show a single contemporary farming network or prove domestication at every location.`,
    "Map",
  );

/** Full published figures, not reconstructions. Shared plates keep their complete date scope. */
export const prehistoryGalleries: Readonly<Record<string, readonly PrehistoryGalleryImage[]>> = {
  "singi-talav-acheulian": [singiTools, singiSection],
  "dhaba-toba-sequence": [
    {
      src: "/assets/images/prehistoric_india/researched/dhaba-excavation-site.jpg",
      title: "Dhaba — Archaeological Excavation",
      alt: "Archaeologists working at an excavation site in the Middle Son Valley, Madhya Pradesh.",
      caption:
        "Modern archaeological fieldwork at Dhaba, Madhya Pradesh. The excavations document stone-tool evidence associated with the region's long Middle Palaeolithic sequence.",
      category: "Site photograph",
      credit: "Christina M. Neudorf",
      sourceUrl: "https://www.nature.com/articles/nindia.2020.37",
    },
    dhabaSection,
    dhabaTools,
  ],
  "dhaba-microliths": [dhabaTools, dhabaSection],
  "mehtakheri-microblades": [
    plate(
      "mehtakheri-figure-10.png",
      "mehtakheri",
      "Mehtakheri · microblade technology",
      "Drawings of cores and slender blades, specimen labels and a five-centimetre scale.",
      "Published Figure 10. The plate includes excavated specimen J4 and surface-collected XX4. These collection contexts differ; the approximately 45,000-year sediment estimate is not a direct date for every illustrated object.",
      "Artefact",
    ),
    plate(
      "mehtakheri-figure-11.png",
      "mehtakheri",
      "Mehtakheri · microblade cores and tools",
      "Labelled archaeological stone tools including microblade cores, flakes, hammerstones and a trimmed nodule.",
      "Published Figure 11 from Mishra, Chauhan and Singhvi (2013). Shows microblade cores D3, F1, M25, J15 and M23, alongside other artefacts from the Mehtakheri assemblage.",
      "Artefact",
    ),
    plate(
      "mehtakheri-figure-4.png",
      "mehtakheri",
      "Mehtakheri · the 2009 excavation",
      "Tall excavation section with numbered sediment layers and a field scale.",
      "Published Figure 4 records the 2009 excavation. Layers 18–26 form the artefact-bearing Unit 2; its upper contact is erosional. The photograph's capture year is distinct from the archaeological age.",
      "Site photograph",
    ),
  ],
  "jwalapuram-toba": [
    {
      src: "/assets/images/prehistoric_india/researched/jwalapuram-excavation.jpg",
      title: "Jwalapuram — Archaeological Excavation",
      alt: "Archaeological excavation trenches at Jwalapuram Locality 3.",
      caption:
        "Excavation at Jwalapuram in Andhra Pradesh, where stone tools were studied in relation to the Toba volcanic deposits.",
      category: "Site photograph",
      credit: "Photographer to be verified",
      sourceUrl:
        "https://www.researchgate.net/publication/222319081_The_74_ka_Toba_super-eruption_and_southern_Indian_hominins_Archaeology_lithic_technology_and_environments_at_Jwalapuram_Locality_3",
    },
    {
      src: "/assets/images/prehistoric_india/researched/jwalapuram-ash-stratigraphy.jpg",
      title: "Jurreru Valley — comparative stratigraphic sequences",
      alt: "Comparative diagram of Jurreru River Valley stratigraphic columns, including Jwalapuram localities and Youngest Toba Tuff markers.",
      caption:
        "A regional comparison of Jurreru Valley sequences. JWP 3 distinguishes primary and redeposited ash beside Middle Palaeolithic deposits; other columns have different dates and contexts, so this is not one continuous excavation section.",
      category: "Illustration",
      credit: "Publication and figure credit to be verified",
      sourceUrl: "https://ora.ox.ac.uk/objects/uuid:6b843834-ed3d-4e72-8a1c-da3e82342233",
    },
    {
      src: "/assets/images/prehistoric_india/researched/jwalapuram-stone-tools.jpg",
      title: "Jwalapuram — excavation trench and layers",
      alt: "Deep archaeological excavation trench at Jwalapuram with sediment units C, D, E and F labelled on the section wall.",
      caption:
        "A Jwalapuram excavation trench with sediment units labelled C–F. It supplies field context but is not a stone-tool plate and should not be read as assigning one age to every visible deposit.",
      category: "Site photograph",
      credit: "Publication and figure credit to be verified",
      sourceUrl:
        "https://www.researchgate.net/publication/222319081_The_74_ka_Toba_super-eruption_and_southern_Indian_hominins_Archaeology_lithic_technology_and_environments_at_Jwalapuram_Locality_3",
    },
  ],
  "jwalapuram-rockshelter": [
    {
      src: "/assets/images/prehistoric_india/researched/jwalapuram-9-rockshelter.jpg",
      title: "Jwalapuram Locality 9 — Rockshelter",
      alt: "Archaeological rockshelter and excavation area at Jwalapuram Locality 9.",
      caption:
        "Modern view of Jwalapuram Locality 9, a rockshelter with archaeological evidence extending back approximately 35,000 years.",
      category: "Site photograph",
      credit: "Clarkson et al. (2009); photographer to verify",
      sourceUrl: "https://doi.org/10.1017/S0003598X0009846X",
    },
    {
      src: "/assets/images/prehistoric_india/researched/jwalapuram-9-stratigraphy.jpg",
      title: "Jwalapuram Locality 9 — Stratigraphy",
      alt: "Archaeological cross-section showing excavated sediment layers.",
      caption:
        "Published excavation section showing distinct archaeological deposits at Locality 9. Layer dates and artefact associations must be interpreted separately.",
      category: "Illustration",
      credit: "Clarkson et al. (2009)",
      sourceUrl: "https://doi.org/10.1017/S0003598X0009846X",
    },
    {
      src: "/assets/images/prehistoric_india/researched/jwalapuram-9-microliths.jpg",
      title: "Jwalapuram Locality 9 — Microliths",
      alt: "Scientific illustration of microlithic cores and stone artefacts.",
      caption:
        "Microlithic cores and stone tools from Jwalapuram Locality 9, published by Petraglia and colleagues in 2009.",
      category: "Artefact",
      credit: "Petraglia et al. (2009)",
      sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2718386/",
    },
  ],
  "lahuradewa-rice-use": [
    riceMap("Lahuradewa", 15),
    {
      src: "/assets/images/prehistoric_india/researched/lahuradewa-rice-remains.jpg",
      title: "Lahuradewa — Archaeological Rice Remains",
      alt: "Photographic plate of excavated rice grains, glumes, and husk fragments with millimetre scales.",
      caption:
        "Figure 9 from Early Farming at Lahuradewa shows the Period IB crop assemblage: wheat, barley, lentil, Job's tear, millets and other plant remains. It is retained as comparative archaeobotanical evidence and is not a rice-only plate.",
      category: "Artefact",
      credit: "Tewari et al., after K. S. Saraswat",
      sourceUrl: "https://www.researchgate.net/publication/284499845_Early_farming_at_Lahuradewa",
    },
    {
      src: "/assets/images/prehistoric_india/researched/lahuradewa-carbonised-rice.jpg",
      title: "Lahuradewa — Carbonised Rice Evidence",
      alt: "Archaeological plate showing carbonised rice grains, husks and associated plant fragments.",
      caption:
        "Figure 6 from Early Farming at Lahuradewa shows Period IA botanical remains, including rice grains and rice husk-surface tissue with millimetre scales. The publication's domestication interpretation should be read alongside later archaeobotanical debate.",
      category: "Artefact",
      credit: "Tewari et al., after K. S. Saraswat",
      sourceUrl: "https://www.researchgate.net/publication/284499845_Early_farming_at_Lahuradewa",
    },
  ],
  "bagor-mesolithic": [
    {
      src: "/assets/images/prehistoric_india/researched/bagor-microliths.jpg",
      title: "Bagor — Mesolithic Stone Tools",
      alt: "Archaeological plate showing rows of small stone tools excavated at Bagor with scale bars.",
      caption:
        "Microliths from archaeological excavations at Bagor, Rajasthan, published in Indian Archaeology 1968–69 — A Review, Plate XXIX. These finds illustrate the site's microlithic tradition.",
      category: "Artefact",
      credit: "Archaeological Survey of India, Indian Archaeology 1968–69 — A Review, Plate XXIX",
      sourceUrl: "https://indike.org/pramana/inp.archaeology.iar.1968-69.c4.s13.t2",
    },
    {
      src: "/assets/images/prehistoric_india/researched/bagor-catalogued-microlith.jpg",
      title: "Bagor — Catalogued Microlith",
      alt: "Catalogued archaeological microlith from Bagor, Rajasthan.",
      caption:
        "A microlith catalogued by the National Mission on Monuments and Antiquities as UM-DCP-MH-449824, with recorded provenance from Bagor, Trench E-III. The catalogue reference alone does not establish a precise phase date.",
      category: "Artefact",
      credit: "National Mission on Monuments and Antiquities",
      sourceUrl: "https://nmma.nic.in/nmma/exploreMaterial.do?mat=94&pager.offset=33900",
    },
  ],
  "chopani-mando-late-phase": [riceMap("Chopani Mando", 4)],
  "harappa-ravi-phase": [
    {
      src: "/assets/images/prehistoric_india/researched/harappa-ravi-pottery.jpg",
      title: "Harappa — Ravi Phase Pottery",
      alt: "Hand-built Ravi-phase pottery fragments with painted bands, lines and decorative motifs.",
      caption:
        "Painted pottery fragments from the early Ravi phase at Harappa, approximately 3300–2800 BCE. The pottery illustrates ceramic traditions before the city's mature urban period.",
      category: "Artefact",
      credit: "Harappa Archaeological Research Project",
      sourceUrl: "https://www.harappa.com/slide/ravi-phase-pottery-fragments",
    },
    {
      src: "/assets/images/prehistoric_india/researched/harappa-ravi-storage-pits.jpg",
      title: "Harappa — Ravi Phase Storage Pits",
      alt: "Excavated bell-shaped clay-plastered pits at Harappa with archaeological measurement scales.",
      caption:
        "Excavated storage pits associated with Ravi-phase occupation at Harappa. These features provide evidence of everyday activities in the settlement.",
      category: "Site photograph",
      credit: "Harappa Archaeological Research Project",
      sourceUrl: "https://www.harappa.com/indus2/98.html",
    },
    {
      src: "/assets/images/prehistoric_india/researched/harappa-ravi-terracotta-beads.jpg",
      title: "Harappa — Ravi Phase Terracotta Beads",
      alt: "Assorted terracotta beads of different shapes arranged beside a measurement scale.",
      caption:
        "Terracotta beads recovered from Ravi-phase contexts at Harappa, illustrating early ornament production and craft activities.",
      category: "Artefact",
      credit: "Harappa Archaeological Research Project",
      sourceUrl: "https://www.harappa.com/slide/terra-cotta-beads",
    },
  ],
  "mahagara-neolithic": [riceMap("Mahagara", 17)],
  "mehrgarh-aceramic-cemetery": [
    {
      src: "/assets/images/prehistoric_india/researched/mehrgarh-period-1-houses.jpg",
      title: "Mehrgarh — Neolithic Period I Houses",
      alt: "Excavated remains of mud-brick houses from Mehrgarh Period I in Balochistan, Pakistan.",
      caption:
        "Archaeological remains of Neolithic Period I houses at Mehrgarh, photographed by Catherine Jarrige. The image illustrates early settlement architecture. The revised 2025 chronology is based on dated cemetery evidence and does not individually date every wall shown.",
      category: "Site photograph",
      credit: "Catherine Jarrige / Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Mehrgarh_p%C3%A9r._I.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
    plate(
      "mehrgarh-figure-4.png",
      "mehrgarh",
      "Mehrgarh · sampled burial locations",
      "Area plan and enlarged cemetery grid with sampled burials highlighted and listed.",
      "Unmodified Figure 4 from the 2025 study. The plan identifies sampled graves within the excavated cemetery; it is not a reconstruction of the entire settlement.",
      "Map",
    ),
    plate(
      "mehrgarh-figure-2.png",
      "mehrgarh",
      "Mehrgarh · a modelled chronology",
      "Bayesian chronological model with nine cemetery phases, probability distributions and a BC axis.",
      "Unmodified Figure 2, model v1.1. Read the probability ranges and phase boundaries together. The revised cemetery chronology does not date the beginning of farming everywhere in the subcontinent.",
    ),
  ],
  "balathal-ahar-banas": [
    plate(
      "balathal-excavation.png",
      "balathal",
      "Balathal · cranium of individual 1997-1",
      "Anterior and inferior views of the cranium and maxilla of Balathal individual 1997-1, with arrows marking pathological changes and centimetre scales.",
      "Published Figure 3 from Robbins et al. (2009). The plate documents lesions on individual 1997-1, associated with approximately 2000 BCE; it is osteological evidence from one burial, not an excavation overview or a date for the settlement's full occupation.",
      "Illustration",
    ),
    {
      src: "/assets/images/prehistoric_india/researched/balathal-chalcolithic-pottery.png",
      title: "Balathal — Chalcolithic Pottery",
      alt: "Archaeological plate showing pottery vessels excavated at Balathal, Rajasthan.",
      caption:
        "Chalcolithic pottery from Balathal, published in Indian Archaeology 1996–97 — A Review, Plate XXX A. The vessels illustrate ceramic traditions associated with the Ahar-Banas culture.",
      category: "Artefact",
      credit: "Archaeological Survey of India, Indian Archaeology 1996–97 — A Review, Plate XXX A",
      sourceUrl:
        "https://nmma.nic.in/nmma/NAS1/nmma_doc/IAR/Indian%20Archaeology%201996_97%20A%20Review.pdf",
    },
    {
      src: "/assets/images/prehistoric_india/researched/balathal-ahar-banas-map.svg",
      title: "Balathal — Ahar-Banas Culture Map",
      alt: "Topographic map showing Balathal, Ahar, Gilund and other archaeological sites in Rajasthan.",
      caption:
        "Modern map showing the geographical distribution of Ahar-Banas culture sites, including Balathal. It is not a reconstruction of the settlement during one specific period.",
      category: "Map",
      credit: "Merikanto / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Topographic_map_of_Ahar-Banas_culture_1.svg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
  ],
  "southern-neolithic-ashmounds": [
    {
      src: "/assets/images/prehistoric_india/researched/kudathini-neolithic-ashmound.jpg",
      title: "Kudathini — Neolithic Ashmound",
      alt: "Present-day photograph of a surviving Neolithic ashmound near Kudathini, Karnataka.",
      caption:
        "Surviving Neolithic ashmound near Kudathini in Ballari district, Karnataka. Photographed in July 2025. The photograph documents the modern appearance of the mound, not its original prehistoric dimensions.",
      category: "Site photograph",
      credit: "Shyamal / Wikimedia Commons (2025)",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Neolithic_ashmound.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
    {
      src: "/assets/images/prehistoric_india/researched/kudathini-ashmound-material.jpg",
      title: "Kudathini — Ashmound Material",
      alt: "Close-up photograph of material exposed at the Kudathini Neolithic ashmound.",
      caption:
        "Surface material at the Kudathini ashmound, photographed in July 2025. The image illustrates the physical deposit but does not independently establish its age, composition or sequence of burning.",
      category: "Site photograph",
      credit: "Shyamal / Wikimedia Commons (2025)",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Ashmound_material_1.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
    plate(
      "brahmagiri-resistivity.png",
      "brahmagiri",
      "Brahmagiri · looking beneath the surface",
      "Electrical resistivity section with distance, elevation and a colour legend.",
      "Figure 3 from Hill et al. (2026): a modern geophysical model used to investigate a buried ashmound. This is neither an excavated section nor a new date for the Neolithic. The publication year does not change the timeline.",
    ),
  ],
  "mesolithic-regional-overview": [
    plate(
      "bhimbetka-2022.jpg",
      "bhimbetka",
      "Bhimbetka · painted shelter surface",
      "Faded red and dark painted forms on a weathered sandstone shelter wall.",
      "Modern photograph taken in 2022. Bhimbetka's paintings span multiple periods; no exact date is established here for this panel. It illustrates rock-art context, not a securely dated Mesolithic scene.",
      "Site photograph",
    ),
    plate(
      "bhimbetka-shelter-8.jpg",
      "bhimbetkaShelter",
      "Bhimbetka · Rock Shelter 8",
      "A tall sandstone outcrop with the opening and painted interior of Rock Shelter 8 visible.",
      "Modern photograph of specifically identified Rock Shelter 8. It supplies architectural context for one shelter, but does not date its paintings or represent every Bhimbetka occupation phase.",
      "Site photograph",
    ),
    {
      src: "/assets/images/prehistoric_india/researched/bhimbetka-cave-paintings.jpg",
      title: "Bhimbetka — Prehistoric Rock Paintings",
      alt: "Red and pale rock paintings depicting animals and other figures on a sandstone shelter surface at Bhimbetka.",
      caption:
        "A modern photograph of prehistoric paintings at Bhimbetka, Madhya Pradesh. The rock-art complex contains paintings from multiple periods. This image does not independently establish the age or specific shelter of the illustrated panel.",
      category: "Site photograph",
      credit: "Raveesh Vyas / Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Bhimbetka_Cave_Paintings.jpg",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    },
  ],
  "burzahom-neolithic": [
    plate(
      "burzahom-horned-vessel.jpg",
      "burzahomVessel",
      "Burzahom · vessel with horned motifs",
      "A restored round vessel painted with large curved horn-like forms, displayed at the National Museum, New Delhi.",
      "The museum photograph identifies the vessel with Burzahom and about 2700 BCE. It illustrates ceramic material from the site's long sequence; it is not evidence for the construction or use of a pit dwelling.",
      "Artefact",
    ),
    {
      src: "/assets/images/prehistoric_india/researched/burzahom-excavated-pit.png",
      title: "Burzahom — Neolithic Excavated Pit",
      alt: "Excavated rectangular pit with deep earth-cut walls at the Burzahom archaeological site.",
      caption:
        "Excavated pit at Burzahom, Kashmir. The photograph shows surviving pit architecture associated with the site's Neolithic occupation. Figure 1, Ahmed et al. (2024).",
      category: "Site photograph",
      credit: "Ahmed, Farswan and Singh (2024), ShodhKosh, Figure 1",
      sourceUrl:
        "https://www.granthaalayahpublication.org/journals-html-galley/67_ShodhKosh_950.htm",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    },
    {
      src: "/assets/images/prehistoric_india/researched/burzahom-pit-niche.png",
      title: "Burzahom — Pit with Niche and Post-Holes",
      alt: "Archaeological photograph of a Burzahom pit showing a niche and structural details.",
      caption:
        "Excavated pit showing a niche and features identified as post-holes at Burzahom. Figure 2, Ahmed et al. (2024).",
      category: "Site photograph",
      credit: "Ahmed, Farswan and Singh (2024), ShodhKosh, Figure 2",
      sourceUrl:
        "https://www.granthaalayahpublication.org/journals-html-galley/67_ShodhKosh_950.htm",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    },
  ],
  "sandhav-coastal-occupation": [
    {
      src: "/assets/images/prehistoric_india/researched/sandhav-stone-tools.png",
      title: "Sandhav — Palaeolithic Stone Tools",
      alt: "Labelled montage of twelve stone artefacts associated with Sandhav, including bifaces, a prepared core, points, scrapers and flakes, beside a five-centimetre scale.",
      caption:
        "A labelled teaching montage of stone-tool forms associated with Sandhav. It combines several tool types and should not be read as a published specimen plate or as proof that every illustrated object came from the approximately 114,000-year-old dated horizon.",
      category: "Artefact",
      credit:
        "Project-supplied montage based on Blinkhorn et al. (2019); use permission confirmed by the project owner",
      sourceUrl:
        "https://science.thewire.in/the-sciences/sandhav-kachchh-modern-humans-migration-south-asia-levallois-blade/",
      license: "Used with permission",
    },
    {
      src: "/assets/images/prehistoric_india/researched/sandhav-excavation.jpg",
      title: "Sandhav — Excavation Landscape",
      alt: "Field photograph showing an exposed archaeological sediment section and researcher at Sandhav, Gujarat.",
      caption:
        "Modern field photograph of the archaeological landscape at Sandhav in the Naira Valley, Kachchh. This view illustrates the excavation setting, not a reconstruction of the landscape 114,000 years ago.",
      category: "Site photograph",
      credit: "Max Planck Institute of Geoanthropology",
      sourceUrl: "https://www.shh.mpg.de/1508604/palaeolithic-sandhav-india",
      license: "Used with permission",
    },
    {
      src: "/assets/images/prehistoric_india/researched/sandhav-location-map.png",
      title: "Sandhav — Location in South Asia",
      alt: "Topographic map showing Sandhav in western India and other Palaeolithic archaeological sites.",
      caption:
        "Research location map showing Sandhav and comparative Palaeolithic sites across South Asia. The coastline shown is modern, not a reconstruction of prehistoric shorelines.",
      category: "Map",
      credit: "Blinkhorn et al. (2019), reproduced by The Wire Science",
      sourceUrl:
        "https://science.thewire.in/the-sciences/sandhav-kachchh-modern-humans-migration-south-asia-levallois-blade/",
      license: "Used with permission",
    },
  ],
  "gufkral-aceramic": [
    {
      src: "/assets/images/prehistoric_india/researched/gufkral-neolithic-pits.png",
      title: "Gufkral — Neolithic Excavated Pits",
      alt: "Archaeological photograph showing three excavated pits at Gufkral, with a measurement scale.",
      caption:
        "Excavated pits at Gufkral in Kashmir. The photograph illustrates pit structures associated with Neolithic occupation. Figure 7 in Sofi Sabzar Ahmad (2023), after A. K. Sharma (2013).",
      category: "Site photograph",
      credit: "A. K. Sharma (2013), reproduced in Sofi Sabzar Ahmad (2023), Figure 7",
      sourceUrl:
        "https://www.arfjournals.com/image/catalog/Journals%20Papers/JASI/2023/No%201%20%282023%29/5_Sofi%20Sabzar.pdf",
    },
    {
      src: "/assets/images/prehistoric_india/researched/gufkral-aceramic-bone-tools.png",
      title: "Gufkral — Aceramic Neolithic Bone Tools",
      alt: "Black-and-white archaeological plate showing pointed bone implements from Gufkral Period IA.",
      caption:
        "Bone tools excavated at Gufkral and explicitly attributed to Period IA, the aceramic Neolithic phase. Indian Archaeology 1981–82 — A Review, Plate XI.",
      category: "Artefact",
      credit: "Archaeological Survey of India, Indian Archaeology 1981–82, Plate XI",
      sourceUrl:
        "https://nmma.nic.in/nmma/NAS1/nmma_doc/IAR/Indian%20Archaeology%201981-82%20A%20Review.pdf",
    },
  ],
  "harappa-kot-diji-phase": [
    {
      src: "/assets/images/prehistoric_india/researched/harappa-kot-diji-settlement-plan.jpg",
      title: "Harappa — Kot Diji Settlement Plan",
      alt: "Measured archaeological plan of Kot Diji-phase streets and mud-brick structures at Harappa.",
      caption:
        "Plan of Trench 39N on Mound AB, showing early settlement structures and a street during Harappa's Kot Diji phase.",
      category: "Map",
      credit: "Harappa Archaeological Research Project",
      sourceUrl: "https://www.harappa.com/slide/plan-kot-diji-phase-levels",
    },
    {
      src: "/assets/images/prehistoric_india/researched/harappa-kot-diji-trench-39.jpg",
      title: "Harappa — Kot Diji Excavation",
      alt: "Excavated settlement deposits and architectural remains in Trench 39 South at Harappa.",
      caption:
        "Excavation of Trench 39 South, Mound AB, documenting early Kot Diji-phase occupation beneath later settlement remains.",
      category: "Site photograph",
      credit: "Harappa Archaeological Research Project",
      sourceUrl: "https://www.harappa.com/slide/trench-39-south",
    },
    {
      src: "/assets/images/prehistoric_india/researched/harappa-kot-diji-pottery-marks.jpg",
      title: "Harappa — Early Pottery Marks",
      alt: "Pottery fragments bearing incised marks from Harappa's Kot Diji phase.",
      caption:
        "Incised symbols on pottery associated with the Kot Diji phase at Harappa, approximately 2800–2600 BCE.",
      category: "Artefact",
      credit: "Harappa Archaeological Research Project",
      sourceUrl: "https://www.harappa.com/slide/kot-dijian-phase-symbols",
    },
  ],
};
