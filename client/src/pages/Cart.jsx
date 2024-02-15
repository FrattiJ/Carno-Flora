import React from "react";
import { useCartContext } from "../utils/GlobalState";
import { useLazyQuery } from '@apollo/client';
import { QUERY_CART } from '../utils/queries';
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Auth from '../utils/auth';


const stripe = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');



import Placeholder from "../assets/plant.jpg";

export default function Cart() {
  const { state } = useCartContext();
  const { cart } = state;
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const [getCart, { data }] = useLazyQuery(QUERY_CART);
  useEffect(() => {
    console.log("useEffect")
    if (data) {
      stripe.then((res) => {
        console.log(data)
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  function checkout() {
    console.log(state)
    getCart({
      variables: { 
        Items: [...state.cart],
      },
    });
  }


  return (
    <div className="max-w-4xl mx-auto px-4 py-8 h-dvh ">
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
        <button onClick={checkout} className="bg-[#588157] text-white px-4 py-2 rounded hover:bg-[#3A5A40]">Checkout</button>
      </div>
    </div>
  );
}
