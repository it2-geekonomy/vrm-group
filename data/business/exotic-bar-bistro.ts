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
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/others/1771837665630-Screenshot_2026-02-18_113705.webp",
  },
   experienceHighlights: {
    sectionTitle: "The Experience",
    items:[
    {
      image:
        "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/ourbusiness/1771837943805-exoticbarbistro1.webp",
      title: "Curated Ambience",
    },
    {
      image:
        "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/ourbusiness/1771837960615-exoticbarbistro2.webp",
      title: "Contemporary Dining Environment",
    },
     {
      image:
        "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/ourbusiness/1771837976955-exoticbarbistro3.webp",
      title: "Social Gathering Space",
    },
     {
      image:
        "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/ourbusiness/1771837994961-exoticbarbistro4.webp",
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
