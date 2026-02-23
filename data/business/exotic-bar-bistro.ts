import type { BusinessDetailData } from "./types";

export const exoticBarBistroData: BusinessDetailData = {
  name: "Exotic Bar & Bistro",
  hero: {
    backgroundImage:
      "https://www.figma.com/api/mcp/asset/2a0f7c42-05c7-4283-8481-dea7db4bc2a7",
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
      "https://www.figma.com/api/mcp/asset/2a0f7c42-05c7-4283-8481-dea7db4bc2a7",
  },
  experienceHighlights: [
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
  cta: {
    heading: "Taste The Extraordinary",
    buttonText: "PLAN YOUR VISIT",
    buttonLink: "/contact",
  },
};
