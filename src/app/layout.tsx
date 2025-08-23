import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mommyology - Nature-based Fun for Kids",
  description: "Events, adventures, and learning in nature for every child. Discover, play, and grow with Mommyology!",
  keywords: ["children", "nature", "education", "outdoor activities", "kids events", "nature walks", "art workshops"],
  authors: [{ name: "Mommyology Team" }],
  creator: "Mommyology",
  publisher: "Mommyology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mommyology.com'),
  openGraph: {
    title: "Mommyology - Nature-based Fun for Kids",
    description: "Events, adventures, and learning in nature for every child. Discover, play, and grow with Mommyology!",
    url: 'https://mommyology.com',
    siteName: 'Mommyology',
    images: [
      {
        url: '/Images/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Mommyology Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mommyology - Nature-based Fun for Kids",
    description: "Events, adventures, and learning in nature for every child. Discover, play, and grow with Mommyology!",
    images: ['/Images/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6B5AA2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-[#F8F6FF] via-white to-[#F0F8FF]`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
