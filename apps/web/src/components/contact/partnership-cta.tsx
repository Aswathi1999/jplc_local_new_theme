"use client";

import { motion, type Variants } from "framer-motion";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const stats = [
  { value: "12+", label: "Years Expertise" },
  { value: "500+", label: "MT Annual Capacity" },
  { value: "30+", label: "Global Markets" },
  { value: "8", label: "Business Verticals" },
];

export function PartnershipCta() {
  return (
    <section className="relative bg-[#F8FAFC] overflow-hidden py-16 lg:py-20">
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,67,183,1) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#2F43B7] opacity-[0.06] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main card */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-sm border border-[#2F43B7]/15 shadow-[0_8px_40px_rgba(47,67,183,0.12)]"
          style={{
            background:
              "linear-gradient(135deg, #ffffff 0%, #EEF2FF 50%, #E0E7FF 100%)",
          }}
        >
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2F43B7] via-[#4F6BFF] to-transparent" />

          {/* Corner bracket — top right */}
          <div className="absolute top-6 right-6 pointer-events-none">
            <div className="w-6 h-px bg-[#2F43B7]/25" />
            <div className="w-px h-6 bg-[#2F43B7]/25 ml-auto" />
          </div>

          {/* Corner bracket — bottom left */}
          <div className="absolute bottom-6 left-6 pointer-events-none flex flex-col items-start">
            <div className="w-px h-6 bg-[#2F43B7]/25" />
            <div className="w-6 h-px bg-[#2F43B7]/25" />
          </div>

          {/* Ghost letter */}
          <span
            className="absolute -right-6 top-1/2 -translate-y-1/2 font-sans font-black text-[220px] leading-none text-[#2F43B7]/[0.04] select-none pointer-events-none"
            aria-hidden="true"
          >
            J
          </span>

          <div className="relative z-10 px-8 lg:px-16 py-14 lg:py-16">
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="w-8 h-px bg-[#2F43B7]" />
              <p className="text-[#2F43B7] text-[11px] font-semibold tracking-[0.45em] uppercase">
                Build With JPLC
              </p>
              <div className="w-8 h-px bg-[#2F43B7]" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-center font-extrabold text-4xl lg:text-5xl xl:text-[52px] text-[#0F172A] tracking-[-0.03em] leading-[1.08] mb-4"
            >
              Ready to build{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 20px rgba(47,67,183,0.20))",
                }}
              >
                together?
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-center text-[#374151] text-base lg:text-[17px] leading-relaxed max-w-xl mx-auto mb-10"
            >
              JPLC partners with hospitality groups, coffee brands,
              distributors, and enterprise operators across 30+ global markets.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <a
                href="#"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#2F43B7] text-white text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-[#2941A8] transition-colors overflow-hidden shadow-[0_8px_32px_rgba(47,67,183,0.25)]"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
                <span className="relative">
                  Explore Partnership Opportunities
                </span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="relative"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="mailto:hello@jplc.com"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#2F43B7]/30 text-[#2F43B7] text-xs font-medium tracking-widest uppercase rounded-sm hover:border-[#2F43B7]/60 hover:bg-[#2F43B7]/5 transition-all duration-200"
              >
                Email Us Directly
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E7EB] rounded-sm overflow-hidden border border-[#E5E7EB]"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group bg-[#F8FAFC] hover:bg-white transition-colors duration-300 px-6 py-5 text-center"
                >
                  <p className="font-bold text-2xl text-[#2F43B7] mb-1 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[#64748B] text-[10px] tracking-widest uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
