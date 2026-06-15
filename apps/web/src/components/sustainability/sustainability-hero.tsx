"use client";

import { motion } from "framer-motion";

export function SustainabilityHero() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-white">
      {/* Soft blue radial orbs */}
      <div
        className="absolute top-0 left-0 w-[700px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at -10% -10%, rgba(238,242,255,0.95) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[450px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 110% 110%, rgba(79,107,255,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-5 lg:px-10 xl:px-10 pt-36 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-[1.5px] bg-[#2F43B7]" />
              <span className="text-[14px] font-semibold tracking-[0.18em] uppercase text-[#2F43B7]">
                Coffee Done Right — From Origin to Operation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.0,
                delay: 0.3,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className="font-black text-[#0F172A] text-[38px] lg:text-[50px] xl:text-[58px] leading-[1.0] tracking-[-0.035em] mb-7"
            >
              Sustainable &amp; Ethical Coffee Sourcing{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                in the UAE
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.55, ease: "easeOut" }}
              className="text-[#475569] text-[15px] lg:text-[16px] leading-[1.82] mb-10 max-w-xl"
            >
              Coffee sustainability at JPLC isn&apos;t a section on the website.
              It&apos;s built into how we source, produce, package, and operate.
              Every decision in the supply chain has an impact. We take that
              seriously.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.68, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-white text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                  boxShadow: "0 8px 28px rgba(79,107,255,0.28)",
                }}
              >
                Talk to Our Sourcing Team
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth={1.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-[#2F43B7] text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                style={{ border: "1.5px solid rgba(47,67,183,0.28)" }}
              >
                Partner With Us
              </a>
            </motion.div>
          </div>

          {/* Right: 3-image grid */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.95,
              delay: 0.2,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            className="relative hidden lg:block"
            style={{ height: "clamp(400px, 58vh, 620px)" }}
          >
            {/* Blue glow */}
            <div
              className="absolute -inset-4 rounded-[36px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(47,67,183,0.12) 0%, transparent 70%)",
                filter: "blur(18px)",
              }}
            />

            <div className="grid grid-cols-2 gap-3 h-full">
              {/* Left: tall image */}
              <div
                className="group relative overflow-hidden cursor-pointer"
                style={{
                  borderRadius: "20px",
                  boxShadow:
                    "0 0 0 1px rgba(47,67,183,0.1), 0 16px 48px rgba(47,67,183,0.12)",
                }}
              >
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.06 }}
                  transition={{
                    duration: 0.55,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <motion.img
                    src="/sustainablity/sustainablity_hero_1.jpg"
                    alt="Sustainable Coffee Sourcing"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.06 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                  />
                </motion.div>
                <div
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-60"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(15,23,42,0.5) 0%, transparent 55%)",
                  }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="absolute bottom-4 left-4 flex items-center gap-2 translate-y-0 group-hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-3 h-px bg-white/45 group-hover:w-5 transition-all duration-300" />
                  <span className="text-[10px] tracking-[0.22em] uppercase font-medium text-white/60 group-hover:text-white/90 transition-colors duration-300">
                    Farm Traceability
                  </span>
                </motion.div>
              </div>

              {/* Right: two stacked images */}
              <div className="flex flex-col gap-3 h-full">
                <div
                  className="group relative overflow-hidden flex-1 cursor-pointer"
                  style={{
                    borderRadius: "20px",
                    boxShadow:
                      "0 0 0 1px rgba(47,67,183,0.1), 0 12px 32px rgba(47,67,183,0.1)",
                  }}
                >
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.06 }}
                    transition={{
                      duration: 0.55,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <motion.img
                      src="/sustainablity/sustainablity_hero_2.jpg"
                      alt="Ethical Coffee Sourcing"
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.06 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 1.8,
                        delay: 0.08,
                        ease: "easeOut",
                      }}
                    />
                  </motion.div>
                  <div
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-60"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(15,23,42,0.45) 0%, transparent 55%)",
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.25 }}
                    className="absolute bottom-3 left-3 flex items-center gap-2 translate-y-0 group-hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="w-3 h-px bg-white/45 group-hover:w-5 transition-all duration-300" />
                    <span className="text-[10px] tracking-[0.22em] uppercase font-medium text-white/60 group-hover:text-white/90 transition-colors duration-300">
                      Ethical Sourcing
                    </span>
                  </motion.div>
                </div>

                <div
                  className="group relative overflow-hidden flex-1 cursor-pointer"
                  style={{
                    borderRadius: "20px",
                    boxShadow:
                      "0 0 0 1px rgba(47,67,183,0.1), 0 12px 32px rgba(47,67,183,0.1)",
                  }}
                >
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.06 }}
                    transition={{
                      duration: 0.55,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <motion.img
                      src="/sustainablity/sustainablity_hero_3.jpg"
                      alt="Quality Control"
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.06 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 1.8,
                        delay: 0.16,
                        ease: "easeOut",
                      }}
                    />
                  </motion.div>
                  <div
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-60"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(15,23,42,0.45) 0%, transparent 55%)",
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    className="absolute bottom-3 left-3 flex items-center gap-2 translate-y-0 group-hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="w-3 h-px bg-white/45 group-hover:w-5 transition-all duration-300" />
                    <span className="text-[10px] tracking-[0.22em] uppercase font-medium text-white/60 group-hover:text-white/90 transition-colors duration-300">
                      Quality Control
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
