"use client";

import { motion, type Variants } from "framer-motion";

const capabilities = [
  {
    id: "01",
    title: "Espresso Machine Engineering",
    description:
      "Espresso machine engineering and product development, commercial coffee machine manufacturing, PID-controlled extraction systems, and flow-rate and pressure profiling calibration.",
    tag: "Hardware",
  },
  {
    id: "02",
    title: "Thermal & Pressure Systems",
    description:
      "Hydraulic and thermodynamic system optimisation, boiler pressure and temperature stability engineering, group head thermal management, and multi-boiler architecture development.",
    tag: "Thermodynamics",
  },
  {
    id: "03",
    title: "Grinder & Flow Engineering",
    description:
      "Integrated grinder engineering and burr geometry optimisation, flow-rate and pressure profiling calibration, and energy-efficient heating system design.",
    tag: "Mechanical",
  },
  {
    id: "04",
    title: "IoT Diagnostics & Firmware",
    description:
      "Smart telemetry and IoT-enabled machine diagnostics, firmware development and machine interface programming, and automatic cleaning and maintenance system integration.",
    tag: "Software",
  },
  {
    id: "05",
    title: "Water & Filtration Systems",
    description:
      "Water filtration, mineral balancing, and TDS optimisation — engineering precise water composition for consistent extraction quality across all machine types.",
    tag: "Chemistry",
  },
  {
    id: "06",
    title: "Prototyping & Field Services",
    description:
      "Custom café equipment fabrication and prototyping, preventive maintenance engineering programmes, technical field-service infrastructure, and spare-parts logistics and lifecycle support.",
    tag: "Operations",
  },
];


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export function EngineeringSection() {
  return (
    <section id="engineering" className="relative bg-[#F8FAFC] overflow-hidden">

      {/* â"€â"€ BACKGROUND TEXTURE â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,67,183,1) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-[#2F43B7] opacity-[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[350px] rounded-full bg-[#4056D6] opacity-[0.04] blur-[100px] pointer-events-none" />

      {/* â"€â"€ HEADER â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 pt-16 lg:pt-20 pb-10">

        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#2F43B7]" />
            <p className="text-[#2F43B7] text-[11px] font-semibold tracking-[0.45em] uppercase">
              Coffee Machine Engineering & Technical Services
            </p>
          </div>

          <h2 className="font-sans font-extrabold text-4xl lg:text-5xl text-[#0F172A] leading-[1.08] tracking-[-0.03em] mb-5">
            Industrial precision,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 24px rgba(47,67,183,0.22))",
              }}
            >
              applied to every gram.
            </span>
          </h2>

          {/* Technical divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-px bg-[#2F43B7]/40" />
            <div className="w-px h-3 bg-[#2F43B7]/30" />
            <div className="w-4 h-px bg-[#2F43B7]/15" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <p className="text-[#374151] text-base lg:text-[17px] leading-relaxed max-w-xl">
              JPLC Engineering bridges industrial manufacturing methodology with
              specialty coffee precision — designing, testing, and deploying systems
              that operate reliably at enterprise scale.
            </p>
            <div className="flex-shrink-0 flex items-center gap-3 px-4 py-2.5 rounded-sm border border-[#2F43B7]/25 bg-[#2F43B7]/5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2F43B7] animate-pulse" />
              <span className="text-[#2F43B7] text-xs tracking-[0.25em] uppercase font-semibold whitespace-nowrap">
                ISO Compliant Facility
              </span>
            </div>
          </div>
        </motion.div>
      </div>


      {/* â"€â"€ CAPABILITY CARDS â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 pt-10 pb-16 lg:pb-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.id}
              variants={cardVariant}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
              className="group relative rounded-sm p-6 overflow-hidden border cursor-default"
              style={{
                background: "#2941A8",
                borderColor: "rgba(255,255,255,0.12)",
                boxShadow: "0 4px 24px rgba(41,65,168,0.20)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.35)";
                el.style.boxShadow = "0 20px 60px rgba(41,65,168,0.50), 0 0 0 1px rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.12)";
                el.style.boxShadow = "0 4px 24px rgba(41,65,168,0.20)";
              }}
            >
              {/* Shimmer sweep on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-20" />

              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/60 via-white/30 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Top-right corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

              {/* Bottom animated bar */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-white/80 to-white/20 group-hover:w-full transition-all duration-500" />

              {/* Corner accent — bottom right */}
              <div className="absolute bottom-3 right-3 w-5 h-px bg-white/20 group-hover:bg-white/60 transition-colors duration-300" />
              <div className="absolute bottom-3 right-3 w-px h-5 bg-white/20 group-hover:bg-white/60 transition-colors duration-300" />

              {/* Top row */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="font-mono text-[10px] text-white/50 group-hover:text-white/90 transition-colors tracking-widest">
                  {cap.id}
                </span>
                <span
                  className="text-[9px] font-mono tracking-[0.25em] uppercase px-2.5 py-1 rounded-sm border transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/20"
                  style={{
                    color: "rgba(255,255,255,0.90)",
                    background: "rgba(255,255,255,0.12)",
                    borderColor: "rgba(255,255,255,0.20)",
                  }}
                >
                  {cap.tag}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px mb-4 transition-colors duration-300 relative z-10"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-[#2F43B7]/50 to-transparent transition-all duration-500" />
              </div>

              <h3 className="text-white text-sm font-bold mb-3 leading-snug tracking-tight group-hover:text-white transition-colors duration-300 relative z-10">
                {cap.title}
              </h3>
              <p className="text-white/65 text-xs leading-relaxed group-hover:text-white/85 transition-colors duration-300 relative z-10">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
