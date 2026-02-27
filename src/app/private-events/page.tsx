import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PrivateEventsPage } from "@/components/private-events-page";

export const metadata = {
  title: "Private Events",
  description:
    "Host your next private event at Friends In Low Places on Broadway in Nashville. From intimate rooms to full venue buyouts for up to 1,075 guests.",
  alternates: { canonical: "https://www.friendsbarnashville.com/private-events" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PrivateEventsPage />
      </main>
      <Footer />
    </>
  );
}
