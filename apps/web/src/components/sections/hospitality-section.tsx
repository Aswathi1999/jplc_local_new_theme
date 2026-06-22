"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const solutions = [
  {
    title: "Wholesale Coffee Supplier & Specialty Coffee Beans Distribution",
    description:
      "Consistent stock, correct storage, delivered on schedule. No gaps, no surprises.",
    image: "/images/hospitality_1.jpg",
  },
  {
    title: "HoReCa Hospitality Coffee Solutions",
    description:
      "Full supply programmes for hotels, restaurants, and cafés — managed start to finish.",
    image: "/images/hospitality_2.jpg",
  },
  {
    title: "Office Coffee Solutions & Managed Beverage Programs",
    description:
      "Bean to machine to maintenance — your office coffee handled completely.",
    image: "/images/hospitality_3.jpg",
  },
  {
    title: "Corporate Commercial Coffee Solutions Deployment",
    description:
      "Enterprise-scale equipment, installation, and ongoing service. Infrastructure, not just a machine.",
    image: "/images/hospitality_4.jpg",
  },
  {
    title: "Event Coffee Solutions & Mobile Activations",
    description:
      "Specialty coffee, professionally set up and served — wherever the event is.",
    image: "/images/hospitality_5.jpg",
  },
  {
    title: "Inventory Forecasting & Coffee Bean Supplier Coordination",
    description:
      "Proactive stock management that eliminates shortages before they become your problem.",
    image: "/images/hospitality_6.jpg",
  },
];

const stats = [
  { value: "6", label: "Markets" },
  { value: "500+", label: "Partners" },
  { value: "24h", label: "Delivery" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
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
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function HospitalitySection() {
  return (
    <section
      id="hospitality"
      className="bg-[#F8FAFC] relative overflow-hidden py-12 lg:py-16"
    >
      {/* Subtle blue ambient glow */}
      <div className="absolute top-16 left-0 w-[480px] h-[480px] bg-[#2F43B7]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-[#4056D6]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* â"€â"€ HEADER â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#2F43B7]" />
            <p className="text-[14px] font-semibold tracking-[0.18em] uppercase text-[#2F43B7]">
              Hospitality & Supply Chain
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <h2 className="font-sans font-extrabold text-4xl lg:text-5xl xl:text-[52px] text-[#0F172A] leading-[1.08] tracking-[-0.03em]">
              Commercial Coffee Solutions{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                UAE
              </span>
            </h2>
            {/* <p className="text-[#374151] text-base leading-relaxed max-w-sm lg:text-right">
              Scaling coffee operations means managing supply continuity, equipment uptime, trained staff, and consistent product quality — simultaneously. JPLC hospitality coffee solutions are structured to handle all of it, giving operators a single, reliable infrastructure partner rather than a collection of disconnected vendors.
            </p> */}
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-[#2F43B7]/40 via-[#E5E7EB] to-transparent" />
        </motion.div>

        {/* â"€â"€ MAIN GRID  */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* â"€â"€ LEFT COLUMN  */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 relative"
          >
            {/* Pulse badge */}
            <div className="inline-flex items-center gap-3 border border-[#2F43B7]/30 rounded-sm px-5 py-3 mb-8 bg-white backdrop-blur-sm shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#2F43B7] animate-pulse" />
              <span className="text-[#0F172A] text-xs tracking-widest uppercase font-semibold">
                Active in 6 markets
              </span>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mb-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-[#E5E7EB] rounded-sm px-4 py-4 hover:border-[#2F43B7]/35 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                >
                  <p className="font-bold text-2xl text-[#2F43B7] mb-1 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[#64748B] text-[10px] tracking-widest uppercase leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Image collage */}
            <div className="relative pb-6 pr-4">
              {/* Main image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group relative h-[300px] lg:h-[340px] rounded-sm overflow-hidden shadow-lg"
              >
                <Image
                  src="/machine_images/image_new_19.jpg"
                  alt="Coffee supply chain operations"
                  fill
                  quality={85}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-[#0F172A]/40" />
                {/* Blue glow */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2F43B7]/20 to-transparent pointer-events-none" />

                {/* Inner callout */}
                <div className="absolute bottom-5 left-5">
                  <p className="text-[#6B8BFF] text-[10px] font-mono tracking-widest uppercase mb-1">
                    Supply Network
                  </p>
                  <p className="font-semibold text-white text-base leading-snug">
                    Precision logistics,
                    <br />
                    every delivery.
                  </p>
                </div>

                {/* Top-right label */}
                <div className="absolute top-4 right-4 bg-[#0F172A]/65 backdrop-blur-sm border border-[#2F43B7]/30 rounded-sm px-3 py-1.5">
                  <p className="text-white/75 text-[9px] font-mono tracking-widest uppercase">
                    B2B Operations
                  </p>
                </div>
              </motion.div>

              {/* Floating overlay card */}
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.88 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.65, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute -bottom-2 -right-2 w-36 h-28 rounded-sm overflow-hidden shadow-xl border-[3px] border-white"
              >
                <Image
                  src="/images/hospitality_7.jpg"
                  alt="HoReCa hospitality service"
                  fill
                  quality={80}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0F172A]/20" />
              </motion.div>

              {/* Decorative ring — blue */}
              <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full border-2 border-[#2F43B7]/40 bg-[#2F43B7]/8" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <a
                href="/hospitality-solutions"
                className="group flex-1 flex items-center justify-center gap-2.5 bg-[#2F43B7] text-white text-xs font-semibold tracking-widest uppercase px-6 py-4 rounded-sm hover:bg-[#4056D6] transition-colors duration-300 shadow-md shadow-[#2F43B7]/25"
              >
                <span>View Hospitality Solutions</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                >
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
                className="group flex-1 flex items-center justify-center gap-2.5 border border-[#0F172A]/20 text-[#0F172A] text-xs font-semibold tracking-widest uppercase px-6 py-4 rounded-sm hover:border-[#2F43B7] hover:text-[#2F43B7] transition-colors duration-300"
              >
                <span>Get in Touch</span>
              </a>
            </div>
          </motion.div>

          {/* â"€â"€ RIGHT COLUMN — Solution Cards â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-3 flex flex-col gap-3"
          >
            {solutions.map((solution, i) => (
              <motion.div
                key={solution.title}
                variants={cardVariant}
                className="group relative bg-white border border-[#E5E7EB] rounded-sm overflow-hidden hover:border-[#2F43B7]/40 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(47,67,183,0.12)] transition-all duration-300"
              >
                <div className="flex items-stretch">
                  {/* Image thumbnail */}
                  <div className="relative w-[110px] flex-shrink-0 overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      quality={75}
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/55 to-[#0F172A]/25 group-hover:from-[#0F172A]/30 group-hover:to-[#0F172A]/10 transition-all duration-400" />
                    {/* Blue glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2F43B7]/0 to-[#2F43B7]/0 group-hover:from-[#2F43B7]/15 group-hover:to-transparent transition-all duration-500" />
                    {/* Vertical blue line on image edge */}
                    <div className="absolute top-0 right-0 w-[2px] h-0 bg-[#2F43B7] group-hover:h-full transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 px-5 py-4 relative min-w-0">
                    {/* Animated bottom bar — blue */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#2F43B7] group-hover:w-full transition-all duration-500" />

                    {/* Arrow icon */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="#2F43B7"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <span className="text-[#94A3B8] font-mono text-[10px] block mb-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[#0F172A] text-sm font-semibold mb-1.5 leading-snug group-hover:text-[#2F43B7] transition-colors duration-300 pr-6">
                      {solution.title}
                    </h3>
                    <p className="text-[#64748B] text-xs leading-relaxed pr-7">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
