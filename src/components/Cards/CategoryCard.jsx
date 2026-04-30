// src/components/Cards/CategoryCard.jsx

import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CategoryCard = ({ item, basePath }) => {
  return (
    <Link to={`/${basePath}/${item.slug}`}>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-500 cursor-pointer border">

        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        {/* Content */}
        <div className="p-5">

          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#c28b00] transition">
            {item.name}
          </h3>

          <p className="text-sm text-gray-500 mt-2 leading-6">
            Explore premium handcrafted jewellery designs with timeless elegance.
          </p>

          {/* Button */}
          <div className="mt-5 flex items-center gap-2 text-red-600 font-medium group-hover:gap-4 transition-all duration-300">
            View Collection
            <ArrowRight size={18} />
          </div>

        </div>

      </div>
    </Link>
  );
};

export default CategoryCard;
