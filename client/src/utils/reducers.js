import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
  TOGGLE_CART,
  SET_NOTIFICATION,
  CLEAR_NOTIFICATION,
} from "./actions";

const initialState = {
  cart: [],
  cartOpen: false,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
        cartOpen: false,
      };
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    case SET_NOTIFICATION:
      return {
        ...state,
        notification: action.payload,
      };
    case CLEAR_NOTIFICATION:
      return {
        ...state,
        notification: "",
      };
    default:
      return state;
  }
};
