// src/components/Sections/CustomizationSection.jsx

import React from "react";
import bgVideo from "../assets/videos/dmotion.mp4"; // your video

const CustomizationSection = () => {

  const phoneNumber = "6357123123";

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi, I would like to customize a jewellery design. Please assist me."
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="py-17 px-6 bg-black">

      <div className="max-w-5xl mx-auto text-center">

        {/* TEXT CONTENT */}
        <h2 className="text-4xl md:text-4xl font-serif mb-4 text-[#c28b00]">
          CUSTOMIZE YOUR JEWELLERY
        </h2>

        <p className="text-white mb-6 max-w-xl mx-auto">
          Bring your dream jewellery to life. Share your ideas, designs, or inspirations —
          and we will craft a unique piece just for you.
        </p>

        <button
          onClick={handleWhatsApp}
          className="bg-red-600 hover:bg-red-600 px-8 py-3 rounded-full text-white font-medium transition shadow-lg mb-10"
        >
          Enquire Now
        </button>

        {/* VIDEO BELOW */}
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <video
            src={bgVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[500px] object-cover"
          />
        </div>

      </div>

    </section>
  );
};

export default CustomizationSection;