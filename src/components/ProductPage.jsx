import React, { useState } from "react";
import blueImage from "../images/blue.png";
import tealImage from "../images/teal.png";
import violetImage from "../images/violet.png";
import zincImage from "../images/zinc.png";
import CartModal from "./CartModal"; // Import your CartModal component

const ProductPage = () => {
  const [quantity, setQuantity] = useState(0);
  const [isLoved, setIsLoved] = useState(false);
  const [selectedColor, setSelectedColor] = useState("Violet");
  const [selectedSize, setSelectedSize] = useState({ size: "S", price: 69 });
  const [cart, setCart] = useState([]);
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0); // New state to track total items in cart

  const sizeOptions = [
    { size: "S", price: 69 },
    { size: "M", price: 79 },
    { size: "L", price: 89 },
    { size: "XL", price: 99 },
  ];

  const images = {
    Violet: violetImage,
    Teal: tealImage,
    Blue: blueImage,

    Zinc: zincImage,
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const toggleLove = () => {
    setIsLoved(!isLoved);
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize || quantity === 0) {
      alert("Please select color, size, and quantity.");
      return;
    }

    // Add item to cart
    const newItem = {
      id: Date.now(),
      name: "Classy Modern Smart Watch",
      color: selectedColor,
      size: selectedSize.size,
      price: selectedSize.price,
      quantity: quantity,
      image: images[selectedColor],
    };

    setCart([...cart, newItem]);
    setCartItemCount(cartItemCount + quantity); // Update total count
    setQuantity(0);
  };

  const handleCheckout = () => {
    setIsCartModalVisible(true);
  };

  const closeCartModal = () => {
    setIsCartModalVisible(false);
  };

  const removeItemFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    setCartItemCount(
      cartItemCount - updatedCart.find((item) => item.id === id).quantity
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white p-4">
      {/* Product Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto bg-white">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={images[selectedColor]}
            alt={`Product in ${selectedColor}`}
            className="h-[521px] w-[430px] mt-2"
          />
        </div>
        {/* Details Section */}
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold">Classy Modern Smart Watch</h1>
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400">
              {"⭐".repeat(4)}
              {"☆"}
            </div>
            <span className="text-slate-400 text-sm">(2 Reviews)</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-slate-400 line-through">$99.00</span>
            <span className="text-2xl font-bold text-indigo-500">$79.00</span>
          </div>
          <p className="text-slate-400 text-lg">
            I must explain to you how all this mistaken idea of denouncing
            pleasure was born and I will give you a complete account of the
            system and expound the actual teaching.
          </p>
          <div className="flex items-center space-x-2 gap-8">
            <div>
              <h3 className="text-slate-400 font-normal">Type</h3>
              <h1 className="text-slate-700 font-bold">Watch</h1>
            </div>
            <div>
              <h3 className="text-slate-400 font-normal">Model Number</h3>
              <h1 className="text-slate-700 font-bold">Forerunner 290XT</h1>
            </div>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Band Color:</h3>
            <div className="flex space-x-2 mt-2">
              {Object.keys(images).map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 ${
                    color === "Violet"
                      ? "bg-violet-500"
                      : color === "Teal"
                      ? "bg-teal-400"
                      : color === "Blue"
                      ? "bg-blue-500"
                      : "bg-zinc-700"
                  } rounded-full ${
                    selectedColor === color
                      ? `ring-2 ring-offset-2 ${
                          color === "Violet"
                            ? "ring-violet-500"
                            : color === "Teal"
                            ? "ring-teal-400"
                            : color === "Blue"
                            ? "ring-blue-500"
                            : "ring-zinc-700"
                        }`
                      : ""
                  }`}
                ></button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Wrist Size</h3>
            <div className="flex space-x-4 mt-2">
              {sizeOptions.map(({ size, price }) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize({ size, price })}
                  className={`flex gap-2 items-center justify-center px-4 py-2 border rounded-lg hover:bg-gray-200 ${
                    selectedSize.size === size ? "bg-gray-300" : ""
                  }`}
                >
                  <span
                    className={`text-lg font-bold ${
                      selectedSize.size === size
                        ? "text-indigo-500"
                        : "text-slate-700"
                    }`}
                  >
                    {size}
                  </span>
                  <span className="text-sm text-gray-500">${price}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <div className="flex items-center space-x-2 border border-gray-300 rounded-md">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-2 text-slate-400 hover:text-slate-400 rounded-l-md"
              >
                -
              </button>
              <span className="px-6 py-2 text-slate-700 border-x border-gray-300">
                {quantity}
              </span>
              <button
                onClick={increaseQuantity}
                className="px-3 py-2 text-slate-400 hover:text-slate-600 rounded-r-md"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className={`px-6 py-3 rounded-lg shadow-lg ${
                quantity > 0 && selectedColor && selectedSize
                  ? "bg-indigo-500 text-white hover:bg-indigo-700"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              Add to Cart
            </button>
            <button
              onClick={toggleLove}
              className={`w-10 h-10 flex justify-center items-center rounded-full hover:shadow-lg transition-colors duration-300 ${
                isLoved
                  ? "bg-red-500 text-white"
                  : "bg-transparent text-indigo-500 border border-transparent hover:text-red-500 hover:border-red-500"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {cart.length > 0 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleCheckout}
            className="px-6 py-2 text-lg font-semibold bg-orange-300 text-slate-700 rounded-full shadow-lg hover:bg-orange-600 flex items-center justify-center"
          >
            Checkout
            <span className="ml-2 text-lg font-bold bg-white text-slate-700 px-3 py-1 rounded-lg">
              {cartItemCount}
            </span>
          </button>
        </div>
      )}
      {isCartModalVisible && (
        <CartModal
          cart={cart}
          onClose={closeCartModal}
          removeItem={removeItemFromCart}
        />
      )}
    </div>
  );
};

export default ProductPage;
