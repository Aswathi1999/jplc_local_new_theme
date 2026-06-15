"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const faqs = [
  {
    q: "What types of commercial coffee machines does JPLC supply?",
    a: "JPLC supplies traditional espresso machines, bean-to-cup systems, batch brewers, filter coffee equipment, and coffee grinders for commercial applications. All equipment is sourced through verified manufacturer relationships and supported with local installation, calibration, and technical servicing.",
  },
  {
    q: "Do you supply coffee machines for cafés UAE openings from scratch?",
    a: "Yes. JPLC works with new café openings from equipment selection and bar layout through to installation, calibration, and staff training. We approach it as a complete setup, not a product delivery.",
  },
  {
    q: "Can you service equipment that wasn't supplied by JPLC?",
    a: "Yes. JPLC's technical services team services commercial coffee machines from other suppliers, covering calibration, preventive maintenance, fault diagnosis, and parts supply for most major commercial brands.",
  },
  {
    q: "How quickly can you respond to an equipment breakdown?",
    a: "Response times depend on the service agreement in place. Accounts on a managed service programme receive priority response. Contact our technical team directly for service agreement options and current response time commitments.",
  },
  {
    q: "Do you offer coffee equipment supplier UAE services outside Dubai?",
    a: "Yes. JPLC supplies and services coffee equipment across the UAE — not just Dubai. Coverage and logistics for specific locations can be confirmed at the inquiry stage.",
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

export function CommercialMachinesFaq() {
  return (
    <>
      {/* ─── CTA — split layout ─── */}
      <section className="relative bg-white overflow-hidden py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-0 items-center">
            {/* ── Left: content ── */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="pr-0 lg:pr-16 py-8 lg:py-12"
            >
              <div className="flex items-center gap-2 mb-7">
                <div className="w-10 h-[2px] rounded-full bg-[#2F43B7]" />
                <div className="w-3 h-[2px] rounded-full bg-[#4F6BFF]/40" />
                <div className="w-1.5 h-[2px] rounded-full bg-[#4F6BFF]/15" />
              </div>

              <h2 className="font-black text-[#0F172A] text-3xl lg:text-[40px] xl:text-[44px] leading-[1.08] tracking-[-0.03em] mb-6">
                Need a Commercial Coffee Machine Supplier Who Stays{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Involved After Delivery?
                </span>
              </h2>

              <p className="text-[#475569] text-base lg:text-[17px] leading-[1.78] mb-10 max-w-lg">
                Equipment supply without ongoing technical support is a
                short-term arrangement. JPLC supplies coffee machines UAE-wide
                and backs every installation with the engineering capability to
                keep it performing — long after the initial setup.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-white text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(79,107,255,0.38)]"
                  style={{
                    background:
                      "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                    boxShadow: "0 8px 24px rgba(79,107,255,0.28)",
                  }}
                >
                  Request Equipment Consultation
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
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-[#2F43B7] text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EEF2FF]"
                  style={{ border: "1.5px solid rgba(47,67,183,0.22)" }}
                >
                  Talk to Our Engineering Team
                </a>
              </div>
            </motion.div>

            {/* ── Vertical divider (desktop only) ── */}
            <div
              className="hidden lg:block self-stretch w-px"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(47,67,183,0.2) 20%, rgba(47,67,183,0.2) 80%, transparent 100%)",
              }}
            />

            {/* ── Right: image panel ── */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="pl-0 lg:pl-16 py-8 lg:py-12"
            >
              <div className="relative">
                {/* Blueprint grid — image area only */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none z-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(47,67,183,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,0.06) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Image */}
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    height: "clamp(300px, 44vh, 460px)",
                    boxShadow: "0 20px 60px rgba(15,23,42,0.16)",
                  }}
                >
                  <img
                    src="/coffee_machine_engg.jpg"
                    alt="JPLC commercial coffee equipment engineering UAE"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
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
