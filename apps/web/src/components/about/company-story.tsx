"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const storyBlocks = [
  {
    number: "01",
    tag: "Market Context",
    title: "Where We Sit in the UAE Coffee Market",
    body: "The UAE coffee market has grown fast. What hasn't kept pace is the infrastructure behind it. Most operators still piece together their coffee programme from multiple vendors — a supplier here, a technician there, a training provider somewhere else. The result is inconsistency, gaps in accountability, and a programme only as strong as its weakest handoff.",
  },
  {
    number: "02",
    tag: "Operations",
    title: "An Infrastructure Platform, Not Another Supplier",
    body: "JPLC was built to address exactly that. Not as another supplier entering a crowded market, but as an infrastructure platform that sits behind coffee businesses and gives them the operational backbone to run well and scale with confidence.",
  },
  {
    number: "03",
    tag: "What We've Built",
    title: "Eight Integrated Verticals, One Operation",
    body: "JPLC operates across eight integrated verticals: green coffee procurement, roasting and production engineering, R&D, machine engineering and technical services, distribution, hospitality operations, brand development and manufacturing, and coffee training. Each vertical functions independently. The value compounds when they work together.",
  },
];

export function CompanyStory() {
  return (
    <section id="story" className="relative bg-[#F8FAFC] overflow-hidden">
      {/* Subtle blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,67,183,1) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#2F43B7] opacity-[0.04] blur-[130px] rounded-full pointer-events-none" />

      {/* ── Section header ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pt-10 lg:pt-14 pb-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#2F43B7]" />
            <p className="text-[#4F6BFF] text-[14px] font-semibold tracking-[0.38em] uppercase">
              Our Story
            </p>
          </div>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-sans font-extrabold text-4xl lg:text-5xl xl:text-6xl text-[#0F172A] tracking-[-0.03em] leading-[1.08] max-w-2xl mb-6"
        >
          From origin to innovation —{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            built to last.
          </span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="origin-left h-px bg-gradient-to-r from-[#2F43B7]/50 via-[#E5E7EB] to-transparent max-w-2xl"
        />
      </div>

      {/* ── Main two-column layout ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-stretch">
          {/* ── LEFT: Single tall image ── */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative rounded-2xl overflow-hidden group"
            style={{ minHeight: "560px" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=85&auto=format&fit=crop"
              alt="JPLC coffee infrastructure"
              fill
              quality={88}
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F172A]/20" />

            {/* Right edge accent */}
            <div className="absolute top-0 bottom-0 right-0 w-[3px] overflow-hidden">
              <div className="w-full h-0 group-hover:h-full transition-[height] duration-500 ease-out bg-gradient-to-b from-transparent via-[#4F6BFF]/80 to-transparent" />
            </div>

            {/* Bottom caption */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-4 h-px bg-[#4F6BFF]" />
                <span className="text-[#6B8BFF] text-[10px] font-mono tracking-[0.3em] uppercase">
                  Since 2019
                </span>
              </div>
              <p className="text-white font-extrabold text-2xl leading-snug tracking-tight max-w-xs">
                Engineering the future of specialty coffee.
              </p>
            </div>

            {/* Top-left corner mark */}
            <svg
              className="absolute top-6 left-6"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M0 18 L0 0 L18 0"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1.4"
              />
            </svg>
          </motion.div>

          {/* ── RIGHT: 3 stacked content cards ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-0"
          >
            {storyBlocks.map((block, index) => (
              <motion.div
                key={block.number}
                variants={fadeUp}
                className={`group relative bg-white border border-[#E5E7EB] px-8 py-8 hover:border-[#2F43B7]/35 hover:shadow-[0_8px_32px_rgba(47,67,183,0.09)] transition-all duration-300 overflow-hidden
                  ${index === 0 ? "rounded-t-2xl" : ""}
                  ${index === storyBlocks.length - 1 ? "rounded-b-2xl" : "border-b-0"}
                `}
              >
                {/* Left accent bar on hover */}
                <div className="absolute left-0 top-0 w-[3px] h-0 group-hover:h-full bg-gradient-to-b from-[#2F43B7] to-[#4F6BFF] transition-all duration-400 rounded-r-sm" />

                {/* Ghost number */}
                <span className="absolute -top-2 right-4 font-black text-[80px] leading-none text-[#2F43B7]/[0.05] select-none pointer-events-none">
                  {block.number}
                </span>

                <div className="relative z-10">
                  {/* Number + tag row */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#4F6BFF] text-[10px] font-mono font-bold tracking-[0.3em]">
                      {block.number}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 border border-[#2F43B7]/30 text-[#2F43B7] bg-[#2F43B7]/5 text-[9px] font-semibold tracking-[0.2em] uppercase rounded-full">
                      {block.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-xl text-[#0F172A] tracking-[-0.02em] leading-snug mb-3 group-hover:text-[#2F43B7] transition-colors duration-300">
                    {block.title}
                  </h3>

                  {/* Body */}
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {block.body}
                  </p>

                  {/* Bottom underline */}
                  <div className="mt-4 h-px w-0 group-hover:w-12 bg-gradient-to-r from-[#2F43B7] to-[#4F6BFF] transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
