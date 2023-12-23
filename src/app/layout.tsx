import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LangProvider from "./context/langContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Hulyo Firman Syahputra — Portofolio</title>
        <link rel="icon" href="/favicon.ico"></link>
      </head>
      <body className={inter.className}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
