"use client";

import { motion, type Variants } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Origin Selection & Coffee Sourcing",
    body: "Direct farm relationships, cupped and Q-graded before purchase. Active procurement — not catalogue browsing.",
  },
  {
    number: "02",
    title: "Roast Profile Development",
    body: "Every roast is engineered around the application — espresso, filter, cold brew, capsule. Nothing generic.",
  },
  {
    number: "03",
    title: "Quality Control & Batch Consistency",
    body: "Every batch checks against reference profiles before it leaves. Documented tolerances, every single run.",
  },
  {
    number: "04",
    title: "Wholesale Coffee Beans Delivery & Supply Management",
    body: "Scheduled delivery, temperature-controlled logistics, demand forecasting. Stock arrives right — without your team chasing it.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
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

export function CoffeeBeansProcess() {
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
            <p className="text-[14px] font-semibold tracking-[0.18em] uppercase text-[#2F43B7]">
              Our Process
            </p>
          </div>
          <h2 className="font-sans font-extrabold text-4xl lg:text-5xl text-[#0F172A] leading-[1.08] tracking-[-0.03em] max-w-xl">
            Coffee Sourcing{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 24px rgba(47,67,183,0.22))",
              }}
            >
              to Your Door
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
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
              {/* Connector line (not on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-full w-5 h-px bg-[#2F43B7]/20 z-10" />
              )}

              <div className="relative bg-white border border-[#E5E7EB] rounded-sm p-7 h-full hover:border-[#2F43B7]/35 hover:shadow-[0_8px_32px_rgba(47,67,183,0.09)] transition-all duration-300 overflow-hidden">
                {/* Top gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2F43B7]/60 via-[#4F6BFF]/40 to-transparent" />

                {/* Number */}
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
