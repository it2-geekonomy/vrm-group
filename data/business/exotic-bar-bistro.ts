import type { BusinessDetailData } from "./types";

export const exoticBarBistroData: BusinessDetailData = {
  name: "Exotic Bar & Bistro",
  hero: {
    backgroundImage:
      "https://www.figma.com/api/mcp/asset/2a0f7c42-05c7-4283-8481-dea7db4bc2a7",
    logo: "/images/logo.png",
    title: "Where Ambience Meets Flavour",
    description:
      "A lifestyle dining space combining ambience, food and entertainment.",
    buttonText: "RESERVE",
    buttonLink: "/reserve",
  },
  about: {
    title: "About Exotic Bar & Bistro",
    description:
      "Exotic Bar & Bistro is a lifestyle dining space that combines ambience, food and entertainment. Perfect for casual meals, celebrations and evening gatherings.",
    image:
      "https://www.figma.com/api/mcp/asset/2a0f7c42-05c7-4283-8481-dea7db4bc2a7",
  },
  experienceHighlights: [
    {
      image:
        "https://www.figma.com/api/mcp/asset/2a0f7c42-05c7-4283-8481-dea7db4bc2a7",
      title: "Curated menu",
      description:
        "A blend of local and international flavours prepared with care and presented with style.",
    },
    {
      image:
        "https://www.figma.com/api/mcp/asset/2a0f7c42-05c7-4283-8481-dea7db4bc2a7",
      title: "Live entertainment",
      description:
        "Regular events and live music to elevate your dining experience.",
    },
  ],
  facilities: [
    { image: "/images/facilities/indoor-outdoor-seating.png", label: "Indoor & Outdoor Seating" },
    { image: "/images/facilities/full-bar.png", label: "Full Bar" },
    { image: "/images/facilities/free-wifi.png", label: "Free WIFI" },
    { image: "/images/facilities/private-events.png", label: "Private Events Space" },
    { image: "/images/facilities/parking.png", label: "Parking Available" },
    { image: "/images/facilities/extended-hours.png", label: "Extended Hours" },
  ],
  gallery: {
    title: "Gallery",
    subtitle: "Visual highlights capturing ambience, food and entertainment.",
    images: ["/images/gallery/exotic-bar-bistro-1.jpg", "/images/gallery/exotic-bar-bistro-2.jpg"],
  },
  cta: {
    heading: "Begin Your Journey With Us",
    subtitle: "Reach out to reserve a table or plan your event.",
    buttonText: "RESERVE",
    buttonLink: "/contact",
  },
};
