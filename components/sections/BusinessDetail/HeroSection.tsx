"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Typography from "@/lib/typography";

interface HeroBannerProps {
  videoSrc: string;
  logo: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  onEnquiryClick?: () => void;
}

export default function HeroBanner({
  videoSrc,
  logo,
  title,
  description,
  buttonText,
  buttonLink,
  onEnquiryClick,
}: HeroBannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [muted, setMuted] = useState(true);

  // Sync video muted property with state and handle autoplay
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = muted;

    // Attempt to play if autoplay was blocked
    if (video.paused) {
      video.play().catch(err => {
        console.log("Autoplay was prevented:", err);
      });
    }
  }, [muted]);

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
    setMuted(prev => !prev);
  };

  return (
    <section ref={sectionRef} className="relative w-full h-[50vh] md:h-[80vh] lg:h-[85vh] flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 text-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#090d12]/60" />

      {/* Mute / Unmute Button */}
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-2 right-2 lg:bottom-6 lg:right-6 z-20 flex items-center gap-2 rounded-full bg-[#090d12]/50 px-4 py-2 text-white backdrop-blur-sm transition hover:bg-[#090d12]/70"
      >
        {muted ? (
          <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
            <Typography variant="body-sm" className="text-white">Unmute</Typography>
          </>
        ) : (
          <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
            <Typography variant="body-sm" className="text-white">Mute</Typography>
          </>
        )}
      </button>

      {/* Mobile logo – top-right with gradient background */}
      {logo ? (
        <div
          className="absolute top-0 right-0 z-20 sm:hidden h-[120px] w-[80px] flex items-start justify-center p-3 backdrop-blur-[1px] transition-all duration-300"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.82) 28%, rgba(255,255,255,0.45) 55%, rgba(255,255,255,0.12) 70%, rgba(255,255,255,0) 80%)",
          }}
        >
          <div className="relative w-full aspect-square max-w-[80%]">
            <Image
              src={logo}
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      ) : null}

      {/* Desktop/laptop dynamic logo with gradient corner background */}
      {logo ? (
        <div
          className="hidden sm:flex absolute top-0 right-0 z-20 h-[200px] w-[130px] sm:h-[220px] sm:w-[150px] md:h-[250px] md:w-[170px] lg:h-[280px] lg:w-[190px] xl:h-[320px] xl:w-[220px] items-start justify-center p-3 md:p-4 lg:p-6 backdrop-blur-[1px] transition-all duration-300"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.82) 28%, rgba(255,255,255,0.45) 55%, rgba(255,255,255,0.12) 70%, rgba(255,255,255,0) 80%)",
          }}
        >
          <div className="relative w-full aspect-square max-w-[80%] sm:max-w-[85%] md:max-w-[90%] lg:max-w-full">
            <Image
              src={logo}
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      ) : null}

      {/* Center content: headline, body, button */}
      <div className="relative z-10 w-full max-w-[88rem] mx-auto text-center px-4 sm:px-6">
        <Typography
          variant="display-2xl"
          className="text-white font-cormorant font-normal text-[2rem] sm:text-[2.2rem] md:text-[2.3rem] lg:text-[2.5rem] leading-tight tracking-normal"
        >
          {title}
        </Typography>


        <Typography
          variant="body-xl"
          className="font-cormorant text-white mt-6 md:mt-8 text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.5rem] leading-relaxed max-w-4xl mx-auto"
        >
          {description}
        </Typography>

        {onEnquiryClick ? (
          <button
            onClick={onEnquiryClick}
            className="btn-animated inline-flex items-center justify-center mt-8 px-10 sm:px-14 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold uppercase tracking-wide text-white border border-white shadow-md cursor-pointer"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              background: "#ED1C2475",
            }}
          >
            <span>{buttonText}</span>
          </button>
        ) : (
          <Link
            href={buttonLink}
            className="btn-animated inline-flex items-center justify-center mt-8 px-10 sm:px-14 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold uppercase tracking-wide text-white border border-white shadow-md"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              background: "#ED1C2475",
            }}
          >
            <span>{buttonText}</span>
          </Link>
        )}
      </div>
    </section>
  );
}