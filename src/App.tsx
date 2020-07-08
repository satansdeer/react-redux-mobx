import React from "react";
import "./App.css";
import { OrderForm } from "./OrderForm";
import { OrdersList } from "./OrdersList";

function App() {
  return (
    <>
      <OrdersList />
      <OrderForm />
    </>
  );
}

export default App;
