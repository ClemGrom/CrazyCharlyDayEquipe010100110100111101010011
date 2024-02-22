import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CookingBook",
  description: "Crazy Charly Day 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
