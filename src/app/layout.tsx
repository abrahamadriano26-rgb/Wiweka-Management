import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Copyright from "@/components/copyright";

export const metadata: Metadata = {
  title: "Wiweka Management",
  description:
    "Professional business management solutions for sustainable growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Navbar />

        <main className="pt-21.5">
          {children}
        </main>

        <Copyright />
      </body>
    </html>
  );
}