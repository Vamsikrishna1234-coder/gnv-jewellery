import React from "react";
import bridalCategories from "../data/bridalCategories";
import CategoryCard from "../components/Cards/CategoryCard";

const Bridal = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-14">
      <h1 className="text-5xl font-bold mb-10">
        Bridal Collection
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {bridalCategories.map((item) => (
          <CategoryCard
            key={item.id}
            item={item}
            basePath="bridal"
          />
        ))}
      </div>
    </div>
  );
};

export default Bridal;