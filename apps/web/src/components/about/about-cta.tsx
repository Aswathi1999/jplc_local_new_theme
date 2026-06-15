"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
        {/* Eyebrow — centered above card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="w-8 h-px bg-[#2F43B7]" />
          <p className="text-[#4F6BFF] text-[14px] font-semibold tracking-[0.38em] uppercase">
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
                  The Right Infrastructure Partner{" "}
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
                    Makes All the Difference
                  </span>
                </h2>

                {/* Triple divider */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-px bg-[#2F43B7]/40" />
                  <div className="w-px h-3 bg-[#2F43B7]/30" />
                  <div className="w-4 h-px bg-[#2F43B7]/15" />
                </div>

                <p className="text-[#374151] text-base lg:text-[17px] leading-relaxed mb-10">
                  Eight verticals. One integrated operation — built specifically
                  for businesses that are serious about coffee. Whether
                  you&apos;re launching a café concept, scaling a hospitality
                  programme, or building a coffee brand from the ground up, the
                  conversation starts here.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#partnership"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#2F43B7] text-white text-xs font-medium uppercase tracking-widest rounded-sm hover:bg-[#2941A8] transition-colors duration-200 shadow-[0_8px_32px_rgba(47,67,183,0.30)]"
                  >
                    Partner With Us
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
                    href="#ecosystem"
                    className="inline-flex items-center justify-center px-8 py-4 border border-[#2F43B7]/30 text-[#2F43B7] text-xs font-medium uppercase tracking-widest rounded-sm hover:border-[#2F43B7]/60 hover:bg-[#2F43B7]/5 transition-all duration-200"
                  >
                    Explore the Ecosystem
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT — Partnership image */}
            <div className="relative hidden lg:block overflow-hidden">
              <Image
                src="/partnership.jpg"
                alt="Partner with JPLC"
                fill
                quality={88}
                className="object-cover object-center"
              />
              {/* Gradient blend with card */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 via-transparent to-transparent" />
              {/* Corner mark */}
              <div className="absolute top-6 right-6 pointer-events-none">
                <div className="w-5 h-px bg-white/40" />
                <div className="w-px h-5 bg-white/40 ml-auto" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
