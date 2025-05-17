import z from 'zod';

export type Character = z.infer<typeof CharacterSchema>;

const InfoSchema = z.object({
  count: z.number(),
  pages: z.number(),
  next: z.string().nullable(),
  prev: z.string().nullable(),
});

const OriginLocationSchema = z.object({
  name: z.string(),
  url: z.string().url().or(z.string().length(0)),
});

const CharacterSchema = z.object({
  id: z.number(),
  name: z.string(),
  status: z.string(),
  species: z.string(),
  type: z.string(),
  gender: z.string(),
  origin: OriginLocationSchema,
  location: OriginLocationSchema,
  image: z.string().url(),
  episode: z.array(z.string().url()),
  url: z.string().url(),
  created: z.string().datetime(),
});

export const CharacterPageSchema = z.object({
  info: InfoSchema,
  results: z.array(CharacterSchema),
});
