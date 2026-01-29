import type { Metadata } from "next";
import { Outfit, Playfair_Display, Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://kailash.vercel.app"),
  title: "Shri Durga Hospital - Multi-Specialty Clinic in Muzaffarpur, Bihar",
  description: "Shri Durga Hospital in Muzaffarpur offers quality healthcare with 5 expert specialist doctors. 24/7 emergency care, modern facilities. General Surgery, Gynecology, Pediatrics, Anesthesia, Orthopedics.",
  keywords: ["Best Clinic Muzaffarpur", "Hospital in Muzaffarpur", "Shri Durga Hospital", "Emergency Care Bihar", "General Surgery", "Gynecologist", "Pediatrician", "Orthopedic Surgeon", "Multi-Specialty Clinic Bihar"],
  authors: [{ name: "ShriDurga Hospital" }],
  creator: "ShriDurga Hospital",
  publisher: "ShriDurga Hospital",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.shridurgahospital.in",
    siteName: "Shri Durga Hospital",
    title: "Shri Durga Hospital - Multi-Specialty Clinic in Muzaffarpur",
    description: "Expert doctors providing quality healthcare in Muzaffarpur. 24/7 Emergency Care | Modern Facilities | Experienced Specialists.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shri Durga Hospital - Multi-Specialty Clinic in Muzaffarpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Durga Hospital - Multi-Specialty Clinic in Muzaffarpur",
    description: "Expert Doctors | 24/7 Emergency Care | Modern Medical Facilities in Muzaffarpur, Bihar",
    images: ["/og-image.png"],
    creator: "@shridurgahospital",
  },
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
  other: {
    "geo.region": "IN-BR",
    "geo.placename": "Muzaffarpur",
    "geo.position": "26.1225;85.3906",
    "ICBM": "26.1225, 85.3906",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "Shri Durga Hospital",
    "description": "Multi-specialty clinic with experienced doctors offering quality healthcare services in Muzaffarpur, Bihar. 24/7 emergency care available.",
    "url": "https://www.shridurgahospital.in",
    "logo": "https://www.shridurgahospital.in/ShriDurgaLogoo.png",
    "image": "https://www.shridurgahospital.in/og-image.png",
    "telephone": "+91-9771447716",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thana Road, Kondhi, Ward No-17",
      "addressLocality": "Muzaffarpur",
      "addressRegion": "Bihar",
      "postalCode": "843109",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.5355",
      "longitude": "77.3910"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "medicalSpecialty": ["Cardiology", "Neurology", "Orthopedics", "Emergency Medicine", "Radiology"],
    "sameAs": [
      "https://facebook.com/kailashhospital",
      "https://twitter.com/kailashhospital",
      "https://instagram.com/kailashhospital"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${playfair.variable} ${roboto.variable} antialiased`}
      >
        <LanguageProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

