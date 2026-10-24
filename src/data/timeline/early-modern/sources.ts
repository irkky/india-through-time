import type { HistoricalSource } from "@/types/history";
const source = (id: string, title: string, publisher: string, url: string): HistoricalSource => ({
  id: `early-modern-${id}`,
  title,
  publisher,
  url,
});
const unesco = (id: number, title: string) =>
  source(
    `unesco-${id}`,
    title,
    "UNESCO World Heritage Centre",
    `https://whc.unesco.org/en/list/${id}/`,
  );
const ncert = (file: string, title: string) =>
  source(file, title, "NCERT", `https://ncert.nic.in/textbook/pdf/${file}.pdf`);
const met = (slug: string, title: string) =>
  source(slug, title, "The Metropolitan Museum of Art", `https://www.metmuseum.org/essays/${slug}`);
const object = (id: number, title: string) =>
  source(
    `met-${id}`,
    title,
    "The Metropolitan Museum of Art, collection catalogue",
    `https://www.metmuseum.org/art/collection/search/${id}`,
  );

/** Research reviewed 24 October 2026. Object rights are recorded separately in the media manifest. */
export const earlyModernSources = {
  ports: source(
    "va-textiles",
    "Indian textiles",
    "Victoria and Albert Museum",
    "https://www.vam.ac.uk/articles/indian-textiles",
  ),
  goaTrade: source(
    "interwoven",
    "Interwoven Globe: India chronology",
    "The Metropolitan Museum of Art",
    "https://www.metmuseum.org/exhibitions/listings/2013/interwoven-globe",
  ),
  deccan: source(
    "deccan",
    "Sultans of Deccan India, 1500–1700",
    "The Metropolitan Museum of Art",
    "https://www.metmuseum.org/exhibitions/listings/2015/deccan-sultans",
  ),
  vijayanagara: ncert("lehs203", "An Imperial Capital: Vijayanagara"),
  nanak: source(
    "nanak",
    "Sri Guru Nanak Dev Ji",
    "Shiromani Gurdwara Parbandhak Committee",
    "https://new.sgpc.net/ten-guru-sahibs/guru-nanak-sahib/",
  ),
  panipat: source(
    "panipat",
    "History: the battles of Panipat",
    "Panipat District, Government of Haryana",
    "https://panipat.gov.in/history/",
  ),
  earlyMughals: source(
    "ignou-early",
    "Growth of Mughal Empire: 1526–1556, Unit 5",
    "IGNOU, eGyanKosh",
    "https://egyankosh.ac.in/bitstream/123456789/20222/1/Unit-5.pdf",
  ),
  coins: source(
    "rbi-mughal",
    "Mughal Coinage",
    "Reserve Bank of India Currency Museum",
    "https://systemhealth.rbi.org.in/Scripts/mc_mughal.aspx.html",
  ),
  akbar: met("the-art-of-the-mughals-before-1600", "The Art of the Mughals before 1600"),
  printing: source(
    "printing",
    "Juan de Bustamante and the first European Print in India",
    "Indialogs, Universitat Autònoma de Barcelona",
    "https://revistes.uab.cat/indialogs/article/view/v6-ojeda",
  ),
  tomb: unesco(232, "Humayun’s Tomb, Delhi"),
  sikri: unesco(255, "Fatehpur Sikri"),
  administration: ncert("gess104", "The Mughals: 16th to 17th Century"),
  agriculture: ncert("lehs204", "Peasants, Zamindars and the State"),
  devotion: ncert("gess106", "Devotional Paths to the Divine"),
  conquests: source(
    "ignou-conquests",
    "Mughal Conquests: Warfare and Alliances, Unit 6",
    "IGNOU, eGyanKosh",
    "https://egyankosh.ac.in/bitstream/123456789/77569/1/Unit-6.pdf",
  ),
  textiles: met("indian-textiles-trade-and-production", "Indian Textiles: Trade and Production"),
  ambar: source(
    "ambar",
    "Portrait of an African Official",
    "Philadelphia Museum of Art",
    "https://www.philamuseum.org/objects/91938",
  ),
  granth: source(
    "granth",
    "Sri Guru Granth Sahib",
    "Shiromani Gurdwara Parbandhak Committee",
    "https://new.sgpc.net/sri-guru-granth-sahib/",
  ),
  laterMughals: met("the-art-of-the-mughals-after-1600", "The Art of the Mughals after 1600"),
  nur: source(
    "nur",
    "World-Changing Women: Nur Jahan",
    "The Open University",
    "https://www.open.edu/openlearn/course/view.php?id=12010",
  ),
  taj: unesco(252, "Taj Mahal"),
  redFort: unesco(231, "Red Fort Complex"),
  succession: source(
    "succession",
    "Scrambling for glory: assessing Rajput identity in a Mughal war of succession (1657–1659)",
    "Journal of the Royal Asiatic Society, Cambridge University Press",
    "https://www.cambridge.org/core/journals/journal-of-the-royal-asiatic-society/article/scrambling-for-glory-assessing-true-rajput-identity-in-a-mughal-war-of-succession-16571659/ED942AAF54963DAD5AE56A7B3D837888",
  ),
  aurangzeb: source(
    "aurangzeb",
    "The Decline of Mughal Empire and their Contribution",
    "INFLIBNET, Outlines of Indian History",
    "https://ebooks.inflibnet.ac.in/icp01/chapter/the-decline-of-mughal-empire-and-their-contribution/",
  ),
  saraighat: source(
    "saraighat",
    "The Battle of Alaboi and the Battle of Saraighat",
    "Kamrup District, Government of Assam",
    "https://kamrup.assam.gov.in/about-us/battle-alaboi-and-saraighat",
  ),
  shivaji: source(
    "shivaji",
    "Rise of Marathas: Shivaji Maharaj, Unit 15",
    "IGNOU, eGyanKosh",
    "https://www.egyankosh.ac.in/bitstream/123456789/116367/1/Unit-15.pdf",
  ),
  tegh: source(
    "tegh",
    "Sri Guru Tegh Bahadur Ji",
    "Shiromani Gurdwara Parbandhak Committee",
    "https://sgpc.net/ten-guru-sahibs/guru-tegh-bahadur-sahib/",
  ),
  forts: unesco(1739, "Maratha Military Landscapes of India"),
  khalsa: source(
    "khalsa",
    "Sri Guru Gobind Singh Ji",
    "Shiromani Gurdwara Parbandhak Committee",
    "https://sgpc.net/ten-guru-sahibs/guru-gobind-singh-sahib/",
  ),
  regional: ncert("gess108", "Eighteenth-Century Political Formations"),
  successor: source(
    "successor",
    "The Eighteenth Century, Block 4",
    "IGNOU, eGyanKosh",
    "https://www.egyankosh.ac.in/bitstream/123456789/66568/1/Block-4.pdf",
  ),
  jaipur: unesco(1605, "Jaipur City, Rajasthan"),
  astronomy: unesco(1338, "The Jantar Mantar, Jaipur"),
  astronomyDate: source(
    "jantar-date",
    "Jantar Mantar and its History",
    "Department of Tourism, Government of Rajasthan",
    "https://www.tourism.rajasthan.gov.in/jantar-mantar.html",
  ),
  secondPanipat: source(
    "panipat-second",
    "Second Battle of Panipat (1556)",
    "Panipat District, Government of Haryana",
    "https://panipat.gov.in/second-battle/",
  ),
  gond: source(
    "gond",
    "Tribes, Nomads and Settled Communities",
    "NCERT, hosted by IIT Kanpur SATHEE",
    "https://sathee.iitk.ac.in/ncert-books/class-07/social-science/history-our-past-2/chapter-05-tribes-nomads-and-settled-communites/",
  ),
  durgavatiDate: source(
    "durgavati-date",
    "About Rani Durgavati",
    "Rani Durgavati Vishwavidyalaya, Jabalpur",
    "https://rdunijbpin.mponline.gov.in/1317/About-Rani-Durgavati",
  ),
  buxar: source(
    "buxar-coalition",
    "Struggle for Supremacy: Expansion and Consolidation of Colonial Rule",
    "Rajiv Gandhi University, Institute of Distance Education",
    "https://ide.rgu.ac.in/docs/UG_HisIII.pdf",
  ),
  tarabai: source(
    "tarabai",
    "Satara Gazetteer: Tarabai’s Regency, 1700–1707",
    "Gazetteers Department, Government of Maharashtra",
    "https://gazetteers.maharashtra.gov.in/cultural.maharashtra.gov.in/english/gazetteer/SATARA/his_muslim_rule.html",
  ),
  nadir: source(
    "nadir",
    "India: relations in the Afsharid and Zand periods",
    "Encyclopaedia Iranica",
    "https://www.iranicaonline.org/articles/india-vii-relations-the-afsharid-and-zand-periods/",
  ),
  travancore: source(
    "travancore",
    "City History",
    "Thiruvananthapuram Municipal Corporation, Government of Kerala",
    "https://tmc.lsgkerala.gov.in/en/city-history-0",
  ),
  company: ncert("hess202", "From Trade to Territory"),
  diwani: ncert("hess203", "Ruling the Countryside"),
  hamza: object(447743, "The Spy Zambur Brings Mahiya to the City of Tawariq, Hamzanama folio"),
  mansur: object(451261, "Study of a Nilgai, by Mansur"),
  kalamkari: object(448212, "Kalamkari Rumal (Cover)"),
  bibi: object(453975, "Chand Bibi Hawking with Attendants in a Landscape"),
  shahPortrait: object(451267, "Shah Jahan on Horseback, by Payag"),
} as const;
