import { z } from "zod";

export const movieSchema = z.object({
  title: z.string(),
  poster: z.string().url(),
  description: z.string(),
});
