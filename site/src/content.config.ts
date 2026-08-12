import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    group: z.enum(['studio', 'everi', 'omniarts', 'personal']),
    cover: z.string().optional(),
    role: z.string().optional(),
    year: z.string().optional(),
    stack: z.string().optional(),
    summary: z.string(),
    blurb: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
