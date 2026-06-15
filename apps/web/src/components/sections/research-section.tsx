"use client";

import { motion, type Variants } from "framer-motion";

/* ══════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════ */

const areas = [
  {
    label: "Coffee Extraction Science & Brew Optimization",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 2h4M5 2v3.5L3 10a4.5 4.5 0 009 0l-2-4.5V2" />
      </svg>
    ),
  },
  {
    label: "Roast Curve Analysis & Thermal Profiling",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 11c2-5 4-5 6 0s4 5 6 0" />
        <path d="M2 14h12" />
      </svg>
    ),
  },
  {
    label: "Espresso Extraction Yield & TDS Analytics",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 13V8M7 13V5M11 13V8M15 13V3" />
      </svg>
    ),
  },
  {
    label: "Flavor Chemistry & Sensory Mapping",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="8" r="2" />
        <circle cx="2.5" cy="4" r="1.2" />
        <circle cx="13.5" cy="4" r="1.2" />
        <circle cx="2.5" cy="12" r="1.2" />
        <circle cx="13.5" cy="12" r="1.2" />
        <path d="M4 4.8l2.5 2M12 4.8l-2.5 2M4 11.2l2.5-2M12 11.2l-2.5-2" />
      </svg>
    ),
  },
  {
    label: "New Beverage Formulation & Innovation",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="8" r="3" />
        <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.1 3.1l1.4 1.4M11.5 11.5l1.4 1.4M3.1 12.9l1.4-1.4M11.5 4.5l1.4-1.4" />
      </svg>
    ),
  },
  {
    label: "AI-Assisted Calibration & Predictive Maintenance",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="12" height="12" rx="2.5" />
        <path d="M5 6h2M9 6h2M5 9h6M5 12h4" />
      </svg>
    ),
  },
  {
    label: "Water Composition & Mineral Impact Studies",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2L4.5 8.5a4 4 0 007 0L8 2z" />
        <path d="M6 9.5c.5 1 2 1 2 1" />
      </svg>
    ),
  },
  {
    label: "Capsule, Pod & RTD Coffee R&D",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="6" width="14" height="5" rx="2.5" />
        <path d="M7 6V4M9 6V4M7 11v2M9 11v2" />
      </svg>
    ),
  },
];

const metrics = [
  { label: "Thermal Profile Accuracy", pct: 98, stop: "#6B8BFF" },
  { label: "Extraction Consistency", pct: 94, stop: "#4F6BFF" },
  { label: "Brew Calibration Precision", pct: 91, stop: "#4F6BFF" },
  { label: "Flavor Mapping Score", pct: 87, stop: "#2F43B7" },
];

const kpis = [
  { value: "47+", label: "Active R&D Projects" },
  { value: "2,000+", label: "Brew Calibrations Logged" },
  { value: "8", label: "Research Domains" },
  { value: "12+", label: "Years of Lab Data" },
];

/* ══════════════════════════════════════════════════════════
   ANIMATION VARIANTS
══════════════════════════════════════════════════════════ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: "easeOut" },
  },
};

/* ══════════════════════════════════════════════════════════
   CIRCULAR PROGRESS RING
══════════════════════════════════════════════════════════ */
const R = 44;
const CIRC = 2 * Math.PI * R; // ≈ 276.5

function CircleRing({ pct, sublabel }: { pct: number; sublabel: string }) {
  const dashOffset = CIRC * (1 - pct / 100);
  return (
    <div className="relative flex-shrink-0" style={{ width: 116, height: 116 }}>
      <svg width="116" height="116" style={{ transform: "rotate(-90deg)" }}>
        {/* Track */}
        <circle
          cx="58"
          cy="58"
          r={R}
          fill="none"
          stroke="rgba(47,67,183,0.10)"
          strokeWidth="7"
        />
        {/* Filled arc */}
        <motion.circle
          cx="58"
          cy="58"
          r={R}
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={CIRC}
          initial={{ strokeDashoffset: CIRC }}
          whileInView={{ strokeDashoffset: dashOffset }}
          viewport={{ once: true }}
          transition={{ duration: 1.7, ease: "easeOut", delay: 0.35 }}
        />
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2F43B7" />
            <stop offset="100%" stopColor="#6B8BFF" />
          </linearGradient>
        </defs>
      </svg>
      {/* Centre label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span
          className="font-extrabold text-[21px] leading-none tracking-tight"
          style={{
            background: "linear-gradient(135deg, #1e3a9e 0%, #4F6BFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {pct}%
        </span>
        <span className="text-[7.5px] text-[#64748B] tracking-[0.18em] uppercase mt-1 px-2 leading-tight">
          {sublabel}
        </span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   SECTION
══════════════════════════════════════════════════════════ */
export function ResearchSection() {
  return (
    <section
      id="research"
      className="relative overflow-hidden py-12 lg:py-16"
      style={{
        background:
          "linear-gradient(180deg, #F4F8FF 0%, #ffffff 45%, #F4F8FF 100%)",
      }}
    >
      {/* ── Background effects ─────────────────────────── */}
      <div
        className="absolute -top-24 right-0 w-[520px] h-[520px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(79,107,255,0.11) 0%, transparent 70%)",
          filter: "blur(65px)",
        }}
      />
      <div
        className="absolute -bottom-20 left-0 w-[420px] h-[420px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(47,67,183,0.08) 0%, transparent 70%)",
          filter: "blur(75px)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[280px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(107,139,255,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Section rule lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F6BFF]/22 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F6BFF]/18 to-transparent" />

      {/* ── Content ────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* ════════════════════════════════════════════════
              LEFT COLUMN
          ════════════════════════════════════════════════ */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#4F6BFF]/65" />
              <p className="text-[#4F6BFF] text-[14px] font-semibold tracking-[0.38em] uppercase">
                Research &amp; Development
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-extrabold text-[#0F172A] text-4xl lg:text-[46px] xl:text-[52px] leading-[1.06] tracking-[-0.03em] mb-6">
              Coffee Sourcing and Roasting Science{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 55%, #6B8BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                at the Molecular Level
              </span>
            </h2>

            {/* Decorative divider */}
            <div className="flex items-center gap-2 mb-7">
              <div className="w-10 h-px bg-[#4F6BFF]/32" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#4F6BFF]/45" />
              <div className="w-4 h-px bg-[#4F6BFF]/18" />
            </div>

            {/* Body copy */}
            <p className="text-[#475569] text-[16.5px] leading-[1.80] max-w-lg mb-12 font-light">
              Good coffee at scale is an engineering problem. Extraction yield,
              thermal profiling, water mineralogy, grind calibration — each
              variable compound. The work is applied, not academic. Every
              finding feeds directly into the products and systems deployed for
              JPLC partners — producing measurable, repeatable improvement in
              cup quality over time.
            </p>

            {/* ── Research capability cards ── */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
            >
              {areas.map((area) => (
                <motion.div
                  key={area.label}
                  variants={cardVariant}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 14px 36px rgba(47,67,183,0.13)",
                    borderColor: "rgba(79,107,255,0.28)",
                  }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="group flex items-start gap-3 p-3.5 rounded-xl cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.78)",
                    backdropFilter: "blur(14px)",
                    border: "1px solid rgba(47,67,183,0.09)",
                    boxShadow: "0 2px 10px rgba(47,67,183,0.05)",
                  }}
                >
                  {/* Icon chip */}
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[#4F6BFF] mt-0.5 transition-colors duration-200 group-hover:text-[#2F43B7]"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(79,107,255,0.09) 0%, rgba(47,67,183,0.06) 100%)",
                      border: "1px solid rgba(79,107,255,0.14)",
                    }}
                  >
                    {area.icon}
                  </div>
                  {/* Label */}
                  <span className="text-[#334155] text-[12.5px] font-medium leading-snug pt-0.5 transition-colors duration-200 group-hover:text-[#2F43B7]">
                    {area.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ════════════════════════════════════════════════
              RIGHT COLUMN — Analytics card
          ════════════════════════════════════════════════ */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div
              className="relative rounded-2xl p-7 overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.82)",
                backdropFilter: "blur(28px)",
                border: "1px solid rgba(79,107,255,0.15)",
                boxShadow:
                  "0 24px 64px rgba(47,67,183,0.11), 0 4px 16px rgba(47,67,183,0.06), inset 0 0 0 1px rgba(255,255,255,0.72)",
              }}
            >
              {/* Top-right ambient glow */}
              <div
                className="absolute -top-14 -right-14 w-44 h-44 rounded-full pointer-events-none"
                style={{
                  background: "rgba(79,107,255,0.10)",
                  filter: "blur(45px)",
                }}
              />
              {/* Bottom-left ambient glow */}
              <div
                className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full pointer-events-none"
                style={{
                  background: "rgba(47,67,183,0.07)",
                  filter: "blur(35px)",
                }}
              />

              {/* ── Card header ── */}
              <div className="relative flex items-start justify-between mb-7">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {/* Animated pulse dot */}
                    <div className="relative w-2 h-2 flex-shrink-0">
                      <div className="absolute inset-0 rounded-full bg-[#4F6BFF] opacity-40 animate-ping" />
                      <div className="relative w-2 h-2 rounded-full bg-[#4F6BFF]" />
                    </div>
                    <p className="text-[#4F6BFF] text-[10px] font-bold tracking-[0.38em] uppercase">
                      Live Research Intelligence
                    </p>
                  </div>
                  <p className="text-[#94A3B8] text-[11px] tracking-wide ml-4">
                    Active Programs · JPLC Lab Systems
                  </p>
                </div>
                {/* Status pill */}
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full flex-shrink-0"
                  style={{
                    background: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.22)",
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-emerald-600 text-[9px] font-bold tracking-wider uppercase">
                    Active
                  </span>
                </div>
              </div>

              {/* ── Primary KPI — circle ring + mini bar ── */}
              <div
                className="relative flex items-center gap-5 mb-7 p-4 rounded-xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(47,67,183,0.04) 0%, rgba(79,107,255,0.06) 100%)",
                  border: "1px solid rgba(79,107,255,0.10)",
                }}
              >
                {/* Subtle corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at top right, rgba(79,107,255,0.08) 0%, transparent 70%)",
                  }}
                />
                <CircleRing pct={94} sublabel="Extraction Consistency" />
                <div className="flex-1 min-w-0">
                  <p className="text-[#0F172A] text-[13px] font-semibold mb-1.5">
                    Primary KPI
                  </p>
                  <p className="text-[#64748B] text-[11.5px] leading-relaxed mb-4">
                    Yield maintained within ±0.2% across all calibrated
                    enterprise systems.
                  </p>
                  {/* Mini progress bar */}
                  <div>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-[#94A3B8] text-[10px]">
                        Yield Stability
                      </span>
                      <span className="text-[#4F6BFF] text-[10px] font-bold">
                        96%
                      </span>
                    </div>
                    <div
                      className="h-[5px] rounded-full overflow-hidden"
                      style={{ background: "rgba(79,107,255,0.10)" }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, #2F43B7 0%, #6B8BFF 100%)",
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: "96%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.3,
                          ease: "easeOut",
                          delay: 0.45,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Progress bars ── */}
              <div className="space-y-4 mb-7">
                {metrics.map((m, i) => (
                  <div key={m.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#475569] text-[12px] font-medium">
                        {m.label}
                      </span>
                      <span
                        className="text-[11px] font-bold tabular-nums"
                        style={{ color: m.stop }}
                      >
                        {m.pct}%
                      </span>
                    </div>
                    <div
                      className="h-[6px] rounded-full overflow-hidden"
                      style={{ background: "rgba(47,67,183,0.07)" }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, #2F43B7 0%, ${m.stop} 100%)`,
                          boxShadow: `0 0 8px rgba(79,107,255,0.25)`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${m.pct}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.15,
                          ease: "easeOut",
                          delay: 0.3 + i * 0.1,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* ── KPI grid ── */}
              <div
                className="grid grid-cols-2 gap-3 pt-6"
                style={{ borderTop: "1px solid rgba(47,67,183,0.09)" }}
              >
                {kpis.map((kpi) => (
                  <motion.div
                    key={kpi.label}
                    whileHover={{ scale: 1.025 }}
                    transition={{ duration: 0.2 }}
                    className="p-3.5 rounded-xl"
                    style={{
                      background: "rgba(248,250,255,0.82)",
                      border: "1px solid rgba(47,67,183,0.08)",
                      boxShadow: "0 2px 8px rgba(47,67,183,0.04)",
                    }}
                  >
                    <p
                      className="font-extrabold text-[20px] leading-none tracking-tight mb-1"
                      style={{
                        background:
                          "linear-gradient(135deg, #1e3a9e 0%, #4F6BFF 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {kpi.value}
                    </p>
                    <p className="text-[#64748B] text-[10px] tracking-wide leading-snug">
                      {kpi.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* ── Footer label ── */}
              <div className="mt-5 flex items-center justify-between">
                <p className="text-[#94A3B8] text-[9.5px] tracking-wider">
                  Powered by JPLC proprietary analytics engine
                </p>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-[#4F6BFF]/35" />
                  <div className="w-1 h-1 rounded-full bg-[#4F6BFF]/55" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4F6BFF]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
