// src/components/Sections/FeaturedCollections.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/images/diambox.png";
import img2 from "../assets/images/gold/r5.jpeg";
import img3 from "../assets/images/diamjew1.png";

const FeaturedCollections = () => {

  const navigate = useNavigate();

  return (
    <section
      className="
        bg-[#efe3cc]

        py-10
        sm:py-12
        md:py-16

        px-4
        sm:px-5
        md:px-6

        overflow-hidden
      "
    >

      {/* ================= TITLE ================= */}
      <div
        className="
          text-center

          mb-8
          sm:mb-10
          md:mb-12
        "
      >

        <h2
          className="
            font-serif
            tracking-wide
            text-[#1a1a1a]

            text-[28px]
            sm:text-[36px]
            md:text-4xl

            leading-tight
          "
        >
          FEATURED JEWELLERY COLLECTIONS
        </h2>

        <p
          className="
            text-gray-600

            mt-2
            md:mt-3

            text-sm
            sm:text-base
          "
        >
          A selection of jewellery designs across categories
        </p>

      </div>

      {/* ================= GRID ================= */}
      <div
        className="
          max-w-7xl
          mx-auto

          grid
          md:grid-cols-2

          gap-4
          sm:gap-5
          md:gap-6
        "
      >

        {/* ================= LEFT BIG CARD ================= */}
        <div
          onClick={() => navigate("/diamond")}
          className="
            relative
            rounded-2xl
            overflow-hidden
            group
            cursor-pointer

            aspect-[4/5]
            md:aspect-[3/4]
          "
        >

          {/* IMAGE */}
          <img
            src={img1}
            alt="Layered Luxe"
            className="
              absolute
              inset-0

              w-full
              h-full

              object-cover

              grayscale
              group-hover:grayscale-0

              transition
              duration-500
            "
             loading="lazy"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

          {/* CONTENT */}
          <div
            className="
              absolute

              top-5
              right-5

              sm:top-8
              sm:right-8

              md:top-10
              md:right-10

              text-white
              text-right
            "
          >

            <h3
              className="
                font-serif

                text-[22px]
                sm:text-[28px]
                md:text-3xl

                leading-tight
              "
            >
              LAYERED LUXE
            </h3>

            <p
              className="
                mt-2
                text-gray-300

                text-[12px]
                sm:text-sm
              "
            >
              Stack it. Style it. Own it.
            </p>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-1

            gap-4
            sm:gap-5
            md:gap-6
          "
        >

          {/* ================= TOP CARD ================= */}
          <div
            onClick={() => navigate("/gold")}
            className="
              relative
              rounded-2xl
              overflow-hidden
              group
              cursor-pointer

              aspect-[4/3]
              md:aspect-[3/2]
            "
          >

            {/* IMAGE */}
            <img
              src={img2}
              alt="Ethnic Glow"
              className="
                absolute
                inset-0

                w-full
                h-full

                object-cover

                grayscale
                group-hover:grayscale-0

                transition
                duration-500
              "
               loading="lazy"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40" />

            {/* CONTENT */}
            <div
              className="
                absolute

                bottom-4
                right-4

                sm:bottom-5
                sm:right-5

                md:bottom-6
                md:right-6

                text-white
                text-right
              "
            >

              <h3
                className="
                  font-serif

                  text-[20px]
                  sm:text-[22px]
                  md:text-2xl
                "
              >
                ETHNIC GLOW
              </h3>

              <p
                className="
                  text-gray-300

                  text-[12px]
                  sm:text-sm
                "
              >
                Tradition with a twist.
              </p>

            </div>

          </div>

          {/* ================= BOTTOM CARD ================= */}
          <div
            onClick={() => navigate("/diamond")}
            className="
              relative
              rounded-2xl
              overflow-hidden
              group
              cursor-pointer

              aspect-[4/3]
              md:aspect-[3/2]
            "
          >

            {/* IMAGE */}
            <img
              src={img3}
              alt="Diamond Whisper"
              className="
                absolute
                inset-0

                w-full
                h-full

                object-cover

                grayscale
                group-hover:grayscale-0

                transition
                duration-500
              "
              loading="lazy"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40" />

            {/* CONTENT */}
            <div
              className="
                absolute

                bottom-4
                right-4

                sm:bottom-5
                sm:right-5

                md:bottom-6
                md:right-6

                text-white
                text-right
              "
            >

              <h3
                className="
                  font-serif

                  text-[20px]
                  sm:text-[22px]
                  md:text-2xl
                "
              >
                DIAMOND WHISPER
              </h3>

              <p
                className="
                  text-gray-300

                  text-[12px]
                  sm:text-sm
                "
              >
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