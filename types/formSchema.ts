import { z } from "zod";

export const formSchema = z.object({
    name: z.string().nonempty("Please enter your name."),
    email: z.string().email("Please enter a valid email address."),
    subject: z.string().optional(),
    message: z.string().nonempty("Please enter a message."),
  });
  