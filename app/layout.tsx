import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from 'next/font/google';
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ClientEffects from "./components/effects/ClientEffects";
import Preloader from "./components/effects/Preloader";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: "swap",
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kauan Kelvin - Full Stack Developer",
  description: "Portfolio de desenvolvedor full stack especializado em React, Next.js e soluções modernas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body className="font-mono bg-pure-black text-pure-white antialiased">
        <Preloader />
        <ClientEffects />
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
