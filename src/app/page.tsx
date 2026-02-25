import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Music,
  Sun,
  UtensilsCrossed,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { ShaderBackground } from "@/components/shader-background";

/* -------------------------------------------------------------------------- */
/*  Header                                                                     */
/* -------------------------------------------------------------------------- */
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-honky-border bg-[rgba(26,26,26,0.8)] backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/filp-logo Small.png"
            alt="Friends In Low Places logo"
            width={48}
            height={48}
            className="shrink-0"
          />
          <span className="text-sm font-bold tracking-wider text-white uppercase">
            Friends In Low Places
          </span>
        </div>

        {/* Nav links - hidden on mobile */}
        <nav className="hidden items-center gap-8 md:flex">
          {["Menu", "Live Music", "VIP/Events", "Shop"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-honky-text-light transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="hidden h-10 rounded-lg border-honky-border bg-honky-card text-sm font-medium text-white hover:bg-white/10 sm:inline-flex"
          >
            Sign In
          </Button>
          <Button className="h-10 rounded-lg bg-honky-red px-5 text-sm font-medium text-white shadow-[0_4px_14px_rgba(239,70,79,0.4)] hover:bg-honky-red/90">
            Book a Table
          </Button>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */
function Hero() {
  return (
    <section className="relative flex h-[700px] items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Nashville honky tonk atmosphere"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-honky-bg via-[rgba(26,26,26,0.6)] to-[rgba(26,26,26,0.3)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Badge pill */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-honky-teal/30 bg-honky-teal/10 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-honky-teal" />
          <span className="text-sm font-medium text-honky-teal">
            Nashville&apos;s Premier Honky Tonk
          </span>
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-6xl font-bold tracking-tight uppercase sm:text-7xl lg:text-[96px] lg:leading-[1]">
          <span className="text-white">Friends In</span>
          <br />
          <span className="text-honky-red">Low Places</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-lg text-honky-text-light sm:text-xl">
          Where the whiskey flows, the music never stops, and every night feels
          like a Saturday. Experience the heart of Nashville nightlife.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className="h-12 rounded-lg bg-honky-red px-8 text-base font-medium text-white shadow-[0_4px_20px_rgba(239,70,79,0.5)] hover:bg-honky-red/90">
            Book a Table
          </Button>
          <Button
            variant="outline"
            className="h-12 rounded-lg border-white/20 bg-transparent px-8 text-base font-medium text-white backdrop-blur-sm hover:bg-white/10"
          >
            See Live Music Schedule
          </Button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Feature Card                                                               */
/* -------------------------------------------------------------------------- */
interface FeatureCardProps {
  image: string;
  tag: string;
  tagColor: "red" | "teal";
  title: string;
  description: string;
  icon: React.ReactNode;
}

function FeatureCard({
  image,
  tag,
  tagColor,
  title,
  description,
  icon,
}: FeatureCardProps) {
  const tagClasses =
    tagColor === "red"
      ? "bg-honky-red/10 text-honky-red"
      : "bg-honky-teal/10 text-honky-teal";

  return (
    <div className="group overflow-hidden rounded-xl border border-honky-border-subtle bg-honky-card">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-honky-card/60 to-transparent" />
        {/* Icon overlay */}
        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span
          className={`inline-block rounded-md px-3 py-1 text-xs font-bold tracking-wider uppercase ${tagClasses}`}
        >
          {tag}
        </span>
        <h3 className="mt-3 text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-honky-text-gray">
          {description}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Features Section                                                           */
/* -------------------------------------------------------------------------- */
function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      {/* Section header */}
      <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl lg:text-5xl">
            <span className="text-white">Experience The </span>
            <span className="text-honky-teal">Honky Tonk</span>
          </h2>
          <p className="mt-4 max-w-xl text-honky-text-gray">
            Explore everything that makes Nashville&apos;s nightlife legendary
            under one unforgettable roof.
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-honky-red transition-colors hover:text-honky-red/80"
        >
          View Full Gallery
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      {/* Cards grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          image="/images/card-live-music.jpg"
          tag="Main Stage"
          tagColor="red"
          title="Live Music Daily"
          description="From up-and-coming local talent to nationally touring acts, our stage hosts live performances seven nights a week."
          icon={<Music className="h-5 w-5 text-white" />}
        />
        <FeatureCard
          image="/images/card-rooftop.jpg"
          tag="The Oasis"
          tagColor="teal"
          title="Rooftop Bar"
          description="Take in stunning skyline views from our rooftop oasis, featuring craft cocktails and a relaxed atmosphere above the Broadway buzz."
          icon={<Sun className="h-5 w-5 text-white" />}
        />
        <FeatureCard
          image="/images/card-food.jpg"
          tag="Kitchen"
          tagColor="red"
          title="Southern Eats"
          description="Fuel your night with authentic Southern comfort food, from Nashville hot chicken to smoky BBQ platters made fresh daily."
          icon={<UtensilsCrossed className="h-5 w-5 text-white" />}
        />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CTA Section                                                                */
/* -------------------------------------------------------------------------- */
function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="overflow-hidden rounded-2xl border border-honky-border-subtle bg-honky-card">
        <div className="grid md:grid-cols-2">
          {/* Image side */}
          <div className="relative min-h-[300px] md:min-h-[400px]">
            <Image
              src="/images/cta-events.jpg"
              alt="Private events at Friends In Low Places"
              fill
              className="object-cover"
            />
            {/* Fade to card background on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-honky-card" />
          </div>

          {/* Text side */}
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="mb-4 inline-block text-sm font-bold tracking-wider text-honky-teal uppercase">
              Private Events
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white uppercase sm:text-3xl lg:text-4xl">
              Host Your Next Big Night Out
            </h2>
            <p className="mt-4 max-w-md text-honky-text-gray">
              From corporate gatherings to birthday bashes, our event team will
              craft a custom experience with premium packages, private bar
              access, and the best live entertainment in Nashville.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="h-11 rounded-lg bg-honky-red px-6 text-sm font-medium text-white shadow-[0_4px_14px_rgba(239,70,79,0.4)] hover:bg-honky-red/90">
                Inquire Now
              </Button>
              <Button
                variant="outline"
                className="h-11 rounded-lg border-white/20 bg-transparent px-6 text-sm font-medium text-white hover:bg-white/10"
              >
                Download VIP Kit
              </Button>
            </div>
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
    <footer className="relative border-t border-honky-border overflow-hidden">
      <ShaderBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/filp-logo Small.png"
                alt="Friends In Low Places logo"
                width={48}
                height={48}
                className="shrink-0"
              />
              <span className="text-sm font-bold tracking-wider text-white uppercase">
                Friends In Low Places
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-honky-text-gray">
              Nashville&apos;s home for live music, cold drinks, and good times.
              Located in the heart of Broadway.
            </p>
            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-honky-border-subtle transition-colors hover:bg-white/10"
                >
                  <Icon className="h-4 w-4 text-honky-text-gray" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore column */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-white uppercase">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                "Menu",
                "Live Music Calendar",
                "Private Events",
                "Shop Merch",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-honky-text-gray transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Us column */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-white uppercase">
              Visit Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-honky-text-gray" />
                <span className="text-sm text-honky-text-gray">
                  411 Broadway, Nashville TN 37203
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-honky-text-gray" />
                <span className="text-sm text-honky-text-gray">
                  (615) 555-0123
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-honky-text-gray" />
                <span className="text-sm text-honky-text-gray">
                  hello@friendsinlowplaces.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter & SMS signup */}
      <div className="relative z-10 border-t border-honky-border">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center">
          <form className="mx-auto flex max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-10 flex-1 rounded-lg border border-honky-border bg-white/5 px-4 text-sm text-white placeholder:text-honky-text-muted focus:border-honky-red focus:outline-none"
            />
            <Button className="h-10 rounded-lg bg-honky-red px-5 text-sm font-bold text-white hover:bg-honky-red/90">
              Subscribe
            </Button>
          </form>
          <p className="mt-4 text-sm font-bold text-white">
            Text <span className="text-honky-red">friends</span> to 44802 for news &amp; alerts
          </p>
          <p className="mt-1 text-xs text-honky-text-muted">
            Message and data rates may apply. Text STOP to unsubscribe. Messaging frequency varies.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-honky-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-xs text-honky-text-muted">
            &copy; 2026 Friends In Low Places. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-honky-text-muted transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-honky-text-muted transition-colors hover:text-white"
            >
              Terms of Service
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
        <Features />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
