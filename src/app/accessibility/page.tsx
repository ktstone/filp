import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Accessibility Statement for Friends In Low Places Bar & Honky Tonk. Learn about our commitment to making our website accessible to everyone.",
  alternates: { canonical: "https://www.friendsbarnashville.com/accessibility" },
};

const sections = [
  {
    heading: "Our Commitment",
    content:
      "Friends In Low Places Bar & Honky Tonk is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all users.",
  },
  {
    heading: "Standards We Follow",
    content:
      "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone. Our ongoing efforts include:",
    list: [
      "Providing text alternatives for non-text content such as images.",
      "Ensuring sufficient color contrast between text and background elements.",
      "Making all functionality available from a keyboard for users who cannot use a mouse.",
      "Using clear and consistent navigation throughout the website.",
      "Providing visible focus indicators for interactive elements.",
      "Using semantic HTML to support assistive technologies such as screen readers.",
      "Including a skip-to-content link for keyboard navigation.",
      "Ensuring forms include proper labels, instructions, and error messages.",
    ],
  },
  {
    heading: "Ongoing Efforts",
    content:
      "We view accessibility as an ongoing effort and are continuously working to improve the accessibility of our website. Our team regularly reviews and tests our website using a combination of automated tools and manual testing to identify and address accessibility barriers.",
  },
  {
    heading: "Third-Party Content",
    content:
      "Our website may include content provided by third parties, such as embedded maps and social media feeds. While we strive to ensure that all content on our website is accessible, we may not always be able to control the accessibility of third-party content. We encourage third-party content providers to make their content accessible and WCAG-compliant.",
  },
  {
    heading: "Feedback",
    content:
      "We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us. We take your feedback seriously and will do our best to address any issues promptly.",
  },
  {
    heading: "Contact Us",
    content:
      "If you have any questions, feedback, or need assistance accessing any content on our website, please reach out to us by email at",
    email: "info@friendsbarnashville.com",
    afterContent:
      "or by phone at (615) 549-9297. We aim to respond to accessibility feedback within 5 business days.",
  },
];

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-[#181111]">
        {/* Hero */}
        <section className="flex flex-col items-center px-6 pt-40 pb-12">
          <h1 className="text-center font-heading text-5xl font-black leading-[0.9] text-white uppercase md:text-[72px]">
            Accessibility{" "}
            <span className="neon-text font-heading" data-neon="Statement">
              Statement
            </span>
          </h1>
        </section>

        {/* Content */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-[780px]">
            {/* Intro */}
            <div className="mb-12 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
              <p className="text-base font-light leading-8 text-white/50">
                Friends In Low Places Bar &amp; Honky Tonk is dedicated to
                providing a website that is accessible to the widest possible
                audience, regardless of ability or technology. We are actively
                working to increase the accessibility and usability of our
                website and hold ourselves to a high standard of best practices
                in accessibility.
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
                        {section.afterContent ? ` ${section.afterContent}` : "."}
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
