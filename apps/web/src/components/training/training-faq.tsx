"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const faqs = [
  {
    q: "What barista training programmes does JPLC offer?",
    a: "JPLC offers beginner, intermediate, and advanced barista courses, formal barista certification, intensive professional barista course UAE formats, and focused barista classes UAE on specialty topics. All programmes are customised around the café's equipment and coffee.",
  },
  {
    q: "Is barista training UAE delivered on-site or at a training facility?",
    a: "Both. JPLC delivers barista training UAE on-site at the café using the team's own equipment, or at our dedicated training facility for off-site programmes. On-site delivery is recommended where bar-specific workflow training is the priority.",
  },
  {
    q: "What does the beginner barista training programme cover?",
    a: "The foundation programme covers specialty coffee introduction, grind calibration, espresso fundamentals, milk texturing, machine operation, cleaning routines, and customer workflow — with the science explained behind each skill, not just the procedure.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: "easeOut" },
  },
};

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
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
            transition={{ duration: 0.28, ease: "easeInOut" }}
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

export function TrainingFaq() {
  return (
    <>
      {/* ─── CTA — light section ─── */}
      <section className="relative bg-[#EEF2FF] overflow-hidden py-10 lg:py-16">
        {/* Radial glows */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(47,67,183,0.1) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, rgba(47,67,183,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-12 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: content */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-[2px] rounded-full bg-[#2F43B7]" />
                <div className="w-3 h-[2px] rounded-full bg-[#4F6BFF]/40" />
                <div className="w-1.5 h-[2px] rounded-full bg-[#4F6BFF]/15" />
              </div>
              <h2 className="font-sans font-extrabold text-[#0F172A] text-3xl lg:text-4xl xl:text-5xl leading-[1.08] tracking-[-0.03em] mb-6">
                Build a Team That{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Knows Coffee
                </span>
              </h2>
              <p className="text-[#475569] text-base lg:text-[17px] leading-[1.78] mb-10 max-w-lg">
                Foundation barista training, advanced barista courses, or formal
                barista training and certification — JPLC programmes are
                structured around your café, your equipment, and the standard
                you&apos;re trying to reach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-white text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background:
                      "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                    boxShadow: "0 8px 28px rgba(79,107,255,0.28)",
                  }}
                >
                  Enquire About Barista Training
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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
                  href="#programmes"
                  className="inline-flex items-center justify-center px-8 py-4 text-[#2F43B7] text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 hover:bg-[#2F43B7]/8 hover:-translate-y-0.5"
                  style={{ border: "1.5px solid rgba(47,67,183,0.22)" }}
                >
                  View Course Options
                </a>
              </div>
            </motion.div>

            {/* Right: training image */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1, ease: "easeOut" }}
              className="relative"
            >
              {/* Blue offset shape */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                  opacity: 0.12,
                }}
              />
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  height: "clamp(300px, 44vh, 460px)",
                  boxShadow: "0 20px 60px rgba(15,23,42,0.16)",
                }}
              >
                <img
                  src="/training/group-diverse-grads-throwing-caps-up-sky (1).jpg"
                  alt="JPLC barista training UAE — professional coffee education"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.4) 100%)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="relative bg-white overflow-hidden py-8 lg:py-10">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
