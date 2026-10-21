import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samir Amin",
  description: "Full-stack developer & AI/ML engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}