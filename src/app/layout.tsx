import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Anton } from "next/font/google"; // Import Anton font
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Load fonts with custom CSS variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton", // Set a custom CSS variable for Anton
  subsets: ["latin"],
  weight: "400",
});

// Define metadata for the website
export const metadata: Metadata = {
  title: "Zip Softwares",
  description: "Just Zip It",
  keywords: ["software", "development", "Zip Softwares", "Just Zip It"],
  authors: { name: "Shreyash Dhakate" }, // Correct format
  
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} antialiased`} // Apply font variables
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
