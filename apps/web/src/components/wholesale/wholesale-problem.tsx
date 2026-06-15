"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function WholesaleProblem() {
  return (
    <section className="relative bg-white overflow-hidden py-16 lg:py-24">
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-[#2F43B7] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl shadow-[#2F43B7]/10">
              <img
                src="/wholesale/Bulk-Coffee-Beans-Wholesale.webp"
                alt="Commercial coffee operations"
                className="w-full h-[450px] lg:h-[520px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.5) 100%)",
                }}
              />
              <div className="absolute bottom-5 left-5">
                <div
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-white backdrop-blur-md"
                  style={{
                    background: "rgba(47,67,183,0.75)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <svg
                    className="w-3.5 h-3.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Operational supply · Not transactional
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-[#2F43B7]/15 rounded-bl-lg pointer-events-none" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-[#4F6BFF]/10 rounded-tr-lg pointer-events-none" />
          </motion.div>

          {/* Right: heading + text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#2F43B7]" />
              <span className="text-[#4F6BFF] text-[13px] font-semibold tracking-[0.38em] uppercase">
                The Supply Problem
              </span>
            </div>
            <h2 className="font-extrabold text-[#0F172A] text-4xl lg:text-5xl leading-[1.08] tracking-[-0.03em] mb-8">
              Wholesale Coffee Supply Gets{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 24px rgba(47,67,183,0.22))",
                }}
              >
                Mismanaged More Than Most Operators Realise
              </span>
            </h2>

            <div className="space-y-5 text-[#475569] text-base lg:text-[17px] leading-[1.78]">
              <p>
                A wholesale coffee relationship looks simple on paper. You
                order, they deliver. The problem shows up when the delivery is
                late, the batch tastes different from last month, or the
                supplier can&apos;t tell you why.
              </p>
              <p className="font-medium text-[#374151]">
                For high-volume operations — a hotel running breakfast service
                for 300 guests, a restaurant group across five locations, a
                corporate campus with three espresso machines running from 7am —
                inconsistency in wholesale coffee supply isn&apos;t a minor
                inconvenience. It&apos;s a service problem that lands on your
                team every single morning.
              </p>
              <p>
                The wholesale coffee supplier relationship most operators have
                is transactional. JPLC is structured to be operational —
                embedded in your supply cycle, forecasting your demand, and
                managing the process so your team doesn&apos;t have to.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="w-10 h-px bg-[#2F43B7]/40" />
              <div className="w-px h-3 bg-[#2F43B7]/30" />
              <div className="w-4 h-px bg-[#2F43B7]/15" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
