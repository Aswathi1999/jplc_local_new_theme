"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Problem Identification",
    body: "Every R&D project starts with a specific question, an extraction inconsistency, a flavour profile that isn't landing, a product development brief, or an equipment performance gap. Research without a commercial objective is academic. JPLC R&D starts with the problem.",
  },
  {
    num: "02",
    title: "Lab Investigation",
    body: "Structured testing at the specialty coffee research laboratory, controlled variables, documented methodology, and repeatable results. The coffee extraction research UAE process is systematic, not exploratory guesswork.",
  },
  {
    num: "03",
    title: "Applied Development",
    body: "Lab findings are translated into actionable protocols, roast adjustments, extraction parameters, product formulations, or equipment calibration specifications. The coffee innovation center UAE output is always a usable result, not a report.",
  },
  {
    num: "04",
    title: "Commercial Integration",
    body: "Validated protocols and products move into the relevant operational vertical — production, equipment services, training, or supply. Coffee product development UAE projects follow the same path — lab to production to market, with quality checkpoints at each stage.",
  },
];

function StepBand({ step, index }: { step: (typeof steps)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative border-b last:border-b-0 py-10 lg:py-12"
      style={{ borderColor: "rgba(15,23,42,0.07)" }}
    >
      {/* Left blue accent — on hover */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(180deg, #2F43B7 0%, #4F6BFF 100%)",
        }}
      />

      <div className="grid grid-cols-[72px_1fr] lg:grid-cols-[140px_1fr] gap-6 lg:gap-12 items-start pl-4 lg:pl-6">
        {/* Step number — oversized watermark */}
        <div className="relative flex items-start justify-start pt-1">
          <span
            className="font-black leading-none tracking-tight select-none transition-colors duration-300"
            style={{
              fontSize: "clamp(56px, 8vw, 96px)",
              color: "rgba(47,67,183,0.07)",
            }}
          >
            {step.num}
          </span>
        </div>

        {/* Content */}
        <div className="pt-2 lg:pt-4">
          <h3 className="font-extrabold text-[#0F172A] text-[20px] lg:text-[22px] leading-snug tracking-tight mb-4 transition-colors duration-200 group-hover:text-[#2F43B7]">
            {step.title}
          </h3>
          <p className="text-[#475569] text-[15px] lg:text-base leading-[1.88] max-w-2xl">
            {step.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function RdProcess() {
  return (
    <section className="relative bg-[#F8FAFC] overflow-hidden py-12 lg:py-16">
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, rgba(47,67,183,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-16 xl:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-4"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1.5px] bg-[#2F43B7]" />
            <span className="text-[14px] font-semibold tracking-[0.18em] uppercase text-[#2F43B7]">
              Research Pipeline
            </span>
          </div>
          <h2 className="font-black text-[#0F172A] text-[38px] lg:text-[50px] xl:text-[58px] leading-[1.0] tracking-[-0.035em]">
            From Research to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Commercial Application
            </span>
          </h2>
        </motion.div>

        {/* Step bands */}
        <div>
          {steps.map((step, i) => (
            <StepBand key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
