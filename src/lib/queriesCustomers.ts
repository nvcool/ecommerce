import type { ICustomer } from "../types/ICustomer";
import type { IPaginationResponse } from "../types/IPaginationResponse";
import { fetchHendler } from "../utils/helpers";
import type { formSchemaProductType } from "./schemas/schemasProduct";
import type { formCustomersSchemaType } from "./schemas/shemasCustomer";

export const API_URL = "http://localhost:3000";

export const customersApi = {
  getAllCustomers: (page: number, limit: number, search: string) =>
    fetchHendler<IPaginationResponse<ICustomer>>(
      fetch(
        `${API_URL}/customers?_page=${page}&_per_page=${limit}&title=${search}`,
      ),
    ),
  getCustomerById: (id: string) =>
    fetchHendler<ICustomer>(fetch(`${API_URL}/customers/${id}`)),

  createCustomer: (newCustomerData: formSchemaProductType) =>
    fetchHendler(
      fetch(`${API_URL}/customers`, {
        method: "POST",
        body: JSON.stringify({
          ...newCustomerData,
        }),
      }),
    ),

  putCustomer: ({
    id,
    customerData,
  }: {
    id: string;
    customerData: formCustomersSchemaType;
  }) =>
    fetchHendler(
      fetch(`${API_URL}/customers/${id}`, {
        method: "PUT",
        body: JSON.stringify({ ...customerData }),
      }),
    ),

  deleteCustomer: (id: string) =>
    fetchHendler(fetch(`${API_URL}/customers/${id}`, { method: "DELETE" })),
};
