import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MenuPage, type MenuPageData } from "@/components/menu-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Late Night Menu | Friends In Low Places",
  description:
    "Late night bites at Nashville's premier honky tonk. Burgers, chicken tenders, nachos, and more — kitchen open until close.",
};

const menuData: MenuPageData = {
  title: "LATE NIGHT",
  subtitle: "Fuel the Night",
  menuType: "late-night",
  sections: [
    {
      id: "late-starters",
      icon: "Flame",
      label: "To Start",
      subtitle: "Late Night Bites",
      heading: "To Start",
      note: "Kitchen open until close",
      imageCards: [
        {
          name: "Loaded Nachos",
          price: "",
          description:
            "Tortilla chips, queso, pickled jalapeño, sour cream, green onion. Add chili or grilled chicken.",
          image: "/images/menu-nachos.jpg",
        },
        {
          name: "Cheese Fries",
          price: "",
          description:
            "Fries seasoned with Trixie Dust, topped with cheese sauce.",
          image: "/images/menu-sliders.jpg",
        },
      ],
      stackedCards: [
        {
          items: [
            {
              name: "Fried Pickles",
              price: "",
              description:
                "Bread-and-butter pickles, served with ranch.",
            },
            {
              name: "F-U-C Queso",
              price: "",
              description:
                "Green chili queso with serrano and jalapeño, served with chips.",
            },
          ],
        },
      ],
    },
    {
      id: "late-sandwiches",
      icon: "UtensilsCrossed",
      label: "Things on Bread",
      subtitle: "Sandwiches & Wraps",
      heading: "Things on Bread",
      note: "All served with regular fries, steak fries, or both (Trixie Dust).",
      imageCards: [
        {
          name: "Backyard Burger",
          price: "",
          description:
            "1, 2, or 3 smashed beef patties, American cheese, lettuce, tomato, pickle, onion, TY's sauce.",
          image: "/images/menu-burger.jpg",
          badge: "Build Your Own",
        },
      ],
      stackedCards: [
        {
          items: [
            {
              name: "Buffalo Chicken Tender Wrap",
              price: "",
              description:
                "Buffalo chicken tenders, romaine, pickles, ranch, blue cheese dipping sauce.",
            },
            {
              name: "Chicken Tenders",
              price: "",
              description:
                "Hand-breaded and crispy. Also available tossed in buffalo sauce.",
            },
          ],
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
