import type { ICustomer } from "../types/ICustomer";
import { fetchHendler } from "../utils/helpers";
import type { FormSchemaType } from "./schemas/schemas";

export const API_URL = "http://localhost:3000";

export const customersApi = {
  getAllCustomers: (page: number, limit: number, search: string) => {
    fetchHendler(
      fetch(
        `${API_URL}/customers?_page=${page}&_per_page=${limit}&title=${search}`,
      ),
    );
  },

  createCustomer: (newCustomerData: FormSchemaType) =>
    fetchHendler(
      fetch(`${API_URL}/customers`, {
        method: "POST",
        body: JSON.stringify({
          title: newCustomerData.title,
          price: newCustomerData.price,
          category: newCustomerData.category,
          sku: newCustomerData.sku,
          description: newCustomerData.description,
          stock: newCustomerData.stock,
          quantity: newCustomerData.quantity,
          images: newCustomerData.images,
          colors: newCustomerData.colors,
          size: newCustomerData.size,
        }),
      }),
    ),

  putCustomer: (id: string, CustomerData: ICustomer) =>
    fetchHendler(
      fetch(`${API_URL}/customers/${id}`, {
        method: "PUT",
        body: JSON.stringify(CustomerData),
      }),
    ),

  deleteCustomer: (id: string) =>
    fetchHendler(fetch(`${API_URL}/customers/${id}`, { method: "DELETE" })),
};
