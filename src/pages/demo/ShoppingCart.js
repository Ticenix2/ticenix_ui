import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone 13 Pro",
      price: 999,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      price: 799,
      quantity: 2,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Google Pixel 6",
      price: 599,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Alışveriş Sepetim
      </h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border-b"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300"
              >
                -
              </button>
              <span className="mx-3 text-gray-800">{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300"
              >
                +
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="ml-6 text-red-500 hover:text-red-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Toplam:</h2>
            <span className="text-xl font-bold text-gray-800">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
          <Link to="/demo/checkout">
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Satın Al
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
