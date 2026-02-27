"use client";

import { useState, useRef, type FormEvent, type DragEvent } from "react";
import {
  Sparkles,
  Upload,
  X,
  FileText,
  CheckCircle2,
  Loader2,
  GlassWater,
  UtensilsCrossed,
  UserRound,
  Wine,
  Sparkle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* -------------------------------------------------------------------------- */
/*  Positions                                                                  */
/* -------------------------------------------------------------------------- */

const positions = [
  { title: "Bartenders", icon: Wine },
  { title: "Servers", icon: UtensilsCrossed },
  { title: "Hosts", icon: UserRound },
  { title: "Barbacks", icon: GlassWater },
  { title: "Dishwashers", icon: Sparkle },
] as const;

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */

function CareersHero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pt-40 pb-20">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(239,70,79,0.08),transparent_60%)]" />

      {/* Badge */}
      <div className="relative mb-8 inline-flex items-center gap-2 rounded-full border border-honky-red/30 bg-white/5 px-4 py-2 backdrop-blur-sm">
        <Sparkles className="h-3.5 w-3.5 text-honky-teal" />
        <span className="text-xs font-semibold tracking-[1.2px] text-honky-teal uppercase">
          Now Hiring
        </span>
      </div>

      {/* Heading */}
      <h1 className="relative text-center font-heading text-6xl font-black leading-[0.9] text-white uppercase md:text-[96px]">
        Join the{" "}
        <span className="neon-text font-heading" data-neon="Crew">
          Crew
        </span>
      </h1>

      {/* Subtitle */}
      <p className="relative mt-6 max-w-lg text-center text-lg font-light leading-7 text-white/60">
        We&rsquo;re looking for good people who love good times. Apply below and
        become part of Nashville&rsquo;s wildest honky tonk.
      </p>

      {/* Position pills */}
      <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
        {positions.map(({ title, icon: Icon }) => (
          <div
            key={title}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-sm"
          >
            <Icon className="h-4 w-4 text-honky-red/70" />
            <span className="text-sm font-semibold tracking-wide text-white/80">
              {title}
            </span>
          </div>
        ))}
      </div>

      {/* Decorative separator */}
      <div className="relative mt-16 flex items-center gap-4">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-honky-red/40" />
        <span className="text-xs tracking-[3px] text-white/20 uppercase">
          All Positions
        </span>
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-honky-red/40" />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Application Form                                                           */
/* -------------------------------------------------------------------------- */

function ApplicationForm() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleDragOver(e: DragEvent) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(e: DragEvent) {
    e.preventDefault();
    setIsDragging(false);
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) setFile(dropped);
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0];
    if (selected) setFile(selected);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    if (file) {
      formData.set("resume", file);
    }

    try {
      await fetch("/", {
        method: "POST",
        body: formData,
      });
      setSubmitted(true);
    } catch {
      // Netlify forms will handle errors
      setSubmitted(true);
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
          Application Received
        </h3>
        <p className="max-w-md text-base font-light text-white/60">
          Thanks for applying! We&rsquo;ll be in touch soon. In the meantime,
          come grab a drink on Broadway.
        </p>
      </div>
    );
  }

  return (
    <form
      name="careers"
      method="POST"
      data-netlify="true"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className="flex flex-col gap-8"
    >
      {/* Netlify hidden field */}
      <input type="hidden" name="form-name" value="careers" />

      {/* Name fields */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="first-name"
            className="text-sm font-semibold tracking-wide text-white/80"
          >
            First Name <span className="text-honky-red">*</span>
          </label>
          <input
            id="first-name"
            name="first-name"
            type="text"
            required
            className="rounded-xl border-2 border-white/10 bg-white/[0.03] px-5 py-3.5 text-base text-white transition-colors placeholder:text-white/20 focus:border-honky-red/50 focus:bg-white/[0.05] focus:outline-none"
            placeholder="First"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="last-name"
            className="text-sm font-semibold tracking-wide text-white/80"
          >
            Last Name <span className="text-honky-red">*</span>
          </label>
          <input
            id="last-name"
            name="last-name"
            type="text"
            required
            className="rounded-xl border-2 border-white/10 bg-white/[0.03] px-5 py-3.5 text-base text-white transition-colors placeholder:text-white/20 focus:border-honky-red/50 focus:bg-white/[0.05] focus:outline-none"
            placeholder="Last"
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-semibold tracking-wide text-white/80"
        >
          Email <span className="text-honky-red">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-xl border-2 border-white/10 bg-white/[0.03] px-5 py-3.5 text-base text-white transition-colors placeholder:text-white/20 focus:border-honky-red/50 focus:bg-white/[0.05] focus:outline-none"
          placeholder="you@example.com"
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="phone"
          className="text-sm font-semibold tracking-wide text-white/80"
        >
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="rounded-xl border-2 border-white/10 bg-white/[0.03] px-5 py-3.5 text-base text-white transition-colors placeholder:text-white/20 focus:border-honky-red/50 focus:bg-white/[0.05] focus:outline-none"
          placeholder="(555) 555-5555"
        />
      </div>

      {/* Position */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="position"
          className="text-sm font-semibold tracking-wide text-white/80"
        >
          Position Applying For <span className="text-honky-red">*</span>
        </label>
        <div className="relative">
          <select
            id="position"
            name="position"
            required
            defaultValue=""
            className="w-full appearance-none rounded-xl border-2 border-white/10 bg-white/[0.03] px-5 py-3.5 text-base text-white transition-colors focus:border-honky-red/50 focus:bg-white/[0.05] focus:outline-none [&:invalid]:text-white/20 [&>option]:bg-[#1a1a1a] [&>option]:text-white"
          >
            <option value="" disabled>
              Select a position...
            </option>
            {positions.map(({ title }) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </select>
          {/* Custom arrow */}
          <div className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2">
            <svg
              className="h-4 w-4 text-white/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Resume upload */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold tracking-wide text-white/80">
          Resume
        </label>
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`group flex cursor-pointer flex-col items-center gap-3 rounded-xl border-2 border-dashed px-6 py-8 transition-all ${
            isDragging
              ? "border-honky-red/60 bg-honky-red/5"
              : file
                ? "border-honky-teal/30 bg-honky-teal/5"
                : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />

          {file ? (
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-honky-teal" />
              <span className="text-sm font-medium text-white/80">
                {file.name}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setFile(null);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-white/20 hover:text-white"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ) : (
            <>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Upload className="h-4 w-4 text-white/40" />
              </div>
              <div className="text-center">
                <span className="text-sm font-semibold text-honky-red">
                  Upload
                </span>
                <span className="text-sm text-white/40">
                  {" "}
                  or drag files here
                </span>
              </div>
              <span className="text-xs text-white/20">
                PDF, DOC, or DOCX
              </span>
            </>
          )}
        </div>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={submitting}
        className="mt-2 h-14 w-full rounded-xl bg-honky-red text-base font-bold tracking-wider text-white uppercase shadow-[0_0_30px_rgba(239,72,80,0.2)] transition-all hover:bg-honky-red/90 hover:shadow-[0_0_40px_rgba(239,72,80,0.3)] disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Application"
        )}
      </Button>
    </form>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main Export                                                                 */
/* -------------------------------------------------------------------------- */

export function CareersPage() {
  return (
    <div className="min-h-screen bg-[#181111]">
      <CareersHero />

      {/* Form section */}
      <section className="relative px-6 pb-24">
        {/* Background accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(94,196,182,0.04),transparent_60%)]" />

        <div className="relative mx-auto max-w-[640px]">
          {/* Form card */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm sm:p-10">
            <div className="mb-8">
              <h2 className="font-heading text-2xl font-black text-white uppercase">
                Apply Now
              </h2>
              <p className="mt-2 text-sm font-light text-white/40">
                Fields marked with <span className="text-honky-red">*</span>{" "}
                are required.
              </p>
            </div>

            <ApplicationForm />
          </div>
        </div>
      </section>
    </div>
  );
}
