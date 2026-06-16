"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const faqs = [
  {
    q: "What is private label coffee manufacturing?",
    a: "Private label coffee manufacturing is the process of producing a finished coffee product — roasted, packaged, and labelled — under your brand name, using a third-party production facility. JPLC handles the entire process from roast profile development through to retail-ready packaging at our DMCC-certified facility in Dubai.",
  },
  {
    q: "What's the difference between private label coffee and white label coffee?",
    a: "White label coffee refers to a standardised product produced for multiple brands with minimal customisation — typically a set blend in generic packaging with your label applied. Private label coffee is developed specifically for your brand: custom blend, custom roast profile, custom packaging. JPLC offers both, depending on the requirement and timeline.",
  },
  {
    q: "What's the minimum order for OEM coffee manufacturing in the UAE?",
    a: "Minimum order quantities vary by format — roasted whole bean, ground, capsule, and RTD each have different production thresholds. Contact our manufacturing team directly for volume-specific pricing and lead times.",
  },
  {
    q: "Can JPLC help with coffee brand development UAE as well as production?",
    a: "Yes. For brands at an earlier stage, we offer coffee branding and brand development support alongside the manufacturing programme, covering product positioning, visual identity direction, and go-to-market planning.",
  },
  {
    q: "How long does it take to launch a custom coffee manufacturing UAE product?",
    a: "Timeline depends on the complexity of the brief, the number of sample iterations required, and packaging lead times. A straightforward white label coffee programme can move from brief to first production run in six to eight weeks. Custom blend development with new packaging typically takes longer — our team will give a realistic timeline at the briefing stage.",
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

export function PrivateLabelFaq() {
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
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#2F43B7] to-transparent opacity-60" />

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
                Ready to Launch Your{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Coffee Brand UAE?
                </span>
              </h2>

              <p className="text-[#374151] text-lg leading-relaxed max-w-2xl mx-auto mb-4">
                You don&apos;t need your own facility to build a serious coffee
                brand. You need the right private label coffee manufacturing UAE
                partner — one with the production depth, R&amp;D capability, and
                supply infrastructure to take it from brief to shelf without
                cutting corners.
              </p>
              <p className="text-[#374151] font-semibold text-lg mb-10">
                That&apos;s what JPLC does.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-[#2F43B7] text-white text-sm font-semibold tracking-wide rounded-sm hover:bg-[#2941A8] transition-colors shadow-lg shadow-[#2F43B7]/25"
                >
                  Start a Manufacturing Inquiry
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
                  Talk to Our Brand Team
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
