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
  "dhaba-toba-sequence": [dhabaSection, dhabaTools],
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
      "mehtakheri-figure-4.png",
      "mehtakheri",
      "Mehtakheri · the 2009 excavation",
      "Tall excavation section with numbered sediment layers and a field scale.",
      "Published Figure 4 records the 2009 excavation. Layers 18–26 form the artefact-bearing Unit 2; its upper contact is erosional. The photograph's capture year is distinct from the archaeological age.",
      "Site photograph",
    ),
  ],
  "lahuradewa-rice-use": [riceMap("Lahuradewa", 15)],
  "chopani-mando-late-phase": [riceMap("Chopani Mando", 4)],
  "mahagara-neolithic": [riceMap("Mahagara", 17)],
  "mehrgarh-aceramic-cemetery": [
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
      "Balathal · settlement and excavation",
      "Location inset, exposed settlement walls and archaeologists excavating a stone enclosure.",
      "Published Figure 1. The enclosure includes the context of burial 1997-1, associated with approximately 2000 cal BCE. This specific context falls within the site's longer occupation; it does not date every visible wall.",
      "Site photograph",
    ),
  ],
  "southern-neolithic-ashmounds": [
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
  ],
};
