// src/components/Cards/ProductCard.jsx

import React from "react";
import { Link } from "react-router-dom";
import { Eye, Heart } from "lucide-react";

const ProductCard = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="group bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-2xl transition duration-500 cursor-pointer">

        {/* Image */}
        <div className="relative overflow-hidden bg-[#fff8dc]">

          <img
            src={item.image}
            alt={item.name}
            className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
          />

          {/* Hover Icons */}
          <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition duration-300">

            <button className="bg-white p-3 rounded-full shadow hover:bg-red-600 hover:text-white transition">
              <Heart size={18} />
            </button>

            <button className="bg-white p-3 rounded-full shadow hover:bg-[#c28b00] hover:text-white transition">
              <Eye size={18} />
            </button>

          </div>

        </div>

        {/* Content */}
        <div className="p-5">

          <p className="text-xs uppercase tracking-[3px] text-gray-500">
            {item.category}
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-2 line-clamp-1">
            {item.name}
          </h3>

          <p className="text-sm text-gray-500 mt-3 line-clamp-2 leading-6">
            {item.description}
          </p>

          <div className="flex justify-between items-center mt-5">

            <h4 className="text-2xl font-bold text-red-600">
              ₹ {item.price.toLocaleString()}
            </h4>

            <span className="text-sm font-medium text-[#c28b00]">
              {item.weight}
            </span>

          </div>

        </div>

      </div>
    </Link>
  );
};

export default ProductCard;
