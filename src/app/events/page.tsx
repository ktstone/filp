import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EventsPage } from "@/components/events-page";

export const metadata = {
  title: "Live Music Schedule",
  description:
    "See who's playing live at Friends In Low Places on Broadway in Nashville. Daily live music schedule across the Honky Tonk and The Oasis stages.",
  alternates: { canonical: "https://www.friendsbarnashville.com/events" },
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
