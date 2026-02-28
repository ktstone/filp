import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CareersPage } from "@/components/careers-page";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the crew at Nashville's premier honky tonk. Now hiring bartenders, servers, hosts, barbacks, and dishwashers. Apply today.",
  alternates: { canonical: `${SITE_URL}/careers` },
};

export default function Careers() {
  return (
    <>
      <Header />
      <main id="main-content">
        <CareersPage />
      </main>
      <Footer />
    </>
  );
}
