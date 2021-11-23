import { configureStore } from "@reduxjs/toolkit";
import millitaryReducer from "./reducers/millitaryReducer";

export const store = configureStore({
  reducer: {
    millitarys: millitaryReducer,
  },
});
