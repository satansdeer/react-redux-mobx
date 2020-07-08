import React from "react";
import { useStores } from "./StoresProvider";
import { useObserver } from "mobx-react-lite";

export const OrdersList = () => {
  const { ordersStore } = useStores();

  return useObserver(() => {
    const { orders } = ordersStore;

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
          {
            orders.map((order, i) => {
              return <tr>
                <td>{order.drink.displayName}</td>
                <td>{order.burger.displayName}</td>
                <td>${order.totalPrice}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    );
  });
};
