export interface IProduct {
  id: string;
  images: string[];
  title: string;
  sku: number;
  price: number;
  stock: string;
  category: string;
  date: string;
  description: string;
  colors: { name: string; hex: string }[];
  sizes: { name: string; amount: number }[];
}
