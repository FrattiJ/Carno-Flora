export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const ADD_TO_CART = "ADD_TO_CART";
export const CLEAR_CART = "CLEAR_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const TOGGLE_CART = "TOGGLE_CART";
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";
export const SET_NOTIFICATION = "SET_NOTIFICATION";
export const CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION";
