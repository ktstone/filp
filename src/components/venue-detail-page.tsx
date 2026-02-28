"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Sparkles,
  Mail,
  Phone,
  Maximize2,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";
import { type Venue, DEFAULT_BOOKING_URL, getLocationColor, venues } from "@/lib/venues";
import { ShaderOverlay, DefaultAurora, DefaultLensFlare } from "@/components/shader-overlay";

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */

function VenueHero({ venue }: { venue: Venue }) {
  return (
    <section className="relative flex min-h-[500px] items-end overflow-hidden md:min-h-[600px]">
      {/* Hero image */}
      <Image
        src={venue.image}
        alt={venue.name}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#181111] via-[#181111]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#181111]/40 to-transparent" />

      {/* Shader overlay */}
      <ShaderOverlay>
        <DefaultAurora seed={73} />
        <DefaultLensFlare />
      </ShaderOverlay>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-12 md:pb-16">
        {/* Back link */}
        <Link
          href="/private-events"
          className="mb-10 flex w-fit items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          All Spaces
        </Link>

        {/* Location badge */}
        <div className={`mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm ${venue.accentColor}`}>
          <Sparkles className="h-3.5 w-3.5 text-white/70" />
          <span className="text-xs font-semibold tracking-[1.2px] text-white/80 uppercase">
            {venue.location}
          </span>
        </div>

        {/* Venue name */}
        <h1 className="font-heading text-4xl font-black text-white uppercase md:text-6xl lg:text-7xl">
          {venue.name}
        </h1>

        {/* Capacity badge */}
        <div className="mt-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
            <Users className="h-5 w-5 text-white" />
          </div>
          <div>
            <span className="text-3xl font-bold text-white">
              {venue.capacity.toLocaleString()}
            </span>
            <span className="ml-2 text-base text-white/50">max guests</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Description                                                                */
/* -------------------------------------------------------------------------- */

function VenueDescription({ venue }: { venue: Venue }) {
  const color = getLocationColor(venue.location);
  const { ref, visible } = useReveal();

  return (
    <section className="px-6 py-16 md:py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-[900px] transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          {/* Main description */}
          <div>
            <h2 className="mb-6 font-heading text-2xl font-black text-white uppercase md:text-3xl">
              About This Space
            </h2>
            <p className="text-lg font-light leading-9 text-white/60">
              {venue.description}
            </p>
          </div>

          {/* Quick facts sidebar */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
              <h3 className="mb-4 text-sm font-semibold tracking-[1.5px] text-white/40 uppercase">
                Quick Facts
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/50">Capacity</span>
                  <span className="font-heading text-lg font-bold text-white">
                    {venue.capacity.toLocaleString()}
                  </span>
                </div>
                <div className="border-t border-white/[0.06]" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/50">Location</span>
                  <span className="text-sm font-semibold text-white">
                    {venue.location}
                  </span>
                </div>
                <div className="border-t border-white/[0.06]" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/50">Floor</span>
                  <span className="text-sm font-semibold text-white">
                    {venue.location === "The Oasis"
                      ? "Rooftop"
                      : venue.location === "3rd Floor"
                        ? "3rd Floor"
                        : "1st & 2nd Floor"}
                  </span>
                </div>
              </div>

              {/* Capacity bar */}
              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between text-xs text-white/30">
                  <span>Relative size</span>
                  <span>{Math.round((venue.capacity / 1075) * 100)}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${Math.round((venue.capacity / 1075) * 100)}%`,
                      backgroundColor: color,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Book CTA */}
            <Button
              asChild
              className="h-14 w-full rounded-xl bg-honky-red text-base font-bold tracking-wider text-white uppercase shadow-[0_0_25px_rgba(239,72,80,0.25)] hover:bg-honky-red/90"
            >
              <a
                href={venue.bookingUrl || DEFAULT_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book This Space
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Photo Gallery                                                              */
/* -------------------------------------------------------------------------- */

function VenueGallery({ venue }: { venue: Venue }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { ref, visible } = useReveal();

  // Combine hero image + gallery images
  const allImages = [venue.image, ...venue.gallery];

  if (allImages.length <= 1) return null;

  return (
    <>
      <section className="px-6 pb-16 md:pb-20">
        <div
          ref={ref}
          className={`mx-auto max-w-[900px] transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mb-8 font-heading text-2xl font-black text-white uppercase md:text-3xl">
            Gallery
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
            {allImages.map((src, i) => (
              <button
                key={src}
                onClick={() => setLightboxIndex(i)}
                className={`group relative overflow-hidden rounded-xl ${
                  i === 0 ? "col-span-2 row-span-2 aspect-[4/3] md:col-span-2" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={src}
                  alt={`${venue.name} - Photo ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                <div className="absolute right-3 bottom-3 flex h-8 w-8 items-center justify-center rounded-lg bg-black/40 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4 text-white" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          images={allImages}
          index={lightboxIndex}
          venueName={venue.name}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(Math.max(0, lightboxIndex - 1))}
          onNext={() => setLightboxIndex(Math.min(allImages.length - 1, lightboxIndex + 1))}
        />
      )}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Gallery Lightbox (accessible)                                              */
/* -------------------------------------------------------------------------- */

function GalleryLightbox({
  images,
  index,
  venueName,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  index: number;
  venueName: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && index > 0) onPrev();
      if (e.key === "ArrowRight" && index < images.length - 1) onNext();
    },
    [onClose, onPrev, onNext, index, images.length],
  );

  useEffect(() => {
    closeButtonRef.current?.focus();
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${venueName} photo gallery, image ${index + 1} of ${images.length}`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>

      {index > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
          className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
      )}

      {index < images.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
          className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      )}

      <div
        className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index]}
          alt={`${venueName} - Photo ${index + 1}`}
          width={1200}
          height={800}
          className="max-h-[85vh] w-auto object-contain"
        />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/70 backdrop-blur-sm" aria-live="polite">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Floor Plan                                                                 */
/* -------------------------------------------------------------------------- */

function VenueFloorPlan({ venue }: { venue: Venue }) {
  const [expanded, setExpanded] = useState(false);
  const { ref, visible } = useReveal();

  if (!venue.floorPlan) return null;

  return (
    <>
      <section className="px-6 pb-16 md:pb-20">
        <div
          ref={ref}
          className={`mx-auto max-w-[900px] transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mb-8 font-heading text-2xl font-black text-white uppercase md:text-3xl">
            Floor Plan
          </h2>

          <button
            onClick={() => setExpanded(true)}
            className="group relative w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={venue.floorPlan}
                alt={`${venue.name} floor plan`}
                fill
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 900px) 100vw, 900px"
              />
            </div>
            <div className="absolute right-4 bottom-4 flex items-center gap-2 rounded-lg bg-black/60 px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-sm transition-colors group-hover:text-white">
              <Maximize2 className="h-4 w-4" />
              View Full Size
            </div>
          </button>
        </div>
      </section>

      {/* Floor plan lightbox */}
      {expanded && (
        <FloorPlanLightbox
          src={venue.floorPlan}
          venueName={venue.name}
          onClose={() => setExpanded(false)}
        />
      )}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Floor Plan Lightbox (accessible)                                           */
/* -------------------------------------------------------------------------- */

function FloorPlanLightbox({
  src,
  venueName,
  onClose,
}: {
  src: string;
  venueName: string;
  onClose: () => void;
}) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${venueName} floor plan, expanded view`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close floor plan"
        className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>
      <div onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt={`${venueName} floor plan`}
          width={1400}
          height={900}
          className="max-h-[90vh] w-auto object-contain"
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Other Spaces (related)                                                     */
/* -------------------------------------------------------------------------- */

function OtherSpaceCard({ venue, index }: { venue: Venue; index: number }) {
  const { ref, visible } = useReveal<HTMLAnchorElement>();
  return (
    <Link
      ref={ref}
      key={venue.slug}
      href={`/private-events/${venue.slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 transition-all duration-600 hover:border-white/20 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-40 overflow-hidden">
        <Image
          src={venue.image}
          alt={venue.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181111] via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-black text-white uppercase">
          {venue.name}
        </h3>
        <div className="mt-2 flex items-center gap-2 text-sm text-white/40">
          <Users className="h-3.5 w-3.5" />
          <span>{venue.capacity} guests</span>
        </div>
      </div>
    </Link>
  );
}

function OtherSpaces({ currentSlug, location }: { currentSlug: string; location: string }) {
  const related = venues
    .filter((v) => v.slug !== currentSlug)
    .filter((v) => v.location === location)
    .slice(0, 3);

  // Fill remaining with other venues if needed
  const others = related.length >= 3
    ? related
    : [
        ...related,
        ...venues
          .filter((v) => v.slug !== currentSlug && v.location !== location)
          .slice(0, 3 - related.length),
      ];

  if (others.length === 0) return null;

  return (
    <section className="border-t border-white/[0.06] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="mb-8 text-center font-heading text-2xl font-black text-white uppercase md:text-3xl">
          Explore More Spaces
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((venue, i) => (
            <OtherSpaceCard key={venue.slug} venue={venue} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/private-events"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-honky-red uppercase transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            View All Spaces
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Bottom CTA                                                                 */
/* -------------------------------------------------------------------------- */

function BookingCta({ venue }: { venue: Venue }) {
  const { ref, visible } = useReveal();
  return (
    <section className="relative overflow-hidden px-6 py-20">
      <div className="absolute inset-0 bg-honky-red/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,70,79,0.08),transparent_70%)]" />

      {/* Shader overlay */}
      <ShaderOverlay>
        <DefaultAurora seed={19} />
        <DefaultLensFlare />
      </ShaderOverlay>

      <div
        ref={ref}
        className={`relative mx-auto flex max-w-[700px] flex-col items-center text-center transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="font-heading text-3xl font-black text-white uppercase md:text-4xl">
          Book the{" "}
          <span className="neon-text font-heading" data-neon={venue.name.split(" - ").pop()}>
            {venue.name.split(" - ").pop()}
          </span>
        </h2>

        <p className="mt-4 max-w-md text-base leading-7 text-white/50">
          Ready to host your event? Our team will help you plan every detail.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            className="h-14 rounded-xl bg-honky-red px-8 text-base font-bold tracking-wider text-white uppercase shadow-[0_0_25px_rgba(239,72,80,0.25)] hover:bg-honky-red/90"
          >
            <a
              href={venue.bookingUrl || DEFAULT_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-14 rounded-xl border-2 border-white/20 bg-transparent px-8 text-base font-semibold tracking-wider text-white uppercase backdrop-blur-sm hover:bg-white/5 hover:text-white"
          >
            <a href="mailto:events@friendsbarnashville.com">
              <Mail className="h-4 w-4" />
              Email Our Team
            </a>
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/30">
          <a
            href="tel:+16155499297"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            (615) 549-9297
          </a>
          <span className="text-white/10">|</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            411 Broadway, Nashville, TN 37203
          </span>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main Export                                                                 */
/* -------------------------------------------------------------------------- */

export function VenueDetailPage({ venue }: { venue: Venue }) {
  return (
    <div className="min-h-screen bg-honky-bg-warm">
      <VenueHero venue={venue} />
      <VenueDescription venue={venue} />
      <VenueGallery venue={venue} />
      <VenueFloorPlan venue={venue} />
      <BookingCta venue={venue} />
      <OtherSpaces currentSlug={venue.slug} location={venue.location} />
    </div>
  );
}
