import type { HistoricalSource } from "@/types/history";

/** Sources checked 19 October 2026; locators live with each record. */
export const ancientSources = {
  rakhigarhi: {
    id: "shinde-2018-cemetery",
    title:
      "Archaeological and anthropological studies on the Harappan cemetery of Rakhigarhi, India",
    author: "Vasant Shinde et al.",
    publicationYear: 2018,
    publisher: "PLOS ONE 13(2), e0192299",
    url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0192299",
  },
  kalibangan: {
    id: "kalibangan-marg",
    title: "Kalibangan: excavation evidence and interpretations",
    publisher:
      "Harappa.com, citing Indus Civilization Sites in India: New Discoveries (Marg, 2004)",
    url: "https://www.harappa.com/blog/kalibangan",
  },
  exchange: {
    id: "met-first-cities",
    title: "Art of the First Cities",
    publisher: "The Metropolitan Museum of Art",
    url: "https://www.metmuseum.org/exhibitions/listings/2003/art-of-the-first-cities",
  },
  harappa: {
    id: "harp-1998-2000",
    title: "Recent Indus Discoveries and Highlights from Excavations at Harappa 1998-2000",
    publisher: "Harappa Archaeological Research Project / Harappa.com",
    url: "https://www.harappa.com/content/recent-indus-discoveries-and-highlights-excavations-harappa-1998-2000",
  },
  dholavira: {
    id: "unesco-dholavira",
    title: "Dholavira: a Harappan City",
    publisher: "UNESCO World Heritage Centre",
    url: "https://whc.unesco.org/en/list/1645/",
  },
  mohenjo: {
    id: "unesco-mohenjo",
    title: "Archaeological Ruins at Moenjodaro",
    publisher: "UNESCO World Heritage Centre",
    url: "https://whc.unesco.org/en/list/138/",
  },
  seal: {
    id: "met-49-40-1",
    title: "Stamp seal and modern impression: unicorn and incense burner (?)",
    publisher: "The Metropolitan Museum of Art",
    url: "https://www.metmuseum.org/art/collection/search/324062",
  },
  weights: {
    id: "csmvs-iv483",
    title: "Trader's Weight, accession IV 483",
    publisher: "CSMVS, Networks of the Past",
    url: "https://networksofthepast.csmvs.in/object/small-weight-4/",
  },
  crafts: {
    id: "kenoyer-bead-technologies",
    title: "Bead Technologies at Harappa, 3300-1900 BCE: A Comparative Summary",
    author: "Jonathan Mark Kenoyer",
    publisher: "Harappa.com",
    url: "https://www.harappa.com/sites/default/files/pdf/BeadTechnologiesSummary.pdf",
  },
  farming: {
    id: "petrie-bates-2017",
    title:
      "Multi-cropping, Intercropping and Adaptation to Variable Environments in Indus South Asia",
    author: "Cameron A. Petrie and Jennifer Bates",
    publicationYear: 2017,
    publisher: "Journal of World Prehistory",
    url: "https://link.springer.com/article/10.1007/s10963-017-9101-z",
  },
  lothal: {
    id: "unesco-lothal-tentative",
    title: "Archaeological remains of a Harappa Port-Town, Lothal",
    publisher: "UNESCO World Heritage Centre, Tentative Lists",
    url: "https://whc.unesco.org/en/tentativelists/5918/",
  },
  climate: {
    id: "giosan-2012",
    title: "Fluvial landscapes of the Harappan civilization",
    author: "Liviu Giosan et al.",
    publicationYear: 2012,
    publisher: "PNAS",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3387054/",
  },
  iron: {
    id: "tewari-2003",
    title:
      "The origins of iron working in India: new evidence from the Central Ganga Plain and the Eastern Vindhyas",
    author: "Rakesh Tewari",
    publicationYear: 2003,
    publisher: "Antiquity 77, 536-544",
    url: "https://www.cambridge.org/core/journals/antiquity/article/abs/origins-of-iron-working-in-india-new-evidence-from-the-central-ganga-plain-and-the-eastern-vindhyas/3986B90D94F333149BE7861683609BE9",
  },
  ironReview: {
    id: "inflibnet-iron-review",
    title: "Iron Age - Antiquity of Iron in India",
    author: "Ravi Korisettar and Smitha S Kumar",
    publisher: "INFLIBNET",
    url: "https://ebooks.inflibnet.ac.in/icp02/chapter/iron-age-antiquity-of-iron-in-india/",
  },
  vedic: {
    id: "inflibnet-vedic",
    title: "Vedic Culture",
    author: "P. Bhaskar Reddy",
    publisher: "INFLIBNET",
    url: "https://ebooks.inflibnet.ac.in/icp01/chapter/vedic-culture/",
  },
  chanting: {
    id: "unesco-vedic-chanting",
    title: "Tradition of Vedic chanting",
    publisher: "UNESCO Intangible Cultural Heritage",
    url: "https://ich.unesco.org/en/RL/tradition-of-vedic-chanting-00062",
  },
  upanishads: {
    id: "iep-upanishads",
    title: "Upanisads",
    publisher: "Internet Encyclopedia of Philosophy",
    url: "https://iep.utm.edu/upanisad/",
  },
  megaliths: {
    id: "inflibnet-megaliths",
    title: "Megalithic Culture: Meaning, Chronology and Origins",
    publisher: "INFLIBNET",
    url: "https://ebooks.inflibnet.ac.in/icp02/chapter/megalithic-culture-meaning-chronology-and-origins/",
  },
} as const satisfies Record<string, HistoricalSource>;
