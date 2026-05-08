// src/pages/Products.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* CATEGORY IMAGES */
import goldImg from "../assets/images/jewel image.jpg";
import silverImg from "../assets/images/jewel image.jpg";
import diamondImg from "../assets/images/jewel image.jpg";
import bridalImg from "../assets/images/jewel image.jpg";
import coinImg from "../assets/images/jewel image.jpg";

const Products = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState("All");

  const categories = [
    { name: "Gold", image: goldImg, path: "/gold" },
    { name: "Silver", image: silverImg, path: "/silver" },
    { name: "Diamond", image: diamondImg, path: "/diamond" },
    { name: "Bridal", image: bridalImg, path: "/bridal" },
    { name: "Coins", image: coinImg, path: "/coins" },
  ];

  /* FILTER LOGIC */
  const filteredCategories =
    selected === "All"
      ? categories
      : categories.filter((item) => item.name === selected);

  return (
    <section className="bg-[#fff8dc] min-h-screen">

      {/* HERO */}
      <div className="h-[53vh] flex">

        <div className="w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Jewellery"
          />
        </div>

        <div className="w-1/2 bg-[#2c1f14] flex items-center px-16">
          <div>
            <h1 className="text-5xl font-serif text-white leading-tight">
              ALL JEWELLERY
            </h1>

            <p className="mt-6 text-[#e8d5b8] text-lg leading-7 max-w-md">
              Explore our premium jewellery collections crafted for every occasion.
            </p>
          </div>
        </div>

      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <h2 className="text-center text-4xl font-serif mb-10 tracking-wide">
          All Jewellery Categories
        </h2>

        {/* 🔥 CATEGORY NAVBAR */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">

          {["All", "Gold", "Silver", "Diamond", "Bridal", "Coins"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-10 py-2 rounded-full border text-sm transition ${
                selected === cat
                  ? "bg-red-600 text-white"
                  : "bg-white border-gray-300 hover:border-gray-400"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

        {/* CATEGORY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredCategories.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="cursor-pointer group"
            >

              <div className="border border-gray-300 rounded-2xl p-5 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[380px] object-cover rounded-xl group-hover:scale-105 transition duration-300"
                />
              </div>

              <h3 className="mt-4 text-2xl text-center text-[#2c1f14] font-medium">
                {item.name}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Products;