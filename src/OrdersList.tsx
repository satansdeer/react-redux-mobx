import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export const OrdersList = () => {
  const orders = useSelector<RootState, RootState["orders"]>(
    (state) => state.orders
  );

  if (!orders.length) {
    return <p>No orders</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Drink</th>
          <th>Burger</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, i) => {
          return (
            <tr>
              <td>{order.drink.displayName}</td>
              <td>{order.burger.displayName}</td>
              <td>${order.totalPrice}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
