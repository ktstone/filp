import Image from "next/image";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

/* Simple X/Twitter icon — Lucide doesn't include the current X logo */
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#2a1d1e] bg-[#0f0a0a] px-6 pt-16 pb-8">
      <div className="mx-auto max-w-[1400px]">
        {/* Main footer columns */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand — logo + socials only */}
          <div className="flex flex-col gap-6">
            <Image
              src="/images/logo-circle.png"
              alt="Friends In Low Places"
              width={64}
              height={64}
              className="shrink-0"
            />
            <div className="flex gap-3">
              <a
                href="https://instagram.com/FriendsBarNash/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#392829] bg-[#1e1414] text-[#9ca3af] transition-colors hover:border-white/30 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://www.facebook.com/FriendsBarNash/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#392829] bg-[#1e1414] text-[#9ca3af] transition-colors hover:border-white/30 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://twitter.com/FriendsBarNash/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#392829] bg-[#1e1414] text-[#9ca3af] transition-colors hover:border-white/30 hover:text-white"
                aria-label="X (Twitter)"
              >
                <XIcon className="h-[16px] w-[16px]" />
              </a>
            </div>
          </div>

          {/* Explore — 2-col on desktop */}
          <div>
            <h4 className="mb-6 text-sm font-thin tracking-[0.7px] text-white uppercase">
              Explore
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {[
                { label: "Live Music", href: "/events" },
                { label: "Food", href: "/menu/lunch-dinner" },
                { label: "Private Events", href: "/private-events" },
                { label: "VIP Packages", href: "/vip-packages" },
                { label: "VIP Reservations", href: "/vip-reservations" },
                { label: "FAQ", href: "/faq" },
                { label: "Careers", href: "/careers" },
                { label: "Gift Cards", href: "https://friendsbarnashville.cardfoundry.com", external: true },
                { label: "Shop", href: "https://shop.friendsbarnashville.com/", external: true },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...("external" in link && link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-center gap-2 text-sm font-thin text-[#6b7280] transition-colors hover:text-white"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-honky-red/50" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="mb-6 text-sm font-thin tracking-[0.7px] text-white uppercase">
              Visit Us
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-honky-red/60" />
                <div className="text-base font-thin leading-6 text-[#6b7280]">
                  <p>411 Broadway</p>
                  <p>Nashville, TN 37203</p>
                </div>
              </div>
              <a
                href="tel:+16155499297"
                className="flex items-center gap-3 text-base font-thin text-[#6b7280] transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-honky-red/60" />
                (615) 549-9297
              </a>
              <a
                href="mailto:info@friendsbarnashville.com"
                className="flex items-center gap-3 text-base font-thin text-[#6b7280] transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-honky-red/60" />
                info@friendsbarnashville.com
              </a>
            </div>
          </div>

          {/* Find Us — Map */}
          <div>
            <h4 className="mb-4 text-sm font-thin tracking-[0.7px] text-white uppercase">
              Find Us
            </h4>
            <div className="relative h-40 overflow-hidden rounded-3xl border border-[#392829]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3221.246084708189!2d-86.7800974!3d36.1605659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646772e1037f27%3A0x92455bd05c9e7a5b!2sFriends%20in%20Low%20Places%20Bar%20%26%20Honky-Tonk!5e0!3m2!1sen!2sus!4v1772153086470!5m2!1sen!2sus"
                className="h-full w-full grayscale invert-[0.85] hue-rotate-[200deg] contrast-[0.9] brightness-[0.7]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Friends In Low Places location map"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#2a1d1e] pt-8 sm:flex-row">
          <p className="text-sm font-thin text-[#4b5563]">
            &copy; 2026 Friends In Low Places. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy-policy"
              className="text-sm font-thin text-[#4b5563] transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-sm font-thin text-[#4b5563] transition-colors hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
