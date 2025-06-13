import type { ICustomer } from "./ICustomer";

export interface IReview {
  id: string;
  user: ICustomer;
  raiting: number;
  text: string;
}
