"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const solutions = [
  {
    id: "hotels",
    tab: "Hotels",
    title: "Coffee Solutions for Hotels — Full Programme Management",
    body: "Coffee solutions for hotels that cover every outlet under one supply and service agreement — lobby café, all-day dining, in-room systems, executive lounge, banqueting, and staff areas. Each space has different volume, format, and presentation requirements. JPLC structures the programme to address all of them without the operator managing four separate supplier relationships.",
    context:
      "As a dedicated hotel coffee supplier Dubai and UAE-wide, we handle supply continuity, equipment servicing, and staff training across the entire property.",
  },
  {
    id: "restaurants",
    tab: "Restaurants",
    title: "Restaurant Coffee Solutions & F&B Programme Management",
    body: "Restaurant coffee solutions for standalone restaurants and multi-concept F&B groups — consistent espresso across a full dinner service, reliable supply, and equipment that performs without requiring a dedicated barista to manage it through every shift.",
    context:
      "Commercial coffee solutions for restaurants include machine selection matched to the kitchen workflow, staff coffee service solutions training, and a supply programme built around actual consumption rather than standard wholesale minimums.",
  },
  {
    id: "supply",
    tab: "Supply & Distribution",
    title: "Hospitality Coffee Supplier UAE — Supply & Distribution",
    body: "Reliable hospitality coffee supplier UAE infrastructure — scheduled delivery, temperature-controlled logistics, and inventory management built around hospitality consumption cycles. Stock arrives on time, in the right condition, without your procurement team chasing it.",
    context:
      "Commercial coffee solutions UAE supply covers specialty coffee beans, private label branded products, and wholesale formats across all outlet types within a single property or group.",
  },
  {
    id: "equipment",
    tab: "Equipment Services",
    title: "Commercial Coffee Solutions — Equipment & Technical Services",
    body: "Equipment procurement, installation, calibration, and ongoing technical servicing for all commercial coffee equipment across the property. Commercial coffee supplier support that doesn't end at delivery — JPLC engineers maintain the equipment on a scheduled basis and respond to breakdowns directly.",
    context:
      "IoT-enabled diagnostics for properties running connected equipment — real-time performance monitoring across multiple machines, multiple outlets, managed from a single service account.",
  },
  {
    id: "training",
    tab: "Staff Training",
    title: "Coffee Solutions for Hotels and Restaurants UAE — Staff Training",
    body: "Hospitality staff turnover is a reality. A coffee programme that depends on one trained person holding everything together is fragile. JPLC hospitality coffee solutions include structured staff training — espresso fundamentals, milk work, workflow management, and equipment care, delivered on-site using the property's own setup.",
    context:
      "New staff can be brought up to standard without the programme degrading every time the team changes.",
  },
  {
    id: "privatelabel",
    tab: "Private Label",
    title: "Coffee Partner for Hospitality Industry — Brand & Private Label",
    body: "For hospitality groups that want a branded coffee product — a signature house blend, a private label retail range, or a branded in-room capsule programme, JPLC operates as a full coffee partner for hospitality industry brands from concept through to production and supply.",
    context: "Your brand on the product. Our infrastructure behind it.",
  },
];

export function HospitalitySolutions() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-[#F8FAFC] overflow-hidden py-16 lg:py-24">
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(47,67,183,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 xl:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1.5px] bg-[#2F43B7]" />
            <span className="text-[14px] font-semibold tracking-[0.18em] uppercase text-[#2F43B7]">
              Solutions
            </span>
          </div>
          <h2 className="font-sans font-extrabold text-[#0F172A] text-4xl lg:text-5xl leading-[1.08] tracking-[-0.03em]">
            Commercial Coffee Solutions for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Every Hospitality Setting
            </span>
          </h2>
        </motion.div>

        {/* Tab panel layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 lg:gap-10 items-start">
          {/* Tab list */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:sticky lg:top-32"
          >
            {solutions.map((sol, i) => (
              <button
                key={sol.id}
                onClick={() => setActive(i)}
                className="flex-shrink-0 lg:flex-shrink text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap lg:whitespace-normal"
                style={{
                  background:
                    active === i
                      ? "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)"
                      : "white",
                  color: active === i ? "white" : "#475569",
                  border: `1px solid ${active === i ? "transparent" : "rgba(15,23,42,0.08)"}`,
                  boxShadow:
                    active === i
                      ? "0 6px 20px rgba(47,67,183,0.28)"
                      : "0 1px 4px rgba(15,23,42,0.04)",
                }}
              >
                {sol.tab}
              </button>
            ))}
          </motion.div>

          {/* Content panel */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "white",
              border: "1px solid rgba(15,23,42,0.08)",
              boxShadow: "0 4px 24px rgba(15,23,42,0.06)",
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
                {/* Top accent */}
                <div
                  className="w-10 h-[3px] rounded-full mb-7"
                  style={{
                    background: "linear-gradient(90deg, #2F43B7, #4F6BFF)",
                  }}
                />

                <h3 className="font-extrabold text-[#0F172A] text-[20px] lg:text-[22px] leading-[1.3] tracking-tight mb-5">
                  {solutions[active].title}
                </h3>

                <p className="text-[#475569] text-[15px] lg:text-[16px] leading-[1.88] mb-6">
                  {solutions[active].body}
                </p>

                <div
                  className="pt-6 border-t"
                  style={{ borderColor: "rgba(47,67,183,0.1)" }}
                >
                  <p className="text-[#2F43B7] font-semibold text-[14px] lg:text-[15px] leading-[1.78]">
                    {solutions[active].context}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
