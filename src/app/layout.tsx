import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import CosmicCursor from "@/components/ui/CosmicCursor";

const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/layout/Navbar";
import Starfield from "@/components/ui/Starfield";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Premium Developer Portfolio",
  description: "A high-end developer portfolio built with Next.js, Three.js, and GSAP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <SmoothScrollProvider>
          <Starfield />
          <CosmicCursor />
          <div className="relative z-10">
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
