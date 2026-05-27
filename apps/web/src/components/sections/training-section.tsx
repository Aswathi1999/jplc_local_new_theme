"use client";

import { motion, type Variants } from "framer-motion";

const programmes = [
  {
    id: "01",
    title: "Barista Certification",
    level: "Foundation — Advanced",
    status: "Launching Q3 2026",
  },
  {
    id: "02",
    title: "Brewing Techniques Masterclass",
    level: "All Levels",
    status: "Launching Q3 2026",
  },
  {
    id: "03",
    title: "Roasting Education",
    level: "Intermediate — Expert",
    status: "Launching Q4 2026",
  },
  {
    id: "04",
    title: "Sensory Evaluation & Cupping",
    level: "Foundation — Advanced",
    status: "Launching Q3 2026",
  },
  {
    id: "05",
    title: "Hospitality Coffee Operations",
    level: "Professional",
    status: "Launching Q4 2026",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const rowVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function TrainingSection() {
  return (
    <section
      id="training"
      className="py-20 lg:py-28 relative overflow-hidden mt-8"
      style={{
        background:
          "linear-gradient(180deg, #F4F8FF 0%, #ffffff 45%, #F0F5FF 100%)",
      }}
    >
      {/* Ambient glow — top right */}
      <div className="absolute -top-24 -right-24 w-[480px] h-[400px] rounded-full bg-[#2F43B7] opacity-[0.05] blur-[120px] pointer-events-none" />

      {/* Ambient glow — bottom left */}
      <div className="absolute -bottom-16 -left-16 w-[360px] h-[280px] rounded-full bg-[#4056D6] opacity-[0.04] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-8 h-px bg-[#2F43B7]" />
          <p className="text-[#2F43B7] text-[14px] font-semibold tracking-[0.45em] uppercase">
            Coffee Training & Education
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
          {/* LEFT — Heading + Description */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="font-sans font-extrabold text-4xl lg:text-5xl text-[#0F172A] tracking-[-0.03em] leading-[1.08] mb-5">
              The JPLC{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 20px rgba(47,67,183,0.20))",
                }}
              >
                Coffee Academy
              </span>
            </h2>

            {/* Triple divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#2F43B7]/40" />
              <div className="w-px h-3 bg-[#2F43B7]/30" />
              <div className="w-4 h-px bg-[#2F43B7]/15" />
            </div>

            <p className="text-[#374151] text-base leading-relaxed mb-10">
              A world-class training environment designed for professionals who
              want to deepen their craft — from first-time baristas to seasoned
              roast masters seeking advanced calibration expertise.
            </p>

            <div className="inline-flex items-center gap-3 border border-[#2F43B7]/25 bg-[#2F43B7]/5 rounded-sm px-5 py-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2F43B7] animate-pulse" />
              <span className="text-[#2F43B7] text-xs tracking-[0.25em] uppercase font-semibold">
                Curriculum in Development
              </span>
            </div>
          </motion.div>

          {/* RIGHT — Programme List */}
          <div className="lg:col-span-3">
            {/* Column labels */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-between pb-4"
            >
              <span className="text-[#64748B] text-[14px] font-mono tracking-[0.22em] uppercase">
                Programme
              </span>
              <span className="text-[#64748B] text-[14px] font-mono tracking-[0.22em] uppercase">
                Status
              </span>
            </motion.div>

            {/* Animated top divider */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-px bg-gradient-to-r from-[#2F43B7]/50 via-[#2F43B7]/20 to-transparent mb-1"
            />

            {/* Programme rows */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
            >
              {programmes.map((prog) => (
                <motion.div
                  key={prog.title}
                  variants={rowVariant}
                  className="group flex items-center justify-between gap-6 py-5 border-b border-[#2F43B7]/10 hover:border-[#2F43B7]/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="flex-shrink-0 text-[#2F43B7]/40 font-mono text-[14px] tracking-widest group-hover:text-[#2F43B7]/70 transition-colors duration-300">
                      {prog.id}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[#0F172A] text-base font-semibold leading-snug mb-0.5 group-hover:text-[#2F43B7] transition-colors duration-300">
                        {prog.title}
                      </h3>
                      <p className="text-[#64748B] text-sm font-mono">
                        {prog.level}
                      </p>
                    </div>
                  </div>

                  <span className="flex-shrink-0 text-white text-[14px] font-mono tracking-[0.15em] uppercase bg-[#2F43B7] px-4 py-2 rounded-sm group-hover:bg-[#2941A8] transition-all duration-300">
                    {prog.status}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[#64748B] text-sm mt-6 leading-relaxed"
            >
              Full curriculum details and intake schedules will be announced.
              Contact us to register your interest.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
