// src/components/Sections/CustomizationSection.jsx

import React from "react";
import bgVideo from "../assets/videos/dringsvideo.mp4";

const CustomizationSection = () => {

  const phoneNumber = "6357123123";

  const handleWhatsApp = () => {

    const message = encodeURIComponent(
      "Hi, I would like to customize a jewellery design. Please assist me."
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section
      className="
        py-12
        sm:py-14
        md:py-17

        px-4
        sm:px-6

        bg-black
        overflow-hidden
      "
    >

      <div className="max-w-5xl mx-auto text-center">

        {/* ================= TITLE ================= */}
        <h2
          className="
            font-serif
            text-[#c28b00]

            text-[28px]
            sm:text-[36px]
            md:text-4xl

            leading-tight

            mb-4
          "
        >
          CUSTOMIZE YOUR JEWELLERY
        </h2>

        {/* ================= DESCRIPTION ================= */}
        <p
          className="
            text-white

            mb-6
            sm:mb-7
            md:mb-6

            max-w-xl
            mx-auto

            text-[14px]
            sm:text-[15px]
            md:text-base

            leading-relaxed

            px-2
            sm:px-0
          "
        >
          Bring your dream jewellery to life. Share your ideas,
          designs, or inspirations — and we will craft a unique
          piece just for you.
        </p>

        {/* ================= BUTTON ================= */}
        <button
          onClick={handleWhatsApp}
          className="
            bg-red-600
            hover:bg-red-700

            px-6
            sm:px-8

            py-2.5
            sm:py-3

            rounded-full

            text-white
            font-medium

            text-[14px]
            sm:text-[15px]

            transition
            shadow-lg

            mb-8
            sm:mb-10
          "
        >
          Enquire Now
        </button>

        {/* ================= VIDEO ================= */}
        <div
          className="
            rounded-[20px]
            sm:rounded-3xl

            overflow-hidden
            shadow-lg
          "
        >

          <video
            src={bgVideo}
            autoPlay
            muted
            loop
            playsInline
            className="
              w-full

              h-[240px]
              sm:h-[380px]
              md:h-[500px]

              object-cover
            "
          />

        </div>

      </div>

    </section>
  );
};

export default CustomizationSection;