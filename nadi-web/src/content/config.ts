import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image(), // Esto es para que Astro optimice la foto
    icon: z.string().optional(), // El '?' significa que no es obligatorio
  }),
});

export const collections = { services };