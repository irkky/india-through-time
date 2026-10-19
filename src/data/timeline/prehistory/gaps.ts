/** Editorial backlog only. Null dates never enter the playable timeline. */
export interface PrehistoryGap {
  readonly periodId: string;
  readonly topic: string;
  readonly missing: readonly string[];
  readonly date: null;
}

export const prehistoryGaps: readonly PrehistoryGap[] = [
  {
    periodId: "before-history",
    topic: "Optional geology prologue",
    date: null,
    missing: [
      "Choose whether plate tectonics belongs in this human-history chapter.",
      "Add a geological source, dated reconstruction and licensed map before creating a timed event.",
    ],
  },
  {
    periodId: "lower-palaeolithic",
    topic: "Narmada / Hathnora hominin and earlier tool claims",
    date: null,
    missing: [
      "Qualified fossil context is now in the reader; a timed scene still needs a defensible specimen-specific chronology and licensed imagery.",
      "Do not assign an exact year or species from an unsourced summary.",
    ],
  },
  {
    periodId: "middle-palaeolithic",
    topic: "Jwalapuram measured-section assets",
    date: null,
    missing: [
      "The sourced event and conceptual stratigraphy are implemented. Add a licensed measured section with layer identifiers to replace the schematic.",
      "Keep regional technological continuity separate from claims about modern-human migration.",
    ],
  },
  {
    periodId: "upper-palaeolithic",
    topic: "Patne ornaments and engraved eggshell",
    date: null,
    missing: [
      "A sourced contextual account is in the reader; a specimen-specific scene still needs the excavation citation, specimen number, dated context and dating method.",
      "Licensed specimen image with scale; do not copy a generic bead photograph.",
    ],
  },
  {
    periodId: "mesolithic",
    topic: "Bhimbetka painting scene and Ganges burials",
    date: null,
    missing: [
      "For a timed painting scene: shelter/panel identifier and defensible dating range.",
      "For Sarai Nahar Rai, Mahadaha or Damdama: excavation report, calibrated dates and burial context.",
      "Licensed photograph or clearly labelled interpretive illustration.",
    ],
  },
  {
    periodId: "neolithic",
    topic: "Regional expansion",
    date: null,
    missing: [
      "Mahagara and Gufkral now have qualified phase records. Add original sample tables and calibration details; Chirand and Daojali Hading still need verified phase dates.",
      "Separate plant-use evidence from domestication and record which phase a date describes.",
      "Review Mehrgarh's competing chronologies before changing its date anchor.",
    ],
  },
  {
    periodId: "chalcolithic",
    topic: "Kayatha, Malwa and Jorwe phase detail",
    date: null,
    missing: [
      "Kayatha and Malwa now use explicitly labelled teaching chronologies. Add newer excavation-backed calibrated dates, and finer Jorwe phases at Inamgaon.",
      "Continue sorting by start date so later regional prehistory can overlap ancient-history events.",
    ],
  },
  {
    periodId: "transition-to-early-urban-harappan-societies",
    topic: "Early Harappan regional comparisons",
    date: null,
    missing: [
      "Excavation-backed phases for Kalibangan, Kunal, Bhirrana and other selected sites.",
      "Distinguish an early settlement from a mature Harappan city; explain disputed early dates.",
    ],
  },
];
