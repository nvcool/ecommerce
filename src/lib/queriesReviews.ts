import type { ICustomer } from "../types/ICustomer";
import type { IReview } from "../types/IReview";
import { fetchHendler } from "../utils/helpers";
import type { formSchemaReviewsType } from "./schemas/schemaReviews";

export const API_URL = "http://localhost:3000";

export const reviewsApi = {
  getAllReviews: (page: number, limit: number, search: string) => {
    fetchHendler(
      fetch(
        `${API_URL}/reviews?_page=${page}&_per_page=${limit}&title=${search}`,
      ),
    );
  },

  getReviewById: (id: string) =>
    fetchHendler<IReview>(fetch(`${API_URL}/reviews/${id}`)),

  createReview: (newReviewsData: formSchemaReviewsType) =>
    fetchHendler(
      fetch(`${API_URL}/reviews`, {
        method: "POST",
        body: JSON.stringify({
          ...newReviewsData,
        }),
      }),
    ),

  putReview: ({
    id,
    reviewsData,
    userData,
  }: {
    id: string;
    reviewsData: formSchemaReviewsType;
    userData: ICustomer;
  }) =>
    fetchHendler(
      fetch(`${API_URL}/reviews/${id}`, {
        method: "PUT",
        body: JSON.stringify({ ...reviewsData, user: userData }),
      }),
    ),

  deleteReview: (id: string) =>
    fetchHendler(fetch(`${API_URL}/reviews/${id}`, { method: "DELETE" })),
};
