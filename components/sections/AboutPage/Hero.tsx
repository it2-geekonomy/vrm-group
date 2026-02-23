// "use client";

// import Typography from "@/lib/typography";

// export default function AboutPage() {
//   return (
//     <section className="relative w-full h-screen overflow-hidden">

//       {/* Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover"
//       >
//         <source src="/Diverse Sectors.mp4" type="video/mp4" />
//       </video>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/50" />

//       {/* Centered Content */}
//       <div className="relative z-10 flex items-center justify-center h-full text-center px-2 sm:px-2 md:px-6 lg:px-10 xl:px-24">

//         <div className="max-w-5xl">

//           <Typography
//             variant="display-2xl"
//             className="text-white font-cormorant leading-relaxed font-medium"
//           >
//             Driven by Vision. Built Through Progress.
//           </Typography>

//           <Typography
//             variant="h1"
//             className="text-white font-cormorant mt-6 font-light"
//           >
//             From education to engineering, hospitality to infrastructure.
//             VRM Group’s journey reflects steady expansion guided by purpose,
//             leadership and execution.
//           </Typography>

//         </div>
//       </div>

//     </section>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import Typography from "@/lib/typography";

export default function AboutPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [muted, setMuted] = useState(true);

  // Auto-mute when section leaves viewport
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.muted = true;
          setMuted(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[50vh] md:h-[80vh] lg:h-[85vh] overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: "center center",
            minWidth: "100%",
            minHeight: "100%",
            width: "100%",
            height: "100%",
          }}
        >
          <source
            src="https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1771743800305-IMG_2789.MP4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Mute / Unmute Button */}
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-2 right-2 lg:bottom-6 lg:right-6 z-20 flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-white backdrop-blur-sm transition hover:bg-black/70"
      >
        {muted ? (
          <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
            <Typography variant="body-sm" className="text-white">
              Unmute
            </Typography>
          </>
        ) : (
          <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
            <Typography variant="body-sm" className="text-white">
              Mute
            </Typography>
          </>
        )}
      </button>

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-2 sm:px-2 md:px-6 lg:px-10 xl:px-24">
        <div className="max-w-5xl">
          <Typography
            variant="display-2xl"
            className="text-white font-cormorant leading-relaxed font-medium"
          >
            Driven by Vision. Built Through Progress.
          </Typography>

          <Typography
            variant="h1"
            className="text-white font-cormorant mt-6 font-light"
          >
            From education to engineering, hospitality to infrastructure.
            VRM Group’s journey reflects steady expansion guided by purpose,
            leadership and execution.
          </Typography>
        </div>
      </div>
    </section>
  );
}