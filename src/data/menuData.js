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
      isRecommended: true,
      isSpicy: true
    },
    {
      name: "Sweet & Spicy Boneless Chicken Bites",
      price: "21.50",
      description: "Crispy Korean Fried Chicken tossed in sweet gochujang glaze",
      isRecommended: false,
      isSpicy: false
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
      subtitle: "Pan-Fried Dumplings, Beef",
      price: "8.50",
      description: "Crispy pan-fried dumplings stuffed with beef"
    },
    {
      name: "Buchu Jeon",
      price: "15.50",
      description: "Crispy Korean Chives pancake",
      isVegetarian: true
    },
    {
      name: "Haemul Pajeon",
      subtitle: "Seafood Pancake",
      price: "16.50",
      description:
        "Crispy seafood pancake with squid, clams, mussels, and shrimp"
    }
  ],

  // For Menu.jsx and Menu2.jsx simplified version
  specials: [
    { name: "Beef Bulgogi", price: "23.50", description: "Rice + 3 sides", isRecommended: false },
    { name: "Spicy Pork Bulgogi", price: "21.50", description: "Rice + 3 sides", isRecommended: true },
    { name: "Dakgangjeong", price: "21.50", description: "Rice + 3 sides", isRecommended: false },
    { name: "Tofu Gangjeong", price: "20.50", description: "Rice + 3 sides", isRecommended: false }
  ],

  kimbap: [
    {
      name: "Yubu Kimbap",
      subtitle: "Tofu Pocket Roll",
      description: "Vegetarian upon request",
      price: "15.50",
      isRecommended: false,
      isVegetarian: true
    },
    {
      name: "Tuna Mayo Kimbap",
      price: "15.50",
      isRecommended: true
    }
  ],

  specialty: {
    name: "Budae Jjigae",
    subtitle: "Army Stew",
    price: "37.50",
    description:
      "Hearty, spicy Korean army stew—hotpot made to share with napa cabbage, onion, beans, spam, sausage, cheese, tofu, and ground beef",
    isBest: true,
    isSpicy: true
  },

  soondubu: {
    description: "Spicy soft tofu soup served with rice",
    items: [
      { name: "Beef", price: "17.50" },
      { name: "Seafood", price: "18.50" },
      { name: "Combo", price: "18.50" }
    ],
    ingredients: "zucchini, onion, and scallions in a rich spicy broth",
    note: "*Raw egg available upon request."
  },

  // For Menu.jsx and Menu2.jsx
  budaeJjigae: {
    name: "Budae Jjigae (2인)",
    price: "37.50",
    description: "For Two",
    addOn: "Add Ramyun +$2.50",
    isBest: true
  },

  soondubuSimple: [
    { name: "Beef Soondubu", price: "17.50" },
    {
      name: "Seafood, Combo Soondubu",
      price: "18.50",
      description: "Spicy soft tofu stew + rice"
    }
  ],

  drinks: [
    { name: "Yuzu Sparkling Ade", price: "5.95" },
    { name: "Plum Sparkling Ade", price: "5.95" },
    { name: "Soju", price: "13.00" },
    { name: "Beer", price: "9.00" },
    { name: "Soft Drinks & Water", price: "3.00" },
  ],

  // Additional info
  mealBoxesNote:
    "Served with rice, 3 side dishes • 'ssam' set available for +$3.00",
  kimbapNote:
    "Rolled rice with vegetables & sesame oil • Contains pickled radish, burdock root, egg, cucumber, fish cake, carrot, sesame oil & sesame seeds",
  specialsNote:
    "Add 'ssam' (romaine, cucumber, carrot, ssamjang) +$3.00"
};
