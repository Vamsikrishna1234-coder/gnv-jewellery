// src/components/Sections/LuxuryDualBanner.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/images/d1.jpg"; // top right image
import img2 from "../assets/images/d2.jpg"; // bottom left image

const LuxuryDualBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#2b0a05]">

      {/* ================= TOP BANNER ================= */}
      <div className="grid md:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center px-20 py-16 text-white bg-gradient-to-r from-[#2b0a05] via-[#3b0f08] to-transparent">

          <p className="text-sm tracking-widest text-[#c28b00] mb-4">
            BRIDAL COLLECTION
          </p>

          <h2 className="text-4xl md:text-3xl font-serif leading-tight mb-4">
            WHERE EVERY BRIDE <br /> BECOMES A TRADITION
          </h2>

          <p className="text-gray-300 mb-6 max-w-md">
            Heirloom-inspired gold jewellery, designed to shine through sacred rituals and timeless celebrations.
          </p>

          <button
            onClick={() => navigate("/bridal")}
            className="border border-[#c28b00] text-[#c28b00] px-6 py-3 rounded-full hover:bg-[#c28b00] hover:text-black transition w-fit"
          >
            EXPLORE COLLECTION
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="h-[320px] md:h-[450px] relative">
          <img
            src={img1}
            className="w-full h-full object-cover"
            alt="Bridal"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/0" />
        </div>

      </div>

      {/* ================= BOTTOM BANNER ================= */}
      <div className="grid md:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="h-[320px] md:h-[450px] relative">
          <img
            src={img2}
            className="w-full h-full object-cover"
            alt="Sacred"
          />

          {/* RED GLOW EFFECT */}
          <div className="absolute inset-0 bg-red-900/0" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center px-20 py-16 text-white bg-gradient-to-l from-[#2b0a05] via-[#3b0f08] to-transparent">

          <p className="text-sm tracking-widest text-[#c28b00] mb-4">
            DIAMOND COLLECTION
          </p>

          <h2 className="text-4xl md:text-3xl font-serif mb-4">
            SPARKLE WITH EVERY MOMENT
          </h2>

          <p className="text-gray-300 mb-6  max-w-md">
            Elegant diamond pieces designed to enhance your everyday style and celebrate life’s finest occasions.
          </p>

          <button
            onClick={() => navigate("/diamond")}
            className="border border-[#c28b00] text-[#c28b00] px-6 py-3 rounded-full hover:bg-[#c28b00] hover:text-black transition w-fit"
          >
            EXPLORE COLLECTION
          </button>

        </div>

      </div>

    </section>
  );
};

export default LuxuryDualBanner;