# Episode 05 - Let's get Hooked!:

# What is the differense between Named Export, Default export and \*as export?

- `Named Export`: It can export multiple variables from one component. It will export variable or function by just adding export before the function or variable name. this is how we export and import:-
  -export const name = {}
  -import {name} from "file path Where from export";

- `Default Export`: It can export only one function or variable from one component. this is how we export and import:-

  - export default Component;
  - import Component from "file path Where from export";

- `*` as export: It can be used to export all the variables and functions from component,s

# What is the importance of config.js file

- Config.js allows developers to configure the values in React Applications instead of hardcoding the values inside components. it contain all the variables storing the hardcoded value such as URL, text ets.

# What are React Hooks?

- `React Hooks` are simple JS Utility functions that we can use to isolate the reusable part from the functional components.

# Why do we need a useState Hook?

- With Normal JS variables if normal variable changes it will not rerender the UI or DOM. Whereas `useState` is super powerful variables whenever there is change in variable it will rerender the component automatically. It allows us to have state variables in functional components
