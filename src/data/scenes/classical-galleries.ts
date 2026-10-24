import manifest from "../../../docs/classical-media-manifest.json";
import type { PrehistoryGalleryImage } from "@/types/prehistory-exhibit";

function museumImage(id: number, alt: string, context: string): PrehistoryGalleryImage {
  const item = manifest.find((image) => image.id === id);
  if (!item) throw new Error(`Missing Indian image metadata: ${id}`);
  return {
    src: `/assets/images/classical/${item.filename}`,
    title: item.title,
    alt,
    category: "Artefact",
    caption: `${item.date}. ${item.medium}. The Met, ${item.accession}. ${context} Museum photograph; reproduced without cropping.`,
    credit: `The Metropolitan Museum of Art; ${item.credit}`,
    sourceUrl: item.sourceUrl,
    license: "Public Domain / The Met Open Access (CC0)",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
  };
}

export const classicalGalleries: Readonly<Record<string, readonly PrehistoryGalleryImage[]>> = {
  "chola-temples": [
    museumImage(
      39328,
      "Copper-alloy Shiva dancing inside a ring of flames with one foot raised",
      "Tamil Nadu, Chola period. A religious image, not a royal portrait or photograph of a temple ritual.",
    ),
  ],
  "bihar-buddha-bronze": [
    museumImage(
      38965,
      "Standing copper-alloy Buddha raising a hand in reassurance",
      "Probably Bihar; late sixth to early seventh century. The location is qualified by the museum. This is not an identified Nalanda excavation find.",
    ),
  ],
};
