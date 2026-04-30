import React from "react";
import diamondCategories from "../data/diamondCategories";
import CategoryCard from "../components/Cards/Categorycard";

const Diamond = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-14">
      <h1 className="text-5xl font-bold mb-10">
        Diamond Collection
      </h1>

      <div className="grid md:grid-cols-4 gap-8">
        {diamondCategories.map((item) => (
          <CategoryCard
            key={item.id}
            item={item}
            basePath="diamond"
          />
        ))}
      </div>
    </div>
  );
};

export default Diamond;