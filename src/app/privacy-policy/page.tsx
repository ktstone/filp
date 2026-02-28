import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Friends In Low Places Bar & Honky Tonk. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

const sections = [
  {
    heading: "Who May Use the Website",
    content:
      "The Website is not intended or designed to attract users under the age of 18. We do not collect Personal Information from any person we know to be under the age of 18. If you are under 18, we ask that you not send us any Personal Information. The Website is intended for users from the United States and those not governed by privacy policies of other countries. Users from the European Union are advised not to disclose Personal Information to us. Do not send us information unless you consent to the application of United States law to the use and disclosure of your information consistent with this Privacy Policy.",
  },
  {
    heading: "Collection and Use of Personal Information",
    content:
      "We may collect Personal Information that you provide us when you:",
    list: [
      "Purchase, order, return, exchange, or request certain information about our products and services.",
      "Visit or register for an account on the Website.",
      "Enter into a contest or sweepstakes or respond to one of our messages.",
      "Provide us with comments or suggestions.",
    ],
    afterList:
      "The Personal Information required to be provided with respect to the above enables us to process the relevant transaction, task, or service, and to verify your identity as required.",
  },
  {
    heading: "Other Uses of Personal Information",
    content:
      "We may also use Personal Information to continually assess and improve the products and services we offer. To serve you better, we may combine the Personal Information that you give us with publicly available information and information we receive from or cross-reference with our marketing partners and others. We use that combined information to enhance and personalize your experience with us, to communicate with you about services that may be of interest to you, and for other promotional purposes.",
  },
  {
    heading: "Promotional Information and Marketing Materials",
    content:
      'We would like to inform you of products and services, sales, and special offers that might benefit you. When you register online or participate in our services, you will have the opportunity to sign up for emails about our products, services, sales, and special offers. We may also send you mail, email, or call you with information about our product and service offerings if you have provided us with your name and address, email address, or phone numbers via the Website, through customer service, or via other means. If you would like to stop receiving such promotional information from us, please see the "Privacy Preferences/Opt-Out" section of this Privacy Policy.',
  },
  {
    heading: "Disclosure of Personal Information",
    content:
      "We may enter marketing relationships with advertisers or other companies that provide products or services that we believe may be of interest to our customers. We may share your Personal Information with those marketing partners in order to help them send you information that we believe will be of interest to you.",
  },
  {
    heading: "Access to Personal Information by Companies that Work with Us or On Our Behalf",
    content:
      "Some of our operations, such as our electronic commerce, may be managed by unaffiliated companies or service providers. We may share Personal Information with these companies or services providers on a confidential basis only to perform their functions services and deliver targeted marketing messages. In no event will we authorize these companies to use your Personal Information for any reason other than to provide you with those specific services and marketing messages. If your purchases are being shipped to you, your shipping information will be shared with our delivery service providers (U.S. Postal Service, UPS, or other delivery companies we or you select). Our delivery service providers are asked not to use your Personal Information for any purpose other than making the delivery.",
  },
  {
    heading: "Sale of Business",
    content:
      "If we or some of our assets are sold or transferred or used as security, your Personal Information may be transferred to third parties as part of that transaction.",
  },
  {
    heading: "Disclosures of Personal Information in Legal Proceedings",
    content:
      "If we are requested by law enforcement officials or judicial authorities to provide Personal Information on individual users, we may, without your consent, provide such information. In matters involving claims of personal or public safety, we may provide your Personal Information to appropriate authorities without your consent or court process. We also will provide your Personal Information in response to a search warrant or other legally valid inquiry or order, or to an investigative body in the case of a breach of an agreement or contravention of law, or in litigation involving us or otherwise as required by law. We may also disclose Personal Information to assist in debt collection where you owe a debt to us.",
  },
  {
    heading: "Access to Personal Information",
    content:
      'You may request access to the Personal Information that we have about you. For further instructions on accessing the Personal Information that we may have about you, please see the "Contacting Us" section of this Privacy Policy.',
  },
  {
    heading: "Privacy Preferences / Opt-Out",
    content:
      'You may opt out of our use of your Personal Information for marketing or promotional activities. For further instructions on opting out, please see the "Contacting Us" section of this Privacy Policy.',
  },
  {
    heading: "Information Sharing Disclosure Requests",
    content:
      'If you are a California resident, you have the right to request one Notice of Information-Sharing Disclosure per year which will identify the third parties with whom we or any of our affiliates has shared the Personal Information we have collected from you. You may request the Notice of Information-Sharing Disclosure by contacting us pursuant to the "Contacting Us" section of this Privacy Policy.',
  },
  {
    heading: "Visiting the Website",
    content:
      "In general, you can visit the Website without telling us who you are or providing us with any information. However, we may collect the IP (Internet protocol) addresses of all visitors to the Website and other related information such as page requests, browser type, operating system, average time spent on the Website, and other information. We use this information to monitor and improve the Website. We may also use this information to improve our marketing strategies.",
  },
  {
    heading: "Cookies and Tracer Tags",
    content:
      'The Website may use a technology called "cookies". A cookie is a tiny element of data that a website can send to your browser, which may then be stored on your hard drive so the website can recognize you when you return. If used, cookies may help us monitor and improve the performance of the Website and our advertising on other websites, if any. Cookies may also help optimize your shopping experience in that they allow you to add multiple items to your shopping cart before checking out. You may set your web browser to notify you when you receive a cookie. However, should you decide not to accept cookies, you may limit the functionality of certain websites. The Website may also use a technology called "tracer tags". These may also be referred to as "Clear GIFs" or "Web Beacons". If used, this technology may allow us to understand which pages you visit on the Website. These tracer tags are used to help us optimize and tailor websites to future website visitors.',
  },
  {
    heading: "Security of Personal Information",
    content:
      "We maintain administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, and disclosure of Personal Information in our custody and control. We also are committed to employing reasonable technology in order to protect the security of the Website. However, even with the best technology, no website is 100% secure. We will take reasonable measures which we believe are appropriate to protect your Personal Information from loss, misuse, alteration, or destruction, and, where possible, will ask that any third parties to whom we may transfer such information to take comparable steps to protect that security.",
  },
  {
    heading: "Privacy Policy Modifications",
    content:
      "From time to time we may modify or amend this Privacy Policy in order to comply with new laws or regulations or to reflect future changes in our business practices. Any changes in our policies will be communicated on this page, so please check back on occasion.",
  },
  {
    heading: "Texting Service",
    content:
      "No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt in data and consent; this information will not be shared with any third parties.",
  },
  {
    heading: "Contact Us",
    content:
      "If you have any questions about our handling of Personal Information, please contact us by email at",
    email: "info@friendsbarnashville.com",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-[#181111]">
        {/* Hero */}
        <section className="flex flex-col items-center px-6 pt-40 pb-12">
          <h1 className="text-center font-heading text-5xl font-black leading-[0.9] text-white uppercase md:text-[72px]">
            Privacy{" "}
            <span className="neon-text font-heading" data-neon="Policy">
              Policy
            </span>
          </h1>
        </section>

        {/* Content */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-[780px]">
            {/* Intro */}
            <div className="mb-12 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
              <p className="text-base font-light leading-8 text-white/50">
                Friends in Low Places Bar &amp; Honky Tonk &ndash; (&ldquo;we&rdquo;,
                &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects the privacy needs and concerns of
                our customers. This Privacy Policy describes the personal information, such as your
                name, address, email address, or phone number (&ldquo;Personal Information&rdquo;)
                we gather about you, what we do with it, the safeguards we have in place to protect
                it, and how you can control our use of it. By using friendsbarnashville.com (the
                &ldquo;Website&rdquo;), the user agrees, without limitation or qualification, to be
                bound by this Privacy Policy. When you provide Personal Information to the Website,
                you are consenting to the manner in which we will collect, use, disclose, and
                otherwise manage your Personal Information, as set out below.
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
                  {section.list && (
                    <ul className="mt-3 flex flex-col gap-2 pl-5">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="list-disc text-sm font-light leading-7 text-white/45 marker:text-honky-red/40"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.afterList && (
                    <p className="mt-3 text-sm font-light leading-7 text-white/45">
                      {section.afterList}
                    </p>
                  )}
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
