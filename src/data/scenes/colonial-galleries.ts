import manifest from "../../../docs/colonial-media-manifest.json";
import type { PrehistoryGalleryImage } from "@/types/prehistory-exhibit";

function museumImage(id: number, alt: string, context: string): PrehistoryGalleryImage {
  const item = manifest.find((image) => image.id === id);
  if (!item) throw new Error(`Missing colonial image metadata: ${id}`);
  return {
    src: `/assets/images/colonial/${item.filename}`,
    title: item.title,
    alt,
    category: "Artefact",
    caption: `${item.date}. ${item.medium}. The Met, ${item.accession}. ${context} Reproduced without cropping.`,
    credit: `The Metropolitan Museum of Art; ${item.credit}`,
    sourceUrl: item.sourceUrl,
    license: "Public Domain / The Met Open Access (CC0)",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
  };
}

export const colonialGalleries: Readonly<Record<string, readonly PrehistoryGalleryImage[]>> = {
  "colonial-crown-1858": [
    museumImage(
      287614,
      "Equestrian statue on a tall plinth with a seated person beside it",
      "Photograph by an unknown maker, 1858-61. A monument to an earlier governor-general, not a portrait of the ruler appointed in 1858 or a photograph of the transfer of power.",
    ),
    museumImage(
      287684,
      "View across the Maidan from Government House, with a gateway and pools of rainwater",
      "John Constantine Stanley, 1858-61. A view of colonial Calcutta, now Kolkata; urban context for Crown rule, not an image of the 1858 proclamation.",
    ),
  ],
};
