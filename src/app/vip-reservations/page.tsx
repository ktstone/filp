import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { VipReservationsPage } from "@/components/vip-reservations-page";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "VIP Reservations",
  description:
    "Reserve a VIP table at Friends In Low Places on Broadway in Nashville. Dedicated server, VIP entrance, prime views, and marquee presentations.",
  alternates: { canonical: `${SITE_URL}/vip-reservations` },
};

export default function VipReservations() {
  return (
    <>
      <Header />
      <main id="main-content">
        <VipReservationsPage />
      </main>
      <Footer />
    </>
  );
}
