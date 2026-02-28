import type { Metadata } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Spline_Sans, Epilogue } from "next/font/google";
import { SITE_URL } from "@/lib/config";
import "./globals.css";

const splineSans = Spline_Sans({
  variable: "--font-spline-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["200", "300", "700", "900"],
});


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Friends In Low Places | Nashville's Premier Honky Tonk",
    template: "%s | Friends In Low Places",
  },
  description:
    "Where the whiskey flows, the music never stops, and every night feels like a Saturday. Experience the heart of Nashville nightlife on Broadway.",
  keywords: [
    "Nashville honky tonk",
    "Broadway Nashville",
    "live music Nashville",
    "Nashville bar",
    "Nashville nightlife",
    "Friends In Low Places",
    "Trisha Yearwood restaurant",
    "Garth Brooks bar",
    "Nashville private events",
    "Nashville VIP",
  ],
  authors: [{ name: "Friends In Low Places Bar & Honky Tonk" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Friends In Low Places",
    title: "Friends In Low Places | Nashville's Premier Honky Tonk",
    description:
      "Live country music on 4 floors, Southern food by Trisha Yearwood, cold beer, and good friends. Open daily on Broadway in Nashville, TN.",
    images: [
      {
        url: "/images/hero-bar.jpg",
        width: 1200,
        height: 630,
        alt: "Friends In Low Places honky tonk bar on Broadway in Nashville",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@FriendsBarNash",
    title: "Friends In Low Places | Nashville's Premier Honky Tonk",
    description:
      "Live country music on 4 floors, Southern food by Trisha Yearwood, cold beer, and good friends. Open daily on Broadway.",
    images: ["/images/hero-bar.jpg"],
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
};

function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    name: "Friends In Low Places Bar & Honky Tonk",
    alternateName: "FILP",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-circle.png`,
    image: `${SITE_URL}/images/hero-bar.jpg`,
    description:
      "Nashville's premier honky tonk on Broadway featuring live country music on 4 floors, Southern food by Trisha Yearwood, VIP packages, and private events for up to 1,075 guests.",
    telephone: "+1-615-549-9297",
    email: "info@friendsbarnashville.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "411 Broadway",
      addressLocality: "Nashville",
      addressRegion: "TN",
      postalCode: "37203",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.1605659,
      longitude: -86.7800974,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "11:00",
        closes: "02:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "02:00",
      },
    ],
    priceRange: "$$",
    servesCuisine: "Southern American",
    hasMenu: `${SITE_URL}/menu/lunch-dinner`,
    acceptsReservations: "True",
    paymentAccepted: "Credit Card",
    sameAs: [
      "https://instagram.com/FriendsBarNash/",
      "https://www.facebook.com/FriendsBarNash/",
      "https://twitter.com/FriendsBarNash/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <GoogleTagManager gtmId="GTM-PWLQ9V8C" />
      <GoogleAnalytics gaId="G-9NERM4QMJX" />
      <head>
        <JsonLd />
      </head>
      <body className={`${splineSans.variable} ${epilogue.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-honky-red focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
