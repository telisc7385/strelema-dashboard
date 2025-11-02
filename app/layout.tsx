import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// ✅ Import Outfit font
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HR Dashboard",
  description: "Employee management dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased bg-[#f8f5ff]`}>
        {children}
      </body>
    </html>
  );
}
