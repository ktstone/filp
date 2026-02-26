import Image from "next/image";
import {
  Calendar,
  ChevronDown,
  ChevronRight,
  UtensilsCrossed,
  Star,
  Sparkles,
  Music,
  Gem,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LineupSection } from "@/components/lineup-section";
import { FoodSection } from "@/components/food-section";
import { Header } from "@/components/header";

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */
function Hero() {
  return (
    <section className="relative flex h-[800px] items-center justify-center overflow-hidden px-4 pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bar.jpg"
          alt="Crowded bar interior with neon lights and stage performance"
          fill
          className="object-cover opacity-80"
          priority
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

        {/* Heading */}
        <h1 className="mt-8 font-heading text-7xl font-black leading-[0.95] tracking-[-4.8px] uppercase drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)] lg:text-[96px]">
          <span className="text-white">Where the</span>
          <br />
          <span className="neon-text font-heading" data-neon="Honky Tonk">
            Honky Tonk
          </span>
          <br />
          <span className="text-white">Never Sleeps</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-[672px] text-xl font-light leading-7 text-white/80">
          Live country music on 4 floors. Cold beer. Good friends.
          <br />
          Open daily on Broadway.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex items-center gap-4">
          <Button className="h-14 rounded-lg bg-honky-red px-8 text-base font-semibold tracking-wider text-white uppercase shadow-[0_0_30px_rgba(239,72,80,0.3)] hover:bg-honky-red/90">
            <Calendar className="h-4 w-4" />
            Book a Table
          </Button>
          <Button
            variant="outline"
            className="h-14 rounded-lg border-2 border-white/20 bg-transparent px-8 text-base font-semibold tracking-wider text-white uppercase backdrop-blur-sm hover:bg-white/5 hover:text-white"
          >
            <Music className="h-[18px] w-[18px]" />
            View Menu
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
  return (
    <section className="border-y border-honky-border-subtle bg-[rgba(44,44,44,0.3)] px-8 py-12">
      <div className="mx-auto max-w-[1280px]">
        {/* Section header */}
        <div className="mb-10 flex flex-col items-center gap-2 text-center">
          <h3 className="font-heading text-lg font-bold tracking-[1.8px] text-honky-teal uppercase">
            Secure Your Spot
          </h3>
          <h2 className="font-heading text-4xl font-black uppercase">
            <span className="text-white">Plan Your </span>
            <span className="neon-text font-heading" data-neon="Night">Night</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Dinner & Drinks */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#2c2c2c]">
            {/* Decorative corner element */}
            <div className="absolute top-0 right-0 h-[139px] w-[112px] opacity-20">
              <UtensilsCrossed className="h-full w-full text-white/10" />
            </div>

            <div className="flex h-full flex-col justify-between p-12">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <UtensilsCrossed className="h-[18px] w-[18px] text-white" />
                </div>
                <h4 className="mb-3 font-heading text-2xl font-bold text-white">
                  Dinner &amp; Drinks
                </h4>
                <p className="max-w-md text-base leading-relaxed text-white/60">
                  Reserve a table for our full menu service. Enjoy our famous
                  fried chicken and signature cocktails while you watch the show.
                </p>
              </div>

              <Button className="mt-8 w-full rounded-lg bg-white py-4 text-base font-semibold tracking-wider text-honky-bg uppercase hover:bg-white/90">
                <Calendar className="h-5 w-5" />
                Book on OpenTable
              </Button>
            </div>
          </div>

          {/* VIP Bottle Service */}
          <div className="relative overflow-hidden rounded-2xl border border-honky-red/30 bg-gradient-to-br from-[#2c2c2c] to-[rgba(239,72,80,0.1)]">
            {/* Decorative corner element */}
            <div className="absolute top-0 right-0 h-32 w-[139px] opacity-20">
              <Sparkles className="h-full w-full text-honky-red/20" />
            </div>

            <div className="flex h-full flex-col justify-between p-12">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-honky-red/20">
                  <Star className="h-5 w-5 text-honky-red" />
                </div>
                <h4 className="mb-3 font-heading text-2xl font-bold text-white">
                  VIP Bottle Service
                </h4>
                <p className="max-w-md text-base leading-relaxed text-white/60">
                  Get the best seats in the house. Includes expedited entry,
                  private server, and premium bottle selection.
                </p>
              </div>

              <Button className="mt-8 w-full rounded-lg bg-honky-red py-4 text-base font-semibold tracking-wider text-white uppercase shadow-[0_10px_15px_-3px_rgba(239,72,80,0.2),0_4px_6px_-4px_rgba(239,72,80,0.2)] hover:bg-honky-red/90">
                <Star className="h-5 w-5" />
                Request VIP Table
              </Button>
            </div>
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
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-12 lg:px-48">
      {/* Background layers */}
      <div className="absolute inset-0 bg-honky-teal/10" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/images/vip-pattern.png')",
          backgroundSize: "24px 22px",
          backgroundPosition: "top left",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-[896px] flex-col items-center text-center">
        {/* Icon */}
        <div className="mb-8 flex h-[53px] w-[56px] items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <Gem className="h-6 w-6 text-honky-red" />
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
              <input
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
                <span className="text-white">44802</span>
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
/*  Footer                                                                     */
/* -------------------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 pt-16 pb-8">
      <div className="mx-auto max-w-[1280px]">
        {/* Main footer columns */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/images/filp-logo Small.png"
                alt="FILP logo"
                width={15}
                height={23}
                className="shrink-0"
              />
              <span className="font-heading text-xl font-black leading-7 tracking-tight text-white uppercase">
                Friends In
                <br />
                Low Places
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/40">
              The premier honky tonk destination on Broadway. Good tunes, good
              drinks, and memories you might forget.
            </p>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="mb-6 text-base font-semibold tracking-wider text-white uppercase">
              Visit Us
            </h4>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-white/60">411 Broadway</p>
              <p className="text-sm text-white/60">Nashville, TN 37203</p>
              <p className="mt-2 text-sm text-white/60">
                <a href="tel:+16155499297" className="transition-colors hover:text-white">
                  (615) 549-9297
                </a>
              </p>
              <a
                href="https://maps.google.com/?q=411+Broadway+Nashville+TN+37203"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-1 text-sm font-semibold text-honky-red transition-colors hover:text-honky-red/80"
              >
                Get Directions
                <ChevronRight className="h-2 w-2" />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-6 text-base font-semibold tracking-wider text-white uppercase">
              Hours
            </h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between border-b border-honky-border-subtle pb-2">
                <span className="text-sm text-white/60">Mon - Thu</span>
                <span className="text-sm text-white">11AM - 2AM</span>
              </div>
              <div className="flex items-start justify-between border-b border-honky-border-subtle pb-2">
                <span className="text-sm text-white/60">Fri - Sun</span>
                <span className="text-sm text-white">10AM - 2AM</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-6 text-base font-semibold tracking-wider text-white uppercase">
              Stay in the Loop
            </h4>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-sm text-white placeholder:text-white/30 focus:border-honky-red focus:outline-none"
              />
              <Button className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black uppercase hover:bg-white/90 hover:text-black">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex items-center justify-between border-t border-honky-border-subtle pt-8">
          <p className="text-xs text-white/20">
            &copy; 2026 Friends In Low Places Bar &amp; Honky Tonk. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/FriendsBarNash/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition-colors hover:text-white/60"
              aria-label="Facebook"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/FriendsBarNash/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition-colors hover:text-white/60"
              aria-label="X (Twitter)"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/FriendsBarNash/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition-colors hover:text-white/60"
              aria-label="Instagram"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LineupSection />
        <ReservationsSection />
        <FoodSection />
        <VipSignup />
      </main>
      <Footer />
    </>
  );
}
