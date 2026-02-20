"use client";

import Link from "next/link";
import { motion, type MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
      "Exotic Retreat represents VRM Group's approach to hospitality, blending comfort, accessibility and environment-driven experiences. Designed to accommodate families, professionals and event visitors, the retreat prioritises ease, relaxation and quality service.",
    image: "https://www.figma.com/api/mcp/asset/a4acb604-59bb-42bf-beb8-3ba941caca5b",
    href: "/our-business/exotic-retreat",
  },
  {
    title: "Elite Infra",
    description:
      "Elite Infraa represents the group's commitment to construction strength and responsible development. Through residential projects and infrastructure initiatives, the division contributes to environments built for continuity and growth.",
    image: "https://www.figma.com/api/mcp/asset/85165f4c-88ec-4e89-8fc7-747cb7c48ee1",
    href: "/our-business/elite-infra",
  },
  {
    title: "Exotic Enterprises",
    description:
      "Strategically developed warehousing facilities enable businesses to operate efficiently within growing industrial corridors. The initiative reflects VRM Group's commitment to supporting regional enterprise development.",
    image: "https://www.figma.com/api/mcp/asset/966f7466-865c-4cfb-ad84-ac12fe3ea0f2",
    href: "/our-business/elite-enterprises",
  },
  {
    title: "Exotic Bar & Bistro",
    description:
      "Combining ambience, food and entertainment, Exotic Bar & Bistro reflects VRM Group's expansion into lifestyle experiences. It is designed as a welcoming space where quality dining and social interaction come together seamlessly.",
    image: "https://www.figma.com/api/mcp/asset/2a0f7c42-05c7-4283-8481-dea7db4bc2a7",
    href: "/our-business/exotic-bar-bistro",
  },
  {
    title: "Exotic Innovation & Engineering",
    description:
      "Serving as the technical backbone of VRM Group's industrial ecosystem, the facility integrates CNC-enabled manufacturing systems and modern fabrication practices to support industrial requirements with accuracy and efficiency.",
    image: "https://www.figma.com/api/mcp/asset/5fff4c6e-e47d-4a1e-8459-56be0fa64913",
    href: "/our-business/exotic-innovation-engineering",
  },
  {
    title: "Exotic Hospitality",
    description:
      "Serving as the technical backbone of VRM Group's industrial ecosystem, the facility integrates CNC-enabled manufacturing systems and modern fabrication practices to support industrial requirements with accuracy and efficiency.",
    image: "https://www.figma.com/api/mcp/asset/c4cdd07d-61d6-4e4c-bcf3-98653fe1bd00",
    href: "/our-business/exotic-hospitality",
  },
  {
    title: "Greatway International School",
    description:
      "Established as one of the earliest initiatives within the VRM ecosystem, the school reflects a commitment to academic discipline, personal development and foundational education.",
    image: "https://www.figma.com/api/mcp/asset/6524da52-3671-4aac-85e6-00a933d9439c",
    href: "/our-business/greatway-international-school",
  },
];

function StackCard({
  section,
  index,
  total,
  progress,
}: {
  section: BusinessSection;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const mid = start + 0.5 / total;
  const end = (index + 1) / total;
  const fadeInStart = index === 0 ? 0 : Math.max(0, start - 0.03);
  const fadeOutEnd = index === total - 1 ? 1 : Math.min(1, end + 0.03);

  const y = useTransform(progress, [start, mid, end], [120, 0, -120]);
  const scale = useTransform(progress, [start, mid, end], [0.95, 1, 0.96]);
  const opacity = useTransform(
    progress,
    [fadeInStart, start + 0.06, end - 0.06, fadeOutEnd],
    [index === 0 ? 1 : 0, 1, 1, index === total - 1 ? 1 : 0]
  );
  const isImageRight = index % 2 === 0;

  return (
    <motion.article
      style={{ y, opacity, scale, zIndex: total - index }}
      className="absolute inset-0 flex items-center justify-center px-4 md:px-10"
    >
      <div className="grid w-full max-w-6xl gap-10 rounded-2xl border border-white/15 bg-[#111111]/70 p-6 backdrop-blur-sm md:grid-cols-2 md:p-10">
        <div className={`${isImageRight ? "md:order-1" : "md:order-0"} flex items-center justify-center`}>
          <img
            src={section.image}
            alt={section.title}
            className="h-[300px] w-[260px] rounded-md border border-white/40 object-cover shadow-2xl md:h-[430px] md:w-[380px]"
          />
        </div>
        <div className={`${isImageRight ? "md:order-0" : "md:order-1"} flex flex-col justify-center`}>
          <h2 className="font-cinzel text-3xl font-semibold text-white md:text-4xl">{section.title}</h2>
          <p className="mt-5 max-w-xl font-cormorant text-[25px] font-medium leading-[35px] tracking-normal text-white/85">
            {section.description}
          </p>
          <div className="mt-8">
            <Link
              href={section.href}
              className="inline-flex items-center rounded-full border border-white bg-[#ED1C2475] px-14 py-4 font-poppins text-base font-medium uppercase tracking-wide text-white transition hover:bg-[#ed1c24a0] md:px-20 md:py-4 md:text-lg"
            >
              VIEW MORE
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function BusinessStack() {
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={stackRef} className="relative" style={{ height: `${businessSections.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {businessSections.map((section, index) => (
          <StackCard
            key={section.title}
            section={section}
            index={index}
            total={businessSections.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

export default function OurBusinessPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      <section className="relative">
        <img
          src="https://www.figma.com/api/mcp/asset/f13a8277-a8cd-4383-b3b4-af276da49fd3"
          alt="Our Business Banner"
          className="h-[58vh] w-full object-cover md:h-[72vh]"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <h1 className="max-w-5xl font-cinzel text-3xl font-medium leading-tight text-white md:text-5xl">
            Transforming Vision Into Lasting Development
          </h1>
        </div>
      </section>

      <div className="mx-auto mb-6 mt-8 h-px w-[92%] bg-white/20" />

      <BusinessStack />
    </main>
  );
}
