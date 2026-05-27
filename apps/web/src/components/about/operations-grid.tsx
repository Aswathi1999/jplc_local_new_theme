"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";

const operations = [
  {
    id: "01",
    title: "Green Procurement",
    description:
      "Direct-trade sourcing, Q-grading, origin traceability, and green coffee supply management.",
    tag: "Sourcing",
  },
  {
    id: "02",
    title: "Roasting & Production",
    description:
      "Roast profile engineering, production roasting, batch consistency, and private label manufacturing.",
    tag: "Production",
  },
  {
    id: "03",
    title: "Research & Development",
    description:
      "Extraction science, sensory mapping, beverage innovation, and AI-assisted calibration systems.",
    tag: "R&D",
  },
  {
    id: "04",
    title: "Machine Engineering",
    description:
      "Espresso machine manufacturing, IoT diagnostics, thermal systems, and technical field services.",
    tag: "Engineering",
  },
  {
    id: "05",
    title: "Manufacturing",
    description:
      "OEM manufacturing, capsule systems, retail packaging, and brand commercialization.",
    tag: "Manufacturing",
  },
  {
    id: "06",
    title: "Distribution",
    description:
      "Regional wholesale, supply-chain coordination, inventory forecasting, and logistics management.",
    tag: "Logistics",
  },
  {
    id: "07",
    title: "Hospitality Solutions",
    description:
      "HoReCa supply, corporate beverage programs, event activations, and managed services.",
    tag: "Hospitality",
  },
  {
    id: "08",
    title: "Training & Education",
    description:
      "Barista certification, sensory training, brewing education, and professional coffee programs.",
    tag: "Training",
  },
];

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const containerVariant: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

function OperationCard({ op }: { op: (typeof operations)[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-sm p-7 overflow-hidden"
      style={{
        background: "#2941A8",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.12)"}`,
        boxShadow: hovered
          ? "0 20px 60px rgba(41,65,168,0.50), 0 0 0 1px rgba(255,255,255,0.15)"
          : "0 4px 24px rgba(41,65,168,0.20)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Top gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/60 via-white/30 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Shimmer sweep */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      {/* Bottom animated bar */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-white/80 to-white/20 group-hover:w-full transition-all duration-500 pointer-events-none" />

      {/* Corner accent - bottom right horizontal */}
      <div className="absolute bottom-3 right-3 w-5 h-px bg-white/20 group-hover:bg-white/60 transition-colors duration-300 pointer-events-none" />
      {/* Corner accent - bottom right vertical */}
      <div className="absolute bottom-3 right-3 w-px h-5 bg-white/20 group-hover:bg-white/60 transition-colors duration-300 pointer-events-none" />

      {/* Top row: number + tag */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-white/50 group-hover:text-white/90 font-mono text-[10px] tracking-widest transition-colors duration-300">
          {op.id}
        </span>
        <span className="text-white/90 bg-white/[0.12] border border-white/20 text-[9px] font-mono tracking-[0.25em] uppercase px-2.5 py-1 rounded-sm group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-300">
          {op.tag}
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/5 mb-4" />

      {/* Title */}
      <h3 className="text-white text-sm font-bold mb-3 leading-snug">
        {op.title}
      </h3>

      {/* Description */}
      <p className="text-white/65 text-xs leading-relaxed group-hover:text-white/85 transition-colors duration-300">
        {op.description}
      </p>
    </motion.div>
  );
}

export function OperationsGrid() {
  return (
    <section className="relative bg-[#F8FAFC] py-16 lg:py-20 overflow-hidden">
      {/* Blueprint grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,67,183,1) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow - top right */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#2F43B7] opacity-[0.04] blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#2F43B7]" />
            <p className="text-[#2F43B7] text-[11px] font-semibold tracking-[0.45em] uppercase">
              Enterprise Operations
            </p>
          </div>

          {/* Heading */}
          <h2 className="font-extrabold text-4xl lg:text-5xl text-[#0F172A] tracking-[-0.03em] leading-[1.08] mb-5">
            Eight pillars.{" "}
            <span className="bg-gradient-to-r from-[#2F43B7] to-[#4F6BFF] bg-clip-text text-transparent">
              One integrated ecosystem.
            </span>
          </h2>

          {/* Body */}
          <p className="text-[#374151] text-base leading-relaxed max-w-2xl mb-8">
            JPLC operates across the complete specialty coffee value chain from
            origin procurement to enterprise deployment.
          </p>

          {/* Animated gradient divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-gradient-to-r from-[#2F43B7]/50 via-[#E5E7EB] to-transparent origin-left"
          />
        </div>

        {/* Cards grid - stagger container */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {operations.map((op) => (
            <OperationCard key={op.id} op={op} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
