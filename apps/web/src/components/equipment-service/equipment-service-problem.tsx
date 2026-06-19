"use client";

import { motion } from "framer-motion";

export function EquipmentServiceProblem() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-16 bg-[#EEF2FF]">
      {/* Radial glows */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(47,67,183,0.12) 0%, transparent 68%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(47,67,183,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-3xl mb-12 lg:mb-14"
        >
          <h2 className="font-sans font-extrabold text-[#0F172A] text-4xl lg:text-5xl leading-[1.08] tracking-[-0.03em]">
            Downtime Costs More Than{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              a Service Contract
            </span>
          </h2>
        </motion.div>

        {/* ─── Two-column narrative ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16"
        >
          {/* Left: the problems */}
          <div className="space-y-5 text-[#475569] text-base lg:text-[17px] leading-[1.78]">
            <p>
              A machine going down during morning service isn&apos;t just an
              equipment problem — it&apos;s revenue, staff, and guest experience
              hit simultaneously.
            </p>
            <p>
              Most operators only think about servicing after something breaks.
              By then, the fault has been developing for weeks. Reactive
              maintenance is expensive. Preventive coffee equipment maintenance
              costs a fraction — and keeps equipment performing between visits,
              not just after them.
            </p>
            <div
              className="rounded-2xl p-8 lg:p-9"
              style={{
                background: "white",
                boxShadow: "0 2px 24px rgba(47,67,183,0.07)",
              }}
            >
              <div className="w-8 h-[3px] rounded-full bg-gradient-to-r from-[#2F43B7] to-[#4F6BFF] mb-6" />
              <p className="text-[#475569] text-base lg:text-[17px] leading-[1.78]">
                JPLC coffee equipment service is structured around keeping
                equipment running, not responding when it doesn&apos;t.
              </p>
            </div>
          </div>

          {/* Right: image */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              minHeight: "320px",
              boxShadow: "0 2px 24px rgba(47,67,183,0.10)",
            }}
          >
            <img
              src="/eqipment_service/problem_right_image.jpg"
              alt="Coffee equipment service — JPLC UAE"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
