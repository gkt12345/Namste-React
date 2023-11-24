# Redux:-

        - It is a global store (big object), where we kept data in slices.
        - And we can not add data directally to slices :-
                1. Dispatch action
                2. It call the function (Reducer).
                3. and function modify the slices of the redux store.
        Eg. Supose we have add item to cart, than we click on add button it dispatch action it call the reducer function and function update the slices (cart).
        - We will use `Selector` to read the data. this finomina is known as subscribe the store.

---

# Redux Toolkit:-

    - Install @reduxjs/toolkit and react-redux
    - Build our store
    - Connect our store to our app
    - Slice (cartSlice)
    - Dispatch(action)
    - Selector

--

# Create Store:-

        - Create a new file
        - import {configureStore} from @reduxjs/toolkit
        - const appStore = configureStore({});

# Provide to our App:-

        - Import {Provider} from react-redux
        - Wrap our app or portion with Provider which needed.
        - <Provider store={appStore}> <App/> <Provider>

# Create Slice:-

        - create a file with slice name
        - import {createSlice} from @reduxjs/toolkit
        - const nameSlice = createSlice({});

-
-
-
-
-

# Ep 13- Time for Test:

# Types of Testing (Devloper)

- Unit Testing :- testing a component
- Intregation Testing :-
- End to End Testing - e2e testing :- Whole app from scratch

-

# --- Setting up Testing in our App

- React (or Dom) testing library for Testing. and this library uses jest. and this jest uses `babel` inside it.
  : That's why we need to install these dependency in our app:-

  - `npm i -D @testing-library/react`
  - `npm i -D jest`
  - `npm i -D babel-jest @babel/core @babel/preset-env`

  - Create a `babel.config.js` and configure it:
  - module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
    };

  - Now our parcel app also uses babel and our `babel.config.js` overwrtie it to avoid it we need to disable parcel babel transpilation:
  - create a `.parcelrc` file and configure it:-

        ```javascript
            -{
                extends: "@parcel/config-default",
                transformers: {
                 "*.{js,mjs,jsx,cjs,ts,tsx}": [
                   "@parcel/transformer-js",
                    "@parcel/transformer-react-refresh-wrap",
                  ],
                },
            };
        ```

- check here `npm run test` if no error found it is ok.

- `Jest configration`:

  - `npx jest --init`: inislize new file jest
  - Question in terminal:-
    - like to use typescript - NO
    - Chose the envoironment - jsdom(browser-like)
    - add coverage report - yes
    - provide should use - babel
    - clear mock calls - yes

- `Install Jsdom library`: npm i -D jest-environment-jsdom

- `Install @babel/preset-react`: to make JSX work in test cases

  - npm i -D @babel/preset-react
  - include @babel/preset-react inside my babel configuration file: `["@babel/preset-react", {runtime: "automatic"}]`

- `Install @testing-library/jest-dom`: to make `toBeTheDocument()` like many functions work.
  - npm i -D @testing-library/jest-dom
