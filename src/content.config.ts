// 1. Import utilities from `astro:content`
import { defineCollection, getCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

import { SkillListIds, CategoryListIds } from './data';
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/collections/projects" }),
  schema: z.object({
    title: z.string(),
    category: z.enum(CategoryListIds as [string, ...string[]]),
    tecnologies: z.array(
      z.enum(SkillListIds as [string, ...string[]]),
    ),
    btns: z.array(z.object({ t: z.string(), href: z.string() })),
    asset: z.discriminatedUnion("type", [
      z.object({
        type: z.literal("image"),
        img: z.string(),
      }),
      z.object({
        type: z.literal("website"),
        imgs: z.object({
          alt: z.string().optional(),
          default: z.enum(["desktop", "tablet", "phone"]).optional(),
          desktop: z.string().optional(),
          tablet: z.string().optional(),
          phone: z.string().optional(),
        }),
        disableScrollImage: z.boolean().optional(),
      }),
    ]),
    status: z.enum(["published", "draft", "disabled"]).default("draft"),
  }),
});


export async function getProjects() {
	const isProd = import.meta.env.PROD;
	return (await getCollection("projects", ({ data }) => {
		if (data.status === "disabled") return false;
		if (isProd) return data.status === "published";
		return data.status === "published" || data.status === "draft";
	})).sort((a, b) => {
		console.log(a.filePath, b.filePath);
		if (a.filePath && b.filePath) {
			return a.filePath > b.filePath ? 1 : -1;
		}
		return -1;
	});
}
// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects };