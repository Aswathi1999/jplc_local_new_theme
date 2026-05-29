"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stats = [
  { v: "12+", l: "Years Expertise" },
  { v: "500+", l: "MT Capacity" },
  { v: "30+", l: "Global Markets" },
  { v: "8", l: "Business Verticals" },
];

export function MissionVision() {
  return (
    <section className="relative bg-[#F8FAFC] overflow-hidden">
      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,67,183,1) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow — top right */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#2F43B7] opacity-[0.05] blur-[120px] pointer-events-none" />

      {/* Ambient glow — bottom left */}
      <div className="absolute bottom-0 -left-20 w-[400px] h-[300px] rounded-full bg-[#4056D6] opacity-[0.04] blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="w-8 h-px bg-[#2F43B7]" />
          <p className="text-[#4F6BFF] text-[14px] font-semibold tracking-[0.38em] uppercase">
            Mission &amp; Vision
          </p>
          <div className="w-8 h-px bg-[#2F43B7]" />
        </motion.div>

        {/* Two-panel grid */}
        <div className="grid lg:grid-cols-2 gap-4">
          {/* LEFT — Mission */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative p-10 lg:p-16 overflow-hidden rounded-sm bg-white border border-[#E5E7EB] hover:border-[#2F43B7]/40 hover:shadow-[0_8px_32px_rgba(47,67,183,0.10)] transition duration-200"
          >
            {/* Shimmer sweep */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-[#2F43B7]/5 to-transparent pointer-events-none" />

            {/* Decorative concentric circles — top right */}
            <div className="absolute top-6 right-6 w-32 h-32 rounded-full border border-[#2F43B7]/10 pointer-events-none" />
            <div className="absolute top-10 right-10 w-24 h-24 rounded-full border border-[#2F43B7]/15 pointer-events-none" />
            <div className="absolute top-14 right-14 w-16 h-16 rounded-full border border-[#4F6BFF]/20 pointer-events-none" />

            {/* Decorative ghost letter */}
            <span
              className="absolute -bottom-8 -left-4 font-sans font-bold text-[180px] leading-none text-[#2F43B7]/[0.05] select-none pointer-events-none"
              aria-hidden="true"
            >
              M
            </span>

            {/* Label */}
            <p className="text-[#2F43B7] font-mono text-xs uppercase tracking-[0.35em] mb-8">
              Mission
            </p>

            {/* Quote */}
            <blockquote className="text-[#0F172A] font-extrabold text-3xl lg:text-4xl leading-snug">
              Deliver scalable specialty coffee ecosystems through innovation,
              engineering, and operational excellence.
            </blockquote>

            {/* Bottom accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2F43B7] via-[#4F6BFF] to-transparent" />
          </motion.div>

          {/* RIGHT — Vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className="group relative p-10 lg:p-16 overflow-hidden rounded-sm bg-white border border-[#E5E7EB] hover:border-[#2F43B7]/40 hover:shadow-[0_8px_32px_rgba(47,67,183,0.10)] transition duration-200"
          >
            {/* Shimmer sweep */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-[#2F43B7]/5 to-transparent pointer-events-none" />

            {/* Decorative concentric circles — top right */}
            <div className="absolute top-6 right-6 w-32 h-32 rounded-full border border-[#2F43B7]/10 pointer-events-none" />
            <div className="absolute top-10 right-10 w-24 h-24 rounded-full border border-[#2F43B7]/15 pointer-events-none" />
            <div className="absolute top-14 right-14 w-16 h-16 rounded-full border border-[#4F6BFF]/20 pointer-events-none" />

            {/* Decorative ghost letter */}
            <span
              className="absolute -bottom-8 -right-4 font-sans font-bold text-[180px] leading-none text-[#2F43B7]/[0.05] select-none pointer-events-none"
              aria-hidden="true"
            >
              V
            </span>

            {/* Label */}
            <p className="text-[#2F43B7] font-mono text-xs uppercase tracking-[0.35em] mb-8">
              Vision
            </p>

            {/* Quote */}
            <blockquote className="text-[#0F172A] font-extrabold text-3xl lg:text-4xl leading-snug">
              Build a globally recognized specialty coffee infrastructure
              company powered by research, technology, and enterprise coffee
              solutions.
            </blockquote>

            {/* Bottom accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2F43B7] via-[#4F6BFF] to-transparent" />
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {stats.map((s) => (
            <div
              key={s.l}
              className="bg-white border border-[#E5E7EB] rounded-sm px-6 py-5 text-center hover:border-[#2F43B7]/35 hover:-translate-y-0.5 transition duration-200 shadow-sm"
            >
              <p className="font-bold text-3xl text-[#2F43B7] mb-1 tracking-tight">
                {s.v}
              </p>
              <p className="text-[#64748B] text-[10px] tracking-widest uppercase">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
