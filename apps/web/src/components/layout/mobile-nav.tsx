"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/constants/navigation";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0F172A]/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#0F172A] flex flex-col border-l border-white/5"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/6">
              <span className="font-sans font-bold text-xl text-white tracking-[-0.02em]">
                JPLC
              </span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-6 py-6 overflow-y-auto">
              <ul className="space-y-0 divide-y divide-white/5">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.3 }}
                  >
                    <a
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center gap-4 py-5 transition-colors group ${
                        pathname === item.href
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      <span
                        className={`font-mono text-xs transition-colors ${
                          pathname === item.href
                            ? "text-[#4F6BFF]"
                            : "text-[#4F6BFF]/50 group-hover:text-[#4F6BFF]/80"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-medium text-lg leading-none">
                        {item.label}
                      </span>
                      {pathname === item.href && (
                        <span className="ml-auto w-5 h-px bg-[#4F6BFF]" />
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* CTA area */}
            <div className="px-6 py-6 border-t border-white/6 space-y-3">
              <a
                href="#partnership"
                onClick={onClose}
                className="flex items-center justify-center w-full px-6 py-3.5 bg-[#2F43B7] text-white text-sm font-semibold rounded-sm hover:bg-[#4056D6] transition-colors"
              >
                Partner With Us
              </a>
              <a
                href="/contact"
                onClick={onClose}
                className={`flex items-center justify-center w-full px-6 py-3.5 border text-sm font-medium rounded-sm transition-colors ${
                  pathname === "/contact"
                    ? "border-[#2F43B7] text-white bg-[#2F43B7]/10"
                    : "border-white/12 text-white/75 hover:border-[#2F43B7] hover:text-white"
                }`}
              >
                Contact
              </a>
            </div>

            {/* Social + copyright */}
            <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between">
              <p className="text-[#64748B] text-xs">© 2026 JPLC Holdings</p>
              <div className="flex items-center gap-4">
                {[
                  { label: "LinkedIn", href: "#" },
                  { label: "IG", href: "#" },
                  { label: "X", href: "#" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="text-[#64748B] text-[10px] tracking-wider uppercase hover:text-[#6B8BFF] transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
