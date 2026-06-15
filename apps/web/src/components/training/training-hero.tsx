"use client";

import { motion } from "framer-motion";

export function TrainingHero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Gradient orbs */}
      <div
        className="absolute top-[-120px] left-[-80px] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(47,67,183,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-[-60px] right-[-60px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(79,107,255,0.07) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(47,67,183,0.08) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-5 lg:px-12 xl:px-10 pt-36 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-12 xl:gap-20 w-full items-center">
          {/* ── Left: text ── */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-12 h-px bg-[#2F43B7]/60" />
              <span className="text-[#2F43B7] text-[11px] font-bold tracking-[0.55em] uppercase">
                From First Shot to Full Competence
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.35,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className="font-black text-[#0F172A] text-5xl lg:text-[58px] xl:text-[68px] leading-[0.97] tracking-[-0.04em] mb-8"
            >
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Barista Courses Built
              </span>
              <br />
              <span className="text-[#0F172A]/50 font-black">
                for the Real Bar Environment
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
              className="text-[#475569] text-base lg:text-[17px] leading-[1.78] max-w-xl mb-12"
            >
              JPLC barista training programmes run from beginner foundation
              through to advanced certification — structured around real
              equipment, real coffee, and the specific demands of working café
              environments.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.72, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-white text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                  boxShadow: "0 8px 28px rgba(79,107,255,0.28)",
                }}
              >
                Enquire About Barista Training
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth={1.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#programmes"
                className="inline-flex items-center justify-center px-8 py-4 text-[#2F43B7] text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 hover:bg-[#2F43B7]/8 hover:-translate-y-0.5"
                style={{ border: "1.5px solid rgba(47,67,183,0.22)" }}
              >
                View Course Options
              </a>
            </motion.div>
          </div>

          {/* ── Right: image collage ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.0,
              delay: 0.45,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            className="hidden lg:block relative"
            style={{ height: "520px" }}
          >
            {/* Blue accent frame behind top image */}
            <div
              className="absolute top-0 right-0 w-[85%] h-[58%] rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                opacity: 0.12,
                transform: "translate(10px, -10px)",
              }}
            />

            {/* Top image — large */}
            <div
              className="absolute top-0 right-0 w-[85%] rounded-2xl overflow-hidden"
              style={{
                height: "58%",
                boxShadow: "0 20px 50px rgba(15,23,42,0.18)",
              }}
            >
              <img
                src="/training/Coffee-tr-8.webp"
                alt="Advanced barista course — JPLC UAE"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-left image — small */}
            <div
              className="absolute bottom-0 left-0 w-[52%] rounded-2xl overflow-hidden"
              style={{
                height: "38%",
                boxShadow: "0 16px 40px rgba(15,23,42,0.14)",
              }}
            >
              <img
                src="/training/Coffee-tr-7.webp"
                alt="Barista training intermediate — JPLC UAE"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-right image — small */}
            <div
              className="absolute bottom-0 right-0 w-[44%] rounded-2xl overflow-hidden"
              style={{
                height: "38%",
                boxShadow: "0 16px 40px rgba(15,23,42,0.14)",
              }}
            >
              <img
                src="/training/group-diverse-grads-throwing-caps-up-sky (1).jpg"
                alt="Barista certification — JPLC UAE"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Blue dot accent */}
            <div
              className="absolute bottom-[39%] left-[51%] w-3 h-3 rounded-full"
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                boxShadow: "0 0 12px rgba(79,107,255,0.5)",
                transform: "translate(-50%, 50%)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
