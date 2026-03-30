import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fardeen Tours & Travels | Discover the Beauty of India",
  description:
    "Premium India tour packages — Golden Triangle, Rajasthan, Kashmir, and South India. Personalized itineraries, expert guides, and best rate guarantee. Book your dream India trip today.",
  keywords: [
    "India tours",
    "Golden Triangle tour",
    "Rajasthan tour",
    "Taj Mahal tour",
    "India travel packages",
    "luxury India travel",
    "Delhi Agra Jaipur tour",
    "same day Taj Mahal",
    "North India tours",
    "South India tours",
  ],
  openGraph: {
    title: "Fardeen Tours & Travels | Discover the Beauty of India",
    description:
      "Premium India tour packages with personalized itineraries. Golden Triangle, Rajasthan, Kashmir & more.",
    type: "website",
    locale: "en_US",
    siteName: "Fardeen Tours & Travels",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fardeen Tours & Travels",
    description: "Premium India tour packages with personalized itineraries.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
