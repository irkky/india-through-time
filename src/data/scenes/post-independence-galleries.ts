import type { PrehistoryGalleryImage } from "@/types/prehistory-exhibit";
export const postIndependenceGalleries: Readonly<
  Record<string, readonly PrehistoryGalleryImage[]>
> = {
  "republic-tsunami": [
    {
      src: "/assets/images/post-independence/tsunami-2004.jpg",
      title: "Tsunami waves near the Godavari mouth, 26 December 2004",
      alt: "Four satellite frames with timestamps and arrows showing waves approaching the Andhra Pradesh coast",
      category: "Site photograph",
      caption:
        "Terra/MISR observations on 26 December 2004, published 22 January 2005. Four frames show the Andhra Pradesh coast near the Godavari mouth; original timestamps, arrows and scale are retained. This is remote sensing, not a ground photograph or a casualty map.",
      credit: "NASA/GSFC/LaRC/JPL, MISR Team",
      sourceUrl:
        "https://science.nasa.gov/earth/earth-observatory/breaking-tsunami-waves-along-indias-eastern-coast-5186/",
      license: "NASA media usage guidelines (educational/informational use)",
      licenseUrl: "https://www.nasa.gov/nasa-brand-center/images-and-media/",
    },
  ],
  "republic-chandrayaan-3": [
    {
      src: "/assets/images/post-independence/chandrayaan-3-lro.png",
      title: "Chandrayaan-3 landing site observed from lunar orbit",
      alt: "Grayscale lunar surface with a small bright halo around the Chandrayaan-3 landing site near the centre",
      category: "Site photograph",
      caption:
        "NASA's LRO observed the site on 27 August 2023, four days after landing. Frame M1447750764LR spans approximately 1,738 metres. The small central feature is the landing site; this is an orbital observation, not a close-up of the lander or an image of the exact south pole.",
      credit: "NASA's Goddard Space Flight Center/Arizona State University",
      sourceUrl:
        "https://www.nasa.gov/image-article/nasas-lro-observes-chandrayaan-3-landing-site/",
      license: "NASA media usage guidelines (educational/informational use)",
      licenseUrl: "https://www.nasa.gov/nasa-brand-center/images-and-media/",
    },
  ],
  "republic-maratha-unesco": [
    {
      src: "/assets/images/post-independence/raigad-2018.jpg",
      title: "Raigad Fort during commemorations, 6 June 2018",
      alt: "Aerial photograph of crowds gathered among the stone structures of Raigad Fort",
      category: "Site photograph",
      caption:
        "Photographed 6 June 2018 during Shivrajyabhishek commemorations. Raigad is one component of the property inscribed in 2025. This photograph predates inscription and does not depict a seventeenth-century event. Commons' watermark-removed revision is reproduced at reduced resolution without further editing.",
      credit: "Sagarkolhe21; watermark removal by R8cocin8, Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Raighad_Fort_by_21st.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
  ],
};
