"use client";

import { motion } from "framer-motion";

export function CommercialMachinesProblem() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-16 bg-[#EEF2FF]">
      {/* Radial glows */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(47,67,183,0.12) 0%, transparent 68%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(47,67,183,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-3xl mb-12 lg:mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#2F43B7]" />
            <span className="text-[#4F6BFF] text-[12px] font-bold tracking-[0.42em] uppercase">
              The Equipment Problem
            </span>
          </div>
          <h2 className="font-black text-[#0F172A] text-4xl lg:text-5xl xl:text-[56px] leading-[1.02] tracking-[-0.03em]">
            The Machine Is Where Most
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Coffee Programmes Fall Apart
            </span>
          </h2>
        </motion.div>

        {/* ─── Two-column narrative ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16"
        >
          {/* Left: the problems */}
          <div className="space-y-5 text-[#475569] text-base lg:text-[17px] leading-[1.78]">
            <p>
              A great bean, pulled through a poorly calibrated machine, produces
              a mediocre cup. Every time. Most operators know their coffee
              supplier. Far fewer have a clear picture of whether their
              equipment is actually performing at spec; correct extraction
              temperature, stable pressure, consistent grind distribution. These
              aren&apos;t things that announce themselves when they drift. They
              just quietly degrade the product.
            </p>
            <p>
              The other problem is service. Commercial coffee machines in
              high-volume environments take a beating. When something goes
              wrong, most operators find out their equipment supplier and their
              service provider are two different companies, neither of whom is
              particularly motivated to move fast.
            </p>
          </div>

          {/* Right: JPLC solution */}
          <div>
            <div
              className="rounded-2xl p-8 lg:p-9 h-full"
              style={{
                background: "white",
                boxShadow: "0 2px 24px rgba(47,67,183,0.07)",
              }}
            >
              <div className="w-8 h-[3px] rounded-full bg-gradient-to-r from-[#2F43B7] to-[#4F6BFF] mb-6" />
              <p className="text-[#475569] text-base lg:text-[17px] leading-[1.78] mb-6">
                JPLC is a commercial coffee machine supplier and technical
                services operation under one roof. We supply the equipment,
                handle installation and calibration, and stay on the account for
                ongoing servicing.
              </p>
              <p className="font-extrabold text-[#0F172A] text-xl lg:text-2xl tracking-tight">
                One call. Direct accountability.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
