import type { HistoricalSource } from "@/types/history";

/** Sources checked on 18 October 2026. Metadata is shared; citations remain event-owned. */
export const prehistorySources = {
  jwalapuram: {
    id: "petraglia-2007",
    title:
      "Middle Paleolithic assemblages from the Indian subcontinent before and after the Toba super-eruption",
    author: "Michael Petraglia et al.",
    publisher: "Science",
    publicationYear: 2007,
    url: "https://pubmed.ncbi.nlm.nih.gov/17615356/",
  },
  inamgaon: {
    id: "dhavalikar-inamgaon",
    title: "Settlement Archaeology of Inamgaon",
    author: "M. K. Dhavalikar",
    publisher: "Deccan College; archived by IGNCA",
    url: "https://ignca.gov.in/Asi_data/63860.pdf",
  },
  narmada: {
    id: "patnaik-narmada",
    title:
      "New geochronological, paleoclimatological, and archaeological data from the Narmada Valley hominin locality, central India",
    author: "Rajeev Patnaik et al.",
    publisher: "Journal of Human Evolution",
    url: "https://doi.org/10.1016/j.jhevol.2008.08.023",
  },
  patne: {
    id: "mellars-2013",
    title:
      "Genetic and archaeological perspectives on the initial modern human colonization of southern Asia",
    author: "Paul Mellars et al.",
    publisher: "PNAS",
    publicationYear: 2013,
    url: "https://doi.org/10.1073/pnas.1306043110",
  },
  kalibangan: {
    id: "penn-kalibangan",
    title: "Kalibangan",
    publisher: "Penn Museum, Expedition",
    url: "https://www.penn.museum/sites/expedition/kalibangan/",
  },
  acheulian: {
    id: "pappu-2011",
    title: "Early Pleistocene presence of Acheulian hominins in South India",
    author: "Shanti Pappu et al.",
    publisher: "Science",
    publicationYear: 2011,
    url: "https://pubmed.ncbi.nlm.nih.gov/21436450/",
  },
  middle: {
    id: "akhilesh-2018",
    title:
      "Early Middle Palaeolithic culture in India around 385–172 ka reframes Out of Africa models",
    author: "Kumar Akhilesh et al.",
    publisher: "Nature",
    publicationYear: 2018,
    url: "https://pubmed.ncbi.nlm.nih.gov/29388951/",
  },
  dhaba: {
    id: "clarkson-2020",
    title: "Human occupation of northern India spans the Toba super-eruption ~74,000 years ago",
    author: "Chris Clarkson et al.",
    publisher: "Nature Communications",
    publicationYear: 2020,
    url: "https://www.nature.com/articles/s41467-020-14668-4",
  },
  microblades: {
    id: "mishra-2013",
    title: "Continuity of Microblade Technology in the Indian Subcontinent Since 45 ka",
    author: "Sheila Mishra, Naveen Chauhan and Ashok K. Singhvi",
    publisher: "PLOS ONE",
    publicationYear: 2013,
    url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0069280",
  },
  isampur: {
    id: "paddayya-2000",
    title: "Excavation of an Acheulian workshop at Isampur, Karnataka (India)",
    author: "K. Paddayya, Richa Jhaldiyal and M. D. Petraglia",
    publisher: "Antiquity",
    publicationYear: 2000,
    url: "https://doi.org/10.1017/S0003598X00060269",
  },
  lowerSurvey: {
    id: "inflibnet-lower-palaeolithic",
    title: "Lower Palaeolithic Culture",
    publisher: "INFLIBNET / e-PG Pathshala",
    url: "https://ebooks.inflibnet.ac.in/icp02/chapter/lower-palaeolithic-culture/",
  },
  bhimbetka: {
    id: "unesco-bhimbetka",
    title: "Rock Shelters of Bhimbetka",
    publisher: "UNESCO World Heritage Centre",
    url: "https://whc.unesco.org/en/list/925/",
  },
  bagor: {
    id: "ignou-mesolithic",
    title: "Indian Mesolithic Cultures",
    publisher: "IGNOU / eGyanKosh",
    url: "https://egyankosh.ac.in/bitstream/123456789/41359/1/MAN-002B6E.pdf",
  },
  rice: {
    id: "bates-2022",
    title: "The Fits and Starts of Indian Rice Domestication",
    author: "Jennifer Bates",
    publisher: "Frontiers in Ecology and Evolution",
    publicationYear: 2022,
    url: "https://doi.org/10.3389/fevo.2022.924977",
  },
  mehrgarh: {
    id: "mutin-2025",
    title:
      "New radiocarbon dates of human tooth enamel reveal a late appearance of farming life in the Indus Valley",
    author: "Benjamin Mutin et al.",
    publisher: "Scientific Reports",
    publicationYear: 2025,
    url: "https://www.nature.com/articles/s41598-025-92621-5",
  },
  mehrgarhEarlier: {
    id: "harappa-origins",
    title: "When did the Indus Valley Civilization start?",
    publisher: "Harappa.com, archaeologists' responses",
    url: "https://www.harappa.com/answers/when-did-indus-valley-civilization-start",
  },
  burzahom: {
    id: "unesco-burzahom",
    title: "The Neolithic Settlement of Burzahom",
    publisher: "India's submission to UNESCO Tentative Lists",
    publicationYear: 2014,
    url: "https://whc.unesco.org/en/tentativelists/5917/",
  },
  ashmounds: {
    id: "boivin-2004",
    title:
      "Landscape, monumental architecture, and ritual: a reconsideration of the South Indian ashmounds",
    publisher: "Journal of Anthropological Archaeology",
    publicationYear: 2004,
    url: "https://www.sciencedirect.com/science/article/pii/S0278416504000352",
  },
  southernDates: {
    id: "fuller-2007",
    title:
      "Dating the Neolithic of South India: new radiometric evidence for key economic, social and ritual transformations",
    author: "Dorian Q. Fuller, Nicole Boivin and Ravi Korisettar",
    publisher: "Antiquity",
    publicationYear: 2007,
    url: "https://doi.org/10.1017/S0003598X00095715",
  },
  chalcolithic: {
    id: "inflibnet-chalcolithic",
    title: "Chalcolithic Cultures Northern and Central India",
    publisher: "INFLIBNET / e-PG Pathshala",
    url: "https://ebooks.inflibnet.ac.in/icp02/chapter/152/",
  },
  ravi: {
    id: "harappa-ravi",
    title: "Ravi Phase: excavated objects and contexts",
    publisher: "Harappa Archaeological Research Project / Harappa.com",
    url: "https://www.harappa.com/category/slide-subject/ravi-phase?page=0",
  },
  harappaChronology: {
    id: "kenoyer-meadow-2005",
    title: "Excavations at Harappa 2000–2001: New insights on chronology and city organization",
    author: "Jonathan Mark Kenoyer and Richard H. Meadow",
    publicationYear: 2005,
    url: "https://www.harappa.com/sites/default/files/pdf/Kenoyer2005_Excavations%20at%20Harappa%202000-2001%20New%20insights%20on.pdf",
  },
} as const satisfies Record<string, HistoricalSource>;
