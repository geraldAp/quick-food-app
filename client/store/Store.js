import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import mealSlice from "./slices/mealSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    meal: mealSlice,
  },
});
