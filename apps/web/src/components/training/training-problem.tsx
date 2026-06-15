"use client";

import { motion } from "framer-motion";

export function TrainingProblem() {
  return (
    <section className="relative bg-white overflow-hidden py-16 lg:py-24">
      {/* Background depth shapes */}
      <div
        className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(47,67,183,0.07) 0%, transparent 65%)",
          filter: "blur(64px)",
        }}
      />
      <div
        className="absolute -bottom-16 -right-16 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(79,107,255,0.05) 0%, transparent 70%)",
          filter: "blur(56px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-16 xl:px-24">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 0.61, 0.36, 1] }}
          className="mb-10 lg:mb-14"
        >
          <div className="flex items-center gap-3 mb-7">
            <div className="w-8 h-[1.5px] bg-[#2F43B7]" />
            <span className="text-[#2F43B7] text-[10px] font-bold tracking-[0.5em] uppercase">
              Barista Training Excellence
            </span>
          </div>
          <h2 className="font-black text-[#0F172A] text-[46px] lg:text-[58px] xl:text-[66px] leading-[0.95] tracking-[-0.04em]">
            Good Baristas Aren&apos;t
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Made by Accident
            </span>
          </h2>
        </motion.div>

        {/* ── Two panels + divider ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] items-stretch">
          {/* Panel 01 */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.1, ease: "easeOut" }}
            whileHover={{ y: -5, transition: { duration: 0.22 } }}
            className="group relative overflow-hidden rounded-2xl lg:rounded-r-none lg:rounded-l-2xl p-8 lg:p-10 cursor-default"
            style={{
              background: "rgba(247,249,255,0.75)",
              border: "1px solid rgba(47,67,183,0.09)",
              borderRight: "none",
            }}
          >
            {/* Top accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{
                background: "linear-gradient(90deg, #2F43B7 0%, #4F6BFF 100%)",
              }}
            />

            {/* Faint watermark number */}
            <div
              className="absolute -right-2 -bottom-4 font-black text-[120px] leading-none select-none pointer-events-none"
              style={{
                color: "rgba(47,67,183,0.04)",
                letterSpacing: "-0.05em",
              }}
            >
              01
            </div>

            {/* Number label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="font-mono text-[11px] font-bold tracking-[0.38em] text-[#4F6BFF]">
                01
              </span>
              <div
                className="flex-1 h-px"
                style={{ background: "rgba(47,67,183,0.1)" }}
              />
            </motion.div>

            {/* Body paragraph */}
            <p className="text-[#64748B] text-[15px] leading-[1.87] mb-6">
              There&apos;s a gap in most cafés between the standard expected and
              the training invested in reaching it. Owners want consistent
              espresso, clean milk work, and a team that can hold the bar
              together through a busy service. What they often have is staff who
              learned by watching, never had their technique formally assessed,
              and don&apos;t fully understand why the extraction changes when
              the weather does.
            </p>

            {/* Highlighted key sentence */}
            <div
              className="pl-4 py-0.5"
              style={{ borderLeft: "2.5px solid #2F43B7" }}
            >
              <p className="text-[#0F172A] font-semibold text-[15px] lg:text-base leading-[1.7]">
                That gap shows up in the cup. Every day.
              </p>
            </div>
          </motion.div>

          {/* Vertical divider */}
          <div
            className="hidden lg:block"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(47,67,183,0.14) 25%, rgba(47,67,183,0.14) 75%, transparent 100%)",
            }}
          />

          {/* Panel 02 */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
            whileHover={{ y: -5, transition: { duration: 0.22 } }}
            className="group relative overflow-hidden rounded-2xl lg:rounded-l-none lg:rounded-r-2xl p-8 lg:p-10 cursor-default"
            style={{
              background: "rgba(247,249,255,0.75)",
              border: "1px solid rgba(47,67,183,0.09)",
              borderLeft: "none",
            }}
          >
            {/* Top accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{
                background: "linear-gradient(90deg, #4F6BFF 0%, #7B93FF 100%)",
              }}
            />

            {/* Faint watermark number */}
            <div
              className="absolute -right-2 -bottom-4 font-black text-[120px] leading-none select-none pointer-events-none"
              style={{
                color: "rgba(47,67,183,0.04)",
                letterSpacing: "-0.05em",
              }}
            >
              02
            </div>

            {/* Number label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="font-mono text-[11px] font-bold tracking-[0.38em] text-[#4F6BFF]">
                02
              </span>
              <div
                className="flex-1 h-px"
                style={{ background: "rgba(47,67,183,0.1)" }}
              />
            </motion.div>

            {/* Body paragraph */}
            <p className="text-[#64748B] text-[15px] leading-[1.87] mb-6">
              Barista training isn&apos;t a one-time onboarding exercise.
              It&apos;s the foundation of a café&apos;s product quality — and it
              needs to be structured, practical, and connected to the actual
              equipment and coffee on the bar. Generic courses that teach theory
              on unfamiliar machines and send staff back to a completely
              different setup don&apos;t close the gap. They just tick a box.
            </p>

            {/* Highlighted key sentence */}
            <div
              className="pl-4 py-0.5"
              style={{ borderLeft: "2.5px solid #4F6BFF" }}
            >
              <p className="text-[#0F172A] font-semibold text-[15px] lg:text-base leading-[1.7]">
                JPLC barista training UAE is built differently. Every programme
                is designed around the café&apos;s own workflow, equipment, and
                coffee. So what&apos;s learned translates directly to the
                service from day one.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
