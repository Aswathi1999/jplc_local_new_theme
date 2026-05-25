"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const infoCards = [
  {
    id: "01",
    label: "Office Location",
    title: "DMCC Coffee Centre",
    lines: ["Dubai Multi Commodities Centre", "Dubai, United Arab Emirates"],
    icon: <LocationIcon />,
  },
  {
    id: "02",
    label: "Email",
    title: "hello@jplc.com",
    lines: ["General & partnership enquiries", "Response within 24 hours"],
    icon: <EmailIcon />,
  },
  {
    id: "03",
    label: "Phone",
    title: "+971 4 XXX XXXX",
    lines: ["Mon – Fri, 9am – 6pm GST", "Enterprise support available"],
    icon: <PhoneIcon />,
  },
];

const miniStats = [
  { value: "24h", label: "Response" },
  { value: "30+", label: "Markets" },
  { value: "B2B", label: "Enterprise" },
];

const serviceTags = ["Partnership", "Training", "Hospitality Supply", "Engineering", "Sourcing"];

export function ContactInfo() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col gap-4"
    >
      {/* Info cards */}
      {infoCards.map((card) => (
        <motion.div
          key={card.id}
          variants={fadeUp}
          className="group relative overflow-hidden rounded-sm bg-white border border-[#E5E7EB] p-6 hover:-translate-y-0.5 transition-all duration-300 hover:border-[#2F43B7]/40 hover:shadow-[0_8px_32px_rgba(47,67,183,0.10)]"
        >
          {/* Shimmer */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#2F43B7]/[0.04] to-transparent pointer-events-none" />

          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#2F43B7]/50 via-[#4F6BFF]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="flex items-start gap-4 relative z-10">
            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-[#2F43B7]/8 border border-[#2F43B7]/20 flex items-center justify-center text-[#2F43B7] group-hover:bg-[#2F43B7]/15 group-hover:border-[#2F43B7]/40 group-hover:shadow-[0_0_16px_rgba(47,67,183,0.15)] transition-all duration-300">
              {card.icon}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[#2F43B7]/40 text-[9px] font-mono tracking-widest">{card.id}</span>
                <span className="text-[#2F43B7] text-[10px] font-mono tracking-[0.25em] uppercase">{card.label}</span>
              </div>
              <p className="text-[#0F172A] text-sm font-semibold mb-1.5">{card.title}</p>
              {card.lines.map((line, i) => (
                <p key={i} className="text-[#64748B] text-xs leading-relaxed">{line}</p>
              ))}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Services handled */}
      <motion.div
        variants={fadeUp}
        className="rounded-sm bg-white border border-[#E5E7EB] p-6"
      >
        <p className="text-[#2F43B7] text-[10px] font-mono tracking-[0.3em] uppercase mb-4">We Handle</p>
        <div className="flex flex-wrap gap-2">
          {serviceTags.map((tag) => (
            <span
              key={tag}
              className="border border-[#2F43B7]/20 text-[#2F43B7] text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-sm hover:border-[#2F43B7]/50 hover:bg-[#2F43B7]/5 transition-colors duration-200 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Mini stats */}
      <motion.div variants={fadeUp} className="grid grid-cols-3 gap-3">
        {miniStats.map((stat) => (
          <div
            key={stat.label}
            className="group relative overflow-hidden rounded-sm bg-white border border-[#E5E7EB] p-4 text-center hover:border-[#2F43B7]/35 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#2F43B7]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="font-bold text-xl text-[#2F43B7] mb-0.5 relative z-10">{stat.value}</p>
            <p className="text-[#64748B] text-[10px] tracking-widest uppercase relative z-10">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
