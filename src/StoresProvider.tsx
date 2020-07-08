import React, { PropsWithChildren } from "react";
import { ProductsStore } from "./ProductsStore";
import { OrdersStore } from "./OrdersStore";

type StoresContextValue = {
  productsStore: ProductsStore;
  ordersStore: OrdersStore;
};

const StoresContext = React.createContext<StoresContextValue>(
  {} as StoresContextValue
);

export const StoresProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const productsStore = new ProductsStore();
  const ordersStore = new OrdersStore(productsStore);
  return (
    <StoresContext.Provider value={{ productsStore, ordersStore }}>
      {children}
    </StoresContext.Provider>
  );
};

export const useStores = () => React.useContext(StoresContext)
