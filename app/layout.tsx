import type { Metadata } from "next";
import { Geist, Geist_Mono, Amiri } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StructuredData from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Hamalatulquran Academy - Quran Memorization & Tajweed | Preston, VIC",
  description: "Dedicated to teaching the Quran with excellence in Tajweed, memorisation (Hifdh), and understanding. Join our academy for adults and advanced students in Preston, Victoria. Classes on Wednesdays & Sundays, 6:30-8:30 PM.",
  keywords: ["Quran academy", "Hifdh", "Tajweed", "Quran memorization", "Islamic education", "Preston", "Melbourne", "Victoria", "Quran classes", "Hamalatulquran"],
  authors: [{ name: "Hamalatulquran Academy" }],
  creator: "Hamalatulquran Academy",
  publisher: "Hamalatulquran Academy",
  metadataBase: new URL('https://hamalatulquran.com.au'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Hamalatulquran Academy - Transform Your Relationship with the Quran",
    description: "Excellence in Tajweed, Hifdh memorization, and Quran understanding. 6 days of online revision with dedicated teachers. Classes in Preston, VIC for men and women.",
    url: 'https://hamalatulquran.com.au',
    siteName: 'Hamalatulquran Academy',
    images: [
      {
        url: '/logo-transparent.png',
        width: 1200,
        height: 630,
        alt: 'Hamalatulquran Academy Logo',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamalatulquran Academy - Quran Memorization & Tajweed',
    description: 'Transform your relationship with the Quran. Excellence in Tajweed, Hifdh, and understanding. Join us in Preston, Victoria.',
    images: ['/logo-transparent.png'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0C5D56" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${amiri.variable} antialiased`}
      >
        <StructuredData />
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
