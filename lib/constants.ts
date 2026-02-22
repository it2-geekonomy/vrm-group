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

export const CONTACT_HEADING = "Connect With VRM Group";
export const CONTACT_DESCRIPTION =
  "For enquiries, partnerships, or information, reach out to our team through the form below";
export const CONTACT_ADDRESS = {
  label: "Address :",
  lines: [
    "Elite Infraa Projects",
    "No-1, Grace City,",
    "Palasamudram, Gorantla (M), Sathya Sai (D)",
    "Andhra Pradesh - 515 241, India",
  ],
};
export const CONTACT_PHONE_LABEL = "Contact No :";
export const CONTACT_PHONE = ""; // Add number when available

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
  { name: "Exotic Retreat", image: "/navbardropdown/exoticretreat.webp", href: "/our-business/exotic-retreat" },
  { name: "Elite Infraa", image: "/navbardropdown/infraa.webp", href: "/our-business/elite-infra" },
  { name: "Exotic Enterprises", image: "/navbardropdown/exoticenterprises.webp", href: "/our-business/elite-enterprises" },
  { name: "Exotic Bar & Bistro", image: "/navbardropdown/exoticbar&bistro.webp", href: "/our-business/exotic-bar-bistro" },
  { name: "Elite Innovation & Engineering", image: "/navbardropdown/eliteinnovation&engineering.webp", href: "/our-business/elite-innovation-engineering" },
  { name: "Exotic Hospitality", image: "/navbardropdown/exotichospitality.webp", href: "/our-business/exotic-hospitality" },
  { name: "Greatway International School", image: "/navbardropdown/greatwayinternationalschool.webp", href: "/school" },
];

// Navbar constants
export const NAVBAR_HEIGHT_MOBILE = 64;
export const DROPDOWN_DELAY = 150;
export const ACCORDION_ITEM_HEIGHT = 72;


export const LEADERSHIP_HEADING = "Legacy in place. Future in motion";
export const LEADERSHIP_DESCRIPTION = `
The next generation of leadership stands ready to build on the strong foundations and values that define VRM Group.
Guided by its enduring legacy of integrity, innovation, and excellence, they are committed to carrying the vision of
VRM Group forward into a dynamic future.
`;

export const TEAM_MEMBERS = [
  { name: "Padmaja M", image: "/About/About image.webp" },
  { name: "Kishore M", image: "/About/About image.webp" },
  { name: "Kavya M", image: "/About/About image.webp" },
  { name: "Abhishekar G S", image: "/About/About image.webp" },
  { name: "Meena Poli", image: "/About/About image.webp" },
];

export const JOURNEY_HEADING = "Our Journey";
export const JOURNEY_DESCRIPTION =
  "The evolution of VRM Group reflects a steady expansion into sectors that shape communities, industries, and experiences.";

export const TIMELINE_EVENTS: { year: number | string; title: string; description: string }[] = [
  { year: 2008, title: "GREATWAY INTERNATIONAL SCHOOL", description: "Launch of a fully residential institution nurturing academic and holistic student development." },
  { year: 2014, title: "VRM GRAND SUITE", description: "Entry into real estate with premium villa development focused on comfort and modern living." },
  { year: "2015 - 2017", title: "ELITE INFRA EXPANSION", description: "Strengthening presence in construction, brick manufacturing, and infrastructure development." },
  { year: "2016 - 2017", title: "KUBERA HILLS PROJECTS", description: "Development of residential communities promoting sustainable design and refined lifestyles." },
  { year: 2020, title: "EXOTIC ENTERPRISES", description: "Establishment of large-scale warehousing and commercial infrastructure supporting industrial growth." },
  { year: 2020, title: "EXOTIC RETREAT", description: "Launch of hospitality destination featuring premium accommodation and guest experiences." },
  { year: 2023, title: "EXOTIC HOSPITALITY", description: "Expansion into contemporary residential lifestyle offerings." },
  { year: 2023, title: "EXOTIC INNOVATION & ENGINEERING", description: "Creation of advanced manufacturing and fabrication facility integrating CNC technologies." },
  { year: 2023, title: "FLO PUB (BANGALORE)", description: "Entry into urban lifestyle and entertainment segment." },
  { year: 2025, title: "EXOTIC BAR & BISTRO", description: "Launch of fine dining and entertainment destination in Palasamudram." },
];
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
