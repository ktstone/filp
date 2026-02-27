"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

interface MenuItem {
  image: string;
  name: string;
  description: string;
  price: string;
}

interface MenuData {
  label: string;
  subtitle: string;
  heading: string;
  headingNeon: string;
  description: string;
  featuredImage: string;
  featuredTag: string;
  featuredName: string;
  featuredPrice: string;
  items: MenuItem[];
  menuLink: string;
}

const lunchDinnerMenu: MenuData = {
  label: "Lunch & Dinner",
  menuLink: "/menu/lunch-dinner",
  subtitle: "Southern Comfort",
  heading: "Food That Hits",
  headingNeon: "The Spot",
  description:
    "Inspired by Trisha's Southern Kitchen and her best-selling cookbooks, our menu features familiar favorites and new creations. Whether you're pulling up a chair or enjoying the vibrant energy of Friends In Low Places, our food is designed to make you feel at home.",
  featuredImage: "/images/menu/backyard_burger.jpg",
  featuredTag: "Crowd Favorite",
  featuredName: "Backyard Burger",
  featuredPrice: "",
  items: [
    {
      image: "/images/menu/wings.jpg",
      name: "Jack's Smoked BBQ Wings",
      description: "House-smoked; Trisha's dad's famous recipe.",
      price: "",
    },
    {
      image: "/images/menu/appetizers.jpg",
      name: "Loaded Nachos",
      description: "Queso, pico, pickled jalapeño, sour cream.",
      price: "",
    },
    {
      image: "/images/menu/fried_pickles.jpg",
      name: "Fried Pickles",
      description: "Hot and crispy bread-and-butter pickles, ranch.",
      price: "",
    },
  ],
};

const brunchMenu: MenuData = {
  label: "Weekend Brunch",
  menuLink: "/menu/brunch",
  subtitle: "Rise & Shine",
  heading: "Brunch Like",
  headingNeon: "A Local",
  description:
    "Mornings in Low Places, 10AM to 2PM. Giant cinnamon rolls, biscuit stacks, and all the comfort you need to start the weekend right.",
  featuredImage: "/images/menu/bacon_egg_cheese_biscuit.jpeg",
  featuredTag: "Brunch Favorite",
  featuredName: "Bacon, Egg & Cheese Biscuit",
  featuredPrice: "",
  items: [
    {
      image: "/images/menu/casserito.jpeg",
      name: "Hashbrown Casserito",
      description: "Cheesy hashbrown casserole, eggs, sausage, bacon.",
      price: "",
    },
    {
      image: "/images/menu/bacon_egg_cheese_biscuit.jpeg",
      name: "Bacon, Egg & Cheese Biscuit",
      description: "Buttermilk biscuit, egg, bacon, American cheese.",
      price: "",
    },
    {
      image: "/images/menu/stuffed_wontons.jpg",
      name: "Avocado Pesto Toast",
      description: "Buttery croissant, everything bagel spice.",
      price: "",
    },
  ],
};

const lateNightMenu: MenuData = {
  label: "Late Night",
  menuLink: "/menu/late-night",
  subtitle: "After Dark Eats",
  heading: "Midnight",
  headingNeon: "Munchies",
  description:
    "The kitchen stays hot until close. Load up on late-night favorites between sets. Perfect fuel for dancing until last call.",
  featuredImage: "/images/menu/backyard_burger.jpg",
  featuredTag: "Build Your Own",
  featuredName: "Backyard Burger",
  featuredPrice: "",
  items: [
    {
      image: "/images/menu/fried_pickles.jpg",
      name: "Fried Pickles",
      description: "Bread-and-butter pickles, served with ranch.",
      price: "",
    },
    {
      image: "/images/menu/queso.jpg",
      name: "F-U-C Queso",
      description: "Green chili queso with serrano and jalapeño.",
      price: "",
    },
    {
      image: "/images/menu/chicken_tenders.jpg",
      name: "Chicken Tenders",
      description: "Hand-breaded and crispy. Buffalo sauce available.",
      price: "",
    },
  ],
};

function getActiveMenu(): MenuData {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = now.getHours();
  const isWeekend = day === 0 || day === 6;

  // Weekend mornings until 2PM → brunch
  if (isWeekend && hour >= 10 && hour < 14) {
    return brunchMenu;
  }

  // After 8PM → late night
  if (hour >= 20) {
    return lateNightMenu;
  }

  // Before 3AM (still "late night" from previous evening)
  if (hour < 3) {
    return lateNightMenu;
  }

  // Default → lunch/dinner
  return lunchDinnerMenu;
}

export function FoodSection() {
  const [menu, setMenu] = useState<MenuData>(lunchDinnerMenu);
  const { ref, visible } = useReveal();

  useEffect(() => {
    setMenu(getActiveMenu());
    const interval = setInterval(() => setMenu(getActiveMenu()), 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0f0f0f] px-6 py-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-l from-honky-bg/50 via-transparent to-transparent" />

      <div
        ref={ref}
        className={`relative mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-11 transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Left: Featured image */}
        <div className="flex w-full shrink-0 items-center justify-center lg:w-[592px]">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border-4 border-white/5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
              <div className="relative h-[400px] w-full sm:h-[500px] sm:w-[584px]">
                <Image
                  src={menu.featuredImage}
                  alt={menu.featuredName}
                  fill
                  sizes="(max-width: 640px) 100vw, 584px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Overlay card */}
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-[rgba(10,10,10,0.9)] px-6 py-5 backdrop-blur-md">
              <p className="text-xs font-bold tracking-wider text-honky-teal uppercase">
                {menu.featuredTag}
              </p>
              <h4 className="mt-1 font-heading text-2xl font-bold text-white">
                {menu.featuredName}
              </h4>
              {menu.featuredPrice && (
                <p className="mt-1 font-heading text-lg font-bold text-honky-red">
                  {menu.featuredPrice}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right: Menu preview */}
        <div className="flex w-full flex-col gap-8 lg:w-[592px]">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold tracking-[1.4px] text-honky-teal uppercase">
              {menu.subtitle}
            </span>
            <h2 className="font-heading text-5xl font-black leading-[1] text-white uppercase">
              {menu.heading}
              <br />
              <span className="neon-text font-heading" data-neon={menu.headingNeon}>{menu.headingNeon}</span>
            </h2>
            <p className="mt-4 text-lg leading-7 text-[#9ca3af]">
              {menu.description}
            </p>
          </div>

          {/* Menu badge */}
          <div className="inline-flex self-start items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-honky-teal" />
            <span className="text-xs font-semibold tracking-wider text-honky-teal uppercase">
              Serving {menu.label} Now
            </span>
          </div>

          {/* Menu items */}
          <div className="flex flex-col gap-4">
            {menu.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-2xl border border-honky-border-subtle bg-honky-bg p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-white">
                      {item.name}
                    </h4>
                    <p className="text-sm text-[#6b7280]">
                      {item.description}
                    </p>
                  </div>
                </div>
                {item.price && (
                  <span className="font-heading text-lg font-bold text-white">
                    {item.price}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* View Full Menu link */}
          <a
            href={menu.menuLink}
            className="mt-2 flex items-center gap-2 text-base font-bold tracking-wider text-honky-red uppercase transition-colors hover:text-honky-red/80"
          >
            View Full Menu
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
