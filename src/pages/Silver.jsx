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

  /* TEMP FILTER STATES */
  const [tempType, setTempType] = useState("All");
  const [tempWeight, setTempWeight] = useState("All");
  const [tempPrice, setTempPrice] = useState("All");

  const [filteredProducts, setFilteredProducts] =
    useState(silverProducts);

  const [showFilter, setShowFilter] = useState(false);

  /* VIEW MORE */
  const [visibleCount, setVisibleCount] = useState(6);

  /* FILTER LOGIC */
  useEffect(() => {

    let result = [...silverProducts];

    /* TYPE */
    if (type !== "All") {

      result = result.filter((item) =>
        item.category
          .toLowerCase()
          .includes(type.toLowerCase())
      );

    }

    /* WEIGHT */
    if (weight === "below-10") {

      result = result.filter(
        (item) => parseFloat(item.weight) < 10
      );

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

      result = result.filter(
        (item) => item.price <= 50000
      );

    } else if (price === "50000-200000") {

      result = result.filter(
        (item) =>
          item.price > 50000 &&
          item.price <= 200000
      );

    } else if (price === "200000+") {

      result = result.filter(
        (item) => item.price > 200000
      );

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
    <section className="bg-gray-100 min-h-screen overflow-hidden">

      {/* ================= HERO ================= */}
      <div
        className="
          h-auto
          md:h-[60vh]

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
            src={bg1}
            className="
              absolute
              inset-0

              w-full
              h-full

              object-cover
            "
            alt="Silver Jewellery"
            loading="lazy"
          />

        </div>

        {/* CONTENT */}
        <div
          className="
            w-full
            md:w-1/2

            bg-[#002c17]

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
                text-white
                font-serif
                leading-tight

                text-[34px]
                sm:text-[42px]
                md:text-5xl
              "
            >
              SILVER COLLECTION
            </h1>

            <p
              className="
                mt-4
                md:mt-6

                text-gray-200

                text-[14px]
                sm:text-[16px]
                md:text-lg

                leading-7
                max-w-md
              "
            >
              Discover elegant silver jewellery crafted with
              modern style and timeless beauty.
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

            text-[30px]
            sm:text-[36px]
            md:text-4xl

            mb-8
            md:mb-10
          "
        >
          Silver Jewellery
        </h2>

        {/* ================= FILTERS ================= */}
        <div className="mb-8">

          {/* ================= MOBILE ================= */}
          <div className="md:hidden">

            {/* CATEGORY SCROLL */}
            <div
              className="
                flex
                gap-3

                overflow-x-auto
                whitespace-nowrap

                pb-3

                scrollbar-hide
              "
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >

              {categories.map((cat) => (

                <button
                  key={cat}
                  onClick={() => setType(cat)}
                  className={`
                    px-5
                    py-2

                    rounded-full
                    border

                    text-[13px]

                    flex-shrink-0

                    ${
                      type === cat
                        ? "bg-red-600 text-white border-red-600"
                        : "bg-white border-gray-300"
                    }
                  `}
                >
                  {cat}
                </button>

              ))}

            </div>

            {/* FILTER + SORT + CLEAR */}
            <div
              className="
                flex
                items-center
                gap-2

                mt-2
              "
            >

              {/* FILTER */}
              <button
                onClick={() => setShowFilter(true)}
                className="
                  bg-[#c28b00]
                  text-white

                  px-4
                  py-2

                  rounded-full

                  text-[13px]

                  whitespace-nowrap
                "
              >
                Filter
              </button>

              {/* SORT */}
              <select
                onChange={(e) => setSortBy(e.target.value)}
                className="
                  border

                  rounded-full

                  px-4
                  py-2

                  text-[13px]

                  bg-white
                  outline-none

                  flex-1

                  min-w-0
                "
              >
                <option value="default">
                  Popularity
                </option>

                <option value="low-high">
                  Low to High
                </option>

                <option value="high-low">
                  High to Low
                </option>
              </select>

              {/* CLEAR */}
              <button
                onClick={() => {
                  setType("All");
                  setWeight("All");
                  setPrice("All");
                  setSortBy("default");
                }}
                className="
                  text-red-500

                  text-[13px]

                  whitespace-nowrap
                "
              >
                Clear
              </button>

            </div>

          </div>

          {/* ================= TABLET + DESKTOP ================= */}
          <div className="hidden md:block relative">

            {/* CENTER */}
            <div className="flex justify-center flex-wrap gap-3">

              {categories.map((cat) => (

                <button
                  key={cat}
                  onClick={() => setType(cat)}
                  className={`
                    px-5
                    py-2

                    rounded-full
                    border

                    text-sm

                    ${
                      type === cat
                        ? "bg-red-600 text-white"
                        : "bg-white border-gray-300"
                    }
                  `}
                >
                  {cat}
                </button>

              ))}

              <button
                onClick={() => setShowFilter(true)}
                className="
                  bg-[#c28b00]
                  text-white

                  px-5
                  py-2

                  rounded-full
                "
              >
                Filter
              </button>

            </div>

            {/* RIGHT */}
            <div
              className="
                absolute
                right-0
                top-1/2
                -translate-y-1/2

                flex
                gap-2
                items-center

                text-sm
              "
            >

              <select
                onChange={(e) => setSortBy(e.target.value)}
                className="
                  border-b
                  outline-none
                  bg-transparent
                "
              >
                <option value="default">
                  Sort by: Popularity
                </option>

                <option value="low-high">
                  Price Low to High
                </option>

                <option value="high-low">
                  Price High to Low
                </option>
              </select>

              <button
                onClick={() => {
                  setType("All");
                  setWeight("All");
                  setPrice("All");
                  setSortBy("default");
                }}
                className="
                  text-red-500
                  hover:underline
                "
              >
                Clear all filters
              </button>

            </div>

          </div>

        </div>

        {/* ================= GRID ================= */}
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

          {filteredProducts
            .slice(0, visibleCount)
            .map((item) => (

              <div
                key={item.id}
                className="min-w-0"
              >
                <ProductCard item={item} />
              </div>

          ))}

        </div>

        {/* ================= VIEW MORE ================= */}
        {visibleCount < filteredProducts.length && (

          <div className="flex justify-center mt-10">

            <button
              onClick={handleViewMore}
              className="
                px-8
                py-3

                bg-red-600
                text-white

                rounded-full
              "
            >
              View More
            </button>

          </div>

        )}

        {/* ================= EMPTY ================= */}
        {filteredProducts.length === 0 && (

          <div
            className="
              text-center
              py-20
              text-gray-500
            "
          >
            No products found
          </div>

        )}

      </div>

      {/* ================= FILTER MODAL ================= */}
      {showFilter && (

        <div
          className="
            fixed
            inset-0

            bg-black/50

            flex
            justify-center
            items-center

            z-50

            px-4
          "
        >

          <div
            className="
              bg-white

              p-5
              sm:p-8

              rounded-2xl

              w-full
              max-w-[420px]

              relative
            "
          >

            {/* CLOSE */}
            <button
              onClick={() => setShowFilter(false)}
              className="
                absolute
                top-4
                right-4

                text-gray-500
                hover:text-black

                text-xl
              "
            >
              ✕
            </button>

            {/* TITLE */}
            <h3
              className="
                text-[24px]
                sm:text-2xl

                mb-6

                font-semibold
              "
            >
              Filters
            </h3>

            {/* TYPE */}
            <select
              onChange={(e) =>
                setTempType(e.target.value)
              }
              className="
                w-full
                border

                p-3

                mb-4

                rounded-lg
                outline-none
              "
            >
              <option value="All">Type</option>

              <option value="anklets">
                Anklets
              </option>

              <option value="rings">
                Rings
              </option>

              <option value="bracelets">
                Bracelets
              </option>

              <option value="chains">
                Chains
              </option>

              <option value="coins">
                Coins
              </option>

              <option value="pooja-items">
                Pooja Items
              </option>
            </select>

            {/* WEIGHT */}
            <select
              onChange={(e) =>
                setTempWeight(e.target.value)
              }
              className="
                w-full
                border

                p-3

                mb-4

                rounded-lg
                outline-none
              "
            >
              <option value="All">
                Weight Range
              </option>

              <option value="below-10">
                Below 10g
              </option>

              <option value="10-20">
                10g - 20g
              </option>

              <option value="20-30">
                20g - 30g
              </option>

              <option value="30-50">
                30g - 50g
              </option>

              <option value="50-70">
                50g - 70g
              </option>

              <option value="70-100">
                70g - 100g
              </option>

              <option value="100-400">
                100g - 400g
              </option>
            </select>

            {/* PRICE */}
            <select
              onChange={(e) =>
                setTempPrice(e.target.value)
              }
              className="
                w-full
                border

                p-3

                mb-6

                rounded-lg
                outline-none
              "
            >
              <option value="All">
                Price
              </option>

              <option value="0-50000">
                ₹0 - ₹50k
              </option>

              <option value="50000-200000">
                ₹50k - ₹2L
              </option>

              <option value="200000+">
                ₹2L+
              </option>
            </select>

            {/* BUTTONS */}
            <div className="flex gap-4">

              {/* CLEAR */}
              <button
                onClick={() => {
                  setTempType("All");
                  setTempWeight("All");
                  setTempPrice("All");
                }}
                className="
                  flex-1

                  border

                  py-3

                  rounded-lg
                "
              >
                Clear
              </button>

              {/* APPLY */}
              <button
                onClick={() => {
                  setType(tempType);
                  setWeight(tempWeight);
                  setPrice(tempPrice);
                  setShowFilter(false);
                }}
                className="
                  flex-1

                  bg-red-600
                  text-white

                  py-3

                  rounded-lg
                "
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