"use client";

import { motion, type Variants } from "framer-motion";

const areas = [
  "Coffee Extraction Science & Brew Optimization",
  "Roast Curve Analysis & Thermal Profiling",
  "Espresso Extraction Yield & TDS Analytics",
  "Flavor Chemistry & Sensory Mapping",
  "New Beverage Formulation & Innovation",
  "AI-Assisted Calibration & Predictive Maintenance",
  "Water Composition & Mineral Impact Studies",
  "Capsule, Pod & RTD Coffee R&D",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ResearchSection() {
  return (
    <section
      id="research"
      className="py-16 lg:py-20 bg-[#0F172A] relative overflow-hidden"
    >
      {/* Blue ambient glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-[#2F43B7] opacity-[0.12] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-[#4056D6] opacity-[0.08] blur-[110px] pointer-events-none" />

      {/* Technical grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,107,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(79,107,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-[#6B8BFF]" />
              <p className="text-[#6B8BFF] text-[11px] font-semibold tracking-[0.45em] uppercase">
                Research & Development
              </p>
            </div>
            <h2 className="font-sans font-extrabold text-4xl lg:text-5xl text-white leading-[1.08] tracking-[-0.03em] mb-6">
              Coffee science at the{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #6B8BFF 0%, #4F6BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 24px rgba(79,107,255,0.30))",
                }}
              >
                molecular level
              </span>
            </h2>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#6B8BFF]/40" />
              <div className="w-px h-3 bg-[#6B8BFF]/30" />
              <div className="w-4 h-px bg-[#6B8BFF]/15" />
            </div>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-10" style={{ marginTop: 0 }}>
              JPLC R&D combines sensory science, mechanical engineering,
              thermodynamics, software integration, and product innovation —
              developing proprietary methodologies that improve consistency,
              efficiency, and beverage quality at enterprise scale.
            </p>

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="space-y-3"
            >
              {areas.map((area) => (
                <motion.li
                  key={area}
                  variants={itemVariant}
                  className="flex items-start gap-3 text-[#CBD5E1] text-sm"
                >
                  <span className="mt-[6px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#4F6BFF]" />
                  {area}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right — metrics card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative bg-white/4 border border-white/8 rounded-sm p-10 overflow-hidden backdrop-blur-sm">
              {/* Decorative circles */}
              <div className="absolute top-6 right-6 w-32 h-32 rounded-full border border-[#2F43B7]/20" />
              <div className="absolute top-10 right-10 w-24 h-24 rounded-full border border-[#2F43B7]/28" />
              <div className="absolute top-14 right-14 w-16 h-16 rounded-full border border-[#4F6BFF]/35" />

              <p className="text-[#6B8BFF] text-xs tracking-widest uppercase mb-8 font-mono">
                Active Research Programs
              </p>

              <div className="space-y-5">
                {[
                  { label: "Extraction Consistency", pct: 94 },
                  { label: "Thermal Profile Accuracy", pct: 98 },
                  { label: "Brew Calibration Precision", pct: 91 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#94A3B8] text-xs">
                        {item.label}
                      </span>
                      <span className="text-[#6B8BFF] text-xs font-mono">
                        {item.pct}%
                      </span>
                    </div>
                    <div className="h-px bg-white/8">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          ease: "easeOut",
                          delay: 0.3,
                        }}
                        className="h-px bg-gradient-to-r from-[#2F43B7] to-[#6B8BFF]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/8 grid grid-cols-2 gap-6">
                <div>
                  <p className="font-bold text-3xl text-white mb-1 tracking-tight">47+</p>
                  <p className="text-[#64748B] text-xs">Active R&D Projects</p>
                </div>
                <div>
                  <p className="font-bold text-3xl text-white mb-1 tracking-tight">
                    2,000+
                  </p>
                  <p className="text-[#64748B] text-xs">
                    Brew Calibrations Logged
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
