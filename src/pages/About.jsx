// src/pages/About.jsx

import React from "react";
import banner from "../assets/images/highbanner-gnv.jpeg"; 
import FounderSection from "../components/Founder";
const About = () => {
  return (
    <div>

      {/* ================= HERO BANNER ================= */}
      <div className="relative w-full h-[500px]">

        <img
          src={banner}
          alt="About GNV Jewellers"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-4xl font-bold text-[#c28b00]">
            About GNV Jewellers
          </h1>
          <p className="text-gray-200 mt-4 max-w-2xl">
            Crafting timeless jewellery with trust, tradition, and elegance.
          </p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-[1400px] mx-auto px-6 py-12">

        <h2 className="text-4xl font-bold text-[#c28b00]">
          Our Story
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-8 max-w-4xl text-justify">
          Welcome to GNV Jewellery, a vast collection of gold, silver and diamond jewellery. 
          Founded in 2018 with over 30 years of industry experience, our journey has been 
          inspiring and built on the trust of countless customers.

          GNV believes in empowering customers to make informed decisions when purchasing 
          jewellery that carries deep sentimental value. Our vision is to redefine jewellery 
          shopping in tier-2 and tier-3 cities with transparency and excellence.
        </p>

        <p className="mt-6 text-lg text-gray-600 leading-8 max-w-4xl text-justify">
          GNV Jewellers is a trusted destination for premium gold, silver, diamond, and bridal jewellery. 
          We blend timeless tradition with modern craftsmanship to create ornaments that celebrate 
          every precious moment of life.
        </p>

        <p className="mt-6 text-lg text-gray-600 leading-8 max-w-4xl text-justify">
          Our commitment is to deliver purity, elegance, and customer trust through every design. 
          From daily wear collections to grand wedding masterpieces, GNV Jewellers offers jewellery 
          for every generation.
        </p>

        {/* ================= FEATURES ================= */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-[#fff8dc] p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3 text-[#c28b00]">
              Purity Promise
            </h3>
            <p className="text-gray-600">
              BIS hallmarked jewellery with guaranteed quality and trust.
            </p>
          </div>

          <div className="bg-[#fff8dc] p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3 text-[#c28b00]">
              Elegant Designs
            </h3>
            <p className="text-gray-600">
              Traditional and modern collections crafted beautifully.
            </p>
          </div>

          <div className="bg-[#fff8dc] p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3 text-[#c28b00]">
              Customer Trust
            </h3>
            <p className="text-gray-600">
              Serving families with honesty and excellence for years.
            </p>
          </div>

        </div>

      </div>

      {/* ================= FOUNDER SECTION ================= */}
      <FounderSection />

    </div>
  );
};

export default About;