"use client";

import Image from "next/image";
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
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#2941A8] flex flex-col border-l border-white/10 shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/15">
              <a href="/" onClick={onClose}>
                <Image
                  src="/jplc_logo_2.png"
                  alt="JPLC Holdings"
                  width={120}
                  height={48}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </a>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="w-10 h-10 flex items-center justify-center text-white hover:text-white/70 transition-colors"
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
              <ul className="space-y-0">
                {/* Home — mobile only */}
                <motion.li
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08, duration: 0.3 }}
                >
                  <a
                    href="/"
                    onClick={onClose}
                    className="flex items-center gap-4 py-5 text-white transition-colors group"
                  >
                    <span className="font-mono text-xs text-white">00</span>
                    <span className="font-medium text-base leading-none tracking-[0.06em] uppercase">
                      Home
                    </span>
                    {pathname === "/" && (
                      <span className="ml-auto w-5 h-px bg-white" />
                    )}
                  </a>
                </motion.li>

                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.13 + i * 0.05, duration: 0.3 }}
                  >
                    {item.children ? (
                      <div className="flex items-center gap-4 py-5 text-white">
                        <span className="font-mono text-xs text-white">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-medium text-base leading-none tracking-[0.06em] uppercase">
                          {item.label}
                        </span>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center gap-4 py-5 text-white transition-colors"
                      >
                        <span className="font-mono text-xs text-white">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-medium text-base leading-none tracking-[0.06em] uppercase">
                          {item.label}
                        </span>
                        {pathname === item.href && (
                          <span className="ml-auto w-5 h-px bg-white" />
                        )}
                      </a>
                    )}

                    {/* Sub-items */}
                    {item.children && (
                      <ul className="pb-3 space-y-0 border-l border-white/30 ml-[26px]">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <a
                              href={child.href}
                              onClick={onClose}
                              className="flex items-center gap-3 pl-4 py-2.5 text-white text-sm font-medium transition-colors hover:text-white/70"
                            >
                              <span className="w-1 h-1 rounded-full bg-white flex-shrink-0" />
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
