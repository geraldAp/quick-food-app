import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../components/constants/dummyData";

const initialState = {
  meal: null,
  topPicks: null,
  favoriteMeals: [],
  categoryMeals: [],
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
    setCategoryMeals: (state, action) => {
      state.categoryMeals = action.payload;
    },
    addFavoriteMeals: (state, action) => {
      state.favoriteMeals = [...state.favoriteMeals, action.payload];
    },
    deleteFavoriteMeal: (state, action) => {
      const { id } = action.payload;
      const newFavoriteMeals = state.favoriteMeals.filter(
        (meal) => meal._id !== id
      );
      state.favoriteMeals = newFavoriteMeals;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMeal, setTopPicks, deleteFavoriteMeal, addFavoriteMeals } =
  mealSlice.actions;

export const selectMeal = (state) => state.meal.meal;
export const selectTopPicks = (state) => state.meal.topPicks;
export const selectFavoriteMeals = (state) => state.meal.favoriteMeals;

export default mealSlice.reducer;
