import { z, defineCollection } from 'astro:content';

const experienceCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        company: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        location: z.string().optional(),
        tags: z.array(z.string()),
        lang: z.enum(['en', 'es', 'fr']),
        order: z.number().default(0),
    }),
});

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        gridSize: z.enum(['small', 'medium', 'large']),
        tags: z.array(z.string()),
        lang: z.enum(['en', 'es', 'fr']),
        order: z.number().default(0),
    }),
});

const bioCollection = defineCollection({
    type: 'content',
    schema: z.object({
        command: z.string(),
        lang: z.enum(['en', 'es', 'fr']),
    }),
});

export const collections = {
    experience: experienceCollection,
    projects: projectsCollection,
    bio: bioCollection,
};
