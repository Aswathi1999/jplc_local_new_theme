"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function EquipmentServiceHero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-40px", "40px"]);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Blueprint grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,67,183,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Soft radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 100% 0%, rgba(47,67,183,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ─── Text zone ─── */}
      <div className="relative z-10 pt-32 lg:pt-44 pb-6 lg:pb-8 px-5 lg:px-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-10"
          >
            <div className="w-10 h-px bg-[#2F43B7]/40" />
            <span className="text-[#4F6BFF] text-[11px] font-bold tracking-[0.5em] uppercase">
              Keep It Running. Keep It Right.
            </span>
            <div className="w-10 h-px bg-[#2F43B7]/40" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease: [0.21, 0.47, 0.32, 0.98] as const,
            }}
            className="font-black text-[#0F172A] text-4xl sm:text-6xl lg:text-[72px] xl:text-[84px] leading-[1.0] tracking-[-0.04em] mb-5"
          >
            Coffee Machine Maintenance &amp;
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 55%, #6366F1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Equipment Service
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#94A3B8] text-sm font-medium tracking-wide mb-6"
          >
            UAE-Wide Technical Support
          </motion.p>

          {/* Sub-description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-[#475569] text-lg lg:text-xl leading-[1.75] max-w-2xl mx-auto mb-12"
          >
            JPLC provides coffee machine maintenance, coffee machine repair, and
            ongoing coffee equipment service for commercial operations across
            the UAE, managed by the same engineering team that installs the
            equipment.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8 lg:mb-10"
          >
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 px-9 py-[15px] text-white text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                boxShadow: "0 8px 32px rgba(79,107,255,0.32)",
              }}
            >
              Request a Service Audit
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-9 py-[15px] text-[#2F43B7] text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EEF2FF]"
              style={{ border: "1.5px solid rgba(47,67,183,0.22)" }}
            >
              Talk to Our Engineering Team
            </a>
          </motion.div>
        </div>
      </div>

      {/* ─── Cinematic image strip ─── */}
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.45 }}
        className="relative overflow-hidden mx-5 lg:mx-10 rounded-2xl lg:rounded-3xl"
        style={{ height: "clamp(280px, 52vh, 600px)" }}
      >
        <motion.div
          className="absolute w-full"
          style={{
            top: "-10%",
            height: "120%",
            y,
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src="/eqipment_service/Coffee-Machine-Support-Services.jpg"
            alt="Coffee equipment service and maintenance — JPLC UAE"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Fade: white top → transparent → dark bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, transparent 18%, transparent 72%, rgba(15,23,42,0.48) 100%)",
          }}
        />
        {/* Tags + location */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {["Maintain", "Repair", "Calibrate", "Monitor"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg text-[10px] font-bold text-white tracking-[0.2em] uppercase"
                style={{
                  background: "rgba(47,67,183,0.80)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="hidden sm:block text-white/55 text-xs font-medium">
            Dubai · UAE
          </span>
        </div>
      </motion.div>

      {/* Bottom spacing */}
      <div className="h-6 lg:h-10" />
    </section>
  );
}
