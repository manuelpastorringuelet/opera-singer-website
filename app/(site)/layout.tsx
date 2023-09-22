import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Raleway } from "next/font/google";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ToasterProvider from "@/providers/ToasterProvider";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taryn Knerr",
  description: "Opera Singer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} flex min-h-screen flex-col overflow-y-auto overflow-x-hidden`}
      >
        <ToasterProvider />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="theme"
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
