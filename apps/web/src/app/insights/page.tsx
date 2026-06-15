import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Blog | JPLC",
  description:
    "Industry insights, coffee ecosystem updates, and partnership opportunities from JPLC Holdings.",
};

export default function InsightsPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,67,183,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,0.04) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      {/* Soft orbs */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at -10% -10%, rgba(238,242,255,0.9) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 110% 110%, rgba(79,107,255,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center py-24">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-10"
          style={{
            background: "rgba(47,67,183,0.06)",
            border: "1px solid rgba(47,67,183,0.14)",
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#4F6BFF] animate-pulse" />
          <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-[#2F43B7]">
            Coming Soon
          </span>
        </div>

        <h1 className="font-black text-[#0F172A] text-[38px] lg:text-[52px] leading-[1.0] tracking-[-0.035em] mb-6">
          Insights &{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Blog
          </span>
        </h1>

        <p className="text-[#475569] text-[16px] leading-[1.82] mb-10 max-w-lg mx-auto">
          Industry insights, coffee ecosystem updates, and partnership
          opportunities from JPLC — launching soon.
        </p>

        <a
          href="/contact"
          className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-white text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, #2F43B7 0%, #4F6BFF 100%)",
            boxShadow: "0 8px 28px rgba(79,107,255,0.28)",
          }}
        >
          Get in Touch
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth={1.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </main>
  );
}
