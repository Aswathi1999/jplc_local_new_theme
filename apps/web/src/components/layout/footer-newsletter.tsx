"use client";

import { useState } from "react";

export function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <div className="py-16 border-b border-[#F5E6D3]/8">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[#F8921D] text-xs font-medium tracking-[0.3em] uppercase mb-3">
            Stay Informed
          </p>
          <h3 className="font-serif text-3xl lg:text-4xl text-[#F5E6D3] leading-tight">
            Join the Future of Specialty Coffee
          </h3>
        </div>
        <div>
          <p className="text-[#C4906A] text-sm leading-relaxed mb-6">
            Industry insights, ecosystem updates, and partnership opportunities
            — delivered to your inbox.
          </p>

          {submitted ? (
            <div className="flex items-center gap-3 text-[#F8921D]">
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm">
                You&apos;re on the list. We&apos;ll be in touch.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-[#F5E6D3]/6 border border-[#F5E6D3]/12 rounded-sm px-4 py-3 text-[#F5E6D3] placeholder-[#9B7060] text-sm focus:outline-none focus:border-[#F8921D]/50 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-[#F8921D] text-white text-sm font-medium rounded-sm hover:bg-[#E07B10] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
