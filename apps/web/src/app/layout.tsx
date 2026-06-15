import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "JPLC — Enterprise Coffee Ecosystem",
  description:
    "A vertically integrated enterprise coffee ecosystem — specialty coffee infrastructure, R&D, engineering, manufacturing, and hospitality solutions.",
  icons: {
    icon: "/jplc_logo_1.png",
    apple: "/jplc_logo_1.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${inter.className} bg-[#F8FAFC] text-[#0F172A] antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
