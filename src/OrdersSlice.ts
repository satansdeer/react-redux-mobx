import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./types";
import { AppThunk } from "./store";

type Order = {
  drink: Product,
  burger: Product,
  totalPrice: number
}

const initialState: Order[] = []

const slice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.push(action.payload)
    }
  }
})

const {addOrder} = slice.actions;

export default slice.reducer

export const submitOrder = (drinkName: string, burgerName: string): AppThunk => (dispatch, getState) => {
  const { products } = getState()
  const drink = products.drinks.find(d => d.name === drinkName) 
  const burger = products.burgers.find(d => d.name === burgerName) 

  if(!drink || !burger){
    return
  }

  const totalPrice = drink.price + burger.price;

  const order = {
    drink,
    burger,
    totalPrice
  }

  dispatch(addOrder(order))
}