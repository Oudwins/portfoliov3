// what a thing is
export const Categories = {
  website: "website",
  api: "api",
  library: "Library",
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
  go: {
    txt: "Golang",
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
  //   {
  //     title: "Ridaly Digital",
  //     category: Categories.website,
  //     tecnologies: [
  //       SkillList.react,
  //       SkillList.ts,
  //       SkillList.tailwind,
  //       SkillList.astro,
  //       SkillList.html,
  //       SkillList.css,
  //     ],
  //     desc: [
  //       `Ridaly's Marketing Agency is a Madrid-based company that specializes
  // in marketing, design, and technology. They offer a wide range of
  // services to help businesses of all sizes connect with their audience,
  // including strategy development, marketing, technology, content
  // creation, and design. As the designer and developer of the website,
  // you can take pride in creating a platform that showcases Ridaly's
  // unique capabilities and expertise.`,
  //       `Their strategy services include data analysis, user persona mapping,
  // and audits to help businesses develop unique recommendations that will
  // reduce expenses and increase income. The marketing services they offer
  // encompass all digital and offline marketing channels, including social
  // media, SEO, SEM, and conversion optimization. Their technology
  // services include front-end and back-end development, app development,
  // and integrations. They also offer content creation services such as
  // content strategy, copywriting, audiovisual production, and social
  // media management.`,
  //       `Ridaly's Marketing Agency places great emphasis on design, including
  // branding, UX/UI, and creation of assets. They pride themselves on
  // creating unforgettable visual identities that combine seamlessly with
  // user experiences that enchant, engage, and convert.`,
  //       `With Ridaly's Marketing Agency, businesses can focus on their core
  // operations while leaving the marketing, design, and technology tasks
  // to the experts.`,
  //     ],
  //     btns: [
  //       {
  //         t: "View on Github",
  //         href: "/",
  //       },
  //     ],
  //     imgs: {
  //       alt: "Testing",
  //       desktop: "project_showcase_ridaly-desktop.jpeg",
  //       tablet: "project_showcase_ridaly-tablet.jpeg",
  //       phone: "project_showcase_ridaly-phone.jpeg",
  //     },
  //   },

  {
    title: "Ridaly Hosting & Website Builder",
    category: Categories.website,
    tecnologies: [
      SkillList.ts,
      SkillList.next,
      SkillList.mysql,
      SkillList.tailwind,
      SkillList.prisma,
      SkillList.trpc,
      SkillList.react,
    ],
    desc: [
      `Ridaly's Marketing Agency is a Madrid-based company that specializes
  in marketing, design, and technology. They offer a wide range of
  services to help businesses of all sizes connect with their audience,
  including strategy development, marketing, technology, content
  creation, and design.`,
      `I developed the backend hosting site completely on my own (including the design) using the T3 Stack (Typescript, Nextjs & Tailwindcss, read more about it here -> create.t3.gg). The site integrates with stripe to handle transations & caches subscription, payment and receipt information on a mysql database to avoid saturating the stripe api.`,
      `In addition, the website is fully i18n compatible and is already available in spanish & english.`,
      `I am currently extending the platform with a custom Wix style Website Builder that will their customers to visually edit and deploy static websites.`,
    ],
    btns: [
      {
        t: "Try the builder",
        href: "/try-builder",
      },
      {
        t: "View site",
        href: "https://app.ridaly.com/",
      },
    ],
    imgs: {
      alt: "Ridaly Digital Website Hosting Application",
      desktop: "project_showcase_ridalyhosting-desktop.jpeg",
      tablet: "project_showcase_ridalyhosting-tablet.jpeg",
      phone: "project_showcase_ridalyhosting-phone.jpeg",
    },
  },
  {
    // TODO -> add current github stars & npm downloads -> https://gist.github.com/jasonrudolph/6057563
    title: "DStyler - Dynamic Stylesheets",
    category: Categories.library,
    tecnologies: [SkillList.postcss, SkillList.ts, SkillList.css],
    desc: [
      `Dstyler aims to provide a very simple and intuitive API to work with the little known Stylesheet browser API to create stylesheets that react to user input. Create, Remove, Update and Delete css styles,classes and media queries dynamically.`,
      `Dstyler is "kind of" like the react of stylesheets. To avoid unnecesary dom updates we mantain a virtual cssom and only update it when necesary. Minimizing dom updates & screen rerenders.`,
      `To achive this it takes advantage of the postcss AST and a few custom diffing algorithms and the method chaining pattern to create a seamless developer experience.`,
    ],
    btns: [
      {
        t: "View on Github",
        href: "https://github.com/Oudwins/dstyler",
      },
      {
        t: "View on npm",
        href: "https://www.npmjs.com/package/dstyler",
      },
    ],
    imgs: {
      alt: "View of DStyler's npm page. Dstyler is a package for working with dynamic stylesheets powered by postcss. Create, Remove, Update and Delete css styles dynamically.",
      desktop: "project_showcase_dstyler-desktop.jpeg",
    },
  },
  {
    title: "Natours Travel",
    category: Categories.api,
    tecnologies: [
      SkillList.nodejs,
      SkillList.express,
      SkillList.mongodb,
      SkillList.api,
    ],
    desc: [
      `Natours is a tour selling website. Offering experiences of all kinds.
        I developed the backend using the MVC pattern. Utilizing JSON web tokens
        for user authentication.`,
      `The server, in addition to rendering site, also has an extensive
        REST API that allows performing all common CRUD operations
        (Create, Read, Update, Delete) for each of the 4 resources: users, tours, reviews and bookings.`,
      `For the users resource, I implemented extensive auth such as: account creation, login, password recovery via a recovery code and much more`,
      `On the other hand, for the Tours resource, I implemented auth checks to limit crud operations based on the user's role. And the option to leave reviews and book tours.`,
    ],
    btns: [
      {
        t: "View Github",
        href: "https://github.com/Oudwins/natours",
      },
    ],
    imgs: {
      alt: "Natours API project featured image",
      desktop: "project_showcase_natours-desktop.jpg",
      // tablet: "project_showcase_ridaly-tablet.jpeg",
      // phone: "project_showcase_ridaly-phone.jpeg",
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
      `Zwary is a website for a high-end restaurant. It is
        developed and designed entirely by me and is 100% responsive. The focus is on making a great design with amazing custom animations. The screenshot does not do it justice, so please visit the site to see it in action.`,
      `The website has a unique and special design because it was crucial
        to represent the restaurant's uniqueness through its
        design. On the homepage, an exclusive user experience has been created
        by placing an important visual element in its center.
        Meanwhile, on the rest of the pages, a simple yet elegant style is reflected
        that aligns perfectly with the restaurant's intentions.`,
      `The site was developed using plan HTML, CSS & JS. Using the Gsap animation library to achieve some of the amazing animations you can see on screen.`,
    ],
    btns: [
      {
        t: "View on Github",
        href: "https://github.com/Oudwins/zwary",
      },
      {
        t: "View Site",
        href: "https://www.zwary.tristanmayo.com/",
      },
    ],
    imgs: {
      alt: "Website for the Zwary Restaurant",
      desktop: "project_showcase_zwary-desktop.jpeg",
      tablet: "project_showcase_zwary-tablet.jpeg",
      phone: "project_showcase_zwary-phone.jpeg",
    },
    disableScrollImage: true,
  },
];
