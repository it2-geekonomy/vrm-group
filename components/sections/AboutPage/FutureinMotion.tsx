"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Typography from "@/lib/typography";
import {
  LEADERSHIP_HEADING,
  LEADERSHIP_DESCRIPTION,
  TEAM_MEMBERS,
} from "@/lib/constants";

export default function LeadershipSection() {
  const [activeMember, setActiveMember] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
    <section
      className="w-full bg-black py-4 px-6 lg:px-24 lg:pb-16"
      ref={containerRef}
    >
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-6 lg:mb-16">
        <Typography
          variant="display-2xl"
          className="text-white font-cormorant mb-3 lg:mb-4 font-medium"
        >
          {LEADERSHIP_HEADING}
        </Typography>

        <Typography
          variant="h2"
          className="text-white font-cormorant font-light"
        >
          {LEADERSHIP_DESCRIPTION}
        </Typography>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* 
          <640px  -> 1 column
          640–1024 -> 2 columns
          >=1024  -> 6 column custom layout
        */}
        <div className="grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-6 
          gap-6 
          lg:gap-x-12 lg:gap-y-12 
          justify-center lg:justify-items-center"
        >
          {TEAM_MEMBERS.map((member, index) => {
            const isActive = activeMember === member.name;

            // Desktop layout only
            const colClasses =
              index === 0
                ? "lg:col-span-2 lg:col-start-1"
                : index === 1
                ? "lg:col-span-2 lg:col-start-3"
                : index === 2
                ? "lg:col-span-2 lg:col-start-5"
                : index === 3
                ? "lg:col-span-2 lg:col-start-2"
                : "lg:col-span-2 lg:col-start-4";

            return (
              <div
                key={member.name}
                className={`relative 
                  w-full aspect-square 
                  max-w-[260px] 
                  lg:max-w-none lg:w-64 lg:h-64
                  overflow-hidden group mx-auto cursor-pointer ${colClasses}`}
                onClick={() =>
                  setActiveMember(isActive ? null : member.name)
                }
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <div
                  className={`absolute bottom-0 w-full text-center py-2 transition-all duration-500
                    ${
                      isActive
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-full"
                    }
                    group-hover:opacity-100 group-hover:translate-x-0`}
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(237, 28, 36, 0.6) 0%, rgba(237, 28, 36, 0.144) 100%)",
                  }}
                >
                  <Typography
                    variant="h3"
                    className="text-white font-medium font-cormorant"
                  >
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