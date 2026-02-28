import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FaqPage } from "@/components/faq-page";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Friends In Low Places on Broadway in Nashville. Hours, reservations, food, dress code, private events, and more.",
  alternates: { canonical: `${SITE_URL}/faq` },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When are you open?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Friends In Low Places Bar & Honky-Tonk is open from 11am – 2am Monday – Friday, and Saturday – Sunday 10am – 2am.",
      },
    },
    {
      "@type": "Question",
      name: "Do you all accept cash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are a cashless bar, accepting all major credit cards.",
      },
    },
    {
      "@type": "Question",
      name: "Are kids allowed in the Honky-Tonk and The Oasis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Honky-Tonk is all ages every day until 8pm. The Oasis is always 21+.",
      },
    },
    {
      "@type": "Question",
      name: "Can I make a reservation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Honky-Tonk's first two floors and Oasis rooftop are first come, first served with no reservations required. VIP Bottle Service reservations are available.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of food is available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have a full menu available in our honky-tonk created by Trisha Yearwood, as well as Trisha's ParTY Kitchen Chicken Tenders on the rooftop.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a dress code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Friends In Low Places is a place of love and acceptance. Come as you are, so long as you're comfortable.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a private event?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Visit our private events page or email events@friendsbarnashville.com for more information.",
      },
    },
  ],
};

export default function Faq() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main id="main-content">
        <FaqPage />
      </main>
      <Footer />
    </>
  );
}
