"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const chain = ["Origin", "Processing", "Roasting", "Packaging", "Partner"];

const paragraphs = [
  "A lot of brands talk about sustainability. Few have made the structural changes the word actually requires.",
  "Sustainable coffee sourcing means fair prices at origin, long-term producer relationships, and traceability that goes beyond a country printed on the bag. It means considering the farmer, the community, and the land — not just the flavour and the cost per kilo.",
  "At JPLC, that's the foundation — not the marketing.",
];

export function SustainabilityProblem() {
  const chainRef = useRef(null);
  const chainInView = useInView(chainRef, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden py-12 lg:py-16 bg-[#F8FAFC]">
      <div
        className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(47,67,183,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 xl:px-10">
        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
          {/* Left: H2 + pull quote + mini supply chain diagram */}
          <div className="lg:sticky lg:top-32">
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.0, ease: [0.22, 0.61, 0.36, 1] }}
              className="font-sans font-extrabold text-[#0F172A] text-4xl lg:text-5xl leading-[1.08] tracking-[-0.03em] mb-10"
            >
              Sustainability in Coffee Is{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Structural, Not Cosmetic
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
              className="relative overflow-hidden rounded-2xl"
              style={{
                height: "clamp(240px, 32vh, 360px)",
                boxShadow:
                  "0 0 0 1px rgba(47,67,183,0.1), 0 16px 48px rgba(47,67,183,0.1)",
              }}
            >
              <motion.img
                src="/sustainablity/sustainability_coffee_4.jpg"
                alt="Sustainable Coffee"
                className="w-full h-full object-cover"
                initial={{ scale: 1.06 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeOut" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,23,42,0.32) 0%, transparent 50%)",
                }}
              />
            </motion.div>
          </div>

          {/* Right: paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
            className="flex flex-col gap-6 pt-1"
          >
            <p className="text-[#475569] text-[15px] lg:text-[16px] leading-[1.88]">
              {paragraphs[0]}
            </p>
            <p className="text-[#475569] text-[15px] lg:text-[16px] leading-[1.88]">
              {paragraphs[1]}
            </p>
            <div
              className="p-5 lg:p-6 rounded-xl"
              style={{
                background: "rgba(47,67,183,0.04)",
                border: "1px solid rgba(47,67,183,0.1)",
              }}
            >
              <p className="text-[#0F172A] font-semibold text-[15px] lg:text-[16px] leading-[1.85]">
                {paragraphs[2]}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Animated supply chain */}
        <div ref={chainRef}>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={chainInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center text-[10px] tracking-[0.35em] uppercase font-semibold text-[#2F43B7] mb-8"
          >
            The Supply Chain Journey
          </motion.p>

          <div className="flex items-center justify-center gap-0 overflow-x-auto">
            {chain.map((step, i) => (
              <div key={step} className="flex items-center flex-shrink-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 8 }}
                  animate={chainInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.14,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[11px] font-black"
                    style={{
                      background:
                        "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                      boxShadow: "0 3px 10px rgba(47,67,183,0.3)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wide whitespace-nowrap text-[#0F172A]">
                    {step}
                  </span>
                </motion.div>

                {i < chain.length - 1 && (
                  <div
                    className="relative mx-3 w-14 lg:w-20 h-[1.5px]"
                    style={{ background: "rgba(47,67,183,0.1)" }}
                  >
                    <motion.div
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #2F43B7, #4F6BFF)",
                      }}
                      initial={{ width: "0%" }}
                      animate={chainInView ? { width: "100%" } : {}}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.12 + 0.2,
                        ease: "easeOut",
                      }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={chainInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.2, delay: i * 0.12 + 0.55 }}
                      className="absolute right-0 top-1/2 -translate-y-1/2"
                    >
                      <svg width="5" height="7" viewBox="0 0 5 7" fill="none">
                        <path d="M0 0l5 3.5L0 7V0z" fill="#4F6BFF" />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
