"use client";

import { motion, type Variants } from "framer-motion";

const nodes = [
  {
    region: "UAE / DMCC",
    role: "Global Headquarters & Free Zone Operations",
    marker: "top-[30%] left-[56%]",
  },
  {
    region: "East Africa",
    role: "Green Coffee Procurement & Sourcing",
    marker: "top-[52%] left-[57%]",
  },
  {
    region: "South America",
    role: "Arabica Origin Partnerships",
    marker: "top-[62%] left-[28%]",
  },
  {
    region: "Southeast Asia",
    role: "Robusta Procurement & Processing",
    marker: "top-[50%] left-[76%]",
  },
  {
    region: "Europe",
    role: "Distribution & Hospitality Markets",
    marker: "top-[22%] left-[48%]",
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
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function GlobalSection() {
  return (
    <section
      id="global"
      className="py-16 lg:py-20 bg-[#F8FAFC] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-[#2F43B7] text-xs font-semibold tracking-[0.35em] uppercase mb-5">
            Global Infrastructure
          </p>
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-[#0F172A] leading-tight tracking-[-0.02em] mb-5">
            Operations spanning four continents
          </h2>
          <p className="text-[#374151] text-lg leading-relaxed">
            Anchored at the DMCC Coffee Centre in Dubai, JPLC operates a global
            sourcing, roasting, and distribution network built for enterprise
            reliability.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Nodes list */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="divide-y divide-[#E5E7EB]"
          >
            {nodes.map((node) => (
              <motion.div
                key={node.region}
                variants={itemVariant}
                className="flex gap-5 py-7 group"
              >
                <div className="flex-shrink-0 mt-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#2F43B7] group-hover:ring-4 ring-[#2F43B7]/20 transition-all" />
                </div>
                <div>
                  <h3 className="text-[#0F172A] text-sm font-semibold mb-1">
                    {node.region}
                  </h3>
                  <p className="text-[#64748B] text-sm">{node.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* DMCC callout — dark navy */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative bg-[#0F172A] rounded-sm p-10 overflow-hidden">
              {/* Blue glow */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#2F43B7] opacity-[0.12] blur-[80px] pointer-events-none" />

              {/* Technical grid */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(79,107,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(79,107,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#2F43B7]/35 rounded-sm" />

              <p className="relative z-10 text-[#6B8BFF] text-xs tracking-widest uppercase font-semibold mb-6">
                DMCC Coffee Centre — Dubai
              </p>

              <h3 className="relative z-10 font-sans font-bold text-3xl text-white mb-5 leading-snug tracking-[-0.02em]">
                The world&apos;s most advanced free zone for coffee trade
              </h3>

              <p className="relative z-10 text-[#94A3B8] text-sm leading-relaxed mb-8">
                The DMCC Coffee Centre supports roasting, warehousing,
                processing, packaging, training, and international coffee trade
                infrastructure within Dubai&apos;s specialty coffee ecosystem —
                serving as the operational hub for JPLC&apos;s global supply
                chain and distribution network.
              </p>

              <div className="relative z-10 grid grid-cols-2 gap-4 pt-6 border-t border-white/8">
                {[
                  { val: "150+", desc: "Countries of Trade Access" },
                  { val: "24/7", desc: "Roasting Operations" },
                ].map((s) => (
                  <div key={s.desc}>
                    <p className="font-bold text-3xl text-white mb-1 tracking-tight">
                      {s.val}
                    </p>
                    <p className="text-[#64748B] text-xs">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
