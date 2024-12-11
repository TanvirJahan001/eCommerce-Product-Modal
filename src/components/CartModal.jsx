import React from "react";

const CartModal = ({ cart, onClose }) => {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl">
        <div className="bg-white text-slate-700 p-4 flex justify-between items-center rounded-t-lg">
          <h2 className="text-2xl font-medium">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700"
          >
            <svg
              className="h-6 w-6"
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

        <div className="p-6">
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
                {/* Empty space for alignment */}
                <td className="py-4 text-center font-bold text-slate-700">
                  {totalQty}
                </td>
                <td className="py-4 text-center font-bold text-slate-700">
                  ${totalPrice.toFixed(2)}
                </td>
                <td className="py-4"></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="bg-white p-4 flex justify-end rounded-b-lg">
          <button
            onClick={onClose}
            className="bg-white text-slate-700 font-bold border border-zinc-200 px-4 py-2 rounded hover:bg-zinc-200 mr-2"
          >
            Continue Shopping
          </button>
          <button className="bg-indigo-500 text-white font-bold px-4 py-2 rounded hover:bg-indigo-600">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
