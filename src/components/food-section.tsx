"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
    "Nothing soaks up a night of fun like our southern-inspired kitchen. From spicy wings to slow-smoked brisket, we've got the fuel you need.",
  featuredImage: "/images/food-burger.jpg",
  featuredTag: "Crowd Favorite",
  featuredName: "The Low Places Burger",
  featuredPrice: "$16.50",
  items: [
    {
      image: "/images/food-wings.jpg",
      name: "Nashville Hot Wings",
      description: "Spicy cayenne glaze, pickles, ranch.",
      price: "$14",
    },
    {
      image: "/images/food-nachos.jpg",
      name: "Honky Tonk Nachos",
      description: "Brisket, queso, jalapeños, crema.",
      price: "$18",
    },
    {
      image: "/images/food-pickles.jpg",
      name: "Fried Pickles",
      description: "Golden brown chips, spicy remoulade.",
      price: "$9",
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
    "Saturdays and Sundays until 1PM. Hair-of-the-dog cocktails, biscuit stacks, and all the comfort you need to start the weekend right.",
  featuredImage: "/images/menu-chicken.jpg",
  featuredTag: "Brunch Best Seller",
  featuredName: "Chicken & Waffles",
  featuredPrice: "$19",
  items: [
    {
      image: "/images/food-nachos.jpg",
      name: "Biscuits & Gravy",
      description: "Buttermilk biscuits, sausage gravy, fried egg.",
      price: "$14",
    },
    {
      image: "/images/menu-cocktail.jpg",
      name: "Boozy Brunch Punch",
      description: "Champagne, OJ, peach schnapps, fresh fruit.",
      price: "$12",
    },
    {
      image: "/images/menu-burger.jpg",
      name: "Hangover Burger",
      description: "Smash patty, bacon, fried egg, pimento cheese.",
      price: "$17",
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
    "The kitchen stays hot until close. Load up on late-night favorites between sets — perfect fuel for dancing until last call.",
  featuredImage: "/images/menu-chicken.jpg",
  featuredTag: "Late Night Hit",
  featuredName: "Hot Chicken Basket",
  featuredPrice: "$18",
  items: [
    {
      image: "/images/food-nachos.jpg",
      name: "Loaded Totchos",
      description: "Tater tots, brisket chili, queso, sour cream.",
      price: "$13",
    },
    {
      image: "/images/food-pickles.jpg",
      name: "Corn Dog Bites",
      description: "Beer batter, honey mustard, comeback sauce.",
      price: "$10",
    },
    {
      image: "/images/food-wings.jpg",
      name: "Buffalo Chicken Sliders",
      description: "Fried chicken, blue cheese slaw, pickles.",
      price: "$15",
    },
  ],
};

function getActiveMenu(): MenuData {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = now.getHours();
  const isWeekend = day === 0 || day === 6;

  // Weekend mornings until 1PM → brunch
  if (isWeekend && hour < 13) {
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

  useEffect(() => {
    setMenu(getActiveMenu());
    const interval = setInterval(() => setMenu(getActiveMenu()), 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0f0f0f] px-6 py-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-l from-honky-bg/50 via-transparent to-transparent" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-11">
        {/* Left: Featured image */}
        <div className="flex w-full shrink-0 items-center justify-center lg:w-[592px]">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border-4 border-white/5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
              <div className="relative h-[400px] w-full sm:h-[500px] sm:w-[584px]">
                <Image
                  src={menu.featuredImage}
                  alt={menu.featuredName}
                  fill
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
              <p className="mt-1 font-heading text-lg font-bold text-honky-red">
                {menu.featuredPrice}
              </p>
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
                <span className="font-heading text-lg font-bold text-white">
                  {item.price}
                </span>
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
