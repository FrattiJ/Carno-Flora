import React, { useEffect } from "react";
import { useCartContext } from "../utils/GlobalState";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CART } from "../utils/queries";
import { loadStripe } from "@stripe/stripe-js";
import Placeholder from "../assets/plant.jpg";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

export default function Cart() {
  const { state, dispatch } = useCartContext();
  const { cart } = state;
  const [getCart, { data }] = useLazyQuery(QUERY_CART);

  useEffect(() => {
    if (data) {
      stripePromise.then((stripe) => {
        stripe.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleDecreaseQuantity = (_id) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: { id: _id },
    });
  };

  const checkout = () => {
    console.log(state);
    getCart({
      variables: {
        Items: cart.map(({ _id, quantity }) => ({ id: _id, quantity })),
      },
    });
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      {" "}
      <div>
        <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cart.map((item, index) => (
            <div
              key={`${item._id}-${index}`}
              className="flex flex-col border border-neutral-200 rounded p-4 bg-[#A3B18A]"
            >
              <img
                src={item.image || Placeholder}
                alt={item.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <div className="flex-grow">
                {" "}
                {/* This ensures that buttons align at the bottom */}
                <p className="text-lg font-semibold mb-2">{item.name}</p>
                <p className="text-gray-600">${item.price}</p>
                <p className="text-gray-600 mb-4">Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => handleDecreaseQuantity(item._id)}
                className="self-start bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200 text-sm"
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="sticky bottom-0 bg-white p-4">
        {" "}
        {/* Sticky footer with a white background */}
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">
            Total Price: ${totalPrice.toFixed(2)}
          </p>
          <button
            onClick={checkout}
            className="bg-[#588157] text-white px-6 py-3 rounded hover:bg-[#3A5A40] transition-colors duration-200"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
