"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ── Animation helpers ─────────────────────────────────── */
const stagger = (delay = 0, y = 30) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.95, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const slideFrom = (x = -80, delay = 0) => ({
  initial: { opacity: 0, x },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.15, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const expandLine = (delay = 0) => ({
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/* ── Blueprint line SVG ────────────────────────────────── */
function BlueprintGrid() {
  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%", opacity: 0.045, zIndex: 2 }}
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id="bpGrid"
          x="0"
          y="0"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 80 0 L 0 0 0 80"
            fill="none"
            stroke="#2F43B7"
            strokeWidth="0.55"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bpGrid)" />
      {/* Accent dashed horizontals */}
      {[18, 48, 72].map((pct) => (
        <line
          key={pct}
          x1="0"
          y1={`${pct}%`}
          x2="100%"
          y2={`${pct}%`}
          stroke="#4F6BFF"
          strokeWidth="0.45"
          strokeDasharray="5 10"
        />
      ))}
      {/* Accent dashed verticals */}
      {[50, 68].map((pct) => (
        <line
          key={pct}
          x1={`${pct}%`}
          y1="0"
          x2={`${pct}%`}
          y2="100%"
          stroke="#4F6BFF"
          strokeWidth="0.45"
          strokeDasharray="5 10"
        />
      ))}
    </svg>
  );
}

/* ── Corner bracket mark ───────────────────────────────── */
function CornerMark({ path, className }: { path: string; className: string }) {
  return (
    <svg
      className={`absolute pointer-events-none z-30 ${className}`}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path d={path} stroke="rgba(79,107,255,0.32)" strokeWidth="1.3" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════ */
export function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageParallax = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white overflow-hidden"
      style={{ minHeight: "80svh" }}
    >
      {/* ── Atmospheric gradients ──────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 65% 55% at 72% 28%, rgba(79,107,255,0.08) 0%, transparent 68%)",
            "radial-gradient(ellipse 45% 65% at 8% 62%, rgba(47,67,183,0.06) 0%, transparent 72%)",
            "radial-gradient(ellipse 50% 38% at 50% 92%, rgba(107,139,255,0.05) 0%, transparent 70%)",
          ].join(", "),
        }}
      />

      <BlueprintGrid />

      {/* ══════════════════════════════════════════════════
          DESKTOP COMPOSITION  (lg+)
      ══════════════════════════════════════════════════ */}
      <div
        className="relative z-10 hidden lg:flex"
        style={{ minHeight: "80svh" }}
      >
        {/* ── LEFT: Diagonal-clipped vertical image strip ── */}
        <motion.div
          {...slideFrom(-80, 0)}
          className="relative overflow-hidden flex-shrink-0"
          style={{
            width: "50%",
            clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
          }}
        >
          <motion.div
            className="absolute"
            style={{
              top: "0",
              left: 0,
              right: 0,
              bottom: "-16%",
              y: imageParallax,
            }}
          >
            <Image
              src="/about_hero_image.jpg"
              alt="JPLC Holdings"
              fill
              priority
              quality={93}
              className="object-cover"
              style={{ objectPosition: "55% center" }}
            />
          </motion.div>

          {/* Colour grading overlays */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,23,42,0.5) 0%, transparent 28%, transparent 52%, rgba(15,23,42,0.68) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(47,67,183,0.28) 0%, transparent 38%)",
            }}
          />
          {/* Right-edge fade to white for seamless merge */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 55%, rgba(255,255,255,0.18) 100%)",
            }}
          />

          {/* Rotated "EST." label on left edge */}
          <div
            className="absolute left-3 top-1/2 z-20 pointer-events-none"
            style={{
              transformOrigin: "center",
              transform: "rotate(-90deg) translateX(-50%) translateY(-8px)",
            }}
          >
            <span
              style={{
                color: "rgba(255,255,255,0.42)",
                fontSize: "8.5px",
                fontWeight: 700,
                letterSpacing: "0.55em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              JPLC Holdings — Est. 2019
            </span>
          </div>

          {/* Coordinate badge bottom-left */}
          <div className="absolute bottom-8 left-5 z-20">
            <p
              style={{
                color: "rgba(255,255,255,0.38)",
                fontSize: "7.5px",
                fontWeight: 600,
                letterSpacing: "0.38em",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              28.6139° N / 77.2090° E
            </p>
          </div>

          {/* Top-right corner mark on image */}
          <svg
            className="absolute top-8 right-8 z-20"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M18 0 L0 0 L0 18"
              stroke="rgba(255,255,255,0.38)"
              strokeWidth="1.4"
            />
          </svg>
        </motion.div>

        {/* ── RIGHT: Editorial zone ─────────────────────── */}
        <div className="relative flex-1 flex flex-col pt-24 pb-8 pl-10 pr-8 overflow-hidden">
          {/* Ghost "JPLC" watermark behind content */}
          <div
            className="absolute pointer-events-none select-none"
            style={{
              fontSize: "clamp(80px, 13vw, 200px)",
              fontWeight: 900,
              color: "transparent",
              WebkitTextStroke: "1px rgba(79,107,255,0.055)",
              letterSpacing: "-0.05em",
              lineHeight: 1,
              right: "-1%",
              top: "50%",
              transform: "translateY(-52%)",
              whiteSpace: "nowrap",
              zIndex: 0,
            }}
          >
            JPLC
          </div>

          {/* Index label */}
          <motion.div
            {...stagger(0.22)}
            className="flex items-center gap-3 relative z-10"
          >
            <div
              style={{
                width: 28,
                height: 1,
                background: "linear-gradient(90deg, #4F6BFF, transparent)",
                opacity: 0.55,
              }}
            />
            <span
              style={{
                color: "#4F6BFF",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.38em",
                textTransform: "uppercase",
              }}
            >
              Who We Are
            </span>
          </motion.div>

          {/* ── Headline block ── */}
          <div className="relative z-10 mt-6">
            {/* Top accent line */}
            <motion.div
              {...expandLine(0.3)}
              style={{
                height: 1,
                transformOrigin: "left",
                marginBottom: 22,
                width: "52%",
              }}
            />

            {/* Headline — mixed typographic weights for editorial rhythm */}
            <div
              style={{
                fontWeight: 900,
                lineHeight: 0.88,
                letterSpacing: "-0.045em",
                fontSize: "clamp(36px, 4.8vw, 74px)",
              }}
            >
              {/* Line 1: "Built for the" — two contrasting weights */}
              <motion.span {...stagger(0.32)} style={{ display: "block" }}>
                <span style={{ fontWeight: 900, color: "#2F43B7" }}>Built</span>
                <span
                  style={{
                    fontWeight: 300,
                    color: "#0F172A",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {" "}
                  for the
                </span>
              </motion.span>

              {/* Line 2: "Business of Coffee" — image bleeds through the letters */}
              <motion.span
                {...stagger(0.44)}
                style={{ display: "block", fontWeight: 900 }}
              >
                <span
                  style={{
                    backgroundImage: "url('/about_hero_image.jpg')",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    backgroundSize: "220% 420%",
                    backgroundPosition: "58% 42%",
                    display: "inline",
                  }}
                >
                  Business of Coffee
                </span>
              </motion.span>
            </div>

            {/* Bottom accent line */}
            <motion.div
              {...expandLine(0.8)}
              style={{
                height: 1,
                background:
                  "linear-gradient(90deg, transparent 0%, #4F6BFF 25%, transparent 78%)",
                transformOrigin: "left",
                marginTop: 26,
                marginBottom: 22,
                width: "68%",
              }}
            />

            <motion.p
              {...stagger(0.82)}
              style={{
                color: "#64748B",
                fontSize: "clamp(12px, 0.8vw, 13.5px)",
                lineHeight: 1.88,
                maxWidth: 390,
                fontWeight: 400,
              }}
            >
              JPLC is a specialty coffee infrastructure company headquartered at
              the DMCC Coffee Centre, Dubai, operating across sourcing,
              roasting, engineering, manufacturing, hospitality supply, and
              training.
            </motion.p>

            {/* Service tags */}
            <motion.div
              {...stagger(0.88)}
              className="flex flex-wrap gap-2 mt-7"
            >
              {[
                "Sourcing",
                "Roasting",
                "Engineering",
                "Manufacturing",
                "Distribution",
                "Training",
                "Private Label",
                "R&D",
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#2F43B7",
                    background: "rgba(47,67,183,0.07)",
                    border: "1px solid rgba(47,67,183,0.15)",
                    borderRadius: "6px",
                    padding: "5px 10px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              {...stagger(0.95)}
              className="flex items-center gap-4 mt-7"
            >
              <a
                href="#story"
                className="group relative inline-flex items-center justify-center px-7 py-3 text-white text-sm font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  borderRadius: 10,
                  background:
                    "linear-gradient(135deg, #1e3a9e 0%, #2F43B7 40%, #4F6BFF 80%)",
                  boxShadow:
                    "0 8px 28px rgba(47,67,183,0.30), 0 2px 8px rgba(47,67,183,0.18)",
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600 ease-in-out" />
                <span className="relative">Our Story</span>
                <svg
                  className="relative ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
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

              <a
                href="#partnership"
                className="inline-flex items-center justify-center px-7 py-3 text-[#2F43B7] text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:text-[#4F6BFF]"
                style={{
                  borderRadius: 10,
                  border: "1.5px solid rgba(47,67,183,0.25)",
                  background: "rgba(79,107,255,0.04)",
                }}
              >
                Partner With Us
              </a>
            </motion.div>
          </div>

          {/* ── Scroll indicator ── */}
          <motion.div
            {...stagger(1.0)}
            className="flex items-end pt-5 mt-auto relative z-10"
          >
            <div className="ml-auto flex flex-col items-center gap-2">
              <div
                className="relative overflow-hidden"
                style={{ width: 1, height: 40 }}
              >
                <motion.div
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.1,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, transparent, #4F6BFF, transparent)",
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: "7px",
                  fontWeight: 700,
                  letterSpacing: "0.42em",
                  textTransform: "uppercase",
                  color: "#CBD5E1",
                  writingMode: "vertical-rl",
                }}
              >
                Scroll
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          MOBILE LAYOUT  (< lg)
      ══════════════════════════════════════════════════ */}
      <div
        className="block lg:hidden relative z-10"
        style={{ minHeight: "80svh" }}
      >
        {/* Full-width image with angled bottom cut */}
        <motion.div
          {...slideFrom(0, 0)}
          className="relative w-full overflow-hidden"
          style={{
            height: "62vh",
            clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)",
          }}
        >
          <Image
            src="/about_hero_image.jpg"
            alt="JPLC Holdings"
            fill
            priority
            quality={90}
            className="object-cover"
            style={{ objectPosition: "center 40%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(47,67,183,0.32) 0%, transparent 38%, rgba(15,23,42,0.52) 100%)",
            }}
          />
          {/* Index label top-right */}
          <div className="absolute top-5 right-5">
            <span
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "8.5px",
                fontWeight: 700,
                letterSpacing: "0.48em",
                textTransform: "uppercase",
              }}
            >
              01 / ABOUT
            </span>
          </div>
          {/* Bottom coord */}
          <div className="absolute bottom-10 left-5">
            <p
              style={{
                color: "rgba(255,255,255,0.38)",
                fontSize: "7.5px",
                fontWeight: 600,
                letterSpacing: "0.35em",
              }}
            >
              28.6139° N / 77.2090° E
            </p>
          </div>
        </motion.div>

        {/* Text content */}
        <div className="px-6 pt-8 pb-10">
          <motion.div
            {...stagger(0.2)}
            style={{
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.044em",
              fontSize: "clamp(44px, 12vw, 72px)",
            }}
          >
            {/* Line 1: Built for the */}
            <span style={{ display: "block" }}>
              <span style={{ fontWeight: 900, color: "#2F43B7" }}>Built</span>
              <span style={{ fontWeight: 300, color: "#0F172A" }}>
                {" "}
                for the
              </span>
            </span>
            {/* Line 2: Business of Coffee — image masked */}
            <span style={{ display: "block", fontWeight: 900 }}>
              <span
                style={{
                  backgroundImage: "url('/about_hero_image.jpg')",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundSize: "300% 440%",
                  backgroundPosition: "58% 42%",
                  display: "inline",
                }}
              >
                Business of Coffee
              </span>
            </span>
          </motion.div>

          <div
            style={{
              height: 1,
              background: "linear-gradient(90deg, #4F6BFF, transparent)",
              marginTop: 22,
              marginBottom: 20,
              width: "60%",
            }}
          />

          <motion.p
            {...stagger(0.4)}
            style={{ color: "#64748B", fontSize: 14, lineHeight: 1.82 }}
          >
            JPLC is a specialty coffee infrastructure company headquartered at
            the DMCC Coffee Centre, Dubai, operating across sourcing, roasting,
            engineering, manufacturing, hospitality supply, and training.
          </motion.p>

          {/* Service tags */}
          <motion.div {...stagger(0.6)} className="flex flex-wrap gap-2 mt-7">
            {[
              "Sourcing",
              "Roasting",
              "Engineering",
              "Manufacturing",
              "Distribution",
              "Training",
              "Private Label",
              "R&D",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#2F43B7",
                  background: "rgba(47,67,183,0.07)",
                  border: "1px solid rgba(47,67,183,0.15)",
                  borderRadius: "6px",
                  padding: "5px 10px",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            {...stagger(0.75)}
            className="flex items-center gap-4 mt-8 flex-wrap"
          >
            <a
              href="#story"
              className="group relative inline-flex items-center justify-center px-7 py-3 text-white text-sm font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderRadius: 10,
                background:
                  "linear-gradient(135deg, #1e3a9e 0%, #2F43B7 40%, #4F6BFF 80%)",
                boxShadow:
                  "0 8px 28px rgba(47,67,183,0.30), 0 2px 8px rgba(47,67,183,0.18)",
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600 ease-in-out" />
              <span className="relative">Our Story</span>
              <svg
                className="relative ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
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
            <a
              href="#partnership"
              className="inline-flex items-center justify-center px-7 py-3 text-[#2F43B7] text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:text-[#4F6BFF]"
              style={{
                borderRadius: 10,
                border: "1.5px solid rgba(47,67,183,0.25)",
                background: "rgba(79,107,255,0.04)",
              }}
            >
              Partner With Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Blueprint corner marks (desktop) ─────────────── */}
      <CornerMark
        path="M0 0 L22 0 L22 22"
        className="top-20 right-3 hidden lg:block"
      />
      <CornerMark
        path="M22 22 L0 22 L0 0"
        className="bottom-6 left-[50%] hidden lg:block"
      />
      <CornerMark
        path="M22 0 L0 0 L0 22"
        className="top-20 left-[50%] hidden lg:block"
      />
    </section>
  );
}
