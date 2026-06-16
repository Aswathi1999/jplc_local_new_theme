"use client";

import { motion, type Variants } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Custom Coffee Blends & Roast Profile Development",
    body: "Our R&D team works directly with brand partners to develop custom coffee blends, profiled around the intended brewing method, target customer, and flavour brief. Roast curves, origin combinations, extraction parameters — all developed from scratch to match your specification.",
    tag: "R&D",
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
    id: "02",
    title: "White Label Coffee Production & OEM Coffee Manufacturing",
    body: "Full-scale OEM coffee manufacturing for brands that need consistent, repeatable output at volume. Production runs are managed with documented batch tolerances, quality checks at every stage, and full traceability from green bean to finished product.",
    tag: "Production",
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
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Coffee Packaging & Retail Product Development",
    body: "JPLC handles coffee packaging solutions UAE end-to-end — barrier packaging, degassing valve integration, format selection, shelf-life validation, and print-ready artwork coordination. The result is a retail-ready product that protects quality, meets regulatory requirements, and looks like it belongs on the shelf.",
    tag: "Packaging",
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
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Capsule & RTD Coffee Production",
    body: "Nespresso-compatible and proprietary capsule formats, cold brew development, and ready-to-drink coffee production — from formulation through to co-pack. A growing category where the technical barriers are high enough that most brands need a manufacturing partner with real capability behind them.",
    tag: "Capsule & RTD",
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
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Coffee Branding & Brand Development UAE",
    body: "For brands at an earlier stage, JPLC offers coffee brand development UAE support — brand positioning, naming, visual identity direction, and go-to-market strategy alongside the production programme. Coffee branding and manufacturing under the same roof means the product and brand develop in parallel.",
    tag: "Brand Dev",
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
  {
    id: "06",
    title: "Coffee Supplier UAE — Ongoing Supply & Account Management",
    body: "A private label coffee launch isn't a one-time project. JPLC operates as an ongoing coffee supplier UAE partner, managing replenishment, seasonal blend updates, packaging refreshes, and supply chain continuity as the brand scales.",
    tag: "Supply",
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
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
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
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function PrivateLabelServices() {
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
            <p className="text-[14px] font-semibold tracking-[0.18em] uppercase text-[#2F43B7]">
              What We Offer
            </p>
          </div>
          <h2 className="font-sans font-extrabold text-4xl lg:text-5xl text-[#0F172A] leading-[1.08] tracking-[-0.03em] max-w-3xl">
            Private Label Coffee &amp;{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 24px rgba(47,67,183,0.22))",
              }}
            >
              OEM Manufacturing Services
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.id}
              variants={cardVariant}
              className="group relative bg-white border border-[#E5E7EB] rounded-sm p-8 hover:border-[#2F43B7]/35 hover:shadow-[0_8px_40px_rgba(47,67,183,0.10)] transition-all duration-300 overflow-hidden"
            >
              {/* Top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2F43B7] to-[#4F6BFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Ghost number */}
              <span className="absolute -top-2 right-4 font-black text-[72px] leading-none text-[#2F43B7]/[0.045] select-none pointer-events-none">
                {svc.id}
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 flex items-center justify-center rounded-sm bg-[#2F43B7]/8 text-[#2F43B7] group-hover:bg-[#2F43B7] group-hover:text-white transition-all duration-300">
                    {svc.icon}
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 border border-[#2F43B7]/25 text-[#2F43B7] bg-[#2F43B7]/5 text-[9px] font-semibold tracking-[0.2em] uppercase rounded-full">
                    {svc.tag}
                  </span>
                </div>

                <h3 className="font-extrabold text-[17px] text-[#0F172A] tracking-[-0.02em] leading-snug mb-3 group-hover:text-[#2F43B7] transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {svc.body}
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
