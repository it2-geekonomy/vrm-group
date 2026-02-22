"use client";

import Typography from "@/lib/typography";
import {
  CONTACT_HEADING,
  CONTACT_DESCRIPTION,
  CONTACT_ADDRESS,
  CONTACT_PHONE_LABEL,
  CONTACT_PHONE,
} from "@/lib/constants";

export default function ContactForm() {
  return (
    <section className="w-full bg-black text-white pt-6 pb-6 xl:pt-24 xl:pb-24 px-3 min-[363px]:px-4 min-[411px]:px-10 sm:px-16 md:pl-6 md:pr-4 lg:px-16 box-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[60%_40%] gap-6 md:gap-3 lg:grid-cols-2 lg:gap-16 items-center min-w-0 w-full">
        {/* Left column – text (stacked: after image; from 768px: left column) */}
        <div className="order-2 md:order-1 flex flex-col justify-center space-y-3 lg:space-y-6 min-w-0 w-full max-w-full overflow-hidden">
          <Typography
            variant="display-2xl"
            className="text-[#FFFFFF] font-cormorant font-semibold text-center lg:text-left"
          >
            {CONTACT_HEADING}
          </Typography>

          <Typography
            variant="h1"
            className="text-white font-cormorant font-light leading-relaxed max-w-lg min-w-0"
          >
            {CONTACT_DESCRIPTION}
          </Typography>

          <div className="space-y-3 lg:space-y-4 pt-1 lg:pt-2 min-w-0">
            <div className="min-w-0">
              <Typography
                variant="h1"
                className="text-white font-poppins font-light break-words"
              >
                {CONTACT_ADDRESS.label}
              </Typography>
              <div className="mt-1.5 space-y-0.5 min-w-0">
                {CONTACT_ADDRESS.lines.map((line, i) => (
                  <Typography
                    key={i}
                    variant="body-xl"
                    className="text-white font-poppins font-light leading-relaxed break-words [overflow-wrap:anywhere]"
                  >
                    {line}
                  </Typography>
                ))}
              </div>
            </div>

            <div className="pt-1">
              <Typography
                variant="h1"
                className="text-white font-poppins font-light"
              >
                {CONTACT_PHONE_LABEL}
                {CONTACT_PHONE ? (
                  <span className="text-white font-normal ml-1">
                    {CONTACT_PHONE}
                  </span>
                ) : null}
              </Typography>
            </div>
          </div>
        </div>

        {/* Right column – image (stacked: first; from 768px: right column) */}
        <div
          className="order-1 md:order-2 md:justify-self-end w-[clamp(140px,35vw,360px)] h-[clamp(140px,35vw,360px)] lg:w-[400px] lg:h-[400px] rounded overflow-hidden min-w-0 mx-auto md:mx-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/contactus/1771747411805-contactus.webp"
            alt="VRM Group and ventures"
            className="w-full h-full object-contain object-center"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
