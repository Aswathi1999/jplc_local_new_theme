"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.85,
    delay,
    ease: [0.21, 0.47, 0.32, 0.98] as const,
  },
});

export function EcosystemHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 10% 50%, rgba(79,107,255,0.08) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute -top-24 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(79,107,255,0.11) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F6BFF]/30 to-transparent" />

      {/* Blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,67,183,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 xl:gap-20 items-center">
          {/* Left: text */}
          <div>
            <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#4F6BFF]/70" />
              <span className="text-[#4F6BFF] text-[13px] font-semibold tracking-[0.38em] uppercase">
                The JPLC Model
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="font-extrabold text-[#0F172A] text-4xl sm:text-5xl lg:text-[50px] xl:text-[56px] leading-[1.06] tracking-[-0.035em] mb-7"
            >
              An Integrated{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Coffee Ecosystem
              </span>
              <br />
              Built for Serious Operations
            </motion.h1>

            <motion.p
              {...fadeUp(0.22)}
              className="text-[#475569] text-base lg:text-[18px] leading-[1.78] max-w-xl mb-10 font-light"
            >
              From coffee sourcing to cup — JPLC is an integrated coffee
              ecosystem UAE businesses and global partners rely on for supply,
              production, engineering, and growth.
            </motion.p>

            <motion.div
              {...fadeUp(0.34)}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-[14px] text-white text-sm font-semibold tracking-wide rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, #1e3a9e 0%, #2F43B7 40%, #4F6BFF 80%)",
                  boxShadow:
                    "0 8px 32px rgba(47,67,183,0.28), 0 2px 8px rgba(47,67,183,0.18)",
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <span className="relative">Partner With Us</span>
                <svg
                  className="relative ml-2.5 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-[14px] text-[#2F43B7] text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  border: "1.5px solid rgba(47,67,183,0.28)",
                  background: "rgba(79,107,255,0.04)",
                }}
              >
                Contact Us
              </a>
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#2F43B7]/15">
              <img
                src="/eco_sysytem_image.jpg"
                alt="JPLC integrated coffee ecosystem UAE"
                className="w-full h-[520px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(47,67,183,0.22) 0%, transparent 55%)",
                }}
              />
              <div className="absolute bottom-5 left-5 right-5">
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-xl backdrop-blur-md"
                  style={{
                    background: "rgba(15,23,42,0.55)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#4F6BFF] flex-shrink-0 animate-pulse" />
                  <span className="text-white text-xs font-medium tracking-wide">
                    Eight verticals · One partner · Full accountability
                  </span>
                </div>
              </div>
            </div>

            <div
              className="absolute -top-5 -right-5 w-36 h-36 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(79,107,255,0.14) 0%, transparent 70%)",
              }}
            />
            <div className="absolute -bottom-3 -left-3 w-20 h-20 rounded-full border border-[#2F43B7]/20 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
