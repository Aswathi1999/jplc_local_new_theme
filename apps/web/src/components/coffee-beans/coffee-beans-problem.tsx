"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function CoffeeBeansProblem() {
  return (
    <section className="relative bg-white overflow-hidden py-16 lg:py-24">
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-[#2F43B7] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl shadow-[#2F43B7]/10">
              <img
                src="/coffee_solutions/delicious-coffee-beans-cup.jpg"
                alt="Delicious coffee beans cup"
                className="w-full h-[450px] lg:h-[600px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.5) 100%)",
                }}
              />
              {/* Floating label */}
              <div className="absolute bottom-5 left-5">
                <div
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-white backdrop-blur-md"
                  style={{
                    background: "rgba(47,67,183,0.75)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <svg
                    className="w-3.5 h-3.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Origin-verified &amp; Q-graded
                </div>
              </div>
            </div>

            {/* Decorative corner frame */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-[#2F43B7]/15 rounded-bl-lg pointer-events-none" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-[#4F6BFF]/10 rounded-tr-lg pointer-events-none" />
          </motion.div>

          {/* Right: heading + body text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#2F43B7]" />
              <span className="text-[#4F6BFF] text-[13px] font-semibold tracking-[0.38em] uppercase">
                The Supply Problem
              </span>
            </div>
            <h2 className="font-extrabold text-[#0F172A] text-4xl lg:text-5xl leading-[1.08] tracking-[-0.03em] mb-8">
              The Problem With Most{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 24px rgba(47,67,183,0.22))",
                }}
              >
                Coffee Bean Supply
              </span>
            </h2>

            <div className="space-y-5 text-[#475569] text-base lg:text-[17px] leading-[1.78]">
              <p>
                Most operators don&apos;t know where their coffee beans actually
                come from. They know the bag, the blend name, maybe the origin
                country printed on the label. What they don&apos;t know is the
                farm, the processing method, the harvest season, or whether the
                lot they&apos;re receiving today is the same quality as the one
                from three months ago.
              </p>
              <p className="font-medium text-[#374151]">
                That inconsistency is a supply chain problem — and it shows up
                in the cup every single day.
              </p>
              <p>
                As a dedicated coffee bean supplier with direct-trade
                relationships across producing regions, JPLC operates
                differently. Every lot is traceable, Q-graded, and evaluated
                before it enters our roastery. The coffee beans reaching your
                operation are verified at origin — not just branded at the
                warehouse.
              </p>
            </div>

            {/* Divider */}
            <div className="mt-8 flex items-center gap-3">
              <div className="w-10 h-px bg-[#2F43B7]/40" />
              <div className="w-px h-3 bg-[#2F43B7]/30" />
              <div className="w-4 h-px bg-[#2F43B7]/15" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
