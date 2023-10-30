# export and import component default

    export default Component;
    import Component from "file path Where from export";

# export and import naming convencial

    export const name = {}
    import {name} from "file path Where from export";

# basically we use default for one component and naming convencial use for more than one.

# In simple words:

- -Functional Component is normal JS function at the end of the day,
  React Eleemnt is plane JS Object

# React Hooks

React Hook is also a JS function which is given to us by React. these are normal utility JS functions

- useState() - Superpowerful State Variable in react. it has first state as a variable and 2nd as function which is for update state.

# Whenever a State VAribale change React will rerender the component.

# Reconcilation Algorithm (React Fiber):

- Vertual DOM: is a reapresention of actual Dom.
- it is nested object
- this diff algorith find out the difference old Vertual DOM and new vertual DOM.
