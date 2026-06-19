"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Needs Assessment",
    body: "Volume, workflow, space, water quality, and budget — assessed before anything is recommended. A restaurant setup looks very different from a hotel breakfast operation.",
  },
  {
    number: "02",
    title: "Selection & Sourcing",
    body: "Espresso machines, grinders, filtration, and ancillary equipment recommended from our supplier network. No single-brand bias — the right equipment for the operation.",
  },
  {
    number: "03",
    title: "Installation & Calibration",
    body: "Installed, plumbed, and commissioned by JPLC's engineering team. Extraction parameters, grind settings, and pressure profiling set to spec before handover.",
  },
  {
    number: "04",
    title: "Training & Handover",
    body: "Staff trained on the specific equipment installed — not generic machine training. How to use it, clean it, and spot basic faults.",
  },
  {
    number: "05",
    title: "Ongoing Servicing",
    body: "Preventive maintenance, priority call-outs, and locally managed parts. The same team that installed the equipment services it — no subcontracting.",
  },
];

export function CommercialMachinesProcess() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <section
      className="relative overflow-hidden py-12 lg:py-16"
      style={{ background: "#ffffff" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 lg:mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-[2px] rounded-full bg-[#2F43B7]" />
            <div className="w-3 h-[2px] rounded-full bg-[#4F6BFF]/40" />
            <div className="w-1.5 h-[2px] rounded-full bg-[#4F6BFF]/15" />
          </div>
          <h2 className="font-sans font-extrabold text-[#0F172A] text-4xl lg:text-5xl leading-[1.08] tracking-[-0.03em]">
            From Equipment Selection{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              to Ongoing Service
            </span>
          </h2>
        </motion.div>

        {/* ─── Desktop: Horizontal timeline ─── */}
        <div ref={timelineRef} className="hidden lg:block">
          {/* Line + circles row */}
          <div className="relative flex items-center justify-between mb-10">
            {/* Track */}
            <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 h-px bg-[#E2E8F0]" />
            {/* Animated fill */}
            <motion.div
              className="absolute left-5 top-1/2 -translate-y-1/2 h-[2px] origin-left"
              style={{
                background: "linear-gradient(90deg, #2F43B7 0%, #4F6BFF 100%)",
                boxShadow: "0 0 8px rgba(79,107,255,0.4)",
              }}
              animate={{ width: inView ? "calc(100% - 40px)" : "0%" }}
              transition={{
                duration: 2,
                ease: [0.22, 0.61, 0.36, 1],
                delay: 0.2,
              }}
            />
            {/* Step circles */}
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-extrabold tracking-wide cursor-default transition-transform duration-200 hover:scale-110"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  duration: 0.45,
                  delay: 0.2 + i * 0.22,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                  boxShadow:
                    "0 0 0 5px #ffffff, 0 4px 14px rgba(47,67,183,0.35)",
                }}
              >
                {step.number}
              </motion.div>
            ))}
          </div>

          {/* Content row */}
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.45 + i * 0.18,
                  ease: "easeOut",
                }}
                className="group relative rounded-xl p-5 cursor-default transition-all duration-250 hover:-translate-y-1.5 hover:shadow-[0_8px_28px_rgba(47,67,183,0.10)]"
                style={{
                  border: "1px solid rgba(47,67,183,0.08)",
                  boxShadow: "0 2px 12px rgba(47,67,183,0.07)",
                  backgroundColor: "#ffffff",
                }}
                whileHover={{
                  borderColor: "rgba(47,67,183,0.18)",
                  boxShadow: "0 8px 28px rgba(47,67,183,0.12)",
                }}
              >
                {/* Blue top accent — appears on hover */}
                <div
                  className="absolute top-0 left-5 right-5 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-250"
                  style={{
                    background:
                      "linear-gradient(90deg, #2F43B7 0%, #4F6BFF 100%)",
                  }}
                />
                <h3 className="font-extrabold text-[#0F172A] text-sm mb-2.5 leading-snug tracking-tight transition-colors duration-200 group-hover:text-[#2F43B7]">
                  {step.title}
                </h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed transition-colors duration-200 group-hover:text-[#64748B]">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── Mobile: Vertical timeline ─── */}
        <div className="lg:hidden relative pl-10">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[#2F43B7] via-[#4F6BFF]/40 to-transparent" />
          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
                className="group relative rounded-xl p-5 transition-all duration-250"
                style={{
                  border: "1px solid rgba(47,67,183,0.08)",
                  boxShadow: "0 2px 12px rgba(47,67,183,0.07)",
                  backgroundColor: "#ffffff",
                }}
                whileHover={{
                  borderColor: "rgba(47,67,183,0.18)",
                  boxShadow: "0 8px 28px rgba(47,67,183,0.12)",
                }}
              >
                <div
                  className="absolute -left-[42px] w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-extrabold transition-transform duration-200 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                    boxShadow:
                      "0 0 0 3px #ffffff, 0 3px 10px rgba(47,67,183,0.3)",
                  }}
                >
                  {step.number}
                </div>
                <h3 className="font-extrabold text-[#0F172A] text-sm mb-2 leading-snug tracking-tight transition-colors duration-200 group-hover:text-[#2F43B7]">
                  {step.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed transition-colors duration-200 group-hover:text-[#64748B]">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
