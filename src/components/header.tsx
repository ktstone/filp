"use client";

import Image from "next/image";
import { Menu, X, Calendar, Music, PartyPopper, UtensilsCrossed, Sparkles, Star, HelpCircle, Gift } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-honky-border bg-[rgba(26,26,26,0.8)] backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/images/logo-circle.png"
            alt="FILP logo"
            width={36}
            height={36}
            className="shrink-0"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wider text-white/80 uppercase transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button asChild className="h-10 rounded-lg bg-honky-red px-6 text-sm font-semibold tracking-wider text-white uppercase shadow-[0_0_15px_rgba(239,72,80,0.4)] hover:bg-honky-red/90">
            <a href="/vip-reservations">
              Reserve a Table
            </a>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-white"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              showCloseButton={false}
              className="border-white/10 bg-[#0f0f0f] p-0"
            >
              {/* Header */}
              <SheetHeader className="flex-row items-center justify-between border-b border-white/10 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-honky-red/20">
                    <Image
                      src="/images/logo-circle.png"
                      alt="FILP logo"
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

              {/* Nav links */}
              <nav className="flex flex-col px-4 py-4">
                {[...navLinks, ...mobileOnlyLinks].map((link) => {
                  const Icon = link.icon;
                  return (
                    <SheetClose key={link.label} asChild>
                      <a
                        href={link.href}
                        className="flex items-center gap-4 rounded-xl px-4 py-4 text-base font-medium tracking-wider text-white/80 uppercase transition-colors hover:bg-white/5 hover:text-white"
                      >
                        <Icon className="h-5 w-5 text-white/40" />
                        {link.label}
                      </a>
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

              {/* Footer CTA */}
              <SheetFooter className="border-t border-white/10 px-6 py-6">
                <SheetClose asChild>
                  <a href="/vip-reservations" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-honky-red py-6 text-base font-bold tracking-wider text-white uppercase shadow-[0_0_15px_rgba(239,72,80,0.4)] hover:bg-honky-red/90">
                    <Calendar className="h-5 w-5" />
                    Reserve a Table
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="/menu/lunch-dinner"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent py-6 text-base font-bold tracking-wider text-white uppercase hover:bg-white/5"
                  >
                    <UtensilsCrossed className="h-5 w-5" />
                    View Food Menu
                  </a>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
