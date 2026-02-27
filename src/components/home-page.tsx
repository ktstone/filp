"use client";

import Image from "next/image";
import {
  Calendar,
  ChevronDown,
  UtensilsCrossed,
  Star,
  Sparkles,
  Music,
  Gem,
  ArrowRight,
  Users,
  PartyPopper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";
import { LineupSection } from "@/components/lineup-section";
import { FoodSection } from "@/components/food-section";

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */
function Hero() {
  return (
    <section className="relative flex h-screen min-h-[700px] items-center justify-center overflow-hidden px-4 pt-28 pb-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bar.jpg"
          alt="Crowded bar interior with neon lights and stage performance"
          fill
          className="object-cover opacity-80"
          priority
          sizes="100vw"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-honky-bg via-[rgba(26,26,26,0.5)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,26,26,0.8)] via-transparent to-[rgba(26,26,26,0.8)]" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-60">
        <span className="text-xs font-normal tracking-[1.2px] text-white/70 uppercase">
          Scroll
        </span>
        <ChevronDown className="h-3 w-3 text-white/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex max-w-[896px] flex-col items-center text-center">
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-honky-teal" />
          <span className="text-xs font-semibold tracking-[1.2px] text-honky-teal uppercase">
            Live Music Now
          </span>
        </div>

        {/* Logo */}
        <Image
          src="/images/logo-circle.png"
          alt="Friends In Low Places - Nashville TN"
          width={400}
          height={400}
          className="mt-8 w-[280px] drop-shadow-[0_0_40px_rgba(239,70,79,0.4)] lg:w-[400px]"
          priority
        />

        {/* h1 — visually hidden but present for SEO */}
        <h1 className="sr-only">
          Friends In Low Places — Nashville&apos;s Premier Honky Tonk on Broadway
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-[672px] text-xl font-light leading-7 text-white/80">
          Live country music on 4 floors. Cold beer. Good friends.
          <br />
          Open daily on Broadway.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex items-center gap-4">
          <Button asChild className="h-14 rounded-lg bg-honky-red px-8 text-base font-semibold tracking-wider text-white uppercase shadow-[0_0_30px_rgba(239,72,80,0.3)] hover:bg-honky-red/90">
            <a href="#lineup">
              <Music className="h-4 w-4" />
              Live Music
            </a>
          </Button>
          <Button asChild variant="outline" className="h-14 rounded-lg border-2 border-white/20 bg-transparent px-8 text-base font-semibold tracking-wider text-white uppercase backdrop-blur-sm hover:bg-white/5 hover:text-white">
            <a href="/private-events">
              <PartyPopper className="h-[18px] w-[18px]" />
              Private Events
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Reservations / Plan Your Night                                             */
/* -------------------------------------------------------------------------- */
function ReservationsSection() {
  const { ref, visible } = useReveal();
  return (
    <section className="border-y border-honky-border-subtle bg-[rgba(44,44,44,0.3)] px-8 py-12">
      <div
        ref={ref}
        className={`mx-auto max-w-[1280px] transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Section header */}
        <div className="mb-10 flex flex-col items-center gap-2 text-center">
          <p className="font-heading text-lg font-bold tracking-[1.8px] text-honky-teal uppercase">
            Secure Your Spot
          </p>
          <h2 className="font-heading text-4xl font-black uppercase">
            <span className="text-white">Plan Your </span>
            <span className="neon-text font-heading" data-neon="Night">Night</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Reservations */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#2c2c2c]">
            <div className="absolute top-0 right-0 h-[120px] w-[100px] opacity-20">
              <Calendar className="h-full w-full text-white/10" />
            </div>

            <div className="flex h-full flex-col justify-between p-8 lg:p-10">
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <Calendar className="h-[18px] w-[18px] text-white" />
                </div>
                <h3 className="mb-3 font-heading text-2xl font-bold text-white">
                  Reservations
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  Reserve a table for our full menu service. Enjoy Trisha&rsquo;s
                  famous Southern kitchen and signature cocktails while you
                  watch the show.
                </p>
              </div>

              <Button asChild className="mt-8 w-full rounded-lg bg-white py-4 text-sm font-semibold tracking-wider text-honky-bg uppercase hover:bg-white/90">
                <a href="https://www.opentable.com/r/friends-in-low-places-bar-and-honky-tonk-nashville" target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-4 w-4" />
                  Book on OpenTable
                </a>
              </Button>
            </div>
          </div>

          {/* VIP Reservations */}
          <div className="relative overflow-hidden rounded-2xl border border-honky-teal/20 bg-gradient-to-br from-[#2c2c2c] to-[rgba(94,196,182,0.05)]">
            <div className="absolute top-0 right-0 h-[120px] w-[100px] opacity-20">
              <Star className="h-full w-full text-honky-teal/20" />
            </div>

            <div className="flex h-full flex-col justify-between p-8 lg:p-10">
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-honky-teal/15">
                  <Star className="h-5 w-5 text-honky-teal" />
                </div>
                <h3 className="mb-3 font-heading text-2xl font-bold text-white">
                  VIP Reservations
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  Dedicated VIP server, expedited entry, prime table views, and
                  marquee presentations to celebrate your occasion.
                </p>
              </div>

              <Button asChild className="mt-8 w-full rounded-lg bg-honky-teal py-4 text-sm font-semibold tracking-wider text-white uppercase shadow-[0_10px_15px_-3px_rgba(94,196,182,0.15)] hover:bg-honky-teal/90">
                <a href="/vip-reservations">
                  <Star className="h-4 w-4" />
                  Reserve VIP Table
                </a>
              </Button>
            </div>
          </div>

          {/* VIP Packages */}
          <div className="relative overflow-hidden rounded-2xl border border-honky-red/30 bg-gradient-to-br from-[#2c2c2c] to-[rgba(239,72,80,0.08)]">
            <div className="absolute top-0 right-0 h-[120px] w-[100px] opacity-20">
              <Sparkles className="h-full w-full text-honky-red/20" />
            </div>

            <div className="flex h-full flex-col justify-between p-8 lg:p-10">
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-honky-red/20">
                  <Sparkles className="h-5 w-5 text-honky-red" />
                </div>
                <h3 className="mb-3 font-heading text-2xl font-bold text-white">
                  VIP Packages
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  Bachelor &amp; bachelorette packages, birthday celebrations,
                  and group experiences with premium bottle service.
                </p>
              </div>

              <Button asChild className="mt-8 w-full rounded-lg bg-honky-red py-4 text-sm font-semibold tracking-wider text-white uppercase shadow-[0_10px_15px_-3px_rgba(239,72,80,0.2)] hover:bg-honky-red/90">
                <a href="/vip-packages">
                  <Sparkles className="h-4 w-4" />
                  View Packages
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* -------------------------------------------------------------------------- */
/*  Virtual Tour                                                               */
/* -------------------------------------------------------------------------- */
function VirtualTour() {
  const { ref, visible } = useReveal();
  return (
    <section className="px-6 py-20 sm:px-8">
      <div
        ref={ref}
        className={`mx-auto max-w-[1280px] transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Section header */}
        <div className="mb-10 flex flex-col items-center gap-2 text-center">
          <p className="font-heading text-lg font-bold tracking-[1.8px] text-honky-teal uppercase">
            Explore the Venue
          </p>
          <h2 className="font-heading text-4xl font-black uppercase md:text-5xl">
            <span className="text-white">Take a </span>
            <span className="neon-text font-heading" data-neon="Tour">Tour</span>
          </h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-white/50">
            Step inside Friends In Low Places before you even walk through the
            door. Explore all four floors in 360&deg;.
          </p>
        </div>

        {/* Embed container — 16:9 responsive */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.4)]">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://my.matterport.com/show/?m=kL9B2jws3Fe"
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; web-share; xr-spatial-tracking"
              allowFullScreen
              loading="lazy"
              title="Friends In Low Places virtual tour"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Private Events Teaser                                                      */
/* -------------------------------------------------------------------------- */
const featuredVenues = [
  {
    name: "Honky Tonk",
    subtitle: "Full Buyout",
    capacity: 1075,
    description:
      "Over 30 TVs, floor-to-ceiling LED screens, and dynamic seating for the ultimate Broadway experience.",
    accent: "honky-red",
  },
  {
    name: "The Oasis",
    subtitle: "Full Buyout",
    capacity: 700,
    description:
      "Two full bars, an outdoor stage, and dynamic seating from barstools to custom banquettes.",
    accent: "honky-teal",
  },
  {
    name: "3rd Floor",
    subtitle: "Full Buyout",
    capacity: 175,
    description:
      "Three distinct spaces curated by Garth and Trisha with menus by Trisha Yearwood.",
    accent: "amber",
  },
];

function PrivateEventsTeaser() {
  const { ref, visible } = useReveal();
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-8">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(239,70,79,0.06),transparent_60%)]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-[1280px] transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — headline + CTA */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <PartyPopper className="h-3.5 w-3.5 text-honky-teal" />
              <span className="text-xs font-semibold tracking-[1.2px] text-honky-teal uppercase">
                Private Events
              </span>
            </div>

            <h2 className="font-heading text-4xl font-black text-white uppercase md:text-5xl">
              Host Your{" "}
              <span className="neon-text font-heading" data-neon="Event">
                Event
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-8 text-white/50">
              From intimate gatherings of 24 to full venue buyouts for over
              1,000 guests, 12 unique spaces across 4 floors, right on
              Broadway.
            </p>

            {/* Stats row */}
            <div className="mt-8 flex gap-8">
              {[
                { value: "12", label: "Spaces" },
                { value: "1,075", label: "Max Guests" },
                { value: "4", label: "Floors" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="font-heading text-2xl font-black text-white">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-medium tracking-wider text-white/30 uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                asChild
                className="h-14 rounded-lg bg-honky-red px-8 text-base font-semibold tracking-wider text-white uppercase shadow-[0_0_30px_rgba(239,72,80,0.3)] hover:bg-honky-red/90"
              >
                <a href="/private-events">
                  Explore All Venues
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right — venue cards stack */}
          <div className="flex flex-col gap-4">
            {featuredVenues.map((venue) => (
              <a
                key={venue.name}
                href="/private-events"
                className="group relative flex items-center gap-6 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/15 hover:bg-white/[0.04]"
              >
                {/* Capacity number — decorative */}
                <div className="absolute -right-2 -bottom-3 font-heading text-[100px] font-black leading-none text-white/[0.02] select-none" aria-hidden="true">
                  {venue.capacity}
                </div>

                {/* Capacity badge */}
                <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Users className="mb-0.5 h-4 w-4 text-white/40" aria-hidden="true" />
                  <span className="font-heading text-lg font-black text-white">
                    {venue.capacity.toLocaleString()}
                  </span>
                </div>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading text-lg font-black text-white uppercase">
                      {venue.name}
                    </h3>
                    <span className="text-xs font-medium text-white/30">
                      / {venue.subtitle}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-white/40">
                    {venue.description}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight className="h-4 w-4 shrink-0 text-white/20 transition-all group-hover:translate-x-1 group-hover:text-honky-red" aria-hidden="true" />
              </a>
            ))}

            {/* See all link */}
            <a
              href="/private-events"
              className="group mt-1 flex items-center justify-center gap-2 rounded-xl border border-dashed border-white/10 py-4 text-sm font-semibold tracking-wider text-white/40 uppercase transition-colors hover:border-white/20 hover:text-white/70"
            >
              View All 12 Venues
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  VIP / Newsletter Signup                                                    */
/* -------------------------------------------------------------------------- */
function VipSignup() {
  const { ref, visible } = useReveal();
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-12 lg:px-48">
      {/* Background layers */}
      <div className="absolute inset-0 bg-honky-teal/10" />
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/images/vip-pattern.png')",
          backgroundSize: "24px 22px",
          backgroundPosition: "top left",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]" />

      {/* Content */}
      <div
        ref={ref}
        className={`relative mx-auto flex max-w-[896px] flex-col items-center text-center transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Icon */}
        <div className="mb-8 flex h-[53px] w-[56px] items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <Gem className="h-6 w-6 text-honky-red" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h2 className="font-heading text-5xl font-black tracking-tight text-white uppercase lg:text-6xl">
          Join the <span className="neon-text font-heading" data-neon="VIP Club">VIP Club</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-5 max-w-[672px] text-lg leading-7 text-[#d1d5db]">
          Get first dibs on concert tickets, exclusive menu tastings, and
          skip-the-line access on weekends.
        </p>

        {/* Two equal CTAs */}
        <div className="mt-12 grid w-full max-w-[768px] grid-cols-1 gap-6 md:grid-cols-2">
          {/* Email signup */}
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-heading text-xl font-bold text-white">
              Get on the List
            </h3>
            <p className="text-sm text-[#9ca3af]">
              First dibs on tickets, events, and exclusive offers.
            </p>
            <div className="flex flex-col gap-3">
              <label htmlFor="vip-email" className="sr-only">Email address</label>
              <input
                id="vip-email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border-2 border-white/10 bg-honky-bg px-5 py-3.5 text-sm text-white placeholder:text-[#6b7280] focus:border-honky-red/50 focus:outline-none"
              />
              <Button className="w-full rounded-xl bg-honky-red py-3.5 text-sm font-bold text-white shadow-[0_0_10px_rgba(239,70,79,0.5),0_0_20px_rgba(239,70,79,0.3)] hover:bg-honky-red/90">
                Get Access
              </Button>
            </div>
            <p className="text-xs text-[#6b7280]">
              No spam, just good times.
            </p>
          </div>

          {/* SMS signup */}
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-heading text-xl font-bold text-white">
              Text to Join
            </h3>
            <p className="text-sm text-[#9ca3af]">
              Get news and alerts straight to your phone.
            </p>
            <div className="flex flex-1 flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-white/10 bg-honky-bg/50 px-5 py-6">
              <p className="text-center text-lg font-bold text-white">
                Text{" "}
                <span className="text-honky-red">FRIENDS</span>{" "}
                to{" "}
                <span className="text-honky-red">44802</span>
              </p>
            </div>
            <p className="text-xs text-[#6b7280]">
              Message and data rates may apply. Text STOP to unsubscribe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  HomePage (client component)                                                */
/* -------------------------------------------------------------------------- */
export function HomePage() {
  return (
    <>
      <Hero />
      <LineupSection />
      <ReservationsSection />
      <FoodSection />
      <VirtualTour />
      <PrivateEventsTeaser />
      <VipSignup />
    </>
  );
}
