"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Typography from "@/lib/typography";
import { TIMELINE_EVENTS, JOURNEY_HEADING, JOURNEY_DESCRIPTION } from "@/lib/constants";

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const yearRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prevIndexRef = useRef(-1);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isDesktop, setIsDesktop] = useState(false);

  // Motion value from 0 -> 1 along timeline
  const progressY = useMotionValue(0);
  const springProgress = useSpring(progressY, { stiffness: 36, damping: 24, mass: 1.15 });

  // Slower, smoother dot movement while scrolling
  const dotY = useMotionValue(0);
  const springDotY = useSpring(dotY, { stiffness: 52, damping: 26, mass: 1 });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !timelineRef.current) return;

      const scrollTop = window.scrollY;
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const timelineTop = timelineRect.top + scrollTop;
      const height = timelineRect.height;
      const dotSize = 16;

      // Year positions (center Y of each year div in document)
      const yearPoints = yearRefs.current
        .map((el) => {
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return rect.top + scrollTop + rect.height / 2;
        })
        .filter((value): value is number => value !== null);

      if (yearPoints.length === 0) {
        setActiveIndex(-1);
        progressY.set(0);
        dotY.set(0);
        return;
      }

      // Reference: viewport center – when it passes a year center, that year is active
      const refY = scrollTop + window.innerHeight / 2;
      let rawIndex = -1;
      for (let idx = 0; idx < yearPoints.length; idx++) {
        if (refY >= yearPoints[idx]) rawIndex = idx;
      }

      // Move at most one step at a time (no skipping on fast scroll, same for reverse)
      const prev = prevIndexRef.current;
      let currentIndex = rawIndex;
      if (rawIndex > prev + 1) currentIndex = prev + 1;
      else if (rawIndex < prev - 1) currentIndex = prev - 1;
      prevIndexRef.current = currentIndex;

      setActiveIndex(currentIndex);

      // Dot snaps exactly to the active year div (so it stops at each year)
      const dotYTarget =
        currentIndex < 0
          ? 0
          : Math.min(
              Math.max(yearPoints[currentIndex] - timelineTop - dotSize / 2, 0),
              Math.max(height - dotSize, 0)
            );
      dotY.set(dotYTarget);

      // Progress line fills to the dot position
      const progress = height > 0 ? Math.min(dotYTarget / height, 1) : 0;
      progressY.set(progress);
    };

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [progressY, dotY]);

  return (
    <section className="relative w-full bg-black py-4 lg:py-24 px-2 sm:px-4 md:px-22 lg:px-4 xl:px-32" ref={containerRef}>
      <div className="mx-auto text-left mb-16 lg:mb-20 lg:px-6">
        <Typography variant="display-2xl" className="text-white font-cormorant mb-4 leading-relaxed font-medium whitespace-nowrap">
          {JOURNEY_HEADING}
        </Typography>
        <Typography variant="h1" className="text-white/90 max-w-3xl font-cormorant font-light">
          {JOURNEY_DESCRIPTION}
        </Typography>
      </div>
      <div className="relative max-w-5xl mx-auto pl-12 pr-4 lg:pl-0 lg:pr-0" ref={timelineRef}>
        {/* Timeline vertical line: left below 1024px, center above */}
        <div className="absolute left-4 lg:left-1/2 w-[2px] h-full top-0 bg-white/20 lg:-translate-x-1/2" />

        {/* Progress filled line */}
        <motion.div
          className="absolute left-4 lg:left-1/2 w-[2px] z-10 origin-top top-0 bg-white lg:-translate-x-1/2"
          style={{ scaleY: springProgress }}
        />

        {/* Smooth dot */}
        <motion.div
          className="absolute left-4 lg:left-1/2 w-4 h-4 rounded-full bg-white z-10 lg:-translate-x-1/2"
          style={{ top: springDotY }}
        />

        {TIMELINE_EVENTS.map((event, idx) => {
          const isLeft = idx % 2 === 0;
          const isActive = idx === activeIndex;
          const hiddenX = isDesktop ? (isLeft ? -70 : 70) : 70;
          const alignmentClass = isLeft
            ? "lg:col-start-1 lg:justify-self-end lg:pr-4"
            : "lg:col-start-2 lg:justify-self-start lg:pl-4";
          const yearAlignClass = isLeft ? "lg:text-right" : "lg:text-left";

          return (
            <div
              key={idx}
              className="relative mb-10 lg:mb-12 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center w-full"
            >
              <motion.div
                initial={{ opacity: 0, x: hiddenX, y: 16 }}
                animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : hiddenX, y: isActive ? 0 : 16 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`w-full max-w-full lg:max-w-[92%] mx-auto lg:mx-0 lg:w-[95%] lg:max-w-none text-left ${alignmentClass}`}
              >
                <div
                  ref={(el) => {
                    yearRefs.current[idx] = el;
                  }}
                  className={`text-left ${yearAlignClass}`}
                >
                  <Typography variant="h2" className="text-white font-light font-cinzel">
                    {event.year}
                  </Typography>
                </div>
                <div
                  className="mt-1.5 rounded-lg px-4 py-2.5 text-center"
                  style={{ backgroundColor: "#ED1C2475" }}
                >
                  <Typography variant="h4" className="text-white font-medium font-cinzel uppercase tracking-wide line-clamp-2 sm:line-clamp-none sm:whitespace-nowrap">
                    {event.title}
                  </Typography>
                </div>
                <Typography
                  variant="h4"
                  className="mt-2 border border-white bg-black/40 px-4 py-3 rounded-lg leading-relaxed text-white/90 font-cormorant text-left"
                >
                  {event.description}
                </Typography>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
