// src/components/Sections/OurCollections.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

import bannerImg from "../assets/images/d1.jpg";
import img1 from "../assets/images/d1.jpg";
import img2 from "../assets/images/d2.jpg";

/* COLLECTION PILLS */
const collections = [
  {
    id: 1,
    title: "Chains",
    desc: "Classic and timeless chains for every occasion.",
    icon: img1,
    category: "chains",
  },

  {
    id: 2,
    title: "Rings",
    desc: "Elegant gold rings crafted to symbolize beauty.",
    icon: img2,
    category: "rings",
  },

  {
    id: 3,
    title: "Bangles",
    desc: "Elegant bangles for a timeless look.",
    icon: img1,
    category: "bangles",
  },

  {
    id: 4,
    title: "Necklaces",
    desc: "Beautiful necklaces that add charm.",
    icon: img2,
    category: "necklace",
  },

  {
    id: 5,
    title: "Bracelets",
    desc: "Exquisite bracelet collections.",
    icon: img1,
    category: "bracelets",
  },

  {
    id: 6,
    title: "Bridal",
    desc: "Exclusive bridal jewellery for grand occasions.",
    icon: img2,
    category: "bridal",
  },
];

/* FLOATING PRODUCTS */
const products = [
  {
    id: 1,
    name: "Chains",
    image: img1,
    category: "chains",
  },

  {
    id: 2,
    name: "Rings",
    image: img2,
    category: "rings",
  },

  {
    id: 3,
    name: "Bangles",
    image: img1,
    category: "bangles",
  },

  {
    id: 4,
    name: "Necklaces",
    image: img2,
    category: "necklace",
  },

  {
    id: 5,
    name: "Bracelets",
    image: img1,
    category: "bracelets",
  },
];

const OurCollections = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#efe3cc] overflow-hidden">

      {/* ================= TOP COLLECTIONS ================= */}
      <div
        className="
          py-10
          sm:py-12
          md:py-16

          px-4
          sm:px-5
          md:px-6

          max-w-6xl
          mx-auto
        "
      >

        {/* HEADING */}
        <div className="text-center mb-8 md:mb-12">

          <h2
            className="
              text-[34px]
              sm:text-[40px]
              md:text-5xl

              font-serif
              text-[#1a1a1a]
            "
          >
            OUR COLLECTIONS
          </h2>

          <p
            className="
              text-[#5c4638]

              mt-2
              md:mt-3

              text-sm
              sm:text-base
            "
          >
            Explore a range of jewellery across categories.
          </p>

        </div>

        {/* COLLECTION GRID */}
        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3

            gap-4
            sm:gap-5
            md:gap-6
          "
        >

          {collections.map((item) => (

            <div
              key={item.id}
              onClick={() =>
                item.category === "bridal"
                  ? navigate("/bridal")
                  : navigate(`/gold/${item.category}`)
              }
              className="
                flex
                items-center

                gap-3
                sm:gap-4
                md:gap-5

                bg-[#f5eee4]
                border
                border-[#e4d8c8]

                rounded-[22px]
                sm:rounded-full

                px-4
                sm:px-5
                md:px-6

                py-3
                sm:py-4

                shadow-sm
                hover:shadow-md

                transition
                cursor-pointer
              "
            >

              {/* ICON */}
              <div
                className="
                  min-w-[50px]
                  h-[50px]

                  sm:w-14
                  sm:h-14

                  rounded-full
                  bg-white

                  flex
                  items-center
                  justify-center

                  overflow-hidden
                "
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="
                    w-10
                    h-10
                    sm:w-11
                    sm:h-11
                    object-cover
                    rounded-full
                  "
                  loading="lazy"
                />
              </div>

              {/* CONTENT */}
              <div className="min-w-0">

                <h3
                  className="
                    font-semibold
                    text-[#1a1a1a]

                    text-[15px]
                    sm:text-base
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-[#5c4638]

                    text-[12px]
                    sm:text-sm

                    leading-relaxed
                  "
                >
                  {item.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* ================= LUXURY BANNER ================= */}
      <div
        className="
          relative
          grid
          md:grid-cols-2
        "
      >

        {/* LEFT */}
        <div
          className="
            bg-[#2b0a05]
            text-white

            flex
            flex-col
            justify-center

            px-5
            sm:px-8
            md:px-10

            py-12
            sm:py-14
            md:py-16

            text-center
            md:text-left
          "
        >

          <h2
            className="
              text-[32px]
              sm:text-[38px]
              md:text-5xl

              font-serif
              text-yellow-400

              mb-3
              md:mb-4

              leading-tight
            "
          >
            THE LATEST IN LUXURY
          </h2>

          <p
            className="
              text-gray-300

              text-[15px]
              sm:text-base
              md:text-lg
            "
          >
            Elegance, Crafted for the Moment
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            h-[240px]
            sm:h-[300px]
            md:h-[420px]
          "
        >
          <img
            src={bannerImg}
            alt="Luxury Banner"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

      </div>

      {/* ================= FLOATING PRODUCTS ================= */}
      <div
        className="
          relative
          z-10

          -mt-10
          sm:-mt-14
          md:-mt-20
        "
      >

        <div
          className="
            max-w-6xl
            mx-auto

            px-3
            sm:px-5
            md:px-6
          "
        >

          <div
            className="
              flex

              gap-3
              sm:gap-4
              md:gap-6

              justify-start
              md:justify-center

              overflow-x-auto
              md:overflow-visible

              pb-2

              scrollbar-hide
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >

            {products.map((item) => (

              <div
                key={item.id}
                onClick={() =>
                  item.category === "bridal"
                    ? navigate("/bridal")
                    : navigate(`/gold/${item.category}`)
                }
                className="
                  bg-white

                  rounded-2xl

                  p-2
                  sm:p-3

                  min-w-[140px]
                  w-[140px]

                  sm:min-w-[160px]
                  sm:w-[160px]

                  md:w-[170px]

                  shadow-lg
                  hover:shadow-xl

                  transition
                  cursor-pointer
                  group

                  flex-shrink-0
                "
              >

                {/* IMAGE */}
                <div className="overflow-hidden rounded-xl">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-full

                      h-[120px]
                      sm:h-[140px]
                      md:h-[150px]

                      object-cover

                      group-hover:scale-105
                      transition
                      duration-300
                    "
                     loading="lazy"
                  />

                </div>

                {/* TITLE */}
                <p
                  className="
                    text-center

                    mt-2
                    sm:mt-3

                    text-[13px]
                    sm:text-sm

                    text-[#2c1f14]
                    font-medium
                  "
                >
                  {item.name}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default OurCollections;