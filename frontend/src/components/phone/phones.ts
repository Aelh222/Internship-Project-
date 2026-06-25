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
  },
  {
    id: 3,
    name: "POCO F7 Pro",
    brand: "POCO",
    price: 330,
    storage: "512GB",
    condition: "Good",
    location: "Saida",
    image: "/images.jpg",
    verified: false,
  },
];
///  Mock Data