"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const offerings = [
  {
    id: "01",
    title: "Cafe Concept Creation",
    description:
      "From brand identity and spatial design to beverage menu curation — we build café concepts that are operationally ready from day one.",
    image: "/cafe_image.jpg",
  },
  {
    id: "02",
    title: "Beverage R&D & Menu Engineering",
    description:
      "Structured recipe development and menu innovation aligned with your brand positioning, target market, and commercial objectives.",
    image: "/bevarage.jpg",
  },
  {
    id: "03",
    title: "Packaging & Retail Product Development",
    description:
      "Barrier packaging, degassing valve integration, shelf-life validation, and consumer-ready presentation — built to perform on shelf and protect quality in transit.",
    image: "/packaging.jpg",
  },
  {
    id: "04",
    title: "Capsule Coffee & RTD Beverage Solutions",
    description:
      "Nespresso-compatible and proprietary capsule systems, cold brew formulation, and RTD development from concept through to co-pack.",
    image: "/capsule_coffee.jpg",
  },
  {
    id: "05",
    title: "Contract Manufacturing Partnerships",
    description:
      "Scalable OEM and white-label production capacity for roasters, food service operators, and brands that need reliable output without building their own facility.",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900&q=85&auto=format&fit=crop",
  },
  {
    id: "06",
    title: "International Sourcing & Supplier Management",
    description:
      "Global green coffee procurement, supplier qualification, traceability management, and import/export coordination across origin markets.",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=900&q=85&auto=format&fit=crop",
  },
  {
    id: "07",
    title: "Brand Commercialization Strategies",
    description:
      "Go-to-market planning, retail channel development, and brand positioning support — turning a production-ready product into a market-ready business.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=85&auto=format&fit=crop",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: "easeOut" },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: "easeOut" },
  },
};

const contentFade: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.2, ease: "easeOut" },
  },
};

export function ManufacturingSection() {
  return (
    <section
      id="manufacturing"
      className="relative bg-[#F8FAFC] overflow-hidden"
    >
      {/* â"€â"€ BACKGROUND TEXTURE â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,67,183,1) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-[#2F43B7] opacity-[0.04] blur-[130px] pointer-events-none" />

      {/* â"€â"€ CINEMATIC HEADER â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 pt-12 lg:pt-16 pb-6">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#2F43B7]" />
            <p className="text-[#4F6BFF] text-[14px] font-semibold tracking-[0.38em] uppercase">
              Manufacturing & Brand Development
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="font-sans font-extrabold text-4xl lg:text-5xl xl:text-[52px] text-[#0F172A] leading-[1.08] tracking-[-0.03em] max-w-lg">
              Private Label Coffee Manufacturing UAE —{" "}
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
                Production Infrastructure for Ambitious Brands
              </span>
            </h2>

            <div className="max-w-sm">
              <p className="text-[#374151] text-base lg:text-[17px] leading-relaxed mb-5">
                Our manufacturing arm operates as an invisible backbone for
                brands that demand quality without building their own production
                facilities.
              </p>
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-sm border border-[#2F43B7]/25 bg-[#2F43B7]/5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2F43B7] animate-pulse" />
                <span className="text-[#2F43B7] text-xs tracking-[0.25em] uppercase font-semibold whitespace-nowrap">
                  DMCC Certified Facility
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Animated gradient divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 h-px bg-gradient-to-r from-[#2F43B7]/50 via-[#E5E7EB] to-transparent"
        />
      </div>

      {/* â"€â"€ ALTERNATING OFFERING ROWS â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 pb-12 lg:pb-16">
        {offerings.map((item, i) => {
          const imgLeft = i % 2 === 0;
          return (
            <div
              key={item.id}
              className={`flex flex-col ${imgLeft ? "lg:flex-row" : "lg:flex-row-reverse"} items-stretch border-b border-[#E5E7EB]/80 last:border-b-0`}
            >
              {/* â"€â"€ Image panel â"€â"€ */}
              <motion.div
                variants={imgLeft ? slideLeft : slideRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="group relative lg:w-[58%] h-[260px] lg:h-[300px] overflow-hidden flex-shrink-0"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  quality={85}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />

                {/* Directional overlay */}
                <div
                  className={`absolute inset-0 ${
                    imgLeft
                      ? "bg-gradient-to-r from-[#0F172A]/35 via-transparent to-[#F8FAFC]/45"
                      : "bg-gradient-to-l from-[#0F172A]/35 via-transparent to-[#F8FAFC]/45"
                  }`}
                />
                {/* Bottom fade — stronger */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-[#0F172A]/15 to-transparent" />
                {/* Blue glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F43B7]/0 to-transparent group-hover:from-[#2F43B7]/18 transition-all duration-500" />

                {/* Edge accent line */}
                <div
                  className={`absolute top-0 bottom-0 ${imgLeft ? "right-0" : "left-0"} w-[2px] h-0 group-hover:h-full bg-gradient-to-b from-transparent via-[#4F6BFF]/70 to-transparent transition-all duration-600`}
                />

                {/* Floating label */}
                <div
                  className={`absolute bottom-4 ${imgLeft ? "right-4" : "left-4"} rounded-sm px-3 py-1.5 border border-[#2F43B7]/25 group-hover:border-[#4F6BFF]/50 transition-all duration-300`}
                  style={{
                    background: "rgba(15,23,42,0.75)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <p className="text-[#6B8BFF] text-[9px] font-mono tracking-widest uppercase">
                    {item.id} / 07
                  </p>
                </div>

                {/* Corner bracket */}
                <div
                  className={`absolute top-4 ${imgLeft ? "left-4" : "right-4"} w-5 h-px bg-[#4F6BFF]/50`}
                />
                <div
                  className={`absolute top-4 ${imgLeft ? "left-4" : "right-4"} w-px h-5 bg-[#4F6BFF]/50`}
                />
              </motion.div>

              {/* â"€â"€ Content panel â"€â"€ */}
              <motion.div
                variants={contentFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className={`relative overflow-hidden flex flex-col justify-center py-10 ${
                  imgLeft ? "lg:pl-14 lg:pr-6" : "lg:pr-14 lg:pl-6"
                } min-h-[200px]`}
              >
                {/* Ghost number */}
                <span
                  className={`absolute bottom-0 ${imgLeft ? "right-0" : "left-0"} text-[#0F172A]/[0.035] font-sans font-black text-[150px] leading-none select-none pointer-events-none`}
                >
                  {item.id}
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-5 h-px bg-[#2F43B7]" />
                    <div className="w-px h-3 bg-[#2F43B7]/40" />
                    <span className="text-[#4F6BFF] text-[10px] font-mono tracking-[0.3em]">
                      {item.id}
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-2xl lg:text-[1.75rem] text-[#0F172A] leading-snug mb-4 max-w-xs tracking-[-0.015em]">
                    {item.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                  {/* Hover reveal underline */}
                  <div className="mt-5 w-8 h-px bg-gradient-to-r from-[#2F43B7] to-[#4F6BFF]/50" />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
