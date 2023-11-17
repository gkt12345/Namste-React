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
