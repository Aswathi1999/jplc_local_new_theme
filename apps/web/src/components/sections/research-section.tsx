"use client";

import { motion, type Variants } from "framer-motion";

/* ══════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════ */

const areas = [
  {
    label: "Coffee Extraction Science & Brew Optimization",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 2h4M5 2v3.5L3 10a4.5 4.5 0 009 0l-2-4.5V2" />
      </svg>
    ),
  },
  {
    label: "Roast Curve Analysis & Thermal Profiling",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 11c2-5 4-5 6 0s4 5 6 0" />
        <path d="M2 14h12" />
      </svg>
    ),
  },
  {
    label: "Espresso Extraction Yield & TDS Analytics",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 13V8M7 13V5M11 13V8M15 13V3" />
      </svg>
    ),
  },
  {
    label: "Flavor Chemistry & Sensory Mapping",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="8" r="2" />
        <circle cx="2.5" cy="4" r="1.2" />
        <circle cx="13.5" cy="4" r="1.2" />
        <circle cx="2.5" cy="12" r="1.2" />
        <circle cx="13.5" cy="12" r="1.2" />
        <path d="M4 4.8l2.5 2M12 4.8l-2.5 2M4 11.2l2.5-2M12 11.2l-2.5-2" />
      </svg>
    ),
  },
  {
    label: "New Beverage Formulation & Innovation",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="8" r="3" />
        <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.1 3.1l1.4 1.4M11.5 11.5l1.4 1.4M3.1 12.9l1.4-1.4M11.5 4.5l1.4-1.4" />
      </svg>
    ),
  },
  {
    label: "AI-Assisted Calibration & Predictive Maintenance",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="12" height="12" rx="2.5" />
        <path d="M5 6h2M9 6h2M5 9h6M5 12h4" />
      </svg>
    ),
  },
  {
    label: "Water Composition & Mineral Impact Studies",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2L4.5 8.5a4 4 0 007 0L8 2z" />
        <path d="M6 9.5c.5 1 2 1 2 1" />
      </svg>
    ),
  },
  {
    label: "Capsule, Pod & RTD Coffee R&D",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="6" width="14" height="5" rx="2.5" />
        <path d="M7 6V4M9 6V4M7 11v2M9 11v2" />
      </svg>
    ),
  },
];

/* ══════════════════════════════════════════════════════════
   ANIMATION VARIANTS
══════════════════════════════════════════════════════════ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: "easeOut" },
  },
};

/* ══════════════════════════════════════════════════════════
   SECTION
══════════════════════════════════════════════════════════ */
export function ResearchSection() {
  return (
    <section
      id="research"
      className="relative overflow-hidden py-12 lg:py-16"
      style={{
        background:
          "linear-gradient(180deg, #F4F8FF 0%, #ffffff 45%, #F4F8FF 100%)",
      }}
    >
      {/* ── Background effects ─────────────────────────── */}
      <div
        className="absolute -top-24 right-0 w-[520px] h-[520px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(79,107,255,0.11) 0%, transparent 70%)",
          filter: "blur(65px)",
        }}
      />
      <div
        className="absolute -bottom-20 left-0 w-[420px] h-[420px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(47,67,183,0.08) 0%, transparent 70%)",
          filter: "blur(75px)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[280px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(107,139,255,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Section rule lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F6BFF]/22 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F6BFF]/18 to-transparent" />

      {/* ── Content ────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-stretch">
          {/* ════════════════════════════════════════════════
              LEFT COLUMN
          ════════════════════════════════════════════════ */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#4F6BFF]/65" />
              <p className="text-[14px] font-semibold tracking-[0.18em] uppercase text-[#2F43B7]">
                Research &amp; Development
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-extrabold text-[#0F172A] text-4xl lg:text-[46px] xl:text-[52px] leading-[1.06] tracking-[-0.03em] mb-6">
              Coffee{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 55%, #6B8BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Science
              </span>{" "}
              at the Molecular Level
            </h2>

            {/* Decorative divider */}
            <div className="flex items-center gap-2 mb-7">
              <div className="w-10 h-px bg-[#4F6BFF]/32" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#4F6BFF]/45" />
              <div className="w-4 h-px bg-[#4F6BFF]/18" />
            </div>

            {/* Body copy */}
            <p className="text-[#475569] text-[16.5px] leading-[1.80] max-w-lg mb-12 font-light">
              Extraction yield, thermal profiling, water mineralogy, grind
              calibration; each variable compounds. Every finding feeds directly
              into the products and systems our partners rely on.
            </p>

            {/* ── Research capability cards ── */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
            >
              {areas.map((area) => (
                <motion.div
                  key={area.label}
                  variants={cardVariant}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 14px 36px rgba(47,67,183,0.13)",
                    borderColor: "rgba(79,107,255,0.28)",
                  }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="group flex items-start gap-3 p-3.5 rounded-xl cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.78)",
                    backdropFilter: "blur(14px)",
                    border: "1px solid rgba(47,67,183,0.09)",
                    boxShadow: "0 2px 10px rgba(47,67,183,0.05)",
                  }}
                >
                  {/* Icon chip */}
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[#4F6BFF] mt-0.5 transition-colors duration-200 group-hover:text-[#2F43B7]"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(79,107,255,0.09) 0%, rgba(47,67,183,0.06) 100%)",
                      border: "1px solid rgba(79,107,255,0.14)",
                    }}
                  >
                    {area.icon}
                  </div>
                  {/* Label */}
                  <span className="text-[#334155] text-[12.5px] font-medium leading-snug pt-0.5 transition-colors duration-200 group-hover:text-[#2F43B7]">
                    {area.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* ── CTA ── */}
            <a
              href="/research-development"
              className="inline-flex items-center gap-2.5 mt-8 px-6 py-3 text-white text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                boxShadow: "0 8px 24px rgba(47,67,183,0.28)",
              }}
            >
              Explore R&amp;D Lab
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>

          {/* ════════════════════════════════════════════════
              RIGHT COLUMN — R&D Images
          ════════════════════════════════════════════════ */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col gap-4 h-full"
          >
            {/* r_d_4 — grows to fill available height */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative rounded-2xl overflow-hidden flex-1"
              style={{
                minHeight: "180px",
                maxHeight: "460px",
                boxShadow: "0 8px 32px rgba(15,23,42,0.12)",
              }}
            >
              <img
                src="/r_and_d/r_d_4.jpg"
                alt="JPLC R&D Lab"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,23,42,0.28) 0%, transparent 60%)",
                }}
              />
            </motion.div>

            {/* r_d_1 and r_d_3 — horizontal side by side */}
            <div className="grid grid-cols-2 gap-4 flex-shrink-0">
              {[
                {
                  src: "/r_and_d/r_d_1.jpg",
                  alt: "JPLC Coffee Research",
                  delay: 0.22,
                },
                {
                  src: "/r_and_d/r_d_3.jpg",
                  alt: "JPLC Coffee Technology",
                  delay: 0.32,
                },
              ].map((img) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: img.delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    height: "clamp(140px, 18vh, 200px)",
                    boxShadow: "0 8px 32px rgba(15,23,42,0.12)",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(15,23,42,0.28) 0%, transparent 60%)",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
