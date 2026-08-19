import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Revalidate daily so the footer's copyright year (and any other
// build-time-computed values) don't stay frozen for months between deploys.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Funki Izakaya | Modern Yakitoria",
  description:
    "Funki Izakaya — modern yakitoria in Metro Manila. Yakitori, sushi, ramen, and more across our Katipunan, Masinag, and Blue Ridge branches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-ink text-cream antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
