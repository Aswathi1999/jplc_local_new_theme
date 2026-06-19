"use client";

import { motion } from "framer-motion";

export function EcosystemProblem() {
  return (
    <section className="relative bg-white overflow-hidden py-16 lg:py-24">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,67,183,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(47,67,183,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-[#2F43B7]/10">
              <img
                src="/ecosystem/ecosystem_parteners.jpg"
                alt="Coffee supply chain accountability — JPLC UAE"
                className="w-full h-[440px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.35) 100%)",
                }}
              />
            </div>

            {/* Stat badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="absolute -bottom-6 -right-4 lg:-right-6"
            >
              <div
                className="px-5 py-4 rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                  boxShadow: "0 12px 40px rgba(47,67,183,0.35)",
                }}
              >
                <div className="text-white font-black text-2xl leading-none mb-1">
                  8
                </div>
                <div className="text-white/75 text-[11px] font-medium tracking-[0.08em] uppercase">
                  Integrated Verticals
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-2 mb-7">
              <div className="w-10 h-[2px] rounded-full bg-[#2F43B7]" />
              <div className="w-3 h-[2px] rounded-full bg-[#4F6BFF]/40" />
              <div className="w-1.5 h-[2px] rounded-full bg-[#4F6BFF]/15" />
            </div>

            <h2 className="font-black text-[#0F172A] text-3xl lg:text-[40px] xl:text-[44px] leading-[1.08] tracking-[-0.03em] mb-6">
              Too Many Vendors, Not Enough{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Accountability
              </span>
            </h2>

            <div className="space-y-5 text-[#475569] text-base lg:text-[17px] leading-[1.78]">
              <p>
                Most coffee programmes are held together by four different
                suppliers who&apos;ve never spoken to each other. When something
                goes wrong — a supply gap, a machine fault, inconsistent
                extraction — everyone points elsewhere.
              </p>
              <p className="font-medium text-[#374151]">
                JPLC was built to close that gap. One partner across sourcing,
                roasting, engineering, manufacturing, distribution, and
                training. Full accountability across the entire coffee supply
                chain.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
