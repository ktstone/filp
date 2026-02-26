import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

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
              alt="FILP logo"
              width={64}
              height={64}
              className="shrink-0"
            />
            <div className="flex gap-4">
              <a
                href="https://instagram.com/FriendsBarNash/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#392829] bg-[#1e1414] text-xs font-thin text-[#9ca3af] transition-colors hover:border-white/30 hover:text-white"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="https://www.facebook.com/FriendsBarNash/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#392829] bg-[#1e1414] text-xs font-thin text-[#9ca3af] transition-colors hover:border-white/30 hover:text-white"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href="https://twitter.com/FriendsBarNash/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#392829] bg-[#1e1414] text-xs font-thin text-[#9ca3af] transition-colors hover:border-white/30 hover:text-white"
                aria-label="X (Twitter)"
              >
                X
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-6 text-sm font-thin tracking-[0.7px] text-white uppercase">
              Explore
            </h4>
            <div className="flex flex-col gap-4">
              {[
                { label: "Live Music Schedule", href: "/events" },
                { label: "Food & Drink Menu", href: "/menu/lunch-dinner" },
                { label: "Private Events", href: "/private-events" },
                { label: "VIP Packages", href: "/vip-packages" },
                { label: "Careers", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-base font-thin text-[#6b7280] transition-colors hover:text-white"
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
                href="mailto:events@friendsbarnashville.com"
                className="flex items-center gap-3 text-base font-thin text-[#6b7280] transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-honky-red/60" />
                events@friendsbarnashville.com
              </a>
            </div>
          </div>

          {/* Find Us — Map */}
          <div>
            <h4 className="mb-4 text-sm font-thin tracking-[0.7px] text-white uppercase">
              Find Us
            </h4>
            <a
              href="https://maps.app.goo.gl/fQPJebyiUe6TtGD46"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-40 overflow-hidden rounded-3xl border border-[#392829]"
            >
              <Image
                src="/images/footer-map.png"
                alt="Map showing Friends In Low Places location"
                fill
                className="object-cover opacity-60 transition-opacity group-hover:opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="h-7 w-5 text-honky-red drop-shadow-lg" />
              </div>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#2a1d1e] pt-8 sm:flex-row">
          <p className="text-sm font-thin text-[#4b5563]">
            &copy; 2026 Friends In Low Places. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm font-thin text-[#4b5563] transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
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
