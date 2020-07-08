import { observable, action } from "mobx";
import { Product } from "./types";
import { ProductsStore } from "./ProductsStore";

type Order = {
  drink: Product
  burger: Product
  totalPrice: number
}

export class OrdersStore {
  @observable orders: Order[] = []

  constructor(private productsStore: ProductsStore){}

  @action
  addOrder = (drinkName:string, burgerName:string) => {
    const drink = this.productsStore.drinks.find(d => d.name === drinkName)
    const burger = this.productsStore.burgers.find(b => b.name === burgerName)
    if(!drink || !burger){
      return
    }
    const totalPrice = drink.price + burger.price;

    this.orders.push({
      drink,
      burger,
      totalPrice
    })
  }
}