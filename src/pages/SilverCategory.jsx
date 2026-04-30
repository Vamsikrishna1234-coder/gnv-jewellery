// src/pages/SilverCategory.jsx

import React from "react";
import { useParams } from "react-router-dom";
import silverProducts from "../data/silverProducts";
import ProductCard from "../components/Cards/Productcard";

const SilverCategory = () => {
  const { category } = useParams();

  const filteredProducts = silverProducts.filter(
    (item) => item.category === category
  );

  const pageTitle =
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <section className="bg-white min-h-screen">

      <div className="max-w-[1400px] mx-auto px-6 pt-14 pb-8">

        <p className="uppercase tracking-[4px] text-gray-500 font-semibold text-sm">
          GNV Jewellers
        </p>

        <h1 className="text-5xl font-bold text-gray-800 mt-4">
          {pageTitle} Collection
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-3xl leading-8">
          Explore premium handcrafted {pageTitle.toLowerCase()} silver products.
        </p>

      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-16">

        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {filteredProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}

          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 text-lg">
            No products found in this category.
          </div>
        )}

      </div>

    </section>
  );
};

export default SilverCategory;