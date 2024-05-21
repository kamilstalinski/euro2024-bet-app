import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Wpisz prawidłowy adres email",
  }),
  username: z.string().min(1, {
    message: "Please enter your name",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
  confirmPassword: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});
