import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Chlaudya Margareta — Senior Frontend Engineer",
    template: "%s | Chlaudya Margareta",
  },
  description:
    "Frontend Engineer in Bali — 6+ years with React, TypeScript, and modern JS. 10+ corporate platforms, 30% engagement uplift, AI-assisted delivery, and payment integrations.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Bali",
    "Portfolio",
  ],
  authors: [{ name: "Chlaudya Margareta" }],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "Chlaudya Margareta — Senior Frontend Engineer",
    description:
      "React & TypeScript engineer — corporate platforms, admin dashboards, AI-assisted workflows, and payment integrations across global teams.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chlaudya Margareta — Senior Frontend Engineer",
    description:
      "React & TypeScript engineer — corporate platforms, admin dashboards, AI-assisted workflows, and payment integrations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="top-center" />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
