import { z } from "astro:content";

// what a thing is
export const Categories = {
  website: "website",
  api: "api",
  library: "library",
  plugin: "plugin",
  design: "design",
} as const;

export const CategoryListIds = Object.keys(Categories) as (keyof typeof Categories)[];

// What tools where used

export interface Skill {
  txt: string;
  // optional, will try to grab txt.toLowerCase().svg
  img?: string | null;
}

export const SkillList = {
  // Languages
  html: {
    txt: "HTML",
  },
  css: {
    txt: "CSS",
  },
  js: {
    txt: "Javascript",
  },
  ts: {
    txt: "Typescript",
  },
  go: {
    txt: "Golang",
  },
  java: {
    txt: "Java",
  },
  // Front
  tailwind: {
    txt: "Tailwindcss",
  },
  bootstrap: {
    txt: "Bootstrap",
  },
  jquery: {
    txt: "",
    img: "jquery.svg",
  },
  react: {
    txt: "ReactJS",
  },
  next: {
    txt: "NextJS",
  },
  vue: {
    txt: "VueJS",
  },
  nuxt: {
    txt: "NuxtJS",
  },
  svelte: {
    txt: "Svelte",
  },
  astro: {
    txt: "AstroJS",
  },
  postcss: {
    txt: "PostCSS",
  },

  // Back
  nodejs: {
    txt: "NodeJS",
  },
  express: {
    txt: "Express",
    img: null,
  },
  mongodb: {
    txt: "MongoDB",
  },
  mysql: {
    txt: "MySQL",
  },
  trpc: {
    txt: "tRPC",
  },
  prisma: {
    txt: "Prisma",
  },
  api: {
    txt: "Design",
    img: "api-design.svg",
  },

  // DevOps
  linuxServer: {
    txt: "Linux Server",
    img: "linux.svg",
  },
  nginx: {
    txt: "Nginx",
  },
  aws: {
    txt: "",
    img: "aws.svg",
  },
  nix: {},
  // Other
  linuxUser: {
    txt: "Linux User",
    img: "linux.svg",
  },
  git: {
    txt: "Git/VC",
    img: "git.svg",
  },

  // Design
  wordpress: {
    txt: "Wordpress",
  },
  photoshop: {
    txt: "Photoshop",
  },
  figma: {
    txt: "Figma",
  },
} as const;

export const SkillListIds = Object.keys(SkillList) as (keyof typeof SkillList)[];

export const responsiveViews = ["desktop", "tablet", "phone"] as const;

export type ResponsiveViews = (typeof responsiveViews)[number];

export const projectSchema = z.object({
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
          default: z.enum(responsiveViews).optional(),
          desktop: z.string().optional(),
          tablet: z.string().optional(),
          phone: z.string().optional(),
        }),
        disableScrollImage: z.boolean().optional(),
      }),
    ]),
    status: z.enum(["published", "draft", "dropped"]).default("draft"),
  })
export type ProjectSchema = z.infer<typeof projectSchema>;
export type BaseProjectData = Omit<ProjectSchema, "asset" | "tecnologies" | "status"> & {
  tecnologies: Skill[];
};

export type ProjectData = BaseProjectData & {
  md?: string;
}

export type WebsiteAsset = ProjectSchema["asset"] & {
  type: "website";
}

export type ImageAsset = ProjectSchema["asset"] & {
  type: "image";
}

export type ProjectAsset = ProjectSchema["asset"];

