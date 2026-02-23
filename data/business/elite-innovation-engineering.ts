import type { BusinessDetailData } from "./types";

export const eliteInnovationEngineeringData: BusinessDetailData = {
  name: "Elite Innovation Engineering",
  hero: {
    backgroundImage: "/images/pool.jpg",
    logo: "/images/logo.png",
    title: "Engineering Excellence & Innovation",
    description:
      "Precision engineering and innovative solutions for industry and infrastructure.",
    buttonText: "CONTACT",
    buttonLink: "/contact",
  },
  about: {
    title: "About Elite Innovation Engineering",
    description:
      "Elite Innovation Engineering delivers precision engineering and innovative solutions for industry and infrastructure. We combine technical expertise with a focus on quality and reliability.",
    image: "/images/pool.jpg",
  },
  experienceHighlights: {
    sectionTitle: "Experience Highlights",
    items: [
      {
        image: "/images/pool.jpg",
        title: "Technical expertise",
        description:
          "Skilled teams and modern equipment for complex engineering projects.",
      },
      {
        image: "/images/pool.jpg",
        title: "Innovation focus",
        description:
          "Continuous improvement and adoption of best practices and technology.",
      },
    ],
  },
  facilities: [
    { image: "/images/facilities/design-engineering.png", label: "Design & Engineering" },
    { image: "/images/facilities/fabrication.png", label: "Fabrication" },
    { image: "/images/facilities/quality-control.png", label: "Quality Control" },
    { image: "/images/facilities/testing-commissioning.png", label: "Testing & Commissioning" },
    { image: "/images/facilities/technical-support.png", label: "Technical Support" },
    { image: "/images/facilities/custom-solutions.png", label: "Custom Solutions" },
  ],
  gallery: {
    title: "Gallery",
    subtitle: "Visual highlights capturing our engineering and innovation work.",
    images: ["/images/gallery/elite-innovation-1.jpg", "/images/gallery/elite-innovation-2.jpg"],
  },
  cta: {
    heading: "Begin Your Journey With Us",
    subtitle: "Reach out to discuss your engineering and technical requirements.",
    buttonText: "CONTACT",
    buttonLink: "/contact",
  },
};
