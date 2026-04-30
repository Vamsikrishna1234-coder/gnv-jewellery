import React from "react";
import coinCategories from "../data/coinCategories";
import CategoryCard from "../components/Cards/Categorycard";

const Coins = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-14">
      <h1 className="text-5xl font-bold mb-10">
        Coins Collection
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {coinCategories.map((item) => (
          <CategoryCard
            key={item.id}
            item={item}
            basePath="coins"
          />
        ))}
      </div>
    </div>
  );
};

export default Coins;