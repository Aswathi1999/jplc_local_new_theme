"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const storyBlocks = [
  {
    number: "01",
    tag: "Market Context",
    title: "Where We Sit in the UAE Coffee Market",
    paragraphs: [
      "The UAE coffee market has grown fast. The infrastructure behind it hasn't. Most operators are still patching together four different vendors and wondering why the programme feels fragile. JPLC was built to fix that — one partner, full accountability, built for scale.",
    ],
  },
  {
    number: "02",
    tag: "What We've Built",
    title: "What We've Built",
    paragraphs: [
      "Eight integrated verticals — sourcing, roasting, R&D, engineering, distribution, hospitality, manufacturing, and training. Each one is functional on its own. Far more valuable when they work together. DMCC-certified, based in Dubai, and built to be the operational backbone serious coffee businesses actually need.",
    ],
  },
];

export function CompanyStory() {
  return (
    <section id="story" className="relative bg-white overflow-hidden">
      {/* ── Our Story ── */}
      <div className="relative bg-[#F8FAFC] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#2F43B7] opacity-[0.04] blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#4F6BFF] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pt-12 lg:pt-16 pb-12 lg:pb-16">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-8 h-px bg-[#2F43B7]" />
            <p className="text-[13px] font-semibold tracking-[0.22em] uppercase text-[#2F43B7]">
              Our Story
            </p>
          </motion.div>

          {/* Two cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid lg:grid-cols-2 gap-5"
          >
            {storyBlocks.map((block) => (
              <motion.div
                key={block.number}
                variants={fadeUp}
                className="group relative bg-white rounded-2xl border border-[#E5E7EB] p-8 overflow-hidden hover:border-[#2F43B7]/30 hover:shadow-[0_12px_40px_rgba(47,67,183,0.10)] transition-all duration-300"
              >
                {/* Blue top accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2F43B7] via-[#4F6BFF] to-transparent" />

                {/* Ghost number */}
                <span
                  className="absolute -bottom-3 right-4 font-black leading-none select-none pointer-events-none"
                  style={{
                    fontSize: "clamp(72px, 9vw, 120px)",
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(47,67,183,0.06)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {block.number}
                </span>

                <div className="relative z-10">
                  {/* Number + tag row */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[#4F6BFF] text-[10px] font-mono font-bold tracking-[0.3em]">
                      {block.number}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 border border-[#2F43B7]/25 text-[#2F43B7] bg-[#2F43B7]/5 text-[9px] font-semibold tracking-[0.2em] uppercase rounded-full">
                      {block.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-xl lg:text-2xl text-[#0F172A] tracking-[-0.025em] leading-[1.2] mb-4 group-hover:text-[#2F43B7] transition-colors duration-300">
                    {block.title}
                  </h3>

                  {/* Accent rule */}
                  <div className="w-8 h-px bg-gradient-to-r from-[#2F43B7] to-transparent mb-5" />

                  {/* Paragraphs */}
                  <div className="flex flex-col gap-3">
                    {block.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-[#64748B] text-sm leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Bean Brew sub-section ── */}
      <div className="relative bg-[#EEF3FF] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pt-16 pb-6 lg:pt-24 lg:pb-10">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center">
            {/* LEFT: Four about images in staggered 2-column grid */}
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-2 gap-3 lg:gap-4"
            >
              {/* Left column — images 1 & 3 */}
              <div className="flex flex-col gap-3 lg:gap-4">
                <div className="relative rounded-2xl overflow-hidden group h-[200px] lg:h-[280px]">
                  <Image
                    src="/about/about_1.png"
                    alt="JPLC About"
                    fill
                    quality={88}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden group h-[200px] lg:h-[280px]">
                  <Image
                    src="/about/about_3.jpg"
                    alt="JPLC About"
                    fill
                    quality={88}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              {/* Right column — images 2 & 4, shifted down */}
              <div className="flex flex-col gap-3 lg:gap-4 lg:mt-10">
                <div className="relative rounded-2xl overflow-hidden group h-[200px] lg:h-[280px]">
                  <Image
                    src="/about/about_2.png"
                    alt="JPLC About"
                    fill
                    quality={88}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden group h-[200px] lg:h-[280px]">
                  <Image
                    src="/about/about_4.jpg"
                    alt="JPLC About"
                    fill
                    quality={88}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Header + two cards */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-0"
            >
              <motion.div variants={fadeUp} className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-px bg-[#2F43B7]" />
                  <p className="text-[14px] font-semibold tracking-[0.18em] uppercase text-[#2F43B7]">
                    Consumer Brand
                  </p>
                </div>
                <h2 className="font-sans font-extrabold text-3xl lg:text-4xl text-[#0F172A] tracking-[-0.03em] leading-[1.1] mb-4">
                  Bean Brew Coffee —{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    The Consumer Face of JPLC
                  </span>
                </h2>
                <p className="text-[#374151] text-sm leading-relaxed mb-2">
                  Bean Brew Coffee is JPLC&apos;s consumer brand — the part of
                  the operation that faces the end customer directly.
                </p>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  Where JPLC builds the infrastructure behind coffee businesses,
                  Bean Brew is where that infrastructure meets the cup. A
                  specialty coffee shop experience built on the same sourcing
                  standards, roast quality, and technical rigour that runs
                  through every JPLC vertical — just delivered directly to the
                  person on the other side of the bar.
                </p>
              </motion.div>

              {[
                {
                  number: "01",
                  tag: "The Coffee Shop",
                  title: "The Coffee Shop",
                  body: "Bean Brew operates as a specialty café — serving coffees developed and roasted in-house, using equipment maintained to the same standards JPLC applies across its commercial accounts. Every cup reflects the depth of the operation behind it.",
                },
                {
                  number: "02",
                  tag: "The Coffee Subscription",
                  title: "The Coffee Subscription",
                  body: "Bean Brew's subscription programme gives coffee drinkers access to freshly roasted coffee on a yearly basis — collected directly from the shop. Choose your preferred coffee, subscribe for the year, and collect at your convenience.",
                },
              ].map((card, index, arr) => (
                <motion.div
                  key={card.number}
                  variants={fadeUp}
                  className={`group relative bg-white border border-[#E5E7EB] px-8 py-8 hover:border-[#2F43B7]/35 hover:shadow-[0_8px_32px_rgba(47,67,183,0.09)] transition-all duration-300 overflow-hidden
                  ${index === 0 ? "rounded-t-2xl" : ""}
                  ${index === arr.length - 1 ? "rounded-b-2xl" : "border-b-0"}
                `}
                >
                  <div className="absolute left-0 top-0 w-[3px] h-0 group-hover:h-full bg-gradient-to-b from-[#2F43B7] to-[#4F6BFF] transition-all duration-400 rounded-r-sm" />
                  <span className="absolute -top-2 right-4 font-black text-[80px] leading-none text-[#2F43B7]/[0.05] select-none pointer-events-none">
                    {card.number}
                  </span>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[#4F6BFF] text-[10px] font-mono font-bold tracking-[0.3em]">
                        {card.number}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 border border-[#2F43B7]/30 text-[#2F43B7] bg-[#2F43B7]/5 text-[9px] font-semibold tracking-[0.2em] uppercase rounded-full">
                        {card.tag}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-xl text-[#0F172A] tracking-[-0.02em] leading-snug mb-3 group-hover:text-[#2F43B7] transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-[#64748B] text-sm leading-relaxed">
                      {card.body}
                    </p>
                    <div className="mt-4 h-px w-0 group-hover:w-12 bg-gradient-to-r from-[#2F43B7] to-[#4F6BFF] transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
