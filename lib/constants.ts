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
];

export const footerRightLinks = [
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
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
  /** Images for the left carousel / hero only */
  images: string[];
  /** Separate image for the right-side card thumbnail (optional; falls back to images[0] if omitted) */
  cardImage?: string;
}

export const businesses: Business[] = [
  {
    id: 1,
    name: "Exotic Retreat",
    description: "Our residential developments focus on community growth, security and long-term value.",
    href: "/our-business/exotic-retreat",
    images: [
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1771828260043-retreat.webp",
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831847945-retreat_image_2.webp",
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831865491-retreat_image_3.webp",
    ],
    cardImage: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1771828260043-retreat.webp",
  },
  {
    id: 2,
    name: "Elite Infra",
    description: "Infrastructure solutions and development for modern communities.",
    href: "/our-business/elite-infra",
    images: [
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1771828290021-elite_infra_image.webp",
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831925040-elite_infra2.webp",
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831944401-elite_infra3.webp",
    ],
    cardImage: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1771828290021-elite_infra_image.webp",
  },
  {
    id: 3,
    name: "Exotic Enterprises",
    description: "Comprehensive business solutions and enterprise services.",
    href: "/our-business/exotic-enterprises",
    images: [
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1771828692105-exotic_enterprises_image.webp",
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1771832397119-RDMK0728.webp",
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1771832423491-RDMK0727.webp",
    ],
    cardImage: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1771828692105-exotic_enterprises_image.webp",
  },
  {
    id: 4,
    name: "Exotic Bar & Bistro",
    description: "Fine dining experience with exotic flavors and exceptional service.",
    href: "/our-business/exotic-bar-bistro",
    images: [
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1771828734140-exotic_bar___bistro_image.webp",
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771832004318-bistro2.webp",
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771832018271-bistro3.webp",
    ],
    cardImage: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1771828734140-exotic_bar___bistro_image.webp",
  },
  {
    id: 5,
    name: "Elite Innovation & Engineering",
    description: "Cutting-edge engineering solutions and innovative technologies.",
    href: "/our-business/elite-innovation-engineering",
    images: [
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1771828761359-exotic_engineering_image.webp",
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771832040082-exotic_innovation2.webp",
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771832061642-exotic_innovation3.webp",
    ],
    cardImage: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1771828761359-exotic_engineering_image.webp",
  },
  {
    id: 6,
    name: "Exotic Hospitality",
    description: "Premium hospitality services and luxury accommodations.",
    href: "/our-business/exotic-hospitality",
    images: [
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1771828794157-hospitality.webp",
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771832082205-hospitality_2.webp",
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771832095090-hospitality3.webp",
    ],
    cardImage: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1771828794157-hospitality.webp",
  },
  {
    id: 7,
    name: "Greatway International School",
    description: "Excellence in education with a focus on holistic development.",
    href: "/our-business/greatway-international-school",
    images: [
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1771828818041-school.webp",
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771832106986-school2.webp",
      "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771832121340-school3_.webp",
    ],
    cardImage: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1771828818041-school.webp",
  },
];

// Navbar dropdown businesses (simplified for dropdown)
export interface NavbarBusiness {
  name: string;
  image: string;
  href: string;
}

export const navbarBusinesses: NavbarBusiness[] = [
  { name: "Exotic Retreat", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/others/1771834904758-exoticretreat.webp", href: "/our-business/exotic-retreat" },
  { name: "Elite Infraa", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/others/1771834954008-infraa.webp", href: "/our-business/elite-infra" },
  { name: "Exotic Enterprises", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/others/1771834839854-exoticenterprises.webp", href: "/our-business/exotic-enterprises" },
  { name: "Exotic Bar & Bistro", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/others/1771834814205-exoticbar_bistro.webp", href: "/our-business/exotic-bar-bistro" },
  { name: "Elite Innovation & Engineering", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/others/1771834776152-eliteinnovation_engineering.webp", href: "/our-business/elite-innovation-engineering" },
  { name: "Exotic Hospitality", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/others/1771834861460-exotichospitality.webp", href: "/our-business/exotic-hospitality" },
  { name: "Greatway International School", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/others/1771834920214-greatwayinternationalschool.webp", href: "/our-business/school" },
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
  { name: "Padmaja M", image: "/female.png" },
  { name: "Kishore M", image: "/male.png" },
  { name: "Kavya M", image: "/female.png" },
  { name: "Abhishekar G S", image: "/male.png" },
  { name: "Meena Poli", image: "/female.png" },
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
  // HOSPITALITY & EXPERIENCES (1–15)
  { id: 1, title: "Premium Stay", category: "HOSPITALITY & EXPERIENCES", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771826350343-DSC00178.webp" },
  { id: 2, title: "Premium Stay", category: "HOSPITALITY & EXPERIENCES", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771826395693-DSC00180.webp" },
  { id: 3, title: "Premium Stay", category: "HOSPITALITY & EXPERIENCES", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771826971090-VRM_GRAND_STAY__107_.webp" },
  { id: 4, title: "Premium Stay", category: "HOSPITALITY & EXPERIENCES", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771826639358-VRM_GRAND_STAY__86_.webp" },
  { id: 5, title: "Premium Stay", category: "HOSPITALITY & EXPERIENCES", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771829938707-VRM_GRAND_STAY__111_.webp" },
  { id: 6, title: "Premium Stay", category: "HOSPITALITY & EXPERIENCES", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771829994765-VRM_GRAND_STAY__87_.webp" },
  { id: 7, title: "Premium Stay", category: "HOSPITALITY & EXPERIENCES", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771830096369-VRM_GRAND_STAY__85_.webp" },
  { id: 8, title: "Premium Stay", category: "HOSPITALITY & EXPERIENCES", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771830147616-VRM_GRAND_STAY__84_.webp" },
  { id: 9, title: "Premium Stay", category: "HOSPITALITY & EXPERIENCES", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771830189095-VRM_GRAND_STAY__89_.webp" },
  { id: 10, title: "Premium Stay", category: "HOSPITALITY & EXPERIENCES", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771830378455-VRM_GRAND_STAY__90_.webp" },
  { id: 11, title: "Premium Stay", category: "HOSPITALITY & EXPERIENCES", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771830435465-VRM_GRAND_STAY__88_.webp" },
  { id: 12, title: "Premium Stay", category: "HOSPITALITY & EXPERIENCES", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771830509873-VRM_GRAND_STAY__83_.webp" },
  { id: 13, title: "Premium Stay", category: "HOSPITALITY & EXPERIENCES", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771830590260-VRM_GRAND_STAY__91_.webp" },
  { id: 14, title: "Premium Stay", category: "HOSPITALITY & EXPERIENCES", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771830643813-VRM_GRAND_STAY__20_.webp" },
  { id: 15, title: "Premium Stay", category: "HOSPITALITY & EXPERIENCES", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771830678002-VRM_GRAND_STAY__23_.webp" },

  // RESIDENTIAL & INFRASTRUCTURE (16–30)
  { id: 16, title: "Campus Development", category: "RESIDENTIAL & INFRASTRUCTURE", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771825235161-VRM_GRAND_STAY__61_.webp" },
  { id: 17, title: "Institutional Build", category: "RESIDENTIAL & INFRASTRUCTURE", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771825422376-VRM_GRAND_STAY__26_.webp" },
  { id: 18, title: "Urban Housing", category: "RESIDENTIAL & INFRASTRUCTURE", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771825516350-VRM_GRAND_STAY__32_.webp" },
  { id: 19, title: "Township Planning", category: "RESIDENTIAL & INFRASTRUCTURE", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771825580930-VRM_GRAND_STAY__60_.webp" },
  { id: 20, title: "Township Planning", category: "RESIDENTIAL & INFRASTRUCTURE", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771825629755-VRM_GRAND_STAY__67_.webp" },
  { id: 21, title: "Township Planning", category: "RESIDENTIAL & INFRASTRUCTURE", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771825709742-VRM_GRAND_STAY__64_.webp" },
  { id: 22, title: "Township Planning", category: "RESIDENTIAL & INFRASTRUCTURE", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771830300427-VRM_GRAND_STAY__35_.webp" },
  { id: 23, title: "Township Planning", category: "RESIDENTIAL & INFRASTRUCTURE", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771826090305-VRM_GRAND_STAY__124_.webp" },
  { id: 24, title: "Township Planning", category: "RESIDENTIAL & INFRASTRUCTURE", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771826132979-VRM_GRAND_STAY__123_.webp" },
  { id: 25, title: "Township Planning", category: "RESIDENTIAL & INFRASTRUCTURE", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771830758489-VRM_GRAND_STAY__15_.webp" },
  { id: 26, title: "Township Planning", category: "RESIDENTIAL & INFRASTRUCTURE", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771830821162-VRM_GRAND_STAY__17_.webp" },
  { id: 27, title: "Township Planning", category: "RESIDENTIAL & INFRASTRUCTURE", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771830855223-VRM_GRAND_STAY__19_.webp" },
  { id: 28, title: "Township Planning", category: "RESIDENTIAL & INFRASTRUCTURE", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771830885369-VRM_GRAND_STAY__22_.webp" },
  { id: 29, title: "Township Planning", category: "RESIDENTIAL & INFRASTRUCTURE", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771830911593-VRM_GRAND_STAY__24_.webp" },
  { id: 30, title: "Township Planning", category: "RESIDENTIAL & INFRASTRUCTURE", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771830981625-VRM_GRAND_STAY__33_.webp" },

  // INDUSTRIAL OPERATIONS (31–45)
  { id: 31, title: "Engineering Setup", category: "INDUSTRIAL OPERATIONS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831158209-DSC00220.webp" },
  { id: 32, title: "Production Line", category: "INDUSTRIAL OPERATIONS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831173476-DSC00236.webp" },
  { id: 33, title: "Industrial Unit", category: "INDUSTRIAL OPERATIONS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831264750-DSC00248.webp" },
  { id: 34, title: "Machinery Floor", category: "INDUSTRIAL OPERATIONS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831280172-exotic_engineering_image.webp"},
  { id: 35, title: "Machinery Floor", category: "INDUSTRIAL OPERATIONS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831317135-P2_00002.webp"},
  { id: 36, title: "Machinery Floor", category: "INDUSTRIAL OPERATIONS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831334544-P2_00028.webp"},
  { id: 37, title: "Machinery Floor", category: "INDUSTRIAL OPERATIONS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831349625-P2_09905.webp"},
  { id: 38, title: "Machinery Floor", category: "INDUSTRIAL OPERATIONS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831366214-P2_09929.webp"},
  { id: 39, title: "Machinery Floor", category: "INDUSTRIAL OPERATIONS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831380685-P2_09948.webp"},
  { id: 40, title: "Machinery Floor", category: "INDUSTRIAL OPERATIONS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831394639-RDMK0679.webp"},
  { id: 41, title: "Machinery Floor", category: "INDUSTRIAL OPERATIONS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831414176-RDMK0683.webp"},
  { id: 42, title: "Machinery Floor", category: "INDUSTRIAL OPERATIONS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831429741-RDMK0689.webp"},
  { id: 43, title: "Machinery Floor", category: "INDUSTRIAL OPERATIONS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831470740-RDMK0690.webp"},
  { id: 44, title: "Machinery Floor", category: "INDUSTRIAL OPERATIONS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831571055-VRM_GRAND_STAY__77_.webp"},
  { id: 45, title: "Machinery Floor", category: "INDUSTRIAL OPERATIONS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831518126-RDMK0701.webp"},

  // COMMUNITY & EVENTS (46–48)
  { id: 46, title: "Community Outreach", category: "COMMUNITY & EVENTS", image:"https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831667112-VRM_GRAND_STAY__36_.webp" },
  { id: 47, title: "Celebration Event", category: "COMMUNITY & EVENTS", image:"https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831689190-VRM_GRAND_STAY__43_.webp" },
  { id: 48, title: "Public Program", category: "COMMUNITY & EVENTS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771831706849-VRM_GRAND_STAY__45_.webp" },
  { id: 49, title: "Public Program", category: "COMMUNITY & EVENTS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771832545181-VRM_GRAND_STAY__12_.webp" },
  { id: 50, title: "Public Program", category: "COMMUNITY & EVENTS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771832651686-VRM_GRAND_STAY__31_.webp" },
  { id: 51, title: "Public Program", category: "COMMUNITY & EVENTS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771832764898-VRM_GRAND_STAY__49_.webp" },
  { id: 52, title: "Public Program", category: "COMMUNITY & EVENTS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771832858530-VRM_GRAND_STAY__54_.webp" },
  { id: 53, title: "Public Program", category: "COMMUNITY & EVENTS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771832919198-VRM_GRAND_STAY__42_.webp" },
  { id: 54, title: "Public Program", category: "COMMUNITY & EVENTS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771832950818-VRM_GRAND_STAY__52_.webp" },
  { id: 55, title: "Public Program", category: "COMMUNITY & EVENTS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771832975825-VRM_GRAND_STAY__58_.webp" },
  { id: 56, title: "Public Program", category: "COMMUNITY & EVENTS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771832995669-VRM_GRAND_STAY__59_.webp" },
  { id: 57, title: "Public Program", category: "COMMUNITY & EVENTS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771833018881-VRM_GRAND_STAY__119_.webp" },
  { id: 58, title: "Public Program", category: "COMMUNITY & EVENTS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771833063282-VRM_GRAND_STAY__2_.webp" },
  { id: 59, title: "Public Program", category: "COMMUNITY & EVENTS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771833093121-VRM_GRAND_STAY__4_.webp" },
  { id: 60, title: "Public Program", category: "COMMUNITY & EVENTS", image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/gallery/1771833159060-VRM_GRAND_STAY__5_.webp" },
];