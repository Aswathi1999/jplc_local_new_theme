"use client";

import { motion } from "framer-motion";

const items = [
  {
    num: "01",
    title: "Preventive Maintenance",
    body: "Scheduled visits covering group head servicing, boiler checks, pressure calibration, and temperature profiling. Structured around machine type and volume — not a generic schedule applied to every account.",
    image: "/eqipment_service/coffee_machine_maintenance.jpg",
    alt: "Preventive coffee machine maintenance UAE — JPLC engineering",
  },
  {
    num: "02",
    title: "Repair & Fault Resolution",
    body: "Fault diagnosis, component replacement, and full recommissioning — handled by engineers who work on commercial equipment daily. Grinder faults, boiler failures, pump replacements, and electronic diagnostics managed in-house.",
    image: "/eqipment_service/Coffee_Machine_Repair_Fault_Resolution.jpg",
    alt: "Coffee machine repair and fault resolution UAE — JPLC",
  },
  {
    num: "03",
    title: "Commercial Service — Dubai & UAE",
    body: "Installation commissioning, periodic servicing, calibration, and emergency response across the UAE. Local engineering team, direct accountability, no subcontracting. The same team that knows the account always responds.",
    image: "/eqipment_service/service.jpg",
    alt: "Commercial coffee machine service Dubai UAE — JPLC",
  },
  {
    num: "04",
    title: "Espresso Machine Repair & Calibration",
    body: "Mechanical, thermal, and electronic fault resolution across major commercial brands. Post-repair, extraction parameters are fully recalibrated — temperature, pressure, flow rate. The machine doesn't just work again, it works correctly.",
    image: "/eqipment_service/Espresso_Machine_Repair_Calibration.jpg",
    alt: "Espresso machine repair and calibration UAE — JPLC",
  },
  {
    num: "05",
    title: "Grinders, Filtration & Ancillary Equipment",
    body: "Grinder servicing, burr replacement, water filtration checks, and scale management. Grinder performance and water quality affect extraction directly — both degrade gradually until the product is noticeably worse.",
    image: "/eqipment_service/Coffee_Equipmet_Maintenance — Grinders.jpg",
    alt: "Coffee equipment maintenance grinders filtration UAE — JPLC",
  },
  {
    num: "06",
    title: "Remote Diagnostics & IoT Monitoring",
    body: "Real-time performance monitoring, remote fault identification, and usage data that informs maintenance scheduling. Flags issues before they require a physical call-out — essential for multi-site operations.",
    image: "/eqipment_service/Coffee-Machine-Support-Services.jpg",
    alt: "Coffee machine support services UAE IoT monitoring — JPLC",
  },
];

export function EquipmentServiceServices() {
  return (
    <section className="relative bg-[#F8FAFC] overflow-hidden">
      {/* Blueprint line grid — very subtle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,67,183,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Corner glow — top right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(47,67,183,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        {/* ─── Section heading ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="py-10 lg:py-14"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-[2px] rounded-full bg-[#2F43B7]" />
            <div className="w-3 h-[2px] rounded-full bg-[#4F6BFF]/40" />
            <div className="w-1.5 h-[2px] rounded-full bg-[#4F6BFF]/15" />
          </div>
          <h2 className="font-sans font-extrabold text-[#0F172A] text-4xl lg:text-5xl leading-[1.08] tracking-[-0.03em]">
            Coffee Machine Maintenance &amp;{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Repair Services
            </span>
          </h2>
        </motion.div>

        {/* ─── Editorial items ─── */}
        <div className="pb-12 lg:pb-16">
          {items.map((item, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <div key={item.num}>
                {/* Thin top rule */}
                <div className="w-full h-px bg-[#E2E8F0]" />

                <motion.div
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[420px] lg:min-h-[480px] ${
                    imageLeft ? "" : "lg:[&>*:first-child]:order-last"
                  }`}
                >
                  {/* ── Image panel ── */}
                  <div className="relative overflow-hidden group">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: imageLeft
                          ? "linear-gradient(90deg, rgba(15,23,42,0.18) 0%, transparent 50%), linear-gradient(180deg, transparent 55%, rgba(15,23,42,0.38) 100%)"
                          : "linear-gradient(270deg, rgba(15,23,42,0.18) 0%, transparent 50%), linear-gradient(180deg, transparent 55%, rgba(15,23,42,0.38) 100%)",
                      }}
                    />
                    {/* Number watermark on image */}
                    <div className="absolute top-6 left-6">
                      <span
                        className="font-black text-white/20 leading-none select-none"
                        style={{ fontSize: "72px" }}
                      >
                        {item.num}
                      </span>
                    </div>
                  </div>

                  {/* ── Text panel ── */}
                  <div className="bg-white flex flex-col justify-center px-8 py-12 lg:px-14 lg:py-16 relative overflow-hidden">
                    {/* Faint number watermark */}
                    <span
                      className="absolute bottom-0 right-4 font-black leading-none select-none pointer-events-none"
                      style={{
                        fontSize: "160px",
                        color: "rgba(47,67,183,0.035)",
                        lineHeight: 0.85,
                      }}
                    >
                      {item.num}
                    </span>

                    <div className="relative z-10 max-w-lg">
                      {/* Number + rule */}
                      <div className="flex items-center gap-3 mb-6">
                        <span
                          className="text-[11px] font-bold tracking-[0.4em] uppercase"
                          style={{ color: "#4F6BFF" }}
                        >
                          {item.num}
                        </span>
                        <div className="h-px w-12 bg-[#2F43B7]/20" />
                        <div className="h-px w-4 bg-[#2F43B7]/10" />
                      </div>

                      {/* Title */}
                      <h3 className="font-extrabold text-[#0F172A] text-xl lg:text-[22px] leading-snug tracking-tight mb-6">
                        {item.title}
                      </h3>

                      {/* Accent line */}
                      <div
                        className="w-12 h-[3px] rounded-full mb-6"
                        style={{
                          background:
                            "linear-gradient(90deg, #2F43B7 0%, #4F6BFF 100%)",
                        }}
                      />

                      {/* Body */}
                      <p className="text-[#64748B] text-[15px] leading-[1.8]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
          {/* Bottom rule */}
          <div className="w-full h-px bg-[#E2E8F0]" />
        </div>
      </div>
    </section>
  );
}
