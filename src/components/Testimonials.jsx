// src/components/Sections/ReviewsSection.jsx

import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Prasanthi Singuru",
    rating: 5,
    text: "Excellent collection. Staff are friendly to show and suggest options with in the expected range. They are patient in explaining about the items and given a broader perspective in choosing.",
    link: "https://share.google/LfeXs7ED4DnnqxW3M",
  },
  {
    id: 2,
    name: "Giri Goruchitti",
    rating: 4,
    text: "Very Nice Place To shop gold ornaments, lots of varities. Staff are polite and Humble very supportive. Needs to be improved in designs.",
    link: "https://share.google/YsCyl1TjXUc56L3Sr",
  },
  {
    id: 3,
    name: "Padmaja Kullai",
    rating: 5,
    text: "GNV jwellery is very nice and me fully satisfied. Suggestingr all to invest in GNV.",
    link: "https://share.google/djE86zpIvmcwIhFIX",
  },
  {
    id: 4,
    name: "Sairaj Rocky",
    rating: 5,
    text: "The store have nice collection and it is good and service and receiving also so All the people please visit the store and buy your need gold and silver ornaments",
    link: "https://share.google/iHWlkfsTYnvTgqkJf",
  },
  {
    id: 5,
    name: "Lokesh ch",
    rating: 5,
    text: "one of the best Gold jewellery in SKLM, here Lakshman V as sales person choosing ornament and selecting process showing different models helped a lot . Prefered",
    link: "https://share.google/fJMp6Gn68EeqLIXHF",
  },
  {
    id: 6,
    name: "Chandana Injarapu",
    rating: 5,
    text: "“GNV Jewellery in Srikakulam offers beautiful designs at very reasonable prices. I’m really happy with their collection and service. Thank you, GNV Jewellery!”",
    link: "https://share.google/K5L5LpcdxkKL4iptw",
  },
  
];

const ReviewsSection = () => {
  return (
    <section className="py-20 px-6 bg-black">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif text-[#c28b00]">
          CUSTOMER REVIEWS
        </h2>
        <p className="text-gray-400 mt-3">
          Trusted by thousands of happy customers
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-8"
      >

        {reviews.map((review) => (
          <div
            key={review.id}
            onClick={() => window.open(review.link, "_blank")}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition cursor-pointer group flex flex-col justify-between min-h-[220px]"
          >

            {/* STARS */}
            <div className="flex text-yellow-500 mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>

            {/* TEXT */}
            <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-4 group-hover:text-black transition">
              "{review.text}"
            </p>

            {/* NAME */}
            <h4 className="text-[#2c1f14] font-semibold text-sm">
              — {review.name}
            </h4>

            {/* CTA */}
            <span className="text-xs text-[#c28b00] mt-2">
              View on Google →
            </span>

          </div>
        ))}

      </div>

    </section>
  );
};

export default ReviewsSection;