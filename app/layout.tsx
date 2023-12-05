import type, { Metadata } from "next";

import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import ModalProvider from "@/providers/modal-provider";
import { ToastProvider } from "@/components/ToastProvider";
import { ClientProvider } from "@/components/ClientProvider";

import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loja",
  description: "Loja E-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProvider>
      <html lang="en">
        <body className={cn(font.className, "min-h-screen relative")}>
          <ModalProvider />
          <ToastProvider />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClientProvider>
  );
}
