"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Roast profiles informed by extraction data",
    body: "Our engineering and roasting teams work from the same data set. Roast curves are adjusted based on real extraction performance — not guesswork from separate departments.",
  },
  {
    title: "Distribution aligned with production timelines",
    body: "Supply schedules are built around actual roasting and manufacturing output. Stock gaps and last-minute shortages are a symptom of disconnected operations — we eliminate that at the source.",
  },
  {
    title: "Training built around the equipment on the floor",
    body: "Barista and operational training is developed with direct input from our engineering team. Staff learn on the same systems they'll actually use — not generic curriculum.",
  },
  {
    title: "Quality control across every handoff",
    body: "In a fragmented coffee supply chain, quality drops at every vendor boundary. Within the JPLC coffee infrastructure platform UAE, there are no boundaries — one team owns the outcome end to end.",
  },
  {
    title: "Faster response, fuller picture",
    body: "A coffee sourcing, roasting, and distribution UAE operation under one roof means faster fault resolution, tighter SLAs, and a partner who understands the full context of your programme.",
  },
];

export function EcosystemIntegration() {
  return (
    <section className="relative bg-white overflow-hidden py-16 lg:py-24">
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(47,67,183,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          {/* Left: header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-2 mb-7">
              <div className="w-10 h-[2px] rounded-full bg-[#2F43B7]" />
              <div className="w-3 h-[2px] rounded-full bg-[#4F6BFF]/40" />
              <div className="w-1.5 h-[2px] rounded-full bg-[#4F6BFF]/15" />
            </div>

            <h2 className="font-black text-[#0F172A] text-3xl lg:text-[40px] xl:text-[44px] leading-[1.08] tracking-[-0.03em] mb-6">
              How Our Coffee{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ecosystem Works
              </span>
            </h2>

            {/* Coffee ecosystem image */}
            <div
              className="relative rounded-2xl overflow-hidden mb-8"
              style={{ boxShadow: "0 8px 32px rgba(15,23,42,0.12)" }}
            >
              <img
                src="/ecosystem/coffee_ecosystem.jpg"
                alt="How the JPLC coffee ecosystem works"
                className="w-full object-cover"
                style={{ maxHeight: "420px" }}
              />
            </div>

            <p className="text-[#475569] text-base lg:text-[17px] leading-[1.78] mb-8 max-w-md">
              Integration is the point. When every vertical, such as coffee
              sourcing, roasting, coffee technology, engineering, and coffee
              distribution, operates within the same infrastructure, the
              benefits compound across the entire coffee supply chain solutions
              UAE.
            </p>

            <div
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl text-[#2F43B7] text-sm font-semibold"
              style={{
                background: "#EEF2FF",
                border: "1px solid rgba(47,67,183,0.15)",
              }}
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              What Integration Actually Changes
            </div>
          </motion.div>

          {/* Right: benefit cards */}
          <div className="space-y-4">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                className="group relative bg-white rounded-2xl p-7 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  border: "1px solid rgba(47,67,183,0.08)",
                  boxShadow: "0 2px 16px rgba(47,67,183,0.05)",
                }}
              >
                {/* Number badge */}
                <div className="flex items-start gap-5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[12px] font-extrabold flex-shrink-0 mt-0.5"
                    style={{
                      background:
                        "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                      boxShadow: "0 4px 12px rgba(47,67,183,0.28)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-extrabold text-[#0F172A] text-[16px] leading-snug tracking-tight mb-2 transition-colors duration-200 group-hover:text-[#2F43B7]">
                      {b.title}
                    </h3>
                    <p className="text-[#64748B] text-[14px] leading-[1.8]">
                      {b.body}
                    </p>
                  </div>
                </div>

                {/* Hover left accent */}
                <div
                  className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(180deg, #2F43B7 0%, #4F6BFF 100%)",
                  }}
                />
              </motion.div>
            ))}

            {/* Closing statement */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-[#475569] text-[14px] leading-[1.78] pt-2 pl-1"
            >
              This is what{" "}
              <span className="font-semibold text-[#2F43B7]">
                integrated coffee ecosystem UAE
              </span>{" "}
              means in practice — not a positioning line, but an operational
              model where every vertical reinforces the others.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
