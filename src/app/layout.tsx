import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Importamos la fuente Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bamba Tech | Soporte Técnico Especializado",
  description: "Diagnóstico, reparación y mantenimiento de computadoras y redes directamente en tu domicilio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
