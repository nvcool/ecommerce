import type { ICustomer } from "./ICustomer";

export interface IReview {
  id: string;
  user: ICustomer;
  rating: number;
  text: string;
}
