// src/components/Sections/JewelsOccasionSection.jsx

import React from "react";
import bg from "../assets/images/highbanner-gnv.jpeg";

const JewelsOccasionSection = () => {

  /* 🔹 WhatsApp Redirect */
  const handleEnquiry = () => {
    const phone = "916357123123"; // your number with country code
    const message = encodeURIComponent(
      "Hello, I’m interested in your Bridal jewellery collection. Please share more details."
    );

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section className="bg-[#efe3cc] py-20 px-6 text-white">

      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-[#c28b00]">
          JEWELS FOR EVERY OCCASION
        </h2>
        <p className="text-black mt-3">
          From weddings to everyday moments, our jewellery shines with you.
        </p>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-xl">

        {/* BACKGROUND IMAGE */}
        <img
          src={bg}
          alt="Jewellery Banner"
          className="w-full h-[550px] object-cover"
        />

        {/* OPTIONAL OVERLAY */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* 🔥 ENQUIRE BUTTON */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handleEnquiry}
          className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300"
        >
          Enquire Now
        </button>
      </div>

    </section>
  );
};

export default JewelsOccasionSection;