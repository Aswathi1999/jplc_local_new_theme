"use client";

import { useState } from "react";
import { useScroll } from "@/hooks/use-scroll";
import { NavbarLogo } from "./navbar-logo";
import { NavLink } from "./nav-link";
import { MobileNav } from "./mobile-nav";
import { navItems } from "@/constants/navigation";

export function Navbar() {
  const scrolled = useScroll(60);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30 border-b border-[#E5E7EB] bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div
            className={`flex items-center justify-between transition-[height] duration-300 ease-out ${
              scrolled ? "h-16" : "h-20"
            }`}
          >
            {/* Logo */}
            <NavbarLogo lightBg={true} />

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-6 ml-auto">
              <nav
                className="flex items-center gap-8"
                aria-label="Main navigation"
              >
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    lightBg={true}
                  />
                ))}
              </nav>

              <NavLink href="/contact" label="Contact" lightBg={true} />
              <a
                href="#partnership"
                className="inline-flex items-center px-5 py-2.5 bg-[#2F43B7] text-white text-[13px] font-semibold tracking-[0.08em] uppercase rounded-sm hover:bg-[#4056D6] transition-colors shadow-md shadow-[#2F43B7]/25"
              >
                Partner With Us
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 -mr-2"
            >
              <span className="w-6 h-px bg-[#0F172A]" />
              <span className="w-4 h-px bg-[#0F172A]" />
              <span className="w-6 h-px bg-[#0F172A]" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
