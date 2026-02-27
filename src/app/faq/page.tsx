import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FaqPage } from "@/components/faq-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Friends In Low Places",
  description:
    "Frequently asked questions about Friends In Low Places on Broadway in Nashville. Hours, reservations, food, dress code, private events, and more.",
};

export default function Faq() {
  return (
    <>
      <Header />
      <main>
        <FaqPage />
      </main>
      <Footer />
    </>
  );
}
