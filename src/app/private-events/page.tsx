import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PrivateEventsPage } from "@/components/private-events-page";

export const metadata = {
  title: "Private Events | Friends In Low Places",
  description:
    "Host your next private event at Friends In Low Places on Broadway in Nashville. From intimate rooms to full venue buyouts for up to 1,075 guests.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PrivateEventsPage />
      </main>
      <Footer />
    </>
  );
}
