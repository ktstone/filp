import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MenuPage, type MenuPageData } from "@/components/menu-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekend Brunch Menu | Friends In Low Places",
  description:
    "Mornings in Low Places — giant cinnamon rolls, biscuits, mimosa towers, and all the Southern brunch favorites. 10AM–2PM.",
};

const menuData: MenuPageData = {
  title: "BRUNCH",
  subtitle: "Mornings in Low Places",
  menuType: "brunch",
  sections: [
    {
      id: "brunch-items",
      icon: "UtensilsCrossed",
      label: "Brunch",
      subtitle: "10:00 AM – 2:00 PM",
      heading: "Brunch Items",
      imageCards: [
        {
          name: "Giant Cinnamon Roll",
          price: "",
          description:
            "Oversized, gooey cinnamon roll, ideal for sharing.",
          image: "/images/menu-chicken.jpg",
          badge: "Perfect for Sharing",
        },
        {
          name: "Hashbrown Casserito",
          price: "",
          description:
            "Cheesy hashbrown casserole wrapped in a tortilla with eggs, sausage, bacon. Seared with a cheese crust and served with hashbrown crowns.",
          image: "/images/menu-nachos.jpg",
        },
      ],
      stackedCards: [
        {
          items: [
            {
              name: "Avocado Pesto Toast",
              price: "",
              description:
                "Buttery croissant, everything bagel spice, sweet pimento chili.",
            },
            {
              name: "Bacon, Egg & Cheese Biscuit",
              price: "",
              description:
                "Buttermilk biscuit, egg, bacon, American cheese. Served with hashbrown crowns.",
            },
          ],
        },
        {
          items: [
            {
              name: "Chicken Biscuit",
              price: "",
              description:
                "Chicken tender on buttermilk biscuit, sweet heat pimento mayo. Served with hashbrown crowns.",
            },
          ],
        },
      ],
    },
    {
      id: "sides",
      icon: "Coffee",
      label: "Sides",
      subtitle: "A Little Extra",
      heading: "Sides",
      listItems: [
        {
          name: "Side of Hashbrown Casserole",
          subtitle: "Cheesy & Golden",
          price: "",
        },
        {
          name: "Side of Hashbrown Crowns",
          subtitle: "Crispy & Hot",
          price: "",
        },
      ],
    },
    {
      id: "boozy",
      icon: "Wine",
      label: "Make It Boozy",
      subtitle: "Hair of the Dog",
      heading: "Make It Boozy",
      listItems: [
        {
          name: "Mimosa",
          subtitle: "Classic Bubbly",
          price: "",
        },
        {
          name: "Ketel One Espresso Martini",
          subtitle: "Wake Up & Shake Up",
          price: "",
        },
        {
          name: "Mimosa Tower",
          subtitle: "Serves up to 8",
          price: "",
          badge: "PARTY STARTER",
        },
      ],
    },
  ],
};

export default function BrunchPage() {
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
