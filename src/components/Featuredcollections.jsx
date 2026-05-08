// src/components/Sections/FeaturedCollections.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/images/d1.jpg";
import img2 from "../assets/images/d1.jpg";
import img3 from "../assets/images/d2.jpg";

const FeaturedCollections = () => {

  const navigate = useNavigate();

  return (
    <section className="bg-[#efe3cc] py-16 px-6">

      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif tracking-wide text-[#1a1a1a]">
          FEATURED JEWELLERY COLLECTIONS
        </h2>
        <p className="text-gray-600 mt-3">
          A selection of jewellery designs across categories
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">

        {/* LEFT BIG → GOLD */}
        <div
          onClick={() => navigate("/gold")}
          className="relative rounded-2xl overflow-hidden group aspect-[3/4] cursor-pointer"
        >

          <img
            src={img1}
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

          <div className="absolute top-10 right-10 text-white text-right">
            <h3 className="text-3xl font-serif">LAYERED LUXE</h3>
            <p className="text-sm mt-2 text-gray-300">
              Stack it. Style it. Own it.
            </p>
          </div>

        </div>

        {/* RIGHT */}
        <div className="grid grid-rows-2 gap-2">

          {/* TOP → DIAMOND */}
          <div
            onClick={() => navigate("/diamond")}
            className="relative rounded-2xl overflow-hidden group aspect-[3/2] cursor-pointer"
          >

            <img
              src={img2}
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-6 right-6 text-white text-right">
              <h3 className="text-2xl font-serif">ETHNIC GLOW</h3>
              <p className="text-sm text-gray-300">
                Tradition with a twist.
              </p>
            </div>

          </div>

          {/* BOTTOM → DIAMOND */}
          <div
            onClick={() => navigate("/diamond")}
            className="relative rounded-2xl overflow-hidden group aspect-[3/2] cursor-pointer"
          >

            <img
              src={img3}
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-6 right-6 text-white text-right">
              <h3 className="text-2xl font-serif">DIAMOND WHISPER</h3>
              <p className="text-sm text-gray-300">
                Delicate shine. Big impression.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FeaturedCollections;