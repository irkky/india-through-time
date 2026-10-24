import manifest from "../../../docs/early-modern-media-manifest.json";
import type { PrehistoryGalleryImage } from "@/types/prehistory-exhibit";

function museumImage(id: number, alt: string, context: string): PrehistoryGalleryImage {
  const item = manifest.find((image) => image.id === id);
  if (!item) throw new Error(`Missing early modern image metadata: ${id}`);
  return {
    src: `/assets/images/early-modern/${item.filename}`,
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

export const earlyModernGalleries: Readonly<Record<string, readonly PrehistoryGalleryImage[]>> = {
  "hamzanama-workshop": [
    museumImage(
      447743,
      "Painted manuscript folio with mounted figures and buildings in a densely coloured narrative scene",
      "Attributed to Kesav Das and Mah Muhammad. A literary episode, not a documentary view of Akbar’s capital.",
    ),
  ],
  "mansur-nilgai": [
    museumImage(
      451261,
      "A nilgai in profile on a pale ground, surrounded by an ornamental album border",
      "Painting by Mansur, c. 1620; the catalogue separately dates the calligraphy on the other side to c. 1540.",
    ),
  ],
  "shah-jahan-court": [
    museumImage(
      451267,
      "Shah Jahan riding a decorated horse, holding a spear, with a halo behind his head",
      "Painting by Payag, c. 1630. A formal imperial portrait; the associated calligraphy is earlier.",
    ),
  ],
  "kalamkari-cover": [
    museumImage(
      448212,
      "Rectangular red cotton cover patterned with trees, animals and figures in decorative compartments",
      "A seventeenth-century textile; the catalogue identifies mordant painting and resist dyeing.",
    ),
  ],
  "chand-bibi-memory": [
    museumImage(
      453975,
      "Chand Bibi on a white horse with attendants and birds in a green landscape",
      "Made c. 1700, long after the queen’s sixteenth-century defence of Ahmadnagar. A later remembered image, not an eyewitness siege portrait.",
    ),
  ],
};
