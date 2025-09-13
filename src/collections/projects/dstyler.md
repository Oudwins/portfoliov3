---
status: disabled
title: DStyler - Dynamic Stylesheets
category: library
tecnologies:
  - postcss
  - ts
  - css
btns:
  - { t: "View on Github", href: "https://github.com/Oudwins/dstyler" }
  - { t: "View on npm", href: "https://www.npmjs.com/package/dstyler" }
asset:
  type: website
  imgs:
    alt: "View of DStyler's npm page. Dstyler is a package for working with dynamic stylesheets powered by postcss. Create, Remove, Update and Delete css styles dynamically."
    desktop: project_showcase_dstyler-desktop.jpeg
---
Dstyler aims to provide a very simple and intuitive API to work with the little known Stylesheet browser API to create stylesheets that react to user input. Create, Remove, Update and Delete CSS styles, classes and media queries dynamically.

Dstyler is "kind of" like the React of stylesheets. To avoid unnecessary DOM updates we maintain a virtual CSSOM and only update it when necessary, minimizing DOM updates & screen re-renders.

To achieve this it takes advantage of the PostCSS AST and a few custom diffing algorithms and the method chaining pattern to create a seamless developer experience.
