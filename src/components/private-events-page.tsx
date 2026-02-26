"use client";

import { useState, useRef, useEffect } from "react";
import { Users, ArrowRight, Sparkles, Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

type Venue = {
  name: string;
  location: "Honky Tonk" | "The Oasis" | "3rd Floor";
  capacity: number;
  description: string;
  gradient: string;
  accentColor: string;
  bookingUrl?: string;
};

const venues: Venue[] = [
  {
    name: "Honky Tonk - Full Buyout",
    location: "Honky Tonk",
    capacity: 1075,
    description:
      "Take advantage of the best Friends in Low Places has to offer with a full buyout of the Honky-Tonk. With over 30 televisions, floor-to-ceiling LED screens, and dynamic seating options, your guests will have the ultimate Broadway experience.",
    gradient: "from-[#ef464f]/30 via-[#1a1a1a]/60 to-[#1a1a1a]",
    accentColor: "bg-honky-red/20 border-honky-red/30",
  },
  {
    name: "The Oasis - Full Buyout",
    location: "The Oasis",
    capacity: 700,
    description:
      "The Oasis features two full bars, an outdoor stage, ample built-in and soft seating, televisions and LED ticker tapes throughout, and dynamic seating options from barstools, high-top tables, soft seating, and custom banquettes.",
    gradient: "from-[#5ec4b6]/25 via-[#1a1a1a]/60 to-[#1a1a1a]",
    accentColor: "bg-honky-teal/20 border-honky-teal/30",
  },
  {
    name: "Honky Tonk - 2nd Floor",
    location: "Honky Tonk",
    capacity: 350,
    description:
      "A massive mezzanine lets your guests have the ultimate vantage point of the action on stage. Floor to ceiling, accordion-style windows open up completely onto Broadway. And two large bars allow for any type of beverage service.",
    gradient: "from-[#ef464f]/20 via-[#2c1a1a]/40 to-[#1a1a1a]",
    accentColor: "bg-honky-red/10 border-honky-red/20",
  },
  {
    name: "The Oasis - Broadway",
    location: "The Oasis",
    capacity: 200,
    description:
      "An indoor/outdoor bar centers the floor, various types of soft seating, tables, and custom furniture energize the design, and a drink rail expands the entire width of the roof so your guests can belly up to the views!",
    gradient: "from-[#5ec4b6]/20 via-[#1a2a28]/40 to-[#1a1a1a]",
    accentColor: "bg-honky-teal/10 border-honky-teal/20",
  },
  {
    name: "Honky Tonk - Center Mezzanine",
    location: "Honky Tonk",
    capacity: 200,
    description:
      "This dedicated area allows your guests to get the best views of the stage, grab a drink at their own dedicated bar, and all while avoiding the crowds.",
    gradient: "from-[#ef464f]/15 via-[#2c1a1a]/30 to-[#1a1a1a]",
    accentColor: "bg-honky-red/10 border-honky-red/20",
  },
  {
    name: "3rd Floor - Full Buyout",
    location: "3rd Floor",
    capacity: 175,
    description:
      "Each of these three distinct spaces (Trisha's Studio Kitchen, The Monticello Room, and The Gwendolyn Room) are enhanced by furniture pieces hand-selected by Garth and Trisha, and a diverse selection of menus created by Trisha Yearwood to accommodate any occasion.",
    gradient: "from-[#c9a84c]/20 via-[#2a2418]/40 to-[#1a1a1a]",
    accentColor: "bg-[#c9a84c]/10 border-[#c9a84c]/20",
  },
  {
    name: "The Oasis - Tiki Bar",
    location: "The Oasis",
    capacity: 165,
    description:
      "A private Tiki Bar in the middle of the Neon Neighborhood! This area of our rooftop features a full stage, custom banquette seating, and a tropical themed bar and awning.",
    gradient: "from-[#5ec4b6]/15 via-[#1a2a28]/30 to-[#1a1a1a]",
    accentColor: "bg-honky-teal/10 border-honky-teal/20",
  },
  {
    name: "Honky Tonk - Broadway Mezzanine",
    location: "Honky Tonk",
    capacity: 150,
    description:
      "The Broadway Mezzanine lets your guests belly up to the mezzanine for the best views of the stage, all while having the best view of the Neon Neighborhood and your own dedicated bar.",
    gradient: "from-[#ef464f]/15 via-[#2c1a1a]/30 to-[#1a1a1a]",
    accentColor: "bg-honky-red/10 border-honky-red/20",
  },
  {
    name: "3rd Floor - The Monticello Room",
    location: "3rd Floor",
    capacity: 72,
    description:
      "The Monticello Room is a space that embodies elegance and comfort with its dark blue walls, atmospheric wallpaper, rustic wood tables, and cozy upholstered chairs set beneath soft, intimate lighting.",
    gradient: "from-[#c9a84c]/15 via-[#2a2418]/30 to-[#1a1a1a]",
    accentColor: "bg-[#c9a84c]/10 border-[#c9a84c]/20",
  },
  {
    name: "3rd Floor - Trisha's Studio Kitchen",
    location: "3rd Floor",
    capacity: 50,
    description:
      "Trisha's Studio Kitchen draws inspiration from the Concord House featured on the Emmy-award-winning Trisha's Southern Kitchen. Designed for versatility, the space is surrounded by seating that's both soft and flexible, suitable for up to 50 guests.",
    gradient: "from-[#c9a84c]/15 via-[#2a2418]/30 to-[#1a1a1a]",
    accentColor: "bg-[#c9a84c]/10 border-[#c9a84c]/20",
  },
  {
    name: "The Oasis - Semi Private Areas",
    location: "The Oasis",
    capacity: 29,
    description:
      "Semi-Private areas within The Oasis allow guests to be a part of the action while having their own space for reprieve. With indoor and outdoor options, views of Broadway, and semi-private entrances, your guests will feel like the ultimate VIPs.",
    gradient: "from-[#5ec4b6]/15 via-[#1a2a28]/30 to-[#1a1a1a]",
    accentColor: "bg-honky-teal/10 border-honky-teal/20",
  },
  {
    name: "3rd Floor - The Gwendolyn Room",
    location: "3rd Floor",
    capacity: 24,
    description:
      "Sitting adjacent to the Monticello Room, the Gwendolyn Room offers a touching tribute to Trisha Yearwood's mother, Gwen. The Gwendolyn Room is charmed with personal touches in her honor.",
    gradient: "from-[#c9a84c]/15 via-[#2a2418]/30 to-[#1a1a1a]",
    accentColor: "bg-[#c9a84c]/10 border-[#c9a84c]/20",
    bookingUrl: "https://portal.tripleseat.com/direct_bookings/gydmxh9vpa4",
  },
];

const DEFAULT_BOOKING_URL =
  "https://strategichospitality.tripleseat.com/party_request/34215";

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
      {/* Background gradient (placeholder for future image) */}
      <div className={`absolute inset-0 bg-gradient-to-br ${venue.gradient}`} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03),transparent_70%)]" />

      {/* Decorative large capacity number */}
      <div className="absolute -right-4 -bottom-6 font-heading text-[160px] font-black leading-none text-white/[0.03] select-none md:text-[200px]">
        {venue.capacity}
      </div>

      <div className="relative flex flex-col justify-between p-8 md:p-10 lg:p-12">
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
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
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
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
            {venue.description}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <Button
            asChild
            className="h-12 rounded-lg bg-honky-red px-8 text-sm font-semibold tracking-wider text-white uppercase shadow-[0_0_20px_rgba(239,72,80,0.3)] transition-all hover:bg-honky-red/90 hover:shadow-[0_0_30px_rgba(239,72,80,0.5)] group-hover:shadow-[0_0_30px_rgba(239,72,80,0.5)]"
          >
            <a href={venue.bookingUrl || DEFAULT_BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
      {/* Background gradient (placeholder for future image) */}
      <div className={`absolute inset-0 bg-gradient-to-b ${venue.gradient}`} />

      {/* Hover glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex flex-1 flex-col p-6 md:p-8">
        {/* Top row: location + capacity */}
        <div className="mb-5 flex items-start justify-between gap-3">
          <div className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 backdrop-blur-sm ${venue.accentColor}`}>
            <span className="text-[10px] font-semibold tracking-[1px] text-white/70 uppercase">
              {venue.location}
            </span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
            <Users className="h-3 w-3 text-white/60" />
            <span className="text-xs font-bold text-white">
              {venue.capacity}
            </span>
          </div>
        </div>

        {/* Venue name */}
        <h3 className="mb-3 font-heading text-xl font-black text-white uppercase md:text-2xl">
          {venue.name}
        </h3>

        <CapacityBar capacity={venue.capacity} />

        {/* Description */}
        <p className="mt-4 flex-1 text-sm leading-relaxed text-white/50">
          {venue.description}
        </p>

        {/* CTA */}
        <div className="mt-6">
          <a
            href={venue.bookingUrl || DEFAULT_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center gap-2 text-sm font-semibold tracking-wider text-honky-red uppercase transition-colors hover:text-white"
          >
            Book Now
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
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
            1,000 guests — we have the perfect space for your next celebration
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
