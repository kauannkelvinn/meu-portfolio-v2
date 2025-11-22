import type { Metadata } from "next";
import { Header } from "./components/Header";
import "./globals.css";
import { Space_Grotesk, Space_Mono } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: "Portfólio Neo Brutalist",
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
        className={`${spaceGrotesk.variable} ${spaceMono.variable} font-mono bg-pure-black text-pure-white antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
