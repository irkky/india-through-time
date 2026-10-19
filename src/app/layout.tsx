import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./prehistory.css";

export const metadata: Metadata = {
  title: "History of India",
  description: "An interactive, scroll-driven journey through the history of India.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
