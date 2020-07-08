import { Product } from "./types";

export const getDrinks = async ():Promise<Product[]> => ([
  {name: "cola", displayName: "Cola", price: 2},
  {name: "water", displayName: "Water", price: 1},
  {name: "lemon", displayName: "Lemon Juice", price: 2}
])

export const getBurgers = async ():Promise<Product[]> => ([
  {name: "beef", displayName: "Beef Burger", price: 5},
  {name: "chicken", displayName: "Chicken Burger", price: 4},
  {name: "vegan", displayName: "Vegan Burger", price: 4}
])