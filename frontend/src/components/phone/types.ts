export interface Phone {
  id: number;
  name: string;
  brand: string;
  price: number;
  storage: string;
  condition: "New" | "Like New" | "Good" | "Fair";
  location: string;
  image: string;
  verified: boolean;

  seller: string;
  sellerRating: number;
  completedSales: number;
  memberSince: string;

  batteryHealth: number;
  description: string;
  hasOriginalBox: boolean;
  marketMin: number;
  marketMax: number;
}