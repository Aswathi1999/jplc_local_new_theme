"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Operational Assessment",
    body: "Every hospitality engagement starts with a detailed assessment — outlet mapping, volume analysis, equipment audit, current supply review, and staff capability evaluation. Commercial coffee solutions UAE built on assumptions don't last. We start with the full picture.",
  },
  {
    num: "02",
    title: "Programme Design",
    body: "Based on the assessment, we structure a complete hospitality coffee solutions UAE programme — supply agreements, equipment configuration, service schedules, training plans, and account management structure. One document, full scope, clear accountability.",
  },
  {
    num: "03",
    title: "Deployment",
    body: "Supply, equipment, and training are deployed simultaneously — not sequenced across separate vendor onboarding processes. The programme goes live as a complete system, not a series of disconnected handovers.",
  },
  {
    num: "04",
    title: "Ongoing Management & Coffee Service Solutions",
    body: "Active account management, scheduled equipment servicing, supply continuity monitoring, and regular programme reviews. Hospitality coffee supplier UAE relationships that run on autopilot — managed by JPLC so the operator's team focuses on the guest, not the supply chain.",
  },
];

export function HospitalityProcess() {
  return (
    <section className="relative bg-white overflow-hidden py-16 lg:py-24">
      <div
        className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(47,67,183,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 xl:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1.5px] bg-[#2F43B7]" />
            <span className="text-[14px] font-semibold tracking-[0.18em] uppercase text-[#2F43B7]">
              Hospitality Operations Journey
            </span>
          </div>
          <h2 className="font-black text-[#0F172A] text-[38px] lg:text-[50px] xl:text-[58px] leading-[1.0] tracking-[-0.035em]">
            The Way JPLC Manages{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Hospitality Coffee Solutions UAE
            </span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="group relative bg-white rounded-2xl p-7 lg:p-8 flex flex-col gap-5 cursor-default"
              style={{
                border: "1px solid rgba(47,67,183,0.1)",
                boxShadow: "0 2px 16px rgba(47,67,183,0.06)",
              }}
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(90deg, #2F43B7, #4F6BFF)",
                }}
              />

              {/* Number badge */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                  boxShadow: "0 4px 14px rgba(47,67,183,0.28)",
                }}
              >
                <span className="font-black text-white text-[12px] tracking-tight">
                  {step.num}
                </span>
              </div>

              <div>
                <h3 className="font-extrabold text-[#0F172A] text-[17px] lg:text-[18px] leading-snug tracking-tight mb-3 group-hover:text-[#2F43B7] transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-[#475569] text-[14px] lg:text-[15px] leading-[1.85]">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
