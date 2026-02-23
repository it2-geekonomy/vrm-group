import type { BusinessDetailData } from "./types";

export const exoticBarBistroData: BusinessDetailData = {
  name: "Exotic Bar & Bistro",
  hero: {

    videoSrc: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1771743800305-IMG_2789.MP4", // fallback video
    logo: "/images/logo.png",
    title: "Where Dining Meets Atmosphere",
    description:
      "Exotic Bar & Bistro delivers a curated social and culinary environment designed for gatherings, celebrations and relaxed evenings. ",
     buttonText: "RESERVE",
    buttonLink: "/reserve",
    },
  about: {
    title: "About Exotic Bar & Bistro",
    description:
      "Combining ambience, food and entertainment, Exotic Bar & Bistro reflects VRM  Group’s expansion into lifestyle experiences. It is designed as a welcoming  space where quality dining and social interaction come together seamlessly.",
    image:
      "/our-business/Exotic Bar & Bistro image.webp",
  },
   experienceHighlights: {
    sectionTitle: "The Experience",
    items:[
    {
      image:
        "/images/gallery/exoticbarbistro1.webp",
      title: "Curated Ambience",
    },
    {
      image:
        "/images/gallery/exoticbarbistro2.webp",
      title: "Contemporary Dining Environment",
    },
     {
      image:
        "/images/gallery/exoticbarbistro3.webp",
      title: "Social Gathering Space",
    },
     {
      image:
        "/images/gallery/exoticbarbistro4.webp",
      title: "Event and Celebration Hosting",
    },
  ],
},
  cta: {
    heading: "Taste The Extraordinary",
    buttonText: "PLAN YOUR VISIT",
    buttonLink: "/contact",
  },
};
