import { Suspense } from "react";
import "./globals.css";
import { DM_Sans, Inter, Manrope } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"], // Include weights you may use
});

export const metadata = {
  title: {
    default: "Expertbuddy | Elevate your learning",
    template: "%s | Expertbuddy",
  },
  description:
    "Accelerate your skills with ExpertBuddy’s curated resources, expert mentors, and real-time collaboration tools.",
  keywords: [
    "ExpertBuddy",
    "Next.js Internship",
    "Frontend Assignment",
    "Mentorship",
    "Learning Platform",
  ],
  openGraph: {
    title: "ExpertBuddy | Learn with Experts",
    description:
      "Your gateway to expert mentorship and learning. Built with Next.js v15 and modern UI.",
    url: "",
    siteName: "ExpertBuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ExpertBuddy | Learn with Experts",
    description:
      "Modern frontend learning powered by mentors and top-notch UI.",
  },
};

export default function RootLayout({ children, modals }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${dmSans.variable}`}>
      <head />
      <body>
        <Navbar />
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          {children}
        </Suspense>
        <Suspense fallback={null}>{modals}</Suspense>
      </body>
    </html>
  );
}
