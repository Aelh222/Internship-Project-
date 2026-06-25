export interface Phone {
  id: number;
  name: string;
  brand: string;
  price: number;
  storage: string;
  ram: string;
  batteryHealth: number;
  condition: "New" | "Like New" | "Good" | "Fair";
  color: string;
  location: string;
  image: string;
  verified: boolean;
  seller: string;
  description: string;
}