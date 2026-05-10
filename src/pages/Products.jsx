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
    <section className="bg-[#fff8dc] min-h-screen overflow-hidden">

      {/* ================= HERO ================= */}
      <div
        className="
          h-auto
          md:h-[53vh]

          flex
          flex-col
          md:flex-row
        "
      >

        {/* IMAGE */}
        <div
          className="
            w-full
            md:w-1/2

            relative

            h-[260px]
            sm:h-[320px]
            md:h-auto
          "
        >

          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Jewellery"
            loading="lazy"
          />

        </div>

        {/* CONTENT */}
        <div
          className="
            w-full
            md:w-1/2

            bg-[#2c1f14]

            flex
            items-center

            px-5
            sm:px-8
            md:px-16

            py-10
            sm:py-12
            md:py-0
          "
        >

          <div>

            <h1
              className="
                font-serif
                text-white
                leading-tight

                text-[34px]
                sm:text-[42px]
                md:text-5xl
              "
            >
              ALL JEWELLERY
            </h1>

            <p
              className="
                mt-4
                md:mt-6

                text-[#e8d5b8]

                text-[14px]
                sm:text-[16px]
                md:text-lg

                leading-7
                max-w-md
              "
            >
              Explore our premium jewellery collections crafted
              for every occasion.
            </p>

          </div>

        </div>

      </div>

      {/* ================= MAIN ================= */}
      <div
        className="
          max-w-7xl
          mx-auto

          px-4
          sm:px-6

          py-10
          sm:py-12
          md:py-14
        "
      >

        {/* TITLE */}
        <h2
          className="
            text-center
            font-serif
            tracking-wide

            text-[30px]
            sm:text-[36px]
            md:text-4xl

            mb-8
            md:mb-10
          "
        >
          All Jewellery Categories
        </h2>

        {/* ================= CATEGORY NAVBAR ================= */}
        <div
          className="
            flex

            md:justify-center

            gap-3
            sm:gap-4

            mb-8
            md:mb-10

            overflow-x-auto
            md:overflow-visible

            whitespace-nowrap

            pb-2

            scrollbar-hide
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >

          {["All", "Gold", "Silver", "Diamond", "Bridal", "Coins"].map((cat) => (

            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`
                px-6
                sm:px-8
                md:px-10

                py-2

                rounded-full
                border

                text-[13px]
                sm:text-sm

                transition

                flex-shrink-0

                ${
                  selected === cat
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-white border-gray-300 hover:border-gray-400"
                }
              `}
            >
              {cat}
            </button>

          ))}

        </div>

        {/* ================= CATEGORY GRID ================= */}
        <div
          className="
            grid

            grid-cols-2
            sm:grid-cols-2
            lg:grid-cols-3

            gap-4
            sm:gap-6
            md:gap-10
          "
        >

          {filteredCategories.map((item, index) => (

            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="cursor-pointer group"
            >

              {/* IMAGE BOX */}
              <div
                className="
                  border
                  border-gray-300

                  rounded-[18px]
                  sm:rounded-2xl

                  p-2
                  sm:p-4
                  md:p-5

                  overflow-hidden
                  bg-white
                "
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-full
                    
                    h-[220px]
                    sm:h-[300px]
                    md:h-[380px]

                    object-cover

                    rounded-[14px]
                    sm:rounded-xl

                    group-hover:scale-105
                    transition
                    duration-300
                  "
                    loading="lazy"
                />

              </div>

              {/* TITLE */}
              <h3
                className="
                  mt-3
                  sm:mt-4

                  text-center
                  text-[#2c1f14]

                  font-medium

                  text-[18px]
                  sm:text-[22px]
                  md:text-2xl
                "
              >
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