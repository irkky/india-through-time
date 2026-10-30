import type { HistoricalSource } from "@/types/history";

/** Reading prompts supplement, rather than replace, the sourced historical records. */
export const earlyModernVisualNotes: Readonly<Record<string, string>> = {
  "calicut-1498":
    "Start with the port and its existing commercial connections. A picture of a Portuguese ship alone would obscure Indian merchants, coastal rulers and Asian customers. A modern Beypore beach photograph was rejected because it would not identify the Calicut landing site.",
  "deccan-sultanate-cultures":
    "Compare the mass of Gol Gumbaz with the fine surface detail of the court paintings elsewhere in this chapter. Different materials and patrons reveal different aspects of Deccani cultural production; one Bijapur monument cannot represent all four sultanates.",
  "vijayanagara-krishnadevaraya":
    "Move from the carved shrine to the stepped tank. The paired views connect royal patronage with a larger temple landscape. The campaign date, installation date and dates of later repairs must be established separately; a modern photograph cannot settle the inscription's reading.",
  "goa-1510":
    "The church makes a later colonial religious landscape visible. Compare it with the opening account of conquest, keeping the elapsed decades in mind. A site plan and an identified early printed page would explain two different aspects of Portuguese Goa.",
  "nanak-kartarpur":
    "The living sacred site helps locate the narrative, but its present scale and marble surfaces cannot reconstruct Guru Nanak's community. Manuscript, oral tradition and modern pilgrimage evidence require separate dates and provenance.",
  "panipat-1526":
    "A reliable battle map should distinguish documented positions from a modern cartographer's reconstruction. A later Baburnama illustration is evidence of how the victory was remembered and represented; its copying date must remain visible.",
  "humayun-restoration":
    "Sher Shah's tomb offers a material counterpoint to a story often told only through Mughal succession. It does not depict Humayun. For exile and restoration, a dated document or identified manuscript passage would supply more direct evidence than a generic royal portrait.",
  "sur-currency":
    "Compare both sides of the same authenticated coin before discussing the legend, mint or monetary standard. A privately photographed rupee without a secure catalogue identification was not used to assert an exact weight or mint. Currency reform is not established by calling an isolated coin the first rupee.",
  "akbar-consolidation":
    "Fatehpur Sikri is one place where imperial resources took architectural form. The pavilion does not demonstrate the terms of every alliance. The map still needs dated distinctions between campaigns, tributary relationships and direct administration.",
  "goa-printing":
    "A title page should identify the edition, printer, language and surviving copy. A photograph of a later church or a modern printing press would not show the 1556 press. The missing page is deliberately left as a documented acquisition request.",
  "talikota-1565":
    "Read the surviving Hampi monument alongside the account of defeat and subsequent relocation. Ruins alone cannot prove that every building was destroyed in one episode or that Vijayanagara political life ended everywhere in 1565.",
  "humayun-garden-tomb":
    "Look for the relationship between the raised mausoleum and the garden approaches. Modern planting and restored water channels require conservation context. A north arrow and scale are essential before treating an illustration as a measured garden plan.",
  "hamzanama-workshop":
    "Follow the narrative figures through the painted architecture. This literary illustration reveals workshop storytelling, colour and composition; it is not a documentary street view. An additional folio needs its own attribution and catalogue date.",
  "fatehpur-sikri":
    "The open storeys of the Panch Mahal offer a useful comparison with enclosed court spaces. A beautiful pavilion photograph cannot by itself explain the whole city's water supply, residential layout or the reasons for moving the court.",
  "akbar-religious-dialogue":
    "An illustrated discussion needs an identified manuscript and production date before its figures can be named. Architectural photographs should not be labelled as the Ibadat Khana without archaeological support. Debate, court policy and later idealisation are separate kinds of evidence.",
  "mughal-administration":
    "A mansab, a jagir assignment and cash actually collected are not interchangeable quantities. A future document should explain the administrative unit, accounting date and translation choices. Do not turn a schematic diagram into a uniform empire-wide salary table.",
  "agrarian-production":
    "A court painting can show an artist's representation of cultivation, while a revenue record describes an administrative demand. Neither automatically measures harvests or household consumption. Regional crops and seasons need local evidence.",
  "women-rural-work":
    "Keep household production visible even when surviving sources privilege male officeholders. A later photograph of spinning cannot be silently backdated to the Mughal period. A petition, wage record or dated depiction needs its social setting explained.",
  "chand-bibi-defence":
    "Compare the fort entrance with the later painted memory of Chand Bibi. The two images answer different questions: material setting and subsequent representation. Neither supplies a verified siege deployment map.",
  "vernacular-devotion":
    "Separate the attributed composition of a poem from the date of a surviving manuscript and from a modern performance. A permitted recording should credit the performer, language, text and translation rather than using an anonymous devotional soundtrack.",
  "textile-workshops":
    "Compare the seventeenth-century cover with the early eighteenth-century palampore. Visible pattern and catalogue technique help discuss production; they cannot establish the wages, caste, gender or working conditions of unnamed makers.",
  "malik-ambar":
    "Read the individual portrait together with the political account, keeping artistic attribution distinct from military history. A secure museum identification matters: not every Deccani portrait of an African official depicts Malik Ambar.",
  "adi-granth-1604":
    "The date of compilation is not automatically the date of a photographed copy. An appropriate folio requires repository permission, shelfmark, copy date and an accurately identified passage. Respectful display and translation should follow the holding institution's guidance.",
  "jahangir-court":
    "The dated portrait anchors this entry in courtly visual culture. Compare its formal presentation of the emperor with Mansur's study of an animal; both belong to patronage networks but serve different purposes.",
  "nur-jahan":
    "The tomb commission provides a concrete example of patronage. It does not substitute for coins or documentary evidence when assessing Nur Jahan's role in government. Avoid treating a later idealised female portrait as a securely identified likeness.",
  "mansur-nilgai":
    "Look closely at the animal's profile, coat and setting. Retain the distinction between the painting's date and the older calligraphy on the reverse. Scientific observation and imperial collecting are related contexts, not proof of a modern zoological survey.",
  "shah-jahan-court":
    "The equestrian portrait projects imperial authority through pose and ornament. Compare the court image with the architectural commissions in the next entries. Its painting date must not be transferred to the older calligraphy associated with the folio.",
  "taj-mahal":
    "Read the mausoleum within a larger riverfront and garden complex. Symmetry in the front view is not a complete site plan. Construction of the central tomb and completion of associated works should remain distinct chronological questions.",
  shahjahanabad:
    "The gate connects the palace-fort with the wider city. A palace entrance is not a representative sample of markets, neighbourhoods or ordinary housing. Historical maps need their actual survey date and a legend for later interventions.",
  "kalamkari-cover":
    "The cloth's decoration is evidence of a specific textile tradition. Use the catalogue's technique rather than guessing from colour alone. A close-up should retain enough of the whole object to show where the detail belongs.",
  "company-trading-networks":
    "The palampore's Sri Lankan market attribution helps prevent a Europe-only account of Indian exports. Company records describe particular institutions; they should be compared with other Indian Ocean commercial evidence. A factory here means a trading establishment.",
  "mughal-succession-war":
    "The portrait shows Aurangzeb as a prince before the succession struggle. It cannot illustrate the battle of Samugarh or the capture of a rival. A campaign sequence should identify its narrative sources and uncertain movements.",
  "aurangzeb-reign":
    "Royal portraiture is evidence for representation, not a complete judgement on a reign. Dated orders and regional studies are needed to examine military, fiscal and religious policies and their uneven implementation.",
  "saraighat-1671":
    "A useful visual would locate the Brahmaputra channel and the relevant positions using a sourced reconstruction. Modern bridges and memorials must not be drawn into a seventeenth-century battle plan. Unverified tactical diagrams were not added.",
  "shivaji-coronation":
    "The portrait dates to 1680-1687, after the 1674 coronation; Raigad's surviving walls supply site context. Pairing them does not create an eyewitness ceremony scene. The coronation platform and ritual documents still need independently identified evidence.",
  "tegh-bahadur-1675":
    "A photograph of Sis Ganj would show a later commemorative building, not the execution in 1675. Any account of motives should identify its source and tradition. An unverified historical photograph is not a substitute for a securely catalogued manuscript.",
  "maratha-fort-networks":
    "Compare hill and sea-facing fortifications: terrain, access and visibility pose different problems. Two examples do not reconstruct the complete network. The modern heritage designation must remain separate from the forts' construction and occupation dates.",
  "deccan-annexations":
    "The surviving Golconda interior gives a physical setting for the annexation narrative. Later conservation and missing structures complicate reconstruction. A fort photograph is not a diagram of the 1687 siege or proof of how every gate was used.",
  "khalsa-1699":
    "Anandpur's modern heritage museum and later gurdwara photographs must be distinguished from the foundation narrative. A manuscript needs copy date and textual context; a modern memorial does not document the appearance of the gathering in 1699.",
  "chand-bibi-memory":
    "Return to the defence entry and compare its event date with this painting's c. 1700 date. The time gap is part of the interpretation: the object records a later remembered heroine rather than a surviving eyewitness siege scene.",
  "regional-successor-states":
    "Use separately dated regional evidence instead of a single map implying that Mughal authority vanished everywhere in 1707. Formal allegiance, appointment, revenue control and military power can point to different relationships.",
  "provincial-courts":
    "Coins and documents can retain imperial titles while provincial rulers exercise substantial power. Each specimen needs its own mint, date and reading. A later palace from one city cannot represent Bengal, Awadh and Hyderabad together.",
  "maratha-expansion":
    "Pune's surviving palace complex supplies a centre of power, not the limits of Maratha territory. A campaign route, a tribute claim and direct administration must have different symbols on any future map.",
  "jaipur-1727":
    "A decorated palace portal is a detail within a city that developed after its foundation. The street grid requires a plan or aerial view. Later monuments and surface colours should not be silently projected back to 1727.",
  "jaipur-observatory":
    "Ask what each instrument measures and how its orientation makes that measurement possible. A photograph cannot supply the scale or observation time required for a worked example. Avoid calling every curved surface a sundial.",
  "nadir-delhi":
    "Contemporary testimony and later retellings should be distinguished when discussing the invasion and violence. Unsupported casualty totals and treasure valuations are not converted into charts. A route map still needs a dated source.",
  "colachel-1741":
    "The palace view explains Travancore's court setting, not the coastal battle. A future map should locate Colachel and identify the relevant campaign chronology. Do not depict the Dutch defeat as the end of all European activity in India.",
  "plassey-1757":
    "The memorial makes later remembrance visible. The battle's political arrangements and commercial consequences need documents, not inferences from the monument. Troop counts and casualty figures require explicit sources before visual comparison.",
  "panipat-1761":
    "A map should distinguish the approach campaign, supply routes and battlefield positions. Later memorials or heroic paintings cannot independently verify deployment details. The outcome should not be equated with an immediate end to Maratha power.",
  "buxar-1764":
    "The battle and the subsequent negotiations are distinct stages. A treaty image must identify the document, parties and date rather than use a generic seal. Keep the 1765 Diwani grant in its own entry.",
  "diwani-1765":
    "The painting was made around 1818, decades after the grant, and reflects subsequent imperial commemoration. Compare it with the National Archives reference to the dated grant. A staged painted handover is not the original legal document.",
  "panipat-1556":
    "Keep this battle separate from both 1526 and 1761. A coin dated to an accession year would not depict battlefield tactics, and ambiguous numismatic dates should not become an exact visual anchor for the event.",
  "durgavati-1564":
    "The existing record preserves a discrepancy in the published chronology. A modern statue cannot resolve it. A dated inscription, regional map and checked translation would be more useful than an invented likeness.",
  "tarabai-regency":
    "The regency needs dated documentary evidence of authority and campaigns. A portrait made later should be presented as commemoration. Do not assign a fort or palace photograph to Tarabai merely because it is associated with the wider Maratha state.",
};

const source = (id: string, title: string, publisher: string, url: string): HistoricalSource => ({
  id: `early-modern-visual-${id}`,
  title,
  publisher,
  url,
});
export const earlyModernAdditionalSources: Readonly<Record<string, readonly HistoricalSource[]>> = {
  "vijayanagara-krishnadevaraya": [
    source(
      "krishna-dating",
      "Holistic dating: Krishna image and inscription discussion",
      "Government Museum Chennai",
      "https://govtmuseumchennai.org/uploads/topics/16702340773243.pdf",
    ),
    source(
      "krishna-conservation",
      "Krishna Temple Complex, Hampi Archaeological Site",
      "World Monuments Fund",
      "https://www.wmf.org/projects/krishna-temple-complex-hampi-archaeological-site",
    ),
  ],
  "deccan-sultanate-cultures": [
    source(
      "gol-gumbaz",
      "Gol Gumbaz",
      "Archaeological Survey of India, Dharwad Circle",
      "https://www.asidharwadcircle.in/gol-gumbaz/",
    ),
  ],
  "nur-jahan": [
    source(
      "itimad",
      "Tomb of Itimad-ud-Daulah",
      "Agra District, Government of Uttar Pradesh",
      "https://agra.nic.in/tourist-place/tomb-of-itimad-ud-daulah-baby-taj/",
    ),
  ],
  "malik-ambar": [
    source(
      "mughal-arts",
      "The arts of the Mughal Empire: Malik Ambar portrait",
      "Victoria and Albert Museum",
      "https://www.vam.ac.uk/articles/the-arts-of-the-mughal-empire",
    ),
  ],
  "shivaji-coronation": [
    source(
      "shivaji-portrait",
      "Portraits of Indian Princes: Shivaji, 1974,0617,0.11.12",
      "British Museum",
      "https://www.britishmuseum.org/collection/object/A_1974-0617-0-11-12",
    ),
  ],
  "maratha-fort-networks": [
    source(
      "maratha-forts",
      "Maratha Military Landscapes: inscription and component forts",
      "Press Information Bureau, Government of India",
      "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2152148&lang=2&reg=48",
    ),
  ],
  "maratha-expansion": [
    source(
      "pune-palace",
      "Shaniwar Wada",
      "Ministry of Tourism, Incredible India",
      "https://www.incredibleindia.gov.in/en/maharashtra/pune/shaniwar-wada",
    ),
  ],
  "colachel-1741": [
    source(
      "travancore-palace",
      "Padmanabhapuram Palace",
      "Kanniyakumari District, Government of Tamil Nadu",
      "https://kanniyakumari.nic.in/tspot_pp/",
    ),
  ],
  "diwani-1765": [
    source(
      "west-diwani",
      "Foster 29: West's later representation of the Diwani grant",
      "British Library",
      "https://searcharchives.bl.uk/catalog/032-003264600",
    ),
    source(
      "grant-record",
      "Our Heritage: English copy of the farman of 12 August 1765",
      "National Archives of India",
      "https://nationalarchives.nic.in/sites/default/files/2026-01/34.%20Our%20Heritage.pdf",
    ),
  ],
};

export const earlyModernVideoGuides: Readonly<
  Record<string, { site: number; title: string; focus: string }>
> = {
  "goa-1510": {
    site: 234,
    title: "Churches and Convents of Goa",
    focus:
      "Compare the later churches with the conquest date of 1510. Watch for the scale and ornament of religious buildings; this is modern heritage footage, not a reconstruction of the conquest.",
  },
  "humayun-garden-tomb": {
    site: 232,
    title: "Humayun's Tomb, Delhi",
    focus:
      "Follow the approach through the garden towards the raised mausoleum. Compare the filmed setting with the photograph and distinguish the tomb's construction from Humayun's lifetime.",
  },
  "fatehpur-sikri": {
    site: 255,
    title: "Fatehpur Sikri",
    focus:
      "Compare public courts, residential pavilions and religious spaces. The modern film helps explain spatial relationships without proving the location of every historical episode.",
  },
  "taj-mahal": {
    site: 252,
    title: "Taj Mahal",
    focus:
      "Move from the central mausoleum to the wider garden and associated buildings. Compare the film with the still image; the two views do not replace a measured site plan.",
  },
};

export const earlyModernAdditionalImageNeeds: Readonly<Record<string, string>> = {
  "vijayanagara-krishnadevaraya":
    "Add an identified Krishna temple inscription photograph with estampage or checked transcription, publication page and translation distinguishing the campaign and installation dates.",
  "deccan-sultanate-cultures":
    "Add a catalogued Deccani metalwork object from a named court, with accession, date, scale and licence, to compare with Bijapur architecture.",
  "goa-1510":
    "Add a dated historical plan of Old Goa with harbour, churches and fortifications identified; explain later additions and provide repository, shelfmark and reproduction licence.",
  "nanak-kartarpur":
    "Add a securely identified manuscript folio relevant to Guru Nanak with repository permission, shelfmark, copying date and translation; the modern site photograph is already supplied.",
  "humayun-garden-tomb":
    "Add a measured garden plan with north arrow, scale, publication and conservation phases to complement the modern mausoleum photograph.",
  "fatehpur-sikri":
    "Add a licensed site plan distinguishing court, residential and religious spaces, with north arrow, scale and archaeological source; a pavilion photograph is already supplied.",
  "akbar-consolidation":
    "Add a dated farman or securely catalogued portrait of Akbar with accession, translation or attribution and licence; do not use an ambiguously dated coin as an accession-year anchor.",
  "chand-bibi-defence":
    "Add a sourced Ahmadnagar fort plan with documented building phases and the relevant siege account; modern fort and later portrait images are already supplied.",
  "malik-ambar":
    "Add a securely identified administrative document or letter with archive reference, date and translation to accompany the portrait; retain uncertainties in attribution.",
  "jahangir-court":
    "Add a dated court audience folio with artist, manuscript and accession to compare with the formal portrait, distinguishing episode date and painting date.",
  "textile-workshops":
    "Add a licensed technical close-up or process recording with scale, maker and date to explain mordant painting or resist dyeing; preserve the catalogued textiles already supplied.",
  "aurangzeb-reign":
    "Add an identified dated farman with archive reference and a checked translation explaining its locality and purpose; a portrait alone cannot establish policy implementation.",
  "shivaji-coronation":
    "Add a documented view or measured plan of the coronation platform at Raigad and a dated ritual account; keep the supplied 1680-1687 portrait separate from the 1674 ceremony.",
  "maratha-fort-networks":
    "Add a sourced comparative plan of Raigad and Sindhudurg with terrain, scale, date and construction phases; hill and coastal photographs are already supplied.",
  "jaipur-1727":
    "Add a historical street-grid plan with survey date, legend and later additions identified; the palace detail does not show the founding city layout.",
  "jaipur-observatory":
    "Add an instrument-labelled measured drawing with orientation, scale and a worked observation from an authoritative source, to complement the modern photograph.",
  "colachel-1741":
    "Add a sourced coastal battle-location map or documented Colachel memorial photograph; the palace view supplies Travancore context only.",
  "diwani-1765":
    "Add a rights-cleared facsimile of the Diwani farman with archive reference, exact date, original text and translation; the supplied c. 1818 painting is a later representation.",

  "hamzanama-workshop":
    "Add a second securely catalogued Hamzanama folio for comparison, with artist attribution, date, accession, whole-folio view and reuse licence.",
  "mansur-nilgai":
    "Add a rights-cleared image of the same folio's calligraphic reverse with accession, script transcription and its separate date; do not substitute another album page.",
  "shah-jahan-court":
    "Add a documented court audience folio with accession and date to compare with the equestrian portrait; identify the represented occasion separately from the painting date.",
  "kalamkari-cover":
    "Add a museum-authorised technical close-up of this same cover with scale and location key, or a documented process demonstration with maker and recording permissions.",
  "chand-bibi-memory":
    "Add a second catalogued representation of Chand Bibi to compare how her memory changed, retaining each object's production date and attribution.",
};
