/* -------------------------------------------------------------------------- */
/*  Shared venue data for Private Events                                       */
/* -------------------------------------------------------------------------- */

export type VenueLocation = "Honky Tonk" | "The Oasis" | "3rd Floor";

export type Venue = {
  slug: string;
  name: string;
  location: VenueLocation;
  capacity: number;
  description: string;
  image: string;
  /** Additional gallery images — will be populated per-space */
  gallery: string[];
  /** Floor plan image path */
  floorPlan?: string;
  gradient: string;
  accentColor: string;
  bookingUrl?: string;
};

export const DEFAULT_BOOKING_URL =
  "https://strategichospitality.tripleseat.com/party_request/34215";

export const venues: Venue[] = [
  {
    slug: "honky-tonk-full-buyout",
    name: "Honky Tonk - Full Buyout",
    location: "Honky Tonk",
    capacity: 1075,
    description:
      "Take advantage of the best Friends in Low Places has to offer with a full buyout of the Honky-Tonk. With over 30 televisions, floor-to-ceiling LED screens, and dynamic seating options, your guests will have the ultimate Broadway experience.",
    image: "/images/event-spaces/honky_tonk_full.jpg",
    gallery: [],
    gradient: "from-[#ef464f]/30 via-[#1a1a1a]/60 to-[#1a1a1a]",
    accentColor: "bg-honky-red/20 border-honky-red/30",
  },
  {
    slug: "oasis-full-buyout",
    name: "The Oasis - Full Buyout",
    location: "The Oasis",
    capacity: 700,
    description:
      "The Oasis features two full bars, an outdoor stage, ample built-in and soft seating, televisions and LED ticker tapes throughout, and dynamic seating options from barstools, high-top tables, soft seating, and custom banquettes.",
    image: "/images/event-spaces/oasis_full.jpg",
    gallery: [],
    gradient: "from-[#5ec4b6]/25 via-[#1a1a1a]/60 to-[#1a1a1a]",
    accentColor: "bg-honky-teal/20 border-honky-teal/30",
  },
  {
    slug: "honky-tonk-2nd-floor",
    name: "Honky Tonk - 2nd Floor",
    location: "Honky Tonk",
    capacity: 350,
    description:
      "A massive mezzanine lets your guests have the ultimate vantage point of the action on stage. Floor to ceiling, accordion-style windows open up completely onto Broadway. And two large bars allow for any type of beverage service.",
    image: "/images/event-spaces/honky-tonk-2nd-floor.jpg",
    gallery: [],
    gradient: "from-[#ef464f]/20 via-[#2c1a1a]/40 to-[#1a1a1a]",
    accentColor: "bg-honky-red/10 border-honky-red/20",
  },
  {
    slug: "oasis-broadway",
    name: "The Oasis - Broadway",
    location: "The Oasis",
    capacity: 200,
    description:
      "An indoor/outdoor bar centers the floor, various types of soft seating, tables, and custom furniture energize the design, and a drink rail expands the entire width of the roof so your guests can belly up to the views!",
    image: "/images/event-spaces/oasis-broadway.jpg",
    gallery: [],
    gradient: "from-[#5ec4b6]/20 via-[#1a2a28]/40 to-[#1a1a1a]",
    accentColor: "bg-honky-teal/10 border-honky-teal/20",
  },
  {
    slug: "honky-tonk-center-mezzanine",
    name: "Honky Tonk - Center Mezzanine",
    location: "Honky Tonk",
    capacity: 200,
    description:
      "This dedicated area allows your guests to get the best views of the stage, grab a drink at their own dedicated bar, and all while avoiding the crowds.",
    image: "/images/event-spaces/honky-tonk-center-mezzanine.jpg",
    gallery: [],
    gradient: "from-[#ef464f]/15 via-[#2c1a1a]/30 to-[#1a1a1a]",
    accentColor: "bg-honky-red/10 border-honky-red/20",
  },
  {
    slug: "3rd-floor-full-buyout",
    name: "3rd Floor - Full Buyout",
    location: "3rd Floor",
    capacity: 175,
    description:
      "Each of these three distinct spaces (Trisha\u2019s Studio Kitchen, The Monticello Room, and The Gwendolyn Room) are enhanced by furniture pieces hand-selected by Garth and Trisha, and a diverse selection of menus created by Trisha Yearwood to accommodate any occasion.",
    image: "/images/event-spaces/3rd-floor-full.jpg",
    gallery: [],
    gradient: "from-[#c9a84c]/20 via-[#2a2418]/40 to-[#1a1a1a]",
    accentColor: "bg-[#c9a84c]/10 border-[#c9a84c]/20",
  },
  {
    slug: "oasis-tiki-bar",
    name: "The Oasis - Tiki Bar",
    location: "The Oasis",
    capacity: 165,
    description:
      "A private Tiki Bar in the middle of the Neon Neighborhood! This area of our rooftop features a full stage, custom banquette seating, and a tropical themed bar and awning.",
    image: "/images/event-spaces/oasis-tiki-bar.jpg",
    gallery: [],
    gradient: "from-[#5ec4b6]/15 via-[#1a2a28]/30 to-[#1a1a1a]",
    accentColor: "bg-honky-teal/10 border-honky-teal/20",
  },
  {
    slug: "honky-tonk-broadway-mezzanine",
    name: "Honky Tonk - Broadway Mezzanine",
    location: "Honky Tonk",
    capacity: 150,
    description:
      "The Broadway Mezzanine lets your guests belly up to the mezzanine for the best views of the stage, all while having the best view of the Neon Neighborhood and your own dedicated bar.",
    image: "/images/event-spaces/honky-tonk-broadway-mezzanine.jpg",
    gallery: [],
    gradient: "from-[#ef464f]/15 via-[#2c1a1a]/30 to-[#1a1a1a]",
    accentColor: "bg-honky-red/10 border-honky-red/20",
  },
  {
    slug: "3rd-floor-monticello-room",
    name: "3rd Floor - The Monticello Room",
    location: "3rd Floor",
    capacity: 72,
    description:
      "The Monticello Room is a space that embodies elegance and comfort with its dark blue walls, atmospheric wallpaper, rustic wood tables, and cozy upholstered chairs set beneath soft, intimate lighting.",
    image: "/images/event-spaces/3rd-floor-monticello.jpg",
    gallery: [],
    gradient: "from-[#c9a84c]/15 via-[#2a2418]/30 to-[#1a1a1a]",
    accentColor: "bg-[#c9a84c]/10 border-[#c9a84c]/20",
  },
  {
    slug: "3rd-floor-trishas-studio-kitchen",
    name: "3rd Floor - Trisha\u2019s Studio Kitchen",
    location: "3rd Floor",
    capacity: 50,
    description:
      "Trisha\u2019s Studio Kitchen draws inspiration from the Concord House featured on the Emmy-award-winning Trisha\u2019s Southern Kitchen. Designed for versatility, the space is surrounded by seating that\u2019s both soft and flexible, suitable for up to 50 guests.",
    image: "/images/event-spaces/3rd-floor-trishas-kitchen.jpg",
    gallery: [],
    gradient: "from-[#c9a84c]/15 via-[#2a2418]/30 to-[#1a1a1a]",
    accentColor: "bg-[#c9a84c]/10 border-[#c9a84c]/20",
  },
  {
    slug: "oasis-semi-private",
    name: "The Oasis - Semi Private Areas",
    location: "The Oasis",
    capacity: 29,
    description:
      "Semi-Private areas within The Oasis allow guests to be a part of the action while having their own space for reprieve. With indoor and outdoor options, views of Broadway, and semi-private entrances, your guests will feel like the ultimate VIPs.",
    image: "/images/event-spaces/oasis-semi-private.jpg",
    gallery: [],
    gradient: "from-[#5ec4b6]/15 via-[#1a2a28]/30 to-[#1a1a1a]",
    accentColor: "bg-honky-teal/10 border-honky-teal/20",
  },
  {
    slug: "3rd-floor-gwendolyn-room",
    name: "3rd Floor - The Gwendolyn Room",
    location: "3rd Floor",
    capacity: 24,
    description:
      "Sitting adjacent to the Monticello Room, the Gwendolyn Room offers a touching tribute to Trisha Yearwood\u2019s mother, Gwen. The Gwendolyn Room is charmed with personal touches in her honor.",
    image: "/images/event-spaces/3rd-floor-gwendolyn.jpg",
    gallery: [],
    gradient: "from-[#c9a84c]/15 via-[#2a2418]/30 to-[#1a1a1a]",
    accentColor: "bg-[#c9a84c]/10 border-[#c9a84c]/20",
    bookingUrl: "https://portal.tripleseat.com/direct_bookings/gydmxh9vpa4",
  },
];

export function getVenueBySlug(slug: string): Venue | undefined {
  return venues.find((v) => v.slug === slug);
}

export function getLocationColor(location: VenueLocation): string {
  switch (location) {
    case "Honky Tonk":
      return "#ef464f";
    case "The Oasis":
      return "#5ec4b6";
    case "3rd Floor":
      return "#c9a84c";
  }
}
