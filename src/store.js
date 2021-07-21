import { configureStore } from "@reduxjs/toolkit";
import counter from './slices/counter';
import user from "./slices/user";

export const store = configureStore({
  reducer: { 
    counter,
    user,
  },
});
