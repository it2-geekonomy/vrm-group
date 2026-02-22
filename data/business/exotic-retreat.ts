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
      image: "/our-business%20inside/ExperienceHighlights.webp",
      title: "Premium guest accommodation",
      description:
        "Experience refined comfort with elegantly designed rooms and modern conveniences. Every detail is curated to ensure a luxurious and restful stay.",
    },
    {
      image: "/our-business%20inside/image1.webp",
      title: "A Refined Dining Experience",
      description:
        "Savor expertly crafted dishes made from the freshest ingredients. Every bite is a celebration of flavor, elegance, and passion.",
    },
    {
      image: "/our-business%20inside/image2.webp",
      title: "Poolside and leisure amenities",
      description:
        "Unwind by the sparkling pool and enjoy thoughtfully crafted leisure spaces. Perfect for relaxation, recreation, and memorable moments under the sun.",
    },
  ],
  facilities: [
    { image: "/our-business%20inside/Facilities/bed%201.webp", label: "Comfortable Double Beds" },
    { image: "/our-business%20inside/Facilities/bathroom%201.webp", label: "Modern Bathroom" },
    { image: "/our-business%20inside/Facilities/Group.webp", label: "Breakfast Included" },
    { image: "/our-business%20inside/Facilities/Group%20%281%29.webp", label: "Free WIFI" },
    { image: "/our-business%20inside/Facilities/living%20room.webp", label: "Extra Patio" },
    { image: "/our-business%20inside/Facilities/Group%20%283%29.webp", label: "400/300 sq ft of Spacious Living" },
  ],
  gallery: {
    title: "Gallery",
    subtitle: "Visual highlights capturing ambience, amenities and experiences.",
    images: [
      "/images/gallery/exotic-retreat-1.webp",
      "/images/gallery/exotic-retreat-3.webp",
      
      "/images/gallery/exotic-retreat-5.webp",
      "/images/gallery/exotic-retreat-6.webp",
      "/images/gallery/exotic-retreat-7.webp",
      "/images/gallery/exotic-retreat-8.webp",
      "/images/gallery/exotic-retreat-9.webp",
      "/images/gallery/exotic-retreat-10.webp",
      "/images/gallery/exotic-retreat-4.webp",
      "/images/gallery/exotic-retreat-12.webp",
      "/images/gallery/exotic-retreat-13.webp",
      "/images/gallery/exotic-retreat-14.webp",
      "/images/gallery/exotic-retreat-15.webp",
      "/images/gallery/exotic-retreat-16.webp",
      "/images/gallery/exotic-retreat-2.webp",
      "/images/gallery/exotic-retreat-19.webp",
      "/images/gallery/exotic-retreat-17.webp",
      "/images/gallery/exotic-retreat-18.webp",
    ],
  },
  cta: {
    heading: "Begin Your Journey With Us",
    subtitle: "Reach out to our dedicated concierge team to plan your stay.",
    buttonText: "BOOK NOW",
    buttonLink: "/contact",
  },
};
