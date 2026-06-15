"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const verticals = [
  {
    id: "sourcing",
    num: "01",
    tab: "Sustainable Sourcing",
    title: "Sustainable Coffee Sourcing & Direct Trade",
    body: "JPLC sources through direct-trade relationships with farms and cooperatives across producing regions. Direct trade means the price paid at origin reflects the quality of the product and the cost of producing it responsibly — not a commodity market rate that pushes producers toward cost-cutting at the expense of quality and environmental practice.",
    context:
      "Sustainable coffee sourcing UAE operations depend on supply chains built on these kinds of relationships, stable, traceable, and fair at every level.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "traceability",
    num: "02",
    tab: "Coffee Traceability",
    title: "Coffee Traceability & Supply Chain Transparency",
    body: "Every lot of JPLC sources is traceable from farm to roastery — origin, producer, processing method, harvest season, and Q-grade. Coffee traceability isn't just about provenance marketing. It's about accountability, knowing exactly what entered the supply chain and where it came from.",
    context:
      "A traceable coffee supply chain allows JPLC to identify and address quality or ethical concerns at the source, rather than discovering problems further down the line when they're harder to resolve.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: "partnerships",
    num: "03",
    tab: "Producer Partnerships",
    title: "Ethical Coffee Sourcing & Producer Partnerships",
    body: "Ethical coffee sourcing means more than paying above floor price. It means working with producers who invest in their land, their workers, and their community, and supporting those practices through consistent purchasing, advance commitments, and long-term partnership structures.",
    context:
      "JPLC responsible sourcing UAE relationships are built around multi-season commitments where possible, giving producers the stability to plan, invest, and improve rather than operating season to season with no certainty of who their buyer will be.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    id: "operations",
    num: "04",
    tab: "Sustainable Operations",
    title: "Sustainable Coffee Company Operations — Roastery & Production",
    body: "Coffee sustainability extends beyond the farm. JPLC's roastery and production facility operate with energy efficiency, waste reduction, and resource management built into daily operations, roasting efficiency protocols, chaff and by-product management, and water use monitoring across the production process.",
    context:
      "As a sustainable coffee company UAE, the goal is to reduce the environmental footprint of every stage of production.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    id: "packaging",
    num: "05",
    tab: "Eco Packaging",
    title: "Eco Friendly Coffee Packaging & Sustainable Packaging Solutions",
    body: "Packaging is one of the most visible environmental decisions a coffee brand makes. JPLC uses and recommends eco-friendly coffee packaging — compostable and recyclable barrier materials, reduced plastic content, and sustainable packaging formats that maintain product quality without unnecessary environmental cost.",
    context:
      "For private label and OEM partners, sustainable coffee packaging UAE options are available across all format types, retail bags, capsules, bulk formats, and foodservice packaging.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
];

export function SustainabilityVerticals() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(47,67,183,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, rgba(47,67,183,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 xl:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mb-8 lg:mb-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1.5px] bg-[#2F43B7]" />
            <span className="text-[14px] font-semibold tracking-[0.18em] uppercase text-[#2F43B7]">
              Sustainability Infrastructure Map
            </span>
          </div>
          <h2 className="font-black text-[#0F172A] text-[38px] lg:text-[50px] xl:text-[58px] leading-[1.0] tracking-[-0.035em]">
            Coffee Sustainability Across{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Every Vertical
            </span>
          </h2>
        </motion.div>

        {/* Tab panel */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-5 lg:gap-8 items-start">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:sticky lg:top-32"
          >
            {verticals.map((v, i) => (
              <button
                key={v.id}
                onClick={() => setActive(i)}
                className="flex-shrink-0 lg:flex-shrink flex items-center gap-3 text-left px-4 py-3.5 rounded-xl transition-all duration-250 group"
                style={{
                  background:
                    active === i
                      ? "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)"
                      : "white",
                  color: active === i ? "white" : "#475569",
                  border: `1px solid ${active === i ? "transparent" : "rgba(47,67,183,0.1)"}`,
                  boxShadow:
                    active === i
                      ? "0 6px 20px rgba(47,67,183,0.28)"
                      : "0 1px 4px rgba(15,23,42,0.04)",
                }}
              >
                <span
                  className="flex-shrink-0 transition-colors duration-200"
                  style={{
                    color: active === i ? "rgba(255,255,255,0.8)" : "#4F6BFF",
                  }}
                >
                  {v.icon}
                </span>
                <span className="text-sm font-semibold hidden lg:block">
                  {v.tab}
                </span>
                <span className="text-sm font-semibold lg:hidden whitespace-nowrap">
                  {v.tab}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Content panel */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "white",
              border: "1px solid rgba(47,67,183,0.1)",
              boxShadow: "0 4px 24px rgba(47,67,183,0.07)",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="p-7 lg:p-10"
              >
                <div className="flex items-center gap-4 mb-7">
                  <span
                    className="text-[42px] font-black leading-none"
                    style={{ color: "rgba(47,67,183,0.1)" }}
                  >
                    {verticals[active].num}
                  </span>
                  <div
                    className="flex-1 h-[2px] rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #2F43B7, #4F6BFF)",
                    }}
                  />
                </div>

                <h3 className="font-extrabold text-[#0F172A] text-[20px] lg:text-[22px] leading-[1.3] tracking-tight mb-5">
                  {verticals[active].title}
                </h3>

                <p className="text-[#475569] text-[15px] lg:text-[16px] leading-[1.88] mb-6">
                  {verticals[active].body}
                </p>

                <div
                  className="pt-6 border-t"
                  style={{ borderColor: "rgba(47,67,183,0.1)" }}
                >
                  <p className="text-[#2F43B7] font-semibold text-[14px] lg:text-[15px] leading-[1.78]">
                    {verticals[active].context}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Responsible Sourcing block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-0 rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 8px 40px rgba(47,67,183,0.1)" }}
        >
          {/* Left: image with blue overlay */}
          <div className="relative min-h-[240px] lg:min-h-0 overflow-hidden">
            <motion.img
              src="/sustainablity/sustainbale (1).jpg"
              alt="Responsible Sourcing"
              className="w-full h-full object-cover"
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />
          </div>

          {/* Right: content */}
          <div
            className="p-8 lg:p-10 xl:p-12 flex flex-col justify-center"
            style={{ background: "#EEF2FF" }}
          >
            <h3 className="font-black text-[#0F172A] text-[22px] lg:text-[26px] leading-[1.2] tracking-tight mb-5">
              Responsible Sourcing & Community Impact
            </h3>

            <p className="text-[#475569] text-[14px] lg:text-[15px] leading-[1.85] mb-5">
              Beyond the direct supply chain, JPLC supports community
              development through purchasing decisions, producer education
              programmes, and partnerships with organisations working on farmer
              welfare, gender equity in coffee, and agricultural sustainability
              in producing regions.
            </p>

            <p className="text-[#2F43B7] font-semibold text-[13px] leading-[1.75]">
              Responsible coffee sourcing UAE means the supply chain benefits
              extend to the people at the beginning of it — not just the
              businesses at the end.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
