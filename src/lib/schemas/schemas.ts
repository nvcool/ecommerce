import { z } from "zod";

export const formSchema = z.object({
  title: z
    .string({ message: "Enter title !" })
    .min(4, { message: "Title minimum 4 characters!" }),
  price: z.coerce
    .number({ message: "Enter price !" })
    .min(1, { message: "Enter price !" }),
  category: z
    .string({ message: "Enter category !" })
    .min(4, { message: "Category minimum 4 characters category!" }),
  sku: z.coerce
    .number({ message: "Enter SKU !" })
    .min(5, { message: "Enter correct SKU !" }),
  description: z
    .string({ message: "Enter description !" })
    .min(10, { message: "Description minimum 10 characters !" }),
  stock: z
    .string({ message: "Enter stock status!" })
    .min(5, { message: "Enter stock status!" }),
  images: z.array(
    z.object({
      name: z
        .string({ required_error: "Enter image URL!" })
        .url({ message: "Enter correct URL!" }),
    }),
  ),
  colors: z.array(
    z.object({
      name: z
        .string({ required_error: "Enter color!" })
        .min(1, { message: "Minimum 1 symbol !" }),
      hex: z
        .string({ required_error: "Enter hex!" })
        .min(1, { message: "Minimum 7 symbols !" }),
    }),
  ),
  sizes: z.array(
    z.object({
      name: z
        .string({ required_error: "Enter size !" })
        .min(1, { message: "More than 1 characthers !" }),
      amount: z.coerce.number().min(1, { message: "More than 1 item !" }),
    }),
  ),
});

export type FormSchemaType = z.infer<typeof formSchema>;
