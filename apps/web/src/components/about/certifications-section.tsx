"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const certifications = [
  {
    label: "HACCP",
    sub: "Hazard Analysis",
    img: "/certifications/hccp_logo.jpg",
  },
  {
    label: "ISO 22000",
    sub: "Food Safety Mgmt",
    img: "/certifications/iso-22000.jpg",
  },
  { label: "SCA", sub: "Specialty Coffee Assoc.", img: "/sca.png" },
  { label: "DMCC", sub: "Dubai Free Zone", img: "/certifications/dmcc.jpg" },
];

export function CertificationsSection() {
  return (
    <section className="relative bg-[#F8FAFC] overflow-hidden py-10 lg:py-14">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,67,183,1) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F6BFF]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#2F43B7]" />
            <p className="text-[14px] font-semibold tracking-[0.18em] uppercase text-[#2F43B7]">
              Certifications & Standards
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="font-extrabold text-4xl lg:text-5xl text-[#0F172A] tracking-[-0.03em] leading-[1.08] max-w-xl">
              Recognised by the{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                world&apos;s top standards.
              </span>
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed max-w-sm lg:text-right font-light">
              Every JPLC process is built against the most rigorous food-safety,
              quality, and specialty coffee frameworks in the industry.
            </p>
          </div>
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 h-px bg-gradient-to-r from-[#2F43B7]/45 via-[#E5E7EB] to-transparent"
          />
        </motion.div>

        {/* Certification logo cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {certifications.map(({ label, sub, img }) => (
            <motion.div
              key={label}
              variants={itemVariant}
              className="group flex flex-col items-center gap-4 bg-white border border-[#E5E7EB] rounded-2xl px-6 py-8 hover:border-[#2F43B7]/40 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(47,67,183,0.10)] transition-all duration-300 cursor-default"
            >
              <div className="w-32 h-24 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={img}
                  alt={label}
                  width={120}
                  height={90}
                  className="object-contain w-full h-full rounded-2xl"
                />
              </div>
              <div className="text-center">
                <p className="text-[#0F172A] text-[12px] font-bold tracking-wide leading-snug">
                  {label}
                </p>
                <p className="text-[#94A3B8] text-[10px] tracking-wide mt-1 leading-snug">
                  {sub}
                </p>
              </div>
              <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#2F43B7] to-[#4F6BFF] transition-all duration-300 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
