"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const benefits = [
  {
    id: "01",
    title: "Enterprise Infrastructure",
    body: "End-to-end coffee infrastructure — sourcing, roasting, engineering, and retail — built to scale with your business.",
  },
  {
    id: "02",
    title: "DMCC Certified Facility",
    body: "Operating from a fully certified Dubai facility with global supply chain integration across 30+ markets.",
  },
  {
    id: "03",
    title: "Dedicated Partnership Support",
    body: "A dedicated team handles your onboarding, technical setup, and long-term programme management.",
  },
];

export function AboutCta() {
  return (
    <section className="relative bg-[#F8FAFC] overflow-hidden">
      {/* Blueprint grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,67,183,1) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient glow — top right */}
      <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-[#2F43B7] opacity-[0.06] blur-[120px] pointer-events-none" />

      {/* Ambient glow — bottom left */}
      <div className="absolute -bottom-16 -left-16 w-[360px] h-[300px] rounded-full bg-[#4056D6] opacity-[0.05] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24">

        {/* Eyebrow — centered above card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="w-8 h-px bg-[#2F43B7]" />
          <p className="text-[#2F43B7] text-[11px] font-semibold tracking-[0.45em] uppercase">
            Ready to Scale?
          </p>
          <div className="w-8 h-px bg-[#2F43B7]" />
        </motion.div>

        {/* Main card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-sm overflow-hidden border border-[#E5E7EB] shadow-[0_24px_64px_rgba(47,67,183,0.10)]"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #F0F4FF 100%)",
          }}
        >
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2F43B7] via-[#4F6BFF] to-transparent" />

          <div className="grid lg:grid-cols-[1fr_420px]">

            {/* LEFT — CTA content */}
            <div className="relative px-8 py-12 lg:px-14 lg:py-16">

              {/* Decorative ghost letter */}
              <span
                className="absolute -bottom-6 -left-2 font-sans font-black text-[160px] leading-none text-[#2F43B7]/[0.04] select-none pointer-events-none"
                aria-hidden="true"
              >
                J
              </span>

              <div className="relative z-10 max-w-lg">
                <h2 className="font-extrabold text-4xl lg:text-5xl xl:text-[52px] text-[#0F172A] tracking-[-0.03em] leading-[1.08] mb-6">
                  Partner With{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 0 20px rgba(47,67,183,0.20))",
                    }}
                  >
                    JPLC
                  </span>
                </h2>

                {/* Triple divider */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-px bg-[#2F43B7]/40" />
                  <div className="w-px h-3 bg-[#2F43B7]/30" />
                  <div className="w-4 h-px bg-[#2F43B7]/15" />
                </div>

                <p className="text-[#374151] text-base lg:text-[17px] leading-relaxed mb-10">
                  Join the companies and brands building their coffee
                  infrastructure with JPLC — from single-outlet deployments
                  to enterprise-scale programmes.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:hello@jplc.com"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#2F43B7] text-white text-xs font-medium uppercase tracking-widest rounded-sm hover:bg-[#2941A8] transition-colors duration-200 shadow-[0_8px_32px_rgba(47,67,183,0.30)]"
                  >
                    Contact Us
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="#partnership"
                    className="inline-flex items-center justify-center px-8 py-4 border border-[#2F43B7]/30 text-[#2F43B7] text-xs font-medium uppercase tracking-widest rounded-sm hover:border-[#2F43B7]/60 hover:bg-[#2F43B7]/5 transition-all duration-200"
                  >
                    Partnership Inquiry
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT — Benefits panel */}
            <div
              className="relative overflow-hidden flex flex-col justify-center px-8 py-12 lg:px-10 lg:py-14"
              style={{ background: "#2941A8" }}
            >
              {/* Blueprint grid on dark panel */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />

              {/* Corner bracket — top right */}
              <div className="absolute top-6 right-6 z-10 pointer-events-none">
                <div className="w-5 h-px bg-white/30" />
                <div className="w-px h-5 bg-white/30 ml-auto" />
              </div>

              {/* Corner bracket — bottom left */}
              <div className="absolute bottom-6 left-6 z-10 pointer-events-none flex flex-col items-start justify-end">
                <div className="w-px h-5 bg-white/30" />
                <div className="w-5 h-px bg-white/30" />
              </div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 space-y-6"
              >
                <p className="text-white/50 text-[10px] font-mono tracking-[0.35em] uppercase mb-8">
                  Why Partner With Us
                </p>

                {benefits.map((b) => (
                  <motion.div
                    key={b.id}
                    variants={fadeUp}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      {/* Accent line */}
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="w-4 h-px bg-white/40 group-hover:bg-white/80 transition-colors duration-300" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-white/30 text-[9px] font-mono tracking-widest">
                            {b.id}
                          </span>
                          <h3 className="text-white text-sm font-semibold tracking-tight">
                            {b.title}
                          </h3>
                        </div>
                        <p className="text-white/55 text-xs leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                          {b.body}
                        </p>
                      </div>
                    </div>

                    {/* Separator */}
                    <div className="mt-5 h-px bg-white/8" />
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>


        </motion.div>

      </div>
    </section>
  );
}
