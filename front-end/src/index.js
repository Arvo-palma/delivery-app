// vitals
import React from "react";
import ReactDOM from "react-dom";

// components
import App from "./App";

// context
import Provider from './context/Provider'
import CartItemsProvider from './context/CartItemsProvider';

ReactDOM.render(
  <Provider>
    <CartItemsProvider>
      <App />
    </CartItemsProvider>
  </Provider>,
  document.getElementById("root")
);