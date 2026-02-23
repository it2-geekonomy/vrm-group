import type { BusinessDetailData } from "./types";

export const SchoolData: BusinessDetailData = {
  name: "School",
  hero: {
    backgroundImage:
      "https://www.figma.com/api/mcp/asset/966f7466-865c-4cfb-ad84-ac12fe3ea0f2",
    logo: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/ourbusiness/1771831257635-school_logo.webp",
    title: "Nurturing Future Generations",
    description:
      "The educational initiative within VRM Group contributes to community  development through structured learning environments and holistic student  growth.",
    buttonText: "LEARN MORE",
    buttonLink: "/contact",
  },
  about: {
    title: "About School",
    description:
      "Exotic Enterprises delivers strategically developed warehousing facilities that support industrial growth. Our spaces are designed for efficiency, scalability and seamless logistics.",
    image:
      "https://www.figma.com/api/mcp/asset/966f7466-865c-4cfb-ad84-ac12fe3ea0f2",
  },
  experienceHighlights: {
    items: [],
  },
  facilities: [],
  gallery: {
    title: "Gallery",
    subtitle: "Campus Life / Environment Visual",
    images: ["/images/gallery/elite-enterprises-1.jpg", "/images/gallery/elite-enterprises-2.jpg"],
  },
  cta: {
    heading: "Begin Your Educational Journey",
    subtitle: "Reach out to learn more about our programs and enrollment.",
    buttonText: "CONTACT US",
    buttonLink: "/contact",
  },
};
