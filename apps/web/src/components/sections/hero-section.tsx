"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BG_IMAGE = "/hero_new_image.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020817]">

      {/* ── BACKGROUND IMAGE ──────────────────────────────── */}
      <Image
        src={BG_IMAGE}
        alt="Industrial coffee roasting facility"
        fill
        priority
        quality={90}
        className="object-cover object-center"
        style={{
          opacity: 0.85,
          filter: "saturate(0.75) brightness(0.9)",
        }}
      />

      {/* ── OVERLAY STACK ─────────────────────────────────── */}

      {/* Base dark layer — light tint only */}
      <div className="absolute inset-0 bg-[#020817]/20" />

      {/* Cinematic gradient — gentle top and bottom fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,8,23,0.40) 0%, rgba(2,8,23,0.05) 35%, rgba(2,8,23,0.10) 60%, rgba(2,8,23,0.65) 100%)",
        }}
      />

      {/* Radial darkening behind text content */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 25% 50%, rgba(2,8,23,0.30) 0%, transparent 100%)",
        }}
      />

      {/* Side vignette — left stronger for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(2,8,23,0.65) 0%, rgba(2,8,23,0.20) 40%, transparent 70%)",
        }}
      />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#020817]/70 to-transparent" />

      {/* ── BLUE ATMOSPHERIC LIGHTING ─────────────────────── */}

      {/* Soft blue glow — bottom, behind CTA area */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] rounded-full bg-[#2F43B7] opacity-[0.12] blur-[100px] pointer-events-none" />

      {/* Subtle blue — upper right, atmospheric */}
      <div className="absolute -top-10 right-0 w-[500px] h-[400px] rounded-full bg-[#3B52D4] opacity-[0.07] blur-[130px] pointer-events-none" />

      {/* ── TECHNICAL GRID OVERLAY ────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,107,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,107,255,0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* ── CORNER TECHNICAL ACCENTS ──────────────────────── */}
      {/* Top-left bracket */}
      <div className="absolute top-24 left-8 lg:left-12 w-8 h-px bg-[#2F43B7]/50" />
      <div className="absolute top-24 left-8 lg:left-12 w-px h-8 bg-[#2F43B7]/50" />
      {/* Top-right bracket */}
      <div className="absolute top-24 right-8 lg:right-12 w-8 h-px bg-[#2F43B7]/50" />
      <div className="absolute top-24 right-8 lg:right-12 w-px h-8 bg-[#2F43B7]/50 ml-auto" style={{ marginLeft: "auto", right: "2rem" }} />
      {/* Bottom-right bracket */}
      <div className="absolute bottom-16 right-8 lg:right-12 w-8 h-px bg-[#2F43B7]/35" />
      <div className="absolute bottom-16 right-8 lg:right-12 w-px h-8 bg-[#2F43B7]/35" style={{ bottom: "3.5rem" }} />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F43B7]/50 to-transparent" />

      {/* ── CONTENT ───────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-8 h-px bg-[#4F6BFF]/60" />
            <p className="text-[#7B96FF] text-[11px] font-semibold tracking-[0.45em] uppercase">
              JPLC Holdings &mdash; Global Coffee Infrastructure
            </p>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-sans font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] text-white leading-[1.02] tracking-[-0.03em] mb-7"
            style={{ textShadow: "0 2px 40px rgba(2,8,23,0.6)" }}
          >
            Engineering the Future
            <br />
            <span
              className="text-[#4F6BFF]"
              style={{ textShadow: "0 0 60px rgba(79,107,255,0.35)" }}
            >
              of Specialty Coffee
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: "easeOut" }}
            className="text-[#94A3B8] text-lg lg:text-xl max-w-xl leading-relaxed mb-12 font-light"
            style={{ textShadow: "0 1px 20px rgba(2,8,23,0.8)" }}
          >
            JPLC operates across sourcing, roasting, engineering, research,
            manufacturing, hospitality infrastructure, and technical coffee
            innovation for modern global markets.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.55, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#ecosystem"
              className="group relative inline-flex items-center justify-center px-9 py-4 text-white text-sm font-semibold tracking-wide rounded-sm overflow-hidden transition-all duration-300 shadow-lg shadow-[#2F43B7]/30 hover:shadow-xl hover:shadow-[#2F43B7]/45 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #2F43B7 0%, #4056D6 100%)" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <span className="relative">Explore Ecosystem</span>
              <svg
                className="relative ml-2 w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                fill="none" viewBox="0 0 16 16"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="#partnership"
              className="inline-flex items-center justify-center px-9 py-4 border border-white/18 text-white/90 text-sm font-medium tracking-wide rounded-sm hover:border-[#4F6BFF]/60 hover:bg-[#2F43B7]/15 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
              style={{ backdropFilter: "blur(12px)", background: "rgba(255,255,255,0.04)" }}
            >
              Partner With Us
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.80, ease: "easeOut" }}
            className="mt-16 flex flex-wrap items-center gap-8 lg:gap-12"
          >
            {[
              { value: "12+", label: "Years Expertise" },
              { value: "6", label: "Integrated Verticals" },
              { value: "40+", label: "Global Partnerships" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span
                  className="font-bold text-3xl text-white tracking-tight mb-0.5"
                  style={{ textShadow: "0 1px 20px rgba(2,8,23,0.8)" }}
                >
                  {stat.value}
                </span>
                <span className="text-white/70 text-xs tracking-[0.25em] uppercase font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* ── SCROLL INDICATOR ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/25 text-[9px] tracking-[0.35em] uppercase font-medium">
          Scroll
        </span>
        <div className="relative w-px h-12 overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-transparent via-[#4F6BFF]/70 to-transparent"
          />
        </div>
      </motion.div>

    </section>
  );
}
