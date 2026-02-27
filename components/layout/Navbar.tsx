"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Typography from "@/lib/typography";
import { navLinks, navbarBusinesses, NAVBAR_HEIGHT_MOBILE, DROPDOWN_DELAY, ACCORDION_ITEM_HEIGHT } from "@/lib/constants";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);
  const [isMobileBusinessOpen, setIsMobileBusinessOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const [underlineStyle, setUnderlineStyle] = useState<{ left: number; width: number } | null>(null);
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileBusinessOpen(false);
  }, [pathname]);

  useEffect(() => {
    const updateUnderline = () => {
      const activeLink = navLinks.find(link => pathname === link.href);
      if (activeLink && containerRef.current) {
        const linkElement = linkRefs.current[activeLink.href];
        if (linkElement) {
          // Use requestAnimationFrame to ensure DOM is ready
          requestAnimationFrame(() => {
            if (containerRef.current && linkElement) {
              const containerRect = containerRef.current.getBoundingClientRect();
              const linkRect = linkElement.getBoundingClientRect();
              setUnderlineStyle({
                left: linkRect.left - containerRect.left,
                width: linkRect.width
              });
            }
          });
        }
      } else {
        setUnderlineStyle(null);
      }
    };

    // Small delay to ensure DOM is ready after route change
    const timeoutId = setTimeout(updateUnderline, 10);

    // Update on window resize
    window.addEventListener('resize', updateUnderline);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateUnderline);
    };
  }, [pathname]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsMobileBusinessOpen(false);
  }, []);

  const handleBusinessMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setIsBusinessDropdownOpen(true);
  };

  const handleBusinessMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setIsBusinessDropdownOpen(false), DROPDOWN_DELAY);
  };

  const DesktopNavLink = ({ link }: { link: typeof navLinks[0] }) => {
    const isActive = pathname === link.href;
    const isBusinesses = link.label === "Our Businesses";

    if (isBusinesses) {
      return (
        <div
          key={link.href}
          className="relative nav-link-container"
          onMouseEnter={handleBusinessMouseEnter}
          onMouseLeave={handleBusinessMouseLeave}
        >
          <Link 
            ref={(el) => { linkRefs.current[link.href] = el; }}
            href={link.href} 
            className="relative overflow-hidden flex items-center gap-1 group"
          >
            <div className="overflow-hidden h-[1.5em]">
              <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-[1.5em]">
                <div className="h-[1.5em] flex items-center shrink-0">
                  <Typography variant="h4" className="font-cormorant text-white whitespace-nowrap">{link.label}</Typography>
                </div>
                <div className="h-[1.5em] flex items-center shrink-0">
                  <Typography variant="h4" className="font-cormorant whitespace-nowrap bg-gradient-to-r from-[#ed1e24] via-[#ff4d5a] to-[#ed1e24] bg-clip-text text-transparent">{link.label}</Typography>
                </div>
              </div>
            </div>
            <svg className={`w-3 h-3 mt-0.5 transition-transform duration-200 text-white ${isBusinessDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <div className={`absolute top-full right-0 mt-2 w-[700px] bg-[#090d12] border border-white/20 shadow-xl rounded-md py-6 px-6 z-50 transition-all duration-200 origin-top-right ${isBusinessDropdownOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
            <div className="grid grid-cols-4 gap-x-6 gap-y-6">
              {navbarBusinesses.map((biz) => (
                <Link key={biz.name} href={biz.href} className="flex flex-col items-start gap-2 group" onClick={() => setIsBusinessDropdownOpen(false)}>
                  <div className="w-full h-16 relative overflow-hidden rounded-sm">
                    <Image src={biz.image} alt={biz.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <Typography variant="body-xl" className="font-cormorant text-white group-hover:text-primary leading-tight">{biz.name}</Typography>
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div key={link.href} className="nav-link-container">
        <Link 
          ref={(el) => { linkRefs.current[link.href] = el; }}
          href={link.href} 
          className="relative inline-block group"
        >
          <div className="overflow-hidden h-[1.5em]">
            <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-[1.5em]">
              <div className="h-[1.5em] flex items-center shrink-0">
                <Typography variant="h4" className="font-cormorant text-white whitespace-nowrap">{link.label}</Typography>
              </div>
              <div className="h-[1.5em] flex items-center shrink-0">
                <Typography variant="h4" className="font-cormorant whitespace-nowrap bg-gradient-to-r from-[#ed1e24] via-[#ff4d5a] to-[#ed1e24] bg-clip-text text-transparent">{link.label}</Typography>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  const MobileNavLink = ({ link }: { link: typeof navLinks[0] }) => {
    const isActive = pathname === link.href;
    const isBusinesses = link.label === "Our Businesses";

    if (isBusinesses) {
      const accordionMaxHeight = navbarBusinesses.length * ACCORDION_ITEM_HEIGHT + 16;
      return (
        <div key={link.href} className="flex flex-col">
          <div className="flex items-center justify-between w-full">
            <Link 
              href={link.href} 
              onClick={closeMobileMenu}
              className="flex-1 px-6 py-4 hover:bg-white/10 active:bg-white/20 transition-colors"
            >
              <Typography variant="h4" className="font-cormorant text-white">{link.label}</Typography>
            </Link>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMobileBusinessOpen((prev) => !prev);
              }} 
              className="px-4 py-4 hover:bg-white/10 active:bg-white/20 transition-colors"
              aria-label="Toggle businesses menu"
            >
              <svg className={`w-4 h-4 shrink-0 transition-transform duration-300 text-white ${isMobileBusinessOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <div className="overflow-hidden transition-all duration-300 ease-in-out" style={{ maxHeight: isMobileBusinessOpen ? `${accordionMaxHeight}px` : "0px" }}>
            <div className="flex flex-col gap-1 px-4 pb-4">
              {navbarBusinesses.map((biz) => (
                <Link key={biz.name} href={biz.href} onClick={closeMobileMenu} className="flex items-center gap-4 px-3 py-2 rounded-md hover:bg-white/10 active:bg-white/20 transition-colors group">
                  <div className="w-14 h-10 relative overflow-hidden rounded-sm shrink-0">
                    <Image src={biz.image} alt={biz.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <Typography variant="h4" className="font-cormorant text-white group-hover:text-primary leading-tight">{biz.name}</Typography>
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <Link key={link.href} href={link.href} onClick={closeMobileMenu} className="flex items-center px-6 py-4 hover:bg-white/10 active:bg-white/20 transition-colors">
              <Typography variant="h4" className={`font-cormorant ${isActive ? "text-white border-b border-white" : "text-white"}`}>{link.label}</Typography>
      </Link>
    );
  };

  return (
    <>
      <nav className="bg-[#090d12] sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8 py-1">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
              <Image src="https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1772174921691-logo__3_.png" alt="VRM Group Logo" width={120} height={40} className="w-auto" priority />
            </Link>
            <div ref={containerRef} className="hidden md:flex items-center space-x-6 lg:space-x-8 nav-links-container relative">
              {navLinks.map((link) => <DesktopNavLink key={link.href} link={link} />)}
              {underlineStyle && (
                <span 
                  className="absolute bottom-0 h-[1.5px] bg-white transition-all duration-500 ease-in-out"
                  style={{
                    left: `${underlineStyle.left}px`,
                    width: `${underlineStyle.width}px`
                  }}
                />
              )}
            </div>
            <button onClick={() => setIsMobileMenuOpen((prev) => !prev)} className="md:hidden p-2 rounded-md text-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors" aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div aria-hidden="true" onClick={closeMobileMenu} className={`fixed inset-0 bg-[#090d12]/40 z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} />
      <div role="dialog" aria-modal="true" aria-label="Navigation menu" className={`fixed left-0 right-0 z-40 md:hidden bg-[#090d12] shadow-lg overflow-y-auto transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-[110%]"}`} style={{ top: NAVBAR_HEIGHT_MOBILE, maxHeight: `calc(100dvh - ${NAVBAR_HEIGHT_MOBILE}px)` }}>
        <div className="flex flex-col divide-y divide-white/20">
          {navLinks.map((link) => <MobileNavLink key={link.href} link={link} />)}
        </div>
      </div>
    </>
  );
}
