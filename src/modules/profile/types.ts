import { z } from "zod";

export const ProfileBodySchema = z.object({
  avatarId: z.string({ required_error: "Escolhe um avatarzin" }),
  name: z
    .string({ required_error: "Informe a nome meu chapa" })
    .min(3, { message: "Mínimo de 3 caracteres fera" }),
});

export type ProfileBodyType = z.infer<typeof ProfileBodySchema>;

export const ProfilePutSchema = z.object({
  id: z.coerce.number({ required_error: "Informe o ID" }),

  body: z.object({
    name: z
      .string({ required_error: "Problema no nome" })
      .min(3, { message: "Mínimo de 3 caracteres fera" }),

    avatarId: z.coerce.number({ required_error: "Problema no Avatar ID" }),
  }),
});

export type ProfilePutType = z.infer<typeof ProfilePutSchema>;
