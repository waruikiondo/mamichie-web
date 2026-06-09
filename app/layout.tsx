import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Display font for headers
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

// Body and navigation font
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  // 1. Core SEO (Section 1.1 & 1.2)
  title: "Mamichie Healthcare® | The 3R Method™ for Midlife Women | Menopause Specialist",
  description: "Precision health for midlife women. Dr Vanessa Stirzaker applies root-cause clinical medicine through the 3R Method™ to Reset, Rebalance and Reclaim hormonal health. Virtual consultations worldwide.",
  
  // 2. Open Graph for Facebook, LinkedIn, WhatsApp & iMessage
  openGraph: {
    title: "Mamichie Healthcare® | The 3R Method™ for Midlife Women",
    description: "Precision health for midlife women. Dr Vanessa Stirzaker applies root-cause clinical medicine through the 3R Method™ to Reset, Rebalance and Reclaim hormonal health.",
    url: "https://mamichiehealthcare.com",
    siteName: "Mamichie Healthcare®",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mamichie Healthcare® - Precision Beats Willpower™",
      },
    ],
  },

  // 3. Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: "Mamichie Healthcare® | The 3R Method™",
    description: "Precision health for midlife women. Root-cause clinical medicine through the 3R Method™ to Reset, Rebalance and Reclaim hormonal health.",
    images: ["/og-image.jpg"],
  },

  // 4. Search Engine Directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${raleway.variable}`}>
      <body className="font-body bg-brand-tint text-brand-black antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}