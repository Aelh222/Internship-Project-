import type { Phone } from "./types";

export const phones: Phone[] = [
  {
    id: 1,
    name: "Infinix Hot 60 Pro Plus",
    brand: "Infinix",
    price: 150,
    storage: "256GB",
    condition: "Like New",
    location: "Beirut",
    image: "/infnic.jpg",
    verified: true,

    hasOriginalBox: true,

    seller: "Ali El Hajj",
    sellerRating: 4.9,
    completedSales: 18,
    memberSince: "2024",

    batteryHealth: 97,

    description:
      "Excellent condition. Always used with a case and screen protector. No scratches or repairs. Includes original charger and box.",

    marketMin: 140,
    marketMax: 170,
  },

  {
    id: 2,
    name: "Samsung S24 Ultra",
    brand: "Samsung",
    price: 750,
    storage: "256GB",
    condition: "New",
    location: "Tripoli",
    image: "/ultra.jpg",
    verified: true,

    hasOriginalBox: true,

    seller: "Mohammad Khalil",
    sellerRating: 5.0,
    completedSales: 41,
    memberSince: "2023",

    batteryHealth: 100,

    description:
      "Brand new Samsung Galaxy S24 Ultra. Factory sealed with official warranty. Never opened or activated.",

    marketMin: 730,
    marketMax: 790,
  },

  {
    id: 3,
    name: "POCO F7 Pro",
    brand: "Xiaomi",
    price: 330,
    storage: "512GB",
    condition: "Good",
    location: "Saida",
    image: "/images.jpg",
    verified: false,

    hasOriginalBox: false,

    seller: "Karim Haddad",
    sellerRating: 4.7,
    completedSales: 12,
    memberSince: "2025",

    batteryHealth: 91,

    description:
      "Very good condition with minor signs of use. Battery lasts all day and the phone works perfectly. Includes original charger.",

    marketMin: 300,
    marketMax: 350,
  },
];