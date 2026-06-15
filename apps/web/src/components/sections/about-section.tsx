"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

const stats = [
  { value: "6", label: "Integrated Business Verticals" },
  { value: "40+", label: "Enterprise Partnerships" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative pt-8 pb-20 lg:pt-12 lg:pb-28 bg-[#F8FAFC] overflow-hidden"
    >
      {/* Top-right ambient glow */}
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#2F43B7] opacity-[0.04] blur-[120px] pointer-events-none" />
      {/* Bottom-left ambient glow */}
      <div className="absolute bottom-0 -left-40 w-[500px] h-[400px] rounded-full bg-[#4056D6] opacity-[0.05] blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        {/* â"€â"€ EYEBROW â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-8 h-px bg-[#2F43B7]" />
          <p className="text-[#4F6BFF] text-[14px] font-semibold tracking-[0.38em] uppercase">
            About JPLC
          </p>
        </motion.div>

        {/* â"€â"€ MAIN GRID â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
        <div className="grid lg:grid-cols-[5fr_7fr] gap-14 lg:gap-20 items-start">
          {/* â"€â"€ LEFT COLUMN â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
          <motion.div
            custom={0.05}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            {/* Vertical accent line */}

            <h2 className="font-sans font-extrabold text-4xl lg:text-5xl xl:text-[54px] text-[#0F172A] leading-[1.08] tracking-[-0.03em] mb-7">
              More Than a Coffee Company —{" "}
              <span
                className="relative inline-block"
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 28px rgba(47,67,183,0.28))",
                }}
              >
                A Precision-Built Infrastructure
              </span>
            </h2>

            {/* â"€â"€ STATS GRID â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
            <div className="grid grid-cols-3 gap-4 mt-2 mb-8">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  custom={0.1 + i * 0.08}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="group relative p-5 rounded-sm border border-[#2F43B7]/12 bg-white/70 backdrop-blur-sm hover:border-[#2F43B7]/35 hover:bg-white transition-all duration-300 hover:shadow-[0_8px_32px_rgba(47,67,183,0.10)]"
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-sm bg-gradient-to-r from-[#2F43B7]/60 via-[#4056D6]/40 to-transparent" />

                  <p
                    className="font-extrabold text-3xl lg:text-[38px] tracking-tight mb-1.5 leading-none"
                    style={{
                      background:
                        "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[#64748B] text-[11px] leading-snug tracking-wide font-medium">
                    {s.label}
                  </p>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-sm bg-[#2F43B7]/0 group-hover:bg-[#2F43B7]/[0.025] transition-colors duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </div>
            {/* CTA Button */}
            <a
              href="/about"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-[#2F43B7] text-white text-[13px] font-semibold tracking-[0.08em] uppercase rounded-sm hover:bg-[#4056D6] transition-colors duration-300 shadow-md shadow-[#2F43B7]/25"
            >
              Discover Our Story
              <svg
                className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>

          {/* â"€â"€ RIGHT COLUMN â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
          <motion.div
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            {/* Subtle glass panel */}
            <div className="relative p-8 lg:p-10 rounded-sm border border-[#E2E8F0]/80 bg-white/60 backdrop-blur-sm shadow-[0_4px_40px_rgba(15,23,42,0.04)]">
              {/* Corner accent — top right */}
              <div className="absolute top-0 right-0 w-12 h-px bg-[#2F43B7]/40" />
              <div className="absolute top-0 right-0 w-px h-12 bg-[#2F43B7]/40" />
              {/* Corner accent — bottom left */}
              <div className="absolute bottom-0 left-0 w-8 h-px bg-[#2F43B7]/25" />
              <div className="absolute bottom-0 left-0 w-px h-8 bg-[#2F43B7]/25" />

              <div className="space-y-5 text-[#374151] text-base lg:text-[18px] leading-[1.75]">
                <p>
                  JPLC is not a reseller, and not a single-function supplier. We
                  are a full-stack specialty coffee company with direct control
                  over every stage — from green bean procurement and coffee
                  roasting to equipment engineering, private label coffee
                  manufacturing, and end-to-end commercial coffee solutions.
                </p>
                <p>
                  Working with JPLC means one partner instead of four. One point
                  of accountability across supply, quality, equipment, and
                  training.
                </p>
                <p>
                  Over the years, we have built an operation that café owners,
                  hotel groups, corporate campuses, and F&B brands across the
                  UAE rely on — not just for consistent supply, but for the
                  technical depth that actually moves their business forward.
                </p>
              </div>

              {/* ── BLOCKQUOTE ─────────────────────────────────── */}
              <div className="relative mt-8 pl-6">
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-[#2F43B7] via-[#4056D6] to-[#2F43B7]/30" />
                {/* Blue glow behind quote */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-32 h-16 bg-[#2F43B7]/08 blur-2xl rounded-full pointer-events-none" />

                <blockquote className="font-bold text-xl lg:text-2xl text-[#0F172A] leading-[1.35] tracking-[-0.015em]">
                  &ldquo;We engineer coffee infrastructure so our partners can
                  focus on the experience.&rdquo;
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
