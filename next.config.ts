import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev",
      },
    ],
  },
};

export default nextConfig;