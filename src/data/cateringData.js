export const cateringConfig = {
  enabled: true,
  policies: {
    minimumGuests: 10,
    leadTimeHours: 48,
    guestCountRanges: [
      { label: "10–15 guests", estimatedCount: 12, min: 10, max: 15 },
      { label: "15–25 guests", estimatedCount: 20, min: 15, max: 25 },
      { label: "25–40 guests", estimatedCount: 32, min: 25, max: 40 },
      { label: "40–60 guests", estimatedCount: 50, min: 40, max: 60 },
      { label: "60+ guests",   estimatedCount: 70, min: 60 },
    ],
  },
  fulfillment: {
    pickup: {
      enabled: true,
      instructions: "Orders ready at your requested time. Please arrive within 15 minutes.",
    },
    delivery: {
      enabled: true,
      radiusMiles: 15,
      fee: { amount: 25, waiveAbove: 300 },
      instructions: "We deliver within 15 miles of El Sobrante.",
    },
  },
  menu: {
    sections: [
      {
        id: "mains",
        name: "Mains",
        nameLocalized: "메인",
        items: [
          {
            id: "army-stew",
            name: "Army Stew",
            nameLocalized: "부대찌개",
            description: "Our signature. Loaded, spicy, unapologetic.",
            price: 18,
            pricingUnit: "per_person",
            flags: { isSpicy: true, isRecommended: true },
          },
          {
            id: "bulgogi",
            name: "Bulgogi",
            nameLocalized: "불고기",
            price: 16,
            pricingUnit: "per_person",
          },
          {
            id: "japchae",
            name: "Japchae",
            nameLocalized: "잡채",
            price: 14,
            pricingUnit: "per_person",
            flags: { isVegetarian: true },
          },
          {
            id: "spicy-pork",
            name: "Spicy Pork",
            nameLocalized: "제육볶음",
            price: 15,
            pricingUnit: "per_person",
            flags: { isSpicy: true },
          },
        ],
      },
      {
        id: "sides",
        name: "Sides",
        nameLocalized: "사이드",
        items: [
          {
            id: "kimchi",
            name: "House Kimchi",
            nameLocalized: "김치",
            price: 4,
            pricingUnit: "per_person",
            flags: { isSpicy: true, isVegetarian: true },
          },
          {
            id: "rice",
            name: "Steamed Rice",
            nameLocalized: "밥",
            price: 3,
            pricingUnit: "per_person",
            flags: { isVegetarian: true },
          },
          {
            id: "banchan",
            name: "Banchan Set",
            nameLocalized: "반찬",
            description: "4 rotating seasonal plates.",
            price: 6,
            pricingUnit: "per_person",
          },
          {
            id: "drinks",
            name: "Korean Drinks",
            nameLocalized: "음료",
            description: "Sikhye, barley tea, yuzu-ade.",
            price: 3,
            pricingUnit: "per_person",
          },
        ],
      },
    ],
  },
  payment: { provider: "stripe", mode: "invoice" },
  notifications: {
    ownerEmail: "info@eat-olchi.com",
    confirmationMessage:
      "We'll review your order and reach out within 2 hours to confirm details.",
  },
  branding: {
    headline: "Bold Flavors, Delivered.",
    subheadline:
      "Authentic Korean catering for your office, event, or gathering. No compromise.",
    ctaText: "Order Catering",
    accentColor: "#B13613",
  },
};
