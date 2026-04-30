// src/pages/Products.jsx

import React, { useState } from "react";
import ProductCard from "../components/Cards/ProductCard";

/* Product Data */
import goldProducts from "../data/goldProducts";
import silverProducts from "../data/silverProducts";
import diamondProducts from "../data/diamondProducts";
import bridalProducts from "../data/bridalProducts";
import coinProducts from "../data/coinsProducts";

const Products = () => {
  const allProducts = [
    ...goldProducts,
    ...silverProducts,
    ...diamondProducts,
    ...bridalProducts,
    ...coinProducts,
  ];

  const [type, setType] = useState("All");
  const [weight, setWeight] = useState("All");
  const [price, setPrice] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  let filteredProducts = [...allProducts];

  /* TYPE FILTER */
  if (type !== "All") {
    filteredProducts = filteredProducts.filter((item) =>
      item.category.toLowerCase().includes(type.toLowerCase())
    );
  }

  /* WEIGHT FILTER */
  if (weight === "0-10") {
    filteredProducts = filteredProducts.filter(
      (item) => parseFloat(item.weight) <= 10
    );
  }

  if (weight === "10-30") {
    filteredProducts = filteredProducts.filter((item) => {
      const w = parseFloat(item.weight);
      return w > 10 && w <= 30;
    });
  }

  if (weight === "30+") {
    filteredProducts = filteredProducts.filter(
      (item) => parseFloat(item.weight) > 30
    );
  }

  /* PRICE FILTER */
  if (price === "0-50000") {
    filteredProducts = filteredProducts.filter(
      (item) => item.price <= 50000
    );
  }

  if (price === "50000-200000") {
    filteredProducts = filteredProducts.filter(
      (item) =>
        item.price > 50000 &&
        item.price <= 200000
    );
  }

  if (price === "200000+") {
    filteredProducts = filteredProducts.filter(
      (item) => item.price > 200000
    );
  }

  /* SORT */
  if (sortBy === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <section className="bg-[#faf7f2]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[80vh] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1800&q=80"
          alt="Luxury Jewellery"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="sticky top-0 h-screen flex items-center justify-center px-6">

          <div className="text-center text-white max-w-5xl">

            <p className="uppercase tracking-[8px] text-[#f4d27c] text-sm font-semibold">
              GNV Jewellers
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
              The House Of <br />
              Timeless Luxury
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-200 leading-8">
              Explore handcrafted jewellery inspired by heritage,
              elegance and modern sophistication.
            </p>

          </div>

        </div>

      </section>

      {/* ================= PRODUCTS SECTION ================= */}
      <section className="relative -mt-10 pb-20">

        <div className="max-w-[1500px] mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-12">

            <p className="uppercase tracking-[5px] text-[#c28b00] font-semibold text-sm">
              Signature Collections
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mt-4 text-gray-900">
              All Jewellery
            </h2>

            <p className="text-gray-500 mt-5 text-lg max-w-3xl mx-auto leading-8">
              Discover Gold, Silver, Diamond, Bridal and Coins
              collections crafted to celebrate every moment.
            </p>

          </div>

          {/* Filters */}
          <div className="bg-white rounded-[28px] shadow-xl p-6 md:p-8 mb-10">

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

              {/* Type */}
              <select
                onChange={(e) => setType(e.target.value)}
                className="border px-5 py-3 rounded-full outline-none"
              >
                <option value="All">All Types</option>
                <option value="ring">Rings</option>
                <option value="necklace">Necklace</option>
                <option value="bangles">Bangles</option>
                <option value="chains">Chains</option>
                <option value="bracelets">Bracelets</option>
                <option value="coins">Coins</option>
                <option value="bridal">Bridal</option>
              </select>

              {/* Weight */}
              <select
                onChange={(e) => setWeight(e.target.value)}
                className="border px-5 py-3 rounded-full outline-none"
              >
                <option value="All">All Weights</option>
                <option value="0-10">0g - 10g</option>
                <option value="10-30">10g - 30g</option>
                <option value="30+">30g+</option>
              </select>

              {/* Price */}
              <select
                onChange={(e) => setPrice(e.target.value)}
                className="border px-5 py-3 rounded-full outline-none"
              >
                <option value="All">All Prices</option>
                <option value="0-50000">₹0 - ₹50,000</option>
                <option value="50000-200000">
                  ₹50,000 - ₹2,00,000
                </option>
                <option value="200000+">
                  ₹2,00,000+
                </option>
              </select>

              {/* Sort */}
              <select
                onChange={(e) => setSortBy(e.target.value)}
                className="border px-5 py-3 rounded-full outline-none"
              >
                <option value="default">Sort By</option>
                <option value="low-high">
                  Price Low to High
                </option>
                <option value="high-low">
                  Price High to Low
                </option>
              </select>

            </div>

          </div>

          {/* Count */}
          <div className="flex justify-between mb-8 text-sm text-gray-500">

            <p>
              Showing {filteredProducts.length} Products
            </p>

            <p className="text-[#c28b00] font-medium">
              Premium Curated Designs
            </p>

          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {filteredProducts.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
              />
            ))}

          </div>

        </div>

      </section>

    </section>
  );
};

export default Products;