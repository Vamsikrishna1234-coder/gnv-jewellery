import React from "react";
import img1 from "../assets/images/person pic.jpg";
import img2 from "../assets/images/person pic.jpg";

const FounderSection = () => {
  return (
    <section className="bg-black py-20 px-6">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif text-[#c28b00]">
          Meet Our Founders
        </h2>
        <p className="text-white mt-3">
          The visionaries behind GNV Jewellers
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">

        {/* ===== FOUNDER 1 ===== */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={img1}
              alt="Kiran Garu"
              className="w-full h-[400px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* CONTENT */}
          <div>
            <h3 className="text-3xl font-semibold text-[#c28b00] mb-4">
              Kiran Garu
            </h3>

            <p className="text-white leading-7 mb-4">
              With over 30 years of experience in the jewellery industry,
              Kiran Garu has been the backbone of GNV Jewellers. His deep
              knowledge of craftsmanship and customer trust has shaped the
              brand into a reliable destination for premium jewellery.
            </p>

            <p className="text-white leading-7">
              His vision is to bring transparency, purity, and elegance to
              every customer while preserving the traditions of Indian
              jewellery.
            </p>
          </div>

        </div>

        {/* ===== FOUNDER 2 ===== */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* CONTENT */}
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-semibold text-[#c28b00] mb-4">
              Pruthvi Garu
            </h3>

            <p className="text-white leading-7 mb-4">
              Pruthvi Garu represents the new generation of innovation and
              modern design at GNV Jewellers. With a passion for creativity,
              he brings contemporary styles that resonate with today’s
              customers.
            </p>

            <p className="text-white leading-7">
              His focus is on blending tradition with modern trends, ensuring
              that every piece reflects both heritage and elegance.
            </p>
          </div>

          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl shadow-lg order-1 md:order-2">
            <img
              src={img2}
              alt="Pruthvi Garu"
              className="w-full h-[400px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default FounderSection;