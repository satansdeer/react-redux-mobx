import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { submitOrder } from "./OrdersSlice";
import { RootState } from "./store";
import { fetchProducts } from "./ProductsSlice";

export const OrderForm = () => {
  const dispatch = useDispatch();
  const { isLoading, drinks, burgers } = useSelector<
    RootState,
    RootState["products"]
  >((state) => state.products);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const onSubmit = handleSubmit((data) => {
    dispatch(submitOrder(data.drink, data.burger));
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend>Make an order</legend>
        <label htmlFor="drink">Drink</label>
        <select ref={register} id="drink" name="drink">
          {drinks.map((drink) => (
            <option key={drink.name} value={drink.name}>
              {drink.displayName} - ${drink.price}
            </option>
          ))}
        </select>
        <label htmlFor="burger">Burger</label>
        <select ref={register} id="burger" name="burger">
          {burgers.map((burger) => (
            <option key={burger.name} value={burger.name}>
              {burger.displayName} - ${burger.price}
            </option>
          ))}
        </select>
        <button>Submit</button>
      </fieldset>
    </form>
  );
};
