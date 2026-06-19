"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Skills Assessment",
    body: "Honest assessment of where the barista or team sits — technical ability, knowledge gaps, equipment familiarity, and the standard the café wants to reach.",
  },
  {
    number: "02",
    title: "Programme Selection & Customisation",
    body: "Right course matched to the assessment, content built around the café's specific equipment, coffee, and workflow — nothing generic.",
  },
  {
    number: "03",
    title: "Delivery — On-Site or Academy",
    body: "Delivered on-site using the café's own bar setup, or at JPLC's fully equipped training facility. On-site is recommended where workflow training is the priority.",
  },
  {
    number: "04",
    title: "Assessment & Barista Certification",
    body: "Formal certification assessed against documented competency standards — practical, sensory, and written components. Results certificated and kept on record for the café.",
  },
  {
    number: "05",
    title: "Follow-Up & Refresher Training",
    body: "Post-programme follow-up visits and refresher sessions available ongoing. Barista training works best as a continuous investment — not a one-time event.",
  },
];

const icons = [
  /* 01 — Search/assess */
  <svg
    key="01"
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
  >
    <circle cx="11" cy="11" r="5" />
    <path d="M16 16l3.5 3.5" />
    <path d="M8 11h6M11 8v6" />
  </svg>,
  /* 02 — Sliders/customise */
  <svg
    key="02"
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
  >
    <path d="M4 6h16M4 12h16M4 18h16" />
    <circle cx="9" cy="6" r="2.2" fill="currentColor" stroke="none" />
    <circle cx="15" cy="12" r="2.2" fill="currentColor" stroke="none" />
    <circle cx="9" cy="18" r="2.2" fill="currentColor" stroke="none" />
  </svg>,
  /* 03 — Building/academy */
  <svg
    key="03"
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21h18M4 21V8l8-5 8 5v13M9 21v-5h6v5" />
  </svg>,
  /* 04 — Award/certification */
  <svg
    key="04"
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="9" r="5" />
    <path d="M8.2 13.9L7 23l5-3 5 3-1.2-9.1" />
  </svg>,
  /* 05 — Refresh/follow-up */
  <svg
    key="05"
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 4v6h-6M1 20v-6h6" />
    <path d="M3.5 9a9 9 0 0 1 14.9-3.4L23 10M1 14l4.6 4.3A9 9 0 0 0 20.5 15" />
  </svg>,
];

function ProcessCard({
  step,
  icon,
  index,
}: {
  step: (typeof steps)[0];
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-white rounded-2xl p-7 flex flex-col h-full transition-all duration-300 hover:-translate-y-2"
      style={{
        border: "1px solid rgba(47,67,183,0.08)",
        boxShadow: "0 2px 16px rgba(47,67,183,0.06)",
      }}
      whileHover={{
        boxShadow: "0 16px 40px rgba(47,67,183,0.13)",
        borderColor: "rgba(47,67,183,0.16)",
      }}
    >
      {/* Blue top accent */}
      <div
        className="absolute top-0 left-6 right-6 h-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(90deg, #2F43B7 0%, #4F6BFF 100%)",
        }}
      />

      {/* Number + icon row */}
      <div className="flex items-center justify-between mb-6">
        {/* Circular number badge */}
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[12px] font-extrabold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
            boxShadow: "0 4px 12px rgba(47,67,183,0.3)",
          }}
        >
          {step.number}
        </div>

        {/* Icon */}
        <div className="text-[#2F43B7] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#4F6BFF]">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-extrabold text-[#0F172A] text-[16px] lg:text-[17px] leading-snug tracking-tight mb-3 transition-colors duration-200 group-hover:text-[#2F43B7]">
        {step.title}
      </h3>

      {/* Accent bar */}
      <div
        className="w-8 h-[2px] rounded-full mb-4 transition-all duration-300 group-hover:w-12"
        style={{
          background: "linear-gradient(90deg, #2F43B7 0%, #4F6BFF 100%)",
        }}
      />

      {/* Body */}
      <p className="text-[#64748B] text-[14px] leading-[1.82] flex-1">
        {step.body}
      </p>
    </motion.div>
  );
}

export function TrainingProcess() {
  return (
    <section className="relative bg-white overflow-hidden py-10 lg:py-14">
      {/* Very subtle warm tint overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 0%, rgba(47,67,183,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-[2px] rounded-full bg-[#2F43B7]" />
            <div className="w-3 h-[2px] rounded-full bg-[#4F6BFF]/40" />
            <div className="w-1.5 h-[2px] rounded-full bg-[#4F6BFF]/15" />
          </div>
          <h2 className="font-sans font-extrabold text-[#0F172A] text-4xl lg:text-5xl leading-[1.08] tracking-[-0.03em]">
            The Way JPLC Delivers{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Barista Training UAE
            </span>
          </h2>
        </motion.div>

        {/* ─── Row 1: 3 cards ─── */}
        <div className="relative mb-5">
          {/* Connecting line behind cards */}
          <div
            className="absolute top-[27px] left-[calc(1.5rem+18px)] right-[calc(1.5rem+18px)] h-px hidden lg:block pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(47,67,183,0.15) 0%, rgba(79,107,255,0.25) 50%, rgba(47,67,183,0.15) 100%)",
            }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.slice(0, 3).map((step, i) => (
              <ProcessCard
                key={step.number}
                step={step}
                icon={icons[i]}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* ─── Row 2: 2 cards centered ─── */}
        <div className="relative lg:max-w-[calc(66.7%-0.83rem)] lg:mx-auto">
          {/* Connecting line behind cards */}
          <div
            className="absolute top-[27px] left-[calc(1.5rem+18px)] right-[calc(1.5rem+18px)] h-px hidden lg:block pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(47,67,183,0.15) 0%, rgba(79,107,255,0.25) 50%, rgba(47,67,183,0.15) 100%)",
            }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {steps.slice(3).map((step, i) => (
              <ProcessCard
                key={step.number}
                step={step}
                icon={icons[3 + i]}
                index={3 + i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
