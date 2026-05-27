"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ── images ──────────────────────────────────────────────── */
const IMG_MAIN = "/hero_new_image.jpg";
const IMG_FLOAT_1 = "/coffee_machine_engg.jpg";
const IMG_FLOAT_2 = "/manufacturing.jpg";

/* ── animation helpers ────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
});

const STATS = [
  { value: "12+", label: "Years Expertise" },
  { value: "40+", label: "Global Partnerships" },
  { value: "6", label: "Integrated Verticals" },
];

/* ────────────────────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F8FAFC]">
      {/* ══════════════════════════════════════════════════════
          BACKGROUND LAYER STACK
      ══════════════════════════════════════════════════════ */}

      {/* Main gradient — left side blue glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 90% at -5% 50%, rgba(79,107,255,0.10) 0%, transparent 65%)",
        }}
      />

      {/* Ambient glow — top right */}
      <div
        className="absolute -top-32 right-0 w-[650px] h-[550px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(79,107,255,0.14) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Ambient glow — bottom center */}
      <div
        className="absolute -bottom-16 left-1/3 w-[600px] h-[260px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(47,67,183,0.09) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F6BFF]/35 to-transparent" />

      {/* Corner technical accents — top left */}
      <div className="absolute top-24 left-6 lg:left-10 w-7 h-px bg-[#4F6BFF]/45" />
      <div className="absolute top-24 left-6 lg:left-10 w-px h-7 bg-[#4F6BFF]/45" />
      {/* top right */}
      <div className="absolute top-24 right-6 lg:right-10 w-7 h-px bg-[#4F6BFF]/45" />
      <div className="absolute top-24 right-6 lg:right-10 w-px h-7 bg-[#4F6BFF]/45" />
      {/* bottom left */}
      <div className="absolute bottom-14 left-6 lg:left-10 w-5 h-px bg-[#4F6BFF]/25" />
      <div className="absolute bottom-14 left-6 lg:left-10 w-px h-5 bg-[#4F6BFF]/25" />

      {/* ══════════════════════════════════════════════════════
          MAIN SPLIT-SCREEN CONTENT
      ══════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 lg:px-10 pt-28 pb-24 lg:pt-36 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-8 items-center">
          {/* ── LEFT COLUMN — CONTENT ───────────────────────── */}
          <div className="flex flex-col max-w-xl">
            {/* Eyebrow */}
            <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-9">
              <div className="w-8 h-px bg-[#4F6BFF]/70" />
              <span className="text-[#4F6BFF] text-[10.5px] font-bold tracking-[0.42em] uppercase">
                JPLC Holdings — Global Coffee Infrastructure
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-extrabold text-[#0F172A] text-4xl sm:text-5xl lg:text-[52px] xl:text-[60px] leading-[1.06] tracking-[-0.035em] mb-7"
            >
              Engineering the{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #2F43B7 0%, #4F6BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Future{" "}
              </span>
              of <span className="text-[#2F43B7]">Specialty</span>
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(95deg, #1e3a9e 0%, #4F6BFF 60%, #6B8BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Coffee
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              {...fadeUp(0.22)}
              className="text-[#475569] text-base lg:text-[17px] leading-[1.75] max-w-lg mb-11 font-light"
            >
              JPLC operates across sourcing, roasting, engineering, research,
              manufacturing, hospitality infrastructure, and technical coffee
              innovation for modern global markets.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              {...fadeUp(0.34)}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              {/* Primary gradient button */}
              <a
                href="#ecosystem"
                className="group relative inline-flex items-center justify-center px-8 py-[14px] text-white text-sm font-semibold tracking-wide rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, #1e3a9e 0%, #2F43B7 40%, #4F6BFF 80%, #6B8BFF 100%)",
                  boxShadow:
                    "0 8px 32px rgba(47,67,183,0.30), 0 2px 8px rgba(47,67,183,0.20)",
                }}
              >
                {/* Shimmer on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <span className="relative">Explore Ecosystem</span>
                <svg
                  className="relative ml-2.5 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* Secondary glass outline button */}
              <a
                href="#partnership"
                className="inline-flex items-center justify-center px-8 py-[14px] text-[#2F43B7] text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  border: "1.5px solid rgba(47,67,183,0.28)",
                  background: "rgba(79,107,255,0.04)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 2px 12px rgba(47,67,183,0.08)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(79,107,255,0.55)";
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(79,107,255,0.09)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 4px 20px rgba(47,67,183,0.14)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(47,67,183,0.28)";
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(79,107,255,0.04)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 2px 12px rgba(47,67,183,0.08)";
                }}
              >
                Partner With Us
              </a>
            </motion.div>

            {/* Stat cards strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
              className="flex items-stretch gap-0 rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.70)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(47,67,183,0.12)",
                boxShadow:
                  "0 4px 24px rgba(47,67,183,0.08), inset 0 0 0 1px rgba(255,255,255,0.6)",
              }}
            >
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center justify-center py-5 px-4"
                  style={{
                    borderRight:
                      i < STATS.length - 1
                        ? "1px solid rgba(47,67,183,0.10)"
                        : "none",
                  }}
                >
                  <span
                    className="font-extrabold text-[28px] leading-none tracking-tight mb-1"
                    style={{
                      background:
                        "linear-gradient(135deg, #1e3a9e 0%, #4F6BFF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[#64748B] text-[9.5px] tracking-[0.28em] uppercase font-semibold text-center leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ══════════════════════════════════════════════════
              MOBILE IMAGE BLOCK — visible below lg only
          ══════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="block lg:hidden w-full"
          >
            {/* ── Main image ── */}
            <div
              className="relative w-full rounded-2xl overflow-hidden mb-3"
              style={{
                height: "260px",
                border: "2px solid rgba(79,107,255,0.62)",
                boxShadow:
                  "0 20px 50px rgba(47,67,183,0.20), 0 0 0 1px rgba(107,139,255,0.18), 0 0 28px rgba(79,107,255,0.14)",
              }}
            >
              <Image
                src={IMG_MAIN}
                alt="JPLC engineering facility"
                fill
                priority
                quality={85}
                className="object-cover"
                style={{ filter: "saturate(1.05) brightness(1.03)" }}
              />
              {/* Bottom caption */}
              <div
                className="absolute bottom-0 left-0 right-0 px-3.5 py-3"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,23,42,0.72) 0%, transparent 100%)",
                }}
              >
                <p className="text-white text-[9.5px] font-bold tracking-[0.32em] uppercase">
                  Engineering Division
                </p>
                <p className="text-white/55 text-[8px] tracking-wider mt-0.5">
                  JPLC Technical Operations
                </p>
              </div>
              {/* DMCC badge — top right */}
              <div
                className="absolute top-2.5 right-2.5 flex items-center gap-2"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(14px)",
                  border: "1px solid rgba(79,107,255,0.22)",
                  borderRadius: "10px",
                  padding: "6px 10px",
                }}
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5l2.5 2.5 4-4"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0F172A] text-[9px] font-bold leading-none">
                    DMCC Certified
                  </p>
                  <p className="text-[#64748B] text-[7.5px] tracking-wide mt-0.5">
                    Dubai Multi Commodities
                  </p>
                </div>
              </div>
            </div>

            {/* ── Two smaller images side by side ── */}
            <div className="grid grid-cols-2 gap-3">
              {/* Float image 1 */}
              <div
                className="relative rounded-xl overflow-hidden"
                style={{
                  height: "140px",
                  border: "1.5px solid rgba(79,107,255,0.35)",
                  boxShadow: "0 10px 28px rgba(47,67,183,0.16)",
                }}
              >
                <Image
                  src={IMG_FLOAT_1}
                  alt="Coffee machine engineering"
                  fill
                  quality={80}
                  className="object-cover"
                />
                <div className="absolute top-2 left-2">
                  <span
                    className="text-[7.5px] font-bold tracking-[0.22em] uppercase px-1.5 py-1 rounded-md text-[#2F43B7]"
                    style={{
                      background: "rgba(255,255,255,0.90)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    Precision Eng.
                  </span>
                </div>
              </div>

              {/* Float image 2 */}
              <div
                className="relative rounded-xl overflow-hidden"
                style={{
                  height: "140px",
                  border: "1.5px solid rgba(79,107,255,0.28)",
                  boxShadow: "0 10px 28px rgba(47,67,183,0.13)",
                }}
              >
                <Image
                  src={IMG_FLOAT_2}
                  alt="JPLC manufacturing"
                  fill
                  quality={80}
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2">
                  <span
                    className="text-[7.5px] font-bold tracking-[0.22em] uppercase px-1.5 py-1 rounded-md text-[#2F43B7]"
                    style={{
                      background: "rgba(255,255,255,0.90)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    Manufacturing
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN — VISUAL COMPOSITION ──────────── */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.0,
              delay: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="relative hidden lg:flex items-center justify-center"
            style={{ height: "620px" }}
          >
            {/* ── Background glow ── */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 70% at 55% 50%, rgba(79,107,255,0.14) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            {/* ── Decorative rings ── */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{
                width: 460,
                height: 460,
                border: "1px solid rgba(79,107,255,0.09)",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{
                width: 340,
                height: 340,
                border: "1px dashed rgba(79,107,255,0.11)",
              }}
            />

            {/* ────────────────────────────────────────────────
                MAIN IMAGE — centred in flex flow, FM handles rotate
            ──────────────────────────────────────────────── */}
            <motion.div
              initial={{ rotate: 2 }}
              animate={{ rotate: 2 }}
              whileHover={{ scale: 1.025, rotate: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                position: "relative",
                flexShrink: 0,
                width: "360px",
                height: "460px",
                borderRadius: "20px",
                overflow: "hidden",
                border: "2.5px solid rgba(79,107,255,0.70)",
                boxShadow:
                  "0 0 0 1px rgba(107,139,255,0.25), 0 30px 70px rgba(47,67,183,0.25), 0 8px 24px rgba(47,67,183,0.15), 0 0 40px rgba(79,107,255,0.18)",
                zIndex: 20,
              }}
            >
              <Image
                src={IMG_MAIN}
                alt="JPLC industrial coffee infrastructure"
                fill
                priority
                quality={90}
                className="object-cover"
                style={{ filter: "saturate(1.05) brightness(1.03)" }}
              />
              {/* Bottom glass caption */}
              <div
                className="absolute bottom-0 left-0 right-0 px-4 py-3"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,23,42,0.72) 0%, rgba(15,23,42,0.0) 100%)",
                }}
              >
                <p className="text-white text-[10px] font-bold tracking-[0.36em] uppercase">
                  Engineering Division
                </p>
                <p className="text-white/55 text-[9px] tracking-wider mt-0.5">
                  JPLC Technical Operations
                </p>
              </div>
            </motion.div>

            {/* ────────────────────────────────────────────────
                FLOATING CARD 1 — upper right
            ──────────────────────────────────────────────── */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 5.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05 }}
              style={{
                position: "absolute",
                top: "36px",
                right: "16px",
                width: "165px",
                height: "132px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(79,107,255,0.32)",
                boxShadow:
                  "0 16px 42px rgba(47,67,183,0.22), 0 0 0 1px rgba(255,255,255,0.50)",
                zIndex: 30,
              }}
            >
              <Image
                src={IMG_FLOAT_1}
                alt="Coffee machine engineering"
                fill
                quality={85}
                className="object-cover"
              />
              <div className="absolute top-2.5 left-2.5">
                <span
                  className="text-[8.5px] font-bold tracking-[0.28em] uppercase px-2 py-1 rounded-lg text-[#2F43B7]"
                  style={{
                    background: "rgba(255,255,255,0.88)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Precision Eng.
                </span>
              </div>
            </motion.div>

            {/* ────────────────────────────────────────────────
                FLOATING CARD 2 — lower left
            ──────────────────────────────────────────────── */}
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{
                duration: 6.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
              whileHover={{ scale: 1.05 }}
              style={{
                position: "absolute",
                bottom: "36px",
                left: "16px",
                width: "155px",
                height: "124px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(79,107,255,0.26)",
                boxShadow:
                  "0 14px 38px rgba(47,67,183,0.18), 0 0 0 1px rgba(255,255,255,0.45)",
                zIndex: 30,
              }}
            >
              <Image
                src={IMG_FLOAT_2}
                alt="JPLC manufacturing"
                fill
                quality={85}
                className="object-cover"
              />
              <div className="absolute bottom-2.5 left-2.5">
                <span
                  className="text-[8.5px] font-bold tracking-[0.28em] uppercase px-2 py-1 rounded-lg text-[#2F43B7]"
                  style={{
                    background: "rgba(255,255,255,0.88)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Manufacturing
                </span>
              </div>
            </motion.div>

            {/* ────────────────────────────────────────────────
                GLASS BADGE — DMCC Certified, left-centre
            ──────────────────────────────────────────────── */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{
                duration: 7.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
              style={{
                position: "absolute",
                top: "36%",
                left: "8px",
                background: "rgba(255,255,255,0.90)",
                backdropFilter: "blur(22px)",
                border: "1px solid rgba(79,107,255,0.22)",
                borderRadius: "14px",
                boxShadow: "0 8px 32px rgba(47,67,183,0.14)",
                padding: "10px 14px",
                zIndex: 40,
                whiteSpace: "nowrap",
              }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                    boxShadow: "0 3px 10px rgba(47,67,183,0.35)",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path
                      d="M2.5 6.5l3 3 5-5"
                      stroke="white"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0F172A] text-[10.5px] font-bold tracking-wide leading-none mb-0.5">
                    DMCC Certified
                  </p>
                  <p className="text-[#64748B] text-[8.5px] tracking-wider">
                    Dubai Multi Commodities Centre
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ────────────────────────────────────────────────
                GLASS BADGE — Global Reach, right-centre
            ──────────────────────────────────────────────── */}
            <motion.div
              animate={{ y: [0, 11, 0] }}
              transition={{
                duration: 5.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.1,
              }}
              style={{
                position: "absolute",
                bottom: "27%",
                right: "8px",
                background: "rgba(255,255,255,0.87)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(79,107,255,0.20)",
                borderRadius: "12px",
                boxShadow: "0 6px 24px rgba(47,67,183,0.12)",
                padding: "9px 13px",
                zIndex: 40,
                whiteSpace: "nowrap",
              }}
            >
              <p className="text-[#4F6BFF] text-[8.5px] font-bold tracking-[0.35em] uppercase mb-0.5">
                Global Reach
              </p>
              <p className="text-[#0F172A] text-[13px] font-extrabold leading-none">
                40+ Partners
              </p>
            </motion.div>

            {/* ── Blue glow orbs ── */}
            <div
              className="absolute top-8 right-8 w-28 h-28 rounded-full pointer-events-none"
              style={{
                background: "rgba(79,107,255,0.14)",
                filter: "blur(32px)",
              }}
            />
            <div
              className="absolute bottom-8 left-8 w-24 h-24 rounded-full pointer-events-none"
              style={{
                background: "rgba(47,67,183,0.11)",
                filter: "blur(28px)",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          SCROLL INDICATOR
      ══════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#94A3B8] text-[8.5px] tracking-[0.38em] uppercase font-semibold">
          Scroll
        </span>
        <div className="relative w-px h-11 overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.9, ease: "easeInOut" }}
            className="absolute inset-x-0 top-0 h-full"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #4F6BFF, transparent)",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
