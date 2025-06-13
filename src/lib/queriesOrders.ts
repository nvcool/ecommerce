import type { IOrder, IOrderProducts } from "../types/IOrder";
import type { IPaginationResponse } from "../types/IPaginationResponse";
import { fetchHendler } from "../utils/helpers";
import { API_URL } from "./queriesProducts";
import type { formSchemaOrderType } from "./schemas/shemasOrder";

export const ordersApi = {
  getAllOrders: (page: number, limit: number, search: string) =>
    fetchHendler<IPaginationResponse<IOrder>>(
      fetch(
        `${API_URL}/orders?_page=${page}&_per_page=${limit}&title=${search}`,
      ),
    ),

  getOrderById: (id: string) =>
    fetchHendler<IOrder>(fetch(`${API_URL}/orders/${id}`)),

  createOrder: (newOrdersData: formSchemaOrderType) =>
    fetchHendler(
      fetch(`${API_URL}/orders`, {
        method: "POST",
        body: JSON.stringify({
          ...newOrdersData,
        }),
      }),
    ),

  putOrder: ({
    id,
    orderData,
    productsData,
  }: {
    id: string;
    orderData: formSchemaOrderType;
    productsData: IOrderProducts[];
  }) =>
    fetchHendler(
      fetch(`${API_URL}/orders/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          ...orderData,
          products: productsData,
        }),
      }),
    ),

  deleteOrder: (id: string) =>
    fetchHendler(fetch(`${API_URL}/orders/${id}`, { method: "DELETE" })),
};
