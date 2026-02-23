"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Typography from "@/lib/typography";

const MOBILE_BREAKPOINT = 768;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

type BusinessSection = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const businessSections: BusinessSection[] = [
  {
    title: "Exotic Retreat",
    description:
      "Exotic Retreat represents VRM Group's approach to hospitality, blending comfort, accessibility and environment-driven experiences for accommodation, families, professionals and event-visitors.",
    image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/ourbusiness/1771822643848-Exotic_Retreat_image.webp",
    href: "/our-business/exotic-retreat",
  },
  {
    title: "Elite Infra",
    description:
      "Elite Infra represents the group's commitment to construction, residential projects and infrastructure initiatives for community and growth.",
    image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/ourbusiness/1771822701066-Elite_Infra_image.webp",
    href: "/our-business/elite-infra",
  },
  {
    title: "Exotic Enterprises",
    description:
      "Strategically developed warehousing facilities to support regional enterprise development.",
    image: "/our-business/Exotic Enterprises image.webp",
    href: "/our-business/exotic-enterprises",
  },
  {
    title: "Exotic Bar & Bistro",
    description:
      "A lifestyle dining space combining ambience, food and entertainment as part of the group's expansion into the leisure sector.",
    image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/ourbusiness/1771822754872-Exotic_Bar___Bistro_image.webp",
    href: "/our-business/exotic-bar-bistro",
  },
  {
    title: "Exotic Innovation & Engineering",
    description:
      "The technical backbone of the group, integrating CNC-enabled manufacturing and modern fabrication practices.",
    image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/ourbusiness/1771822826870-Exotic_Innovation___Engineering_image.webp",
    href: "/our-business/elite-innovation-engineering",
  },
  {
    title: "Exotic Hospitality",
    description:
      "Exotic Hospitality provides dependable management for residential properties with organized services and experienced supervision.",
    image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/ourbusiness/1771822864592-Exotic_Hospitality_image.webp",
    href: "/our-business/exotic-hospitality",
  },
  {
    title: "Greatway International School",
    description:
      "An early initiative within the VRM ecosystem, committed to academic discipline, personal development and foundational education.",
    image: "https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/ourbusiness/1771822889712-Greatway_International_School_image.webp",
    href: "/our-business/school",
  },
];

function StackCard({
  section,
  index,
  progress,
  isTopCard,
}: {
  section: BusinessSection;
  index: number;
  progress: any;
  isTopCard: boolean;
}) {


  const GAP = 36; // vertical stack gap when moving
  const SCALE_GAP = 0.025; // size difference: front card bigger, back cards smaller
  const PEEK = 30; // how much back cards stick up (peek from top)

  const segment = 1 / businessSections.length;
  const start = index * segment;
  const end = start + segment;

  // Cards behind peek from top (more negative y); last/current card stays central (y=0)
  const yEnd = -(businessSections.length - 1 - index) * PEEK;
  const y = useTransform(
    progress,
    [start, end, 1],
    [240, yEnd, yEnd]
  );

  // Last/current card biggest (1); cards behind get progressively smaller
  const scaleEnd = 1 - (businessSections.length - 1 - index) * SCALE_GAP;
  const scale = useTransform(
    progress,
    [start, end, 1],
    [1, scaleEnd, scaleEnd]
  );

  const opacity = useTransform(
    progress,
    [start, start + 0.008],
    [0, 1]
  );

  // First card at back; each next card stacks on top; only top card receives clicks
  return (
    <motion.article
      style={{
        y,
        scale,
        opacity,
        zIndex: index,
        pointerEvents: isTopCard ? "auto" : "none",
      }}
      className="absolute inset-0 flex items-center justify-center px-4 md:px-8"
    >
      <div className="grid w-full max-w-[50rem] md:max-w-[60rem] lg:max-w-[70rem] xl:max-w-[85rem] gap-10 rounded-2xl border border-white/15 bg-[#0d0d0d]/90 p-6 md:grid-cols-2 md:p-10">
        <div
          className={`flex justify-center ${index % 2 === 0 ? "md:order-1" : ""
            }`}
        >
          <img
            src={section.image}
            alt={section.title}
            className="h-[300px] w-[260px] rounded-md object-cover shadow-2xl md:h-[430px] md:w-[380px]"
          />
        </div>

        <div className="flex flex-col justify-center">
          <Typography variant="display-2xl" className="text-white font-cormorant">
            {section.title}
          </Typography>

          <Typography variant="h2" className="mt-5 leading-relaxed text-white/80 font-cormorant">
            {section.description}
          </Typography>

          <Link
            href={section.href}
            className="mt-8 inline-flex w-fit items-center justify-center rounded-full border border-white bg-[#ED1C2475] px-14 py-4 text-white transition"
          >
            <Typography variant="body-xl" className="text-white normal-case">
              VIEW MORE
            </Typography>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function MobileCardList() {
  return (
    <section className="relative space-y-6 px-4 py-12 md:px-8">
      {businessSections.map((section) => (
        <article
          key={section.title}
          className="grid w-full max-w-6xl mx-auto gap-6 rounded-2xl border border-white/15 bg-[#0d0d0d]/90 p-5 text-center md:p-6 md:text-left"
        >
          <div className="flex justify-center order-1">
            <img
              src={section.image}
              alt={section.title}
              className="h-[220px] w-full max-w-[280px] rounded-md object-cover shadow-2xl md:h-[280px]"
            />
          </div>
          <div className="flex flex-col items-center order-2 md:items-start">
            <Typography variant="h2" className="text-white">
              {section.title}
            </Typography>
            <Typography variant="body-xl" className="mt-3 leading-relaxed text-white/80 md:mt-4">
              {section.description}
            </Typography>
            <Link
              href={section.href}
              className="mt-6 inline-flex w-fit items-center justify-center rounded-full border border-white bg-[#ED1C2475] px-10 py-3 text-white transition hover:bg-[#ed1c24a0] md:mt-8 md:px-14 md:py-4"
            >
              <Typography variant="overline" className="text-white normal-case">
                VIEW MORE
              </Typography>
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}

function BusinessStack() {
  const ref = useRef<HTMLDivElement>(null);
  const [topCardIndex, setTopCardIndex] = useState(0);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const index = Math.min(
      Math.floor(v * businessSections.length),
      businessSections.length - 1
    );
    setTopCardIndex(index);
  });

  return (
    <section
      ref={ref}
      className="relative"
      style={isMobile ? undefined : { height: `${businessSections.length * 90}vh` }}
    >
      {isMobile ? (
        <MobileCardList />
      ) : (
        <div className="sticky top-35  h-screen ">
          {businessSections.map((section, index) => (
            <StackCard
              key={section.title}
              section={section}
              index={index}
              progress={scrollYProgress}
              isTopCard={index === topCardIndex}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default function OurBusinessPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      <section className="relative">
        <img
          src="https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/ourbusiness/1771822498911-Transforming_Vision_Into_Lasting_Development_image.webp" alt="Our Business Banner"
          className="h-[58vh] w-full object-cover md:h-[72vh]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <Typography variant="display-2xl" className="max-w-5xl text-white font-cormorant">
            Transforming Vision Into Lasting Development
          </Typography>
        </div>
      </section>


      <BusinessStack />
    </main>
  );
}