// Centralized menu data - edit prices and items here
export const menuData = {
  // For Menu1.jsx detailed version
  mealBoxes: [
    {
      name: "Beef Bulgogi",
      price: "23.50",
      description: "Marinated beef, fire-charred and glazed in sweet soy",
      isRecommended: false,
      isSpicy: false
    },
    {
      name: "Pork Bulgogi",
      price: "21.50",
      description: "Spicy gochujang-marinated pork, charred and juicy",
      isRecommended: false,
      isSpicy: true
    },
    {
      name: "Sweet & Spicy Boneless Chicken Bites",
      price: "21.50",
      description: "Crispy Korean Fried Chicken tossed in sweet gochujang glaze",
      isRecommended: false,
      isSpicy: false,
      image: "/OLCHI-22.jpg"
    },
    {
      name: "Sweet & Spicy Crispy Tofu",
      price: "20.50",
      description: "Crispy tofu coated in sweet-spicy glaze",
      isRecommended: false,
      isSpicy: false,
      isVegetarian: true
    },
    {
      name: "Donkatsu",
      price: "22.50",
      description: "Crispy, golden panko-fried pork cutlet with house tonkatsu sauce",
      isRecommended: false,
      isSpicy: false,
      isVegetarian: false
    }
  ],

  appetizers: [
    {
      name: "Gunmandu",
      subtitle: "Pan-Fried Dumplings, Beef. 8 pcs",
      price: "8.50",
      description: "Crispy pan-fried dumplings stuffed with beef and vegetables",
      image: "/OLCHI-1.jpg"
    },
    {
      name: "Gunmandu (veg)",
      subtitle: "Pan-Fried Dumplings, Vegetable. 10 pcs",
      price: "8.50",
      description: "Crispy pan-fried dumplings stuffed with vegetables",
      isVegetarian: true
    },
    {
      name: "Haemul Pajeon",
      subtitle: "Seafood Pancake",
      price: "16.50",
      description:
        "Crispy seafood pancake with squid, clams, mussels, and shrimp",
      image: "/OLCHI-4.jpg"
    },
    {
      name: "Kimchi Pajeon",
      subtitle: "Kimchi Pancake",
      price: "16.50",
      description:
        "Crispy kimchi pancake."
    },
    {
      name: "Kimchi Fried Rice",
      price: "16.50",
      description: "Kimchi fried rice with spam. Add mozzarella cheese for $1.00"
    }
  ],

  // For Menu.jsx and Menu2.jsx simplified version
  specials: [
    { name: "Beef Bulgogi", price: "23.50", description: "Rice and side dishes", isRecommended: false },
    { name: "Spicy Pork Bulgogi", price: "21.50", description: "Rice and side dishes", isRecommended: false },
    { name: "Dakgangjeong", price: "21.50", description: "Rice and side dishes", isRecommended: false },
    { name: "Tofu Gangjeong", price: "20.50", description: "Rice and side dishes", isRecommended: false }
  ],

  kimbap: [
    {
      name: "Tuna Mayo Kimbap",
      price: "16.50",
      isRecommended: true,
      image: "/OLCHI-2.jpg"
    },
    {
      name: "Yubu Kimbap",
      subtitle: "Tofu Pocket Roll",
      description: "Vegetarian upon request",
      price: "15.50",
      isRecommended: false,
      isVegetarian: true
    },
  ],

  specialty: {
    name: "Budae Jjigae",
    subtitle: "Army Stew",
    price: "37.50",
    description:
      "Hearty, spicy Korean army stew—hotpot made to share with napa cabbage, onion, beans, spam, sausage, cheese, tofu, and ground beef. Add ramen noodles for +$2.50",
    isBest: true,
    isSpicy: true,
    image: "/OLCHI-33.jpg"
  },

  soondubu: {
    description: "Spicy soft tofu soup served with rice & side dishes. Zucchini, onion, and scallions in a rich, spicy broth",
    items: [
      { name: "Beef", price: "17.50" },
      { name: "Seafood", price: "18.50" },
      { name: "Combo", price: "18.50" },
    ],
    note: "*Raw egg available upon request",
    image: "/OLCHI-15.jpg"
  },

  // For Menu.jsx and Menu2.jsx
  budaeJjigae: {
    name: "Budae Jjigae ",
    price: "37.50",
    description: "For Two",
    addOn: "Add Ramyun +$2.50",
    isBest: true
  },

  soondubuSimple: [
    { name: "Beef Soondubu", price: "17.50" },
    {
      name: "Seafood Soondubu",
      price: "18.50"
    },
    {
      name: "Combo Soondubu",
      price: "18.50"
    }
  ],

  drinks: [
    { name: "Yuzu Sparkling Ade", price: "5.95" },
    { name: "Plum Sparkling Ade", price: "5.95" },
    { name: "Bling Booster Yogurt Sparkling", price: "3.00" },
    { name: "Soft Drinks / Water", price: "3.00" }
  ],

  // Additional info
  mealBoxesImage: "/OLCHI-20.jpg",
  mealBoxesNote:
    "Served with rice & side dishes • Ssam (assorted vegetables) set available for +$3.00",
  kimbapNote:
    "Rolled rice with vegetables & sesame oil • Contains pickled radish, burdock root, egg, cucumber, fish cake, carrot, sesame oil & sesame seeds",
  specialsNote:
    "Add 'ssam' (romaine, cucumber, carrot, ssamjang) +$3.00"
};
