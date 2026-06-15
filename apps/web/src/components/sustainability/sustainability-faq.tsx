"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What does sustainable coffee sourcing mean at JPLC?",
    a: "Sustainable coffee sourcing at JPLC means direct-trade relationships with producers, fair pricing above commodity rates, multi-season purchasing commitments, and full coffee traceability from farm to roastery. It's built into the procurement process — not applied as a label after the fact.",
  },
  {
    q: "Can JPLC provide coffee traceability documentation for our supply?",
    a: "Yes. Every lot sourced by JPLC is documented with full traceability records — producer, origin, processing method, harvest season, and Q-grade. Partners requiring provenance documentation for their own sustainability reporting can request lot-level traceability data.",
  },
  {
    q: "Do you offer sustainable coffee packaging UAE for private label products?",
    a: "Yes. JPLC offers eco-friendly coffee packaging options for private label and OEM partners, including compostable barrier bags, recyclable formats, and reduced-plastic packaging across retail, capsule, and foodservice formats.",
  },
  {
    q: "How does JPLC verify ethical coffee sourcing at origin?",
    a: "Ethical coffee sourcing verification at JPLC involves direct producer relationships, on-the-ground sourcing partnerships in origin countries, and assessment of farming and labour practices before purchasing commitments are made. We don't rely solely on third-party certifications — direct relationship and verified practice is the standard.",
  },
  {
    q: "Is JPLC a sustainable coffee company UAE with formal environmental commitments?",
    a: "Yes. JPLC operates internal environmental targets across sourcing, production, and packaging — covering energy use, waste reduction, packaging material composition, and supply chain partner standards. Formal reporting and targets are reviewed annually. Contact our team for current sustainability reporting.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
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
            width="11"
            height="11"
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

export function SustainabilityFaq() {
  return (
    <>
      {/* ── CTA Banner ── */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0">
          <img
            src="/packaging.jpg"
            alt="Sustainable Coffee Production"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(110deg, rgba(15,23,42,0.88) 0%, rgba(47,67,183,0.38) 55%, rgba(79,107,255,0.22) 100%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(79,107,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,107,255,0.06) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 xl:px-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-[1.5px] bg-[#4F6BFF]" />
              <span className="text-[14px] font-semibold tracking-[0.18em] uppercase text-[#4F6BFF]">
                Work With Us
              </span>
            </div>

            <h2 className="font-black text-white text-[38px] lg:text-[50px] xl:text-[56px] leading-[1.0] tracking-[-0.035em] mb-7">
              Work With a Sustainable Coffee Company UAE{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #7B93FF 0%, #A5B4FC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                That Can Demonstrate It
              </span>
            </h2>

            <p className="text-white/65 text-[15px] lg:text-[16px] leading-[1.82] mb-5">
              Ethical coffee sourcing, full coffee traceability, and sustainable
              coffee sourcing UAE infrastructure, built into the JPLC operation,
              available to every partner we work with.
            </p>

            <p className="text-white/60 text-[15px] lg:text-[16px] leading-[1.82] mb-10">
              If your business has sustainability commitments that require a
              supply chain partner who can evidence theirs — let&apos;s talk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-white text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                  boxShadow: "0 8px 28px rgba(79,107,255,0.35)",
                }}
              >
                Talk to Our Sourcing Team
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
                className="inline-flex items-center justify-center px-7 py-3.5 text-white/85 text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 hover:bg-white/8 hover:-translate-y-0.5 whitespace-nowrap"
                style={{ border: "1.5px solid rgba(255,255,255,0.22)" }}
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
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
            <h2 className="font-black text-[#0F172A] text-3xl lg:text-4xl leading-[1.1] tracking-[-0.03em]">
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
