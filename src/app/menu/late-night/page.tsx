import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MenuPage, type MenuPageData } from "@/components/menu-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Late Night Menu | Friends In Low Places",
  description:
    "Late night cocktails, munchies, and bucket deals. Kitchen open until close at Nashville's premier honky tonk.",
};

const menuData: MenuPageData = {
  title: "LATE NIGHT",
  subtitle: "Fuel the Night",
  menuType: "late-night",
  sections: [
    {
      id: "late-cocktails",
      icon: "Wine",
      label: "Cocktails",
      subtitle: "After Dark Sips",
      heading: "Late Night Cocktails",
      note: "Kitchen open until close",
      featured: {
        name: "Midnight Whiskey Sour",
        price: "$15",
        description:
          "A bold twist on the classic with Tennessee whiskey, fresh lemon, egg white foam, and a dash of Angostura bitters. Shaken and served up.",
        image: "/images/menu-burger.jpg",
        badge: "Late Night Hit",
        tags: ["Bold", "Classic"],
      },
      regularItems: [
        {
          name: "The Last Call",
          price: "$14",
          description:
            "Dark rum, espresso, Kahl\u00faa, and cream shaken over ice. The perfect nightcap to keep you going.",
        },
        {
          name: "Neon Limeade",
          price: "$11",
          description:
            "Tequila, fresh lime, blue cura\u00e7ao, and soda water. Bright, citrusy, and dangerously refreshing.",
        },
        {
          name: "Bourbon Peach Smash",
          price: "$13",
          description:
            "Muddled fresh peach, bourbon, lemon, and simple syrup served over crushed ice with a mint sprig.",
        },
      ],
    },
    {
      id: "munchies",
      icon: "Flame",
      label: "Munchies",
      subtitle: "Fuel for the Dance Floor",
      heading: "Munchies",
      imageCards: [
        {
          name: "Hot Chicken Basket",
          price: "$18",
          description:
            "Crispy Nashville hot chicken tenders with crinkle-cut fries, pickles, and our house ranch.",
          image: "/images/menu-chicken.jpg",
          badge: "Popular",
        },
        {
          name: "Loaded Totchos",
          price: "$13",
          description:
            "Crispy tater tots loaded with queso, bacon crumbles, jalape\u00f1os, sour cream, and scallions.",
          image: "/images/food-nachos.jpg",
        },
      ],
      stackedCards: [
        {
          items: [
            {
              name: "Corn Dog Bites",
              price: "$10",
              description:
                "Golden-fried mini corn dogs served with honey mustard and spicy ketchup.",
            },
            {
              name: "Buffalo Chicken Sliders",
              price: "$15",
              description:
                "Three crispy buffalo chicken sliders with blue cheese slaw and pickles on brioche buns.",
            },
          ],
        },
      ],
    },
    {
      id: "buckets",
      icon: "Beer",
      label: "Buckets & Pitchers",
      subtitle: "Share the Love",
      heading: "Buckets & Pitchers",
      listItems: [
        {
          name: "Domestic Bucket (5)",
          subtitle: "Bud, Bud Light, Coors, Miller",
          price: "$22",
        },
        {
          name: "Import Bucket (5)",
          subtitle: "Corona, Modelo, Heineken",
          price: "$28",
        },
        {
          name: "Margarita Pitcher",
          subtitle: "Serves 4-5 \u2022 Our House Recipe",
          price: "$35",
        },
        {
          name: "Beer & Shot Combo",
          subtitle: "Any Domestic + Well Shot",
          price: "$10",
        },
        {
          name: "Whiskey Flight",
          subtitle: "4 Tennessee Whiskeys",
          price: "$18",
        },
        {
          name: "Spiked Slushie Bucket",
          subtitle: "Frozen \u2022 Serves 3-4",
          price: "$25",
          badge: "PARTY STARTER",
        },
      ],
    },
  ],
};

export default function LateNightPage() {
  return (
    <>
      <Header />
      <main>
        <MenuPage data={menuData} />
      </main>
      <Footer />
    </>
  );
}
