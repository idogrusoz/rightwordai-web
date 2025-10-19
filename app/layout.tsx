import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rightword.ai"),
  title: {
    default: "Rightword.AI — Practical AI for Modern SMBs",
    template: "%s | Rightword.AI"
  },
  description:
    "Rightword.AI builds AI-driven solutions that eliminate busywork and unlock compounding efficiency for small and mid-sized businesses.",
  keywords: [
    "AI consulting",
    "automation",
    "workflow modernization",
    "Rightword.AI",
    "SMB AI",
    "process optimization"
  ],
  openGraph: {
    title: "Engineering intelligence into every process.",
    description:
      "Reliable, AI-driven systems tailored for small and mid-sized businesses.",
    url: "https://www.rightword.ai",
    siteName: "Rightword.AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rightword.AI — AI systems for modern businesses"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rightword.AI",
    description:
      "AI-first automation and modernization for ambitious SMB teams.",
    images: ["/og-image.png"],
    creator: "@rightwordai"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.className} ${plusJakarta.variable} bg-slate-50 text-slate-900 antialiased selection:bg-brand-light/30 selection:text-slate-900 font-sans`}
      >
        <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[420px] bg-hero-sheen" />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(80%_100%_at_50%_-20%,rgba(91,124,250,0.16),transparent)]" />
        {children}
      </body>
    </html>
  );
}
