"use client";

import { Sen } from "next/font/google";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";

// Components
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// ThemeProvider
import { ThemeProvider } from "@/components/ThemeProvider";

const Josef = Sen({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Dynamic page titles based on route
const pageTitles = {
  "/": "Home - New Rangoli Builders",
  "/about": "About - New Rangoli Builders",
  "/gallery": "Gallery - New Rangoli Builders",
  "/projects": "Projects - New Rangoli Builders",
  "/contact": "Contact - New Rangoli Builders",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Dynamically set the document title based on the current path
    const title = pageTitles[pathname] || "New Rangoli Builders";
    document.title = title;
  }, [pathname]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={Josef.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
