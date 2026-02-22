import type { BusinessDetailData } from "./types";

export const exoticRetreatData: BusinessDetailData = {
  name: "Exotic Retreat",
  hero: {
    backgroundImage: "/images/pool.jpg",
    logo: "/images/logo.png",
    title: "A Destination Designed for Relaxation and Celebration",
    description:
      "Exotic Retreat offers a refined hospitality experience combining comfort, ambience and thoughtful amenities, ideal for leisure stays, gatherings and events.",
    buttonText: "RESERVE",
    buttonLink: "/reserve",
  },
  about: {
    title: "About Exotic Retreat",
    description:
      "Exotic Retreat represents VRM Group's approach to hospitality, blending comfort, accessibility and environment-driven experiences. Designed to accommodate families, professionals and event visitors, the retreat prioritises ease, relaxation and quality service.",
    image:
      "https://www.figma.com/api/mcp/asset/a4acb604-59bb-42bf-beb8-3ba941caca5b",
  },
  experienceHighlights: [
    {
      image: "/images/room-accommodation.jpg",
      title: "Premium guest accommodation",
      description:
        "Experience refined comfort with elegantly designed rooms and modern conveniences. Every detail is curated to ensure a luxurious and restful stay.",
    },
    {
      image: "/images/dining.jpg",
      title: "A Refined Dining Experience",
      description:
        "Savor expertly crafted cuisine in an inviting setting. Every bite is a blend of quality ingredients and thoughtful presentation.",
    },
  ],
  facilities: [
    { image: "/images/facilities/comfortable-double-beds.png", label: "Comfortable Double Beds" },
    { image: "/images/facilities/modern-bathroom.png", label: "Modern Bathroom" },
    { image: "/images/facilities/breakfast-included.png", label: "Breakfast Included" },
    { image: "/images/facilities/free-wifi.png", label: "Free WIFI" },
    { image: "/images/facilities/extra-patio.png", label: "Extra Patio" },
    { image: "/images/facilities/spacious-living.png", label: "400/300 sq ft of Spacious Living" },
  ],
  gallery: {
    title: "Gallery",
    subtitle: "Visual highlights capturing ambience, amenities and experiences.",
    images: ["/images/gallery/exotic-retreat-1.jpg", "/images/gallery/exotic-retreat-2.jpg"],
  },
  cta: {
    heading: "Begin Your Journey With Us",
    subtitle: "Reach out to our dedicated concierge team to plan your stay.",
    buttonText: "BOOK NOW",
    buttonLink: "/contact",
  },
};
