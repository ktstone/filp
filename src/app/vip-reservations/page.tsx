import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { VipReservationsPage } from "@/components/vip-reservations-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Reservations | Friends In Low Places",
  description:
    "Reserve a VIP table at Friends In Low Places on Broadway in Nashville. Dedicated server, VIP entrance, prime views, and marquee presentations.",
};

export default function VipReservations() {
  return (
    <>
      <Header />
      <main>
        <VipReservationsPage />
      </main>
      <Footer />
    </>
  );
}
