"use client";

import { motion, type Variants } from "framer-motion";

const partnerTypes = [
  "Coffee Brands & Roasters",
  "Hospitality Groups",
  "F&B Operators",
  "Technology Partners",
  "Investment & Ventures",
  "Institutional Buyers",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const chipVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function PartnershipSection() {
  return (
    <section
      id="partnership"
      className="py-16 lg:py-20 bg-[#F8FAFC] relative overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F43B7]/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-sm overflow-hidden text-center"
          style={{
            background:
              "linear-gradient(135deg, #ffffff 0%, #EEF2FF 50%, #E0E7FF 100%)",
            boxShadow:
              "0 24px 64px rgba(47,67,183,0.14), 0 0 0 1px rgba(47,67,183,0.12)",
          }}
        >
          {/* Blueprint grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(47,67,183,1) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Ambient glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#2F43B7] opacity-[0.07] blur-[90px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[350px] h-[250px] bg-[#4F6BFF] opacity-[0.08] blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[200px] bg-[#2F43B7] opacity-[0.06] blur-[70px] rounded-full pointer-events-none" />

          {/* Corner brackets */}
          <div className="absolute top-5 left-5 w-8 h-px bg-[#2F43B7]/40" />
          <div className="absolute top-5 left-5 w-px h-8 bg-[#2F43B7]/40" />
          <div className="absolute top-5 right-5 w-8 h-px bg-[#2F43B7]/40" />
          <div className="absolute top-5 right-5 w-px h-8 bg-[#2F43B7]/40" />
          <div className="absolute bottom-5 left-5 w-8 h-px bg-[#2F43B7]/25" />
          <div className="absolute bottom-5 left-5 w-px h-8 bg-[#2F43B7]/25" />
          <div className="absolute bottom-5 right-5 w-8 h-px bg-[#2F43B7]/25" />
          <div className="absolute bottom-5 right-5 w-px h-8 bg-[#2F43B7]/25" />

          {/* Top edge accent */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#2F43B7] to-transparent opacity-60" />

          <div className="relative z-10 px-6 lg:px-14 py-14 lg:py-16">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#2F43B7]" />
              <p className="text-[14px] font-semibold tracking-[0.18em] uppercase text-[#2F43B7]">
                Enterprise Collaboration
              </p>
              <div className="w-8 h-px bg-[#2F43B7]" />
            </div>

            <h2 className="font-sans font-extrabold text-3xl lg:text-4xl xl:text-5xl text-[#0F172A] leading-[1.08] tracking-[-0.03em] mb-6">
              Build the Future of Specialty Coffee With Us —{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 24px rgba(47,67,183,0.22))",
                }}
              >
                Coffee Solutions for Every Scale
              </span>
            </h2>

            <p className="text-[#374151] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              If the need is a trusted coffee bean supplier, a commercial coffee
              machine supplier Dubai, professional barista training and
              certification Dubai, or a coffee sourcing and roasting company UAE
              — JPLC is the right conversation to start.
            </p>

            {/* Partner type chips */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {partnerTypes.map((type) => (
                <motion.span
                  key={type}
                  variants={chipVariant}
                  className="text-[#374151] text-xs border border-[#2F43B7]/20 bg-white/70 rounded-full px-4 py-2 hover:border-[#2F43B7]/50 hover:text-[#2F43B7] hover:bg-white transition-all cursor-default backdrop-blur-sm"
                >
                  {type}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:partnerships@jplc.com"
                className="inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-[#2F43B7] text-white text-sm font-semibold tracking-wide rounded-sm hover:bg-[#2941A8] transition-colors shadow-lg shadow-[#2F43B7]/25"
              >
                Contact Us
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
              <a
                href="mailto:partnerships@jplc.com"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-[#2F43B7]/30 text-[#2F43B7] bg-white/60 text-sm font-semibold tracking-wide rounded-sm hover:border-[#2F43B7] hover:bg-white transition-colors backdrop-blur-sm"
              >
                Partnership Inquiry
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />
    </section>
  );
}
