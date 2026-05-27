"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatingLabels = [
  { label: "Global Operations", top: "18%", right: "8%", delay: 0.7 },
  { label: "DMCC Coffee Centre", top: "32%", right: "13%", delay: 0.9 },
  { label: "Green Coffee Sourcing", top: "46%", right: "7%", delay: 1.1 },
  { label: "Hospitality & Engineering", top: "60%", right: "11%", delay: 1.3 },
  { label: "Barista Training Academy", top: "74%", right: "6%", delay: 1.5 },
];

export function ContactHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/heo_image.jpg"
        alt="JPLC specialty coffee enterprise"
        fill
        priority
        quality={85}
        className="object-cover object-center"
      />

      {/* Primary dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/97 via-[#0F172A]/85 to-[#0F172A]/96" />

      {/* Side gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/85 via-[#0F172A]/40 to-transparent" />

      {/* Blueprint grid with radial mask */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,67,183,1) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 85% 85% at 30% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 85% at 30% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Blue ambient glow — left */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[640px] h-[420px] rounded-full bg-[#2F43B7] opacity-[0.12] blur-[120px] pointer-events-none" />

      {/* Blue ambient glow — upper right */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[300px] rounded-full bg-[#4056D6] opacity-[0.08] blur-[100px] pointer-events-none" />

      {/* Corner bracket — top left */}
      <div className="absolute top-8 left-8 z-20 pointer-events-none">
        <div className="w-8 h-px bg-[#2F43B7]/60" />
        <div className="w-px h-8 bg-[#2F43B7]/60" />
      </div>

      {/* Corner bracket — bottom right */}
      <div className="absolute bottom-8 right-8 z-20 pointer-events-none flex flex-col items-end">
        <div className="w-px h-8 bg-[#2F43B7]/60" />
        <div className="w-8 h-px bg-[#2F43B7]/60" />
      </div>

      {/* Floating labels — desktop only */}
      <div className="hidden lg:block absolute inset-0 z-20 pointer-events-none">
        {floatingLabels.map((item) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: item.delay, ease: "easeOut" }}
            className="absolute"
            style={{ top: item.top, right: item.right }}
          >
            <div
              className="flex items-center gap-2.5 px-4 py-2 rounded-sm border border-[#2F43B7]/35"
              style={{
                background: "rgba(15,23,42,0.72)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="w-1 h-1 rounded-full bg-[#4F6BFF] animate-pulse" />
              <span className="text-white/85 text-[10px] font-mono tracking-[0.3em] uppercase whitespace-nowrap">
                {item.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-32 lg:py-40 w-full relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-[#2F43B7]" />
            <span className="text-white/80 text-xs font-mono tracking-[0.35em] uppercase">
              Enterprise Enquiries &mdash; DMCC, Dubai
            </span>
          </motion.div>

          {/* Response badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-sm border border-[#2F43B7]/30"
              style={{
                background: "rgba(15,23,42,0.60)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4F6BFF] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4F6BFF]" />
              </span>
              <span className="text-white/80 text-[10px] font-mono tracking-[0.3em] uppercase">
                Responding within 24 business hours
              </span>
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-sans font-extrabold text-5xl lg:text-6xl xl:text-7xl text-[#F1F5F9] leading-[1.0] tracking-tight mb-8"
          >
            Talk to Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6B8BFF 0%, #93C5FD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 28px rgba(107,139,255,0.40))",
              }}
            >
              Global Coffee
            </span>
            <br />
            Infrastructure Experts
          </motion.h1>

          {/* Triple divider */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-px bg-[#6B8BFF]/40" />
            <div className="w-px h-3 bg-[#6B8BFF]/30" />
            <div className="w-4 h-px bg-[#6B8BFF]/15" />
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-white/75 text-lg leading-relaxed max-w-xl mb-10"
          >
            From green coffee sourcing and machine engineering to barista
            training and hospitality supply &mdash; the JPLC team is ready to
            support your business at any scale, across any market.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <a
              href="#contact-form"
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#2F43B7] text-white text-xs font-medium tracking-widest uppercase rounded-sm hover:bg-[#4056D6] transition-colors overflow-hidden shadow-[0_8px_32px_rgba(47,67,183,0.35)]"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
              <span className="relative">Start a Partnership</span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="relative"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="mailto:hello@jplc.com"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#F1F5F9]/20 text-[#F1F5F9] text-xs font-medium tracking-widest uppercase rounded-sm hover:border-[#2F43B7] hover:text-[#6B8BFF] transition-all duration-200 backdrop-blur-sm"
            >
              Schedule a Consultation
            </a>
          </motion.div>

          {/* Inquiry type chips */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {[
              "Partnership",
              "Training & Education",
              "Engineering",
              "Hospitality Supply",
              "Sourcing",
            ].map((tag) => (
              <span
                key={tag}
                className="text-white/65 text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-sm border border-white/20 hover:border-white/45 hover:text-white transition-colors duration-200 cursor-default"
                style={{
                  background: "rgba(15,23,42,0.40)",
                  backdropFilter: "blur(6px)",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20"
      >
        <span className="text-white/35 text-[9px] tracking-[0.3em] uppercase">
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
