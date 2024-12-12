import React from "react";

const CartModal = ({ cart = [], onClose }) => {
  
  const totalPrice = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
    0
  );
  const totalQty = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  // If cart is empty, show an empty state
  if (cart.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 p-4 overflow-y-auto">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-auto p-6 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h2 className="text-xl font-medium text-slate-700 mb-2">
            Your cart is empty
          </h2>
          <p className="text-slate-500 mb-4">
            Looks like you haven't added any items to your cart yet.
          </p>
          <button
            onClick={onClose}
            className="bg-indigo-500 text-white font-bold px-4 py-2 rounded hover:bg-indigo-600"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-auto">
        {/* Modal Header */}
        <div className="bg-white text-slate-700 p-4 flex justify-between items-center rounded-t-lg">
          <h2 className="text-xl md:text-2xl font-medium">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700"
          >
            <svg
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Cart Content */}
        <div className="p-4 md:p-6">
          {/* Desktop Table */}
          <div className="hidden md:block">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white text-slate-400 font-normal">
                  <th className="py-2 px-4 text-left">Item</th>
                  <th className="py-2 px-4 text-center">Color</th>
                  <th className="py-2 px-4 text-center">Size</th>
                  <th className="py-2 px-4 text-center">Qty</th>
                  <th className="py-2 px-4 text-center">Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4 px-4 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 mr-4 rounded"
                      />
                      <span className="font-medium text-slate-700">
                        {item.name}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">{item.color}</td>
                    <td className="py-4 px-4 text-center">{item.size}</td>
                    <td className="py-4 px-4 text-center">{item.quantity}</td>
                    <td className="py-4 px-4 text-center">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-gray-200">
                  <td className="text-neutral-700 font-bold py-4 px-4 flex items-center">
                    Total
                  </td>
                  <td colSpan={2} className="py-3"></td>
                  <td className="py-4 text-center font-bold text-slate-700">
                    {totalQty}
                  </td>
                  <td className="py-4 text-center font-bold text-slate-700">
                    ${totalPrice.toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white border-b py-4 flex items-center space-x-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded"
                />
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-slate-700 text-base">
                        {item.name}
                      </h3>
                      <div className="text-sm text-slate-500 space-x-2">
                        <span>{item.color}</span>
                        <span>•</span>
                        <span>{item.size}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-slate-700">
                        ${((item.price || 0) * (item.quantity || 0)).toFixed(2)}
                      </div>
                      <div className="text-sm text-slate-500">
                        Qty: {item.quantity || 0}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Mobile Total */}
            <div className="mt-4 flex justify-between items-center">
              <span className="font-bold text-lg">Total</span>
              <div className="text-right">
                <div className="font-bold text-slate-700 text-lg">
                  ${totalPrice.toFixed(2)}
                </div>
                <div className="text-sm text-slate-500">{totalQty} Items</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-white p-4 flex flex-col md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-2 rounded-b-lg">
          <button
            onClick={onClose}
            className="w-full md:w-auto bg-white text-slate-700 font-bold border border-zinc-200 px-4 py-2 rounded hover:bg-zinc-200"
          >
            Continue Shopping
          </button>
          <button className="w-full md:w-auto bg-indigo-500 text-white font-bold px-4 py-2 rounded hover:bg-indigo-600">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

// Default Props
CartModal.defaultProps = {
  cart: [],
  onClose: () => {},
};

export default CartModal;
