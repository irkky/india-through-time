/** Explicit editorial image slots; a diagram is never silently treated as a photograph. */
export const empireImageNeeds: Readonly<Record<string, { tag: string; instruction: string }>> = {
  mahajanapadas: {
    tag: "ADD_MAHAJANAPADA_MAP",
    instruction:
      "A sourced sixth–fourth-century BCE map with state names, rivers, a date legend and uncertain borders.",
  },
  "ganga-urban-life": {
    tag: "ADD_NBPW_EXCAVATION_IMAGE",
    instruction:
      "A Northern Black Polished Ware vessel or sherd plate with excavation site, layer, scale and catalogue date.",
  },
  "magadha-rise": {
    tag: "ADD_PATALIPUTRA_PHASE_PLAN",
    instruction:
      "A published Rajgir–Pataliputra location or excavation plan. The Rajgir wall photograph is already included; date individual construction phases separately.",
  },
  "mahavira-jain-traditions": {
    tag: "ADD_JAIN_CONTEXT_IMAGE",
    instruction:
      "A licensed Jain manuscript folio or Mahavira sculpture with accession and actual creation date. Clearly identify it as later reception, not a lifetime portrait.",
  },
  "taxila-northwest": {
    tag: "ADD_BHIR_MOUND_PHOTO",
    instruction:
      "An identified Bhir Mound street or house photograph with photographer and phase reference. Do not substitute Sirkap.",
  },
  "buddha-early-sangha": {
    tag: "ADD_EARLY_BUDDHIST_CONTEXT",
    instruction:
      "A securely identified early Buddhist site plan, or a later narrative relief with its actual date and scene identification; no invented contemporary portrait.",
  },
  "early-punchmarked-money": {
    tag: "ADD_CATALOGUED_COIN_PLATE",
    instruction:
      "A museum or excavation coin plate with both sides, accession, weight, scale and catalogue date. The included teaching specimen has no secure catalogue attribution.",
  },
  "alexander-taxila": {
    tag: "ADD_TAXILA_ENCOUNTER_MAP",
    instruction:
      "A scholarly 326 BCE itinerary map marking Taxila and distinguishing visits, battles and uncertain routes.",
  },
  "mauryan-empire": {
    tag: "ADD_MAURYAN_PHASE_MAP",
    instruction:
      "Dated maps for Chandragupta, Bindusara and Ashoka, marking major centres and uncertain limits rather than uniform control.",
  },
  "mauryan-ringstone": {
    tag: "ADD_RINGSTONE_DETAIL_VIEW",
    instruction:
      "An additional permission-cleared close-up of Met 1987.142.391 with scale or museum-supplied view. Do not use a different ring stone as the reverse of this fragment.",
  },
  "ashoka-rule": {
    tag: "ADD_IDENTIFIED_ASHOKAN_PILLAR",
    instruction:
      "A located Ashokan pillar or capital photograph, with monument name, surviving inscription and modern conservation context.",
  },
  "kalinga-war": {
    tag: "ADD_ROCK_EDICT_XIII_PLATE",
    instruction:
      "A photograph or estampage of an identified version of Major Rock Edict XIII. Dhauli is included as site context and does not contain this passage.",
  },
  "ashoka-dhamma": {
    tag: "ADD_EDICT_SCRIPT_COMPARISON",
    instruction:
      "Verified Brahmi, Kharosthi, Greek and Aramaic inscription samples, each named and linked to a scholarly transcription; include translations separately.",
  },
  "barabar-ajivikas": {
    tag: "ADD_SUDAMA_INTERIOR_PLAN",
    instruction:
      "A measured Sudama plan and an interior photograph showing its rectangular and circular chambers. The exterior is included.",
  },
  "sanchi-mauryan-core": {
    tag: "ADD_SANCHI_CONSTRUCTION_PHASES",
    instruction:
      "A published phase drawing separating the Mauryan brick core, later enlargement and gateways. A present-day photograph is already included.",
  },
  "ashoka-lumbini": {
    tag: "ADD_LUMBINI_INSCRIPTION_DETAIL",
    instruction:
      "A legible close-up or estampage of the pillar inscription, with transcription and regnal-year reference; the overall pillar photograph is included.",
  },
  "mauryan-successors": {
    tag: "ADD_POST_MAURYAN_REGIONAL_MAP",
    instruction:
      "A dated regional map after c. 185 BCE, distinguishing different powers and contested areas rather than one successor empire.",
  },
};
