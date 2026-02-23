// "use client";

// import { useRef, useEffect, useState } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";
// import Typography from "@/lib/typography";
// import {
//   TIMELINE_EVENTS,
//   JOURNEY_HEADING,
//   JOURNEY_DESCRIPTION,
// } from "@/lib/constants";

// export default function TimelineSection() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const timelineRef = useRef<HTMLDivElement>(null);
//   const yearRefs = useRef<(HTMLDivElement | null)[]>([]);

//   const [activeIndex, setActiveIndex] = useState(-1);
//   const [isDesktop, setIsDesktop] = useState(false);

//   /* ================= SMOOTH DOT ================= */

//   const dotTarget = useMotionValue(0);

//   const dotY = useSpring(dotTarget, {
//     stiffness: 140,
//     damping: 28,
//   });

//   const progress = useSpring(dotTarget, {
//     stiffness: 120,
//     damping: 30,
//   });

//   /* ================= STEP SCROLL (FIXED) ================= */

//   useEffect(() => {
//     let ticking = false;

//     const handleScroll = () => {
//       if (!timelineRef.current || ticking) return;

//       ticking = true;

//       requestAnimationFrame(() => {
//         const scrollY = window.scrollY;
//         const triggerPoint =
//           scrollY + window.innerHeight * 0.55;

//         let calculatedIndex = -1;

//         yearRefs.current.forEach((el, i) => {
//           if (!el) return;

//           const rect = el.getBoundingClientRect();
//           const center =
//             rect.top + scrollY + rect.height / 2;

//           if (triggerPoint >= center) {
//             calculatedIndex = i;
//           }
//         });

//         setActiveIndex((prev) => {
//           // Move only one step at a time
//           if (calculatedIndex > prev)
//             return prev + 1;

//           if (calculatedIndex < prev)
//             return prev - 1;

//           return prev;
//         });

//         ticking = false;
//       });
//     };

//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 1024);
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);

//     handleResize();
//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   /* ================= MOVE DOT WHEN INDEX CHANGES ================= */

//   useEffect(() => {
//     if (!timelineRef.current) return;

//     const timelineRect =
//       timelineRef.current.getBoundingClientRect();

//     const scrollTop = window.scrollY;
//     const timelineTop =
//       timelineRect.top + scrollTop;

//     const dotSize = 16;

//     if (activeIndex < 0) {
//       dotTarget.set(0);
//       return;
//     }

//     const el = yearRefs.current[activeIndex];
//     if (!el) return;

//     const rect = el.getBoundingClientRect();

//     const yearCenter =
//       rect.top +
//       scrollTop +
//       rect.height / 2;

//     const target =
//       yearCenter - timelineTop - dotSize / 2;

//     dotTarget.set(target);
//   }, [activeIndex]);

//   /* ================= UI ================= */

//   return (
//     <section
//       ref={containerRef}
//       className="relative w-full bg-black py-4 xl:py-24 px-2 sm:px-4 md:px-22 lg:px-4 xl:px-32"
//     >
//       {/* HEADER */}
//       <div className="mx-auto text-center lg:text-left mb-16 lg:mb-20 lg:px-6">
//         <Typography
//           variant="display-2xl"
//           className="text-white font-cormorant mb-4 font-medium"
//         >
//           {JOURNEY_HEADING}
//         </Typography>

//         <Typography
//           variant="h1"
//           className="text-white/90 max-w-3xl font-cormorant font-light mx-auto lg:mx-0"
//         >
//           {JOURNEY_DESCRIPTION}
//         </Typography>
//       </div>

//       <div
//         ref={timelineRef}
//         className="relative max-w-5xl mx-auto pl-12 pr-4 lg:pl-0 lg:pr-0"
//       >
//         {/* LINE */}
//         <div className="absolute left-4 lg:left-1/2 w-[2px] h-full bg-white/20 lg:-translate-x-1/2" />

//         {/* PROGRESS */}
//         <motion.div
//           className="absolute left-4 lg:left-1/2 w-[2px] bg-white origin-top lg:-translate-x-1/2"
//           style={{ height: dotY }}
//         />

//         {/* DOT */}
//         <motion.div
//           className="absolute left-4 lg:left-1/2 w-4 h-4 rounded-full bg-white lg:-translate-x-1/2"
//           style={{ top: dotY }}
//         />

//         {/* EVENTS */}
//         {TIMELINE_EVENTS.map((event, idx) => {
//           const isLeft = idx % 2 === 0;
//           const isActive = idx <= activeIndex;

//           const hiddenX =
//             isDesktop ? (isLeft ? -80 : 80) : 80;

//           const alignmentClass = isLeft
//             ? "lg:col-start-1 lg:justify-self-end lg:pr-4"
//             : "lg:col-start-2 lg:justify-self-start lg:pl-4";

//           const yearAlignClass = isLeft
//             ? "lg:text-right"
//             : "lg:text-left";

//           return (
//             <div
//               key={idx}
//               className="relative mb-10 lg:mb-12 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center"
//             >
//               <motion.div
//                 initial={{ opacity: 0, x: hiddenX }}
//                 animate={{
//                   opacity: isActive ? 1 : 0,
//                   x: isActive ? 0 : hiddenX,
//                 }}
//                 transition={{ duration: 0.5 }}
//                 className={`w-full text-left ${alignmentClass}`}
//               >
//                 <div
//                   ref={(el) =>
//                     {(yearRefs.current[idx] = el)}
//                   }
//                   className={yearAlignClass}
//                 >
//                   <Typography
//                     variant="h2"
//                     className="text-white font-light font-cinzel"
//                   >
//                     {event.year}
//                   </Typography>
//                 </div>

//                 <div
//                   className="mt-2 rounded-full px-4 py-2 text-center"
//                   style={{ backgroundColor: "#ED1C2475" }}
//                 >
//                   <Typography
//                     variant="h4"
//                     className="text-white font-cinzel uppercase"
//                   >
//                     {event.title}
//                   </Typography>
//                 </div>

//                 <Typography
//                   variant="h4"
//                   className="mt-2 border border-white bg-black/40 px-4 py-3 rounded-lg text-white/90 font-cormorant"
//                 >
//                   {event.description}
//                 </Typography>
//               </motion.div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Typography from "@/lib/typography";
import {
  TIMELINE_EVENTS,
  JOURNEY_HEADING,
  JOURNEY_DESCRIPTION,
} from "@/lib/constants";

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const yearRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(-1);
  const [isDesktop, setIsDesktop] = useState(false);

  /* ================= SMOOTH DOT ================= */

  const dotTarget = useMotionValue(0);

  const dotY = useSpring(dotTarget, {
    stiffness: 140,
    damping: 28,
  });

  const progress = useSpring(dotTarget, {
    stiffness: 120,
    damping: 30,
  });

  /* ================= STEP SCROLL ================= */

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!timelineRef.current || ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const triggerPoint = scrollY + window.innerHeight * 0.55;

        let calculatedIndex = -1;

        yearRefs.current.forEach((el, i) => {
          if (!el) return;

          const rect = el.getBoundingClientRect();
          const center = rect.top + scrollY + rect.height / 2;

          if (triggerPoint >= center) {
            calculatedIndex = i;
          }
        });

        setActiveIndex((prev) => {
          if (calculatedIndex > prev) return prev + 1;
          if (calculatedIndex < prev) return prev - 1;
          return prev;
        });

        ticking = false;
      });
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
  }, []);

  /* ================= MOVE DOT WHEN INDEX CHANGES ================= */

  useEffect(() => {
    if (!timelineRef.current) return;

    const timelineRect = timelineRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY;
    const timelineTop = timelineRect.top + scrollTop;
    const dotSize = 16;

    if (activeIndex < 0) {
      dotTarget.set(0);
      return;
    }

    const el = yearRefs.current[activeIndex];
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const yearCenter = rect.top + scrollTop + rect.height / 2;

    const target = yearCenter - timelineTop - dotSize / 2;

    dotTarget.set(target);
  }, [activeIndex]);

  /* ================= UI ================= */

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-black py-4 xl:py-24 px-2 sm:px-4 md:px-22 lg:px-4 xl:px-32"
    >
      {/* HEADER */}
      <div className="mx-auto text-center lg:text-left mb-16 lg:mb-20 lg:px-6">
        <Typography
          variant="display-2xl"
          className="text-white font-cormorant mb-4 font-medium"
        >
          {JOURNEY_HEADING}
        </Typography>

        <Typography
          variant="h1"
          className="text-white/90 max-w-3xl font-cormorant font-light mx-auto lg:mx-0"
        >
          {JOURNEY_DESCRIPTION}
        </Typography>
      </div>

      <div
        ref={timelineRef}
        className="relative max-w-5xl mx-auto pl-12 pr-4 lg:pl-0 lg:pr-0"
      >
        {/* LINE */}
        <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-[2px] h-full bg-white/20" />

        {/* PROGRESS */}
        <motion.div
          className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-[2px] bg-white origin-top"
          style={{ height: dotY }}
        />

        {/* DOT */}
        <motion.div
          className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white"
          style={{ top: dotY }}
        />

        {/* EVENTS */}
        {TIMELINE_EVENTS.map((event, idx) => {
          const isLeft = idx % 2 === 0;
          const isActive = idx <= activeIndex;

          const alignmentClass = isLeft
            ? "lg:col-start-1 lg:justify-self-end lg:pr-4"
            : "lg:col-start-2 lg:justify-self-start lg:pl-4";

          const yearAlignClass = isLeft
            ? "lg:text-right"
            : "lg:text-left";

          return (
            <div
              key={idx}
              className="relative mb-10 lg:mb-12 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 40,
                  scale: isActive ? 1 : 0.98,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`w-full text-left ${alignmentClass}`}
              >
                <div
                  ref={(el) => {
                    yearRefs.current[idx] = el;
                  }}
                  className={yearAlignClass}
                >
                  <Typography
                    variant="h2"
                    className="text-white font-light font-cinzel"
                  >
                    {event.year}
                  </Typography>
                </div>

                <div
                  className="mt-2 rounded-full px-4 py-2 text-center"
                  style={{ backgroundColor: "#ED1C2475" }}
                >
                  <Typography
                    variant="h4"
                    className="text-white font-cinzel uppercase"
                  >
                    {event.title}
                  </Typography>
                </div>

                <Typography
                  variant="h4"
                  className="mt-2 border border-white bg-black/40 px-4 py-3 rounded-lg text-white/90 font-cormorant"
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