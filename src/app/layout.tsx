import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-[4rem] p-3 flex justify-center">
          <nav className="w-[70%] flex items-center justify-between p-3 rounded shadow-2xl sticky top-0">
            <p className="text-[1.2rem] text-bold ml-3">Urara Factory</p>

            <Button className="mr-3">Login</Button>
          </nav>
        </div>

        {children}
      </body>
      <Toaster />
    </html>
  );
}
