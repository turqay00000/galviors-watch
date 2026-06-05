import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import LenisSmoothScroll from "@/components/LenisSmoothScroll";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic-ext"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "GALVIORS Ganja - Premium Lüks Saatlar | Zamanı İdarə Et",
  description: "GALVIORS Ganja - Gəncədə premium lüks saatlar. Premium keyfiyyət, sürətli çatdırılma və etibarlı xidmət. Zamanı idarə et!",
  keywords: "GALVIORS Ganja, lüks saatlar, premium saatlar, Gəncə saat mağazası, Azərbaycan saatlar",
  openGraph: {
    title: "GALVIORS Ganja - Premium Lüks Saatlar",
    description: "GALVIORS Ganja - Gəncədə premium lüks saatlar. Premium keyfiyyət, sürətli çatdırılma və etibarlı xidmət.",
    locale: "az_AZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body
        className={`${cormorant.variable} ${inter.variable} font-inter antialiased`}
      >
        <LenisSmoothScroll />
        {children}
      </body>
    </html>
  );
}
