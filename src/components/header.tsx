"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, Calendar, Music, PartyPopper, UtensilsCrossed, Sparkles, Star, HelpCircle, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Live Music", href: "/events", icon: Music },
  { label: "Food", href: "/menu/lunch-dinner", icon: UtensilsCrossed },
  { label: "Private Events", href: "/private-events", icon: PartyPopper },
  { label: "VIP Packages", href: "/vip-packages", icon: Sparkles },
  { label: "VIP Reservations", href: "/vip-reservations", icon: Star },
] as const;

const mobileOnlyLinks = [
  { label: "Gift Cards", href: "https://friendsbarnashville.cardfoundry.com", icon: Gift },
  { label: "FAQ", href: "/faq", icon: HelpCircle },
] as const;

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement bar */}
      <div className="bg-honky-red">
        <Link
          href="/private-events"
          className="group mx-auto flex max-w-[1280px] items-center justify-center gap-2 px-6 py-2 text-center text-xs font-semibold tracking-wider text-white uppercase sm:text-sm"
        >
          <span>Host Your Private Event at Friends!</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="border-b border-honky-border bg-honky-bg/80 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        {/* Left: hamburger */}
        <div className="flex w-[100px] justify-start">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="h-auto w-auto p-1 text-white hover:bg-white/10 hover:text-white"
                aria-label="Open menu"
              >
                <Menu className="!h-7 !w-7" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="left"
              showCloseButton={false}
              className="flex flex-col overflow-hidden border-white/10 bg-honky-bg-deep p-0"
            >
              {/* Header */}
              <SheetHeader className="shrink-0 flex-row items-center justify-between border-b border-white/10 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-honky-red/20">
                    <Image
                      src="/images/logo-circle.png"
                      alt="Friends In Low Places"
                      width={10}
                      height={15}
                      className="shrink-0"
                    />
                  </div>
                  <SheetTitle className="font-heading text-base font-black tracking-tight text-white uppercase">
                    FILP
                  </SheetTitle>
                </div>
                <SheetClose className="rounded-lg p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </SheetClose>
              </SheetHeader>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto">
                {/* Nav links */}
                <nav className="flex flex-col px-4 py-4">
                  {[...navLinks, ...mobileOnlyLinks].map((link) => {
                    const Icon = link.icon;
                    const isExternal = link.href.startsWith("http");
                    return (
                      <SheetClose key={link.label} asChild>
                        {isExternal ? (
                          <a
                            href={link.href}
                            className="flex items-center gap-4 rounded-xl px-4 py-4 text-base font-medium tracking-wider text-white/80 uppercase transition-colors hover:bg-white/5 hover:text-white"
                          >
                            <Icon className="h-5 w-5 text-white/40" />
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="flex items-center gap-4 rounded-xl px-4 py-4 text-base font-medium tracking-wider text-white/80 uppercase transition-colors hover:bg-white/5 hover:text-white"
                          >
                            <Icon className="h-5 w-5 text-white/40" />
                            {link.label}
                          </Link>
                        )}
                      </SheetClose>
                    );
                  })}
                </nav>

                {/* Divider */}
                <div className="mx-6 border-t border-white/10" />

                {/* Hours quick info */}
                <div className="px-8 py-6">
                  <p className="text-xs font-semibold tracking-wider text-honky-teal uppercase">
                    Open Now
                  </p>
                  <p className="mt-1 text-sm text-white/60">
                    Mon-Fri 11AM-2AM &middot; Sat-Sun 10AM-2AM
                  </p>
                  <p className="mt-1 text-sm text-white/60">
                    <a href="tel:+16155499297" className="transition-colors hover:text-white">
                      (615) 549-9297
                    </a>
                  </p>
                </div>
              </div>

              {/* Footer CTA */}
              <SheetFooter className="shrink-0 border-t border-white/10 px-6 py-6">
                <SheetClose asChild>
                  <Link href="/vip-reservations" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-honky-red py-6 text-base font-bold tracking-wider text-white uppercase shadow-[0_0_15px_rgba(239,72,80,0.4)] hover:bg-honky-red/90">
                    <Calendar className="h-5 w-5" />
                    Reserve a Table
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/menu/lunch-dinner"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent py-6 text-base font-bold tracking-wider text-white uppercase hover:bg-white/5"
                  >
                    <UtensilsCrossed className="h-5 w-5" />
                    View Food Menu
                  </Link>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {/* Center: logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/images/logo-circle.png"
            alt="Friends In Low Places - Home"
            width={44}
            height={44}
            className="shrink-0"
          />
        </Link>

        {/* Right: Reserve a Table */}
        <div className="flex w-[100px] justify-end">
          <Button asChild className="h-10 rounded-lg bg-honky-red px-4 text-xs font-semibold tracking-wider text-white uppercase shadow-[0_0_15px_rgba(239,72,80,0.4)] hover:bg-honky-red/90 sm:px-6 sm:text-sm">
            <Link href="/vip-reservations">
              Reserve
            </Link>
          </Button>
        </div>
      </div>
      </div>
    </header>
  );
}
