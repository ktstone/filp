"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import {
  Wine,
  Beer,
  UtensilsCrossed,
  Flame,
  Cookie,
  Coffee,
  Sparkles,
  Star,
  Clock,
  GlassWater,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface MenuItemBase {
  name: string;
  price: string;
  description: string;
}

export interface FeaturedItem extends MenuItemBase {
  image: string;
  badge?: string;
  tags?: string[];
}

export interface RegularItem extends MenuItemBase {
  badge?: string;
  tags?: string[];
}

export interface ListItem {
  name: string;
  subtitle: string;
  price: string;
  badge?: string;
}

export interface ImageCard extends MenuItemBase {
  image: string;
  badge?: string;
}

export interface StackedCard {
  items: MenuItemBase[];
}

export interface MenuSection {
  id: string;
  icon: string;
  label: string;
  subtitle: string;
  heading: string;
  note?: string;
  featured?: FeaturedItem;
  regularItems?: RegularItem[];
  listItems?: ListItem[];
  imageCards?: ImageCard[];
  stackedCards?: StackedCard[];
}

export interface MenuPageData {
  title: string;
  subtitle: string;
  menuType: "lunch-dinner" | "brunch" | "late-night";
  sections: MenuSection[];
}

/* -------------------------------------------------------------------------- */
/*  Icon map                                                                   */
/* -------------------------------------------------------------------------- */

const iconMap: Record<string, LucideIcon> = {
  Wine,
  Beer,
  UtensilsCrossed,
  Flame,
  Cookie,
  Coffee,
  Sparkles,
  Clock,
  GlassWater,
};

function getIcon(name: string): LucideIcon {
  return iconMap[name] || Wine;
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */

function MenuHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative flex h-[400px] items-end justify-center overflow-hidden px-4 pb-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/menu-hero.jpg"
          alt="Bar interior with warm lighting"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181111] via-[rgba(24,17,17,0.6)] to-[rgba(24,17,17,0.3)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-honky-red/30 bg-white/5 px-4 py-2 backdrop-blur-sm opacity-0 animate-[fadeInUp_0.6s_ease_forwards]">
          <Sparkles className="h-3.5 w-3.5 text-white" />
          <span className="text-xs font-semibold tracking-[1.2px] text-white uppercase">
            Est. 2023
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-heading text-6xl leading-[0.9] font-black uppercase text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)] md:text-[96px] opacity-0 animate-[fadeInUp_0.6s_ease_0.1s_forwards]">
          {title.split(" ").length > 1 ? (
            <>
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="neon-text font-heading" data-neon={title.split(" ").at(-1)}>
                {title.split(" ").at(-1)}
              </span>
            </>
          ) : (
            <span className="neon-text font-heading" data-neon={title}>
              {title}
            </span>
          )}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg font-light text-white/70 opacity-0 animate-[fadeInUp_0.6s_ease_0.2s_forwards]">{subtitle}</p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Menu Type Switcher                                                         */
/* -------------------------------------------------------------------------- */

const menuTypes = [
  { key: "lunch-dinner", label: "Lunch & Dinner", href: "/menu/lunch-dinner" },
  { key: "brunch", label: "Brunch", href: "/menu/brunch" },
  { key: "late-night", label: "Late Night", href: "/menu/late-night" },
] as const;

function MenuTypeSwitcher({ active }: { active: string }) {
  return (
    <div className="border-b border-[#392829] bg-[#181111]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-center px-6">
        <div className="flex gap-1 overflow-x-auto py-3">
          {menuTypes.map(({ key, label, href }) => {
            const isActive = active === key;
            return (
              <a
                key={key}
                href={href}
                className={`shrink-0 rounded-lg px-5 py-2.5 text-sm font-semibold tracking-wider uppercase transition-all ${
                  isActive
                    ? "bg-honky-red text-white shadow-[0_0_15px_rgba(239,72,80,0.3)]"
                    : "text-white/40 hover:bg-white/5 hover:text-white/70"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sticky Category Navigation                                                 */
/* -------------------------------------------------------------------------- */

function CategoryNav({ sections, activeId }: { sections: MenuSection[]; activeId: string }) {
  return (
    <div className="sticky top-[69px] z-40 border-b border-[#392829] bg-[rgba(24,17,17,0.95)] backdrop-blur-[6px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <nav className="flex items-center justify-center gap-1 overflow-x-auto py-0">
          {sections.map((section) => {
            const Icon = getIcon(section.icon);
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`flex shrink-0 items-center gap-2 px-5 py-4 text-sm font-medium tracking-wider uppercase transition-colors ${
                  isActive
                    ? "border-b-[3px] border-honky-red text-white"
                    : "border-b-[3px] border-transparent text-[#9ca3af] hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{section.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section Header                                                             */
/* -------------------------------------------------------------------------- */

function SectionHeader({
  subtitle,
  heading,
  note,
}: {
  subtitle: string;
  heading: string;
  note?: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-2 border-b border-[#392829] pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="font-heading text-[14px] font-bold tracking-[2.8px] text-honky-teal uppercase">
          {subtitle}
        </p>
        <h2 className="mt-1 font-heading text-4xl font-black uppercase text-white">{heading}</h2>
      </div>
      {note && <p className="text-sm text-[#9ca3af]">{note}</p>}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card: Featured Item (full width, horizontal)                               */
/* -------------------------------------------------------------------------- */

function FeaturedCard({ item }: { item: FeaturedItem }) {
  return (
    <div className="mb-8 flex flex-col overflow-hidden rounded-2xl border border-[#392829] bg-[#271c1c] md:flex-row">
      {/* Image */}
      <div className="relative h-64 w-full shrink-0 md:h-auto md:w-[40%]">
        <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
        {item.badge && (
          <span className="absolute top-4 left-4 rounded-full bg-honky-teal/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {item.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-2xl font-bold text-white">{item.name}</h3>
          <span className="shrink-0 font-heading text-xl font-bold text-honky-red">
            {item.price}
          </span>
        </div>
        <p className="mt-3 text-sm font-light leading-relaxed text-[#9ca3af]">
          {item.description}
        </p>
        {item.tags && item.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full border border-[#392829] px-3 py-1 text-xs text-[#9ca3af]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card: Regular (text only, 2-col grid)                                      */
/* -------------------------------------------------------------------------- */

function RegularCard({ item }: { item: RegularItem }) {
  return (
    <div className="rounded-xl border border-[#392829] bg-[#271c1c] p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading text-xl font-bold text-white">{item.name}</h3>
        <span className="shrink-0 font-heading text-lg font-bold text-honky-red">
          {item.price}
        </span>
      </div>
      <p className="mt-2 text-sm font-light leading-relaxed text-[#9ca3af]">{item.description}</p>
      {item.tags && item.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#392829] px-2.5 py-0.5 text-[11px] text-[#9ca3af]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card: Beer / Simple List                                                   */
/* -------------------------------------------------------------------------- */

function ListCard({ items }: { items: ListItem[] }) {
  return (
    <div className="rounded-2xl border border-[#392829] bg-[#271c1c] p-6">
      <div className="grid gap-0 sm:grid-cols-2 sm:gap-x-8">
        {items.map((item, i) => (
          <div
            key={item.name}
            className={`flex items-center gap-3 py-4 ${
              i < items.length - (items.length % 2 === 0 ? 2 : 1)
                ? "border-b border-[#392829]/60"
                : i === items.length - 2 && items.length % 2 === 0
                  ? "border-b border-[#392829]/60 sm:border-b-0"
                  : ""
            }`}
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-heading text-base font-bold text-white">{item.name}</h4>
                {item.badge && (
                  <span className="rounded bg-honky-red/20 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-honky-red uppercase">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-xs text-[#6b7280]">{item.subtitle}</p>
            </div>
            <span className="ml-2 border-b border-dashed border-[#392829] flex-1 min-w-[20px]" />
            <span className="shrink-0 font-heading text-base font-bold text-honky-red">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card: Food with Image (3-col grid)                                         */
/* -------------------------------------------------------------------------- */

function ImageCardComponent({ item }: { item: ImageCard }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#392829] bg-[#271c1c]">
      {/* Image */}
      <div className="relative h-48">
        <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
        {item.badge && (
          <span className="absolute top-3 right-3 rounded-full bg-honky-teal/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {item.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-xl font-bold text-white">{item.name}</h3>
          <span className="shrink-0 font-heading text-lg font-bold text-honky-red">
            {item.price}
          </span>
        </div>
        <p className="mt-2 text-sm font-light leading-relaxed text-[#9ca3af]">
          {item.description}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card: Stacked Text (2 items with divider)                                  */
/* -------------------------------------------------------------------------- */

function StackedTextCard({ card }: { card: StackedCard }) {
  return (
    <div className="rounded-2xl border border-[#392829] bg-[#271c1c] p-6">
      {card.items.map((item, i) => (
        <div
          key={item.name}
          className={i < card.items.length - 1 ? "mb-5 border-b border-[#392829] pb-5" : ""}
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-heading text-xl font-bold text-white">{item.name}</h3>
            <span className="shrink-0 font-heading text-lg font-bold text-honky-red">
              {item.price}
            </span>
          </div>
          <p className="mt-2 text-sm font-light leading-relaxed text-[#9ca3af]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Menu Section                                                               */
/* -------------------------------------------------------------------------- */

function MenuSectionBlock({ section }: { section: MenuSection }) {
  const { ref, visible } = useReveal();

  return (
    <section id={section.id} className="scroll-mt-[140px] py-12">
      <SectionHeader subtitle={section.subtitle} heading={section.heading} note={section.note} />

      <div
        ref={ref}
        className={`transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Featured item */}
        {section.featured && <FeaturedCard item={section.featured} />}

        {/* Regular items (2-col grid) */}
        {section.regularItems && section.regularItems.length > 0 && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {section.regularItems.map((item) => (
              <RegularCard key={item.name} item={item} />
            ))}
          </div>
        )}

        {/* List items (beer list style) */}
        {section.listItems && section.listItems.length > 0 && (
          <div className="mt-6">
            <ListCard items={section.listItems} />
          </div>
        )}

        {/* Image cards + stacked cards in a grid */}
        {((section.imageCards && section.imageCards.length > 0) ||
          (section.stackedCards && section.stackedCards.length > 0)) && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {section.imageCards?.map((item) => (
              <ImageCardComponent key={item.name} item={item} />
            ))}
            {section.stackedCards?.map((card, i) => (
              <StackedTextCard key={i} card={card} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CTA Banner                                                                 */
/* -------------------------------------------------------------------------- */

function CtaBanner() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#181111] px-6 py-24">
      {/* Subtle radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(239,70,79,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(94,196,182,0.04),transparent_50%)]" />

      <div
        ref={ref}
        className={`relative mx-auto flex max-w-[800px] flex-col items-center text-center transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Decorative line */}
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-honky-red/40" />
          <Star className="h-4 w-4 text-honky-red/50" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-honky-red/40" />
        </div>

        <h2 className="font-heading text-5xl font-black uppercase text-white">
          Coming with a{" "}
          <span className="neon-text font-heading" data-neon="Crowd?">Crowd?</span>
        </h2>
        <p className="mt-5 max-w-lg text-lg font-light leading-8 text-white/50">
          Book a VIP table for your group and skip the line. Dedicated servers, premium bottle
          service, and the best seats in the house.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            className="h-14 rounded-lg bg-honky-red px-8 text-base font-bold tracking-wider text-white uppercase shadow-[0_0_30px_rgba(239,72,80,0.25)] hover:bg-honky-red/90"
          >
            <a href="/vip-reservations">
              <Star className="h-4 w-4" />
              VIP Reservations
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-14 rounded-lg border-2 border-white/15 bg-white/5 px-8 text-base font-bold tracking-wider text-white uppercase backdrop-blur-sm hover:bg-white/10 hover:text-white"
          >
            <a href="/vip-packages">
              <Sparkles className="h-4 w-4" />
              VIP Packages
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main MenuPage Component                                                    */
/* -------------------------------------------------------------------------- */

export function MenuPage({ data }: { data: MenuPageData }) {
  const [activeSection, setActiveSection] = useState(data.sections[0]?.id ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Observe each section for scroll-based active nav highlighting
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-140px 0px -60% 0px", threshold: 0 }
    );

    data.sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [data.sections]);

  return (
    <div className="min-h-screen bg-[#181111]">
      <MenuHero title={data.title} subtitle={data.subtitle} />
      <MenuTypeSwitcher active={data.menuType} />
      <CategoryNav sections={data.sections} activeId={activeSection} />
      <div className="mx-auto max-w-[1280px] px-6">
        {data.sections.map((section) => (
          <MenuSectionBlock key={section.id} section={section} />
        ))}
      </div>
      <CtaBanner />
    </div>
  );
}
