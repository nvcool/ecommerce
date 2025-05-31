import type { IProduct } from "../types/IProduct";
import { fetchHendler } from "../utils/helpers";
import type { FormSchemaType } from "./schemas/schemas";

export const API_URL = "http://localhost:3000";

export const productsApi = {
  getAllProducts: (page: number, limit: number, search: string) => {
    fetchHendler(
      fetch(
        `${API_URL}/products?_page=${page}&_per_page=${limit}&title=${search}`,
      ),
    );
  },

  createProduct: (newProductData: FormSchemaType) =>
    fetchHendler(
      fetch(`${API_URL}/products`, {
        method: "POST",
        body: JSON.stringify({
          title: newProductData.title,
          price: newProductData.price,
          category: newProductData.category,
          sku: newProductData.sku,
          description: newProductData.description,
          stock: newProductData.stock,
          quantity: newProductData.quantity,
          images: newProductData.images,
          colors: newProductData.colors,
          size: newProductData.size,
        }),
      }),
    ),

  putProducts: (id: string, productData: IProduct) =>
    fetchHendler(
      fetch(`${API_URL}/products/${id}`, {
        method: "PUT",
        body: JSON.stringify(productData),
      }),
    ),

  deleteProduct: (id: string) =>
    fetchHendler(fetch(`${API_URL}/products/${id}`, { method: "DELETE" })),
};
