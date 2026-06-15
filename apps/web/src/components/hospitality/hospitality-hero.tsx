"use client";

import { motion } from "framer-motion";

const imageLabels = [
  { text: "Hotels", x: "left-5", y: "top-6" },
  { text: "Restaurants", x: "right-5", y: "top-6" },
  { text: "F&B Operations", x: "left-5", y: "bottom-16" },
];

export function HospitalityHero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(47,67,183,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Soft blue orbs */}
      <div
        className="absolute top-0 left-0 w-[700px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(238,242,255,0.9) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, rgba(238,242,255,0.7) 0%, transparent 65%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-5 lg:px-10 xl:px-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-[1.5px] bg-[#2F43B7]" />
              <span className="text-[14px] font-semibold tracking-[0.18em] uppercase text-[#2F43B7]">
                Coffee Infrastructure for Hospitality Operations
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
              Hospitality Coffee Solutions &{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Commercial Coffee Solutions
              </span>{" "}
              in UAE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.55, ease: "easeOut" }}
              className="text-[#475569] text-[15px] lg:text-[16px] leading-[1.82] mb-10 max-w-xl"
            >
              JPLC delivers commercial coffee solutions built specifically for
              hospitality environments, where consistency, reliability, and
              service continuity are non-negotiable from the first breakfast
              service to the last dinner cover.
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
                Request a Hospitality Consultation
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
                style={{ border: "1.5px solid rgba(47,67,183,0.3)" }}
              >
                Talk to Our Hospitality Team
              </a>
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.95,
              delay: 0.2,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            className="relative hidden lg:block"
          >
            {/* Blue glow behind image */}
            <div
              className="absolute -inset-4 rounded-[32px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(47,67,183,0.12) 0%, transparent 70%)",
                filter: "blur(16px)",
              }}
            />

            <div
              className="relative rounded-[24px] overflow-hidden"
              style={{
                height: "clamp(400px, 58vh, 620px)",
                boxShadow:
                  "0 24px 64px rgba(47,67,183,0.14), 0 4px 16px rgba(15,23,42,0.08)",
              }}
            >
              <motion.img
                src="/cafe_image.jpg"
                alt="Hospitality Coffee Environment"
                className="w-full h-full object-cover"
                initial={{ scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
              />

              {/* Subtle bottom gradient only */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.1) 35%, transparent 60%)",
                }}
              />

              {/* Annotation labels */}
              {imageLabels.map((label, i) => (
                <motion.div
                  key={label.text}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 1.0 + i * 0.18,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={`absolute ${label.x} ${label.y} flex items-center gap-2`}
                >
                  <div
                    className="w-3 h-px"
                    style={{ background: "rgba(255,255,255,0.5)" }}
                  />
                  <span
                    className="text-[10px] tracking-[0.22em] uppercase font-medium"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {label.text}
                  </span>
                </motion.div>
              ))}

              {/* Bottom strip */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-center justify-between"
                style={{
                  background: "rgba(15,23,42,0.45)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span className="text-[10px] tracking-[0.28em] uppercase text-white/55">
                  JPLC Hospitality — UAE
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4F6BFF]" />
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/45">
                    Full Programme Management
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
