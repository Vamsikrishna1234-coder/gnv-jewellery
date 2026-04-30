// src/pages/Silver.jsx

import React from "react";
import silverCategories from "../data/silverCategories";
import CategoryCard from "../components/Cards/Categorycard";

const Silver = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white min-h-screen">

      <div className="max-w-[1400px] mx-auto px-6 pt-14 pb-10 text-center">

        <p className="uppercase tracking-[4px] text-gray-500 font-semibold text-sm">
          GNV Jewellers
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mt-4">
          Silver Collection
        </h1>

        <p className="max-w-3xl mx-auto mt-5 text-lg text-gray-600 leading-8">
          Explore anklets, rings, bracelets, chains, coins and elegant silver
          collections crafted with timeless beauty.
        </p>

      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {silverCategories.map((item) => (
            <CategoryCard key={item.id} item={item} basePath="silver" />
          ))}

        </div>
      </div>

    </section>
  );
};

export default Silver;