import type { Metadata } from "next";
import { Economica } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const economica = Economica({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-economica",
});

export const metadata: Metadata = {
  title: "SimoWorld",
  description: "El portal para el simracer de habla hispana",
};

export default function GlobalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body className={`${economica.variable} bg-black text-white`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
