"use client";

import { motion, type Variants } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Brand & Product Brief",
    body: "The process starts with a clear brief — target market, flavour direction, format requirements, volume projections, and timeline. The more specific, the faster we move.",
  },
  {
    number: "02",
    title: "Custom Coffee Blends & Sample Development",
    body: "Our R&D team develops roast profiles and blend options against the brief. Samples are produced, cupped, and refined until the product is right — before a single production run is committed to.",
  },
  {
    number: "03",
    title: "Coffee Packaging & Compliance",
    body: "Once the product is confirmed, packaging development runs in parallel with production planning. Format, barrier specification, labelling compliance, and print coordination — all managed through one team.",
  },
  {
    number: "04",
    title: "OEM Coffee Manufacturing & Production Run",
    body: "Full production runs are executed with batch documentation, quality checkpoints, and traceability records. Every run is checked against the approved reference before it leaves the facility.",
  },
  {
    number: "05",
    title: "Launch & Ongoing Coffee Production",
    body: "Post-launch, JPLC manages replenishment cycles, stock forecasting, and product development iterations. Launching your coffee brand UAE is the starting point — building it into a sustainable operation is the objective.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const stepVariant: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export function PrivateLabelProcess() {
  return (
    <section
      className="relative overflow-hidden py-16 lg:py-20"
      style={{
        background:
          "linear-gradient(180deg, #F4F8FF 0%, #ffffff 50%, #F4F8FF 100%)",
      }}
    >
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-[#2F43B7] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#2F43B7]" />
            <p className="text-[#4F6BFF] text-[14px] font-semibold tracking-[0.38em] uppercase">
              How It Works
            </p>
          </div>
          <h2 className="font-sans font-extrabold text-4xl lg:text-5xl text-[#0F172A] leading-[1.08] tracking-[-0.03em] max-w-xl">
            From Brief{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 24px rgba(47,67,183,0.22))",
              }}
            >
              to Shelf
            </span>
          </h2>
        </motion.div>

        {/* Steps — 5 cards in a responsive grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={stepVariant}
              className="group relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-full w-5 h-px bg-[#2F43B7]/20 z-10" />
              )}

              <div className="relative bg-white border border-[#E5E7EB] rounded-sm p-6 h-full hover:border-[#2F43B7]/35 hover:shadow-[0_8px_32px_rgba(47,67,183,0.09)] transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2F43B7]/60 via-[#4F6BFF]/40 to-transparent" />

                <div className="mb-4">
                  <span
                    className="font-extrabold text-[34px] leading-none tracking-tight"
                    style={{
                      background:
                        "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className="font-extrabold text-[#0F172A] text-sm leading-snug tracking-tight mb-3 group-hover:text-[#2F43B7] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[#64748B] text-xs leading-relaxed">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
