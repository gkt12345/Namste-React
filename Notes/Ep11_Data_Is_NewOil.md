# ------ EP11 DATA IS THE NEW OIL ----------

-

# What is props Drilling?

- The process of passing the data / props to the child component to the nth Level through intermediate components is called prop drilling.

-

# What is lifting the state up?

- Lifting the state up basiclly refer to the process in which the control from the child component is taken away and given to the parent,
  In other words, It's the process of moving the state from a lower-level(child) component to a higher-level(parent) component in the component tree to make the state accessible to multiple child components.

It can be explained in more detailed way as follows.
`Local Component State: ` In React, each component can have it's own local state. This is isolated to the component and isn't automatically shared with other components.
`Lifting state up: ` When you lift the state up you move the state from child component to a common ancestor (usally a praent) of the components that need access to the state.
`Props: `Once the state is moved to the higher-level component, you can pass down the state data as props to the child components that need it. Child components can then update this state by calling functions provided by the parent component.

-

# What is Context Provider & Context Consumer?

- First of all, let us know what is a Context in order to understand the Context Provider & Context Consumer in a better way

A Context in React is the feature which allows you to share data between components, without even passing the props to them.

This is the solution to the “prop drilling” concept of react, in which we have to pass the props between components in order to share the information to the deeper components in the component tree.

`Context Provider`: The Context Provider is a component that provides the data you want to share to its child components.
It is defined using the createContext function provided by React.

```javascript
import {createContext} from 'React';
const UserContext = createContext({
	firstName: "Nandini",
	lastName: "Hulsurkar",
	gender: "Female",
});
<UserContext.Provider value={firstName:"Nandu", lastName:"Malgar"} >
	{/* Components that can consume the context data */}
<UserContext.Provider />
```

The Provider has a value prop, which is used to pass the data you want to share with its child components.

Context Consumer: The Context Consumer is a component that can access the data provided by a Context Provider. Any change made in the value will re-render the component to make the changes in all the child components which are accessing it.

# If you don’t pass the value to the provider, does it take a default value?

- YES. Until we pass any data in value, it will take the default values which are created in the Context.
