"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What do JPLC hospitality coffee solutions cover?",
    a: "JPLC hospitality coffee solutions cover the full programme — supply and distribution, commercial equipment procurement and servicing, staff training, private label development, and active account management. All services are available as a complete managed programme or as individual components depending on the requirement.",
  },
  {
    q: "Do you work as a hotel coffee supplier in Dubai for single properties or groups?",
    a: "Both. JPLC works with individual hotel properties and multi-property hospitality groups across the UAE. Supply, equipment, and service programmes are structured to cover single sites or consolidated across an entire portfolio.",
  },
  {
    q: "Can JPLC handle coffee solutions for hotels and restaurants in the UAE under one agreement?",
    a: "Yes. For hospitality groups operating both hotel and restaurant outlets, JPLC structures a single supply and service agreement covering all outlet types — consolidated invoicing, unified account management, and consistent product across every setting.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="border-b border-[#E5E7EB] last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-semibold text-[#0F172A] text-[16px] leading-snug group-hover:text-[#2F43B7] transition-colors duration-200">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full border transition-all duration-300 ${
            open
              ? "bg-[#2F43B7] border-[#2F43B7] text-white"
              : "border-[#E2E8F0] text-[#94A3B8] group-hover:border-[#2F43B7]/40 group-hover:text-[#2F43B7]"
          }`}
        >
          <svg
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="text-[#64748B] text-[15px] leading-relaxed pb-5 pr-10">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function HospitalityFaq() {
  return (
    <>
      {/* ── CTA Banner ── */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-[#EEF2FF]">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(47,67,183,0.09) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* Gradient orbs */}
        <div
          className="absolute top-0 right-0 w-[520px] h-[420px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(47,67,183,0.14) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[300px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, rgba(79,107,255,0.1) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: content */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-[1.5px] bg-[#2F43B7]" />
                <span className="text-[14px] font-semibold tracking-[0.18em] uppercase text-[#2F43B7]">
                  Get Started
                </span>
              </div>

              <h2 className="font-sans font-extrabold text-[#0F172A] text-3xl lg:text-4xl xl:text-5xl leading-[1.08] tracking-[-0.03em] mb-7">
                Commercial Coffee{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Solutions in UAE
                </span>
              </h2>

              <p className="text-[#475569] text-[15px] lg:text-[16px] leading-[1.82] mb-10">
                Whether it&apos;s a single hotel property, a restaurant group
                across five locations, or a hospitality brand developing a
                signature coffee identity — JPLC hospitality coffee solutions
                are built to run the programme end to end.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-white text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                  style={{
                    background:
                      "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                    boxShadow: "0 8px 28px rgba(79,107,255,0.28)",
                  }}
                >
                  Request a Hospitality Consultation
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7h10M8 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth={1.4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-[#2F43B7] text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                  style={{ border: "1.5px solid rgba(47,67,183,0.3)" }}
                >
                  Talk to Our Hospitality Team
                </a>
              </div>
            </motion.div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className="relative hidden lg:block"
            >
              <div
                className="absolute -inset-3 rounded-[28px] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(47,67,183,0.12) 0%, transparent 70%)",
                  filter: "blur(14px)",
                }}
              />
              <div
                className="relative rounded-[20px] overflow-hidden"
                style={{
                  height: "clamp(340px, 50vh, 520px)",
                  boxShadow:
                    "0 20px 56px rgba(47,67,183,0.14), 0 4px 16px rgba(15,23,42,0.06)",
                }}
              >
                <motion.img
                  src="/hospitality/hospitality.jpg"
                  alt="Hospitality Coffee Solutions"
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
                      "linear-gradient(to top, rgba(15,23,42,0.35) 0%, transparent 50%)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative bg-white overflow-hidden py-10 lg:py-14">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="mb-10"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-[#2F43B7]" />
              <p className="text-[#4F6BFF] text-[12px] font-bold tracking-[0.42em] uppercase">
                FAQ
              </p>
            </div>
            <h2 className="font-sans font-extrabold text-[#0F172A] text-3xl lg:text-4xl leading-[1.08] tracking-[-0.03em]">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div
            className="bg-white border border-[#E5E7EB] rounded-xl px-6 lg:px-8"
            style={{ boxShadow: "0 2px 16px rgba(15,23,42,0.04)" }}
          >
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
