import type { HistoricalSource } from "@/types/history";

export const empireSources = {
  pottery: {
    id: "bm-nbpw",
    title: "Northern Black Polished Ware: collection terminology",
    publisher: "British Museum",
    url: "https://www.britishmuseum.org/collection/term/x72914",
  },
  bhir: {
    id: "doam-bhir",
    title: "Bhir Mound: protected site record",
    publisher: "Department of Archaeology and Museums, Pakistan",
    url: "https://doam.gov.pk/public/sites/9752",
  },
  coin: {
    id: "bm-punchmark-48",
    title: "Silver punch-marked coin, 1869,1203.48",
    publisher: "British Museum",
    url: "https://www.britishmuseum.org/collection/object/C_1869-1203-48",
  },
  ashoka: {
    id: "oxford-ashoka",
    title: "Ashoka",
    author: "Romila Thapar",
    publisher: "Oxford Classical Dictionary",
    url: "https://academic.oup.com/edited-volume/61673/chapter-abstract/548508445",
  },
  states: {
    id: "ncert-early-states",
    title: "Kings, Farmers and Towns",
    publisher: "NCERT",
    url: "https://ncert.nic.in/textbook/pdf/lehs102.pdf",
  },
  buddha: {
    id: "iep-buddha",
    title: "Buddha: dates, sources and philosophy",
    publisher: "Internet Encyclopedia of Philosophy",
    url: "https://iep.utm.edu/buddha/",
  },
  jain: {
    id: "iep-jain",
    title: "Jain Philosophy",
    publisher: "Internet Encyclopedia of Philosophy",
    url: "https://iep.utm.edu/jain/",
  },
  taxila: {
    id: "unesco-taxila",
    title: "Taxila",
    publisher: "UNESCO World Heritage Centre",
    url: "https://whc.unesco.org/en/list/139/",
  },
  money: {
    id: "bm-money",
    title: "Money gallery: the beginnings of coinage in India",
    publisher: "British Museum",
    url: "https://www.britishmuseum.org/sites/default/files/2021-05/Money_Gallery_LPG_2020_Room_68.pdf",
  },
  maurya: {
    id: "met-maurya",
    title: "Mauryan Empire (ca. 323–185 B.C.)",
    publisher: "The Metropolitan Museum of Art",
    url: "https://www.metmuseum.org/essays/mauryan-empire-ca-323-185-b-c",
  },
  edicts: {
    id: "ashoka-dhammika",
    title: "The Edicts of King Asoka",
    author: "S. Dhammika (translator)",
    publisher: "Buddhist Publication Society / Access to Insight",
    url: "https://accesstoinsight.org/lib/authors/dhammika/wheel386.html",
  },
  kalinga: {
    id: "macquarie-ashoka",
    title: "Ashoka documents: Greek Edicts XII and XIII",
    publisher: "Macquarie University",
    url: "https://www.mq.edu.au/__data/assets/pdf_file/0004/22954/51265.pdf",
  },
  caves: {
    id: "nma-barabar",
    title: "Heritage Bye-Laws: Barabar and Nagarjuni Hill",
    publisher: "National Monuments Authority",
    url: "https://www.nma.gov.in/showfile.php?lang=1&level=2&lid=1643&ls_id=1385&nma_type=0",
  },
  sanchi: {
    id: "unesco-sanchi",
    title: "Buddhist Monuments at Sanchi",
    publisher: "UNESCO World Heritage Centre",
    url: "https://whc.unesco.org/en/list/524/",
  },
  lumbini: {
    id: "unesco-lumbini",
    title: "Lumbini, the Birthplace of the Lord Buddha",
    publisher: "UNESCO World Heritage Centre",
    url: "https://whc.unesco.org/en/list/666/",
  },
  ring: {
    id: "met-ring-38080",
    title: "Fragment of a Ring Stone with Goddesses and Palm Trees, 1987.142.391",
    publisher: "The Metropolitan Museum of Art",
    url: "https://www.metmuseum.org/art/collection/search/38080",
  },
} as const satisfies Record<string, HistoricalSource>;
