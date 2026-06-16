"use client";

import { motion, type Variants } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Wholesale Coffee Beans — Single Origin & Blends",
    body: "Green and roasted wholesale coffee beans across single-origin lots and custom blends, sourced through direct-trade relationships, Q-graded, and roasted to consistent batch profiles. As a coffee bean wholesaler with an in-house roastery, JPLC controls quality from procurement through to dispatch.",
    tag: "Coffee Beans",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
        />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Bulk Coffee Supplier — Commercial Formats & Volume Orders",
    body: "Bulk formats for high-consumption accounts — whole bean, ground, and pre-portioned options across commercial pack sizes. Structured ordering cycles, volume pricing, and supply agreements built around your actual consumption rather than a standard catalogue.",
    tag: "Bulk Supply",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Coffee Supplier for Hotels UAE & Hospitality Groups",
    body: "Hotel F&B programmes have specific requirements — multiple outlets, varying volume across service periods, different products for different spaces, and a brand standard that can't slip. JPLC operates as a dedicated coffee supplier for hotels in the UAE with account management, scheduled delivery, and supply continuity.",
    tag: "Hospitality",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Coffee Supplier for Restaurants UAE & F&B Operations",
    body: "Restaurants need wholesale coffee that performs consistently across service — morning through to late night, across different brewing formats, handled by staff with varying skill levels. JPLC supplies specialty-grade products with the volume capacity and delivery reliability that F&B operations require.",
    tag: "Restaurants",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Wholesale Specialty Coffee UAE — Premium Accounts",
    body: "For operations where coffee is a genuine differentiator, JPLC supplies wholesale specialty coffee UAE with full traceability, cupping notes, and origin documentation. Specialty-grade lots, seasonal rotations, and single-origin programmes for accounts that want to do more with their coffee offering.",
    tag: "Specialty",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
  {
    id: "06",
    title: "Coffee Distribution & Logistics Infrastructure",
    body: "Coffee distribution managed end to end — temperature-controlled vehicles, scheduled delivery windows, inventory tracking, and demand forecasting. As a coffee distributor Dubai and UAE-wide, JPLC runs its own logistics rather than outsourcing, which means direct accountability when something needs to move fast.",
    tag: "Distribution",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function WholesaleServices() {
  return (
    <section className="relative bg-[#F8FAFC] overflow-hidden py-16 lg:py-20">
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#2F43B7] opacity-[0.04] blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 lg:mb-14"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#2F43B7]" />
            <p className="text-[14px] font-semibold tracking-[0.18em] uppercase text-[#2F43B7]">
              Supply Options
            </p>
          </div>
          <h2 className="font-sans font-extrabold text-4xl lg:text-5xl text-[#0F172A] leading-[1.08] tracking-[-0.03em] max-w-3xl">
            Wholesale Coffee Supply &amp;{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 24px rgba(47,67,183,0.22))",
              }}
            >
              Distribution Services
            </span>
          </h2>
          <div className="mt-6 h-px bg-gradient-to-r from-[#2F43B7]/40 via-[#E5E7EB] to-transparent max-w-2xl" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.id}
              variants={cardVariant}
              className="group relative bg-white border border-[#E5E7EB] rounded-sm p-8 hover:border-[#2F43B7]/35 hover:shadow-[0_8px_40px_rgba(47,67,183,0.10)] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2F43B7] to-[#4F6BFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute -top-2 right-4 font-black text-[72px] leading-none text-[#2F43B7]/[0.045] select-none pointer-events-none">
                {svc.id}
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 flex items-center justify-center rounded-sm bg-[#2F43B7]/8 text-[#2F43B7] group-hover:bg-[#2F43B7] group-hover:text-white transition-all duration-300">
                    {svc.icon}
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 border border-[#2F43B7]/25 text-[#2F43B7] bg-[#2F43B7]/5 text-[9px] font-semibold tracking-[0.2em] uppercase rounded-full">
                    {svc.tag}
                  </span>
                </div>

                <h3 className="font-extrabold text-[17px] text-[#0F172A] tracking-[-0.02em] leading-snug mb-3 group-hover:text-[#2F43B7] transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {svc.body}
                </p>

                <div className="mt-5 h-px w-0 group-hover:w-10 bg-gradient-to-r from-[#2F43B7] to-[#4F6BFF] transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
