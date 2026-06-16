"use client";

import { motion } from "framer-motion";

const items = [
  {
    num: "01",
    title: "Espresso Machines — Commercial & Prosumer Grade",
    body: "Espresso machines for every commercial application — single group through to high-volume multi-group configurations for busy café and hotel environments. Machine selection is matched to the volume, workflow, and skill level of the operation — not pushed toward the highest margin unit. As an espresso machine supplier UAE, JPLC works with leading manufacturers and handles import, warranty management, and local technical support in-house.",
    image: "/coffee_machine/posumer grade.jpg",
    alt: "Commercial espresso machine engineering — JPLC UAE",
  },
  {
    num: "02",
    title: "Coffee Machines for Cafés UAE — Full Setup & Workflow Design",
    body: "Coffee machines for cafés UAE isn't just equipment selection — it's workflow. Bar layout, grinder positioning, water filtration integration, and extraction consistency across a full service day. JPLC approaches café equipment setup as an operational design problem, not a product sale. Bean-to-cup, traditional espresso, batch brew, and filter systems — matched to the concept, the team, and the volume.",
    image: "/coffee_machine/cafe_machine.jpg",
    alt: "Coffee machines for cafés UAE — full setup and workflow",
  },
  {
    num: "03",
    title: "Coffee Machines for Hotels UAE & Hospitality Groups",
    body: "Hotel coffee operations are more complex than a single machine. Lobby café, restaurant breakfast service, in-room systems, banqueting, executive lounge, each space has different volume, format, and consistency requirements. Coffee machines for hotels UAE need to perform reliably across multiple outlets, managed by staff with varying skill levels, through long service periods. JPLC supplies and services hotel coffee equipment programmes with account management built around hospitality operational realities.",
    image: "/engineering_image.jpg",
    alt: "Hotel coffee equipment installation UAE",
  },
  {
    num: "04",
    title: "Coffee Machines for Restaurants UAE & F&B Operations",
    body: "Restaurants need professional coffee machines that deliver consistent espresso through a dinner service without requiring a dedicated barista to babysit the equipment. JPLC supplies coffee machine solutions matched to the kitchen workflow — reliable, low-maintenance, and consistent under pressure. Technical servicing and parts support managed locally, not through a distant manufacturer warranty process.",
    image: "/coffee_machine/coffee_machine_restaurant.jpg",
    alt: "Restaurant coffee machine solutions UAE",
  },
  {
    num: "05",
    title: "Coffee Grinders & Ancillary Coffee Equipment",
    body: "The grinder is the most underrated variable in commercial espresso. Coffee grinders set particle size distribution, which determines extraction rate, which determines flavour. A mismatched or poorly calibrated grinder undoes the work of every other part of the setup. JPLC supplies commercial coffee grinders and ancillary coffee equipment — water filtration, knock boxes, tamping stations, batch brewers — selected and calibrated to work as a complete system, not as individual products.",
    image: "/coffee_machine/coffee_grinders.jpg",
    alt: "Commercial coffee grinders and ancillary equipment",
  },
  {
    num: "06",
    title: "Technical Services & Coffee Equipment Supplier UAE Support",
    body: "Supply is the starting point. Ongoing performance is what actually matters. As a full-service coffee equipment supplier UAE, JPLC provides installation, commissioning, calibration, preventive maintenance, and emergency technical support for all equipment we supply, and for existing equipment from other suppliers. IoT diagnostics, grinder calibration, group head servicing, water system checks — managed on a schedule before faults develop, not after.",
    image: "/coffee_machine/technical_services.jpg",
    alt: "Coffee equipment technical services UAE — JPLC engineering",
  },
];

export function CommercialMachinesProducts() {
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
          <h2 className="font-black text-[#0F172A] text-4xl lg:text-5xl xl:text-[56px] leading-[1.03] tracking-[-0.03em]">
            What — Commercial Coffee Machines
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              &amp; Coffee Equipment Supply
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
