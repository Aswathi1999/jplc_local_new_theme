"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const stats = [
  { value: "5", label: "Programmes" },
  { value: "All", label: "Skill Levels" },
  { value: "Dubai", label: "Location" },
  { value: "In-Person", label: "Format" },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: "easeOut" } },
};

export function TrainingHero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background image */}
      <Image
        src="/coffee_training.jpg"
        alt="JPLC Coffee Academy"
        fill
        quality={90}
        priority
        className="object-cover object-center"
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/98 via-[#0F172A]/93 to-[#0F172A]/98" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/85 via-[#0F172A]/25 to-[#0F172A]/60" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#2F43B7 1px, transparent 1px), linear-gradient(90deg, #2F43B7 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Blue glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-[#2F43B7]/8 rounded-full blur-3xl pointer-events-none" />

      {/* Corner accent lines */}
      <div className="absolute top-0 left-0 w-20 h-[2px] bg-[#2F43B7]" />
      <div className="absolute top-0 left-0 w-[2px] h-20 bg-[#2F43B7]" />
      <div className="absolute bottom-0 right-0 w-20 h-[2px] bg-[#2F43B7]" />
      <div className="absolute bottom-0 right-0 w-[2px] h-20 bg-[#2F43B7]" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 lg:px-8 py-32 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow badge */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#2F43B7]" />
            <span className="inline-flex items-center gap-2.5 text-[#6B8BFF] text-xs font-mono tracking-[0.3em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F43B7] animate-pulse" />
              JPLC Coffee Academy
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-sans font-bold text-6xl lg:text-7xl xl:text-8xl text-[#F1F5F9] leading-[0.92] mb-8"
          >
            The JPLC<br />
            <span className="text-[#6B8BFF]">Coffee</span> Academy
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-[#94A3B8] text-lg leading-relaxed max-w-xl mb-12"
          >
            Professional specialty coffee education designed for baristas,
            roasters, hospitality teams, and coffee professionals seeking
            advanced operational and technical expertise.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="#training"
              className="inline-flex items-center gap-2.5 bg-[#2F43B7] text-white text-xs font-medium tracking-widest uppercase px-7 py-4 rounded-sm hover:bg-[#4056D6] transition-colors duration-300"
            >
              <span>Explore Programs</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="mailto:hello@jplc.com"
              className="inline-flex items-center gap-2.5 border border-[#F1F5F9]/25 text-[#F1F5F9] text-xs font-medium tracking-widest uppercase px-7 py-4 rounded-sm hover:border-[#2F43B7] hover:text-[#6B8BFF] transition-colors duration-300"
            >
              Contact Academy
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-[#F1F5F9]/8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#F1F5F9]/8">
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 py-5">
                <p className="font-sans font-bold text-2xl text-[#6B8BFF] mb-1">
                  {stat.value}
                </p>
                <p className="text-[#64748B] text-[10px] tracking-widest uppercase font-mono">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
