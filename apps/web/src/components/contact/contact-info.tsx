"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const LocationIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const EmailIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

interface EmailEntry {
  role: string;
  address: string;
}

const infoCards: {
  id: string;
  label: string;
  title: string;
  lines: string[];
  emails?: EmailEntry[];
  icon: ReactNode;
}[] = [
  {
    id: "01",
    label: "Visit Us",
    title: "Bean Brew Coffee and Entertainment LLC",
    lines: ["Al Nahda 2, Dubai — UAE"],
    icon: <LocationIcon />,
  },
  {
    id: "02",
    label: "Call Us",
    title: "+971 4 576 5629",
    lines: ["+971 50 531 1902"],
    icon: <PhoneIcon />,
  },
  {
    id: "03",
    label: "Email Us",
    title: "",
    lines: [],
    emails: [
      { role: "General Inquiries", address: "info@beanbrewcoffee.com" },
      { role: "Partnerships", address: "hello@beanbrewcoffee.com" },
      { role: "Leo Clements", address: "leo.clements@beanbrewcoffee.com" },
      { role: "John Prathap", address: "john.prathap@beanbrewcoffee.com" },
    ],
    icon: <EmailIcon />,
  },
];

export function ContactInfo() {
  return (
    <div>
      {/* Intro */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[1.5px] bg-[#2F43B7]" />
          <span className="text-[14px] font-semibold tracking-[0.18em] uppercase text-[#2F43B7]">
            Let&apos;s Talk Coffee
          </span>
        </div>

        <h2 className="font-black text-[#0F172A] text-[28px] lg:text-[34px] leading-[1.1] tracking-[-0.03em] mb-6">
          Get in Touch With the{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            JPLC Team
          </span>
        </h2>

        <div className="space-y-4">
          <p className="text-[#475569] text-[14px] leading-[1.85]">
            Most coffee businesses eventually hit the same wall — a supplier who
            can&apos;t scale with them, equipment that nobody services properly,
            or a programme that works on paper but falls apart in practice.
          </p>
          <p className="text-[#475569] text-[14px] leading-[1.85]">
            JPLC exists to remove that friction. As a fully integrated specialty
            coffee infrastructure company, we don&apos;t just solve one part of
            the problem. We cover the whole chain — sourcing, roasting,
            equipment, manufacturing, training, and distribution — under one
            roof, with one team accountable for all of it.
          </p>
          <p className="text-[#475569] text-[14px] leading-[1.85]">
            The businesses that work with us aren&apos;t looking for the
            cheapest option. They&apos;re looking for the right partner — one
            who understands the product, knows the market, and has the
            infrastructure to back it up.
          </p>
          <p className="text-[#0F172A] font-medium text-[14px] leading-[1.85]">
            If that sounds like the right fit, we&apos;d like to hear from you.
          </p>
        </div>
      </motion.div>

      {/* Horizontal cards */}
      <div className="flex flex-col gap-3">
        {infoCards.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="group flex items-start gap-4 bg-white rounded-xl px-5 py-4 transition-all duration-300 hover:-translate-y-0.5"
            style={{
              border: "1px solid #E5E7EB",
              boxShadow: "0 2px 8px rgba(15,23,42,0.04)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(47,67,183,0.35)";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 8px 28px rgba(47,67,183,0.10)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "#E5E7EB";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 2px 8px rgba(15,23,42,0.04)";
            }}
          >
            {/* Icon */}
            <div
              className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_16px_rgba(47,67,183,0.18)]"
              style={{
                background: "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)",
                border: "1px solid rgba(47,67,183,0.15)",
                color: "#2F43B7",
              }}
            >
              {card.icon}
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#2F43B7] mb-1">
                {card.label}
              </p>

              {card.title && (
                <p className="text-[#0F172A] text-[13px] font-semibold leading-snug mb-0.5">
                  {card.title}
                </p>
              )}

              {card.lines.map((line, j) => (
                <p
                  key={j}
                  className="text-[#64748B] text-[12px] leading-relaxed"
                >
                  {line}
                </p>
              ))}

              {card.emails && (
                <div className="mt-2 space-y-1.5">
                  {card.emails.map((em) => (
                    <div
                      key={em.role}
                      className="flex items-baseline gap-2 flex-wrap"
                    >
                      <span className="text-[#94A3B8] text-[10px] font-medium tracking-wide whitespace-nowrap">
                        {em.role}
                      </span>
                      <a
                        href={`mailto:${em.address}`}
                        className="text-[#2F43B7] text-[12px] font-medium hover:underline break-all"
                      >
                        {em.address}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
