import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Shelter Run — Run for shelter dogs · €20",
  description:
    "An easy, beginner-friendly community run. Your €20 funds food, toys, and supplies for shelter dogs — and includes 3 months free founder access to our pet care app.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "The Shelter Run — Run for shelter dogs · €20",
    description:
      "Beginner-friendly community run. Your €20 helps shelter dogs and unlocks 3 months free founder access to our pet care app.",
    type: "website",
    images: ["/hero-run.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
