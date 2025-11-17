import type { Metadata } from "next";
import { VT323, Fira_Code } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import DigitalRain from "./components/DigitalRain";
import { Scanlines } from "./components/Scanlines";
import { LayoutClient } from "./components/LayoutClient";

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
})

const vt323 = VT323({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-vt323",
})

export const metadata: Metadata = {
  title: "Portfólio Matrix",
  description: "Portólio de Kauan Kelvin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${firaCode.variable} ${vt323.variable} font-mono bg-deep-black text-ghost-white min-h-screen flex flex-col`}
      >
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <DigitalRain />
          <Scanlines />
        </div>
        <LayoutClient>
          <Header />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </LayoutClient>
      </body>
    </html>
  );
}
