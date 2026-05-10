// src/components/Sections/LuxuryDualBanner.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/images/d1.jpg";
import img2 from "../assets/images/d2.jpg";

const LuxuryDualBanner = () => {

  const navigate = useNavigate();

  return (
    <section className="bg-[#2b0a05] overflow-hidden">

      {/* ================= TOP BANNER ================= */}
      <div className="grid md:grid-cols-2">

        {/* ================= LEFT CONTENT ================= */}
        <div
          className="
            flex
            flex-col
            justify-center

            px-5
            sm:px-8
            md:px-20

            py-12
            sm:py-14
            md:py-16

            text-white

            bg-gradient-to-r
            from-[#2b0a05]
            via-[#3b0f08]
            to-transparent
          "
        >

          {/* SMALL TITLE */}
          <p
            className="
              text-[11px]
              sm:text-xs
              md:text-sm

              tracking-[0.25em]

              text-[#c28b00]

              mb-3
              md:mb-4
            "
          >
            BRIDAL COLLECTION
          </p>

          {/* MAIN TITLE */}
          <h2
            className="
              font-serif
              leading-tight

              text-[28px]
              sm:text-[34px]
              md:text-3xl
              lg:text-4xl

              mb-4
            "
          >
            WHERE EVERY BRIDE <br />
            BECOMES A TRADITION
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              text-gray-300

              text-[14px]
              sm:text-[15px]
              md:text-base

              mb-6

              max-w-md
              leading-relaxed
            "
          >
            Heirloom-inspired gold jewellery, designed to shine
            through sacred rituals and timeless celebrations.
          </p>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/bridal")}
            className="
              border
              border-[#c28b00]

              text-[#c28b00]

              px-5
              sm:px-6

              py-2.5
              sm:py-3

              rounded-full

              hover:bg-[#c28b00]
              hover:text-black

              transition

              w-fit

              text-[13px]
              sm:text-sm

              tracking-wide
            "
          >
            EXPLORE COLLECTION
          </button>

        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div
          className="
            h-[260px]
            sm:h-[320px]
            md:h-[450px]

            relative
          "
        >

          <img
            src={img1}
            className="w-full h-full object-cover"
            alt="Bridal"
            loading="lazy"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/0" />

        </div>

      </div>

      {/* ================= BOTTOM BANNER ================= */}
      <div className="grid md:grid-cols-2">

        {/* ================= LEFT IMAGE ================= */}
        <div
          className="
            h-[260px]
            sm:h-[320px]
            md:h-[450px]

            relative

            order-2
            md:order-1
          "
        >

          <img
            src={img2}
            className="w-full h-full object-cover"
            alt="Diamond"
            loading="lazy"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-red-900/0" />

        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div
          className="
            flex
            flex-col
            justify-center

            px-5
            sm:px-8
            md:px-20

            py-12
            sm:py-14
            md:py-16

            text-white

            bg-gradient-to-l
            from-[#2b0a05]
            via-[#3b0f08]
            to-transparent

            order-1
            md:order-2
          "
        >

          {/* SMALL TITLE */}
          <p
            className="
              text-[11px]
              sm:text-xs
              md:text-sm

              tracking-[0.25em]

              text-[#c28b00]

              mb-3
              md:mb-4
            "
          >
            DIAMOND COLLECTION
          </p>

          {/* MAIN TITLE */}
          <h2
            className="
              font-serif
              leading-tight

              text-[28px]
              sm:text-[34px]
              md:text-3xl
              lg:text-4xl

              mb-4
            "
          >
            SPARKLE WITH EVERY MOMENT
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              text-gray-300

              text-[14px]
              sm:text-[15px]
              md:text-base

              mb-6

              max-w-md
              leading-relaxed
            "
          >
            Elegant diamond pieces designed to enhance your
            everyday style and celebrate life’s finest occasions.
          </p>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/diamond")}
            className="
              border
              border-[#c28b00]

              text-[#c28b00]

              px-5
              sm:px-6

              py-2.5
              sm:py-3

              rounded-full

              hover:bg-[#c28b00]
              hover:text-black

              transition

              w-fit

              text-[13px]
              sm:text-sm

              tracking-wide
            "
          >
            EXPLORE COLLECTION
          </button>

        </div>

      </div>

    </section>
  );
};

export default LuxuryDualBanner;