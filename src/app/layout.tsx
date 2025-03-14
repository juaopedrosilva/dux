import type { Metadata } from "next";
import "./globals.css";

import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: "--font-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Consultoria Dux",
  description: "Consultoria Dux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
