import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meal: null,
  topPicks: null,
};

export const mealSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {
    setMeal: (state, action) => {
      state.meal = action.payload;
    },
    setTopPicks: (state, action) => {
      state.topPicks = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMeal, setTopPicks } = mealSlice.actions;

export const selectMeal = (state) => state.meal.meal;
export const selectTopPicks = (state) => state.meal.topPicks

export default mealSlice.reducer;
