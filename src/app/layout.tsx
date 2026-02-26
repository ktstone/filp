import type { Metadata } from "next";
import { Spline_Sans, Epilogue } from "next/font/google";
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
  title: "Friends In Low Places | Nashville's Premier Honky Tonk",
  description:
    "Where the whiskey flows, the music never stops, and every night feels like a Saturday. Experience the heart of Nashville nightlife.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${splineSans.variable} ${epilogue.variable} antialiased`}>{children}</body>
    </html>
  );
}
