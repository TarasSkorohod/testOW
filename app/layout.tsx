import React from "react";
import "./globals.css";
import { Metadata } from "next";
import localFont from "next/font/local";
// import { Inter } from "next/font/google";
import { Jockey_One } from "next/font/google";
import { Bungee_Inline } from "next/font/google";
import { Rowdies } from "next/font/google";
import { Rubik_Wet_Paint } from "next/font/google";
import { Baskervville } from "next/font/google";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { ButtonUpScroll } from "@/components/buttonUpScroll/ButtonUpScroll";

const jok = Jockey_One({ weight: "400", subsets: ["latin"] });
// const bun = Bungee_Inline({ weight: "400", subsets: ["latin"] });
// const rubik = Rubik_Wet_Paint({ weight: "400", subsets: ["latin"] });
// const baskervville = Baskervville({ weight: "400", subsets: ["latin"] });
// const rowdies = Rowdies({ weight: "400", subsets: ["latin"] });
// const inter = Inter({ subsets: ["latin"] });
// const myFont = localFont({ src: "./Ash.ttf" });

export const metadata: Metadata = {
  title: "Capital Upfitters",
  description:
    "Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="180x180" href="favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <title></title>
      </head>
      <body className={`${jok.className} relative`}>
        {/* <body className={`${myFont.className} relative`}> */}
        <Header />
        <main>{children}</main>
        <Toaster position="top-center" reverseOrder={false} />
        <ButtonUpScroll />
        <Footer />
      </body>
    </html>
  );
}
