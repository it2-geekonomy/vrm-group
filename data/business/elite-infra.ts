import type { BusinessDetailData } from "./types";

export const eliteInfraData: BusinessDetailData = {
  name: "Elite Infra",
  hero: {
    backgroundImage:
      "https://www.figma.com/api/mcp/asset/85165f4c-88ec-4e89-8fc7-747cb7c48ee1",
    logo: "/images/logo.png",
    title: "Building Tomorrow's Infrastructure Today",
    description:
      "Elite Infra represents the group's commitment to construction strength and responsible development.",
    buttonText: "GET IN TOUCH",
    buttonLink: "/contact",
  },
  about: {
    title: "About Elite Infra",
    description:
      "Elite Infra represents VRM Group's commitment to construction strength and responsible development. We deliver robust infrastructure solutions that support sustainable growth and community needs.",
    image:
      "https://www.figma.com/api/mcp/asset/85165f4c-88ec-4e89-8fc7-747cb7c48ee1",
  },
  experienceHighlights: [
    {
      image:
        "https://www.figma.com/api/mcp/asset/85165f4c-88ec-4e89-8fc7-747cb7c48ee1",
      title: "End-to-end project delivery",
      description:
        "From planning to execution, we ensure quality and timely delivery with a focus on safety and compliance.",
    },
    {
      image:
        "https://www.figma.com/api/mcp/asset/85165f4c-88ec-4e89-8fc7-747cb7c48ee1",
      title: "Sustainable practices",
      description:
        "Our projects integrate sustainable materials and practices to minimise environmental impact.",
    },
  ],
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
