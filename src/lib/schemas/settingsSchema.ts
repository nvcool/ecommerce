import { z } from "zod";

export const settingSchema = z.object({
  siteName: z
    .string({ message: "Enter name !" })
    .min(2, { message: "Name minimum 4 characters!" }),
  supportEmail: z
    .string({ message: "Enter email !" })
    .min(2, { message: "Email minimum 4 characters!" })
    .email("This is not a valid email."),
  monthlyOrderGoal: z
    .string({ message: "Enter Monthly Order Goal !" })
    .min(2, { message: "Minimum 4 characters!" }),
});

export type FormSettingsSchemaType = z.infer<typeof settingSchema>;
