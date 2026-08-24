import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tiyani Magomani",
  description: "Explore structured investment pathways built around growth, income and flexibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
