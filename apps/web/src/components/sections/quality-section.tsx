"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function QualitySection() {
  return (
    <section id="quality" className="bg-[#F8FAFC] relative overflow-hidden">
      {/* Subtle blue ambient glow */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#2F43B7]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#4056D6]/4 rounded-full blur-3xl pointer-events-none" />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2F43B7 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* â"€â"€ HERO HEADER â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 pt-16 lg:pt-24 pb-12">
        {/* Faded watermark word */}
        <span className="absolute top-4 left-4 lg:left-8 text-[#2F43B7]/[0.06] font-sans font-black text-[120px] lg:text-[200px] leading-none select-none pointer-events-none whitespace-nowrap">
          QUALITY
        </span>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Heading + badges */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ willChange: "transform" }}
          >
            <p className="text-[14px] font-semibold tracking-[0.18em] uppercase text-[#2F43B7] mb-4">
              Quality Assurance & Compliance
            </p>
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-[#0F172A] leading-tight tracking-[-0.02em] mb-6">
              Standards that don&apos;t compromise.{" "}
              <span className="text-[#2F43B7]">
                Systems that don&apos;t fail.
              </span>
            </h2>
          </motion.div>

          {/* Right: Subheading / description */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="text-[#374151] text-base leading-relaxed mb-6">
              Every batch, every process, every shipment — measured against the
              world&apos;s most rigorous food-safety and specialty coffee
              standards.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#2F43B7]" />
              <span className="text-[#2F43B7] text-xs tracking-[0.25em] uppercase font-semibold">
                ISO Compliant Facility
              </span>
            </div>
          </motion.div>
        </div>

        {/* Gradient divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-12 h-px bg-gradient-to-r from-[#2F43B7]/45 via-[#E5E7EB] to-transparent"
        />
      </div>
    </section>
  );
}
