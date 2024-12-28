import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//components
import Navbar from "@/components/navbar";

const urbanist = Urbanist({ variable: "--font-urbanist-sans", subsets: ["latin"], });

export const metadata: Metadata = {
  title: "Arturo Victoria | Developer",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${urbanist.variable} antialiased`} >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
