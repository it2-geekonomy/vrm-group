export type AboutSectionData = {
  title: string;
  description: string;
  image: string;
};

export type ExperienceHighlight = {
  image: string;
  title: string;
  description: string;
};

export type FacilityItem = {
  image: string;
  label: string;
};

export type GallerySectionData = {
  title: string;
  subtitle: string;
  images: string[];
};

export type CTASectionData = {
  heading: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
};

export type BusinessDetailData = {
  name: string;
  hero: {
    backgroundImage: string;
    videoSrc?: string;
    logo: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
  about: AboutSectionData;
  experienceHighlights: {
    sectionTitle?: string;
    sectionSubtitle?: string;
    items: ExperienceHighlight[];
  };
  experienceHighlights2?: {
    sectionTitle?: string;
    sectionSubtitle?: string;
    items: ExperienceHighlight[];
  };
  facilities: FacilityItem[];
  gallery: GallerySectionData;
  cta: CTASectionData;
};
