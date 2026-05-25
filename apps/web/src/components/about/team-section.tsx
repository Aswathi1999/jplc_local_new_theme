"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const team = [
  {
    name: "Ahmed Al-Rashid",
    role: "Founder & CEO",
    bio: "20 years across specialty coffee, food manufacturing, and enterprise infrastructure. Pioneer of JPLC's vertically integrated coffee ecosystem model.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=480&q=85&auto=format&fit=crop&crop=faces",
  },
  {
    name: "Sara Mansouri",
    role: "Head of Coffee Operations",
    bio: "Q-grader and specialty coffee expert with deep expertise in green procurement, sensory evaluation, and production roasting standards.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=480&q=85&auto=format&fit=crop&crop=faces",
  },
  {
    name: "Dr. Khalid Ibrahim",
    role: "Director of R&D",
    bio: "PhD in Food Science. Leads JPLC's research agenda across extraction science, beverage innovation, and AI-assisted brewing systems.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=480&q=85&auto=format&fit=crop&crop=faces",
  },
  {
    name: "Lena Hoffmann",
    role: "Engineering Lead",
    bio: "Industrial engineer specialising in espresso machine systems, thermodynamic optimisation, and IoT-enabled diagnostic infrastructure.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=480&q=85&auto=format&fit=crop&crop=faces",
  },
  {
    name: "Marcus Chen",
    role: "Hospitality Operations Manager",
    bio: "15 years in HoReCa operations. Architect of JPLC's B2B supply chain and corporate beverage infrastructure programmes.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=480&q=85&auto=format&fit=crop&crop=faces",
  },
];

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function TeamSection() {
  return (
    <section className="bg-[#F8FAFC] relative overflow-hidden py-16 lg:py-20">
      {/* Blueprint grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,67,183,1) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#2F43B7] opacity-[0.04] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-0"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#2F43B7]" />
            <p className="text-[#2F43B7] text-[11px] font-semibold tracking-[0.45em] uppercase">
              Leadership
            </p>
          </div>

          {/* Heading */}
          <h2 className="font-extrabold text-4xl lg:text-5xl text-[#0F172A] tracking-[-0.03em] leading-[1.08] mb-3">
            The team behind{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              the ecosystem.
            </span>
          </h2>

          {/* Animated gradient divider */}
          <div className="mt-8 mb-14 h-px w-full bg-gradient-to-r from-[#2F43B7] via-[#2F43B7]/30 to-transparent" />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariant}
              className="group relative bg-white border border-[#E5E7EB] rounded-sm overflow-hidden hover:border-[#2F43B7]/40 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(47,67,183,0.12)] transition-all duration-300"
            >
              {/* Bottom hover bar */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#2F43B7] group-hover:w-full transition-all duration-500 z-10" />

              {/* Image area */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  quality={80}
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Base gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/75 via-[#0F172A]/20 to-transparent" />

                {/* Blue glow hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F43B7]/0 to-transparent group-hover:from-[#2F43B7]/20 transition-all duration-500" />

                {/* Role badge */}
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="inline-block bg-[#0F172A]/70 backdrop-blur-sm border border-[#2F43B7]/30 text-[#6B8BFF] text-[9px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-sm">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-5">
                <h3 className="text-[#0F172A] font-semibold text-base mb-0.5">
                  {member.name}
                </h3>
                <p className="text-[#2F43B7] text-[10px] font-mono tracking-widest uppercase mb-3">
                  {member.role}
                </p>
                <div className="h-px bg-[#E5E7EB] mb-3" />
                <p className="text-[#64748B] text-xs leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
