"use client";

import { motion, type Variants } from "framer-motion";

const infraCards = [
  {
    id: "01",
    title: "International Sourcing",
    description:
      "Direct-trade relationships across Ethiopia, Colombia, Brazil, Yemen, and Southeast Asian origins.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#4F6BFF" strokeWidth="1.4" />
        <path
          d="M2 10h16M10 2c-2.5 3-2.5 13 0 16M10 2c2.5 3 2.5 13 0 16"
          stroke="#4F6BFF"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M4 6h12M4 14h12"
          stroke="#4F6BFF"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="1.5 2"
        />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Coffee Logistics",
    description:
      "Temperature-controlled warehousing, customs clearance, and last-mile distribution across the MENA region.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect
          x="2"
          y="8"
          width="12"
          height="8"
          rx="1.5"
          stroke="#4F6BFF"
          strokeWidth="1.4"
        />
        <path
          d="M14 11h2.5a1 1 0 01.8.4l1.5 2a1 1 0 01.2.6V15a1 1 0 01-1 1H14"
          stroke="#4F6BFF"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="5.5" cy="17" r="1.5" stroke="#4F6BFF" strokeWidth="1.2" />
        <circle cx="11.5" cy="17" r="1.5" stroke="#4F6BFF" strokeWidth="1.2" />
        <path
          d="M5 8V5.5A1.5 1.5 0 016.5 4h4A1.5 1.5 0 0112 5.5V8"
          stroke="#4F6BFF"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Infrastructure Operations",
    description:
      "End-to-end operational management from green coffee receipt to finished product dispatch.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect
          x="3"
          y="3"
          width="6"
          height="6"
          rx="1"
          stroke="#4F6BFF"
          strokeWidth="1.4"
        />
        <rect
          x="11"
          y="3"
          width="6"
          height="6"
          rx="1"
          stroke="#4F6BFF"
          strokeWidth="1.4"
        />
        <rect
          x="3"
          y="11"
          width="6"
          height="6"
          rx="1"
          stroke="#4F6BFF"
          strokeWidth="1.4"
        />
        <rect
          x="11"
          y="11"
          width="6"
          height="6"
          rx="1"
          stroke="#4F6BFF"
          strokeWidth="1.4"
        />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Global Ecosystem",
    description:
      "Partnerships with international roasters, distributors, and hospitality groups across 30+ markets.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="2" fill="#4F6BFF" />
        <circle cx="3.5" cy="6" r="1.5" stroke="#4F6BFF" strokeWidth="1.2" />
        <circle cx="16.5" cy="6" r="1.5" stroke="#4F6BFF" strokeWidth="1.2" />
        <circle cx="3.5" cy="14" r="1.5" stroke="#4F6BFF" strokeWidth="1.2" />
        <circle cx="16.5" cy="14" r="1.5" stroke="#4F6BFF" strokeWidth="1.2" />
        <path
          d="M5 6.5L8.5 9M11.5 9l3-2.5M5 13.5L8.5 11M11.5 11l3 2.5"
          stroke="#4F6BFF"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: "easeOut" },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function GlobalInfrastructure() {
  return (
    <section
      id="global-infrastructure"
      className="relative overflow-hidden py-14 lg:py-20"
      style={{
        background:
          "linear-gradient(180deg, #F4F8FF 0%, #ffffff 50%, #F0F5FF 100%)",
      }}
    >
      {/* ── Blueprint grid texture (ultra-subtle) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,67,183,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,0.045) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 1,
        }}
      />

      {/* ── Radial ambient glows ── */}
      <div
        className="absolute -top-24 -right-24 w-[580px] h-[580px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(79,107,255,0.10) 0%, transparent 68%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute bottom-0 -left-16 w-[440px] h-[440px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(47,67,183,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(107,139,255,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Top accent line ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F6BFF]/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* ── SECTION HEADER ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 lg:mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-2 h-2 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-[#4F6BFF] opacity-40 animate-ping" />
              <div className="w-2 h-2 rounded-full bg-[#4F6BFF]" />
            </div>
            <div className="w-7 h-px bg-[#4F6BFF]/50" />
            <p className="text-[14px] font-semibold tracking-[0.18em] uppercase text-[#2F43B7]">
              Global Infrastructure
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-extrabold text-4xl lg:text-5xl xl:text-[52px] text-[#0F172A] tracking-[-0.03em] leading-[1.08] max-w-2xl">
              Operating at the heart of the{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 55%, #6B8BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                global coffee trade.
              </span>
            </h2>

            <p className="text-[#475569] text-base leading-relaxed max-w-sm lg:text-right font-light">
              From DMCC Dubai to international origin markets — JPLC
              infrastructure connects sourcing, production, and distribution
              across the global specialty coffee ecosystem.
            </p>
          </div>

          {/* Gradient divider */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 h-px bg-gradient-to-r from-[#2F43B7]/45 via-[#E5E7EB] to-transparent"
          />
        </motion.div>

        {/* ── MAIN GRID ── */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-2 space-y-6">
            {/* DMCC Feature card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -4,
                boxShadow:
                  "0 20px 60px rgba(47,67,183,0.16), 0 0 0 1.5px rgba(79,107,255,0.35)",
              }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl p-8 overflow-hidden cursor-default"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(238,244,255,0.80) 100%)",
                border: "1.5px solid rgba(79,107,255,0.20)",
                boxShadow:
                  "0 8px 36px rgba(47,67,183,0.10), 0 0 0 1px rgba(255,255,255,0.8)",
                backdropFilter: "blur(14px)",
              }}
            >
              {/* Top gradient bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{
                  background:
                    "linear-gradient(90deg, #2F43B7 0%, #4F6BFF 55%, #6B8BFF 100%)",
                }}
              />

              {/* Corner bracket decoration */}
              <div className="absolute top-5 right-5 pointer-events-none">
                <div className="w-5 h-px bg-[#4F6BFF]/35" />
                <div className="w-px h-5 bg-[#4F6BFF]/35 ml-auto" />
              </div>

              {/* Ambient inner glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at top right, rgba(79,107,255,0.10) 0%, transparent 65%)",
                }}
              />

              <div className="relative z-10">
                {/* Icon badge */}
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-5"
                  style={{
                    background:
                      "linear-gradient(135deg, #EEF4FF 0%, #DCE7FF 100%)",
                    border: "1px solid rgba(79,107,255,0.20)",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect
                      x="2"
                      y="2"
                      width="14"
                      height="14"
                      rx="3"
                      stroke="#2F43B7"
                      strokeWidth="1.4"
                    />
                    <path
                      d="M5 9h8M9 5v8"
                      stroke="#4F6BFF"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <p className="text-[#4F6BFF] text-[10px] font-bold tracking-[0.36em] uppercase mb-2">
                  DMCC Coffee Centre
                </p>
                <h3 className="text-[#0F172A] font-bold text-xl lg:text-2xl mb-3 leading-snug tracking-[-0.02em]">
                  Dubai Multi Commodities Centre
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed mb-7 font-light">
                  JPLC operates from the DMCC Coffee Centre — the world&apos;s
                  largest coffee free zone, supporting roasting, warehousing,
                  processing, packaging, and international coffee trade
                  infrastructure.
                </p>

                {/* Pill tags */}
                <div className="flex flex-wrap gap-2">
                  {["Free Zone", "DMCC Certified", "International Trade"].map(
                    (label) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#2F43B7]"
                        style={{
                          background:
                            "linear-gradient(135deg, #EEF4FF 0%, #DCE7FF 100%)",
                          border: "1px solid rgba(47,67,183,0.18)",
                          borderRadius: "6px",
                          padding: "4px 10px",
                        }}
                      >
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: "#4F6BFF",
                            display: "inline-block",
                            flexShrink: 0,
                          }}
                        />
                        {label}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </motion.div>

            {/* Active markets metric */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { value: "500+", label: "MT Volume" },
                { value: "30+", label: "Markets" },
                { value: "12+", label: "Years" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl px-4 py-5 text-center hover:-translate-y-0.5 transition-transform duration-200"
                  style={{
                    background: "rgba(255,255,255,0.88)",
                    border: "1.5px solid rgba(79,107,255,0.14)",
                    boxShadow: "0 4px 18px rgba(47,67,183,0.08)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <p className="font-extrabold text-2xl text-[#2F43B7] tracking-tight leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[#64748B] text-[9.5px] tracking-[0.2em] uppercase font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — 4 infra cards ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {infraCards.map((card) => (
              <motion.div
                key={card.id}
                variants={cardVariant}
                whileHover={{
                  y: -6,
                  boxShadow:
                    "0 20px 56px rgba(47,67,183,0.14), 0 0 0 1.5px rgba(79,107,255,0.32)",
                }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="group relative rounded-2xl p-6 overflow-hidden cursor-default"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(238,244,255,0.70) 100%)",
                  border: "1.5px solid rgba(79,107,255,0.14)",
                  boxShadow: "0 4px 20px rgba(47,67,183,0.07)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Animated bottom bar */}
                <div
                  className="absolute bottom-0 left-0 h-[2.5px] w-0 group-hover:w-full transition-[width] duration-300 ease-out rounded-b-2xl"
                  style={{
                    background:
                      "linear-gradient(90deg, #2F43B7, #4F6BFF, #6B8BFF)",
                  }}
                />

                {/* Top-right ambient glow on hover */}
                <div
                  className="absolute top-0 right-0 w-28 h-28 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(ellipse at top right, rgba(79,107,255,0.12) 0%, transparent 65%)",
                  }}
                />

                {/* Icon + number row */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, #EEF4FF 0%, #DCE7FF 100%)",
                      border: "1px solid rgba(79,107,255,0.18)",
                    }}
                  >
                    {card.icon}
                  </div>
                  <span
                    className="font-mono text-[11px] font-bold tracking-[0.25em]"
                    style={{
                      color: "transparent",
                      background: "linear-gradient(135deg, #4F6BFF, #6B8BFF)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                    }}
                  >
                    {card.id}
                  </span>
                </div>

                {/* Text */}
                <h4 className="font-bold text-[15px] text-[#0F172A] mb-2.5 leading-snug tracking-[-0.01em] group-hover:text-[#2F43B7] transition-colors duration-300">
                  {card.title}
                </h4>
                <p className="text-[#64748B] text-xs leading-relaxed">
                  {card.description}
                </p>

                {/* Arrow reveal */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition duration-200">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7h10M8 3l4 4-4 4"
                      stroke="#4F6BFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Bottom accent line ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F6BFF]/20 to-transparent" />
    </section>
  );
}
