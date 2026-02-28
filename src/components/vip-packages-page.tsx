"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Heart,
  Beer,
  Download,
  ArrowRight,
  Send,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Music,
  PartyPopper,
  Calendar,
  Clock,
  Users,
  User,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";
import { AuroraOverlay } from "@/components/aurora-overlay";

/* -------------------------------------------------------------------------- */
/*  Package card                                                               */
/* -------------------------------------------------------------------------- */

function PackageCard({
  title,
  description,
  icon: Icon,
  gradient,
  borderColor,
  accentColor,
  pdfUrl,
  images,
  index,
}: {
  title: string;
  description: string;
  icon: typeof Heart;
  gradient: string;
  borderColor: string;
  accentColor: string;
  pdfUrl?: string;
  images: string[];
  index: number;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-700 ${borderColor} ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03),transparent_70%)]" />

      {/* Decorative icon */}
      <div className="absolute -right-6 -bottom-6 opacity-[0.04]">
        <Icon className="h-48 w-48" />
      </div>

      {/* Photo mosaic */}
      <div className="relative grid grid-cols-3 gap-1 p-3 pb-0">
        {images.slice(0, 3).map((src, i) => (
          <div
            key={src}
            className={`relative overflow-hidden ${
              i === 0 ? "col-span-2 row-span-2 aspect-[4/3] rounded-tl-xl" : "aspect-square"
            } ${i === 1 ? "rounded-tr-xl" : ""}`}
          >
            <Image
              src={src}
              alt={`${title} photo ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>

      <div className="relative flex flex-col p-8 md:p-10">
        {/* Icon badge */}
        <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${accentColor}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>

        {/* Title */}
        <h3 className="mb-4 font-heading text-3xl font-black text-white uppercase md:text-4xl">
          {title}
        </h3>

        {/* Description */}
        <p className="max-w-xl text-base leading-relaxed text-white/60">
          {description}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            asChild
            className="h-12 rounded-lg bg-honky-red px-6 text-sm font-semibold tracking-wider text-white uppercase shadow-[0_0_20px_rgba(239,72,80,0.3)] hover:bg-honky-red/90 hover:shadow-[0_0_30px_rgba(239,72,80,0.5)]"
          >
            <a href="#inquire">
              <Send className="h-4 w-4" />
              Inquire Now
            </a>
          </Button>
          {pdfUrl && (
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-lg border-2 border-white/20 bg-transparent px-6 text-sm font-semibold tracking-wider text-white uppercase backdrop-blur-sm hover:bg-white/5 hover:text-white"
            >
              <a href={pdfUrl} download>
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Photo gallery                                                              */
/* -------------------------------------------------------------------------- */

const galleryImages = [
  { src: "/images/vip-packages/bachelorette4.jpeg", alt: "Bachelorette party celebration" },
  { src: "/images/vip-packages/bachelor4.jpeg", alt: "Bachelor party at Friends" },
  { src: "/images/vip-packages/bachelorette5.jpeg", alt: "Bachelorette group photo" },
  { src: "/images/vip-packages/bachelor5.jpeg", alt: "Bachelor party drinks" },
  { src: "/images/vip-packages/bachelorette6.jpeg", alt: "Bachelorette party fun" },
  { src: "/images/vip-packages/bachelor6.jpeg", alt: "Bachelor party crew" },
  { src: "/images/vip-packages/bachelorette7.jpeg", alt: "Bachelorette party at Friends" },
  { src: "/images/vip-packages/bachelorette8.jpeg", alt: "Bachelorette celebration" },
];

function PhotoGallery() {
  const { ref, visible } = useReveal();

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 flex flex-col gap-2 text-center">
          <h3 className="font-heading text-lg font-bold tracking-[1.8px] text-honky-teal uppercase">
            The Party Starts Here
          </h3>
          <h2 className="font-heading text-4xl font-black text-white uppercase md:text-5xl">
            <span className="text-white">Celebrate at </span>
            <span className="neon-text font-heading" data-neon="Friends">
              Friends
            </span>
          </h2>
        </div>

        <div
          ref={ref}
          className={`columns-2 gap-3 sm:columns-3 lg:columns-4 transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              className="group relative mb-3 overflow-hidden rounded-xl break-inside-avoid"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={i % 3 === 0 ? 800 : 600}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Inquiry form                                                               */
/* -------------------------------------------------------------------------- */

const LOCATION_OPTIONS = [
  "Honky Tonk - Full Buyout",
  "Honky Tonk - 2nd Floor",
  "Honky Tonk - Center Mezzanine",
  "Honky Tonk - Broadway Mezzanine",
  "The Oasis - Full Buyout",
  "The Oasis - Broadway",
  "The Oasis - Tiki Bar",
  "The Oasis - Semi Private Areas",
  "3rd Floor - Full Buyout",
  "3rd Floor - The Monticello Room",
  "3rd Floor - Trisha's Studio Kitchen",
  "3rd Floor - The Gwendolyn Room",
];

const TIME_OPTIONS = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
  "11:30 PM",
  "12:00 AM",
  "12:30 AM",
  "1:00 AM",
  "1:30 AM",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

function InquiryForm() {
  const { ref, visible } = useReveal();
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-xl border-2 border-white/10 bg-[#1a1a1a] px-4 py-3.5 text-sm text-white placeholder:text-white/30 transition-colors focus:border-honky-red/50 focus:outline-none";
  const labelClasses = "mb-2 block text-sm font-medium tracking-wider text-white/70 uppercase";

  if (status === "success") {
    return (
      <div
        ref={ref}
        className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-honky-teal/30 bg-honky-teal/5 px-8 py-16 text-center">
          <CheckCircle className="h-12 w-12 text-honky-teal" />
          <h3 className="font-heading text-2xl font-black text-white uppercase">
            Request Sent!
          </h3>
          <p className="max-w-md text-base text-white/60">
            Thanks for reaching out! Our events team will get back to you
            shortly to start planning your celebration.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-sm font-semibold tracking-wider text-honky-red uppercase transition-colors hover:text-white"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
    >
      <form
        name="vip-inquiry"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="rounded-2xl border border-white/10 bg-[#222] p-8 md:p-10"
      >
        <input type="hidden" name="form-name" value="vip-inquiry" />

        <div className="grid gap-6 md:grid-cols-2">
          {/* First Name */}
          <div>
            <label htmlFor="first-name" className={labelClasses}>
              First Name <span className="text-honky-red">*</span>
            </label>
            <div className="relative">
              <User className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-white/20" />
              <input
                id="first-name"
                name="first-name"
                type="text"
                required
                placeholder="First name"
                className={`${inputClasses} pl-11`}
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="last-name" className={labelClasses}>
              Last Name <span className="text-honky-red">*</span>
            </label>
            <div className="relative">
              <User className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-white/20" />
              <input
                id="last-name"
                name="last-name"
                type="text"
                required
                placeholder="Last name"
                className={`${inputClasses} pl-11`}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email <span className="text-honky-red">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-white/20" />
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className={`${inputClasses} pl-11`}
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone
            </label>
            <div className="relative">
              <Phone className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-white/20" />
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(555) 555-5555"
                className={`${inputClasses} pl-11`}
              />
            </div>
          </div>

          {/* No. of People */}
          <div>
            <label htmlFor="guests" className={labelClasses}>
              No. of People <span className="text-honky-red">*</span>
            </label>
            <div className="relative">
              <Users className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-white/20" />
              <input
                id="guests"
                name="guests"
                type="number"
                required
                min={1}
                placeholder="Number of guests"
                className={`${inputClasses} pl-11`}
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className={labelClasses}>
              Location <span className="text-honky-red">*</span>
            </label>
            <div className="relative">
              <MapPin className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-white/20" />
              <select
                id="location"
                name="location"
                required
                defaultValue=""
                className={`${inputClasses} appearance-none pl-11 pr-10`}
              >
                <option value="" disabled>
                  Select a venue
                </option>
                {LOCATION_OPTIONS.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-white/30">
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M4.427 6.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 6H4.604a.25.25 0 00-.177.427z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className={labelClasses}>
              Date <span className="text-honky-red">*</span>
            </label>
            <div className="relative">
              <Calendar className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-white/20" />
              <input
                id="date"
                name="date"
                type="date"
                required
                className={`${inputClasses} pl-11`}
              />
            </div>
          </div>

          {/* Time */}
          <div>
            <label htmlFor="time" className={labelClasses}>
              Time <span className="text-honky-red">*</span>
            </label>
            <div className="relative">
              <Clock className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-white/20" />
              <select
                id="time"
                name="time"
                required
                defaultValue=""
                className={`${inputClasses} appearance-none pl-11 pr-10`}
              >
                <option value="" disabled>
                  Select a time
                </option>
                {TIME_OPTIONS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-white/30">
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M4.427 6.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 6H4.604a.25.25 0 00-.177.427z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Message — full width */}
          <div className="md:col-span-2">
            <label htmlFor="message" className={labelClasses}>
              Your Message <span className="text-honky-red">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="absolute top-4 left-4 h-4 w-4 text-white/20" />
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell us about your event..."
                className={`${inputClasses} resize-none pl-11`}
              />
            </div>
          </div>
        </div>

        {/* Hours note */}
        <div className="mt-6 flex items-start gap-2 rounded-lg bg-white/5 px-4 py-3">
          <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-honky-teal" />
          <p className="text-xs leading-relaxed text-white/40">
            <span className="font-semibold text-white/60">Hours:</span>{" "}
            Monday–Friday 11:00 AM – 2:00 AM &middot; Saturday &amp; Sunday
            10:00 AM – 2:00 AM
          </p>
        </div>

        {/* Error message */}
        {status === "error" && (
          <div className="mt-4 flex items-center gap-2 rounded-lg bg-honky-red/10 px-4 py-3">
            <AlertCircle className="h-4 w-4 shrink-0 text-honky-red" />
            <p className="text-sm text-honky-red">
              Something went wrong. Please try again or email us directly.
            </p>
          </div>
        )}

        {/* SMS consent + submit */}
        <div className="mt-6 space-y-4">
          <p className="text-[11px] leading-relaxed text-white/30">
            By providing a telephone number and submitting this form you are
            consenting to be contacted by SMS text message. Message &amp; data
            rates may apply. You can reply STOP to opt-out of further messaging.
          </p>

          <Button
            type="submit"
            disabled={status === "submitting"}
            className="h-14 w-full rounded-lg bg-honky-red text-base font-semibold tracking-wider text-white uppercase shadow-[0_0_30px_rgba(239,72,80,0.3)] hover:bg-honky-red/90 disabled:opacity-60"
          >
            {status === "submitting" ? (
              <>
                <svg
                  className="h-5 w-5 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Submit Inquiry
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page component                                                             */
/* -------------------------------------------------------------------------- */

export function VipPackagesPage() {
  return (
    <div className="min-h-screen bg-honky-bg">
      {/* ------------------------------------------------------------------ */}
      {/*  Hero                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative flex min-h-[520px] items-end overflow-hidden px-6 pt-28 pb-16 md:min-h-[600px] md:pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2c1a1a] via-honky-bg to-honky-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(239,70,79,0.18),transparent_55%)]" />

        {/* Decorative confetti-like dots */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Shader overlay */}
        <AuroraOverlay
          blendMode="linearDodge"
          colorA="#d9d9d9"
          colorB="#ffdfc2"
          colorC="#5d67c2"
          colorSpace="oklab"
          curtainCount={3}
          height={72}
          intensity={36}
          opacity={0.71}
          rayDensity={7}
          seed={81}
          speed={-2.8}
          waviness={0}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1280px]">
          {/* Label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <PartyPopper className="h-3.5 w-3.5 text-honky-teal" />
            <span className="text-xs font-semibold tracking-[1.2px] text-honky-teal uppercase">
              VIP Packages
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl font-heading text-4xl font-black leading-[1.1] text-white uppercase md:text-5xl lg:text-6xl">
            Before the Vows, Raise a Round at{" "}
            <span className="neon-text font-heading" data-neon="Friends in Low Places">
              Friends in Low Places
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-[640px] text-lg leading-8 text-white/60 md:text-xl">
            Time to round up your I-do crew for one unforgettable celebration.
            Live music, cold drinks, and good vibes guaranteed. Make your
            bachelor or bachelorette party a night to remember, Nashville-style.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              asChild
              className="h-14 rounded-lg bg-honky-red px-8 text-base font-semibold tracking-wider text-white uppercase shadow-[0_0_30px_rgba(239,72,80,0.3)] hover:bg-honky-red/90"
            >
              <a href="#inquire">
                <Send className="h-4 w-4" />
                Inquire Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Package cards                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          {/* Section header */}
          <div className="mb-12 flex flex-col gap-2 text-center">
            <h3 className="font-heading text-lg font-bold tracking-[1.8px] text-honky-teal uppercase">
              Celebrate in Style
            </h3>
            <h2 className="font-heading text-4xl font-black text-white uppercase md:text-5xl">
              <span className="text-white">Choose Your </span>
              <span className="neon-text font-heading" data-neon="Package">
                Package
              </span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid gap-8 lg:grid-cols-2">
            <PackageCard
              index={0}
              title="Bachelorette Packages"
              description="Grab your girls, your boas, and your best white dress! It's time to celebrate YOU at Friends In Low Places! From disco ball drinks to the best music in the Neon Neighborhood, we've got everything to make your last fling before the ring unforgettable!"
              icon={Heart}
              gradient="from-[#ef464f]/20 via-[#2c1a1a]/50 to-[#1a1a1a]"
              borderColor="border-honky-red/20 hover:border-honky-red/40"
              accentColor="bg-honky-red/20"
              pdfUrl="/docs/FILP_Bachelorette_Packages.pdf"
              images={[
                "/images/vip-packages/bachelorette1.jpeg",
                "/images/vip-packages/bachelorette2.jpeg",
                "/images/vip-packages/bachelorette3.jpeg",
              ]}
            />
            <PackageCard
              index={1}
              title="Bachelor Packages"
              description="Call the boys, dust off your boots, and let loose at Friends In Low Places. We're talking cold beer, loud music, and one legendary night in the Neon Neighborhood: this is where unforgettable bachelor parties go down."
              icon={Beer}
              gradient="from-[#5ec4b6]/20 via-[#1a2a28]/50 to-[#1a1a1a]"
              borderColor="border-honky-teal/20 hover:border-honky-teal/40"
              accentColor="bg-honky-teal/20"
              pdfUrl="/docs/FILP_Bachelor_Packages.pdf"
              images={[
                "/images/vip-packages/bachelor1.jpeg",
                "/images/vip-packages/bachelor2.jpeg",
                "/images/vip-packages/bachelor3.jpeg",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Photo gallery                                                       */}
      {/* ------------------------------------------------------------------ */}
      <PhotoGallery />

      {/* ------------------------------------------------------------------ */}
      {/*  Inquiry form                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section id="inquire" className="scroll-mt-24 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[800px]">
          {/* Section header */}
          <div className="mb-10 flex flex-col gap-2 text-center">
            <h3 className="font-heading text-lg font-bold tracking-[1.8px] text-honky-teal uppercase">
              Get Started
            </h3>
            <h2 className="font-heading text-4xl font-black text-white uppercase md:text-5xl">
              <span className="text-white">Plan Your </span>
              <span className="neon-text font-heading" data-neon="Party">
                Party
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-white/50">
              Fill out the form below and our events team will be in touch to
              help you plan the perfect celebration.
            </p>
          </div>

          <InquiryForm />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Bottom highlights                                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-white/5 px-6 py-16">
        <div className="mx-auto grid max-w-[1280px] gap-8 sm:grid-cols-3">
          {[
            {
              icon: Music,
              title: "Live Music",
              desc: "4 floors of the best live country and rock music on Broadway.",
            },
            {
              icon: Sparkles,
              title: "VIP Treatment",
              desc: "Dedicated bars, private entrances, and personalized service.",
            },
            {
              icon: MapPin,
              title: "Prime Location",
              desc: "Right in the heart of Nashville's famous Neon Neighborhood.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-8 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                <item.icon className="h-5 w-5 text-honky-red" />
              </div>
              <h4 className="font-heading text-lg font-bold text-white">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-white/40">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
