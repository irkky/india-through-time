import type { HistoricalEvent, HistoricalSource } from "@/types/history";
import { prehistoryGalleries } from "@/data/scenes/prehistory-galleries";
import {
  lowerPalaeolithicGallery,
  middlePalaeolithicGallery,
} from "@/data/scenes/palaeolithic-gallery";

/** Editorial reading aids and precise requests for evidence still missing from the collection. */
export const prehistoryEvidence: Readonly<Record<string, readonly [string, string?]>> = {
  "lower-palaeolithic-scaffold": [
    "The Attirampakkam date anchors a particular archaeological sequence. The two credited collection photographs identify tools with Attirampakkam but do not document their specimen numbers, excavation layers or individual ages. Handaxes and cleavers describe a technology; their shape alone cannot identify the species of their makers or establish the first human arrival in India.",
    "Supply original source pages, photographer, specimen locality, scale and reuse permission for the four earlier Lower Palaeolithic images. Still add a licensed Attirampakkam excavation-section photograph or measured profile tied specifically to the dated Acheulian deposits; the two museum or collection photographs do not complete this request.",
  ],
  "attirampakkam-middle-palaeolithic": [
    "The dated interval describes technological change within the Attirampakkam sequence. Prepared cores record decisions about removing flakes; they are not evidence that every South Asian community changed tools at the same time.",
    "Identify the provenance and reuse terms of all six supplied images. Add the published Attirampakkam stratigraphic sequence or a site-specific specimen plate, preserving scale, layer labels and dating uncertainties.",
  ],
  "singi-talav-acheulian": [
    "Read the artefacts alongside their excavation layers. The published plate includes both stratified finds and material from an eroding edge; only the documented contexts can be compared directly with the layer chronology.",
    "Optional addition: a licensed photograph of the excavated Singi Talav trench, identified by trench number and capture date. Keep it separate from the artefact plate's dating claims.",
  ],
  "sandhav-coastal-occupation": [
    "Sandhav provides a dated occupation near a changing coastal landscape. A site's present-day relationship to the coast is not a map of the ancient shoreline, nor does proximity alone demonstrate a coastal migration route.",
    "The gallery now includes the project-supplied tool montage, excavation landscape and research location map with owner-confirmed permission. Treat the montage as a teaching overview rather than a published specimen plate: it combines multiple tool types and does not establish that every illustrated object came from the approximately 114,000-year-old horizon.",
  ],
  "dhaba-toba-sequence": [
    "The sediment profiles place the volcanic signal within a dated sequence. Compare their uncertainties rather than treating the eruption anchor as the age of every artefact. The companion tool plate spans several occupations.",
    "Optional addition: a licensed field photograph of Dhaba 1 with the relevant section identified. Do not substitute the publication's third-party satellite imagery without separate permission.",
  ],
  "jwalapuram-toba": [
    "Tools below and above the ash allow a comparison across the eruption. Similar technology supports a discussion of regional persistence, but does not by itself identify the makers or prove an uninterrupted occupation.",
    "Add a permitted Jwalapuram ash-section photograph or measured profile identifying the pre- and post-Toba tool-bearing layers. Do not use Dhaba's section as a substitute.",
  ],
  "dhaba-microliths": [
    "The microlithic evidence belongs within Dhaba's longer sequence. The gallery identifies small-tool examples from Dhaba 3, while retaining the full comparative plate so that earlier Levallois technology remains distinguishable.",
    "Optional addition: a licensed close-up of a catalogued Dhaba microlith with its excavation unit, scale and dating association. Do not label every object on the comparative plate as 48,000 years old.",
  ],
  "mehtakheri-microblades": [
    "The excavation photograph supplies the sedimentary context missing from an isolated tool drawing. Luminescence estimates concern sediment burial; surface finds and excavated pieces must retain their different provenances.",
  ],
  "jwalapuram-rockshelter": [
    "Locality 9 is a rockshelter sequence with its own chronology. Its tools and ornaments should not be merged with the separate Jwalapuram ash-section evidence merely because both share a place name.",
    "Add licensed photographs or report figures from Jwalapuram Locality 9: shelter entrance, stratigraphy, and catalogued beads or microliths. Record which layer each object belongs to.",
  ],
  "mesolithic-regional-overview": [
    "Regional overview dates are a teaching range, not a date for every shelter painting. The gallery now separates a specifically identified modern view of Rock Shelter 8 from a photographed painted surface. Neither photograph dates the art; Bhimbetka preserves activity and painting across multiple periods.",
    "Add a permitted Bhimbetka shelter plan or panel catalogue identifying the exact shelter and proposed painting phase. A modern photograph alone cannot establish a Mesolithic date.",
  ],
  "lahuradewa-rice-use": [
    "Rice use, cultivation and domestication are different claims. The gallery now separates Period IA plant remains from the wider Period IB crop assemblage. The published plates identify specimens and include millimetre scales, but their archaeological contexts and dating evidence still need to be read with the excavation report.",
    "Confirm reuse permission for the two Lahuradewa archaeobotanical plates. If replacing them, add a licensed grain or spikelet-base micrograph with scale, identification, sampled context and dating method.",
  ],
  "mehrgarh-aceramic-cemetery": [
    "The 2025 study models a sampled cemetery sequence. The plan shows where the sampled graves lie; the probability plot shows chronological uncertainty. Neither figure alone supplies a date for all settlement activity at Mehrgarh.",
  ],
  "bagor-mesolithic": [
    "Bagor represents a particular settlement sequence within a much wider regional history. Its phase dates should remain attached to the excavated deposits rather than being used as universal boundaries for the Mesolithic.",
    "The labelled Bagor microlith plate is now present. Still add a licensed Bagor, Rajasthan, Phase I floor plan or excavation photograph with its trench, phase and scale; avoid unrelated places with similar names.",
  ],
  "balathal-ahar-banas": [
    "The osteological plate illustrates burial 1997-1, a specific later context within Balathal's long sequence. Its approximately 2000 cal BCE association must not date the settlement's earlier architecture or pottery. The gallery separately identifies the modern distribution map and Chalcolithic ceramic evidence.",
    "Confirm reuse permission for the ASI Balathal pottery plate. Keep the burial plate, pottery and modern distribution map distinct; none is a general photograph of the settlement's full occupation.",
  ],
  "chopani-mando-late-phase": [
    "The map locates Chopani Mando within a comparative plant-evidence discussion. Settlement phases and botanical claims need separate supporting evidence; being mapped alongside rice sites does not establish domesticated rice here.",
    "Add a licensed late-phase Chopani Mando hut-floor plan or pottery plate, with its phase and chronological association. The supplied plan and decorated-pottery page were not displayed because they could not be matched to Chopani Mando; one is explicitly headed Further Excavations at Mansar.",
  ],
  "harappa-ravi-phase": [
    "The Ravi phase belongs to Harappa's early settlement sequence. Later urban streets, seals and monuments cannot automatically illustrate this earlier phase, even when they come from the same archaeological site.",
    "Request permission for the Ravi-phase pottery fragments shown at https://www.harappa.com/slide/ravi-phase-pottery-fragments or supply an equivalent licensed HARP catalogue photograph with phase and object details.",
  ],
  "burzahom-neolithic": [
    "Burzahom's pits, structures, pottery and later remains must be read by phase. The gallery now separates the museum vessel from modern published photographs of excavated pits; the photographs do not by themselves provide a measured stratigraphic sequence.",
    "Still add an authorised Burzahom Neolithic pit section or measured plan with excavation phase and scale. The supplied roofed-dwelling illustration is a teaching reconstruction, not archaeological stratigraphy, so it is not displayed as evidence.",
  ],
  "southern-neolithic-ashmounds": [
    "The licensed Kudathini photographs document the modern mound and exposed surface material; they do not independently establish phase, original dimensions or burning sequence. The Brahmagiri plot is a modern interpretation of subsurface measurements, not an excavation photograph or direct date for ash formation.",
  ],
  "harappa-kot-diji-phase": [
    "This entry concerns the Kot Diji phase at Harappa. The phase name should not cause an image of the separate Kot Diji site, or a later Mature Harappan object, to be presented as a find from this Harappa context.",
    "Add a permitted Harappa Kot Diji-phase street, wall or pottery photograph from the excavation catalogue. Identify site, phase, trench and photographer; retain HARP or publisher permission.",
  ],
  "gufkral-aceramic": [
    "The dated aceramic interval is part of Gufkral's local sequence. Comparison with Burzahom is useful, but the two sites' plans and chronologies are not interchangeable; each feature needs its own excavation context.",
    "Add a licensed Gufkral aceramic pit plan, section or tool plate with phase, scale and report reference. Do not substitute a Burzahom photograph.",
  ],
  "kayatha-culture": [
    "Kayatha is a regional archaeological tradition represented by particular assemblages. Pottery and ornaments help compare communities, but a decorative object needs a documented find context before it can support a chronological claim.",
    "Add a licensed Kayatha pottery, copper-object or bead plate with site, phase, scale and museum or excavation catalogue number.",
  ],
  "mahagara-neolithic": [
    "Mahagara's location is shown within a regional review of plant evidence. The map is geographical context; claims about cultivation or domestication must be checked against the site's botanical remains and their identification.",
    "Add a licensed Mahagara excavation plan or archaeobotanical plate with sample context and scale. Identify which evidence supports cultivation, domestication or animal management separately.",
  ],
  "malwa-villages": [
    "The displayed village range should be illustrated by phase-matched finds. An object labelled simply Navdatoli may belong to a different occupation; its catalogue date matters as much as its site name.",
    "Add a licensed Navdatoli or other Malwa settlement plan or pottery plate securely associated with the displayed phase. The Commons goblet labelled 1300 BCE is outside this entry's 1700–1500 BCE range.",
  ],
  "inamgaon-settlement": [
    "Inamgaon includes several occupation phases. House plans, burials and craft evidence must keep their phase labels so that changes within the settlement are visible rather than compressed into one timeless village reconstruction.",
    "Add a permitted Deccan College excavation plan and pottery plate from Inamgaon, distinguishing Malwa, Early Jorwe and Late Jorwe contexts. Include scale, figure number and reuse permission.",
  ],
};

export function enrichPrehistoryEvent(event: HistoricalEvent): HistoricalEvent {
  const evidence = prehistoryEvidence[event.id];
  if (!evidence) return event;
  const gallery = prehistoryGalleries[event.id] ?? [];
  const visualSources: HistoricalSource[] = Array.from(
    new Map(gallery.map((image) => [image.sourceUrl, image])).values(),
  ).map((image, index) => ({
    id: `${event.id}-visual-source-${index + 1}`,
    title: `${image.credit}: published visual evidence`,
    url: image.sourceUrl,
  }));
  const viewing: HistoricalSource[] =
    event.id === "mesolithic-regional-overview"
      ? [
          {
            id: "nptel-bhimbetka-viewing",
            title:
              "Watch: Pre-historic art — Rock painting of Bhimbetka (Week 2, Introduction to Indian Art — An Appreciation)",
            author: "Soumik Nandy Majumdar",
            publisher: "IIT Kanpur / NPTEL",
            url: "https://nptel.ac.in/courses/109104102",
          },
        ]
      : [];
  return {
    ...event,
    sources: [...event.sources, ...visualSources, ...viewing],
    details: [
      ...(event.details ?? []),
      {
        title: "Reading the evidence",
        text: evidence[0],
        sourceIds: [...event.sources, ...visualSources].map((source) => source.id),
      },
      ...(viewing.length
        ? [
            {
              title: "Further viewing · Bhimbetka",
              text: "Open the IIT Kanpur / NPTEL course and choose the Week 2 lecture on Bhimbetka rock painting. This optional art-history lecture provides context; it is not a dating source for the photographed panel.",
              sourceIds: viewing.map((source) => source.id),
            },
          ]
        : []),
    ],
    imageNeeds: [
      ...(event.imageNeeds ?? []),
      ...(evidence[1] &&
      !(
        gallery.length ||
        (event.id === "lower-palaeolithic-scaffold" && lowerPalaeolithicGallery.length) ||
        (event.id === "attirampakkam-middle-palaeolithic" && middlePalaeolithicGallery.length)
      )
        ? [
            {
              tag: `IMAGE_${event.id.replaceAll("-", "_").toUpperCase()}`,
              instruction: evidence[1],
            },
          ]
        : []),
    ],
    media: [
      ...(event.media ?? []),
      ...gallery.map((image, index) => ({
        id: `${event.id}-research-image-${index + 1}`,
        kind: "image" as const,
        alt: image.alt,
        caption: image.caption,
        credit: image.credit,
        license: image.license,
        sourceUrl: image.sourceUrl,
        historicalContext: image.caption,
      })),
    ],
  };
}
