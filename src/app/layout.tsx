import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import RootLayoutShell from "@/components/RootLayoutShell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Santi Weight",
  description: "Personal website of Santi Weight",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RootLayoutShell className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </RootLayoutShell>
      </body>
    </html>
  );
}
