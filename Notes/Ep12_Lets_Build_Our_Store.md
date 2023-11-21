# ---------- Assignment 12: let’s build our store ----

# Difference between useContext and Redux?

- useContext is the inbuilt function provided by React to access the React Context API. Redux is a centralized store which is an external library which can be integrated in the React app. React Context is used for centralizing various values which need to be accessed by multiple
  components and store the same in the context. Redux is the centralized
  store in which all the values are stored and the components can access
  the values by using selector and change the value using reducer
  function. - useContext is used in React apps which doesn’t not have too much complex data management and the data access and modification is not much frequent between components. So for smaller applications, useContext is the ideal choice.

          - Redux is preferred for large applications where data is being accessed by many components and the data modification is very frequent. For larger application, Redux is preferred for data management.

-

# Advantages of using Redux Toolkit over Redux?

- : Redux Toolkit has many advantages over Redux. It is easier to write code in Redux Toolkit compared to vanilla Redux (old Redux). The advantages of using Redux Toolkit over Redux are as follows:

  - It is easier to set up and requires fewer dependencies
  - Reduces boilerplate code by allowing the creation of a single file known as "slice" that combines actions and reducers.
  - Provides sensible defaults for commonly used features, such as Redux Thunk and Redux DevTools. This means that you don't have to spend time configuring these features yourself, as they are already built into Redux Toolkit.
  - It uses the immer library under the hood, which enables direct state mutation and eliminates the need for manually copying the state {...state} with every reducer.

-

# What is Dispatcher?

- We cannot directly modify the Slice. For this we need something called Dispatcher.

  When an action takes place to modify the Slices

  - First, it Dispatches an ACTION
  - Then, this action, calls a FUNCTION (Known as a Reducer)
  - Finally, the reducer function will modify the Slice of a Redux store

So, dispatcher can be explained as an Action That calls a function called “Reducer” which modifies the Slice.
For example, if we consider the cart functionality, adding data to cart, deleting data from cart or updating the data in the cart are the different actions. These actions will dispatch an action which calls the function known as reducer function to modify the cart

-

# Explain Reducer

- Reducer is a JavaScript function that specifies how an application's
  state should change in response to dispatched actions.
- It takes the current state and an action as input and returns a new state based on that action.
- Reducers ensure a predictable and immutable way to manage state
  changes.

-

# Explain Slice:

- A slice is a Logical Portion of a Redux Store. As we know, redux store is a very big object that stores lot of data. We do slices to manage this data in a simple way. For example:-

  - All the data related to a cart functionality can be stored in a slice say cartSlice.
  - All the data related to a logged in user can be stored in a slice called loggedinUserSlice
  - Data related to a Theme can be kept in a slice say themeSlice.

Slices help us to manage the data in the redux store very comfortably with out any confusion.
As explained above, if any action related to the cart would be done in cartSlice, any action related to the logged in user will be done in loggedinUserSlice and so on.

-

# Explain Selector:

- Selector is a named hook provided by “react-redux”, used to read the data from a slice. We use useSelector to read the data from a slice.

- The phenomenon of using the Selector to read the data from the slice is know as “Subscring to the store”.

  Let’s see the steps to read the data from a slice say cartSlice.

  - import { useSelector} from “react-redux”;
  - //Subscribing the header to our appStore using selector
    const cartItems = useSelector((store) => store.cart.items);
    where, store is an object, cart is the name given in the cartSlice and the items are the initialState values given So, store.cart.items will get me all the cart values.
  - THEN, cartItems.length will give me the number of items present in the cart.

  -

# Explain the createSlice and the configuration it takes.

- `createSlice`- is a function provided by redux-toolkit which takes few configurations to create a slice in the redux store.

- `name (string)`: A required string that provides a name for your slice. This name will be used to generate action types and can help with debugging.

- `initialState (any)`: The initial state for your slice. This is the starting point for your state management.

- `reducers (object)`: An object containing reducer functions. Each
  property represents a specific action that can be dispatched, and the
  associated value is the reducer function responsible for updating the
  state in response to that action.

- `slice.actions`: An object containing automatically generated action
  creators. These action creators correspond to the reducers defined in
  the `reducers` object.

- `slice.reducer`: The combined reducer function that manages the state
  for your slice. You can export and use this reducer directly when creating
  your Redux store.

- `extraReducers (object, optional)`: An object containing additional
  reducer functions that can handle actions dispatched by other slices.
  This is often used for handling actions from async operations or other
  slices.

- `slice.caseReducers (object, optional)`: An alternative way to define
  reducers within the `createSlice` function. This is provided for advanced
  use cases and is typically not needed for most applications.

- `Example`:

  ```javascript
  import { createSlice } from "@reduxjs/toolkit";
  const counterSlice = createSlice({
    name: "counter", // Slice name
    initialState: { count: 0 }, // Initial state
    reducers: {
      increment: (state) => {
        state.count += 1;
      },
      decrement: (state) => {
        state.count -= 1;
      },
    }, // Reducer functions
  });
  export const { increment, decrement } = counterSlice.actions;
  export default counterSlice.reducer;
  ```

- In this example, createSlice configures a slice named 'counter' with
  initial state and reducer functions for increment and decrement actions.
  The slice.actions object contains action creators, and slice.reducer is
  the combined reducer for the slice.
