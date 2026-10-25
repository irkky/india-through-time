import type { HistoricalSource } from "@/types/history";

const entries = {
  phule: [
    "Savitribai Phule and girls' education",
    "NCERT",
    "https://www.ncert.nic.in/dgs/pdf/KGBV-HistoryENGLISH.pdf",
  ],
  rural: ["Ruling the Countryside", "NCERT", "https://ncert.nic.in/textbook/pdf/hess203.pdf"],
  expansion: [
    "From Trade to Territory",
    "NCERT",
    "https://www.ncert.nic.in/textbook/pdf/hess202.pdf",
  ],
  regulation: [
    "Parliament and the East India Company",
    "UK Parliament",
    "https://www.parliament.uk/about/living-heritage/evolutionofparliament/legislativescrutiny/parliament-and-empire/parliament-and-the-american-colonies-before-1765/parliament-and-the-east-india-company/",
  ],
  mysore: [
    "Storming of Seringapatam, 4 May 1799",
    "National Army Museum",
    "https://collection.nam.ac.uk/detail.php?acc=1971-02-33-550-1",
  ],
  paika: [
    "Paika Rebellion of Odisha",
    "Press Information Bureau, Government of India",
    "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=168762",
  ],
  reform: ["Women, Caste and Reform", "NCERT", "https://ncert.nic.in/textbook/pdf/hess207.pdf"],
  education: [
    "Civilising the Native, Educating the Nation",
    "NCERT",
    "https://ncert.nic.in/textbook/pdf/hess206.pdf",
  ],
  punjab: [
    "Second Sikh War",
    "National Army Museum",
    "https://www.nam.ac.uk/explore/second-sikh-war",
  ],
  railway: [
    "Chhatrapati Shivaji Maharaj Terminus",
    "Indian Railways, Google Arts & Culture",
    "https://artsandculture.google.com/partner/chhatrapati-shivaji-maharaj-terminus",
  ],
  countryside: [
    "Colonialism and the Countryside",
    "NCERT / IIT Kanpur SATHEE",
    "https://sathee.iitk.ac.in/sathee-railway-exams/student-corner/ncert-books/class-12/themes-in-indian-history/chapter-09-colonialism-and-the-countryside-exploring-official-archives/",
  ],
  rebellion: ["Rebels and the Raj", "NCERT", "https://ncert.nic.in/textbook/pdf/lehs302.pdf"],
  crown: [
    "Government of the Raj 1858–1914",
    "UK Parliament",
    "https://www.parliament.uk/about/living-heritage/evolutionofparliament/legislativescrutiny/parliament-and-empire/parliament-and-the-american-colonies-before-1765/government-of-the-raj-1858-1914/",
  ],
  bourne: [
    "Views of India and the Himalayas",
    "The Metropolitan Museum of Art",
    "https://www.metmuseum.org/art/collection/search/283165",
  ],
  terminus: ["Chhatrapati Shivaji Terminus", "UNESCO", "https://whc.unesco.org/en/list/945/"],
  tribal: [
    "Tribals, Dikus and the Vision of a Golden Age",
    "NCERT / IIT Kanpur SATHEE",
    "https://sathee.iitk.ac.in/ncert-books/class-08/social-science/history-our-past-3/chapter-04-tribals-dikus-and-the-vision-of-a-golden-age/",
  ],
  nationalist: [
    "National Movement learning activities",
    "SCERT Delhi",
    "https://scert.delhi.gov.in/sites/default/files/SCERT/publication%2021-22/class-8_social_sciece_activity_english_medium.pdf",
  ],
  war: [
    "British Indian Army: Soldiers of the First World War",
    "National Army Museum / United Service Institution of India",
    "https://www.nam.ac.uk/whats-on/british-indian-army-soldiers-first-world-war",
  ],
  amritsar: [
    "Jallianwala Bagh massacre",
    "House of Commons Library",
    "https://commonslibrary.parliament.uk/research-briefings/cdp-2019-0085/",
  ],
  dissent: [
    "Loyalty and dissent",
    "The National Archives",
    "https://www.nationalarchives.gov.uk/education/resources/loyalty-dissent/",
  ],
  constitution: [
    "The Raj and independence 1914–47",
    "UK Parliament",
    "https://www.parliament.uk/about/living-heritage/evolutionofparliament/legislativescrutiny/parliament-and-empire/parliament-and-the-american-colonies-before-1765/the-raj-and-independence-1914-47/",
  ],
  gandhi: [
    "Mahatma Gandhi and the Nationalist Movement",
    "NCERT",
    "https://ncert.nic.in/textbook/pdf/lehs303.pdf",
  ],
  famine: [
    "Food situation in India, 1943",
    "US Department of State, Office of the Historian",
    "https://history.state.gov/historicaldocuments/frus1943v04/d337",
  ],
  transfer: [
    "Indian independence, part two",
    "The National Archives",
    "https://www.nationalarchives.gov.uk/education/teaching-resources/indian-independence-part-two/",
  ],
  partition: [
    "Partition of British India",
    "The National Archives",
    "https://www.nationalarchives.gov.uk/education/teaching-resources/partition-of-british-india/",
  ],
} as const;

export const colonialSources = Object.fromEntries(
  Object.entries(entries).map(([key, [title, publisher, url]]) => [
    key,
    { id: `colonial-${key}`, title, publisher, url },
  ]),
) as Record<keyof typeof entries, HistoricalSource>;
