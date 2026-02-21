export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-business", label: "Our Businesses" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export const footerLeftLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-business", label: "Our Businesses" },
  { href: "/gallery", label: "Gallery" },
];

export const footerRightLinks = [
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
  { href: "/legal", label: "Legal" },
  { href: "/privacy", label: "Privacy Policy" },
];

export const footerInfo = {
  tagline: "Shaping Experiences, Infrastructure & Communities",
  address: "Grace City, Hindupur Road, Palasamudram, Andhra Pradesh 515241",
  copyright: "©VRM Group 2026. All Rights Reserved.",
  digitalPartner: "Digital Partner: Geekonomy",
};

export interface Business {
  id: number;
  name: string;
  description: string;
  href: string;
}


export const businesses: Business[] = [
  {
    id: 1,
    name: "Exotic Retreat",
    description: "Our residential developments focus on community growth, security and long-term value.",
    href: "/our-business/exotic-retreat",
  },
  {
    id: 2,
    name: "Elite Infra",
    description: "Infrastructure solutions and development for modern communities.",
    href: "/our-business/elite-infra",
  },
  {
    id: 3,
    name: "Exotic Enterprises",
    description: "Comprehensive business solutions and enterprise services.",
    href: "/our-business/exotic-enterprises",
  },
  {
    id: 4,
    name: "Exotic Bar & Bistro",
    description: "Fine dining experience with exotic flavors and exceptional service.",
    href: "/our-business/exotic-bar-bistro",
  },
  {
    id: 5,
    name: "Elite Innovation & Engineering",
    description: "Cutting-edge engineering solutions and innovative technologies.",
    href: "/our-business/elite-innovation-engineering",
  },
  {
    id: 6,
    name: "Exotic Hospitality",
    description: "Premium hospitality services and luxury accommodations.",
    href: "/our-business/exotic-hospitality",
  },
  {
    id: 7,
    name: "Greatway International School",
    description: "Excellence in education with a focus on holistic development.",
    href: "/our-business/greatway-international-school",
  },
];

// Navbar dropdown businesses (simplified for dropdown)
export interface NavbarBusiness {
  name: string;
  image: string;
  href: string;
}

export const navbarBusinesses: NavbarBusiness[] = [
  { name: "Exotic Retreat", image: "/navbardropdown/exoticretreat.webp", href: "/our-businesses/exotic-retreat" },
  { name: "Elite Infraa", image: "/navbardropdown/infraa.webp", href: "/our-businesses/elite-infraa" },
  { name: "Exotic Enterprises", image: "/navbardropdown/exoticenterprises.webp", href: "/our-businesses/exotic-enterprises" },
  { name: "Exotic Bar & Bistro", image: "/navbardropdown/exoticbar&bistro.webp", href: "/our-businesses/exotic-bar-bistro" },
  { name: "Elite Innovation & Engineering", image: "/navbardropdown/eliteinnovation&engineering.webp", href: "/our-businesses/elite-innovation" },
  { name: "Exotic Hospitality", image: "/navbardropdown/exotichospitality.webp", href: "/our-businesses/exotic-hospitality" },
  { name: "Greatway International School", image: "/navbardropdown/greatwayinternationalschool.webp", href: "/our-businesses/greatway-school" },
];

// Navbar constants
export const NAVBAR_HEIGHT_MOBILE = 64;
export const DROPDOWN_DELAY = 150;
export const ACCORDION_ITEM_HEIGHT = 72;

export type GalleryCategory =
  | "ALL"
  | "HOSPITALITY & EXPERIENCES"
  | "RESIDENTIAL & INFRASTRUCTURE"
  | "INDUSTRIAL OPERATIONS"
  | "COMMUNITY & EVENTS";

export interface GalleryItem {
  id: number;
  title: string;
  category: Exclude<GalleryCategory, "ALL">;
  image: string;
}

export const galleryTabs: GalleryCategory[] = [
  "ALL",
  "HOSPITALITY & EXPERIENCES",
  "RESIDENTIAL & INFRASTRUCTURE",
  "INDUSTRIAL OPERATIONS",
  "COMMUNITY & EVENTS",
];

export const galleryItems: GalleryItem[] = [
  { id: 1, title: "Retreat Exterior", category: "HOSPITALITY & EXPERIENCES", image: "/gallery-section/gallery-section-1.png" },
  { id: 2, title: "Culinary Experience", category: "HOSPITALITY & EXPERIENCES", image: "/gallery-section/gallery-section-2.png" },
  { id: 3, title: "Premium Stay", category: "HOSPITALITY & EXPERIENCES", image: "/gallery-section/gallery-section-3.png" },
  { id: 4, title: "Dining Moments", category: "HOSPITALITY & EXPERIENCES", image: "/gallery-section/gallery-section-4.png" },
  { id: 5, title: "Campus Development", category: "RESIDENTIAL & INFRASTRUCTURE", image: "/gallery-section/gallery-section-5.png" },
  { id: 6, title: "Institutional Build", category: "RESIDENTIAL & INFRASTRUCTURE", image: "/gallery-section/gallery-section-6.png" },
  { id: 7, title: "Engineering Setup", category: "INDUSTRIAL OPERATIONS", image: "/gallery-section/gallery-section-7.png" },
  { id: 8, title: "Production Line", category: "INDUSTRIAL OPERATIONS", image: "/gallery-section/gallery-section-8.png" },
  { id: 9, title: "Industrial Unit", category: "INDUSTRIAL OPERATIONS", image: "/gallery-section/gallery-section-9.png" },
  { id: 10, title: "Community Outreach", category: "COMMUNITY & EVENTS", image: "/gallery-section/gallery-section-1.png" },
  { id: 11, title: "Celebration Event", category: "COMMUNITY & EVENTS", image: "/gallery-section/gallery-section-2.png" },
  { id: 12, title: "Public Program", category: "COMMUNITY & EVENTS", image: "/gallery-section/gallery-section-3.png" },
];
