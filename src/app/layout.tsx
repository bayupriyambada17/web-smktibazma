import { Quicksand } from "next/font/google";
import type { Metadata } from 'next'
import "./globals.css";
import Header from "@/components/layouts/Header";
import Announcement from "@/components/layouts/Announcement";
import Footer from "@/components/layouts/Footer";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Website Resmi - SMK',
  description: '...',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-gray-100`}>
        <Announcement />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
