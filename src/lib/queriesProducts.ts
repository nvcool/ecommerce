import type { IPaginationResponse } from "../types/IPaginationResponse";
import type { IProduct } from "../types/IProduct";
import { fetchHendler } from "../utils/helpers";
import type { formSchemaProductType } from "./schemas/schemasProduct";

export const API_URL = "http://localhost:3000";

export const productsApi = {
  getAllProducts: (page: number, limit: number, search: string) =>
    fetchHendler<IPaginationResponse<IProduct>>(
      fetch(
        `${API_URL}/products?_page=${page}&_per_page=${limit}&title=${search}`,
      ),
    ),

  getProductById: (id: string) =>
    fetchHendler<IProduct>(fetch(`${API_URL}/products/${id}`)),

  createProduct: (newProductData: formSchemaProductType) =>
    fetchHendler(
      fetch(`${API_URL}/products`, {
        method: "POST",
        body: JSON.stringify({
          ...newProductData,
          images: newProductData.images.map((image) => image.name),
        }),
      }),
    ),

  putProducts: ({
    id,
    productData,
  }: {
    id: string;
    productData: formSchemaProductType;
  }) =>
    fetchHendler(
      fetch(`${API_URL}/products/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          ...productData,
          images: productData.images.map((image) => image.name),
        }),
      }),
    ),

  deleteProduct: (id: string) =>
    fetchHendler(fetch(`${API_URL}/products/${id}`, { method: "DELETE" })),
};
