# Is `JSX` mandatory for React?

- No `JSX` is not mandatory for React, we can create React using React.createElement but to avoid complexity for large scale applications we use .

# Is ES6 mandatory for React?

- No, ES6 is not mandatory for React. We can use the older JS version and concepts like funtion keyword and others to write code for REact.

# How can i write Comments in JSX?

- use {} or /\* \*/

# What is `<React.Fragment></React.Fragment>` and `{<></>}`?

- Both are same. When we don't want to add another container or wrapper in the DOM we use fragments. They are used to group elemenets together without affecting DOM. This is useful when we have to render multiple child components in a single parent component.

# What is Virtual DOM?

- Virtual DOM is a lightweight copy of an actual DOM. It is used by react to optimize the performance of the app by only changing the nodes which are necessary in actual DOM insted of rerendering whole DOM.

# What is Reconciliation in React?

- Reconciliation is a process where react compares the state of previous virtual DOM with the new virtual DOM and then it updates only the part in original DOM where the state has been changed. React becomes faster because of `Reconciliation`.

# What is `React Fiber`?

- Fiber Reconcilier is the new reconciliation algorithm in React.

# Why do we need keys in `React`?

- `Keys` are used when we render a list. Suppose we have a list of cards without keys and we have changed the state of few cards. Changing the background color, it will reorder those cards. Since cards does not have keys, React will treat them same and after reordering it will change the state of other cards.

# Can we use index as `keys`?

- Yes we can use but it is bad practise. React recommends that we do not use index as key since it could impact performance negatively and could lead to some unstable component behavior.

# What are `props` in React?

- `Props` are properties that a functional component accepts. They are being passed from parent to child components. Props are the means of passing data from one componet to another.

# What is `Config Driven UI`?

- Controlling UI based on data given by backend APIs is known as `Config Driven UI`. So we render component based on the config data.
