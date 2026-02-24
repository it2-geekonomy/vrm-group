"use client";

import React from "react";
import Typography from "@/lib/typography";

export default function VisionSection() {
  return (
    <section className="bg-[#F2FEFA]">
      <div className="">
        <div className="">
          <div className="grid grid-cols-1 xl:grid-cols-2 lg:gap-12 items-stretch">
            {/* Left Side - Text Content */}
            <div className="space-y-6 flex flex-col justify-center p-8 2xl:pl-[clamp(2rem,4vw+1rem,8rem)]">
              <Typography variant="display-2xl" className="font-cormorant font-medium text-black mb-6">
                A Unified Vision Across Diverse Sectors
              </Typography>
              
              <div className="space-y-4">
                <Typography variant="h1" className="font-cormorant text-black leading-relaxed">
                  VRM Group operates across multiple industries that shape everyday life, from lifestyle and hospitality to residential communities, industrial capabilities and infrastructure assets.
                </Typography>
                
                <Typography variant="h1" className="font-cormorant text-black leading-relaxed">
                  Each vertical functions independently while contributing to a larger ecosystem built on reliability, long-term value and execution strength.
                </Typography>
                
                <Typography variant="h1" className="font-cormorant text-black leading-relaxed">
                  Our approach is simple, we build responsibly, operate consistently and grow sustainably.
                </Typography>
              </div>
            </div>

            {/* Right Side - Video */}
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] overflow-hidden bg-[#F2FEFA]">
              <div className="absolute inset-0 w-full h-full">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '120%',
                    height: '120%',
                    minWidth: '120%',
                    minHeight: '120%',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                    transform: 'translate(-50%, -50%)',
                    transformOrigin: 'center center'
                  }}
                >
                  <source src="https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1771747282640-Diverse_Sectors.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Gradient overlay to hide video edge - top on mobile, left on desktop */}
              <div 
                className="absolute inset-x-0 top-0 h-[30%] xl:hidden pointer-events-none z-10"
                style={{
                  background: 'linear-gradient(to bottom, #F2FEFA 0%, rgba(242, 254, 250, 0) 100%)'
                }}
              />
              <div 
                className="hidden xl:block absolute inset-y-0 left-0 w-[30%] pointer-events-none z-10"
                style={{
                  background: 'linear-gradient(to right, #F2FEFA 0%, rgba(242, 254, 250, 0) 100%)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
