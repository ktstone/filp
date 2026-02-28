import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-[#181111] px-6 py-32">
        {/* Background texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Red glow from top */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(239,70,79,0.12),transparent_55%)]" />

        {/* Teal glow from bottom */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(94,196,182,0.06),transparent_50%)]" />

        {/* Content */}
        <div className="relative flex flex-col items-center gap-8 text-center">
          {/* Logo */}
          <Image
            src="/images/logo-circle.png"
            alt=""
            width={72}
            height={72}
            className="opacity-40"
            aria-hidden="true"
          />

          {/* 404 number */}
          <h1 className="font-heading text-[120px] font-black leading-none tracking-tight text-white/[0.08] select-none sm:text-[180px] md:text-[220px]">
            404
          </h1>

          {/* Message overlaid on the number */}
          <div className="-mt-24 flex flex-col items-center gap-4 sm:-mt-32">
            <h2 className="font-heading text-3xl font-black text-white uppercase sm:text-4xl md:text-5xl">
              Wrong{" "}
              <span className="neon-text font-heading" data-neon="Honky Tonk">
                Honky Tonk
              </span>
            </h2>

            <p className="max-w-md text-base font-light leading-7 text-white/45">
              Looks like this page has left the bar. Head back to Broadway and
              find your way to the good times.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-honky-red px-6 text-sm font-semibold tracking-wider text-white uppercase shadow-[0_0_20px_rgba(239,72,80,0.3)] transition-all hover:bg-honky-red/90 hover:shadow-[0_0_30px_rgba(239,72,80,0.5)]"
            >
              Back to Home
            </Link>
            <Link
              href="/events"
              className="inline-flex h-12 items-center gap-2 rounded-lg border-2 border-white/15 bg-transparent px-6 text-sm font-semibold tracking-wider text-white/70 uppercase transition-all hover:border-white/30 hover:text-white"
            >
              See Live Music
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
