import type { Phone } from "./types";

export const phones: Phone[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: 670,
    storage: "256GB",
    condition: "Like New",
    location: "Beirut",
    image: "/phones/iphone15pro.jpg",
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
    image: "/phones/s24ultra.jpg",
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
    image: "/phones/pocof7pro.jpg",
    verified: false,
  },
];
///  Mock Data