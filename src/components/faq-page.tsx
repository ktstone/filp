"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Clock,
  CreditCard,
  Baby,
  CalendarCheck,
  UtensilsCrossed,
  Timer,
  Wine,
  PartyPopper,
  Music,
  Shirt,
  Guitar,
  Mail,
  ChevronDown,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

/* -------------------------------------------------------------------------- */
/*  FAQ Data                                                                   */
/* -------------------------------------------------------------------------- */

interface FaqItem {
  icon: LucideIcon;
  question: string;
  answer: React.ReactNode;
  category: "visiting" | "food" | "events";
}

const faqs: FaqItem[] = [
  {
    icon: Clock,
    question: "When are you open?",
    category: "visiting",
    answer: (
      <p>
        Friends In Low Places Bar &amp; Honky-Tonk is open from{" "}
        <strong className="text-white">11am &ndash; 2am Monday &ndash; Friday</strong>, and{" "}
        <strong className="text-white">Saturday &ndash; Sunday 10am &ndash; 2am</strong>.
      </p>
    ),
  },
  {
    icon: CreditCard,
    question: "Do you all accept cash?",
    category: "visiting",
    answer: (
      <p>
        We are a <strong className="text-white">cashless bar</strong>, accepting all major credit
        cards.
      </p>
    ),
  },
  {
    icon: Baby,
    question: "Are kids allowed in the Honky-Tonk and The Oasis?",
    category: "visiting",
    answer: (
      <p>
        The Honky-Tonk is{" "}
        <strong className="text-white">all ages every day until 8pm</strong>. The Oasis is always{" "}
        <strong className="text-white">21+</strong>.
      </p>
    ),
  },
  {
    icon: CalendarCheck,
    question: "Can I make a reservation?",
    category: "visiting",
    answer: (
      <p>
        Our Honky-Tonk&rsquo;s first two floors and Oasis rooftop are{" "}
        <strong className="text-white">first come, first served</strong> with no reservations
        required. We&rsquo;d love to have you join us for a VIP bottle reservation in The Oasis
        &ndash;{" "}
        <Link href="/vip-packages" className="text-honky-red underline decoration-honky-red/30 underline-offset-2 transition-colors hover:text-honky-red/80">
          fill out the form here
        </Link>
        , or text us at{" "}
        <a href="sms:6156695565" className="text-honky-red underline decoration-honky-red/30 underline-offset-2 transition-colors hover:text-honky-red/80">
          615-669-5565
        </a>{" "}
        to book a table!
      </p>
    ),
  },
  {
    icon: UtensilsCrossed,
    question: "Do I need to make a table reservation to order food?",
    category: "food",
    answer: (
      <p>
        All of our food offerings are available{" "}
        <strong className="text-white">first come, first served</strong>, with no reservations
        required!
      </p>
    ),
  },
  {
    icon: UtensilsCrossed,
    question: "What kind of food is available?",
    category: "food",
    answer: (
      <p>
        We have a{" "}
        <Link href="/menu/lunch-dinner" className="text-honky-red underline decoration-honky-red/30 underline-offset-2 transition-colors hover:text-honky-red/80">
          full menu
        </Link>{" "}
        available in our honky-tonk (created by Trisha Yearwood!), as well as Trisha&rsquo;s ParTY
        Kitchen Chicken Tenders on the rooftop.
      </p>
    ),
  },
  {
    icon: Timer,
    question: "When is food available?",
    category: "food",
    answer: (
      <p>
        We serve our full menu in our honky-tonk from{" "}
        <strong className="text-white">11am &ndash; 9pm</strong> and Trisha&rsquo;s ParTY Kitchen
        Chicken Tenders in the Oasis from open to close.
      </p>
    ),
  },
  {
    icon: Wine,
    question: "Can I reserve a table for bottle service?",
    category: "events",
    answer: (
      <p>
        Of course! VIP Bottle Service is available{" "}
        <strong className="text-white">Thursday &ndash; Sunday starting at 10:00pm</strong>. Please{" "}
        <Link href="/vip-packages" className="text-honky-red underline decoration-honky-red/30 underline-offset-2 transition-colors hover:text-honky-red/80">
          fill out the reservation form
        </Link>{" "}
        or text us at{" "}
        <a href="sms:6156695565" className="text-honky-red underline decoration-honky-red/30 underline-offset-2 transition-colors hover:text-honky-red/80">
          615-669-5565
        </a>{" "}
        to book a table!
      </p>
    ),
  },
  {
    icon: PartyPopper,
    question: "Can I book a private event?",
    category: "events",
    answer: (
      <p>
        Of course! Please{" "}
        <Link href="/private-events" className="text-honky-red underline decoration-honky-red/30 underline-offset-2 transition-colors hover:text-honky-red/80">
          fill out the inquiry form
        </Link>{" "}
        or email{" "}
        <a href="mailto:events@friendsbarnashville.com" className="text-honky-red underline decoration-honky-red/30 underline-offset-2 transition-colors hover:text-honky-red/80">
          events@friendsbarnashville.com
        </a>{" "}
        for more information.
      </p>
    ),
  },
  {
    icon: Music,
    question: "What bands are playing?",
    category: "events",
    answer: (
      <p>
        Take a look at our{" "}
        <Link href="/events" className="text-honky-red underline decoration-honky-red/30 underline-offset-2 transition-colors hover:text-honky-red/80">
          live music schedule
        </Link>
        !
      </p>
    ),
  },
  {
    icon: Shirt,
    question: "Is there a dress code?",
    category: "visiting",
    answer: (
      <p>
        Friends In Low Places is a place of love and acceptance!{" "}
        <strong className="text-white">Come as you are</strong>, so long as you&rsquo;re
        comfortable! Management reserves the right, at its sole discretion, to refuse entry or
        remove anyone who exhibits behavior, language or clothing that does not promote an
        atmosphere consistent with Friends in Low Places&rsquo; standards &amp; values.
      </p>
    ),
  },
  {
    icon: Guitar,
    question: "I play in a band and would love to play at Friends In Low Places!",
    category: "events",
    answer: (
      <p>
        Incredible! We&rsquo;d love to hear from you. Please email{" "}
        <a href="mailto:info@friendsbarnashville.com" className="text-honky-red underline decoration-honky-red/30 underline-offset-2 transition-colors hover:text-honky-red/80">
          info@friendsbarnashville.com
        </a>{" "}
        to connect!
      </p>
    ),
  },
  {
    icon: Mail,
    question: "I have a media inquiry, who should I reach out to?",
    category: "events",
    answer: (
      <p>
        Please email Jordan Farrell at{" "}
        <a href="mailto:Jordan@shprojects.co" className="text-honky-red underline decoration-honky-red/30 underline-offset-2 transition-colors hover:text-honky-red/80">
          Jordan@shprojects.co
        </a>
        .
      </p>
    ),
  },
];

/* -------------------------------------------------------------------------- */
/*  Accordion Item                                                             */
/* -------------------------------------------------------------------------- */

function AccordionItem({ item, isOpen, onToggle, index }: { item: FaqItem; isOpen: boolean; onToggle: () => void; index: number }) {
  const Icon = item.icon;
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${
        isOpen
          ? "border-honky-red/20 bg-white/[0.03]"
          : "border-white/[0.06] bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02]"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-${index}`}
        className="flex w-full items-center gap-4 px-6 py-5 text-left transition-colors sm:px-8"
      >
        {/* Icon */}
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
            isOpen ? "bg-honky-red/10" : "bg-white/5"
          }`}
        >
          <Icon
            className={`h-[18px] w-[18px] transition-colors duration-300 ${
              isOpen ? "text-honky-red" : "text-white/40"
            }`}
          />
        </div>

        {/* Question */}
        <span
          className={`flex-1 text-base font-semibold leading-snug transition-colors duration-300 sm:text-lg ${
            isOpen ? "text-white" : "text-white/70"
          }`}
        >
          {item.question}
        </span>

        {/* Chevron */}
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-white/30 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-honky-red/60" : ""
          }`}
        />
      </button>

      {/* Answer panel */}
      <div
        id={`faq-${index}`}
        role="region"
        aria-hidden={!isOpen}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pl-[88px] text-base font-light leading-relaxed text-white/50 sm:px-8 sm:pl-[104px]">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */

function FaqHero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pt-40 pb-16">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(239,70,79,0.06),transparent_50%)]" />

      {/* Badge */}
      <div className="relative mb-8 inline-flex items-center gap-2 rounded-full border border-honky-red/30 bg-white/5 px-4 py-2 backdrop-blur-sm">
        <Sparkles className="h-3.5 w-3.5 text-white" />
        <span className="text-xs font-semibold tracking-[1.2px] text-white uppercase">
          Got Questions?
        </span>
      </div>

      {/* Heading */}
      <h1 className="relative text-center font-heading text-6xl font-black leading-[0.9] text-white uppercase md:text-[96px]">
        <span className="neon-text font-heading" data-neon="FAQ">FAQ</span>
      </h1>

      {/* Subtitle */}
      <p className="relative mt-6 max-w-md text-center text-lg font-light leading-7 text-white/50">
        Everything you need to know before you walk through the door.
      </p>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main Export                                                                 */
/* -------------------------------------------------------------------------- */

export function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-honky-bg-warm">
      <FaqHero />

      {/* FAQ list */}
      <section className="relative px-6 pb-24">
        <div className="relative mx-auto max-w-[780px]">
          <div className="flex flex-col gap-3">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-10 text-center">
            <p className="text-base font-light text-white/40">
              Still have questions? We&rsquo;d love to hear from you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:info@friendsbarnashville.com"
                className="inline-flex items-center gap-2 rounded-lg bg-honky-red px-6 py-3 text-sm font-bold tracking-wider text-white uppercase transition-colors hover:bg-honky-red/90"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
              <a
                href="tel:+16155499297"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold tracking-wider text-white uppercase transition-colors hover:bg-white/10"
              >
                (615) 549-9297
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
