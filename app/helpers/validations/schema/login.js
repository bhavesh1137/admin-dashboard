import { z } from 'zod';

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email.")
})


export const centerSchema = z.object({

    infrastructure: z.object({
        name: z
            .string()
            .min(1, { message: "This field has to be filled." })
            .email("This is not a valid email.")
    }),

    safteyDetails: z.object({
        name: z
            .string()
            .min(1, { message: "This field has to be filled." })
            .email("This is not a valid email.")
    })
})