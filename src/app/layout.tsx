import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Sidebar } from '@/components/sidebar'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leptrum",
  description: "Catalogo de produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "min-h-screen bg-slate-300 font-sans antialiased",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
