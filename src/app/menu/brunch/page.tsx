import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MenuPage, type MenuPageData } from "@/components/menu-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekend Brunch Menu | Friends In Low Places",
  description:
    "Boozy brunch cocktails, chicken and waffles, and all the Southern brunch favorites. Saturday and Sunday until 1PM.",
};

const menuData: MenuPageData = {
  title: "BRUNCH",
  subtitle: "Wake Up & Honky Tonk",
  menuType: "brunch",
  sections: [
    {
      id: "brunch-cocktails",
      icon: "Wine",
      label: "Cocktails",
      subtitle: "Hair of the Dog",
      heading: "Brunch Cocktails",
      note: "Sat & Sun until 1PM",
      featured: {
        name: "Boozy Brunch Punch",
        price: "$12",
        description:
          "A refreshing blend of champagne, vodka, passion fruit, orange juice, and a splash of grenadine. Served in a mason jar with fresh fruit.",
        image: "/images/menu-cocktail.jpg",
        badge: "Brunch Best Seller",
        tags: ["Fruity", "Bubbly"],
      },
      regularItems: [
        {
          name: "Nashville Mule",
          price: "$13",
          description:
            "Local whiskey, fresh ginger beer, lime, and a sprig of mint. Served in a copper mug.",
        },
        {
          name: "Peach Bellini",
          price: "$11",
          description:
            "Prosecco and fresh peach puree with a hint of vanilla. Light, bubbly, and dangerously easy to drink.",
        },
        {
          name: "Honey Bourbon Lemonade",
          price: "$14",
          description:
            "Small-batch bourbon, house-made honey syrup, fresh lemon, and a dash of bitters.",
        },
      ],
    },
    {
      id: "brunch-plates",
      icon: "UtensilsCrossed",
      label: "Brunch Plates",
      subtitle: "Rise & Shine",
      heading: "Brunch Plates",
      imageCards: [
        {
          name: "Chicken & Waffles",
          price: "$19",
          description:
            "Crispy buttermilk fried chicken atop a golden Belgian waffle, drizzled with bourbon maple syrup and a dusting of powdered sugar.",
          image: "/images/menu-chicken.jpg",
          badge: "Best Seller",
        },
        {
          name: "Biscuits & Gravy",
          price: "$14",
          description:
            "Two fluffy buttermilk biscuits smothered in house-made sausage gravy with cracked black pepper.",
          image: "/images/food-nachos.jpg",
        },
      ],
      stackedCards: [
        {
          items: [
            {
              name: "Hangover Burger",
              price: "$17",
              description:
                "Half-pound smash burger with bacon, fried egg, American cheese, and spicy mayo on a brioche bun.",
            },
            {
              name: "Avocado Toast",
              price: "$12",
              description:
                "Smashed avocado on sourdough with everything seasoning, cherry tomatoes, and a poached egg.",
            },
          ],
        },
      ],
    },
    {
      id: "sides",
      icon: "Coffee",
      label: "Sides & Extras",
      subtitle: "A Little More",
      heading: "Sides & Extras",
      listItems: [
        {
          name: "Fresh Fruit Cup",
          subtitle: "Seasonal Selection",
          price: "$6",
        },
        {
          name: "Bacon Strip (3)",
          subtitle: "Applewood Smoked",
          price: "$5",
        },
        {
          name: "Hash Browns",
          subtitle: "Crispy Golden",
          price: "$4",
        },
        {
          name: "Biscuit & Honey Butter",
          subtitle: "House Made",
          price: "$3",
        },
        {
          name: "Side of Grits",
          subtitle: "Creamy Stone-Ground",
          price: "$4",
        },
        {
          name: "Bottomless Coffee",
          subtitle: "Dark Roast",
          price: "$4",
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
