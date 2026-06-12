import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bold Grooming Store",
  description: "Global grooming e-commerce homepage with country and language selection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}