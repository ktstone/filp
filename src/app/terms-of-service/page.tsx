import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Friends In Low Places",
  description:
    "Terms of Service for Friends In Low Places Bar & Honky Tonk. Review the terms and conditions governing use of our website and services.",
};

const sections = [
  {
    heading: "Acceptance of Terms",
    content:
      'By accessing or using the Friends in Low Places Bar & Honky Tonk website at friendsbarnashville.com (the "Website") or any of our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all of these Terms, you may not access or use the Website or our services. We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Website following any changes constitutes your acceptance of the revised Terms.',
  },
  {
    heading: "Use of the Website",
    content:
      "You agree to use the Website only for lawful purposes and in a manner that does not infringe upon or restrict any other party\u2019s use and enjoyment of the Website. Prohibited conduct includes, but is not limited to, harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within the Website. You must not misuse the Website by knowingly introducing viruses, trojans, worms, or other malicious or technologically harmful material.",
  },
  {
    heading: "Eligibility",
    content:
      "You must be at least 18 years of age to use the Website. By using the Website, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms. If you are using the Website on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.",
  },
  {
    heading: "Account Registration",
    content:
      "Certain features of the Website may require you to create an account or provide personal information. You agree to provide accurate, current, and complete information and to update such information as necessary to keep it accurate. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.",
  },
  {
    heading: "Reservations and Events",
    content:
      "Reservations made through the Website, including VIP table reservations, are subject to availability and our confirmation. We reserve the right to cancel or modify reservations at our discretion. Spending minimums may apply to VIP reservations and vary based on date, group size, time of day, and location within the venue. Private event bookings are subject to separate agreements and terms which will be provided upon inquiry. All pricing is subject to change without notice.",
  },
  {
    heading: "Venue Policies",
    content:
      "Friends in Low Places is a cashless establishment accepting all major credit cards. An entertainment fee of 2.5% is applied to each check. Automatic gratuity of 20% is applied for groups of 8 or more. Age restrictions apply to certain areas of the venue: The Honky-Tonk is all ages until 8pm, while The Oasis is always 21+. Valid government-issued photo identification is required for entry to 21+ areas and for the purchase of alcoholic beverages. Management reserves the right to refuse entry or remove any individual at its sole discretion.",
  },
  {
    heading: "Intellectual Property",
    content:
      'All content on the Website, including but not limited to text, graphics, logos, images, audio clips, video, data compilations, and software, is the property of Friends in Low Places Bar & Honky Tonk or its content suppliers and is protected by United States and international copyright, trademark, and other intellectual property laws. The "Friends in Low Places" name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Friends in Low Places Bar & Honky Tonk. You may not use such marks without our prior written permission.',
  },
  {
    heading: "User Content",
    content:
      "By submitting any content to the Website, including but not limited to reviews, photos, comments, or other materials, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, distribute, and display such content in any media. You represent and warrant that you own or control all rights to the content you submit, that the content is accurate, and that use of the content does not violate these Terms and will not cause injury to any person or entity.",
  },
  {
    heading: "Online Purchases and Merchandise",
    content:
      "Purchases made through our online shop or Website are subject to product availability. We reserve the right to limit quantities, refuse orders, or cancel orders at our discretion. Prices for products are subject to change without notice. We make every effort to display accurate product information, but we do not warrant that product descriptions, pricing, or other content is accurate, complete, or error-free. All sales may be subject to applicable sales tax.",
  },
  {
    heading: "Third-Party Links",
    content:
      "The Website may contain links to third-party websites or services that are not owned or controlled by us, including but not limited to reservation platforms, ticketing services, and social media platforms. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by or in connection with the use of any such third-party content, goods, or services.",
  },
  {
    heading: "Disclaimer of Warranties",
    content:
      'The Website and all content, products, and services provided through it are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. We do not warrant that the Website will be uninterrupted, secure, or error-free, that defects will be corrected, or that the Website or the server that makes it available are free of viruses or other harmful components.',
  },
  {
    heading: "Limitation of Liability",
    content:
      "To the fullest extent permitted by applicable law, Friends in Low Places Bar & Honky Tonk, its officers, directors, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the Website; (b) any conduct or content of any third party on the Website; (c) any content obtained from the Website; or (d) unauthorized access, use, or alteration of your transmissions or content.",
  },
  {
    heading: "Indemnification",
    content:
      "You agree to indemnify, defend, and hold harmless Friends in Low Places Bar & Honky Tonk and its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys\u2019 fees) arising from your use of the Website, your violation of these Terms, or your violation of any rights of a third party.",
  },
  {
    heading: "Governing Law and Jurisdiction",
    content:
      "These Terms shall be governed by and construed in accordance with the laws of the State of Tennessee, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located in Davidson County, Tennessee for the resolution of any disputes arising out of or relating to these Terms or your use of the Website.",
  },
  {
    heading: "Severability",
    content:
      "If any provision of these Terms is found to be unlawful, void, or unenforceable, that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of the remaining provisions.",
  },
  {
    heading: "Entire Agreement",
    content:
      "These Terms, together with our Privacy Policy, constitute the entire agreement between you and Friends in Low Places Bar & Honky Tonk regarding the use of the Website and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Website.",
  },
  {
    heading: "Contact Us",
    content:
      "If you have any questions about these Terms of Service, please contact us by email at",
    email: "info@friendsbarnashville.com",
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#181111]">
        {/* Hero */}
        <section className="flex flex-col items-center px-6 pt-40 pb-12">
          <h1 className="text-center font-heading text-5xl font-black leading-[0.9] text-white uppercase md:text-[72px]">
            Terms of{" "}
            <span className="neon-text font-heading" data-neon="Service">
              Service
            </span>
          </h1>
        </section>

        {/* Content */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-[780px]">
            {/* Intro */}
            <div className="mb-12 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
              <p className="text-base font-light leading-8 text-white/50">
                Welcome to Friends in Low Places Bar &amp; Honky Tonk. These Terms of Service govern
                your use of our website and services. Please read them carefully before using our
                Website. By accessing or using friendsbarnashville.com, you acknowledge that you have
                read, understood, and agree to be bound by these Terms.
              </p>
              <p className="mt-4 text-sm font-light text-white/30">
                Last updated: February 2026
              </p>
            </div>

            {/* Sections */}
            <div className="flex flex-col gap-10">
              {sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="mb-4 font-heading text-xl font-bold text-white">
                    {section.heading}
                  </h2>
                  <p className="text-sm font-light leading-7 text-white/45">
                    {section.content}
                    {section.email && (
                      <>
                        {" "}
                        <a
                          href={`mailto:${section.email}`}
                          className="text-honky-red underline decoration-honky-red/30 underline-offset-2 transition-colors hover:text-honky-red/80"
                        >
                          {section.email}
                        </a>
                        .
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
