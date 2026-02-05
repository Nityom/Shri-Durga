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
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://shridurgahospital.in"),
  title: "Shri Durga Hospital - 10+ Years of Quality Healthcare | Multi-Specialty Clinic in Kanti, Muzaffarpur",
  description: "Shri Durga Hospital located in Kanti, Muzaffarpur offers quality-focused, cost-effective healthcare with 10+ years of experience. Expert specialized doctors providing 24/7 emergency care. General Surgery, Gynecology, Pediatrics, Anesthesia, Orthopedics.",
  keywords: [
    "Shri Durga Hospital Muzaffarpur",
    "Shri Durga Hospital Kanti",
    "Hospital in Kanti Muzaffarpur",
    "Best Clinic Kanti",
    "Healthcare Kanti Bihar",
    "10+ years experience hospital Bihar",
    "Best Clinic Muzaffarpur",
    "Quality Healthcare Muzaffarpur",
    "Cost Effective Hospital Bihar",
    "Specialized Doctors Muzaffarpur",
    "Specialized Doctors Kanti",
    "Multi-Specialty Clinic Bihar",
    "Multi-Specialty Clinic Kanti",
    "Expert General Surgeon Muzaffarpur",
    "Best Gynecologist Muzaffarpur",
    "Best Gynecologist Kanti",
    "Pediatrician Bihar",
    "Pediatrician Kanti",
    "Orthopedic Surgeon Muzaffarpur",
    "Orthopedic Surgeon Kanti",
    "24/7 Emergency Care Bihar",
    "Emergency Hospital Kanti",
    "Affordable Healthcare Muzaffarpur",
    "Affordable Hospital Kanti",
    "Experienced Doctors Bihar",
    "Experienced Doctors Kanti",
    "Modern Hospital Facilities Muzaffarpur",
    "Hospital near Kanti",
    "Medical Care Kanti Muzaffarpur"
  ],
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
    title: "Shri Durga Hospital - 10+ Years of Quality Healthcare | Specialized Doctors in Kanti, Muzaffarpur",
    description: "Quality-focused & cost-effective healthcare with 10+ years of experience. Expert specialized doctors providing 24/7 emergency care in Kanti, Muzaffarpur, Bihar.",
    images: [
      {
        url: "/ShriDurgaLogoo.png",
        width: 1200,
        height: 630,
        alt: "Shri Durga Hospital - Multi-Specialty Clinic in Muzaffarpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Durga Hospital - 10+ Years Quality Healthcare | Specialized Doctors in Kanti",
    description: "Cost-effective healthcare | 10+ years experience | Specialized doctors | 24/7 emergency care in Kanti, Muzaffarpur, Bihar",
    images: ["/ShriDurgaLogoo.png"],
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
    "description": "Multi-specialty clinic with 10+ years of experience offering quality-focused and cost-effective healthcare services through specialized doctors in Kanti, Muzaffarpur, Bihar. 24/7 emergency care available.",
    "url": "https://www.shridurgahospital.in",
    "logo": "https://www.shridurgahospital.in/ShriDurgaLogoo.png",
    "image": "https://www.shridurgahospital.in/og-image.png",
    "telephone": "+91-8789186308",
    "priceRange": "$$",
    "foundingDate": "2014",
    "slogan": "Quality Healthcare with 10+ Years of Experience",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thana Road, Kanti, Ward No-17",
      "addressLocality": "Kanti, Muzaffarpur",
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
      "https://facebook.com/shridurgahospital",
      "https://twitter.com/shridurgahospital",
      "https://instagram.com/shridurgahospital"
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

