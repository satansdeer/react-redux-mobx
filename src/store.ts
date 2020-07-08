import {configureStore, combineReducers, ThunkAction, Action} from '@reduxjs/toolkit'
import products from "./ProductsSlice";
import orders from "./OrdersSlice";

export const store = configureStore({reducer: combineReducers({
  products,
  orders
})})

export type RootState = {
  products: ReturnType<typeof products>,
  orders: ReturnType<typeof orders>
}

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>