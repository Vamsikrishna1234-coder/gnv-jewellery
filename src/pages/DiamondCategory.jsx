import React from "react";
import { useParams } from "react-router-dom";
import diamondProducts from "../data/diamondProducts";
import ProductCard from "../components/Cards/ProductCard";

const DiamondCategory = () => {
  const { category } = useParams();

  const filtered = diamondProducts.filter(
    (item) => item.category === category
  );

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-14">
      <h1 className="text-5xl font-bold mb-10">
        {category}
      </h1>

      <div className="grid md:grid-cols-4 gap-8">
        {filtered.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DiamondCategory;