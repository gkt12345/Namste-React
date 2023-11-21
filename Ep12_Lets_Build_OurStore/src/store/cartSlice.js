import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      //   console.log(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.indexOf(action.payload);
      state.items.splice(index, 1);
      //   console.log(index);
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

// const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         products:[],
//         quantity:0,
//         total:0
//     },
//     reducers:{
//         addProduct: (state, action) => {
//             state.quantity += 1;
//             state.products.push(action.payload);
//             state.total += action.payload.price * action.payload.quantity;
//         },
//         removeProduct: (state, action) => {
//             let index = state.products.indexOf(action.payload);
//             state.quantity -= action.payload
//             state.products.splice(index, 1)
//         }
//     },
// });
