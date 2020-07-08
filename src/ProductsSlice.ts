import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./types";
import { getDrinks, getBurgers } from "./api";
import { AppThunk } from "./store";
const initialState: {
  drinks: Product[],
  burgers: Product[],
  isLoading: boolean
} = {
  drinks: [],
  burgers: [],
  isLoading: true
}

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setDrinks: (state, action: PayloadAction<Product[]>) => {
      state.drinks = action.payload;
    },
    setBurgers: (state, action: PayloadAction<Product[]>) => {
      state.burgers = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  } 
})

export default slice.reducer;

const { setDrinks, setBurgers, setIsLoading} = slice.actions;

export const fetchProducts = (): AppThunk => async (dispatch) => {
  const drinks = await getDrinks();
  const burgers = await getBurgers();
  dispatch(setDrinks(drinks))
  dispatch(setBurgers(burgers))
  dispatch(setIsLoading(false))
}
