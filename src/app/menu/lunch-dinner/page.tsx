import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MenuPage, type MenuPageData } from "@/components/menu-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lunch & Dinner Menu | Friends In Low Places",
  description:
    "Inspired by Trisha's Southern Kitchen — familiar favorites and new creations at Nashville's premier honky tonk. View the full lunch and dinner menu.",
};

const menuData: MenuPageData = {
  title: "LUNCH & DINNER",
  subtitle: "Taste the Honky Tonk Spirit",
  menuType: "lunch-dinner",
  sections: [
    {
      id: "appetizers",
      icon: "Flame",
      label: "To Start",
      subtitle: "Appetizers",
      heading: "To Start",
      imageCards: [
        {
          name: "Jack's Smoked BBQ Chicken Wings",
          price: "",
          description:
            "House-smoked; Trisha's dad's famous recipe.",
          image: "/images/menu/wings.jpg",
          badge: "Famous Recipe",
        },
        {
          name: "Collard Green Stuffed Wontons",
          price: "",
          description:
            "Collard greens and cream cheese, served with Tennessee hot honey pimento sauce.",
          image: "/images/menu/stuffed_wontons.jpg",
        },
        {
          name: "Fried Pickles",
          price: "",
          description:
            "Hot and crispy bread-and-butter pickles served with ranch.",
          image: "/images/menu/fried_pickles.jpg",
        },
      ],
      stackedCards: [
        {
          items: [
            {
              name: "Buffalo Chicken Dip",
              price: "",
              description:
                "Served with chips, carrots, and celery.",
            },
            {
              name: "Cheese Fries",
              price: "",
              description:
                "Crispy fries seasoned with Trixie Dust and covered with cheese sauce. Add Smoky Chorizo Chili.",
            },
          ],
        },
        {
          items: [
            {
              name: "Loaded Nachos",
              price: "",
              description:
                "Tortilla chips, queso, pico, pickled jalapeño, sour cream, green onion. Add chili or grilled chicken.",
            },
            {
              name: "Georgia Meat & Cheese",
              price: "",
              description:
                "Smoked sausage, cheddar cheese, pickles, butter-baked crackers.",
            },
          ],
        },
        {
          items: [
            {
              name: "F-U-C Queso",
              price: "",
              description:
                "Green chili queso with serrano and jalapeño, served with chips.",
            },
            {
              name: "Chicken Tenders",
              price: "",
              description:
                "Hand-breaded, crispy chicken tenders. Also available tossed in buffalo sauce. Make it a Tower of Tenders.",
            },
          ],
        },
      ],
    },
    {
      id: "soup-salad",
      icon: "GlassWater",
      label: "Soup & Salad",
      subtitle: "Fresh & Hearty",
      heading: "Soup & Salad",
      imageCards: [
        {
          name: "Cobb Salad",
          price: "",
          description:
            "Romaine, grilled chicken, tomato, bacon, hard-boiled eggs, avocado, chives, blue cheese crumbles.",
          image: "/images/menu/cobb_salad.jpg",
        },
      ],
      regularItems: [
        {
          name: "Smoky Chorizo Chili",
          price: "",
          description:
            "Topped with cheddar cheese and sour cream.",
        },
        {
          name: "Big Green Salad",
          price: "",
          description:
            "Chopped romaine, tomatoes, cucumbers, dressing of choice. Add grilled chicken, chicken tenders, or a scoop of chicken salad.",
        },
        {
          name: "Steak Salad",
          price: "",
          description:
            "Tender steak, romaine, cherry tomatoes, crispy onions, blue cheese, red wine vinaigrette.",
        },
        {
          name: "Wedge Salad",
          price: "",
          description:
            "Iceberg wedge, bacon, cherry tomatoes, green onion, Thousand Island dressing.",
        },
      ],
    },
    {
      id: "sandwiches",
      icon: "UtensilsCrossed",
      label: "Things on Bread",
      subtitle: "Sandwiches, Burgers & Wraps",
      heading: "Things on Bread",
      note: "All served with regular fries, steak fries, or both (dusted with Trixie Dust). Substitute \u201cmeatless\u201d chicken on any burger or wrap.",
      imageCards: [
        {
          name: "Backyard Burger",
          price: "",
          description:
            "1, 2, or 3 smashed beef patties, American cheese, lettuce, tomato, pickle, onion, TY's sauce.",
          image: "/images/menu/backyard_burger.jpg",
          badge: "Build Your Own",
        },
        {
          name: "Fried Catfish Sandwich",
          price: "",
          description:
            "Cornmeal-dusted catfish, slaw, pickles, spicy remoulade, Martin's potato roll.",
          image: "/images/menu/catfish_sandwich.jpg",
        },
        {
          name: "Chicken Tenders",
          price: "",
          description:
            "Hand-breaded, crispy chicken tenders. Also available tossed in buffalo sauce. Make it a Tower of Tenders.",
          image: "/images/menu/chicken_tenders.jpg",
        },
      ],
      stackedCards: [
        {
          items: [
            {
              name: "Big Bacon Cheeseburger",
              price: "",
              description:
                "6 oz ground beef, smoked bacon, double cheddar, TY's sauce, seeded Martin's bun.",
            },
            {
              name: "Turkey BLAT",
              price: "",
              description:
                "Candied bacon, lettuce, tomato, avocado mayo, house-smoked turkey, buttery croissant.",
            },
          ],
        },
        {
          items: [
            {
              name: "Smoked Pulled Pork Sandwich",
              price: "",
              description:
                "Hickory-smoked pork, peach BBQ sauce, cole slaw.",
            },
            {
              name: "Chicken Salad Sandwich",
              price: "",
              description:
                "Chicken salad with sweet relish, hard-boiled eggs, dried cranberries, cinnamon swirl bread.",
            },
          ],
        },
        {
          items: [
            {
              name: "BLT on Texas Toast",
              price: "",
              description:
                "Thick-cut bacon, tomato, leaf lettuce, Trixie Dust mayo. Make it \u201cBig Time\u201d \u2014 add a 6 oz cheeseburger patty.",
            },
            {
              name: "Fried Chicken Caesar Wrap",
              price: "",
              description:
                "Chicken tenders, romaine, Caesar dressing, croutons, tomato, parmesan. Also available with grilled chicken.",
            },
          ],
        },
        {
          items: [
            {
              name: "Buffalo Chicken Tender Wrap",
              price: "",
              description:
                "Buffalo chicken tenders, romaine, pickles, ranch, blue cheese dipping sauce.",
            },
          ],
        },
      ],
    },
    {
      id: "dessert",
      icon: "Cookie",
      label: "Dessert",
      subtitle: "Sweet Finish",
      heading: "Dessert",
      imageCards: [
        {
          name: "Caramel-Bottom Apple Pie",
          price: "",
          description: "Served with vanilla ice cream.",
          image: "/images/menu/apple_pie.jpg",
        },
        {
          name: "Gooey Chocolate Chip Cookies",
          price: "",
          description: "Fresh baked.",
          image: "/images/menu/cookies.jpg",
        },
      ],
      listItems: [
        {
          name: "G&T's Wedding Cake",
          subtitle: "House Specialty",
          price: "",
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
