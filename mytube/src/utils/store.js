import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const stroe = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default stroe;
