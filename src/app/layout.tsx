import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });

export const metadata: Metadata = {
  title: "Frontend Test NextJs",
  description: "Technical test for Frontend Developer posisition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-gradient-to-b from-stone-50 via-stone-100 to-stone-50`}>{children}</body>
    </html>
  );
}
