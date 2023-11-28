import type, { Metadata } from "next";

import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";

import "./globals.css";
import { Navbar } from "@/components/Navbar";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store E-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
