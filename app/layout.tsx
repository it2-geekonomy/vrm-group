import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const cinzel = localFont({
  src: "./fonts/Cinzel-VariableFont_wght.ttf",
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = localFont({
  src: [
    {
      path: "./fonts/Cormorant-VariableFont_wght.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Cormorant-Italic-VariableFont_wght.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VRM Group - Excellence in Business",
  description: "VRM Group - Excellence in Business. Leading diversified business group delivering excellence across multiple industries.",
  keywords: ["VRM Group", "business", "excellence", "infrastructure", "warehousing", "engineering"],
  authors: [{ name: "VRM Group" }],
  creator: "VRM Group",
  publisher: "VRM Group",
  metadataBase: new URL("https://vrmgroup.com"), // Update with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VRM Group - Excellence in Business",
    description: "VRM Group - Excellence in Business. Leading diversified business group delivering excellence across multiple industries.",
    url: "https://vrmgroup.com", // Update with your actual domain
    siteName: "VRM Group",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "VRM Group Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VRM Group - Excellence in Business",
    description: "VRM Group - Excellence in Business. Leading diversified business group delivering excellence across multiple industries.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${cinzel.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
