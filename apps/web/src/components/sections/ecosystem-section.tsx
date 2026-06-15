"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const pillars = [
  {
    id: "01",
    title: "Green Coffee Sourcing & Procurement",
    description:
      "Direct-trade sourcing backed by Q-grading and single-origin traceability. Every lot is sensory-evaluated before it enters production. We work directly with origin farms so there's full visibility into where your specialty coffee beans come from — and why they taste the way they do.",
    image:
      "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=700&q=85&auto=format&fit=crop",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
        />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Coffee Roasting & Production Engineering",
    description:
      "Roast profile development, batch consistency controls, and private label coffee manufacturing UAE-wide for brands that demand repeatable output at scale. Whether the requirement is a signature house blend, a single-origin programme, or an OEM private label range — we build it to specification.",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=700&q=85&auto=format&fit=crop",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 18.657A8 8 0 016.343 7.343M12 4v1m6 2l-.707.707M20 12h-1M17 17l-.707-.707M12 19v1M7 17l.707-.707M5 12H4M7 7l.707.707"
        />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Research & Development",
    description:
      "Extraction science, brew optimisation, flavour profiling, and new beverage formulation — all developed in-house. This is what keeps JPLC's products and systems ahead of market standards.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=700&q=85&auto=format&fit=crop",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Commercial Coffee Machine Supplier & Technical Services",
    description:
      "PID-controlled extraction systems, IoT diagnostics, grinder calibration, and preventive maintenance infrastructure. As a full-service coffee equipment supplier, JPLC doesn't just deliver machines — we engineer, calibrate, and service them. A system that drifts by a few degrees costs quality on every shot pulled.",
    image: "/coffee_machine_engg.jpg",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Wholesale Coffee Supplier & Distribution",
    description:
      "Structured wholesale coffee supplier infrastructure across regional and international markets. Temperature-controlled logistics, inventory forecasting, and supply continuity designed specifically for HoReCa operators.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=85&auto=format&fit=crop",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </svg>
    ),
  },
  {
    id: "06",
    title: "Hospitality Coffee Solutions & Retail Operations",
    description:
      "From hotel F&B programmes to corporate campuses and managed café operations — JPLC deploys coffee programmes that run with consistency and without constant intervention. Office beverage systems, event activations, and multi-site account management included.",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=700&q=85&auto=format&fit=crop",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    id: "07",
    title: "Private Label Coffee Supplier & Brand Manufacturing",
    description:
      "End-to-end private label coffee manufacturing UAE capabilities — capsule development, RTD formulations, retail packaging, and contract manufacturing partnerships. Your brand identity, backed by our production facility.",
    image: "/manufacturing.jpg",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    id: "08",
    title: "Barista Training & Coffee Education",
    description:
      "Professional barista training and certification Dubai and beyond — covering brew science, sensory evaluation, roasting workshops, and full hospitality coffee operations training. Strong programmes are built on people who understand the craft.",
    image: "/coffee_training.jpg",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    ),
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardAnim: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      className="relative pt-8 pb-20 lg:pt-10 lg:pb-28 bg-[#F8FAFC] overflow-hidden"
    >
      {/* â"€â"€ BACKGROUND GRID TEXTURE â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,67,183,1) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-[#2F43B7] opacity-[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#4056D6] opacity-[0.04] blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        {/* â"€â"€ HEADER ROW â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-20">
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
              <p className="text-[#4F6BFF] text-[14px] font-semibold tracking-[0.38em] uppercase">
                The Ecosystem
              </p>
            </div>

            <h2 className="font-sans font-extrabold text-4xl lg:text-5xl text-[#0F172A] leading-[1.08] tracking-[-0.03em] mb-6">
              Eight Verticals.{" "}
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
                One Integrated Coffee Solutions Operation.
              </span>
            </h2>

            {/* Technical divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#2F43B7]/40" />
              <div className="w-px h-3 bg-[#2F43B7]/30" />
              <div className="w-4 h-px bg-[#2F43B7]/15" />
            </div>

            <p className="text-[#374151] text-base lg:text-[17px] leading-relaxed max-w-md">
              Most coffee suppliers do one or two things well. JPLC does eight —
              and every vertical connects to the next.
            </p>
          </motion.div>

          {/*FEATURED IMAGE*/}
          <motion.div
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-[280px] lg:h-[340px] rounded-sm overflow-hidden group"
          >
            {/* Ring border */}
            <div className="absolute inset-0 rounded-sm ring-1 ring-[#2F43B7]/20 z-20 pointer-events-none group-hover:ring-[#2F43B7]/45 transition-all duration-500" />

            <Image
              src="/eco_sysytem_image.jpg"
              alt="JPLC coffee ecosystem operations"
              fill
              quality={85}
              className="object-cover object-center transition-transform duration-[6s] ease-out group-hover:scale-[1.04]"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/30 to-[#0F172A]/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#2F43B7]/20 to-transparent pointer-events-none" />

            {/* Blueprint grid on image */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(79,107,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,107,255,1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 40%, black 70%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 40%, black 70%, transparent 100%)",
              }}
            />

            {/* Corner brackets */}
            <div className="absolute top-4 left-4 w-6 h-px bg-[#4F6BFF]/60 z-10" />
            <div className="absolute top-4 left-4 w-px h-6 bg-[#4F6BFF]/60 z-10" />
            <div className="absolute top-4 right-4 w-6 h-px bg-[#4F6BFF]/60 z-10" />
            <div className="absolute top-4 right-4 w-px h-6 bg-[#4F6BFF]/60 z-10" />

            {/* Glass caption strip */}
            <div
              className="absolute bottom-0 left-0 right-0 px-6 py-4 flex items-center justify-between z-10"
              style={{
                background: "rgba(15,23,42,0.65)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-4 h-px bg-[#4F6BFF]" />
                <span className="text-white/80 text-xs tracking-[0.25em] uppercase font-medium">
                  Global Operations
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4F6BFF] animate-pulse" />
                <span className="text-white/40 text-[10px] tracking-[0.25em] uppercase">
                  Active
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* â"€â"€ PILLAR CARDS GRID â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              variants={cardAnim}
              className="group relative rounded-sm overflow-hidden cursor-default"
              style={{ height: "340px" }}
            >
              {/* Border ring */}
              <div className="absolute inset-0 rounded-sm ring-1 ring-white/8 group-hover:ring-[#2F43B7]/50 transition-all duration-500 z-20 pointer-events-none" />

              {/* Hover lift shadow */}
              <div
                className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                style={{
                  boxShadow:
                    "0 20px 60px rgba(47,67,183,0.25), 0 0 0 1px rgba(79,107,255,0.2)",
                }}
              />

              {/* Background image */}
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                quality={80}
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.07]"
              />

              {/* â"€â"€ OVERLAY STACK â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
              {/* Top fade — very light, just enough for the icon */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/20 via-transparent to-transparent" />
              {/* Bottom gradient — light at rest, for title legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-transparent" />
              {/* Blue glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#2F43B7]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* â"€â"€ TOP: icon + number â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
              <div className="absolute top-5 left-5 right-5 z-10 flex items-start justify-between">
                <div className="w-9 h-9 rounded-sm flex items-center justify-center text-[#6B8BFF] border border-white/15 bg-white/8 backdrop-blur-sm group-hover:border-[#4F6BFF]/50 group-hover:bg-[#2F43B7]/25 transition-all duration-400">
                  {pillar.icon}
                </div>
                <span className="font-mono text-[10px] font-medium text-white/25 group-hover:text-[#6B8BFF]/90 transition-colors duration-300 tracking-widest">
                  {pillar.id}
                </span>
              </div>

              {/* â"€â"€ DEFAULT: title only â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 group-hover:opacity-0 group-hover:translate-y-1 transition-all duration-300">
                <h3
                  className="text-white text-[13px] font-bold leading-snug tracking-tight"
                  style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
                >
                  {pillar.title}
                </h3>
              </div>

              {/* â"€â"€ HOVER: full glass panel â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
              <div
                className="absolute bottom-0 left-0 right-0 z-10 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.82) 100%)",
                  backdropFilter: "blur(14px)",
                  borderTop: "1px solid rgba(79,107,255,0.15)",
                }}
              >
                <h3 className="text-white text-[13px] font-bold leading-snug mb-2 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-slate-300 text-[11.5px] leading-relaxed line-clamp-3">
                  {pillar.description}
                </p>
                <div className="mt-3 w-10 h-px bg-[#4F6BFF]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
