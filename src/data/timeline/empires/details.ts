import type { HistoricalSource } from "@/types/history";
import { empireSources as s } from "./sources";

type Detail = { title: string; text: string; source: HistoricalSource; locator: string };
const note = (title: string, text: string, source: HistoricalSource, locator: string): Detail => ({
  title,
  text,
  source,
  locator,
});

/** Expanded reading stays separate from short, scroll-paced scene copy. */
export const empireDetails: Readonly<Record<string, readonly Detail[]>> = {
  mahajanapadas: [
    note(
      "Sixteen names, changing political worlds",
      "A commonly taught list comprises Anga, Magadha, Kashi, Kosala, Vajji, Malla, Chedi, Vatsa, Kuru, Panchala, Matsya, Shurasena, Ashmaka, Avanti, Gandhara and Kamboja. These lists are not a census. Ashmaka extends the discussion beyond the Ganga plain.",
      s.states,
      "Section 2.1 and Map 1",
    ),
    note(
      "What an assembly tells us",
      "Shared authority among an elite did not mean equal rights for everyone. Ask who could participate in an assembly.",
      s.states,
      "Section 2.1: ganas and sanghas",
    ),
  ],
  "ganga-urban-life": [
    note(
      "Recognising Northern Black Polished Ware",
      "The British Museum describes a fine, wheel-thrown ceramic with thin walls and a glossy dark surface, produced through controlled firing. Its collection terminology places production broadly around 600–200 BCE, especially 400–300 BCE. A site must still be dated from its own stratigraphy and associated material.",
      s.pottery,
      "Scope note",
    ),
    note(
      "Objects connect distant settlements",
      "Finds extend beyond the middle Ganga plain into Gandhara, peninsular India and neighbouring regions. Distribution can suggest movement of objects and contacts, but it cannot on its own reveal the route, merchant, price or identity of the person using a vessel. A labelled excavation photograph is more informative than an unidentified black bowl.",
      s.pottery,
      "Scope note: distribution",
    ),
  ],
  "magadha-rise": [
    note(
      "Resources and geography",
      "Magadha combined productive land with access to iron-bearing areas, elephants and river transport. Rajagriha occupied a hill-ringed setting; Pataliputra's river connections offered different advantages. These conditions help explain political possibilities without making expansion inevitable.",
      s.states,
      "Section 2.2: Magadha",
    ),
    note(
      "Landscape is not a reign date",
      "The Rajgir photograph provides landscape context. Connecting a visible wall phase to Bimbisara or Ajatashatru requires a dated excavation or survey.",
      s.states,
      "Sections 2.2 and 8: interpreting evidence",
    ),
  ],
  "mahavira-jain-traditions": [
    note(
      "Five vows and different commitments",
      "Jain ascetic discipline includes non-harming, truthfulness, not taking what is not given, chastity and non-attachment. Renunciants follow stricter obligations than householders. Non-violence concerns living beings broadly, not only relations between humans.",
      s.jain,
      "Ethics",
    ),
    note(
      "Liberation and the living soul",
      "Jain thought distinguishes living souls, or jivas, from non-living reality. Karma binds the soul, while discipline and release from attachment are directed toward liberation. This differs from Buddhist critiques of a permanent self: the two traditions should not be merged into a single doctrine merely because both value restraint.",
      s.jain,
      "Metaphysics; Ethics",
    ),
  ],
  "taxila-northwest": [
    note(
      "Read a town through everyday remains",
      "Bhir's exposed houses are separated by irregular streets and lanes. The protected-site inventory records storage jars, pottery, terracotta toys, beads, metal objects and other domestic material. These finds make household activity visible alongside the better-known stories of rulers and armies.",
      s.bhir,
      "Description; recovered objects",
    ),
    note(
      "Keep the settlement phases separate",
      "Bhir, Sirkap and Sirsukh are distinct settlement components of Taxila. An attractive photograph of Sirkap's planned streets cannot substitute for Bhir's earlier settlement. Images should name the mound and the feature shown, with a modern capture date and an independently sourced ancient phase.",
      s.taxila,
      "Outstanding Universal Value: settlement sequence",
    ),
  ],
  "buddha-early-sangha": [
    note(
      "Suffering and the path of practice",
      "The Four Noble Truths address suffering, its arising, its cessation and the path toward cessation. The eightfold path brings together understanding and intention, speech and conduct, livelihood, effort, mindfulness and concentration. It is a programme of practice rather than a list of disconnected beliefs.",
      s.buddha,
      "Four Noble Truths; Buddhist Ethics",
    ),
    note(
      "Sources, community and historical portraits",
      "Early teachings were transmitted orally. Monks, nuns and household supporters did not all undertake identical commitments. Later manuscripts and sculptures can illustrate the history of Buddhist transmission, but their dates must be visible: they are not surviving photographs or contemporary portraits of Gautama.",
      s.buddha,
      "1b Sources; 5 Buddhist Ethics",
    ),
  ],
  "early-punchmarked-money": [
    note(
      "A catalogue example with measurements",
      "British Museum coin 1869,1203.48 is silver, weighs 3.51 grams and measures 22.5 by 10 millimetres. Its catalogue records five obverse punches and one bold reverse mark, with a broad 300–150 BCE production range. This later comparison demonstrates continued use beyond the earliest coinage horizon.",
      s.coin,
      "Description; production date; dimensions",
    ),
    note(
      "Compare the photograph carefully",
      "The included Commons photograph is a separate specimen, not British Museum 1869,1203.48. Its filename says Mauryan while its description attributes it to the Nandas. It is used to show punching and irregular shape, without adopting an exact dynasty, weight or date. The museum measurements must not be transferred to it.",
      s.coin,
      "Object-specific catalogue identification; compare the gallery's separate provenance",
    ),
  ],
  "alexander-taxila": [
    note(
      "A visit within an existing urban history",
      "Taxila was already a settlement when Alexander arrived in 326 BCE. The encounter belongs within the history of Bhir rather than the later planned city of Sirkap. Using a later city's plan to illustrate his arrival would compress different archaeological phases into one scene.",
      s.bhir,
      "Description: settlement and Alexander's visit",
    ),
    note(
      "What a campaign map should distinguish",
      "A useful visual would separate an attested visit from a battle, a negotiated relationship and a claim of territorial control. The existing diagram only explains connections; it supplies no invented marching route. A researched itinerary can be added in the tagged map space.",
      s.taxila,
      "Outstanding Universal Value: Bhir and later settlements",
    ),
  ],
  "mauryan-empire": [
    note(
      "Governing from several centres",
      "Pataliputra, Taxila, Ujjayini, Tosali and Suvarnagiri are identified as major political centres. Distance and regional conditions complicate any picture of identical administration everywhere. Roads, rivers and communication mattered to maintaining authority.",
      s.states,
      "Section 3.2: administering the empire",
    ),
    note(
      "Different kinds of historical testimony",
      "Megasthenes' account survives through later writers rather than as an intact contemporary book. The Arthashastra is a treatise with a complex textual history, not a document that can simply be overlaid on every Mauryan province. Compare prescriptions about government with inscriptions and excavated remains before drawing an organisational chart.",
      s.states,
      "Section 3.1: sources for the Mauryas",
    ),
  ],
  "mauryan-ringstone": [
    note(
      "A compact object record",
      "Accession 1987.142.391 identifies this fragment precisely. The museum lists stone as the material and sculpture as its classification; it entered the collection as Samuel Eilenberg's gift in 1987. The acquisition year is modern collection history, not the date of manufacture.",
      s.ring,
      "Artwork Details: medium, classification, credit and accession",
    ),
    note(
      "Observe before reconstructing",
      "The surviving fragment preserves carved figures and plant motifs around a central opening. Compare the intact edges with the broken area in the photograph. The teaching silhouette is deliberately simpler: it must not be read as a restoration of missing carving or proof of how the object was used.",
      s.ring,
      "Collection photograph and Artwork Details",
    ),
  ],
  "ashoka-rule": [
    note(
      "Languages and audiences",
      "Ashoka's inscriptions commonly use Prakrit and Brahmi; northwestern records also employ Greek and Aramaic. Languages and scripts are different categories: a language names what is expressed, while a script names the writing system. Regional variation matters when comparing the inscriptions.",
      s.ashoka,
      "Accessible extract: languages and scripts",
    ),
    note(
      "Cross-checking the chronology",
      "References to Hellenistic rulers provide external chronological connections. They help historians situate Ashoka's reign, but a ruler mentioned in an inscription was not necessarily his subject. An inscription's message of influence or moral achievement is not an imperial boundary map.",
      s.ashoka,
      "Accessible extract: Hellenistic contemporaries",
    ),
  ],
  "kalinga-war": [
    note(
      "Two kinds of Kalinga evidence",
      "The war and its reported losses appear in Major Rock Edict XIII. The separate Kalinga edicts address officials and the treatment of people under government. Their concerns include impartial justice and avoiding unjust imprisonment. These are related sources, not interchangeable copies of one text.",
      s.edicts,
      "Major Rock Edict XIII; Separate Kalinga Edict I",
    ),
    note(
      "Why the image caption matters",
      "The Dhauli photograph locates an edict site in Kalinga. It does not show a battle or the casualty passage of Edict XIII: Dhauli's inscriptional selection differs from the full major-rock series. Treat the image as site context and use the cited translation to examine the war narrative.",
      s.edicts,
      "Notes 1 and 30; Kalinga Rock Edicts",
    ),
  ],
  "ashoka-dhamma": [
    note(
      "Policies to compare",
      "Rock Edict II discusses care for humans and animals; V describes dhamma officials; XII encourages restraint when speaking about other traditions. Reading these separately shows the programme's range rather than reducing dhamma to a single slogan.",
      s.edicts,
      "Major Rock Edicts II, V, XII",
    ),
    note(
      "Persuasion and royal power",
      "A call for consideration remains a royal command. Ask who is addressed and what conduct is requested. Policy statements do not directly reveal ordinary people's responses.",
      s.edicts,
      "Major Rock Edicts VI, XIII; Pillar Edict VII",
    ),
  ],
  "barabar-ajivikas": [
    note(
      "Sudama's two connected spaces",
      "The heritage record describes a rectangular outer room connected through a narrow passage to a circular inner chamber. The outer space has a vaulted roof and the inner chamber a domed ceiling. This spatial arrangement is more informative than treating all Barabar caves as identical hollows.",
      s.caves,
      "Section 3.4: Sudama cave",
    ),
    note(
      "Dedication is evidence of patronage",
      "Sudama's dedication names the Ajivikas and Ashoka's twelfth year since consecration. Nearby caves have their own inscriptions and building histories. The new photograph identifies Sudama's exterior; it is not an interior survey, an acoustic measurement or a dated plan of every cave.",
      s.caves,
      "Sections 3.3–3.4: inscriptions and architecture",
    ),
  ],
  "sanchi-mauryan-core": [
    note(
      "A sequence of construction",
      "UNESCO distinguishes the early brick stupa and Ashokan pillar from enlargement under the Shungas and later ornamentation associated with Satavahana patronage. Subsequent shrines and monastic buildings extended the site's history far beyond the Mauryan period.",
      s.sanchi,
      "Outstanding Universal Value: architectural phases",
    ),
    note(
      "Reading the present-day photograph",
      "The dome, enclosure, paths and carved gateway belong to a monument with successive phases. A visitor sees the accumulated result, not a single third-century BCE design. The dashed teaching outline explains the idea of enlargement; only a published phase plan should be used to assign a particular wall or gateway to a date.",
      s.sanchi,
      "Brief synthesis; integrity and authenticity",
    ),
  ],
  "ashoka-lumbini": [
    note(
      "A visit and a fiscal provision",
      "The pillar text dates the visit to the twentieth year after consecration. In the cited translation it also records a tax exemption and a reduced produce share for Lumbini. The record concerns both recognition of a sacred place and a royal administrative provision.",
      s.edicts,
      "Minor Pillar Edict I; note 44",
    ),
    note(
      "Two dates must stay separate",
      "The monument is evidence for recognition of the birthplace in Ashoka's time. It is not a contemporary birth register for the Buddha. The modern photograph likewise has its own date, 2013, and shows a protected site with present-day surroundings.",
      s.lumbini,
      "Brief synthesis; authenticity",
    ),
  ],
  "mauryan-successors": [
    note(
      "Continuity visible at Sanchi",
      "Sanchi's enlargement and later additions show how religious places could attract patronage across changes in political rule. This is a concrete example of continuity, not evidence that every former Mauryan province followed the same trajectory.",
      s.sanchi,
      "Outstanding Universal Value: successive patrons",
    ),
    note(
      "Build the next comparison region by region",
      "The dynastic endpoint around 185 BCE is a useful navigation anchor. The next step is to compare dated inscriptions, coin series and settlement sequences for individual regional powers. An empty map is preferable to colouring the entire former empire as the territory of a single successor.",
      s.maurya,
      "Dynastic chronology; use with regional evidence",
    ),
  ],
};
