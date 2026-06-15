"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const paragraphs = [
  {
    text: "A five-star hotel serving average coffee isn't a minor inconsistency. It's a brand problem. The same applies to a restaurant group where the espresso varies by location, or a corporate campus where the machine is down three days a week.",
    highlight: false,
  },
  {
    text: "Coffee solutions for hotels and hospitality operations carry a different weight than a standalone café setup. The volume is higher, the outlets are multiple, the staff turnover is constant, and the guest expectation doesn't adjust for operational difficulties behind the bar.",
    highlight: false,
  },
  {
    text: "Most hospitality operators piece together their coffee programme from separate vendors — a commercial coffee supplier for beans, a different company for equipment, an independent technician for servicing, and no single point of contact when something goes wrong. The result is a programme held together by goodwill and phone calls rather than structure.",
    highlight: false,
  },
  {
    text: "Hospitality coffee solutions from JPLC are built around the operational reality of running coffee at scale — one partner, full coverage, active account management.",
    highlight: true,
  },
];

export function HospitalityProblem() {
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-80px" });

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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          {/* Left: sticky H2 + image */}
          <div className="lg:sticky lg:top-32">
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.0, ease: [0.22, 0.61, 0.36, 1] }}
              className="font-black text-[#0F172A] text-[38px] lg:text-[46px] xl:text-[52px] leading-[1.0] tracking-[-0.035em] mb-10"
            >
              Hospitality Coffee Programmes Fail at the{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Infrastructure Level
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
                src="/hospitality/hospitality_1.jpg"
                alt="Hospitality Coffee"
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

          {/* Right: animated vertical line + paragraphs */}
          <div ref={lineRef} className="flex gap-8 lg:gap-10 pt-1">
            <div className="relative flex-shrink-0 w-[1.5px]">
              <motion.div
                className="absolute top-0 left-0 w-full rounded-full"
                style={{
                  background:
                    "linear-gradient(180deg, #2F43B7 0%, #4F6BFF 100%)",
                  transformOrigin: "top",
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={lineInView ? { scaleY: 1, opacity: 1 } : {}}
                transition={{ duration: 1.6, ease: "easeOut", delay: 0.3 }}
              >
                <div className="invisible h-full">&nbsp;</div>
              </motion.div>
            </div>

            <div className="flex flex-col flex-1 gap-0">
              {paragraphs.map((para, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.75,
                    delay: i * 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={i < paragraphs.length - 1 ? "pb-8" : ""}
                >
                  {para.highlight ? (
                    <div
                      className="p-5 lg:p-6 rounded-xl"
                      style={{
                        background: "rgba(47,67,183,0.04)",
                        border: "1px solid rgba(47,67,183,0.1)",
                      }}
                    >
                      <p className="text-[#0F172A] font-semibold text-[15px] lg:text-[16px] leading-[1.85]">
                        {para.text}
                      </p>
                    </div>
                  ) : (
                    <>
                      <p className="text-[#475569] text-[15px] lg:text-[16px] leading-[1.88]">
                        {para.text}
                      </p>
                      <div className="flex items-center gap-3 mt-8">
                        <div
                          className="w-6 h-[2px] rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg, #2F43B7, #4F6BFF)",
                          }}
                        />
                        <div
                          className="flex-1 h-px"
                          style={{ background: "rgba(15,23,42,0.07)" }}
                        />
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
