import "../globals.css";
import type { Metadata } from "next";
import { Hind_Madurai } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ToasterProvider from "@/providers/ToasterProvider";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const hindMadurai = Hind_Madurai({
  weight: "300",
  subsets: ["latin"],
  preload: true,
});

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${hindMadurai.className} flex min-h-screen flex-col overflow-y-auto overflow-x-hidden bg-background`}
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
