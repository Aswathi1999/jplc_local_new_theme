"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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

const SLIDES = [
  {
    src: IMG_MAIN,
    alt: "JPLC industrial coffee infrastructure",
    label: "Engineering Division",
    sub: "JPLC Technical Operations",
  },
  {
    src: IMG_FLOAT_1,
    alt: "Coffee machine engineering",
    label: "Precision Engineering",
    sub: "Machine & Technical Services",
  },
  {
    src: IMG_FLOAT_2,
    alt: "JPLC manufacturing",
    label: "Manufacturing",
    sub: "Brand & Product Development",
  },
];

/* ────────────────────────────────────────────────────────── */
export function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActive((p) => (p + 1) % SLIDES.length),
      4000,
    );
    return () => clearInterval(t);
  }, []);

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
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 xl:gap-8 items-center">
          {/* ── LEFT COLUMN — CONTENT ───────────────────────── */}
          <div className="flex flex-col max-w-xl">
            {/* Eyebrow */}
            <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-9">
              <div className="w-8 h-px bg-[#4F6BFF]/70" />
              <span className="text-[#4F6BFF] text-[14px] font-semibold tracking-[0.38em] uppercase">
                Global Coffee Infrastructure
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
          {/* ── MOBILE CAROUSEL ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="block lg:hidden w-full"
          >
            <div
              className="relative w-full rounded-2xl overflow-hidden mb-4"
              style={{
                height: "260px",
                border: "2px solid rgba(79,107,255,0.55)",
                boxShadow: "0 20px 50px rgba(47,67,183,0.20)",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={SLIDES[active].src}
                    alt={SLIDES[active].alt}
                    fill
                    priority
                    quality={85}
                    className="object-cover"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 px-3.5 py-3"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(15,23,42,0.75) 0%, transparent 100%)",
                    }}
                  >
                    <p className="text-white text-[9.5px] font-bold tracking-[0.32em] uppercase">
                      {SLIDES[active].label}
                    </p>
                    <p className="text-white/55 text-[8px] tracking-wider mt-0.5">
                      {SLIDES[active].sub}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
              <button
                onClick={() =>
                  setActive((p) => (p - 1 + SLIDES.length) % SLIDES.length)
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.18)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <svg width="12" height="12" fill="none" viewBox="0 0 14 14">
                  <path
                    d="M9 2L4 7l5 5"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => setActive((p) => (p + 1) % SLIDES.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.18)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <svg width="12" height="12" fill="none" viewBox="0 0 14 14">
                  <path
                    d="M5 2l5 5-5 5"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === active ? 20 : 7,
                    height: 7,
                    borderRadius: 9999,
                    background:
                      i === active
                        ? "linear-gradient(90deg, #2F43B7, #4F6BFF)"
                        : "rgba(47,67,183,0.22)",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN — CAROUSEL ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.0,
              delay: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="relative hidden lg:flex flex-col items-center justify-center gap-5"
            style={{ height: "700px" }}
          >
            {/* Carousel frame */}
            <div
              className="relative overflow-hidden"
              style={{
                width: "100%",
                height: "620px",
                borderRadius: "20px",
                border: "2.5px solid rgba(79,107,255,0.55)",
                boxShadow:
                  "0 0 0 1px rgba(107,139,255,0.20), 0 30px 70px rgba(47,67,183,0.22), 0 0 40px rgba(79,107,255,0.14)",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={SLIDES[active].src}
                    alt={SLIDES[active].alt}
                    fill
                    priority
                    quality={90}
                    className="object-cover"
                    style={{ filter: "saturate(1.05) brightness(1.03)" }}
                  />
                  {/* Caption */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-5 py-4"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(15,23,42,0.80) 0%, transparent 100%)",
                    }}
                  >
                    <p className="text-white text-[10px] font-bold tracking-[0.36em] uppercase">
                      {SLIDES[active].label}
                    </p>
                    <p className="text-white/55 text-[9px] tracking-wider mt-0.5">
                      {SLIDES[active].sub}
                    </p>
                  </div>

                  {/* Slide counter — top right */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="text-[9px] font-bold tracking-[0.3em] text-white/70"
                      style={{
                        background: "rgba(15,23,42,0.45)",
                        backdropFilter: "blur(8px)",
                        borderRadius: "6px",
                        padding: "4px 8px",
                      }}
                    >
                      {String(active + 1).padStart(2, "0")} /{" "}
                      {String(SLIDES.length).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next arrows */}
              <button
                onClick={() =>
                  setActive((p) => (p - 1 + SLIDES.length) % SLIDES.length)
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.18)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                  <path
                    d="M9 2L4 7l5 5"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => setActive((p) => (p + 1) % SLIDES.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.18)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                  <path
                    d="M5 2l5 5-5 5"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-2.5">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    borderRadius: 9999,
                    background:
                      i === active
                        ? "linear-gradient(90deg, #2F43B7, #4F6BFF)"
                        : "rgba(47,67,183,0.22)",
                  }}
                />
              ))}
            </div>
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
