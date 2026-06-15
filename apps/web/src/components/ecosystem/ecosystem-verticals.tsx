"use client";

import { motion } from "framer-motion";

const verticals = [
  {
    id: "01",
    title: "Green Coffee Sourcing & Procurement",
    body: "Direct-trade coffee sourcing, Q-graded and fully traceable from origin to facility.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
        />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Coffee Roasting & Production",
    body: "Roast profile engineering, batch consistency controls, and coffee manufacturing at scale, including private label coffee manufacturing UAE-wide.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M17.657 18.657A8 8 0 016.343 7.343M12 4v1m6 2l-.707.707M20 12h-1M17 17l-.707-.707M12 19v1M7 17l.707-.707M5 12H4M7 7l.707.707"
        />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Research & Development",
    body: "Applied coffee innovation — extraction science, brew optimisation, flavour mapping, and new beverage formulation developed in-house.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Coffee Engineering & Technical Services",
    body: "Full-service coffee engineering across hardware, thermal systems, grinder calibration, IoT diagnostics, and water filtration. A genuine coffee infrastructure capability, not just machine supply.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Coffee Distribution & Logistics",
    body: "Structured coffee distribution with temperature-controlled delivery, inventory forecasting, and supply continuity built for HoReCa and enterprise accounts.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </svg>
    ),
  },
  {
    id: "06",
    title: "Hospitality & Retail Operations",
    body: "End-to-end deployment of coffee solutions UAE, from hotel programmes to managed office beverage systems and event activations.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    id: "07",
    title: "Brand Development & Coffee Manufacturing",
    body: "Private label development, capsule and RTD production, packaging, and contract coffee manufacturing for brands at every stage of growth.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    id: "08",
    title: "Training & Education",
    body: "Barista certification, brew science, sensory training, and operational coaching — the human layer of a functioning coffee ecosystem.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    ),
  },
];

export function EcosystemVerticals() {
  return (
    <section className="relative bg-[#F8FAFC] overflow-hidden py-16 lg:py-24">
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,67,183,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(47,67,183,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mb-14 lg:mb-18"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-[2px] rounded-full bg-[#2F43B7]" />
            <div className="w-3 h-[2px] rounded-full bg-[#4F6BFF]/40" />
            <div className="w-1.5 h-[2px] rounded-full bg-[#4F6BFF]/15" />
          </div>
          <h2 className="font-black text-[#0F172A] text-4xl lg:text-5xl xl:text-[52px] leading-[1.03] tracking-[-0.03em] mb-4">
            What a Complete{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Coffee Infrastructure Platform UAE
            </span>{" "}
            Actually Looks Like
          </h2>
          <p className="text-[#64748B] text-base lg:text-[17px] leading-relaxed max-w-2xl">
            The JPLC coffee ecosystem is structured across eight integrated
            verticals. Each one is functional independently — but the real value
            is in how they connect.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {verticals.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.65,
                delay: (i % 4) * 0.08,
                ease: "easeOut",
              }}
              className="group relative bg-white rounded-2xl p-7 flex flex-col h-full transition-all duration-300 hover:-translate-y-1"
              style={{
                border: "1px solid rgba(47,67,183,0.08)",
                boxShadow: "0 2px 16px rgba(47,67,183,0.06)",
              }}
            >
              {/* Blue top accent on hover */}
              <div
                className="absolute top-0 left-6 right-6 h-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, #2F43B7 0%, #4F6BFF 100%)",
                }}
              />

              {/* Icon badge */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 text-white transition-transform duration-300 group-hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                  boxShadow: "0 4px 14px rgba(47,67,183,0.28)",
                }}
              >
                {v.icon}
              </div>

              {/* Number */}
              <span className="font-mono text-[10px] font-bold text-[#CBD5E1] tracking-[0.25em] mb-3">
                {v.id}
              </span>

              {/* Title */}
              <h3 className="font-extrabold text-[#0F172A] text-[15px] lg:text-[16px] leading-snug tracking-tight mb-3 transition-colors duration-200 group-hover:text-[#2F43B7]">
                {v.title}
              </h3>

              {/* Accent bar */}
              <div
                className="w-8 h-[2px] rounded-full mb-4 transition-all duration-300 group-hover:w-12"
                style={{
                  background:
                    "linear-gradient(90deg, #2F43B7 0%, #4F6BFF 100%)",
                }}
              />

              {/* Body */}
              <p className="text-[#64748B] text-[13.5px] leading-[1.8] flex-1">
                {v.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
