import type, { Metadata } from "next";

import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import ModalProvider from "@/providers/modal-provider";

import "./globals.css";
import { ToastProvider } from "@/components/ToastProvider";
import { cn } from "@/lib/utils";

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
      <body className={cn(font.className, "min-h-screen relative")}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
