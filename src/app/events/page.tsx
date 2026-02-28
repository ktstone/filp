import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EventsPage } from "@/components/events-page";
import { SITE_URL } from "@/lib/config";

export const metadata = {
  title: "Live Music Schedule",
  description:
    "See who's playing live at Friends In Low Places on Broadway in Nashville. Daily live music schedule across the Honky Tonk and The Oasis stages.",
  alternates: { canonical: `${SITE_URL}/events` },
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <EventsPage />
      </main>
      <Footer />
    </>
  );
}
