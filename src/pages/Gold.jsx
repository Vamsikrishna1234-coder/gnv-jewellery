// src/pages/Gold.jsx

import React from "react";
import goldCategories from "../data/goldCategories";
import CategoryCard from "../components/Cards/Categorycard";

const Gold = () => {
  return (
    <section className="bg-gradient-to-b from-[#fff8dc] to-white min-h-screen">

      {/* Hero Section */}
      <div className="max-w-[1400px] mx-auto px-6 pt-14 pb-10 text-center">

        <p className="uppercase tracking-[4px] text-red-600 font-semibold text-sm">
          GNV Jewellers
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mt-4">
          Gold Collection
        </h1>

        <p className="max-w-3xl mx-auto mt-5 text-lg text-gray-600 leading-8">
          Discover timeless gold jewellery crafted with elegance and purity.
          Browse necklaces, rings, bangles, chains, jhumkas and more premium
          collections designed for every celebration.
        </p>

      </div>

      {/* Categories Grid */}
      <div className="max-w-[1400px] mx-auto px-6 pb-16">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {goldCategories.map((item) => (
          <CategoryCard
            key={item.id}
            item={item}
            basePath="gold"
          />
        ))}

        </div>

      </div>

    </section>
  );
};

export default Gold;