// src/components/Sections/ShowroomsSection.jsx

import React from "react";
import { MapPin } from "lucide-react";

import img1 from "../assets/images/gnv-gtroad.webp";
import img2 from "../assets/images/gnv-2.webp";
import img3 from "../assets/images/gnv-3.jpg";
import img4 from "../assets/images/gnv-4.png";

const showrooms = [
  {
    id: 1,
    name: "GNV Jewellers - Srikakulam",
    address: "GT Rd, Santamma Colony, Srikakulam",
    image: img1,
    link: "https://maps.app.goo.gl/wrDtPtndqYTec6Tx5",
  },
  {
    id: 2,
    name: "GNV Jewellers - Srikakulam Branch 2",
    address: "Ranasthali, Srikakulam",
    image: img2,
    link: "https://maps.app.goo.gl/UarJ7ztVkYFzq7P67",
  },
  {
    id: 3,
    name: "GNV Jewellers - Palasa (Kasibugga)",
    address: "PMR complex, KT Rd, Kasibugga, Palasa",
    image: img3,
    link: "https://maps.app.goo.gl/RtnpGdv7VteWMsg76",
  },
  {
    id: 4,
    name: "GNV Jewellers - Paralakhemundi",
    address: "Palace St, Opp Boys High School, Odisha",
    image: img4,
    link: "https://maps.app.goo.gl/Gcr7xrhmgQ6gJiQM8",
  },
  {
    id: 5,
    name: "GNV Jewellers Office - Gunupur",
    address: "Holdiya nola choka, Opp Union Bank, Gunupur",
    image: img4,
    link: "https://maps.app.goo.gl/Kf6hRsNe2qJbBu3DA",
  },
  {
    id: 6,
    name: "GNV Jewellers - New Showroom",
    address: "Visakhapatnam...",
    image: img1,
    link: null,
  },
];

const ShowroomsSection = () => {
  return (
    <section className="py-16 px-6 bg-[#efe3cc]">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif text-[#c28b00]">
          VISIT OUR SHOWROOMS
        </h2>
        <p className="text-black mt-3">
          Discover elegance at our premium locations.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {showrooms.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
          >

            {/* IMAGE (CLICKABLE) */}
            <div
              className="relative overflow-hidden cursor-pointer"
              onClick={() => {
                if (item.link) {
                  window.open(item.link, "_blank");
                }
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[190px] object-cover group-hover:scale-105 transition duration-500"
              />

              {/* HOVER OVERLAY */}
              {item.link && (
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    View Location
                  </span>
                </div>
              )}
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col justify-between h-[120px]">

              <div>
                <h3 className="text-lg font-semibold text-[#2c1f14]">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {item.address}
                </p>
              </div>

              {/* ACTION */}
              <div className="flex justify-end mt-3">

                {item.link ? (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(item.link, "_blank");
                    }}
                    className="flex items-center gap-2 text-sm text-[#cc3b40] cursor-pointer hover:text-red-600 transition"
                  >
                    <MapPin size={16} />
                    View Location
                  </div>
                ) : (
                  <span className="text-xs bg-gray-200 px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default ShowroomsSection;