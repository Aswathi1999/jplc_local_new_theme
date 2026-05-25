"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stats = [
  { label: "Origins", value: "6+" },
  { label: "MT Capacity", value: "500+" },
  { label: "Markets", value: "30+" },
  { label: "Certified", value: "ISO" },
];

export function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F43B7]/50 to-transparent z-20" />

      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=85&auto=format&fit=crop"
        alt="JPLC specialty coffee infrastructure"
        fill
        priority
        quality={85}
        className="object-cover object-center"
      />

      {/* Primary gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/98 via-[#0F172A]/90 to-[#0F172A]/75" />

      {/* Side gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/80 to-transparent" />

      {/* Blueprint grid overlay with radial mask */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,67,183,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Blue atmospheric glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#2F43B7] opacity-[0.15] blur-[120px] pointer-events-none" />

      {/* Top-left corner bracket */}
      <div className="absolute top-8 left-8 z-20 pointer-events-none">
        <div className="relative w-8 h-8">
          <div className="absolute top-0 left-0 w-8 h-px bg-[#2F43B7]/50" />
          <div className="absolute top-0 left-0 w-px h-8 bg-[#2F43B7]/50" />
        </div>
      </div>

      {/* Bottom-right corner bracket */}
      <div className="absolute bottom-8 right-8 z-20 pointer-events-none">
        <div className="relative w-8 h-8">
          <div className="absolute bottom-0 right-0 w-8 h-px bg-[#2F43B7]/50" />
          <div className="absolute bottom-0 right-0 w-px h-8 bg-[#2F43B7]/50" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 py-32 lg:py-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#2F43B7]/10 border border-[#2F43B7]/25 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2F43B7] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2F43B7]" />
              </span>
              <span className="text-[#6B8BFF] text-xs font-medium tracking-[0.45em] uppercase">
                Specialty Coffee Infrastructure
              </span>
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeUp}
            className="font-sans font-extrabold text-5xl lg:text-7xl text-[#F1F5F9] leading-[0.95] tracking-tight mb-8"
          >
            A Modern Specialty Coffee
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #6B8BFF 0%, #93C5FD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 24px rgba(107,139,255,0.35))",
              }}
            >
              Infrastructure Company
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-[#94A3B8] text-lg leading-relaxed max-w-2xl mb-12"
          >
            JPLC operates across sourcing, roasting, engineering, research,
            manufacturing, hospitality infrastructure, and coffee innovation for
            modern global markets.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#ecosystem"
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#2F43B7] text-white text-sm font-medium tracking-wide rounded-sm hover:bg-[#4056D6] transition-colors overflow-hidden"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <span className="relative">Explore Our Ecosystem</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="relative"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#partnership"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#F1F5F9]/30 text-[#F1F5F9] text-sm font-medium tracking-wide rounded-sm hover:border-[#2F43B7] hover:text-[#6B8BFF] transition-colors backdrop-blur-sm"
            >
              Partner With Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 bg-[#0F172A]/60 backdrop-blur-sm border border-[#2F43B7]/20 rounded-sm px-6 py-3"
              >
                <p className="text-[#64748B] text-[10px] font-medium tracking-[0.2em] uppercase mb-1">
                  {stat.label}
                </p>
                <p className="font-sans font-bold text-2xl text-[#6B8BFF] leading-none">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20"
      >
        <span className="text-[#F1F5F9]/30 text-[9px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-1.5 h-1.5 rounded-full bg-[#2F43B7]/60"
        />
      </motion.div>
    </section>
  );
}
