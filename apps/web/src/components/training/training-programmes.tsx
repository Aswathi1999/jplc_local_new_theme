"use client";

import { motion } from "framer-motion";

const programmes = [
  {
    num: "01",
    title: "Introduction to Specialty Coffee",
    body: "Origins, processing methods, and the flavour journey from bean to cup — the context that makes everything else make sense.",
    image: "/training/Coffee-tr-4.webp",
    alt: "Introduction to specialty coffee — JPLC barista training UAE",
  },
  {
    num: "02",
    title: "Coffee Beans & Grind Calibration",
    body: "Choosing the right grind size, calibrating grinders, and maintaining flavour consistency across a full service day. The grinder is where most baristas have the least understanding and the most impact.",
    image: "/training/Coffee-tr-7.webp",
    alt: "Coffee beans and grind calibration — JPLC barista training UAE",
  },
  {
    num: "03",
    title: "Espresso Fundamentals",
    body: "Extraction mechanics, dosing, tamping, yield control, and troubleshooting — understanding what a correctly pulled shot looks and tastes like, and how to get back there when it drifts.",
    image: "/training/Coffee-tr-8.webp",
    alt: "Espresso fundamentals barista training — JPLC UAE",
  },
  {
    num: "04",
    title: "Milk Texturing & Latte Art Basics",
    body: "Silky microfoam, correct milk temperatures, and simple latte art shapes. The technical side of milk work that most baristas pick up informally and never fully correct.",
    image: "/training/Coffee-tr-10.webp",
    alt: "Milk texturing and latte art barista training — JPLC UAE",
  },
  {
    num: "05",
    title: "Machine & Grinder Operation",
    body: "Safe, proper use of espresso machines, grinders, boilers, and essential café tools — operated correctly, not just switched on and left running.",
    image: "/training/we.webp",
    alt: "Machine and grinder operation barista training — JPLC UAE",
  },
  {
    num: "06",
    title: "Cleaning & Maintenance",
    body: "Daily, mid-shift, and closing routines that keep equipment performing at spec. A machine that isn't cleaned properly doesn't extract properly — this is non-negotiable.",
    image: "/training/Coffee-tr-4.webp",
    alt: "Cleaning and maintenance barista training — JPLC UAE",
  },
  {
    num: "07",
    title: "Customer Interaction & Workflow",
    body: "Service etiquette, order flow, and the speed-quality balance that determines whether a busy service runs smoothly or falls apart.",
    image: "/training/Coffee-tr-7.webp",
    alt: "Customer interaction and workflow barista training — JPLC UAE",
  },
];

interface ProgrammeCardProps {
  item: (typeof programmes)[0];
  imageHeight: string;
  delay?: number;
}

function ProgrammeCard({ item, imageHeight, delay = 0 }: ProgrammeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.72, delay, ease: "easeOut" }}
      className="group relative bg-white rounded-2xl overflow-hidden flex flex-col h-full"
      style={{
        border: "1px solid rgba(47,67,183,0.08)",
        boxShadow: "0 2px 20px rgba(47,67,183,0.06)",
      }}
    >
      {/* Blue top accent — on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(90deg, #2F43B7 0%, #4F6BFF 100%)",
        }}
      />

      {/* Image */}
      <div className={`relative overflow-hidden flex-shrink-0 ${imageHeight}`}>
        <img
          src={item.image}
          alt={item.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 55%, rgba(255,255,255,0.18) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7 lg:p-8 relative overflow-hidden">
        <div className="relative z-10 flex flex-col flex-1">
          <h3 className="font-extrabold text-[#0F172A] text-[17px] lg:text-[19px] leading-snug tracking-tight mb-4 transition-colors duration-200 group-hover:text-[#2F43B7]">
            {item.title}
          </h3>
          <div
            className="w-10 h-[3px] rounded-full mb-5"
            style={{
              background: "linear-gradient(90deg, #2F43B7 0%, #4F6BFF 100%)",
            }}
          />
          <p className="text-[#64748B] text-[14px] leading-[1.82] flex-1">
            {item.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function TrainingProgrammes() {
  return (
    <section id="programmes" className="relative bg-[#F8FAFC] overflow-hidden">
      {/* Blueprint line grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,67,183,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(47,67,183,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        {/* Heading */}
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
          <h2 className="font-black text-[#0F172A] text-4xl lg:text-5xl xl:text-[56px] leading-[1.03] tracking-[-0.03em] mb-3">
            Barista Courses &amp;
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Training Programmes
            </span>
          </h2>
          <p className="text-[#64748B] text-[15px]">
            What this programme covers
          </p>
        </motion.div>

        {/* Card grid */}
        <div className="pb-12 lg:pb-16 space-y-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            <ProgrammeCard
              item={programmes[0]}
              imageHeight="h-[240px]"
              delay={0}
            />
            <ProgrammeCard
              item={programmes[1]}
              imageHeight="h-[240px]"
              delay={0.08}
            />
            <ProgrammeCard
              item={programmes[2]}
              imageHeight="h-[240px]"
              delay={0.16}
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            <ProgrammeCard
              item={programmes[3]}
              imageHeight="h-[240px]"
              delay={0}
            />
            <ProgrammeCard
              item={programmes[4]}
              imageHeight="h-[240px]"
              delay={0.08}
            />
            <ProgrammeCard
              item={programmes[5]}
              imageHeight="h-[240px]"
              delay={0.16}
            />
          </div>

          {/* Row 3 — 7th card centered */}
          <div className="flex justify-center">
            <div className="w-full lg:w-1/3">
              <ProgrammeCard
                item={programmes[6]}
                imageHeight="h-[240px]"
                delay={0}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
