import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import localFont from 'next/font/local'
import RootLayoutClient from "./RootLayoutClient";
import { getSiteSettings } from "@/lib/sanity-utils";

const ohno = localFont({
  src: './Fonts/OhnoSoftieVariable.woff2',
  variable: '--font-ohno',
  display: 'swap',
  // Because it's a variable font, you don't need to specify weight/style ranges
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cuddles Preschool - Where Imagination Takes Flight",
  description: "At Cuddles Preschool, we believe that every child's journey begins with a sense of wonder, joy, and discovery. We are more than just a place for early education, we're a second home where children feel loved, valued, and inspired to explore the world around them.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = await getSiteSettings();

  return (
    <html lang="en" className={`${ohno.className} ${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased font-ohno">
        <RootLayoutClient siteSettings={siteSettings}>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
