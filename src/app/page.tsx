import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Friends In Low Places | Nashville's Premier Honky Tonk on Broadway",
  description:
    "Live country music on 4 floors, Southern food by Trisha Yearwood, cold beer, and good friends. Open daily on Broadway in Nashville, TN.",
  alternates: {
    canonical: SITE_URL,
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HomePage />
      </main>
      <Footer />
    </>
  );
}
