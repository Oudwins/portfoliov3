// what a thing is
export const Categories = {
  website: "website",
  api: "api",
  plugin: "plugin",
  design: "design",
} as const;

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
  // Front
  tailwind: {
    txt: "Tailwindcss",
  },
  bootstrap: {
    txt: "Bootstrap",
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
  astro: {
    txt: "AstroJS",
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

  // DevOps
  linuxServer: {
    txt: "Linux Server",
    img: "linux.svg",
  },
  nginx: {
    txt: "Nginx",
  },
  ansible: {
    txt: "Ansible",
  },
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
};
import type { ProjectData } from "../components/ui/Project";
export const Projects: ProjectData[] = [
  {
    title: "Ridaly Digital",
    category: Categories.website,
    tecnologies: [
      SkillList.react,
      SkillList.ts,
      SkillList.tailwind,
      SkillList.astro,
      SkillList.html,
      SkillList.css,
    ],
    desc: [
      `Ridaly's Marketing Agency is a Madrid-based company that specializes
in marketing, design, and technology. They offer a wide range of
services to help businesses of all sizes connect with their audience,
including strategy development, marketing, technology, content
creation, and design. As the designer and developer of the website,
you can take pride in creating a platform that showcases Ridaly's
unique capabilities and expertise.`,
      `Their strategy services include data analysis, user persona mapping,
and audits to help businesses develop unique recommendations that will
reduce expenses and increase income. The marketing services they offer
encompass all digital and offline marketing channels, including social
media, SEO, SEM, and conversion optimization. Their technology
services include front-end and back-end development, app development,
and integrations. They also offer content creation services such as
content strategy, copywriting, audiovisual production, and social
media management.`,
      `Ridaly's Marketing Agency places great emphasis on design, including
branding, UX/UI, and creation of assets. They pride themselves on
creating unforgettable visual identities that combine seamlessly with
user experiences that enchant, engage, and convert.`,
      `With Ridaly's Marketing Agency, businesses can focus on their core
operations while leaving the marketing, design, and technology tasks
to the experts.`,
    ],
    btns: [
      {
        t: "View on Github",
        href: "/",
      },
    ],
    imgs: {
      alt: "Testing",
      desktop: "project_showcase_ridaly-desktop.jpeg",
      tablet: "project_showcase_ridaly-tablet.jpeg",
      phone: "project_showcase_ridaly-phone.jpeg",
    },
  },
  {
    title: "Natours Travel",
    category: Categories.website,
    tecnologies: [SkillList.nodejs, SkillList.express, SkillList.mongodb],
    desc: [
      `Natours es una página de venta de tours. De experiencias de todo tipo.
    He desarollado el backend usando el patron MVC. Usando json web tokens
    para autentificar a los usuarios.`,
      `EL servidor, además de renderizar la web, también tiene una extensa
    API, que permite realizar todas las operaciones comunes de CRUD
    (Crear, leer, actualizar y borrar) con cado uno de los recursos.
    Cuenta con 4 recursos, los usuarios, para los cuales he implementado
    los procesos de creación de cuenta, inicio de sesión, recuperación de
    contraseña vía envio de código a su email...`,
      `Luego está el recurso de Tours, para el que las operaciones de CRUD
    están limitadas según el rol del usuario. Por otro lado también he
    implementado la opción de dejar reviews y reservar tours. La
    aplicación no está acabada, sobre todo el front end que es algo de lo
    que no me he hecho cargo.`,
    ],
    btns: [
      {
        t: "View on Github",
        href: "/",
      },
    ],
    imgs: {
      alt: "Testing",
      desktop: "project_showcase_ridaly-desktop.jpeg",
      tablet: "project_showcase_ridaly-tablet.jpeg",
      phone: "project_showcase_ridaly-phone.jpeg",
    },
  },
  {
    title: "Zwary Restaurant",
    category: Categories.website,
    tecnologies: [
      SkillList.js,
      SkillList.css,
      {
        txt: "Gsap",
        img: null,
      },
      SkillList.html,
    ],
    desc: [
      `Zwary es una página web para un restaurante de alta gama. Está
    desarrollada y diseñada íntegramente por mi y es 100% responsive.`,
      `La web tiene un diseño único y especial pues era de vital importancia
    que representara la particularidad del restaurante a través de su
    diseño. En la página de inicio se ha creado una experiencia de usuario
    exclusiva ubicando en su centro un elemento visual importante.
    Mientras que en el resto de las páginas se refleja un estilo sencillo
    pero elegante que está perfectamente alineado con las intenciones del
    restaurante.`,
    ],
    btns: [
      {
        t: "View on Github",
        href: "/",
      },
    ],
    imgs: {
      alt: "Testing",
      desktop: "project_showcase_ridaly-desktop.jpeg",
      tablet: "project_showcase_ridaly-tablet.jpeg",
      phone: "project_showcase_ridaly-phone.jpeg",
    },
  },
];
