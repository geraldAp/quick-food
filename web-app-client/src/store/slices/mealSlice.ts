import { Meal } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
meals : Meal[] | null
topPicks: Meal[] | null
favoriteMeals: Meal[]
categoryMeals: Meal[]
}

const initialState : InitialState = {
  meals: null,
  topPicks: null,
  favoriteMeals: [],
  categoryMeals: [],
};

export const mealSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {
    setMeal: (state, action) => {
      state.meals = action.payload;
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


  export type RootState = {
    meal: InitialState;
  };

export const selectMeal = (state : RootState) => state.meal.meals;
export const selectTopPicks = (state : RootState) => state.meal.topPicks;
export const selectFavoriteMeals = (state: RootState) => state.meal.favoriteMeals;

export default mealSlice.reducer;
