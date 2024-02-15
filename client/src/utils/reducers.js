import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
  TOGGLE_CART,
  SET_NOTIFICATION,
  CLEAR_NOTIFICATION,
  DECREASE_QUANTITY,
} from "./actions";

const initialState = {
  cart: [],
  cartOpen: false,
  notification: "",
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log("Adding to cart:", action.payload);
      const existingIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log("Existing index:", existingIndex);
      if (existingIndex >= 0) {
        const cartCopy = [...state.cart];
        cartCopy[existingIndex] = {
          ...cartCopy[existingIndex],
          quantity: cartCopy[existingIndex].quantity + 1,
        };
        console.log("Updated cart copy for existing item:", cartCopy);
        return { ...state, cartOpen: true, cart: cartCopy };
      } else {
        const newCart = [...state.cart, action.payload];
        console.log("Updated cart copy with new item:", newCart);
        return { ...state, cartOpen: true, cart: newCart };
      }
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case DECREASE_QUANTITY: {
      const index = state.cart.findIndex(
        (item) => item._id === action.payload.id
      );
      if (index !== -1) {
        const newCart = [...state.cart];
        newCart[index].quantity -= 1;

        if (newCart[index].quantity <= 0) {
          newCart.splice(index, 1);
        }

        console.log("Updated cart:", newCart);

        return { ...state, cart: newCart };
      }
      console.log("Item not found in cart:", action.payload.id);
      return state;
    }
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
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
