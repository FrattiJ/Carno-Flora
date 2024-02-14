import React, { useEffect } from "react";
import { useCartContext } from "../utils/GlobalState";

import Placeholder from "../assets/plant.jpg";
export default function Cart() {
  const { state } = useCartContext();
  const { cart } = state;
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => (
        <div key={item._id}>
          <img src={item.image || Placeholder} alt={item.name} />
          <p>{item.name}</p>
          <p>${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      {/* Display Tax and Shipping if applicable */}
      {/* <form action="">{Payment Form/Stripe}</form>
      <button>Checkout</button> */}
    </div>
  );
}
