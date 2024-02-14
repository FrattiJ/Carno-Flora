import React, { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "./reducers";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Initialize the cart state from local storage or an empty array if not found
  const userId = localStorage.getItem("userId"); // Get user ID from local storage
  const userCartKey = userId ? `cart_${userId}` : "cart";
  const initialState = {
    cart: JSON.parse(localStorage.getItem(userCartKey)) || [],
    cartOpen: false,
    notification: "",
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Save the cart to local storage whenever the cart state changes
  useEffect(() => {
    localStorage.setItem(userCartKey, JSON.stringify(state.cart));
  }, [state.cart, userCartKey]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { CartProvider, useCartContext };
