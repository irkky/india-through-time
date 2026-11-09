export type PrehistoryDiagram =
  | "network"
  | "pillar"
  | "coin"
  | "stupa"
  | "cave"
  | "ringstone"
  | "water"
  | "weights"
  | "seal"
  | "oral"
  | "furnace"
  | "pottery"
  | "acheulian"
  | "core"
  | "strata"
  | "blades"
  | "camp"
  | "rice"
  | "village"
  | "pit"
  | "ashmound"
  | "beads"
  | "town";

export interface PrehistoryGalleryImage {
  readonly src: string;
  readonly title: string;
  readonly alt: string;
  readonly caption: string;
  readonly category: "Artefact" | "Site photograph" | "Teaching example" | "Map" | "Illustration";
  readonly credit?: string;
  readonly sourceUrl?: string;
  readonly license?: string;
  readonly licenseUrl?: string;
}

export interface PrehistoryExhibit {
  readonly browseImages?: boolean;
  /** Replace the third-stage teaching diagram with the event's period video. */
  readonly watchVideo?: boolean;
  readonly layout?: "artefact" | "photograph" | "strata" | "settlement" | "comparison";
  readonly stageImages?: readonly (number | null)[];
  readonly gallery?: readonly PrehistoryGalleryImage[];
  readonly diagram: PrehistoryDiagram;
  readonly title: string;
  readonly caption: string;
  /** Diagram callouts explain existing event fields; they do not introduce new facts. */
  readonly points: readonly {
    readonly label: string;
    readonly x: number;
    readonly y: number;
    readonly field: "description" | "significance" | "interpretation";
  }[];
}
