import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oregale",
  description: "Bienvenue à \"Oregale\" - un restaurant proposant des burgers, des tacos et des plats de pâtes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
