export type StatusType = "processing" | "completed" | "cancelled";

export interface IOrderProducts {
  id: string;
  images: string[];
  title: string;
  sku: number;
  price: number;
  stock: string;
  category: string;
  date: string;
  description: string;
  color: { name: string; hex: string };
  size: { name: string; amount: number };
  quantity: number;
}

export interface IOrder {
  id: string;
  date: string;
  total: number;
  status: StatusType;
  products: IOrderProducts[];
}
