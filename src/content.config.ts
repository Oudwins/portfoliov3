// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';


const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/collections/projects" }),
	schema: z.object({
		
	})

})

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects };