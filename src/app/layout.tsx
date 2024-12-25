import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Anton } from "next/font/google"; // Import Anton font
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Adding Anton font
const anton = Anton({
  variable: "--font-anton", // Set a custom CSS variable name for Anton
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Zip Softwares",
  description: "Just Zip It",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} antialiased`} // Add the Anton variable here
      >
        {children}
      </body>
    </html>
  );
}
