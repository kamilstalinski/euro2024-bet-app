import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Wpisz prawidłowy adres email",
  }),
  username: z.string().min(1, {
    message: "Wpisz nazwę uzytkownika",
  }),
  password: z.string().min(6, {
    message: "Hasło musi zawierać minimum 6 znaków",
  }),
  confirmPassword: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Wpisz prawidłowy adres email",
  }),
  password: z.string().min(6, {
    message: "Hasło musi zawierać minimum 6 znaków",
  }),
});

export const MatchPredictionSchema = z.object({
  matches: z.array(
    z.object({
      matchId: z.number(),
      homeScore: z.number().default(0),
      awayScore: z.number().default(0),
    }),
  ),
});
