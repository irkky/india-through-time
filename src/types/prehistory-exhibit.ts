export type PrehistoryDiagram =
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
}

export interface PrehistoryExhibit {
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
