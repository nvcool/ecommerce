import { z } from "zod";

export const formSchemaReviews = z.object({
  userId: z.string(),
  text: z
    .string({ message: "Enter review !" })
    .min(2, { message: "Review minimum 4 characters!" }),
  raiting: z.coerce
    .number({ message: "Enter raiting !" })
    .min(1, { message: "Minimum 1 characters!" }),
});

export type formSchemaReviewsType = z.infer<typeof formSchemaReviews>;
