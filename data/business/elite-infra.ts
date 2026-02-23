import type { BusinessDetailData } from "./types";

export const eliteInfraData: BusinessDetailData = {
  name: "Elite Infra",
  hero: {
    backgroundImage:
      "https://www.figma.com/api/mcp/asset/85165f4c-88ec-4e89-8fc7-747cb7c48ee1",
    videoSrc: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1771743800305-IMG_2789.MP4", // ← replace with your actual video URL
    logo: "/images/logo.png",
    title: "Developing Communities with Purpose",
    description:
      "Elite Infra leads VRM Group’s residential and infrastructure initiatives focused on durability, planning and long-term value.",
    buttonText: "VIEW OUR PROJECTS",
    buttonLink: "/contact",
  },
  about: {
    title: "About Elite Infra",
    description:
      "Elite Infraa represents the group’s commitment to construction strength and  responsible development. Through residential projects and infrastructure initiatives, the division contributes to environments built for continuity and growth.",
    image:
      "https://www.figma.com/api/mcp/asset/85165f4c-88ec-4e89-8fc7-747cb7c48ee1",
  },
  experienceHighlights: {
    sectionTitle: "Focus Area",
    items: [
      {
        image:
          "https://www.figma.com/api/mcp/asset/1973342518",
        title: "Residential community development",
        description: "",
      },
      {
        image:
          "https://www.figma.com/api/mcp/asset/1973342517",
        title: "Infrastructure resources",
        description: "",
      },
      {
        image:
          "https://www.figma.com/api/mcp/asset/1973342516",
        title: "Material manufacturing support",
        description: "",
      },
      {
        image:
          "https://www.figma.com/api/mcp/asset/1973342515",
        title: "Long-term assured reliability",
        description: "",
      },
    ],
  },
  facilities: [
    { image: "/images/facilities/civil-structural.png", label: "Civil & Structural Works" },
    { image: "/images/facilities/design-planning.png", label: "Design & Planning" },
    { image: "/images/facilities/quality-assurance.png", label: "Quality Assurance" },
    { image: "/images/facilities/safety-compliance.png", label: "Safety Compliance" },
    { image: "/images/facilities/on-time-delivery.png", label: "On-time Delivery" },
    { image: "/images/facilities/post-completion-support.png", label: "Post-completion Support" },
  ],
  gallery: {
    title: "Gallery",
    subtitle: "Visual highlights capturing our projects and capabilities.",
    images: ["/images/gallery/elite-infra-1.jpg", "/images/gallery/elite-infra-2.jpg"],
  },
  cta: {
    heading: "Begin Your Journey With Us",
    subtitle: "Reach out to discuss your infrastructure and development needs.",
    buttonText: "GET IN TOUCH",
    buttonLink: "/contact",
  },
};
