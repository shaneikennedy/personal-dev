import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shane Kennedy — Software Engineer",
    template: "%s — Shane Kennedy",
  },
  description: "Personal website of Shane Kennedy, software engineer based in Stockholm.",
  metadataBase: new URL("https://shaneikennedy.xyz"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:border focus:border-border focus:bg-surface-raised focus:px-4 focus:py-3 focus:font-mono focus:text-sm focus:text-zinc-100"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="mx-auto max-w-5xl px-6 pb-24 pt-16" tabIndex={-1}>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
