import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CareersPage } from "@/components/careers-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Friends In Low Places",
  description:
    "Join the crew at Nashville's premier honky tonk. Now hiring bartenders, servers, hosts, barbacks, and dishwashers. Apply today.",
};

export default function Careers() {
  return (
    <>
      <Header />
      <main>
        <CareersPage />
      </main>
      <Footer />
    </>
  );
}
