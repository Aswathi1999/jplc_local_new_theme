"use client";

import { motion, type Variants } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Account Assessment",
    body: "We map consumption patterns, service requirements, equipment setup, and delivery constraints before anything starts. No guesswork.",
  },
  {
    number: "02",
    title: "Supply Programme Design",
    body: "Product selection, pack formats, order frequency, delivery schedule, and volume pricing — built around your operation, not a template.",
  },
  {
    number: "03",
    title: "Onboarding & First Supply",
    body: "First delivery managed with direct oversight — right products, right formats, confirmed window. Nothing assumed, everything checked.",
  },
  {
    number: "04",
    title: "Supply & Account Management",
    body: "Replenishment, consumption changes, quality issues — JPLC runs the account. You focus on the operation.",
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
  visible: { transition: { staggerChildren: 0.12 } },
};

const stepVariant: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export function WholesaleProcess() {
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
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#2F43B7]" />
            <p className="text-[14px] font-semibold tracking-[0.18em] uppercase text-[#2F43B7]">
              How We Work
            </p>
          </div>
          <h2 className="font-sans font-extrabold text-4xl lg:text-5xl text-[#0F172A] leading-[1.08] tracking-[-0.03em] max-w-2xl">
            The Way JPLC Manages{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Wholesale Coffee Accounts
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={stepVariant}
              className="group relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-full w-5 h-px bg-[#2F43B7]/20 z-10" />
              )}

              <div className="relative bg-white border border-[#E5E7EB] rounded-sm p-7 h-full hover:border-[#2F43B7]/35 hover:shadow-[0_8px_32px_rgba(47,67,183,0.09)] transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2F43B7]/60 via-[#4F6BFF]/40 to-transparent" />

                <div className="mb-5">
                  <span
                    className="font-extrabold text-[38px] leading-none tracking-tight"
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

                <h3 className="font-extrabold text-[#0F172A] text-base leading-snug tracking-tight mb-3 group-hover:text-[#2F43B7] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
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
