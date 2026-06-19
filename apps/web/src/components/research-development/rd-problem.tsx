"use client";

import { motion } from "framer-motion";

const imageLabels = [
  { text: "Extraction Science", x: "left-5", y: "top-6" },
  { text: "Coffee Testing", x: "right-5", y: "bottom-20" },
  { text: "Data Analysis", x: "left-5", y: "bottom-6" },
];

export function RdProblem() {
  return (
    <section className="relative bg-white overflow-hidden py-12 lg:py-16">
      <div
        className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(47,67,183,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 xl:px-10">
        {/* Full-width heading block */}
        <div className="mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.0, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-sans font-extrabold text-[#0F172A] text-4xl lg:text-5xl leading-[1.08] tracking-[-0.03em]"
          >
            Most Coffee Operations Run on{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Assumptions
            </span>
          </motion.h2>
        </div>

        {/* Split: image left, paragraphs right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 xl:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative"
          >
            {/* Blue glow behind */}
            <div
              className="absolute -inset-3 rounded-[32px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(47,67,183,0.1) 0%, transparent 70%)",
                filter: "blur(12px)",
              }}
            />

            <div
              className="relative rounded-[24px] overflow-hidden"
              style={{
                height: "clamp(480px, 68vh, 720px)",
                boxShadow:
                  "0 2px 0 rgba(47,67,183,0.15) inset, 0 20px 56px rgba(15,23,42,0.16)",
              }}
            >
              <motion.img
                src="/r_and_d/coffee-process.jpg"
                alt="Coffee R&D Process"
                className="w-full h-full object-cover"
                initial={{ scale: 1.07 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeOut" }}
              />

              {/* Gradient overlays */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,23,42,0.62) 0%, rgba(15,23,42,0.08) 50%, transparent 75%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(47,67,183,0.14) 0%, transparent 55%)",
                }}
              />

              {/* Technical annotation labels */}
              {imageLabels.map((label, i) => (
                <motion.div
                  key={label.text}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: 0.8 + i * 0.18,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={`absolute ${label.x} ${label.y} flex items-center gap-2`}
                >
                  <div
                    className="w-3 h-[1px]"
                    style={{ background: "rgba(255,255,255,0.4)" }}
                  />
                  <span
                    className="font-mono text-[9px] tracking-[0.22em] uppercase"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {label.text}
                  </span>
                </motion.div>
              ))}

              {/* Bottom info strip */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-center justify-between"
                style={{
                  background: "rgba(15,23,42,0.45)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/50">
                  JPLC R&amp;D Lab — UAE
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4F6BFF]" />
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/40">
                    Applied Research
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex flex-col gap-6 pt-2"
          >
            <p className="text-[#475569] text-[15px] lg:text-[16px] leading-[1.88]">
              Extraction science, roast chemistry, water mineralogy — the
              understanding of what makes a great cup has moved. Most commercial
              operations haven&apos;t kept pace.
            </p>
            <p className="text-[#475569] text-[15px] lg:text-[16px] leading-[1.88]">
              The result is roast profiles nobody has reviewed in years,
              extraction parameters set at installation and never touched, water
              systems nobody has tested.
            </p>
            <div
              className="p-5 lg:p-6 rounded-xl"
              style={{
                background: "rgba(47,67,183,0.05)",
                border: "1px solid rgba(47,67,183,0.11)",
              }}
            >
              <p className="text-[#0F172A] font-semibold text-[15px] lg:text-[16px] leading-[1.85]">
                Coffee innovation requires dedicated infrastructure. That&apos;s
                what JPLC R&amp;D exists to provide.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
