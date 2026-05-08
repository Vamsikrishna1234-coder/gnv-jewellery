// src/pages/Silver.jsx

import React, { useState, useEffect } from "react";
import ProductCard from "../components/Cards/ProductCard";
import silverProducts from "../data/silverProducts";
import bg1 from "../assets/images/silver bg.png";

const Silver = () => {

  /* MAIN FILTER STATES */
  const [type, setType] = useState("All");
  const [weight, setWeight] = useState("All");
  const [price, setPrice] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  /* TEMP FILTER STATES (MODAL) */
  const [tempType, setTempType] = useState("All");
  const [tempWeight, setTempWeight] = useState("All");
  const [tempPrice, setTempPrice] = useState("All");

  const [filteredProducts, setFilteredProducts] = useState(silverProducts);
  const [showFilter, setShowFilter] = useState(false);

  /* VIEW MORE */
  const [visibleCount, setVisibleCount] = useState(6);

  /* FILTER LOGIC */
  useEffect(() => {
    let result = [...silverProducts];

    /* TYPE */
    if (type !== "All") {
      result = result.filter((item) =>
        item.category.toLowerCase().includes(type.toLowerCase())
      );
    }

    /* WEIGHT */
    if (weight === "below-10") {
      result = result.filter((item) => parseFloat(item.weight) < 10);
    } else if (weight === "10-20") {
      result = result.filter((item) => {
        const w = parseFloat(item.weight);
        return w >= 10 && w <= 20;
      });
    } else if (weight === "20-30") {
      result = result.filter((item) => {
        const w = parseFloat(item.weight);
        return w > 20 && w <= 30;
      });
    } else if (weight === "30-50") {
      result = result.filter((item) => {
        const w = parseFloat(item.weight);
        return w > 30 && w <= 50;
      });
    } else if (weight === "50-70") {
      result = result.filter((item) => {
        const w = parseFloat(item.weight);
        return w > 50 && w <= 70;
      });
    } else if (weight === "70-100") {
      result = result.filter((item) => {
        const w = parseFloat(item.weight);
        return w > 70 && w <= 100;
      });
    } else if (weight === "100-400") {
      result = result.filter((item) => {
        const w = parseFloat(item.weight);
        return w > 100 && w <= 400;
      });
    }

    /* PRICE */
    if (price === "0-50000") {
      result = result.filter((item) => item.price <= 50000);
    } else if (price === "50000-200000") {
      result = result.filter(
        (item) => item.price > 50000 && item.price <= 200000
      );
    } else if (price === "200000+") {
      result = result.filter((item) => item.price > 200000);
    }

    /* SORT */
    if (sortBy === "low-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high-low") {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
    setVisibleCount(6);

  }, [type, weight, price, sortBy]);

  const categories = [
    "All",
    "anklets",
    "rings",
    "bracelets",
    "chains",
    "coins",
    "pooja-items",
    
  ];

  const handleViewMore = () => {
    setVisibleCount(filteredProducts.length);
  };

  return (
    <section className="bg-gray-100 min-h-screen">

      {/* HERO */}
      <div className="h-[60vh] flex">

        <div className="w-1/2 relative">
          <img
            src={bg1}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Silver Jewellery"
          />
        </div>

        <div className="w-1/2 bg-[#002c17] flex items-center px-16">
          <div>
            <h1 className="text-5xl font-serif text-white leading-tight">
              SILVER COLLECTION
            </h1>

            <p className="mt-6 text-gray-200 text-lg leading-7 max-w-md">
              Discover elegant silver jewellery crafted with modern style and timeless beauty.
            </p>
          </div>
        </div>

      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <h2 className="text-center text-4xl font-serif mb-10">
          Silver Jewellery
        </h2>

        {/* CATEGORY + SORT */}
        <div className="relative mb-8">

          {/* CENTER */}
          <div className="flex justify-center flex-wrap gap-3">

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setType(cat)}
                className={`px-5 py-2 rounded-full border text-sm ${
                  type === cat
                    ? "bg-red-600 text-white"
                    : "bg-white border-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}

            <button
              onClick={() => setShowFilter(true)}
              className="bg-[#c28b00] text-white px-5 py-2 rounded-full"
            >
              Filter
            </button>

          </div>

          {/* RIGHT */}
          <div className="absolute left-251 top-1/2 -translate-y-1/2 flex gap-2 items-center text-sm">

            <select
              onChange={(e) => setSortBy(e.target.value)}
              className="border-b outline-none bg-transparent"
            >
              <option value="default">Sort by: Popularity</option>
              <option value="low-high">Price Low to High</option>
              <option value="high-low">Price High to Low</option>
            </select>

            <button
              onClick={() => {
                setType("All");
                setWeight("All");
                setPrice("All");
                setSortBy("default");
              }}
              className="text-red-500 hover:underline"
            >
              Clear all filters
            </button>

          </div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredProducts.slice(0, visibleCount).map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}

        </div>

        {/* VIEW MORE */}
        {visibleCount < filteredProducts.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleViewMore}
              className="px-8 py-3 bg-red-600 text-white rounded-full"
            >
              View More
            </button>
          </div>
        )}

        {/* EMPTY */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No products found
          </div>
        )}

      </div>

      {/* FILTER MODAL */}
      {showFilter && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

          <div className="bg-white p-8 rounded-2xl w-[420px] relative">

            <button
              onClick={() => setShowFilter(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl mb-6 font-semibold">
              Filters
            </h3>

            {/* TYPE */}
            <select
              onChange={(e) => setTempType(e.target.value)}
              className="w-full border p-3 mb-4 rounded-lg"
            >
              <option value="All">Type</option>
              <option value="anklets">Anklets</option>
              <option value="rings">Rings</option>
              <option value="bracelets">Bracelets</option>
              <option value="chains">Chains</option>
              <option value="coins">Coins</option>
              <option value="pooja-items">Pooja Items</option>
            </select>

            {/* WEIGHT */}
            <select
              onChange={(e) => setTempWeight(e.target.value)}
              className="w-full border p-3 mb-4 rounded-lg"
            >
              <option value="All">Weight Range</option>
              <option value="below-10">Below 10g</option>
              <option value="10-20">10g - 20g</option>
              <option value="20-30">20g - 30g</option>
              <option value="30-50">30g - 50g</option>
              <option value="50-70">50g - 70g</option>
              <option value="70-100">70g - 100g</option>
              <option value="100-400">100g - 400g</option>
            </select>

            {/* PRICE */}
            <select
              onChange={(e) => setTempPrice(e.target.value)}
              className="w-full border p-3 mb-6 rounded-lg"
            >
              <option value="All">Price</option>
              <option value="0-50000">₹0 - ₹50k</option>
              <option value="50000-200000">₹50k - ₹2L</option>
              <option value="200000+">₹2L+</option>
            </select>

            <div className="flex gap-4">

              <button
                onClick={() => {
                  setTempType("All");
                  setTempWeight("All");
                  setTempPrice("All");
                }}
                className="flex-1 border py-3 rounded-lg"
              >
                Clear
              </button>

              <button
                onClick={() => {
                  setType(tempType);
                  setWeight(tempWeight);
                  setPrice(tempPrice);
                  setShowFilter(false);
                }}
                className="flex-1 bg-red-600 text-white py-3 rounded-lg"
              >
                Apply Filter
              </button>

            </div>

          </div>

        </div>
      )}

    </section>
  );
};

export default Silver;