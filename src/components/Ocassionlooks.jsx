// src/components/Sections/OurCollections.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

import bannerImg from "../assets/images/d1.jpg";
import img1 from "../assets/images/d1.jpg";
import img2 from "../assets/images/d2.jpg";

/* COLLECTION PILLS */
const collections = [
  { id: 1, title: "Chains", desc: "Classic and timeless chains for every occasion.", icon: img1, category: "chains" },
  { id: 2, title: "Rings", desc: "Elegant gold rings crafted to symbolize beauty.", icon: img2, category: "rings" },
  { id: 3, title: "Bangles", desc: "Elegant bangles for a timeless look.", icon: img1, category: "bangles" },
  { id: 4, title: "Necklaces", desc: "Beautiful necklaces that add charm.", icon: img2, category: "necklace" },
  { id: 5, title: "Bracelets", desc: "Exquisite Haaram sets that captivate.", icon: img1, category: "bracelets" },
  { id: 6, title: "Bridal", desc: "Exclusive bridal jewellery for grand occasions.", icon: img2, category: "bridal" },
];

/* BOTTOM PRODUCTS */
const products = [
  { id: 1, name: "Chains", image: img1,category: "chains" },
  { id: 2, name: "Rings", image: img2,category: "rings" },
  { id: 3, name: "Bangles", image: img1,category: "bangles" },
  { id: 4, name: "Necklaces", image: img2,category: "necklace" },
  { id: 5, name: "Bracelets", image: img1,category: "bracelets" },
];

const OurCollections = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#efe3cc]">

      {/* ================= TOP COLLECTION PILLS ================= */}
      <div className="py-16 px-6 max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-[#1a1a1a]">
            OUR COLLECTIONS
          </h2>
          <p className="text-[#5c4638] mt-3">
            Explore a range of jewellery across categories.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {collections.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                  item.category === "bridal"
                    ? navigate("/bridal")
                    : navigate(`/gold/${item.category}`)
                }
              className="flex items-center gap-5 bg-[#f5eee4] border border-[#e4d8c8] rounded-full px-6 py-4 shadow-sm hover:shadow-md transition cursor-pointer"
            >

              <div className="w-14 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img src={item.icon} className="w-10 h-10 object-contain" />
              </div>

              <div>
                <h3 className="font-semibold text-[#1a1a1a]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5c4638]">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* ================= LUXURY BANNER ================= */}
      <div className="relative grid md:grid-cols-2">

        {/* LEFT */}
        <div className="bg-[#2b0a05] text-white flex flex-col justify-center px-10 py-16">
          <h2 className="text-4xl font-serif text-yellow-400 mb-4">
            THE LATEST IN LUXURY
          </h2>
          <p className="text-lg text-gray-300">
            Elegance, Crafted for the Moment
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="h-[300px] md:h-[420px]">
          <img
            src={bannerImg}
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* ================= FLOATING PRODUCTS ================= */}
      <div className="relative z-10 -mt-16 md:-mt-20">

          <div className="max-w-6xl mx-auto px-6">

            <div className="flex gap-6 justify-center flex-wrap">

              {products.map((item) => (
                  <div
                    key={item.id}
                    onClick={() =>
                            item.category === "bridal"
                              ? navigate("/bridal")
                              : navigate(`/gold/${item.category}`)
                          }
                    className="bg-white rounded-2xl p-3 w-[170px] shadow-lg hover:shadow-xl transition cursor-pointer group"
                  >

                    <div className="overflow-hidden rounded-xl">
                      <img
                        src={item.image}
                        className="w-full h-[150px] object-cover group-hover:scale-105 transition"
                      />
                    </div>

                    <p className="text-center mt-3 text-sm text-[#2c1f14]">
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