
// src/pages/About.jsx

import React from "react";
import banner from "../assets/images/highbanner-gnv.jpeg";
import FounderSection from "../components/Founder";

const About = () => {

  return (
    <div className="overflow-hidden">

      {/* ================= HERO BANNER ================= */}
      <div
        className="
          relative

          w-full

          h-[320px]
          sm:h-[420px]
          md:h-[500px]
        "
      >

        {/* IMAGE */}
        <img
          src={banner}
          alt="About GNV Jewellers"
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* TEXT */}
        <div
          className="
            absolute
            inset-0

            flex
            flex-col
            items-center
            justify-center

            text-center

            px-4
            sm:px-6
          "
        >

          <h1
            className="
              font-bold
              text-[#c28b00]

              text-[32px]
              sm:text-[42px]
              md:text-5xl

              leading-tight
            "
          >
            About GNV Jewellers
          </h1>

          <p
            className="
              text-gray-200

              mt-4

              max-w-2xl

              text-[14px]
              sm:text-[16px]
              md:text-lg

              leading-relaxed
            "
          >
            Crafting timeless jewellery with trust,
            tradition, and elegance.
          </p>

        </div>

      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="
          max-w-[1400px]
          mx-auto

          px-4
          sm:px-6

          py-10
          sm:py-12
          md:py-16
        "
      >

        {/* TITLE */}
        <h2
          className="
            font-bold
            text-[#c28b00]

            text-[32px]
            sm:text-[38px]
            md:text-4xl
          "
        >
          Our Story
        </h2>

        {/* PARAGRAPH 1 */}
        <p
          className="
            mt-5
            sm:mt-6

            text-gray-600

            text-[15px]
            sm:text-[16px]
            md:text-lg

            leading-8

            max-w-4xl

            text-justify
          "
        >
          Welcome to GNV Jewellery, a vast collection of
          gold, silver and diamond jewellery. Founded in
          2018 with over 30 years of industry experience,
          our journey has been inspiring and built on the
          trust of countless customers.

          GNV believes in empowering customers to make
          informed decisions when purchasing jewellery
          that carries deep sentimental value. Our vision
          is to redefine jewellery shopping in tier-2 and
          tier-3 cities with transparency and excellence.
        </p>

        {/* PARAGRAPH 2 */}
        <p
          className="
            mt-5
            sm:mt-6

            text-gray-600

            text-[15px]
            sm:text-[16px]
            md:text-lg

            leading-8

            max-w-4xl

            text-justify
          "
        >
          GNV Jewellers is a trusted destination for
          premium gold, silver, diamond, and bridal
          jewellery. We blend timeless tradition with
          modern craftsmanship to create ornaments that
          celebrate every precious moment of life.
        </p>

        {/* PARAGRAPH 3 */}
        <p
          className="
            mt-5
            sm:mt-6

            text-gray-600

            text-[15px]
            sm:text-[16px]
            md:text-lg

            leading-8

            max-w-4xl

            text-justify
          "
        >
          Our commitment is to deliver purity, elegance,
          and customer trust through every design. From
          daily wear collections to grand wedding
          masterpieces, GNV Jewellers offers jewellery
          for every generation.
        </p>

        {/* ================= FEATURES ================= */}
        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3

            gap-5
            sm:gap-6
            md:gap-8

            mt-10
            sm:mt-12
          "
        >

          {/* CARD 1 */}
          <div
            className="
              bg-[#fff8dc]

              p-6
              sm:p-7
              md:p-8

              rounded-2xl

              shadow-sm
              hover:shadow-lg

              transition
            "
          >

            <h3
              className="
                text-[#c28b00]

                font-semibold

                text-[22px]
                sm:text-2xl

                mb-3
              "
            >
              Purity Promise
            </h3>

            <p
              className="
                text-gray-600

                text-[14px]
                sm:text-[15px]

                leading-7
              "
            >
              BIS hallmarked jewellery with guaranteed
              quality and trust.
            </p>

          </div>

          {/* CARD 2 */}
          <div
            className="
              bg-[#fff8dc]

              p-6
              sm:p-7
              md:p-8

              rounded-2xl

              shadow-sm
              hover:shadow-lg

              transition
            "
          >

            <h3
              className="
                text-[#c28b00]

                font-semibold

                text-[22px]
                sm:text-2xl

                mb-3
              "
            >
              Elegant Designs
            </h3>

            <p
              className="
                text-gray-600

                text-[14px]
                sm:text-[15px]

                leading-7
              "
            >
              Traditional and modern collections crafted
              beautifully.
            </p>

          </div>

          {/* CARD 3 */}
          <div
            className="
              bg-[#fff8dc]

              p-6
              sm:p-7
              md:p-8

              rounded-2xl

              shadow-sm
              hover:shadow-lg

              transition
            "
          >

            <h3
              className="
                text-[#c28b00]

                font-semibold

                text-[22px]
                sm:text-2xl

                mb-3
              "
            >
              Customer Trust
            </h3>

            <p
              className="
                text-gray-600

                text-[14px]
                sm:text-[15px]

                leading-7
              "
            >
              Serving families with honesty and excellence
              for years.
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