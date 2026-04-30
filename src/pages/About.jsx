// src/pages/About.jsx

import React from "react";

const About = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">

      <h1 className="text-5xl font-bold text-[#c28b00]">
        About GNV Jewellers
      </h1>

      <p className="mt-6 text-lg text-gray-600 leading-8 max-w-4xl">
        GNV Jewellers is a trusted destination for premium gold, silver,
        diamond and bridal jewellery. We blend timeless tradition with
        modern craftsmanship to create ornaments that celebrate every
        precious moment of life.
      </p>

      <p className="mt-6 text-lg text-gray-600 leading-8 max-w-4xl">
        Our commitment is to deliver purity, elegance and customer trust
        through every design. From daily wear collections to grand wedding
        masterpieces, GNV Jewellers offers jewellery for every generation.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">

        <div className="bg-[#fff8dc] p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-semibold mb-3">Purity Promise</h3>
          <p className="text-gray-600">
            BIS hallmarked jewellery with guaranteed quality and trust.
          </p>
        </div>

        <div className="bg-[#fff8dc] p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-semibold mb-3">Elegant Designs</h3>
          <p className="text-gray-600">
            Traditional and modern collections crafted beautifully.
          </p>
        </div>

        <div className="bg-[#fff8dc] p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-semibold mb-3">Customer Trust</h3>
          <p className="text-gray-600">
            Serving families with honesty and excellence for years.
          </p>
        </div>

      </div>

    </div>
  );
};

export default About;