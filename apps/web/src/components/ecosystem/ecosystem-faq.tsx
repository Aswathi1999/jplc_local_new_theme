"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const faqs = [
  {
    q: "What is a coffee ecosystem?",
    a: "A coffee ecosystem is an integrated operational model that connects every stage of the coffee supply chain — sourcing, roasting, manufacturing, engineering, distribution, and training — under a single infrastructure. Rather than working with multiple independent suppliers, businesses access consistent quality and accountability across all functions through one partner.",
  },
  {
    q: "What makes JPLC different from a standard coffee supplier?",
    a: "Most suppliers operate in one or two verticals. JPLC operates across eight — from direct-trade coffee sourcing and roasting through to equipment engineering, coffee manufacturing, logistics, and barista training. That depth means fewer handoffs, tighter quality control, and a partner with full visibility across your entire coffee programme.",
  },
  {
    q: "Does JPLC work with businesses outside the UAE?",
    a: "Yes. While JPLC is headquartered at the DMCC Coffee Centre in Dubai, our coffee supply chain and sourcing partnerships operate across international origin markets. We work with café groups, hospitality brands, and F&B operators regionally and globally.",
  },
  {
    q: "Can JPLC handle private label coffee manufacturing for new brands?",
    a: "Yes. Our coffee manufacturing facility supports brands from first-run private label development through to high-volume OEM production — including roasting, packaging, capsule filling, and RTD beverage formulation.",
  },
  {
    q: "How do I start working with JPLC?",
    a: "The first step is a partnership inquiry through our contact page. From there, we assess your requirements across supply, equipment, manufacturing, or training and identify where the integrated coffee ecosystem UAE infrastructure adds the most value to your operation.",
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

export function EcosystemFaq() {
  return (
    <>
      {/* CTA section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        {/* Background image */}
        <img
          src="/ecosystem/ecosystem_cta.jpg"
          alt="JPLC coffee infrastructure platform UAE"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(15,23,42,0.70) 0%, rgba(47,67,183,0.22) 100%)",
          }}
        />

        {/* Blueprint grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-8 h-px bg-white/50" />
              <span className="text-white text-[11px] font-semibold tracking-[0.45em] uppercase">
                Build With JPLC
              </span>
              <div className="w-8 h-px bg-white/50" />
            </div>

            <h2 className="font-black text-white text-3xl lg:text-[42px] xl:text-[48px] leading-[1.06] tracking-[-0.03em] mb-6">
              Ready to Build on a Real{" "}
              <span className="text-white">
                Coffee Infrastructure Platform UAE?
              </span>
            </h2>

            <p className="text-white text-base lg:text-[17px] leading-[1.78] mb-4 max-w-2xl mx-auto font-light">
              Whether you&apos;re scaling a café group, launching a private
              label coffee brand, or looking for end-to-end coffee solutions UAE
              — the JPLC coffee ecosystem is built to be the backbone of your
              operation.
            </p>
            <p className="text-white text-base lg:text-[17px] leading-[1.78] mb-10 max-w-2xl mx-auto font-light">
              Tell us where you are and what you&apos;re building. We&apos;ll
              show you exactly where the integrated coffee ecosystem UAE
              infrastructure fits in — and where it adds the most value to your
              business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-[#2F43B7] text-sm font-semibold tracking-wide rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-black/20"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#2F43B7]/10 to-transparent pointer-events-none" />
                <span className="relative">Partner With Us</span>
                <svg
                  className="relative w-4 h-4"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
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
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-wide rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="relative bg-white overflow-hidden py-10 lg:py-14">
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
