import type { HistoricalEvent, HistoricalSource } from "@/types/history";
import { prehistoryGalleries } from "@/data/scenes/prehistory-galleries";

/** Editorial reading aids and precise requests for evidence still missing from the collection. */
export const prehistoryEvidence: Readonly<Record<string, readonly [string, string]>> = {
  "lower-palaeolithic-scaffold": [
    "The Attirampakkam date anchors a particular archaeological sequence. Handaxes and cleavers describe a technology; their shape alone cannot identify the species of their makers or establish the first human arrival in India.",
    "Supply original source pages, photographer, specimen locality, scale and reuse permission for the four existing Lower Palaeolithic images. Add a licensed Attirampakkam excavation section tied to the dated Acheulian deposits.",
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
    "Add an authorised Sandhav excavation photograph and a plate of tools from the approximately 114,000-year occupation. Identify the sampled layer; a modern coastline map must be labelled as modern.",
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
    "Optional addition: a permitted photograph of an excavated microblade core with specimen number and scale, cross-referenced to its layer in the excavation report.",
  ],
  "jwalapuram-rockshelter": [
    "Locality 9 is a rockshelter sequence with its own chronology. Its tools and ornaments should not be merged with the separate Jwalapuram ash-section evidence merely because both share a place name.",
    "Add licensed photographs or report figures from Jwalapuram Locality 9: shelter entrance, stratigraphy, and catalogued beads or microliths. Record which layer each object belongs to.",
  ],
  "mesolithic-regional-overview": [
    "Regional overview dates are a teaching range, not a date for every shelter painting. Bhimbetka preserves art from multiple periods; an individual photographed panel needs its own attribution and dating argument.",
    "Add a permitted Bhimbetka shelter plan or panel catalogue identifying the exact shelter and proposed painting phase. A modern photograph alone cannot establish a Mesolithic date.",
  ],
  "lahuradewa-rice-use": [
    "Rice use, cultivation and domestication are different claims. A location map helps compare sites, but the stronger botanical claims depend on identified remains, their archaeological context and the dating evidence.",
    "Add a licensed Lahuradewa grain or spikelet-base micrograph with scale, identification, sampled context and dating method. The regional map does not replace this botanical evidence.",
  ],
  "mehrgarh-aceramic-cemetery": [
    "The 2025 study models a sampled cemetery sequence. The plan shows where the sampled graves lie; the probability plot shows chronological uncertainty. Neither figure alone supplies a date for all settlement activity at Mehrgarh.",
    "Optional addition: a permitted photograph or plan of the relevant aceramic settlement phase, clearly distinguished from the cemetery. Mehrgarh is in present-day Pakistan and is included as subcontinental context for Indian prehistory.",
  ],
  "bagor-mesolithic": [
    "Bagor represents a particular settlement sequence within a much wider regional history. Its phase dates should remain attached to the excavated deposits rather than being used as universal boundaries for the Mesolithic.",
    "Add a licensed Bagor, Rajasthan, Phase I floor plan or excavation photograph and a labelled microlith plate. Avoid unrelated images of places with similar names.",
  ],
  "balathal-ahar-banas": [
    "The excavation image illustrates a specific context within a long-lived settlement. The burial association around 2000 cal BCE is later than the beginning of the displayed occupation range; it should not be used to date every structure.",
    "Optional addition: a licensed Ahar-Banas pottery plate from Balathal, with phase, specimen numbers and scale, to complement the excavation photograph.",
  ],
  "chopani-mando-late-phase": [
    "The map locates Chopani Mando within a comparative plant-evidence discussion. Settlement phases and botanical claims need separate supporting evidence; being mapped alongside rice sites does not establish domesticated rice here.",
    "Add a licensed late-phase Chopani Mando hut-floor plan or pottery plate, with its phase and chronological association. Keep the late-phase dating distinct from the site's earlier sequence.",
  ],
  "harappa-ravi-phase": [
    "The Ravi phase belongs to Harappa's early settlement sequence. Later urban streets, seals and monuments cannot automatically illustrate this earlier phase, even when they come from the same archaeological site.",
    "Request permission for the Ravi-phase pottery fragments shown at https://www.harappa.com/slide/ravi-phase-pottery-fragments or supply an equivalent licensed HARP catalogue photograph with phase and object details.",
  ],
  "burzahom-neolithic": [
    "Burzahom's pits, structures and later remains must be read by phase. A photograph of standing megaliths is not automatically evidence for the earliest Neolithic occupation or for the function of a particular pit.",
    "Add an authorised Burzahom Neolithic pit section or measured plan, with excavation phase and scale. Label any modern site photograph separately from later megalithic features.",
  ],
  "southern-neolithic-ashmounds": [
    "Geophysical survey offers a way to investigate buried features without exposing their whole extent. The Brahmagiri plot is a modern interpretation of subsurface measurements, not an excavation photograph or a direct date for ash formation.",
    "Add a licensed field photograph or excavated section of a named southern Neolithic ashmound, with site, scale and phase. Do not use the geophysical model as a reconstruction of all ashmounds.",
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
      { tag: `IMAGE_${event.id.replaceAll("-", "_").toUpperCase()}`, instruction: evidence[1] },
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
