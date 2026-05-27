"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ── tiny helpers ─────────────────────────────────────────── */
const enter = (delay = 0, y = 28) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.88,
    delay,
    ease: [0.21, 0.47, 0.32, 0.98] as const,
  },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.85, delay, ease: "easeOut" as const },
});

const floatLoop = (amp: number, dur: number, delay = 0) => ({
  animate: { y: [0, amp, 0] },
  transition: {
    duration: dur,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay,
  },
});

/* ═══════════════════════════════════════════════════════════ */
export function AboutHero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      {/* ── Background atmosphere ──────────────────────────── */}
      {/* Radial glow top-right */}
      <div
        className="absolute -top-32 -right-24 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(79,107,255,0.10) 0%, transparent 68%)",
          filter: "blur(60px)",
        }}
      />
      {/* Radial glow bottom-left */}
      <div
        className="absolute -bottom-20 -left-16 w-[480px] h-[480px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(47,67,183,0.07) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      {/* Mid-page glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(107,139,255,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Top/bottom accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F6BFF]/28 to-transparent z-20" />

      {/* ── Corner brackets ────────────────────────────────── */}
      <div className="absolute top-[88px] left-5 lg:left-9 z-20 pointer-events-none">
        <div className="w-6 h-px bg-[#4F6BFF]/40" />
        <div className="w-px h-6 bg-[#4F6BFF]/40 mt-0" />
      </div>
      <div className="absolute top-[88px] right-5 lg:right-9 z-20 pointer-events-none flex flex-col items-end">
        <div className="w-6 h-px bg-[#4F6BFF]/40" />
        <div className="w-px h-6 bg-[#4F6BFF]/40" />
      </div>

      {/* ══════════════════════════════════════════════════════
          EDITORIAL CONTENT
      ══════════════════════════════════════════════════════ */}
      <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-6">
        {/* ── Eyebrow label ── */}
        <motion.div
          {...fadeIn(0)}
          className="flex items-center gap-3 mb-12 lg:mb-16"
        >
          <div className="relative w-2 h-2 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-[#4F6BFF] opacity-40 animate-ping" />
            <div className="w-2 h-2 rounded-full bg-[#4F6BFF]" />
          </div>
          <div className="w-8 h-px bg-[#4F6BFF]/55" />
          <span className="text-[#4F6BFF] text-[14px] font-bold tracking-[0.46em] uppercase">
            About JPLC Holdings
          </span>
        </motion.div>

        {/* ── Main editorial composition ── */}
        <div className="relative">
          {/* Oversized headline — left-anchored, leaves right 38% for images on desktop */}
          <motion.h1
            {...enter(0.06, 40)}
            className="font-extrabold text-[#0F172A] leading-[0.91] tracking-[-0.04em] lg:max-w-[60%]"
            style={{ fontSize: "clamp(46px, 6.2vw, 88px)" }}
          >
            <span className="block">A Global</span>
            <span className="block" style={{ fontWeight: 900 }}>
              Coffee
            </span>
            <span
              className="block"
              style={{ fontWeight: 300, letterSpacing: "-0.025em" }}
            >
              Infrastructure
            </span>
            <span className="block">Company</span>
            <span className="block">
              Built for{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #2F43B7 0%, #4F6BFF 52%, #6B8BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Scale.
              </span>
            </span>
          </motion.h1>

          {/* ────────────────────────────────────────────────────
              DESKTOP IMAGE CLUSTER
              Absolutely positioned in the right 40% of the
              editorial composition, overlapping the headline's
              white-space to create an architectural feel.
          ──────────────────────────────────────────────────── */}
          <div
            className="hidden lg:block"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "48%",
              height: "640px",
            }}
          >
            {/* Ambient glow behind cluster */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse 85% 75% at 60% 40%, rgba(79,107,255,0.11) 0%, transparent 70%)",
                filter: "blur(38px)",
                pointerEvents: "none",
              }}
            />

            {/* Decorative ring */}
            <div
              style={{
                position: "absolute",
                top: 60,
                right: 60,
                width: 220,
                height: 220,
                borderRadius: "50%",
                border: "1px solid rgba(79,107,255,0.08)",
                pointerEvents: "none",
              }}
            />

            {/* ── IMAGE 1 — tall, upper-right ── */}
            <motion.div
              {...fadeIn(0.28)}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 20,
                borderRadius: "48px",
              }}
            >
              <motion.div {...floatLoop(-13, 6.2, 0.6)}>
                <div
                  style={{
                    position: "relative",
                    width: 460,
                    height: 600,
                    borderRadius: "48px",
                    overflow: "hidden",
                    border: "2px solid rgba(79,107,255,0.55)",
                    boxShadow:
                      "0 32px 72px rgba(47,67,183,0.22), 0 0 0 1px rgba(255,255,255,0.55), 0 0 40px rgba(79,107,255,0.16)",
                  }}
                >
                  <Image
                    src="/engineering_image.jpg"
                    alt="JPLC Engineering Lab"
                    fill
                    priority
                    quality={90}
                    className="object-cover"
                    style={{ filter: "saturate(1.06) brightness(1.02)" }}
                  />
                  {/* Caption overlay */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "10px 13px",
                      background:
                        "linear-gradient(to top, rgba(15,23,42,0.72), transparent)",
                    }}
                  >
                    <p
                      style={{
                        color: "white",
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "0.32em",
                        textTransform: "uppercase",
                      }}
                    >
                      Engineering Lab
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ── Description + CTAs ── */}
          <motion.div
            {...enter(0.46, 20)}
            className="mt-9 lg:mt-11 max-w-[420px]"
          >
            <p className="text-[#475569] text-[16px] leading-[1.82] mb-7 font-light">
              JPLC operates across sourcing, roasting, engineering, research,
              manufacturing, hospitality infrastructure, and technical coffee
              innovation for modern global markets.
            </p>

            {/* Thin divider */}
            <div className="w-14 h-px bg-[#4F6BFF]/28 mb-7" />

            {/* CTA row */}
            <div className="flex items-center gap-5">
              <a
                href="#story"
                className="group inline-flex items-center gap-2 text-[#2F43B7] text-sm font-semibold tracking-wide hover:text-[#4F6BFF] transition-colors duration-200"
              >
                Our Story
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <div className="w-px h-4 bg-[#E2E8F0]" />
              <a
                href="#partnership"
                className="text-[#64748B] text-sm font-medium hover:text-[#2F43B7] transition-colors duration-200 tracking-wide"
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── MOBILE IMAGE STRIP — lg:hidden ── */}
        <motion.div {...enter(0.5, 20)} className="block lg:hidden mt-10">
          {/* Main image */}
          <div
            className="relative w-full rounded-2xl overflow-hidden mb-3"
            style={{
              height: 248,
              border: "2px solid rgba(79,107,255,0.52)",
              boxShadow:
                "0 20px 52px rgba(47,67,183,0.18), 0 0 28px rgba(79,107,255,0.12)",
            }}
          >
            <Image
              src="/engineering_image.jpg"
              alt="JPLC Engineering"
              fill
              priority
              quality={85}
              className="object-cover"
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "10px 14px",
                background:
                  "linear-gradient(to top, rgba(15,23,42,0.70), transparent)",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "9.5px",
                  fontWeight: 700,
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                }}
              >
                Engineering Division
              </p>
            </div>
            {/* ISO badge on image */}
            <div
              className="absolute top-2.5 right-2.5 flex items-center gap-2"
              style={{
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(79,107,255,0.22)",
                borderRadius: 10,
                padding: "6px 10px",
              }}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #2F43B7, #4F6BFF)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path
                    d="M1.5 4.5l2 2 4-4"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    color: "#0F172A",
                    fontSize: 9,
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  ISO Certified
                </p>
                <p
                  style={{
                    color: "#64748B",
                    fontSize: 7.5,
                    letterSpacing: "0.1em",
                    marginTop: 2,
                  }}
                >
                  Quality Assured
                </p>
              </div>
            </div>
          </div>

          {/* Two smaller images */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { src: "/coffee_machine_engg.jpg", label: "Precision Eng." },
              { src: "/manufacturing.jpg", label: "Manufacturing" },
            ].map(({ src, label }) => (
              <div
                key={src}
                className="relative rounded-xl overflow-hidden"
                style={{
                  height: 132,
                  border: "1.5px solid rgba(79,107,255,0.30)",
                  boxShadow: "0 10px 28px rgba(47,67,183,0.13)",
                }}
              >
                <Image
                  src={src}
                  alt={label}
                  fill
                  quality={80}
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2">
                  <span
                    style={{
                      background: "rgba(255,255,255,0.90)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(79,107,255,0.16)",
                      borderRadius: 7,
                      padding: "3px 7px",
                      fontSize: "7.5px",
                      fontWeight: 700,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase" as const,
                      color: "#2F43B7",
                      display: "inline-block",
                    }}
                  >
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[#94A3B8] text-[8.5px] tracking-[0.38em] uppercase font-semibold">
          Scroll
        </span>
        <div className="relative w-px h-10 overflow-hidden">
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
