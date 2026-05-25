"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
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

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

interface StoryBlock {
  number: string;
  imageUrl: string;
  imageAlt: string;
  tag: string;
  title: string;
  body: string;
  imageLeft: boolean;
}

const storyBlocks: StoryBlock[] = [
  {
    number: "01",
    imageUrl:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=85&auto=format&fit=crop",
    imageAlt: "Coffee roasting precision engineering",
    tag: "Philosophy",
    title: "Built on Precision, Driven by Innovation",
    body: "JPLC was founded on a singular conviction — that specialty coffee deserved the same engineering rigour as industrial manufacturing. We built systems, not just products. Processes, not just recipes. Every extraction parameter, every roast curve, every machine component is engineered with precision.",
    imageLeft: true,
  },
  {
    number: "02",
    imageUrl:
      "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=900&q=85&auto=format&fit=crop",
    imageAlt: "Vertically integrated coffee operations",
    tag: "Operations",
    title: "A Vertically Integrated Ecosystem",
    body: "From green coffee procurement at origin to enterprise café deployments — JPLC operates across the entire specialty coffee value chain. Our vertical integration eliminates fragmentation, ensures consistency, and gives our partners a single trusted infrastructure partner.",
    imageLeft: false,
  },
  {
    number: "03",
    imageUrl:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=900&q=85&auto=format&fit=crop",
    imageAlt: "Global coffee supply chain",
    tag: "Global",
    title: "Enterprise Scale, Specialty Standards",
    body: "Operating from DMCC in Dubai, we serve regional and international markets with the same uncompromising standards. Our infrastructure scales from single-outlet café deployments to multinational corporate coffee programmes — without ever lowering the bar.",
    imageLeft: true,
  },
];

function StoryBlockItem({ block }: { block: StoryBlock }) {
  const imageVariant = block.imageLeft ? slideFromLeft : slideFromRight;
  const contentVariant = block.imageLeft ? slideFromRight : slideFromLeft;

  const imageEl = (
    <motion.div
      variants={imageVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative h-[320px] lg:h-auto overflow-hidden group"
    >
      <Image
        src={block.imageUrl}
        alt={block.imageAlt}
        fill
        quality={85}
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-[#0F172A]/20 to-transparent transition-all duration-500 group-hover:from-[#2F43B7]/15" />
      {/* Directional side overlay */}
      <div className={`absolute inset-0 ${block.imageLeft ? "bg-gradient-to-r from-transparent to-[#0F172A]/30" : "bg-gradient-to-l from-transparent to-[#0F172A]/30"}`} />
      {/* Edge accent line on inner edge */}
      <div
        className={`absolute top-0 bottom-0 ${block.imageLeft ? "right-0" : "left-0"} w-[2px] overflow-hidden`}
      >
        <div className="w-full h-0 group-hover:h-full transition-all duration-700 ease-out bg-gradient-to-b from-transparent via-[#4F6BFF]/70 to-transparent" />
      </div>
      {/* Floating tag badge */}
      <div className="absolute bottom-5 left-5">
        <span className="inline-flex items-center px-3 py-1.5 bg-[#0F172A]/80 backdrop-blur-sm border border-[#2F43B7]/30 text-[#6B8BFF] text-[10px] font-medium tracking-[0.2em] uppercase rounded-sm">
          {block.tag}
        </span>
      </div>
    </motion.div>
  );

  const contentEl = (
    <motion.div
      variants={contentVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`relative bg-[#F8FAFC] px-10 lg:px-16 py-8 lg:py-12 flex flex-col justify-center overflow-hidden ${block.imageLeft ? "border-l-[3px] border-[#2F43B7]/20" : "border-r-[3px] border-[#2F43B7]/20"}`}
    >
      {/* Ghost number */}
      <span
        className="absolute -top-4 right-4 font-sans font-bold text-[160px] leading-none text-[#2F43B7]/[0.05] select-none pointer-events-none"
        aria-hidden="true"
      >
        {block.number}
      </span>

      {/* Tag pill */}
      <span className="inline-flex w-fit items-center px-3 py-1 border border-[#2F43B7]/40 text-[#2F43B7] bg-[#2F43B7]/5 text-[10px] font-medium tracking-[0.2em] uppercase rounded-full mb-6">
        {block.tag}
      </span>

      {/* Heading */}
      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-sans font-extrabold text-3xl lg:text-4xl text-[#0F172A] tracking-[-0.02em] leading-tight mb-6"
      >
        {block.title}
      </motion.h3>

      {/* Body */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[#374151] text-base lg:text-lg leading-relaxed"
      >
        {block.body}
      </motion.p>

      {/* Bottom underline accent */}
      <div className="mt-5 w-8 h-px bg-gradient-to-r from-[#2F43B7] to-[#4F6BFF]/50" />
    </motion.div>
  );

  return (
    <div className="lg:grid lg:grid-cols-2 gap-0 items-stretch">
      {block.imageLeft ? (
        <>
          {imageEl}
          {contentEl}
        </>
      ) : (
        <>
          {contentEl}
          {imageEl}
        </>
      )}
    </div>
  );
}

export function CompanyStory() {
  return (
    <section id="story" className="relative bg-[#F8FAFC] overflow-hidden">
      {/* Subtle blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,67,183,1) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#2F43B7] opacity-[0.04] blur-[130px] rounded-full pointer-events-none" />

      {/* Section header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pt-20 lg:pt-28 pb-14 lg:pb-18">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#2F43B7]" />
            <p className="text-[#2F43B7] text-[11px] font-semibold tracking-[0.45em] uppercase">
              Our Story
            </p>
          </div>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-sans font-extrabold text-4xl lg:text-5xl xl:text-6xl text-[#0F172A] tracking-[-0.03em] leading-[1.08] max-w-2xl mb-6"
        >
          From origin to innovation —{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #2F43B7 0%, #6074E8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            built to last.
          </span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="origin-left h-px bg-gradient-to-r from-[#2F43B7]/50 via-[#E5E7EB] to-transparent max-w-2xl"
        />
      </div>

      {/* Story blocks */}
      <div className="relative z-10">
        {storyBlocks.map((block, index) => (
          <div key={block.number}>
            <StoryBlockItem block={block} />
            {index < storyBlocks.length - 1 && (
              <div className="border-t border-[#2F43B7]/10" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
