import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

import { useCart } from "../context/CartContext";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    totalPrice,
  } = useCart();

  /* WHATSAPP */
  const handleWhatsApp = () => {
    const phone = "916357123123";

    let message =
      "Hello GNV Jewellers,%0A%0AI want to order:%0A";

    cartItems.forEach((item, index) => {
      message += `%0A${index + 1}. ${item.name}`;
      message += `%0AQty: ${item.quantity}`;
      message += `%0APrice: ₹${item.price}`;
    });

    message += `%0A%0ATotal: ₹${totalPrice}`;

    window.open(
      `https://wa.me/${phone}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section className="min-h-screen bg-[#fdf8f0] px-4 md:px-10 py-8">

      {/* TOP BAR */}
      <div className="flex items-center justify-between mb-10">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 border border-black/20 px-5 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300"
        >
          <IoArrowBack className="text-lg" />
          Back
        </button>

        <h1 className="text-2xl md:text-4xl font-serif">
          Your Cart
        </h1>

        {/* EMPTY DIV FOR BALANCE */}
        <div className="w-[90px]" />

      </div>

      {/* EMPTY CART */}
      {cartItems.length === 0 ? (
        <div className="h-[60vh] flex flex-col items-center justify-center text-center">

          <h2 className="text-3xl font-serif mb-4">
            Your cart is empty
          </h2>

          <p className="text-gray-500 mb-8">
            Add some beautiful jewellery to continue shopping.
          </p>

          <button
            onClick={() => navigate("/")}
            className="bg-black text-white px-8 py-3 rounded-full hover:scale-105 transition-all duration-300"
          >
            Continue Shopping
          </button>

        </div>
      ) : (
        <>
          {/* CART ITEMS */}
          <div className="space-y-6">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-3xl p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between shadow-sm"
              >

                <div className="flex gap-4 md:gap-6 items-center">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover"
                    loading="lazy"
                  />

                  <div>

                    <h3 className="text-lg md:text-2xl font-medium">
                      {item.name}
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Qty: {item.quantity}
                    </p>

                    <p className="text-lg font-semibold mt-1">
                      ₹ {item.price}
                    </p>

                  </div>

                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-5 md:mt-0 text-red-500 border border-red-300 px-5 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

          {/* TOTAL SECTION */}
          <div className="mt-12 bg-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">

            <div>

              <p className="text-gray-500 mb-2">
                Total Amount
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold">
                ₹ {totalPrice}
              </h2>

            </div>

            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
            >
              Place Order on WhatsApp
            </button>

          </div>
        </>
      )}

    </section>
  );
};

export default Cart;