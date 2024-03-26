import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../app/globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CineSphere",
  description: "CineSphere application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className} style={{padding: 0, margin: 0,}}>{children}</body>
    </html>
  );
}
