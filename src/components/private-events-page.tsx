"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Users, ArrowRight, Sparkles, Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { venues, DEFAULT_BOOKING_URL, type Venue } from "@/lib/venues";

/* -------------------------------------------------------------------------- */
/*  Filters                                                                    */
/* -------------------------------------------------------------------------- */

const filters = ["All", "Honky Tonk", "The Oasis", "3rd Floor"] as const;
type Filter = (typeof filters)[number];

/* -------------------------------------------------------------------------- */
/*  Scroll-reveal hook                                                         */
/* -------------------------------------------------------------------------- */

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* -------------------------------------------------------------------------- */
/*  Capacity bar — visual indicator                                            */
/* -------------------------------------------------------------------------- */

function CapacityBar({ capacity }: { capacity: number }) {
  const maxCapacity = 1075;
  const pct = Math.round((capacity / maxCapacity) * 100);
  return (
    <div className="flex items-center gap-3">
      <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-honky-red to-honky-red/60 transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Featured venue card (large — first two)                                    */
/* -------------------------------------------------------------------------- */

function FeaturedCard({ venue, index }: { venue: Venue; index: number }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Background image */}
      <Image
        src={venue.image}
        alt={venue.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

      {/* Decorative large capacity number */}
      <div className="absolute -right-4 -bottom-6 font-heading text-[160px] font-black leading-none text-white/[0.04] select-none md:text-[200px]">
        {venue.capacity}
      </div>

      <div className="relative flex min-h-[400px] flex-col justify-end p-8 md:p-10 lg:p-12">
        <div>
          {/* Location badge */}
          <div className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm ${venue.accentColor}`}>
            <Sparkles className="h-3.5 w-3.5 text-white/70" />
            <span className="text-xs font-semibold tracking-[1.2px] text-white/80 uppercase">
              {venue.location}
            </span>
          </div>

          {/* Venue name */}
          <h3 className="mb-4 font-heading text-3xl font-black text-white uppercase md:text-4xl">
            {venue.name}
          </h3>

          {/* Capacity */}
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
              <Users className="h-4 w-4 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-white">
                {venue.capacity.toLocaleString()}
              </span>
              <span className="ml-2 text-sm text-white/50">max guests</span>
            </div>
          </div>
          <CapacityBar capacity={venue.capacity} />

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
            {venue.description}
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            asChild
            className="h-12 rounded-lg bg-honky-red px-8 text-sm font-semibold tracking-wider text-white uppercase shadow-[0_0_20px_rgba(239,72,80,0.3)] transition-all hover:bg-honky-red/90 hover:shadow-[0_0_30px_rgba(239,72,80,0.5)]"
          >
            <a href={`/private-events/${venue.slug}`}>
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-lg border-2 border-white/20 bg-transparent px-6 text-sm font-semibold tracking-wider text-white uppercase backdrop-blur-sm hover:bg-white/5 hover:text-white"
          >
            <a href={venue.bookingUrl || DEFAULT_BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Standard venue card (grid)                                                 */
/* -------------------------------------------------------------------------- */

function VenueCard({ venue, index }: { venue: Venue; index: number }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <a href={`/private-events/${venue.slug}`} className="relative block h-48 shrink-0 overflow-hidden">
        <Image
          src={venue.image}
          alt={venue.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />

        {/* Badges overlaid on image */}
        <div className="absolute right-3 bottom-3 left-3 flex items-end justify-between">
          <div className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 backdrop-blur-md ${venue.accentColor}`}>
            <span className="text-[10px] font-semibold tracking-[1px] text-white/80 uppercase">
              {venue.location}
            </span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-md">
            <Users className="h-3 w-3 text-white/60" />
            <span className="text-xs font-bold text-white">
              {venue.capacity}
            </span>
          </div>
        </div>
      </a>

      <div className="relative flex flex-1 flex-col p-6 md:p-8">
        {/* Venue name */}
        <h3 className="mb-3 font-heading text-xl font-black text-white uppercase md:text-2xl">
          <a href={`/private-events/${venue.slug}`} className="transition-colors hover:text-white/80">
            {venue.name}
          </a>
        </h3>

        <CapacityBar capacity={venue.capacity} />

        {/* Description */}
        <p className="mt-4 flex-1 text-sm leading-relaxed text-white/50">
          {venue.description}
        </p>

        {/* CTAs */}
        <div className="mt-6 flex items-center gap-4">
          <a
            href={`/private-events/${venue.slug}`}
            className="group/btn flex items-center gap-2 text-sm font-semibold tracking-wider text-honky-red uppercase transition-colors hover:text-white"
          >
            Learn More
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
          </a>
          <span className="text-white/10">|</span>
          <a
            href={venue.bookingUrl || DEFAULT_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold tracking-wider text-white/40 uppercase transition-colors hover:text-white"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page component                                                             */
/* -------------------------------------------------------------------------- */

export function PrivateEventsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered =
    activeFilter === "All"
      ? venues
      : venues.filter((v) => v.location === activeFilter);

  // Split into featured (first 2 if showing "All") and grid
  const showFeatured = activeFilter === "All";
  const featured = showFeatured ? filtered.slice(0, 2) : [];
  const grid = showFeatured ? filtered.slice(2) : filtered;

  return (
    <div className="min-h-screen bg-honky-bg">
      {/* ------------------------------------------------------------------ */}
      {/*  Hero                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative flex min-h-[520px] items-end overflow-hidden px-6 pt-28 pb-16 md:min-h-[600px] md:pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2c1a1a] via-honky-bg to-honky-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(239,70,79,0.15),transparent_60%)]" />

        {/* Decorative grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1280px]">
          {/* Label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-honky-teal" />
            <span className="text-xs font-semibold tracking-[1.2px] text-honky-teal uppercase">
              Private Events
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-5xl font-black text-white uppercase md:text-6xl lg:text-7xl">
            Host Your{" "}
            <span className="neon-text font-heading" data-neon="Event">
              Event
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-[640px] text-lg leading-8 text-white/60 md:text-xl">
            From intimate gatherings to full venue buyouts accommodating over
            1,000 guests &mdash; we have the perfect space for your next celebration
            on Broadway.
          </p>

          {/* Quick stats */}
          <div className="mt-10 flex flex-wrap gap-8">
            {[
              { value: "12", label: "Unique Spaces" },
              { value: "1,075", label: "Max Capacity" },
              { value: "4", label: "Floors" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-heading text-3xl font-black text-white">
                  {stat.value}
                </span>
                <span className="text-xs font-medium tracking-wider text-white/40 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* PDF download */}
          <div className="mt-10">
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-lg border-2 border-white/20 bg-transparent px-6 text-sm font-semibold tracking-wider text-white uppercase backdrop-blur-sm hover:bg-white/5 hover:text-white"
            >
              <a href="/docs/FILP_Private_Events.pdf" download>
                <Download className="h-4 w-4" />
                Download Event Guide
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Filter tabs + venue grid                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          {/* Section header */}
          <div className="mb-10 flex flex-col gap-2 text-center">
            <h3 className="font-heading text-lg font-bold tracking-[1.8px] text-honky-teal uppercase">
              Our Venues
            </h3>
            <h2 className="font-heading text-4xl font-black text-white uppercase md:text-5xl">
              <span className="text-white">Find Your </span>
              <span className="neon-text font-heading" data-neon="Space">
                Space
              </span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              const count =
                filter === "All"
                  ? venues.length
                  : venues.filter((v) => v.location === filter).length;

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold tracking-wider uppercase transition-all ${
                    isActive
                      ? "border-honky-red/50 bg-honky-red/10 text-white shadow-[0_0_15px_rgba(239,72,80,0.15)]"
                      : "border-white/10 bg-white/5 text-white/50 hover:border-white/20 hover:text-white/80"
                  }`}
                >
                  {filter}
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                      isActive ? "bg-honky-red/30 text-white" : "bg-white/10 text-white/40"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Featured venues (top 2 — only in "All" view) */}
          {showFeatured && featured.length > 0 && (
            <div className="mb-8 grid gap-8 lg:grid-cols-2">
              {featured.map((venue, i) => (
                <FeaturedCard key={venue.name} venue={venue} index={i} />
              ))}
            </div>
          )}

          {/* Grid of remaining venues */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {grid.map((venue, i) => (
              <VenueCard key={venue.name} venue={venue} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Bottom CTA — Inquire                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden px-6 py-24">
        {/* Background */}
        <div className="absolute inset-0 bg-honky-red/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,70,79,0.1),transparent_70%)]" />
        <div className="absolute inset-0 border-y border-white/5" />

        <div className="relative mx-auto flex max-w-[800px] flex-col items-center text-center">
          {/* Icon */}
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <Sparkles className="h-6 w-6 text-honky-red" />
          </div>

          {/* Heading */}
          <h2 className="font-heading text-4xl font-black text-white uppercase md:text-5xl">
            Ready to{" "}
            <span className="neon-text font-heading" data-neon="Book?">
              Book?
            </span>
          </h2>

          <p className="mt-5 max-w-lg text-lg leading-7 text-white/50">
            Our events team will work with you to create an unforgettable
            experience. Reach out today to start planning.
          </p>

          {/* Contact options */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              className="h-14 rounded-lg bg-honky-red px-8 text-base font-semibold tracking-wider text-white uppercase shadow-[0_0_30px_rgba(239,72,80,0.3)] hover:bg-honky-red/90"
            >
              <a href="mailto:events@friendsbarnashville.com">
                <Mail className="h-4 w-4" />
                Email Our Team
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-14 rounded-lg border-2 border-white/20 bg-transparent px-8 text-base font-semibold tracking-wider text-white uppercase backdrop-blur-sm hover:bg-white/5 hover:text-white"
            >
              <a href="tel:+16155499297">
                <Phone className="h-4 w-4" />
                (615) 549-9297
              </a>
            </Button>
          </div>

          {/* Address */}
          <div className="mt-8 flex items-center gap-2 text-sm text-white/30">
            <MapPin className="h-3.5 w-3.5" />
            <span>411 Broadway, Nashville, TN 37203</span>
          </div>
        </div>
      </section>
    </div>
  );
}
