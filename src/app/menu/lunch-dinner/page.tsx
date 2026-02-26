import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MenuPage, type MenuPageData } from "@/components/menu-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lunch & Dinner Menu | Friends In Low Places",
  description:
    "Signature cocktails, cold draft beers, and Southern comfort food. View the full lunch and dinner menu at Nashville's premier honky tonk.",
};

const menuData: MenuPageData = {
  title: "LUNCH & DINNER",
  subtitle: "Taste the Honky Tonk Spirit",
  menuType: "lunch-dinner",
  sections: [
    {
      id: "cocktails",
      icon: "Wine",
      label: "Cocktails",
      subtitle: "Handcrafted",
      heading: "Signature Cocktails",
      note: "Served all night long",
      featured: {
        name: "Neon Moon Margarita",
        price: "$14",
        description:
          "A smoky twist on the classic margarita with mezcal, fresh lime, agave nectar, and a smoked salt rim. Garnished with a charred lime wheel.",
        image: "/images/menu-margarita.jpg",
        badge: "Fan Favorite",
        tags: ["Smoky", "Fresh"],
      },
      regularItems: [
        {
          name: "The Thunder Rolls",
          price: "$16",
          description:
            "Bourbon, blackberry liqueur, fresh lemon, and a splash of ginger beer. Served over a single large ice cube.",
        },
        {
          name: "Rodeo Sweet Tea",
          price: "$12",
          description:
            "Deep Eddy sweet tea vodka, fresh peach puree, lemon, and a dash of honey. A Nashville summer staple.",
          tags: ["Refreshing"],
        },
        {
          name: "Two Pina Coladas",
          price: "$13",
          description:
            "Coconut rum, fresh pineapple, and cream of coconut blended to frozen perfection. Topped with a cherry.",
        },
      ],
    },
    {
      id: "beers",
      icon: "Beer",
      label: "Draft Beers",
      subtitle: "Cold & Crisp",
      heading: "Draft Beers",
      listItems: [
        {
          name: "Honky Tonk Lager",
          subtitle: "Local Brew \u2022 4.5% ABV",
          price: "$7",
        },
        {
          name: "Lone Star Light",
          subtitle: "Domestic \u2022 4.2% ABV",
          price: "$5",
        },
        {
          name: "Shiner Bock",
          subtitle: "Texas Favorite \u2022 4.4% ABV",
          price: "$6",
        },
        {
          name: "Voodoo Ranger IPA",
          subtitle: "Craft \u2022 7.0% ABV",
          price: "$8",
        },
        {
          name: "Coors Banquet",
          subtitle: "Domestic \u2022 5.0% ABV",
          price: "$5",
        },
        {
          name: "Pitcher of Choice",
          subtitle: "Any Domestic Draft",
          price: "$18",
          badge: "BEST VALUE",
        },
      ],
    },
    {
      id: "food",
      icon: "UtensilsCrossed",
      label: "Comfort Food",
      subtitle: "Hearty Eats",
      heading: "Southern Comfort Food",
      imageCards: [
        {
          name: "Nashville Hot Sliders",
          price: "$15",
          description:
            "Three crispy chicken sliders tossed in our house hot sauce, topped with pickles and slaw on brioche buns.",
          image: "/images/menu-sliders.jpg",
          badge: "Spicy",
        },
        {
          name: "Brisket Nachos",
          price: "$18",
          description:
            "Slow-smoked brisket piled high on tortilla chips with queso, jalape\u00f1os, pico de gallo, and sour cream.",
          image: "/images/menu-nachos.jpg",
        },
      ],
      stackedCards: [
        {
          items: [
            {
              name: "Fried Pickles",
              price: "$9",
              description:
                "Hand-breaded dill pickle chips served with our tangy ranch dipping sauce.",
            },
            {
              name: "Loaded Fries",
              price: "$11",
              description:
                "Crispy fries topped with bacon, cheddar cheese, scallions, and sour cream.",
            },
          ],
        },
      ],
    },
  ],
};

export default function LunchDinnerPage() {
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
