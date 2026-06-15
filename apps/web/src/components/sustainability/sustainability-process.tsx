"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Sourcing Standards",
    body: "Every producer relationship is assessed against JPLC's sourcing standards — environmental practice, labour conditions, pricing transparency, and traceability capability. Ethical coffee supplier UAE standards applied at the point of procurement, not retrospectively.",
  },
  {
    num: "02",
    title: "Lot Verification & Coffee Traceability",
    body: "Every purchased lot is documented from origin — producer details, farm location, processing method, and harvest data. Coffee traceability records are maintained across the supply chain and available to partners who need provenance documentation for their own reporting.",
  },
  {
    num: "03",
    title: "Production & Packaging Review",
    body: "Roastery operations and packaging specifications are reviewed regularly against environmental targets — energy consumption, waste output, packaging material composition, and water use. Targets are set, measured, and reported internally.",
  },
  {
    num: "04",
    title: "Partner Alignment",
    body: "JPLC works with supply chain partners — logistics, packaging suppliers, equipment manufacturers, who meet baseline sustainability standards. Responsible sourcing doesn't stop at the farm gate. It applies to every vendor relationship in the operation.",
  },
];

export function SustainabilityProcess() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-[#F8FAFC]">
      <div
        className="absolute top-0 left-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(47,67,183,0.05) 0%, transparent 65%)",
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
          <h2 className="font-black text-[#0F172A] text-[38px] lg:text-[50px] xl:text-[58px] leading-[1.0] tracking-[-0.035em]">
            Sustainability Built{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Into the Operation
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
