import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";

const stroe = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
  },
});

export default stroe;
