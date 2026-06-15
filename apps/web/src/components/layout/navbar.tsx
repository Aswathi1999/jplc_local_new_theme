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
            <div className="hidden lg:flex items-center gap-5 ml-auto">
              <nav
                className="flex items-center gap-6"
                aria-label="Main navigation"
              >
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.href} className="relative group">
                      <button
                        type="button"
                        className="relative flex items-center gap-1 text-[13px] font-medium tracking-[0.12em] uppercase text-[#374151] hover:text-[#2F43B7] transition-colors duration-300 group/trigger cursor-default"
                      >
                        {item.label}
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-px transition-transform duration-200 group-hover:rotate-180"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                        <span className="absolute -bottom-0.5 left-0 h-px bg-[#2F43B7] transition-[width] duration-300 ease-out w-0 group-hover/trigger:w-[calc(100%-14px)]" />
                      </button>
                      {/* Dropdown panel */}
                      <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="bg-white border border-[#E5E7EB] rounded-sm shadow-lg shadow-black/10 py-1.5 min-w-[220px]">
                          {item.children.map((child) => (
                            <a
                              key={child.href}
                              href={child.href}
                              className="block px-5 py-2.5 text-[12px] font-medium tracking-[0.08em] uppercase text-[#374151] hover:text-[#2F43B7] hover:bg-[#F5F7FF] transition-colors"
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      key={item.href}
                      href={item.href}
                      label={item.label}
                      lightBg={true}
                    />
                  ),
                )}
              </nav>
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
