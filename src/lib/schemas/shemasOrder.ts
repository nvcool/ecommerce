import { z } from "zod";

export const formSchemaOrder = z.object({
  date: z
    .string({ message: "Enter order date !" })
    .min(2, { message: "Format: 10 Jun, 2023 !" }),
  total: z.coerce
    .number({ message: "Enter total !" })
    .min(1, { message: "Minimum 1 characters !" }),
  status: z
    .string({ message: "Enter status !" })
    .min(2, { message: "Minimum 2 characters !" }),
  products: z.array(
    z.object({
      productId: z.string(),
      amount: z.coerce.number(),
      size: z.string(),
    }),
  ),
});

export type formSchemaOrderType = z.infer<typeof formSchemaOrder>;
