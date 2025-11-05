import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ChakraUiProvider } from "./providers/ChakraUiProvider";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import Navbar from "./components/atoms/Navbar";
import { ToastProvider } from "@chakra-ui/react";
import Footer from "./components/atoms/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael",
  description: "Displaying Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ChakraUiProvider>
          <ReactQueryProvider>
            <Navbar />
            <ToastProvider />
            {children}
            <Footer />
          </ReactQueryProvider>
        </ChakraUiProvider>
      </body>
    </html>
  );
}
