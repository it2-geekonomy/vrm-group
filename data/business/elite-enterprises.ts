import type { BusinessDetailData } from "./types";

export const eliteEnterprisesData: BusinessDetailData = {
  name: "Exotic Enterprises",
  hero: {
    videoSrc: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/ourbusiness/1772188005888-WARE_HOUSE_1.mp4", 
    logo: "/images/VRM.logos/EXOTIC ENTERPRISES.png",
    title: "Strategic Warehousing & Industrial Growth",
    description:
      "Strategically developed warehousing facilities supporting industrial growth.",
    buttonText: "LEARN MORE",
    buttonLink: "/contact",
  },
  about: {
    title: "About Exotic Enterprises",
    description:
      "Exotic Enterprises delivers strategically developed warehousing facilities that support industrial growth. Our spaces are designed for efficiency, scalability and seamless logistics.",
    image:
      "https://www.figma.com/api/mcp/asset/966f7466-865c-4cfb-ad84-ac12fe3ea0f2",
  },
  experienceHighlights: {
    sectionTitle: "Experience Highlights",
    items: [
      {
        image:
          "https://www.figma.com/api/mcp/asset/966f7466-865c-4cfb-ad84-ac12fe3ea0f2",
        title: "Modern warehousing",
        description:
          "State-of-the-art facilities with optimal layout and handling systems for diverse industrial needs.",
      },
      {
        image:
          "https://www.figma.com/api/mcp/asset/966f7466-865c-4cfb-ad84-ac12fe3ea0f2",
        title: "Logistics support",
        description:
          "Strategic locations and connectivity to support supply chain and distribution requirements.",
      },
    ],
  },
  facilities: [
    { image: "/images/facilities/spacious-warehouses.png", label: "Spacious Warehouses" },
    { image: "/images/facilities/loading-docks.png", label: "Loading Docks" },
    { image: "/images/facilities/security.png", label: "24/7 Security" },
    { image: "/images/facilities/power-utilities.png", label: "Power & Utilities" },
    { image: "/images/facilities/office-space.png", label: "On-site Office Space" },
    { image: "/images/facilities/easy-access-parking.png", label: "Easy Access & Parking" },
  ],
  gallery: {
    title: "Gallery",
    subtitle: "Visual highlights capturing our warehousing and logistics facilities.",
    images: ["/images/gallery/elite-enterprises-1.jpg", "/images/gallery/elite-enterprises-2.jpg"],
  },
  cta: {
    heading: "Begin Your Journey With Us",
    subtitle: "Reach out to explore warehousing and industrial solutions.",
    buttonText: "LEARN MORE",
    buttonLink: "/contact",
  },
};
