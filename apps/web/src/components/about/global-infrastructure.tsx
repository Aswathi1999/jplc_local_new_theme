"use client";

import { motion, type Variants } from "framer-motion";

const infraCards = [
  {
    id: "01",
    title: "International Sourcing",
    description:
      "Direct-trade relationships across Ethiopia, Colombia, Brazil, Yemen, and Southeast Asian origins.",
  },
  {
    id: "02",
    title: "Coffee Logistics",
    description:
      "Temperature-controlled warehousing, customs clearance, and last-mile distribution across the MENA region.",
  },
  {
    id: "03",
    title: "Infrastructure Operations",
    description:
      "End-to-end operational management from green coffee receipt to finished product dispatch.",
  },
  {
    id: "04",
    title: "Global Ecosystem",
    description:
      "Partnerships with international roasters, distributors, and hospitality groups across 30+ markets.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function GlobalInfrastructure() {
  return (
    <section className="bg-[#0F172A] relative overflow-hidden py-16 lg:py-20">
      {/* Blueprint grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,107,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(79,107,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow — right */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#2F43B7] opacity-[0.12] blur-[130px] pointer-events-none -translate-y-1/2" />

      {/* Ambient glow — bottom left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#4056D6] opacity-[0.08] blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-5"
          >
            <div className="w-8 h-px bg-[#6B8BFF]" />
            <p className="text-[#6B8BFF] text-[11px] font-semibold tracking-[0.45em] uppercase">
              Global Infrastructure
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-extrabold text-4xl lg:text-5xl text-white tracking-[-0.03em] leading-[1.08] mb-5 max-w-2xl"
          >
            Operating at the heart of the{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6B8BFF 0%, #93C5FD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              global coffee trade.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#94A3B8] text-base leading-relaxed max-w-md mb-8"
          >
            From DMCC Dubai to international origin markets — JPLC infrastructure
            connects sourcing, production, and distribution across the global
            specialty coffee ecosystem.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-px w-full bg-gradient-to-r from-[#2F43B7]/50 via-[#6B8BFF]/20 to-transparent"
          />
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left col */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured DMCC card — glassmorphism on dark */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative border border-white/10 rounded-sm p-8 hover:border-[#2F43B7]/50 transition-all duration-300 overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2F43B7] via-[#4F6BFF] to-transparent" />

              <p className="text-[#6B8BFF] text-xs font-mono tracking-widest uppercase mb-3">
                DMCC Coffee Centre
              </p>
              <h3 className="text-white font-semibold text-2xl mb-4 leading-snug">
                Dubai Multi Commodities Centre
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-8">
                JPLC operates from the DMCC Coffee Centre — the world&apos;s
                largest coffee free zone, supporting roasting, warehousing,
                processing, packaging, and international coffee trade
                infrastructure.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Free Zone", "DMCC Certified", "International Trade"].map(
                  (label) => (
                    <div key={label} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4F6BFF] flex-shrink-0" />
                      <span className="text-[#94A3B8] text-[10px] tracking-widest uppercase font-mono">
                        {label}
                      </span>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* Active markets stat */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border-t border-white/10 pt-6"
            >
              <p className="text-[#64748B] text-xs tracking-[0.25em] uppercase font-mono mb-2">
                Active Markets
              </p>
              <p className="font-bold text-5xl text-[#6B8BFF] leading-none">
                30+
              </p>
            </motion.div>
          </div>

          {/* Right col */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infraCards.map((card) => (
              <motion.div
                key={card.id}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="group relative border border-white/10 rounded-sm p-6 hover:border-[#2F43B7]/50 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(47,67,183,0.15)] transition-all duration-300 overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Bottom bar */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#4F6BFF] group-hover:w-full transition-all duration-500" />

                <span className="block text-[#6B8BFF] font-mono text-xs mb-4">
                  {card.id}
                </span>
                <h4 className="text-white text-sm font-medium mb-3 leading-snug group-hover:text-[#6B8BFF] transition-colors duration-300">
                  {card.title}
                </h4>
                <p className="text-[#94A3B8] text-xs leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
