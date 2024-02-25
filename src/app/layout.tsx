import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simoworld",
  description: "Planificador de eventos de simracing",
};

const GlobalLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ClerkProvider>
      <html lang="es">
        <body
          className={`${jost.className} flex items-center justify-center min-h-screen`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
};

export default GlobalLayout;
