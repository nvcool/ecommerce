import { z } from "zod";

export const formSchemaCustomers = z.object({
  image: z
    .string({ message: "Enter image URL !" })
    .url({ message: "Enter correct URL !" }),
  name: z
    .string({ message: "Enter name !" })
    .min(2, { message: "Name minimum 4 characters!" }),
  email: z
    .string({ message: "Enter email !" })
    .min(2, { message: "Email minimum 4 characters!" })
    .email("This is not a valid email."),
  address: z
    .string({ message: "Enter Monthly Order Goal !" })
    .min(2, { message: "Minimum 4 characters!" }),
});

export type formCustomersSchemaType = z.infer<typeof formSchemaCustomers>;
