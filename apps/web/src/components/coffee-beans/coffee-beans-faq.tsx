"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const faqs = [
  {
    q: "What types of coffee beans does JPLC supply?",
    a: "JPLC supplies single-origin specialty coffee beans, custom coffee blends, private label ranges, and wholesale coffee beans in bulk formats. All lots are sourced through direct-trade relationships, Q-graded at origin, and roasted at our DMCC-certified facility in Dubai.",
  },
  {
    q: "Do you supply coffee beans for cafés UAE-wide?",
    a: "Yes. We supply specialty coffee beans to independent cafés, café groups, and multi-site operators across the UAE, including custom house blends, single-origin programmes, and private label products.",
  },
  {
    q: "Can you supply premium coffee beans for Dubai restaurants and hotels?",
    a: "Yes. JPLC works with hotel F&B programmes and restaurants requiring consistent, high-quality premium coffee beans Dubai-wide and across the UAE, including bulk supply, custom blends, and managed replenishment.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
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
              : "border-[#E5E7EB] text-[#94A3B8] group-hover:border-[#2F43B7]/40 group-hover:text-[#2F43B7]"
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
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

export function CoffeeBeansFaq() {
  return (
    <>
      {/* CTA Section */}
      <section className="relative bg-[#F8FAFC] overflow-hidden py-16 lg:py-20">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F43B7]/30 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-sm overflow-hidden text-center"
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #EEF2FF 50%, #E0E7FF 100%)",
              boxShadow:
                "0 24px 64px rgba(47,67,183,0.12), 0 0 0 1px rgba(47,67,183,0.10)",
            }}
          >
            {/* Top edge accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#2F43B7] to-transparent opacity-60" />

            {/* Corner brackets */}
            <div className="absolute top-5 left-5 w-7 h-px bg-[#2F43B7]/35" />
            <div className="absolute top-5 left-5 w-px h-7 bg-[#2F43B7]/35" />
            <div className="absolute top-5 right-5 w-7 h-px bg-[#2F43B7]/35" />
            <div className="absolute top-5 right-5 w-px h-7 bg-[#2F43B7]/35" />
            <div className="absolute bottom-5 left-5 w-7 h-px bg-[#2F43B7]/20" />
            <div className="absolute bottom-5 left-5 w-px h-7 bg-[#2F43B7]/20" />
            <div className="absolute bottom-5 right-5 w-7 h-px bg-[#2F43B7]/20" />
            <div className="absolute bottom-5 right-5 w-px h-7 bg-[#2F43B7]/20" />

            <div className="relative z-10 px-6 lg:px-14 py-14 lg:py-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-8 h-px bg-[#2F43B7]" />
                <p className="text-[14px] font-semibold tracking-[0.18em] uppercase text-[#2F43B7]">
                  Start the Conversation
                </p>
                <div className="w-8 h-px bg-[#2F43B7]" />
              </div>

              <h2 className="font-sans font-extrabold text-4xl lg:text-5xl text-[#0F172A] leading-[1.08] tracking-[-0.03em] mb-6 max-w-3xl mx-auto">
                Looking for a Coffee Beans Supplier{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  in UAE
                </span>
              </h2>

              <p className="text-[#374151] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                Whether the requirement is a custom house blend, a single-origin
                programme, or bulk wholesale coffee beans for a high-volume
                operation — JPLC has the sourcing depth, production capability,
                and supply infrastructure to deliver it consistently.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-[#2F43B7] text-white text-sm font-semibold tracking-wide rounded-sm hover:bg-[#2941A8] transition-colors shadow-lg shadow-[#2F43B7]/25"
                >
                  Request a Sample
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7h10M8 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-10 py-4 border border-[#2F43B7]/30 text-[#2F43B7] bg-white/60 text-sm font-semibold tracking-wide rounded-sm hover:border-[#2F43B7] hover:bg-white transition-colors backdrop-blur-sm"
                >
                  Talk to Our Supply Team
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
