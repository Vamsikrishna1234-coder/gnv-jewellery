// src/components/Sections/JewelsOccasionSection.jsx

import React from "react";
import bg from "../assets/images/highbanner-gnv.jpeg";

const JewelsOccasionSection = () => {

  /* 🔹 WhatsApp Redirect */
  const handleEnquiry = () => {

    const phone = "916357123123";

    const message = encodeURIComponent(
      "Hello, I’m interested in your Bridal jewellery collection. Please share more details."
    );

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section
      className="
        bg-[#efe3cc]

        py-12
        sm:py-16
        md:py-20

        px-4
        sm:px-6
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
            text-[#c28b00]

            text-[28px]
            sm:text-[32px]
            md:text-3xl

            leading-tight
          "
        >
          JEWELS FOR EVERY OCCASION
        </h2>

        <p
          className="
            text-black

            mt-3

            text-[14px]
            sm:text-[15px]
            md:text-base

            max-w-[320px]
            sm:max-w-xl

            mx-auto
            leading-relaxed
          "
        >
          From weddings to everyday moments, our jewellery shines with you.
        </p>

      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div
        className="
          max-w-6xl
          mx-auto

          relative
          overflow-hidden

          rounded-[18px]
          sm:rounded-xl
        "
      >

        {/* BACKGROUND IMAGE */}
        <img
          src={bg}
          alt="Jewellery Banner"
          className="
            w-full

            h-[220px]
            sm:h-[350px]
            md:h-[550px]

            object-cover
          "
          loading="lazy"
        />

        {/* OPTIONAL OVERLAY */}
        <div className="absolute inset-0 bg-black/10" />

      </div>

      {/* ================= BUTTON ================= */}
      <div
        className="
          flex
          justify-center

          mt-6
          sm:mt-8
          md:mt-10
        "
      >

        <button
          onClick={handleEnquiry}
          className="
            px-6
            sm:px-7
            md:px-8

            py-2.5
            sm:py-3

            bg-gradient-to-r
            from-yellow-400
            to-yellow-600

            text-black
            font-semibold

            text-[14px]
            sm:text-[15px]

            rounded-full

            shadow-lg

            hover:scale-105
            transition
            duration-300
          "
        >
          Enquire Now
        </button>

      </div>

    </section>
  );
};

export default JewelsOccasionSection;