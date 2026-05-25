"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const standards = [
  {
    code: "HACCP",
    name: "HACCP & ISO-Aligned Production Standards",
    description:
      "HACCP and ISO-aligned production standards covering biological, chemical, and physical hazard prevention across all processing stages.",
  },
  {
    code: "SCA",
    name: "Extraction Yield & Brew-Ratio Validation",
    description:
      "SCA cupping protocols, green grading standards, extraction yield validation, and brew-ratio compliance metrics across all production batches.",
  },
  {
    code: "UAE",
    name: "UAE Municipality & Food-Safety Compliance",
    description:
      "Full UAE municipality and food-safety compliance across all production, storage, and distribution operations.",
  },
  {
    code: "CERT",
    name: "Import/Export Certification Support",
    description:
      "End-to-end import/export certification support including customs documentation, origin traceability, and international regulatory compliance.",
  },
];

const metrics = [
  {
    label: "Roast Curve Analytics & Production Data Logging",
    value: "Real-time",
  },
  { label: "Moisture, Density & Water Activity Testing", value: "±0.2%" },
  { label: "Shelf-Life Validation", value: "Batch-level" },
  { label: "Packaging Integrity Analysis", value: "100%" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
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
          >
            <p className="text-[#2F43B7] text-xs font-semibold tracking-[0.35em] uppercase mb-4">
              Quality Assurance & Compliance
            </p>
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-[#0F172A] leading-tight tracking-[-0.02em] mb-6">
              Standards that don&apos;t compromise.{" "}
              <span className="text-[#2F43B7]">
                Systems that don&apos;t fail.
              </span>
            </h2>

            {/* Certification badge row — blue */}
            <div className="flex flex-wrap gap-2">
              {["HACCP", "ISO 22000", "SCA", "UAE"].map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] border border-[#2F43B7]/40 text-[#2F43B7] bg-[#2F43B7]/8 px-3 py-1.5 rounded-sm font-mono tracking-widest"
                >
                  {badge}
                </span>
              ))}
            </div>
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

      {/* â"€â"€ MAIN CONTENT â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* â"€â"€ LEFT: Certifications â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
          <div>
            <p className="text-[#94A3B8] text-xs font-mono tracking-widest uppercase mb-6">
              Certifications & Frameworks
            </p>
            <div className="space-y-4">
              {standards.map((s) => (
                <motion.div
                  key={s.code}
                  variants={itemVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="group relative bg-white border border-[#E5E7EB] rounded-sm p-6 hover:border-[#2F43B7]/45 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  {/* Left accent sweep — blue */}
                  <div className="absolute left-0 top-0 w-[3px] h-0 bg-[#2F43B7] group-hover:h-full transition-all duration-400 rounded-r-sm" />
                  {/* Bottom bar */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#2F43B7] group-hover:w-full transition-all duration-500" />

                  <div className="flex gap-5 items-start">
                    {/* Code badge — navy/blue */}
                    <div className="flex-shrink-0 w-14 h-14 bg-[#2F43B7] group-hover:bg-[#2941A8] rounded-sm flex items-center justify-center transition-colors duration-300">
                      <span className="text-white text-[10px] font-mono tracking-wider font-bold">
                        {s.code}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[#0F172A] text-sm font-semibold mb-1.5 leading-snug group-hover:text-[#2F43B7] transition-colors duration-300">
                        {s.name}
                      </h3>
                      <p className="text-[#64748B] text-xs leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* â"€â"€ RIGHT: Metrics + Food Safety â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
          <div>
            <p className="text-[#94A3B8] text-xs font-mono tracking-widest uppercase mb-6">
              Performance Benchmarks
            </p>

            {/* Dashboard metrics */}
            <div className="space-y-3 mb-6">
              {metrics.map((metric) => (
                <motion.div
                  key={metric.label}
                  variants={itemVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="group relative bg-white border border-[#E5E7EB] rounded-sm px-6 py-5 hover:border-[#2F43B7]/35 transition-all duration-300 overflow-hidden"
                >
                  {/* Bottom bar */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#2F43B7] group-hover:w-full transition-all duration-500" />

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2F43B7] animate-pulse flex-shrink-0" />
                      <span className="text-[#374151] text-sm leading-snug">
                        {metric.label}
                      </span>
                    </div>
                    <span className="font-bold text-2xl text-[#2F43B7] flex-shrink-0 tracking-tight">
                      {metric.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Food Safety Feature Card */}
            <motion.div
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="relative rounded-sm overflow-hidden h-[200px]"
            >
              <Image
                src="/manufacturing.jpg"
                alt="Food safety operations"
                fill
                quality={85}
                className="object-cover"
              />
              {/* Blue overlay */}
              <div className="absolute inset-0 bg-[#2941A8]/88" />
              {/* Blue border */}
              <div className="absolute inset-0 border border-[#2F43B7]/45 rounded-sm pointer-events-none" />
              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-12 h-[2px] bg-[#2F43B7]" />
              <div className="absolute bottom-0 right-0 w-[2px] h-12 bg-[#2F43B7]" />
              {/* Blue glow */}
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#2F43B7]/15 blur-2xl pointer-events-none" />

              <div className="absolute inset-0 p-7 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4F6BFF] animate-pulse" />
                  <p className="text-[#6B8BFF] text-[10px] font-mono tracking-widest uppercase">
                    Food Safety First
                  </p>
                </div>
                <p className="text-[#CBD5E1] text-sm leading-relaxed max-w-sm">
                  Every JPLC production batch undergoes moisture testing,
                  packaging validation, and sensory QA before leaving our
                  facilities. No exceptions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
