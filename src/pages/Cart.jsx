import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";
import { FaDeleteLeft } from "react-icons/fa6";
import { BsTrash } from "react-icons/bs";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.cart);

  if (cart.length === 0) {
    return <p className="text-center text-gray-500 text-lg mt-10">Your cart is empty!</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain rounded-md"
                />
                <div className="flex-1 px-4">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => dispatch(decrementQuantity(item))}
                    className="bg-gray-200 px-2 py-1 rounded-md hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity(item))}
                    className="bg-gray-200 px-2 py-1 rounded-md hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <div className="text-right p-2 pt-3 cursor-pointer">
                  <button
                    onClick={() => dispatch(removeFromCart(item))}
                    className="text-red-500 hover:underline"
                  >
                    <BsTrash/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Checkout Summary Section */}
        <div className="p-4 border border-gray-200 rounded-lg shadow-md bg-gray-50">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p>Total Items:</p>
              <p>{totalQuantity}</p>
            </div>
            <div className="flex justify-between">
              <p>Total Price:</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
          </div>
          {/* <button
            onClick={() => dispatch(clearCart())}
            className="w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-red-600 transition"
          >
            Clear Cart
          </button> */}
          <button
          onClick={() => alert('Thankyou for checkout the Items')}
            className="w-full bg-blue-500 text-white py-2 rounded-md mt-2 hover:bg-blue-600 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
