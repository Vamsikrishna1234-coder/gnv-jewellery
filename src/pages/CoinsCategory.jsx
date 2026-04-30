import React from "react";
import { useParams } from "react-router-dom";
import coinProducts from "../data/coinsProducts";
import ProductCard from "../components/Cards/ProductCard";

const CoinsCategory = () => {
  const { category } = useParams();

  const filtered = coinProducts.filter(
    (item) => item.category === category
  );

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-14">
      <div className="grid md:grid-cols-2 gap-8">
        {filtered.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CoinsCategory;