# ----------Assignment 10: Jo Dikhta Hai Woh Bikta hai-------

# Explore all the ways of writing CSS?

- There are three ways to add styling in CSS
- By defining classes and writing css in index.css file
- Using Sass and Scss
- Styled Components (Preferred for react)
- Using libraries and framework - MaterialUI, AntDesign, Bootstrap,
- ChakraUI, BaseUI, etc.
- Tailwind CSS

-

# How do we configure Tailwind CSS?

- We need to run the following command to install tailwind in Parcel. - npm install -D tailwindcss postcss - npx tailwindcss init

  - Npx command generates a tailwind.config.js config file in the project.
  - We also need to create a configuration file called .postcssrc in the root folder. Then we need to add this code in .postcssrc file.
    {
    "plugins": {
    "tailwindcss": {}
    }
    }

  - We do all of this to make parcel understand the tailwind css code in our app.
  - Then we need to change the content of the tailwind.config.js file Content takes an array which contains in which type of files we can use tailwind. The below code says we can use tailwind in any of these file.
    content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    ],

- After that we need to add following code in index.css.
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
- To add styles using tailwind, we need to use classNames.

-

# In tailwind.config.js, what does all the keys mean (context, theme,extend, plugins)?

- In `tailwind.config.js`, various keys control different aspects of the Tailwind CSS configuration:

`theme`: Customize the default design system.
`extend`: Add or modify utility classes.
`plugins`: Enable and configure third-party plugins.
`purge`: Configure what CSS classes to remove in production.
`variants`: Control how utility classes respond to different states.
`corePlugins`: Enable or disable core plugins.
`future`: Enable or disable experimental features.

-

# Why do we have .postcssrc file?

- The `.postcssrc` (or `postcss.config.js`) file is used to
  configure PostCSS, a tool for processing CSS. You define which
  PostCSS plugins to use and their options in this file. It centralizes
  configuration, enables/disables features, and supports different
  environments, allowing you to customize CSS processing in your web
  projects.
