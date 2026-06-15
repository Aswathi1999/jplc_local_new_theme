"use client";

import { motion, type Variants } from "framer-motion";

const options = [
  {
    id: "01",
    title: "Single-Origin Specialty Coffee Beans",
    body: "Traceable lots from established and emerging origins — Ethiopia, Colombia, Brazil, Guatemala, and beyond. Each lot is cupped, graded, and selected for flavour clarity, consistency, and suitability for the end application, whether that's espresso, filter, or cold brew.",
    tag: "Single Origin",
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
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
        />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Coffee Blends & House Profiles",
    body: "Custom coffee blends developed around your extraction method, equipment setup, and flavour brief. Milk-forward espresso blends, black coffee profiles, seasonal rotations — built to your specification and replicated consistently across every batch.",
    tag: "Custom Blends",
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
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Wholesale Coffee Beans for Commercial Operations",
    body: "Structured wholesale supply for high-volume accounts — coffee beans for restaurants UAE, hotel groups, corporate campuses, and multi-site operators. Bulk formats, scheduled delivery, and inventory management built around your consumption cycle.",
    tag: "Wholesale",
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
          strokeWidth={1.5}
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Private Label Coffee Beans & Branded Ranges",
    body: "Your brand, our production. From roast profile development and blend creation through to retail packaging and private label fulfilment, JPLC produces coffee beans under your brand with full manufacturing oversight.",
    tag: "Private Label",
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
          strokeWidth={1.5}
          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
        />
      </svg>
    ),
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function CoffeeBeansSupply() {
  return (
    <section className="relative bg-[#F8FAFC] overflow-hidden py-16 lg:py-20">
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#2F43B7] opacity-[0.04] blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 lg:mb-14"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#2F43B7]" />
            <p className="text-[#4F6BFF] text-[14px] font-semibold tracking-[0.38em] uppercase">
              Supply Options
            </p>
          </div>
          <h2 className="font-sans font-extrabold text-4xl lg:text-5xl text-[#0F172A] leading-[1.08] tracking-[-0.03em] max-w-2xl">
            Specialty Coffee Beans &amp;{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 24px rgba(47,67,183,0.22))",
              }}
            >
              Supply Options
            </span>
          </h2>
          <div className="mt-6 h-px bg-gradient-to-r from-[#2F43B7]/40 via-[#E5E7EB] to-transparent max-w-2xl" />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {options.map((opt) => (
            <motion.div
              key={opt.id}
              variants={cardVariant}
              className="group relative bg-white border border-[#E5E7EB] rounded-sm p-8 hover:border-[#2F43B7]/35 hover:shadow-[0_8px_40px_rgba(47,67,183,0.10)] transition-all duration-300 overflow-hidden"
            >
              {/* Top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2F43B7] to-[#4F6BFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Ghost number */}
              <span className="absolute -top-2 right-4 font-black text-[72px] leading-none text-[#2F43B7]/[0.045] select-none pointer-events-none">
                {opt.id}
              </span>

              <div className="relative z-10">
                {/* Icon + tag row */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 flex items-center justify-center rounded-sm bg-[#2F43B7]/8 text-[#2F43B7] group-hover:bg-[#2F43B7] group-hover:text-white transition-all duration-300">
                    {opt.icon}
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 border border-[#2F43B7]/25 text-[#2F43B7] bg-[#2F43B7]/5 text-[9px] font-semibold tracking-[0.2em] uppercase rounded-full">
                    {opt.tag}
                  </span>
                </div>

                <h3 className="font-extrabold text-xl text-[#0F172A] tracking-[-0.02em] leading-snug mb-3 group-hover:text-[#2F43B7] transition-colors duration-300">
                  {opt.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {opt.body}
                </p>

                <div className="mt-5 h-px w-0 group-hover:w-10 bg-gradient-to-r from-[#2F43B7] to-[#4F6BFF] transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
