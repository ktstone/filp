"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import {
  Star,
  UserCheck,
  DoorOpen,
  Eye,
  Megaphone,
  Sparkles,
  CheckCircle2,
  Loader2,
  Phone,
  Users,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";
import { ShaderOverlay, DefaultAurora, DefaultLensFlare } from "@/components/shader-overlay";

/* -------------------------------------------------------------------------- */
/*  Perks                                                                      */
/* -------------------------------------------------------------------------- */

interface Perk {
  icon: LucideIcon;
  title: string;
  description: string;
}

const perks: Perk[] = [
  {
    icon: UserCheck,
    title: "Dedicated VIP Server",
    description: "A personal server for your group throughout your entire visit.",
  },
  {
    icon: DoorOpen,
    title: "VIP Entrance",
    description: "Expedited entry into the venue. Skip the line.",
  },
  {
    icon: Eye,
    title: "Prime Table View",
    description: "The best seats in the house with a view of all the entertainment.",
  },
  {
    icon: Megaphone,
    title: "Marquee Presentations",
    description: "Celebrate your occasion on the big screen for everyone to see!",
  },
];

/* -------------------------------------------------------------------------- */
/*  Location options                                                           */
/* -------------------------------------------------------------------------- */

const locations = ["Honky-Tonk", "Oasis Rooftop"] as const;

/* -------------------------------------------------------------------------- */
/*  Reservation types                                                          */
/* -------------------------------------------------------------------------- */

type ReservationType = "vip" | "group-dining";

/* -------------------------------------------------------------------------- */
/*  Time slots                                                                 */
/* -------------------------------------------------------------------------- */

function generateTimeSlots(): string[] {
  const slots: string[] = [];
  for (let h = 10; h <= 24 + 1; h++) {
    const hour = h > 24 ? h - 24 : h;
    for (const m of [0, 30]) {
      if (h === 25 && m === 30) break;
      const ampm = hour >= 12 && hour < 24 ? "PM" : "AM";
      const display = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
      slots.push(`${display}:${m === 0 ? "00" : "30"} ${ampm}`);
    }
  }
  return slots;
}

const timeSlots = generateTimeSlots();

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */

function ReservationsHero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pt-40 pb-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(239,70,79,0.08),transparent_60%)]" />

      {/* Shader overlay */}
      <ShaderOverlay>
        <DefaultAurora seed={35} />
        <DefaultLensFlare />
      </ShaderOverlay>

      <div className="relative mb-8 inline-flex items-center gap-2 rounded-full border border-honky-red/30 bg-white/5 px-4 py-2 backdrop-blur-sm">
        <Star className="h-3.5 w-3.5 text-honky-red" />
        <span className="text-xs font-semibold tracking-[1.2px] text-honky-red uppercase">
          VIP Experience
        </span>
      </div>

      <h1 className="relative text-center font-heading text-5xl font-black leading-[0.9] text-white uppercase md:text-[80px]">
        <span className="neon-text font-heading" data-neon="VIP Reservations">VIP Reservations</span>
      </h1>

      <p className="relative mt-8 max-w-xl text-center text-lg font-light leading-8 text-white/50">
        We&rsquo;d love to welcome you for a VIP Reservation! We offer tables in both our
        Honky-Tonk and Oasis Rooftop, with spending minimums dependent upon your date, group size,
        and time of day.
      </p>

      <a
        href="sms:6155499297"
        className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-honky-teal transition-colors hover:text-honky-teal/80"
      >
        <Phone className="h-4 w-4" />
        Or text us at 615-549-9297 to reserve
      </a>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Perks Grid                                                                 */
/* -------------------------------------------------------------------------- */

function PerkCard({ perk, index }: { perk: Perk; index: number }) {
  const { ref, visible } = useReveal();
  const Icon = perk.icon;
  return (
    <div
      ref={ref}
      className={`flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-600 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-honky-red/10">
        <Icon className="h-[18px] w-[18px] text-honky-red" />
      </div>
      <div>
        <h3 className="font-heading text-base font-bold text-white">{perk.title}</h3>
        <p className="mt-1 text-sm font-light leading-relaxed text-white/40">
          {perk.description}
        </p>
      </div>
    </div>
  );
}

function PerksSection() {
  return (
    <section className="relative px-6 pb-16">
      <div className="mx-auto max-w-[900px]">
        <p className="mb-6 text-center text-sm font-semibold tracking-[2px] text-honky-teal uppercase">
          Your reservation will feature
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {perks.map((perk, i) => (
            <PerkCard key={perk.title} perk={perk} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  VIP Gallery                                                                */
/* -------------------------------------------------------------------------- */

const galleryImages = [
  { src: "/images/vip-reservations/vip1.jpeg", alt: "VIP table setup with bottle service" },
  { src: "/images/vip-reservations/vip2.jpeg", alt: "Guests enjoying VIP experience" },
  { src: "/images/vip-reservations/vip3.jpeg", alt: "VIP section atmosphere" },
  { src: "/images/vip-reservations/vip4.jpeg", alt: "Premium VIP seating area" },
  { src: "/images/vip-reservations/vip5.jpeg", alt: "VIP celebration at FILP" },
  { src: "/images/vip-reservations/vip6.jpeg", alt: "VIP lounge experience" },
  { src: "/images/vip-reservations/vip7.jpeg", alt: "VIP nightlife at Friends In Low Places" },
];

function VipGallery() {
  const { ref, visible } = useReveal();
  return (
    <section className="relative px-6 pb-20">
      {/* Section label */}
      <p className="mb-6 text-center text-sm font-semibold tracking-[2px] text-white/20 uppercase">
        The VIP Experience
      </p>

      {/* Asymmetric mosaic grid */}
      <div
        ref={ref}
        className={`mx-auto max-w-[1100px] transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 grid-rows-[160px_160px_160px_160px] gap-3 sm:grid-cols-4 sm:grid-rows-[220px_180px_220px] sm:gap-4">
          {/* Large hero tile — spans 2 cols, 2 rows */}
          <div className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Right column top */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
          </div>

          {/* Right column bottom */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={galleryImages[4].src}
              alt={galleryImages[4].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
          </div>

          {/* Bottom row — spans full width */}
          <div className="relative col-span-2 overflow-hidden rounded-2xl">
            <Image
              src={galleryImages[5].src}
              alt={galleryImages[5].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          <div className="relative col-span-2 overflow-hidden rounded-2xl max-sm:hidden">
            <Image
              src={galleryImages[6].src}
              alt={galleryImages[6].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Subtle red glow behind gallery */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,70,79,0.04),transparent_70%)]" />
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Group Dining Callout                                                       */
/* -------------------------------------------------------------------------- */

function GroupDiningCallout({ onSelect }: { onSelect: () => void }) {
  const { ref, visible } = useReveal();
  return (
    <section className="relative px-6 pb-16">
      <div
        ref={ref}
        className={`mx-auto max-w-[640px] transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-5 rounded-2xl border border-honky-teal/15 bg-honky-teal/[0.03] p-8 text-center sm:flex-row sm:text-left">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-honky-teal/10">
            <Briefcase className="h-6 w-6 text-honky-teal" />
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-lg font-bold text-white">
              Group Dining (12+ Guests)
            </h3>
            <p className="mt-1 text-sm font-light leading-relaxed text-white/45">
              Planning a work outing, corporate event, or large group dinner? We&rsquo;ve got you
              covered. Use the form below and select &ldquo;Group Dining&rdquo; to get started, or
              email us at{" "}
              <a
                href="mailto:reservations@friendsbarnashville.com"
                className="text-honky-teal underline decoration-honky-teal/30 underline-offset-2 transition-colors hover:text-honky-teal/80"
              >
                reservations@friendsbarnashville.com
              </a>
            </p>
          </div>
          <Button
            onClick={onSelect}
            className="shrink-0 rounded-lg bg-honky-teal/15 px-5 py-2.5 text-sm font-semibold tracking-wider text-honky-teal uppercase transition-colors hover:bg-honky-teal/25"
          >
            <Users className="h-4 w-4" />
            Select
          </Button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Reservation Type Toggle                                                    */
/* -------------------------------------------------------------------------- */

function ReservationTypeToggle({
  value,
  onChange,
}: {
  value: ReservationType;
  onChange: (type: ReservationType) => void;
}) {
  return (
    <div className="mb-8">
      <label className="mb-3 block text-sm font-semibold tracking-wide text-white/80">
        Reservation Type <span className="text-honky-red">*</span>
      </label>
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => onChange("vip")}
          aria-pressed={value === "vip"}
          className={`flex flex-col items-center gap-2 rounded-xl border-2 px-4 py-4 transition-all ${
            value === "vip"
              ? "border-honky-red/50 bg-honky-red/[0.08]"
              : "border-white/10 bg-white/[0.02] hover:border-white/20"
          }`}
        >
          <Star
            className={`h-5 w-5 ${value === "vip" ? "text-honky-red" : "text-white/30"}`}
          />
          <span
            className={`text-sm font-semibold ${value === "vip" ? "text-white" : "text-white/50"}`}
          >
            VIP Table
          </span>
          <span className="text-[11px] text-white/30">Celebrations &amp; nightlife</span>
        </button>
        <button
          type="button"
          onClick={() => onChange("group-dining")}
          aria-pressed={value === "group-dining"}
          className={`flex flex-col items-center gap-2 rounded-xl border-2 px-4 py-4 transition-all ${
            value === "group-dining"
              ? "border-honky-teal/50 bg-honky-teal/[0.08]"
              : "border-white/10 bg-white/[0.02] hover:border-white/20"
          }`}
        >
          <Briefcase
            className={`h-5 w-5 ${value === "group-dining" ? "text-honky-teal" : "text-white/30"}`}
          />
          <span
            className={`text-sm font-semibold ${
              value === "group-dining" ? "text-white" : "text-white/50"
            }`}
          >
            Group Dining
          </span>
          <span className="text-[11px] text-white/30">12+ guests &amp; corporate</span>
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Reservation Form                                                           */
/* -------------------------------------------------------------------------- */

function ReservationForm({
  initialType = "vip",
  onTypeChange,
}: {
  initialType?: ReservationType;
  onTypeChange?: (type: ReservationType) => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [reservationType, setReservationType] = useState<ReservationType>(initialType);

  function handleTypeChange(type: ReservationType) {
    setReservationType(type);
    onTypeChange?.(type);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === "string") params.append(key, value);
    });

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-6 rounded-2xl border border-honky-teal/20 bg-honky-teal/5 px-8 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-honky-teal/10">
          <CheckCircle2 className="h-8 w-8 text-honky-teal" />
        </div>
        <h3 className="font-heading text-3xl font-black text-white uppercase">
          Request Received
        </h3>
        <p className="max-w-md text-base font-light text-white/60">
          {reservationType === "group-dining"
            ? "Thanks for your group dining inquiry! Our events team will be in touch shortly to coordinate the details."
            : "Thanks for your VIP reservation request! Our team will be in touch shortly to confirm the details. See you on Broadway!"}
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-xl border-2 border-white/10 bg-white/[0.03] px-5 py-3.5 text-base text-white transition-colors placeholder:text-white/20 focus:border-honky-red/50 focus:bg-white/[0.05] focus:outline-none";
  const labelClasses = "text-sm font-semibold tracking-wide text-white/80";
  const selectClasses =
    "w-full appearance-none rounded-xl border-2 border-white/10 bg-white/[0.03] px-5 py-3.5 text-base text-white transition-colors focus:border-honky-red/50 focus:bg-white/[0.05] focus:outline-none [&:invalid]:text-white/20 [&>option]:bg-[#1a1a1a] [&>option]:text-white";

  const isGroup = reservationType === "group-dining";

  return (
    <form
      name="vip-reservations"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="flex flex-col gap-8"
    >
      <input type="hidden" name="form-name" value="vip-reservations" />

      {/* Reservation type toggle */}
      <ReservationTypeToggle value={reservationType} onChange={handleTypeChange} />
      <input type="hidden" name="reservation-type" value={reservationType} />

      {/* Name */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="vip-first-name" className={labelClasses}>
            First Name <span className="text-honky-red">*</span>
          </label>
          <input
            id="vip-first-name"
            name="first-name"
            type="text"
            required
            className={inputClasses}
            placeholder="First"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="vip-last-name" className={labelClasses}>
            Last Name <span className="text-honky-red">*</span>
          </label>
          <input
            id="vip-last-name"
            name="last-name"
            type="text"
            required
            className={inputClasses}
            placeholder="Last"
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="vip-email" className={labelClasses}>
            Email <span className="text-honky-red">*</span>
          </label>
          <input
            id="vip-email"
            name="email"
            type="email"
            required
            className={inputClasses}
            placeholder="you@example.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="vip-phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="vip-phone"
            name="phone"
            type="tel"
            className={inputClasses}
            placeholder="(555) 555-5555"
          />
        </div>
      </div>

      {/* Group size & Location */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="vip-party-size" className={labelClasses}>
            No. of People <span className="text-honky-red">*</span>
          </label>
          <input
            id="vip-party-size"
            name="party-size"
            type="number"
            min={isGroup ? 12 : 1}
            required
            className={inputClasses}
            placeholder={isGroup ? "12+" : "Group size"}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="vip-location" className={labelClasses}>
            Location <span className="text-honky-red">*</span>
          </label>
          <div className="relative">
            <select
              id="vip-location"
              name="location"
              required
              defaultValue=""
              className={selectClasses}
            >
              <option value="" disabled>
                Select location...
              </option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <SelectArrow />
          </div>
        </div>
      </div>

      {/* Date & Time */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="vip-date" className={labelClasses}>
            Date <span className="text-honky-red">*</span>
          </label>
          <input
            id="vip-date"
            name="date"
            type="date"
            required
            min={new Date().toISOString().split("T")[0]}
            className={`${inputClasses} [color-scheme:dark]`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="vip-time" className={labelClasses}>
            Time <span className="text-honky-red">*</span>
          </label>
          <div className="relative">
            <select
              id="vip-time"
              name="time"
              required
              defaultValue=""
              className={selectClasses}
            >
              <option value="" disabled>
                Select time...
              </option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <SelectArrow />
          </div>
        </div>
      </div>

      {/* Hours note */}
      <div className="flex flex-col gap-1 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-3">
        <p className="text-xs font-medium text-white/30">
          <span className="text-white/50">Mon &ndash; Fri:</span> 11:00am &ndash; 2:00am
        </p>
        <p className="text-xs font-medium text-white/30">
          <span className="text-white/50">Sat &amp; Sun:</span> 10:00am &ndash; 2:00am
        </p>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="vip-message" className={labelClasses}>
          Your Message <span className="text-honky-red">*</span>
        </label>
        <textarea
          id="vip-message"
          name="message"
          required
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder={
            isGroup
              ? "Tell us about your group: occasion, dietary needs, A/V requirements, etc."
              : "Tell us about your celebration, any special requests, etc."
          }
        />
      </div>

      {/* SMS consent */}
      <p className="text-xs font-light leading-relaxed text-white/30">
        By providing a telephone number and submitting this form you are consenting to be contacted
        by SMS text message. Message &amp; data rates may apply. You can reply STOP to opt-out of
        further messaging.
      </p>

      {/* Error message */}
      {submitError && (
        <div className="flex items-center gap-2 rounded-lg bg-honky-red/10 px-4 py-3">
          <svg className="h-4 w-4 shrink-0 text-honky-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p className="text-sm text-honky-red">
            Something went wrong. Please try again or text us at 615-549-9297.
          </p>
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        disabled={submitting}
        className={`h-14 w-full rounded-xl text-base font-bold tracking-wider text-white uppercase transition-all disabled:opacity-60 ${
          isGroup
            ? "bg-honky-teal shadow-[0_0_30px_rgba(94,196,182,0.2)] hover:bg-honky-teal/90 hover:shadow-[0_0_40px_rgba(94,196,182,0.3)]"
            : "bg-honky-red shadow-[0_0_30px_rgba(239,72,80,0.2)] hover:bg-honky-red/90 hover:shadow-[0_0_40px_rgba(239,72,80,0.3)]"
        }`}
      >
        {submitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : isGroup ? (
          <>
            <Users className="h-5 w-5" />
            Submit Group Dining Request
          </>
        ) : (
          <>
            <Sparkles className="h-5 w-5" />
            Reserve Your VIP Table
          </>
        )}
      </Button>
    </form>
  );
}

/* -------------------------------------------------------------------------- */
/*  Select Arrow (reused)                                                      */
/* -------------------------------------------------------------------------- */

function SelectArrow() {
  return (
    <div className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2">
      <svg
        className="h-4 w-4 text-white/40"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main Export                                                                 */
/* -------------------------------------------------------------------------- */

export function VipReservationsPage() {
  const [formType, setFormType] = useState<ReservationType>("vip");

  return (
    <div className="min-h-screen bg-honky-bg-warm">
      <ReservationsHero />
      <PerksSection />
      <VipGallery />
      <GroupDiningCallout
        onSelect={() => {
          setFormType("group-dining");
          setTimeout(() => {
            document.getElementById("reservation-form")?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }}
      />

      {/* Form section */}
      <RevealFormCard formType={formType} setFormType={setFormType} />
    </div>
  );
}

function RevealFormCard({ formType, setFormType }: { formType: ReservationType; setFormType: (t: ReservationType) => void }) {
  const { ref, visible } = useReveal();
  return (
    <section id="reservation-form" className="relative px-6 pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(94,196,182,0.03),transparent_50%)]" />
      <div
        ref={ref}
        className={`relative mx-auto max-w-[640px] transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm sm:p-10">
          <div className="mb-8">
            <h2 className="font-heading text-2xl font-black text-white uppercase">
              <span className="neon-text font-heading" data-neon="Reserve Your Table">Reserve Your Table</span>
            </h2>
            <p className="mt-2 text-sm font-light text-white/40">
              Fields marked with <span className="text-honky-red">*</span> are required.
            </p>
          </div>
          <ReservationForm key={formType} initialType={formType} onTypeChange={setFormType} />
        </div>
      </div>
    </section>
  );
}
