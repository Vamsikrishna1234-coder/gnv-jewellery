// src/components/Cards/ProductCard.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ item }) => {

  const navigate = useNavigate();

  const { addToCart } = useCart();

  const handleProductClick = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="group w-full min-w-0">

      {/* ================= IMAGE BOX ================= */}
      <div
        onClick={handleProductClick}
        className="
          border
          border-gray-300

          rounded-[18px]
          sm:rounded-2xl

          p-2
          sm:p-4
          md:p-5

          overflow-hidden
          bg-white

          cursor-pointer
        "
      >

        <img
          src={item.image}
          alt={item.name}
          className="
            w-full

            h-[180px]
            xs:h-[200px]
            sm:h-[260px]
            md:h-[320px]
            lg:h-[380px]

            object-cover
            object-center

            rounded-xl

            group-hover:scale-105
            transition
            duration-300
          "
        />

      </div>

      {/* ================= PRODUCT NAME ================= */}
      <h3
        className="
          mt-3
          sm:mt-4

          text-center
          text-[#2c1f14]

          font-medium

          text-[16px]
          sm:text-[20px]
          md:text-2xl

          leading-snug

          px-1
        "
      >
        {item.name}
      </h3>


      {/* ================= BUTTON ================= */}
      <div className="flex justify-center mt-3 sm:mt-4">

        <button
          onClick={() => addToCart(item)}
          className="
            bg-[#c28b00]
            hover:bg-[#a97800]

            text-white

            px-5
            sm:px-7
            md:px-8

            py-2
            sm:py-2.5
            md:py-3

            rounded-full

            text-[13px]
            sm:text-sm
            md:text-base

            transition

            whitespace-nowrap
          "
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
};

export default ProductCard;