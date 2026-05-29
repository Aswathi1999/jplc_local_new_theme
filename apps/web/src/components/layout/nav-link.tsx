"use client";

import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
  lightBg?: boolean;
  onClick?: () => void;
}

export function NavLink({
  href,
  label,
  lightBg = false,
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative group text-[13px] font-medium tracking-[0.12em] uppercase transition-colors duration-300 ${
        isActive
          ? lightBg
            ? "text-[#2F43B7]"
            : "text-white"
          : lightBg
            ? "text-[#374151] hover:text-[#2F43B7]"
            : "text-white/70 hover:text-white"
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-0.5 left-0 h-px bg-[#2F43B7] transition-[width] duration-300 ease-out ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </a>
  );
}
