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
        {/* ─── Two-column: content left, image right ─── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: heading + body + solution card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <h2 className="font-sans font-extrabold text-[#0F172A] text-4xl lg:text-5xl leading-[1.08] tracking-[-0.03em] mb-8">
              The Machine Makes or{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Breaks the Cup
              </span>
            </h2>

            <div className="space-y-5 text-[#475569] text-base lg:text-[17px] leading-[1.78] mb-8">
              <p>
                A great bean through a poorly calibrated machine produces a
                mediocre cup. Every time.
              </p>
              <p>
                Most operators don&apos;t know if their equipment is actually
                performing at spec. And when something goes wrong, the supplier
                and the technician are two different companies — neither moving
                fast.
              </p>
            </div>

            <div
              className="rounded-2xl p-8 lg:p-9"
              style={{
                background: "white",
                boxShadow: "0 2px 24px rgba(47,67,183,0.07)",
              }}
            >
              <div className="w-8 h-[3px] rounded-full bg-gradient-to-r from-[#2F43B7] to-[#4F6BFF] mb-6" />
              <p className="text-[#475569] text-base lg:text-[17px] leading-[1.78] mb-6">
                JPLC supplies, installs, calibrates, and services.
              </p>
              <p className="font-extrabold text-[#0F172A] text-xl lg:text-2xl tracking-tight">
                One call. Direct accountability.
              </p>
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl shadow-[#2F43B7]/10">
              <img
                src="/machine_images/image_new_4.jpg"
                alt="Commercial coffee machine engineering"
                className="w-full h-[580px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.4) 100%)",
                }}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-[#2F43B7]/15 rounded-bl-lg pointer-events-none" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-[#4F6BFF]/10 rounded-tr-lg pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
