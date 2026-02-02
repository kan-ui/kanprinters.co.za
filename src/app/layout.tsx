import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget }  from "@/components/PopupWidget";

// Modern designer font for body text - friendly, creative, professional
const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Elegant serif for headings - adds sophistication and design flair
const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kan Screenprinters - Transform Ideas Into Lasting Impressions | Cape Town",
  description: "Founded in 2000, Kan Screenprinters blends traditional screen-printing expertise with modern digital technologies. We offer design, screen printing, pad printing, digital printing, laser engraving, sublimation, heat transfer, and UV DTF printing. Rooted in craftsmanship, loyalty, and community trust. Serving Cape Town and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${playfairDisplay.variable} font-sans`}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
