"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

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
      "Exotic Retreat represents VRM Group's approach to hospitality, blending comfort, accessibility and environment-driven experiences.",
    image:
      "https://www.figma.com/api/mcp/asset/a4acb604-59bb-42bf-beb8-3ba941caca5b",
    href: "/our-business/exotic-retreat",
  },
  {
    title: "Elite Infra",
    description:
      "Elite Infra represents the group's commitment to construction strength and responsible development.",
    image:
      "https://www.figma.com/api/mcp/asset/85165f4c-88ec-4e89-8fc7-747cb7c48ee1",
    href: "/our-business/elite-infra",
  },
  {
    title: "Exotic Enterprises",
    description:
      "Strategically developed warehousing facilities supporting industrial growth.",
    image:
      "https://www.figma.com/api/mcp/asset/966f7466-865c-4cfb-ad84-ac12fe3ea0f2",
    href: "/our-business/elite-enterprises",
  },
  {
    title: "Exotic Bar & Bistro",
    description:
      "A lifestyle dining space combining ambience, food and entertainment.",
    image:
      "https://www.figma.com/api/mcp/asset/2a0f7c42-05c7-4283-8481-dea7db4bc2a7",
    href: "/our-business/exotic-bar-bistro",
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
  const SCALE_GAP = 0.008;
  const PEEK = 20; // how much back cards stick up (peek from top)

  const start = index * 0.25;
  const end = start + 0.25;

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
      <div className="grid w-full max-w-6xl gap-10 rounded-2xl border border-white/15 bg-[#0d0d0d]/90 p-6 md:grid-cols-2 md:p-10">
        <div
          className={`flex justify-center ${
            index % 2 === 0 ? "md:order-1" : ""
          }`}
        >
          <img
            src={section.image}
            alt={section.title}
            className="h-[300px] w-[260px] rounded-md object-cover shadow-2xl md:h-[430px] md:w-[380px]"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="font-cinzel text-3xl text-white md:text-4xl">
            {section.title}
          </h2>

          <p className="mt-5 text-xl leading-relaxed text-white/80">
            {section.description}
          </p>

          <Link
            href={section.href}
            scroll={false}
            className="mt-8 inline-flex w-fit rounded-full border border-white bg-[#ED1C2475] px-14 py-4 text-white transition hover:bg-[#ed1c24a0]"
          >
            VIEW MORE
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function BusinessStack() {
  const ref = useRef<HTMLDivElement>(null);
  const [topCardIndex, setTopCardIndex] = useState(0);

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
      style={{ height: `${businessSections.length * 90}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
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
          <h1 className="max-w-5xl font-cinzel text-3xl md:text-5xl">
            Transforming Vision Into Lasting Development
          </h1>
        </div>
      </section>

      <div className="mx-auto my-10 h-px w-[92%] bg-white/20" />

      <BusinessStack />
    </main>
  );
}