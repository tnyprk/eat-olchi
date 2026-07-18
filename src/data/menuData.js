// Centralized menu data - edit prices and items here
export const menuData = {
  // For Menu1.jsx detailed version
  mealBoxes: [
    {
      name: "Beef Bulgogi",
      price: "24.50",
      description: "Marinated beef, fire-charred and glazed in sweet soy",
      isRecommended: false,
      isSpicy: false
    },
    {
      name: "Beef Bulgogi Soup",
      price: "24.50",
      description: "Marinated beef simmered with glass noodles and vegetables in a savory-sweet broth",
      isRecommended: false,
      isSpicy: false
    },
    {
      name: "Pork Bulgogi",
      price: "23.50",
      description: "Spicy gochujang-marinated pork, charred and juicy",
      isRecommended: false,
      isSpicy: true
    },
    {
      name: "Sweet & Spicy Boneless Chicken Bites",
      price: "23.50",
      description: "Boneless bite sized chicken tossed in sweet gochujang glaze",
      isRecommended: true,
      isSpicy: true,
      image: "/OLCHI-22.jpg"
    },
    {
      name: "Sweet & Spicy Crispy Tofu",
      price: "21.50",
      description: "Crispy cubed tofu coated in sweet-spicy glaze",
      isRecommended: false,
      isSpicy: true,
      isVegetarian: true
    },
    {
      name: "Donkatsu",
      price: "24.50",
      description: "Crispy, golden double-fried pork cutlet with house tonkatsu sauce",
      isRecommended: false,
      isSpicy: false,
      isVegetarian: false
    },
    {
      name: "Beef Kalbi",
      subtitle: "Beef Short Rib",
      price: "39.50",
      description: "Kobe beef marinated in deep soy and fruit, grilled over open fire",
      isRecommended: true,
      image: "/KALBI_ZOOMED.jpg"
    }
  ],

  friedChicken: {
    note: "Served by piece count",
    items: [
      {
        name: "Original",
        description: "Crispy plain Korean fried chicken wings",
        sizes: [
          { label: "S (6pc)", price: "14.00" },
          { label: "M (15pc)", price: "26.00" },
          { label: "L (22pc)", price: "39.00" }
        ],
        image: "FC_ORIGINAL.jpg"
      },
      {
        name: "Spicy",
        description: "Crispy wings with a spicy batter — no sauce",
        isSpicy: true,
        sizes: [
          { label: "S (6pc)", price: "14.00" },
          { label: "M (15pc)", price: "26.00" },
          { label: "L (22pc)", price: "39.00" }
        ],
        image: "FC_ORIGINAL_0.jpg"
      },
      {
        name: "Sweet & Spicy",
        description: "Crispy wings tossed in sweet gochujang glaze",
        isSpicy: true,
        sizes: [
          { label: "S (6pc)", price: "15.00" },
          { label: "M (15pc)", price: "28.00" },
          { label: "L (22pc)", price: "42.00" }
        ],
        image: "FC_SPICY.jpg"
      },
      {
        name: "Soy & Garlic",
        description: "Crispy wings tossed in savory soy & garlic glaze",
        sizes: [
          { label: "S (6pc)", price: "15.00" },
          { label: "M (15pc)", price: "28.00" },
          { label: "L (22pc)", price: "42.00" }
        ],
        image: "FC_SOY_GARLIC.jpg"
      }
    ],
    fries: {
      name: "French Fries",
      price: "7.00"
    },
    partyTray: {
      name: "Party Tray",
      description: "80 pcs",
      price: "150.00"
    }
  },

  appetizers: [
    {
      name: "Gunmandu",
      subtitle: "Pan-Fried Dumplings, Beef. 8 pcs",
      price: "9.50",
      description: "Crispy pan-fried dumplings stuffed with beef and vegetables",
      image: "/OLCHI-1.jpg"
    },
    {
      name: "Gunmandu",
      subtitle: "Pan-Fried Dumplings, Vegetable. 8 pcs",
      price: "9.50",
      description: "Crispy pan-fried dumplings stuffed with vegetables",
      isVegetarian: true
    },
    {
      name: "Japchae",
      price: "16.50",
      description: "Shiitake mushrooms, bell peppers and onions\nAdd beef bulgogi for +$3.00",
      isVegetarian: true,
      image: "/OLCHI-12.jpg"
    },
    {
      name: "Kimchi Pajeon",
      subtitle: "Kimchi Pancake",
      price: "18.50",
      description: "Crispy kimchi pancake.",
      image: "/KIMCHI-1.jpg"
    },
    {
      name: "Haemul Pajeon",
      subtitle: "Seafood Pancake",
      price: "23.50",
      description: "Crispy seafood pancake with squid, clams, mussels, and shrimp",
      image: "/OLCHI-4.jpg"
    },
    {
      name: "Kimchi Fried Rice",
      price: "19.50",
      description: "Kimchi fried rice with spam and sunny-side-up egg",
      image: "/KIMCHI-3.jpg"
    },
  ],

  // For Menu.jsx and Menu2.jsx simplified version
  specials: [
    { name: "Beef Bulgogi", price: "24.50", description: "Rice and side dishes", isRecommended: false },
    { name: "Spicy Pork Bulgogi", price: "23.50", description: "Rice and side dishes", isRecommended: false },
    { name: "Dakgangjeong", price: "31.50", description: "Rice and side dishes", isRecommended: false },
    { name: "Tofu Gangjeong", price: "20.50", description: "Rice and side dishes", isRecommended: false }
  ],

  kimbap: [
    { name: "Tuna Mayo", price: "17.50", isRecommended: true, image: "/OLCHI-2.jpg" },
    {
      name: "Yubu",
      subtitle: "Tofu Pocket Roll",
      description: "Vegetarian option available (No fish cake)",
      price: "16.50",
      isRecommended: false,
      isVegetarian: true
    }
  ],

  specialty: {
    name: "Budae Jjigae",
    subtitle: "Army Stew",
    price: "43.50",
    description:
      "Hearty, spicy Korean army stew—hotpot made to share with napa cabbage, onion, beans, spam, sausage, cheese, tofu, and ground beef.\nAdd ramen noodles for +$2.50\nAdd rice for +$2.00",
    servingNote: "Served with 2 bowls of rice and side dishes",
    isBest: true,
    isSpicy: true,
    image: "/OLCHI-33.jpg",
    isRecommended: true
  },

  soondubu: {
    description: "Spicy soft tofu soup — zucchini, onions and scallions in rich, spicy broth",
    servingNote: "Served with rice and side dishes",
    items: [
      { name: "Beef", price: "19.50" },
      { name: "Seafood", price: "20.50" },
      { name: "Combo", price: "20.50" },
      { name: "Vegetarian", price: "18.50", description: "Mushrooms", isVegetarian: true }
    ],
    note: "*Raw egg available upon request",
    image: "/OLCHI-15.jpg"
  },

  // For Menu.jsx and Menu2.jsx
  budaeJjigae: {
    name: "Budae Jjigae ",
    price: "43.50",
    description: "For Two",
    addOn: "Add Ramyun +$2.50",
    isBest: true
  },

  soondubuSimple: [
    { name: "Beef Soondubu", price: "19.50" },
    { name: "Seafood Soondubu", price: "20.50" },
    { name: "Combo Soondubu", price: "20.50" },
    { name: "Vegetarian Soondubu", price: "18.50", isVegetarian: true }
  ],

  drinks: [
    { name: "Yuzu Sparkling Ade", price: "6.00" },
    { name: "Plum Sparkling Ade", price: "6.00" },
    { name: "Bling Booster Yogurt Sparkling", price: "4.00" },
    { name: "Soft Drinks", price: "3.00" }
  ],

  alcoholicDrinks: {
    beer: {
      featured: {
        name: "Terra",
        subtitle: "Korean lager",
        sizes: [
          { label: "Medium (500 mL)", price: "9.00" },
          { label: "Large (1.6 L)", price: "18.50" }
        ]
      },
      others: [
        { name: "Budweiser", price: "5.00" },
        { name: "Blue Moon", price: "5.00" },
        { name: "Sapporo", price: "5.00" },
        { name: "Asahi", price: "5.00" }
      ]
    },
    soju: {
      name: "So-Ju",
      price: "12.00",
      brands: ["Jinro Is Back", "Chamisul Fresh"],
      flavoredName: "Flavored So-Ju",
      flavoredPrice: "12.00",
      flavors: ["Green Grape", "Grapefruit", "Plum", "Strawberry", "Peach", "Lemon", "Melon"]
    },
    makgeolli: {
      name: "Makgeolli",
      subtitle: "Korean Rice Wine",
      price: "13.00"
    }
  },

  // Additional info
  mealBoxesImage: "/OLCHI-11.jpg",
  mealBoxesNote: "Served with rice and side dishes — rotated seasonal 3 side dishes",
  kimbapNote:
    "Rice, pickled radish, burdock root, egg, cucumber, fish cake, carrot, sesame oil and sesame seeds",
  specialsNote: "Add 'ssam' (romaine, cucumber, carrot, ssamjang) +$3.00"
};
