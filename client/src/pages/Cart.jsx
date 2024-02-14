import React from "react";
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
    <div className="max-w-4xl mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {cart.map((item) => (
          <div key={item._id} className="flex border border-neutral-200 rounded p-4 bg-[#A3B18A]">
            <img src={item.image || Placeholder} alt={item.name} className="w-48 h-48 object-cover rounded mr-4" />
            <div>
              <p className="text-lg font-semibold mb-2">{item.name}</p>
              <p className="text-gray-600">${item.price}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-8">
        <p className="text-xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</p>
        {/* Display Tax and Shipping if applicable */}
        {/* <form action="">{Payment Form/Stripe}</form> */}
        <button className="bg-[#588157] text-white px-4 py-2 rounded hover:bg-[#3A5A40]">Checkout</button>
      </div>
    </div>
  );
}
