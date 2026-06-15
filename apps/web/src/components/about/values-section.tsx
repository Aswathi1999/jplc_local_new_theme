"use client";

import { motion, type Variants } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Precision Over Shortcuts",
    body: "Every variable in coffee — extraction yield, roast curve, water composition, machine calibration — compounds over time. We engineer the details because the details determine the outcome.",
  },
  {
    number: "02",
    title: "Accountability Without Deflection",
    body: "One partner, full ownership. When something isn't right, we don't point elsewhere. We fix it.",
  },
  {
    number: "03",
    title: "Depth Over Volume",
    body: "We don't work with everyone. The businesses we partner with are serious about coffee, and we give them the depth of expertise and infrastructure that reflects that seriousness.",
  },
  {
    number: "04",
    title: "Integration as a Principle",
    body: "Sourcing, roasting, engineering, training — none of these work in isolation. Every vertical we operate is designed to strengthen the ones around it. That's not an operational preference. It's a founding principle.",
  },
  {
    number: "05",
    title: "Long-Term Thinking",
    body: "Coffee infrastructure takes time to build right. We invest in partnerships, systems, and capabilities with a long horizon in mind.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function ValuesSection() {
  return (
    <section className="relative bg-[#F8FAFC] overflow-hidden py-12 lg:py-16">
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[480px] h-[380px] rounded-full bg-[#2F43B7] opacity-[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[380px] h-[300px] rounded-full bg-[#4056D6] opacity-[0.04] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#2F43B7]" />
            <p className="text-[#4F6BFF] text-[14px] font-semibold tracking-[0.38em] uppercase">
              Our Values
            </p>
          </div>
          <h2 className="font-sans font-extrabold text-4xl lg:text-5xl text-[#0F172A] leading-[1.08] tracking-[-0.03em] max-w-xl">
            What We Stand For —{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 24px rgba(47,67,183,0.22))",
              }}
            >
              Every Decision, Every Day
            </span>
          </h2>
          <div className="mt-6 h-px bg-gradient-to-r from-[#2F43B7]/40 via-[#E5E7EB] to-transparent max-w-2xl" />
        </motion.div>

        {/* Values grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {values.map((v) => (
            <motion.div
              key={v.number}
              variants={cardVariant}
              className="group relative bg-white border border-[#E5E7EB] rounded-sm p-8 hover:border-[#2F43B7]/35 hover:shadow-[0_8px_32px_rgba(47,67,183,0.09)] transition-all duration-300 overflow-hidden"
            >
              {/* Top accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2F43B7] to-[#4F6BFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Ghost number */}
              <span className="absolute -top-2 right-4 font-black text-[72px] leading-none text-[#2F43B7]/[0.05] select-none pointer-events-none">
                {v.number}
              </span>

              <div className="relative z-10">
                <span className="text-[#4F6BFF] text-[10px] font-mono font-bold tracking-[0.3em] mb-4 block">
                  {v.number}
                </span>
                <h3 className="font-extrabold text-lg text-[#0F172A] tracking-[-0.02em] leading-snug mb-3 group-hover:text-[#2F43B7] transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {v.body}
                </p>
                <div className="mt-5 h-px w-0 group-hover:w-10 bg-gradient-to-r from-[#2F43B7] to-[#4F6BFF] transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
