"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const capabilities = [
  {
    num: "01",
    title: "Coffee Extraction Science & Brew Research",
    desc: "Systematic coffee extraction science, yield mapping, TDS analysis, extraction uniformity testing, and brewing variable isolation. Understanding exactly what's happening in the cup and why, across different brewing methods, grind profiles, and water compositions.",
  },
  {
    num: "02",
    title: "Roast Profile Engineering",
    desc: "Roast curve development, Maillard reaction mapping, development time ratios, and post-roast degassing analysis. Roast profile engineering at JPLC treats the roaster as a precision instrument — every variable documented, every profile reproducible.",
  },
  {
    num: "03",
    title: "Flavor Chemistry & Sensory Mapping",
    desc: "Compound analysis, sensory panel evaluation, and flavor chemistry profiling across origin lots, processing methods, and roast degrees. Understanding the chemical basis of flavour allows JPLC to make deliberate decisions about sourcing, roasting, and extraction — rather than relying on subjective tasting alone.",
  },
  {
    num: "04",
    title: "Coffee Product Development UAE",
    desc: "Compound analysis, sensory evaluation, and flavour profiling across origins, processing methods, and roast degrees — understanding the chemical basis of flavour, not just the subjective experience of it.",
  },
  {
    num: "05",
    title: "Coffee Testing & Quality Control",
    desc: "Green coffee evaluation, roasted batch verification, extraction consistency testing, and equipment benchmarking — embedded in the production process, not a separate department reviewing the product after the fact.",
  },
  {
    num: "06",
    title: "Coffee Engineering & Technology Development",
    desc: "Applied coffee engineering — PID control systems, IoT diagnostics, grinder calibration methodology, and water treatment protocol development. The coffee technology side of R&D that connects lab findings to the equipment on the floor.",
  },
];

function CapabilityCard({
  item,
  index,
  isActive,
  onEnter,
}: {
  item: (typeof capabilities)[0];
  index: number;
  isActive: boolean;
  onEnter: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={onEnter}
      className="relative flex flex-col rounded-2xl overflow-hidden cursor-default"
      style={{
        background: "white",
        border: `1px solid ${isActive ? "transparent" : "rgba(15,23,42,0.08)"}`,
        boxShadow: isActive
          ? "0 16px 40px rgba(47,67,183,0.22)"
          : "0 2px 12px rgba(15,23,42,0.04)",
        transition: "box-shadow 0.4s ease, border-color 0.4s ease",
      }}
    >
      {/* Blue overlay — slides up from bottom when active */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
        }}
        animate={{ y: isActive ? "0%" : "100%" }}
        transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
      />

      <div className="relative z-10 flex flex-col flex-1 p-6 lg:p-7">
        {/* Title */}
        <h3
          className="font-extrabold text-[17px] leading-[1.3] tracking-tight mb-4 transition-colors duration-300"
          style={{ color: isActive ? "white" : "#0F172A" }}
        >
          {item.title}
        </h3>

        {/* Accent bar */}
        <div
          className="w-8 h-[2px] mb-5 rounded-full transition-all duration-300"
          style={{
            background: isActive
              ? "rgba(255,255,255,0.45)"
              : "linear-gradient(90deg, #2F43B7, #4F6BFF)",
          }}
        />

        {/* Description */}
        <p
          className="text-[14px] leading-[1.85] flex-1 transition-colors duration-300"
          style={{ color: isActive ? "rgba(255,255,255,0.82)" : "#475569" }}
        >
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

export function RdCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-white overflow-hidden py-12 lg:py-16">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(47,67,183,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-16 xl:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-12 lg:mb-16"
        >
          <h2 className="font-sans font-extrabold text-[#0F172A] text-4xl lg:text-5xl leading-[1.08] tracking-[-0.03em]">
            Coffee Technology &amp;{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              R&amp;D Capabilities
            </span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          onMouseLeave={() => setActiveIndex(0)}
        >
          {capabilities.map((item, i) => (
            <CapabilityCard
              key={item.num}
              item={item}
              index={i}
              isActive={activeIndex === i}
              onEnter={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
