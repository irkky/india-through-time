import researchedMedia from "../../../docs/independence-researched-media-manifest.json";
import type { PrehistoryGalleryImage } from "@/types/prehistory-exhibit";
const originalGalleries: Readonly<Record<string, readonly PrehistoryGalleryImage[]>> = {
  "freedom-khudai-khidmatgar": [
    {
      src: "/assets/images/independence/ghaffar-khan-gandhi-1940.jpg",
      title: "Abdul Ghaffar Khan with Gandhi, 1940",
      alt: "Abdul Ghaffar Khan and Gandhi standing together in a black-and-white photograph",
      category: "Artefact",
      caption:
        "1940, according to the Commons catalogue. Later contextual photograph of the leaders, not an image of the 1931 letter or organisational decision. The source file is an existing crop; no further cropping is applied here.",
      credit: "Unknown photographer; mahatma.org.in collection via Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Abdul_Ghaffar_Khan_and_Gandhi_in_1940.jpg",
      license: "Public Domain (Commons PD-India and PD-1996)",
      licenseUrl:
        "https://commons.wikimedia.org/wiki/File:Abdul_Ghaffar_Khan_and_Gandhi_in_1940.jpg#Licensing",
    },
  ],
  "freedom-round-table": [
    {
      src: "/assets/images/independence/gandhi-naidu-1931.jpg",
      title: "Gandhi and Sarojini Naidu before departure from Bombay, 1931",
      alt: "Black-and-white photograph of Gandhi, Sarojini Naidu and companions before boarding a ship at Bombay",
      category: "Artefact",
      caption:
        "1931. A departure photograph, not the conference proceedings or the separate England-arrival photograph in the Library of Congress. The original frame and printed caption are retained; the catalogue's month is not used as an independently verified travel date.",
      credit: "Unknown photographer; scan by Yann, Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Gandhi_before_boarding_ship_at_Bombay.jpg",
      license: "Public Domain (Commons PD-India and PD-1996)",
      licenseUrl:
        "https://commons.wikimedia.org/wiki/File:Gandhi_before_boarding_ship_at_Bombay.jpg#Licensing",
    },
  ],
};

const eventIds = new Set([
  ...Object.keys(originalGalleries),
  ...researchedMedia.flatMap((item) => item.eventIds),
]);
export const independenceGalleries: Readonly<Record<string, readonly PrehistoryGalleryImage[]>> =
  Object.fromEntries(
    [...eventIds].map((id) => [
      id,
      [
        ...(originalGalleries[id] ?? []),
        ...researchedMedia
          .filter((item) => item.eventIds.includes(id))
          .map((item) => ({
            src: item.src,
            title: item.title,
            alt: item.alt,
            caption: item.caption,
            category: item.category as PrehistoryGalleryImage["category"],
            credit: item.credit,
            sourceUrl: item.sourceUrl,
            license: item.license,
            licenseUrl: item.licenseUrl,
          })),
      ],
    ]),
  );
