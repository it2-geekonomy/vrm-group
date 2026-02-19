import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typography from "@/lib/typography";
import { footerLeftLinks, footerRightLinks, footerInfo } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#B2B2B2] text-black">
      <div className="px-4 sm:px-6 lg:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Left Section - Company Information */}
          <div className="flex flex-col items-center lg:items-start pr-0 lg:pr-12 pb-8 lg:pb-0 mb-8 lg:mb-0 lg:border-r-2 border-white">
            <Link href="/" className="mb-6">
              <Image
                src="/logo.png"
                alt="VRM Group Logo"
                width={150}
                height={50}
                className="w-auto h-auto"
              />
            </Link>
            <Typography variant="body-sm" className="text-black mb-2 font-cormorant font-medium text-center lg:text-left">
              {footerInfo.tagline}
            </Typography>
            <Typography variant="body-xl" className="text-black font-cormorant font-medium text-center lg:text-left">
              {footerInfo.address}
            </Typography>
          </div>

          {/* Middle and Right Sections Container */}
          <div className="grid grid-cols-2 gap-0 col-span-1 lg:col-span-2 lg:pb-0 mb-8 lg:mb-0">
            {/* Middle Section - Navigation Links */}
            <div className="flex flex-col border-r-2 border-white justify-center items-center lg:items-start pl-0 lg:pl-[clamp(2rem,4vw+1rem,8rem)] pr-0 lg:pr-[clamp(2rem,2vw+0.5rem,3rem)]">
              <div className="flex flex-col space-y-6">
                {footerLeftLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-black"
                  >
                    <Typography variant="h4" className="text-black font-cormorant font-medium uppercase">
                      {link.label}
                    </Typography>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Section - Navigation Links */}
            <div className="flex flex-col justify-center items-center lg:items-start pl-0 lg:pl-[clamp(2rem,4vw+1rem,8rem)]">
              <div className="flex flex-col space-y-6">
                {footerRightLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-black"
                  >
                    <Typography variant="h4" className="text-black font-cormorant font-medium uppercase">
                      {link.label}
                    </Typography>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-2 bg-white">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Typography variant="body-lg" className="text-black font-cormorant">
            {footerInfo.copyright}
          </Typography>
          <Typography variant="body-lg" className="text-black font-cormorant">
            Digital Partner:{" "}
            <Link href="https://thegeekonomy.com/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-black underline">
              Geekonomy
            </Link>
          </Typography>
        </div>
      </div>
    </footer>
  );
}
