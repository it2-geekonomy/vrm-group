"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Typography from "@/lib/typography";
import { LEADERSHIP_HEADING, LEADERSHIP_DESCRIPTION, TEAM_MEMBERS } from "@/lib/constants";

export default function LeadershipSection() {
  const [activeMember, setActiveMember] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close overlay when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveMember(null);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <section className="w-full bg-black py-4 lg:py-4 px-6 lg:px-24 lg:pb-16" ref={containerRef}>
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-6 lg:mb-16">
        <Typography variant="display-2xl" className="text-white font-cormorant mb-3 lg:mb-4 leading-relaxed font-medium">
          {LEADERSHIP_HEADING}
        </Typography>
        <Typography variant="h2" className="text-white font-cormorant font-light">
          {LEADERSHIP_DESCRIPTION}
        </Typography>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Leadership Grid: row1 [1][2][3]; row2: 4th center below 1&2, 5th center below 2&3 */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-x-8 gap-y-6 md:gap-x-12 md:gap-y-12 justify-center md:justify-items-center">
          {TEAM_MEMBERS.map((member, index) => {
            const isActive = activeMember === member.name;
            const colClasses =
              index === 0
                ? "md:col-span-2 md:col-start-1"
                : index === 1
                  ? "md:col-span-2 md:col-start-3"
                  : index === 2
                    ? "md:col-span-2 md:col-start-5"
                    : index === 3
                      ? "md:col-span-2 md:col-start-2"
                      : "md:col-span-2 md:col-start-4";
            return (
              <div
                key={member.name}
                className={`relative w-65 h-65 overflow-hidden group mx-auto cursor-pointer ${colClasses}`}
                onClick={() => setActiveMember(isActive ? null : member.name)}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover w-full h-full"
                />
                <div
                  className={`absolute bottom-0 w-full text-center py-2 transition-all duration-500
                    ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}
                    group-hover:opacity-100 group-hover:translate-x-0`}
                  style={{
                    background: "linear-gradient(90deg, rgba(237, 28, 36, 0.6) 0%, rgba(237, 28, 36, 0.144) 100%)",
                  }}
                >
                  <Typography variant="h3" className="text-white font-medium font-cormorant">
                    {member.name}
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}