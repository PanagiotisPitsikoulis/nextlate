import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutNavbar from "@/components/layout/navbar";
import LayoutFooter from "@/components/layout/footer";
import { Providers } from "@/lib/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simply Drive",
  description: "Σήματα Οδήγησης, ΚΟΚ, Δίπλωμα, Αυτοκίνητο, Τέστ, Σήματα",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <LayoutNavbar />
          <div className="px-4 md:px-28 py-4">
            <div className="min-h-screen">{children}</div>
            <LayoutFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
