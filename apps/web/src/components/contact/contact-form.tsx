"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: "easeOut" },
  },
};

interface FormState {
  name: string;
  company: string;
  email: string;
  businessType: string;
  inquiryType: string;
  message: string;
}

const inputClass =
  "w-full bg-white border border-[#E5E7EB] rounded-sm px-4 py-3.5 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2F43B7] focus:ring-1 focus:ring-[#2F43B7]/25 transition-all duration-200";

const selectClass =
  "w-full bg-white border border-[#E5E7EB] rounded-sm px-4 py-3.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#2F43B7] focus:ring-1 focus:ring-[#2F43B7]/25 transition-all duration-200 cursor-pointer";

const labelClass =
  "text-[#2F43B7] text-[10px] font-mono tracking-[0.3em] uppercase mb-2 block";

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    businessType: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-sm bg-white border border-[#E5E7EB] p-10 flex flex-col items-center justify-center text-center min-h-[560px] shadow-sm"
      >
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2F43B7] via-[#4F6BFF] to-transparent" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#2F43B7]/10 border border-[#2F43B7]/30 flex items-center justify-center mb-6 shadow-[0_0_24px_rgba(47,67,183,0.15)]">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path
                d="M6 14l6 6 10-12"
                stroke="#2F43B7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h3 className="font-sans font-bold text-3xl text-[#0F172A] mb-3">Message Sent</h3>
          <p className="text-[#64748B] text-base leading-relaxed max-w-sm mb-8">
            Thank you for reaching out. A member of the JPLC team will be in touch within one business day.
          </p>

          <button
            onClick={() => {
              setSubmitted(false);
              setForm({ name: "", company: "", email: "", businessType: "", inquiryType: "", message: "" });
            }}
            className="text-[#2F43B7] text-xs font-mono tracking-widest uppercase border border-[#2F43B7]/25 px-6 py-2.5 rounded-sm hover:border-[#2F43B7]/50 hover:bg-[#2F43B7]/5 transition-all duration-200"
          >
            Send another message
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-sm bg-white border border-[#E5E7EB] shadow-sm"
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2F43B7] via-[#4F6BFF] to-transparent" />

      {/* Corner bracket — bottom right */}
      <div className="absolute bottom-6 right-6 pointer-events-none z-10">
        <div className="w-5 h-px bg-[#2F43B7]/20" />
        <div className="w-px h-5 bg-[#2F43B7]/20 ml-auto" />
      </div>

      <div className="relative z-10 p-8 lg:p-10">
        {/* Form header */}
        <div className="mb-8 pb-6 border-b border-[#E5E7EB]">
          <p className="text-[#2F43B7] text-[10px] font-mono tracking-[0.35em] uppercase mb-2">Enterprise Inquiry</p>
          <h3 className="text-[#0F172A] font-bold text-xl tracking-tight">Send Us a Message</h3>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-5">

            {/* Row 1: Name + Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className={labelClass}>Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="company" className={labelClass}>Company / Organisation</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Your company"
                  value={form.company}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 2: Email + Business Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className={labelClass}>Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="businessType" className={labelClass}>Business Type</label>
                <select
                  id="businessType"
                  name="businessType"
                  value={form.businessType}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="" disabled>Select type...</option>
                  <option value="hospitality">Hospitality / F&amp;B</option>
                  <option value="retail">Coffee Retail Brand</option>
                  <option value="distributor">Distributor / Importer</option>
                  <option value="enterprise">Enterprise Operator</option>
                  <option value="individual">Individual Professional</option>
                </select>
              </div>
            </div>

            {/* Row 3: Service Interest */}
            <div>
              <label htmlFor="inquiryType" className={labelClass}>Service Interest</label>
              <select
                id="inquiryType"
                name="inquiryType"
                required
                value={form.inquiryType}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="" disabled>Select service...</option>
                <option value="partnership">Partnership</option>
                <option value="training">Training &amp; Education</option>
                <option value="hospitality">Hospitality Supply</option>
                <option value="engineering">Engineering &amp; Technical</option>
                <option value="general">General Enquiry</option>
              </select>
            </div>

            {/* Row 4: Message */}
            <div>
              <label htmlFor="message" className={labelClass}>Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your inquiry..."
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="w-full relative overflow-hidden bg-[#2F43B7] text-white text-xs font-medium tracking-widest uppercase py-4 rounded-sm hover:bg-[#2941A8] transition-colors duration-300 flex items-center justify-center gap-2.5 shadow-[0_4px_24px_rgba(47,67,183,0.25)] hover:shadow-[0_8px_32px_rgba(47,67,183,0.40)]"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
                variants={{ rest: { x: "-100%" }, hover: { x: "100%" } }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative">Send Message</span>
              <motion.svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                variants={{ rest: { x: 0 }, hover: { x: 3 } }}
                transition={{ duration: 0.2 }}
                aria-hidden="true"
                className="relative"
              >
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.button>

          </div>
        </form>
      </div>
    </motion.div>
  );
}
