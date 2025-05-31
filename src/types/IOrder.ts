import type { IProduct } from "./IProduct";

export type StatusType = "processing" | "completed" | "cancelled";

export interface IOrder {
  id: string;
  date: string;
  total: number;
  status: StatusType;
  products: IProduct[];
}
