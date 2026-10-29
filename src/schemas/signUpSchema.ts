import { z } from "zod";

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(2, "Min 2 characters.")
      .max(30, "Max 30 characters"),

    lastName: z
      .string()
      .trim()
      .min(2, "Min 2 characters.")
      .max(30, "Max 30 characters"),

    email: z.string().trim().email("Enter a valid email."),

    password: z.string().min(8, "Min 8 characters."),

    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match.",
    path: ["passwordConfirm"],
  });

export type SignUpForm = z.infer<typeof signUpSchema>;
