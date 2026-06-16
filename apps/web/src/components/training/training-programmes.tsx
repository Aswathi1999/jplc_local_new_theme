"use client";

import { useRef, useEffect, useCallback, useState } from "react";
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

const GAP = 16;
const AUTO_SCROLL_INTERVAL = 3000;

export function TrainingProgrammes() {
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  const scrollBy = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement;
    const step = (firstCard?.offsetWidth ?? el.clientWidth) + GAP;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  const startAuto = useCallback(() => {
    timerRef.current = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 4;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const firstCard = el.firstElementChild as HTMLElement;
        const step = (firstCard?.offsetWidth ?? el.clientWidth) + GAP;
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, AUTO_SCROLL_INTERVAL);
  }, []);

  const stopAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [startAuto, stopAuto]);

  return (
    <section id="programmes" className="relative bg-[#F8FAFC] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        {/* Heading + arrows */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="py-10 lg:py-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-[2px] rounded-full bg-[#2F43B7]" />
              <div className="w-3 h-[2px] rounded-full bg-[#4F6BFF]/40" />
              <div className="w-1.5 h-[2px] rounded-full bg-[#4F6BFF]/15" />
            </div>
            <h2 className="font-black text-[#0F172A] text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] leading-[1.03] tracking-[-0.03em] mb-3">
              Barista Courses &amp;
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
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
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center gap-3 flex-shrink-0 pb-1 self-end sm:self-auto">
            <button
              onClick={() => {
                stopAuto();
                scrollBy(-1);
                startAuto();
              }}
              disabled={!canPrev}
              aria-label="Previous"
              className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                borderColor: canPrev ? "#2F43B7" : "rgba(47,67,183,0.3)",
                background: canPrev ? "#2F43B7" : "transparent",
                color: canPrev ? "#fff" : "#2F43B7",
              }}
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                stopAuto();
                scrollBy(1);
                startAuto();
              }}
              disabled={!canNext}
              aria-label="Next"
              className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                borderColor: canNext ? "#2F43B7" : "rgba(47,67,183,0.3)",
                background: canNext ? "#2F43B7" : "transparent",
                color: canNext ? "#fff" : "#2F43B7",
              }}
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Carousel track */}
      <div className="pb-12 lg:pb-16 max-w-7xl mx-auto px-5 lg:px-10">
        <div
          ref={trackRef}
          onScroll={updateArrows}
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollBehavior: "smooth",
          }}
        >
          {programmes.map((item, i) => (
            <div
              key={item.num}
              className="flex-shrink-0 w-full sm:w-[calc((100%-32px)/2.2)] lg:w-[calc((100%-48px)/3.25)] snap-start"
            >
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.72,
                  delay: i * 0.06,
                  ease: "easeOut",
                }}
                className="group relative bg-white rounded-2xl overflow-hidden flex flex-col h-full"
                style={{
                  border: "1px solid rgba(47,67,183,0.08)",
                  boxShadow: "0 2px 20px rgba(47,67,183,0.06)",
                }}
              >
                {/* Blue top accent on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, #2F43B7 0%, #4F6BFF 100%)",
                  }}
                />

                {/* Image */}
                <div className="relative overflow-hidden flex-shrink-0 h-[200px]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 relative overflow-hidden">
                  <div className="relative z-10 flex flex-col flex-1">
                    <h3 className="font-extrabold text-[#0F172A] text-[16px] leading-snug tracking-tight mb-3 transition-colors duration-200 group-hover:text-[#2F43B7]">
                      {item.title}
                    </h3>
                    <div
                      className="w-10 h-[3px] rounded-full mb-4"
                      style={{
                        background:
                          "linear-gradient(90deg, #2F43B7 0%, #4F6BFF 100%)",
                      }}
                    />
                    <p className="text-[#64748B] text-[13px] leading-[1.82] flex-1">
                      {item.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
