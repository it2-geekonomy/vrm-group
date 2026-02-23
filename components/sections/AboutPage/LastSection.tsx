"use client";

import Typography from "@/lib/typography";

export default function LastSection() {
    return (
        <section className="relative w-full h-[500px] overflow-hidden">
            {/* Background Image */}
            <img
                src="https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/about/1771822351959-Lastsectionimg.webp"
                alt="Diverse Sectors"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Centered Content */}
            <div className="relative z-10 flex items-center justify-center h-full text-center px-2 sm:px-2 md:px-6 lg:px-10 xl:px-24">
                <div className="max-w-5xl">

                    <Typography
                        variant="display-2xl"
                        className="text-white font-cormorant leading-relaxed font-medium"
                    >
                        Continuing Forward
                    </Typography>

                    <Typography
                        variant="h1"
                        className="text-white font-cormorant font-light"
                    >
                        Our journey continues to be shaped by innovation, responsibility and execution strength.
                        With each expansion, the focus remains on creating environments that support living, enterprise, learning and experience.
                    </Typography>

                </div>
            </div>

        </section>
    );
}