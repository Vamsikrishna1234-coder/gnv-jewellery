// src/pages/ProductDetails.jsx

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
/* Data */
import goldProducts from "../data/goldProducts";
import silverProducts from "../data/silverProducts";
import diamondProducts from "../data/diamondProducts";
import bridalProducts from "../data/bridalProducts";
import coinProducts from "../data/coinsProducts";

/* ─── Showroom Data ─────────────────────────────────── */
const SHOWROOMS = [
  {
    name: "GNV Jewellers – Srikakulam",
    address: "GT Rd, Santamma Colony, Srikakulam",
    mapUrl: "https://maps.google.com/?q=GNV+Jewellers+Santamma+Colony+Srikakulam",
  },
  {
    name: "GNV Jewellers – Srikakulam Branch 2",
    address: "Ranasthali, Srikakulam",
    mapUrl: "https://maps.google.com/?q=GNV+Jewellers+Ranasthali+Srikakulam",
  },
  {
    name: "GNV Jewellers – Palasa (Kasibugga)",
    address: "PMR Complex, KT Rd, Kasibugga, Palasa",
    mapUrl: "https://maps.google.com/?q=GNV+Jewellers+Palasa+Kasibugga",
  },
  {
    name: "GNV Jewellers – Paralakhemundi",
    address: "Paralakhemundi, Odisha",
    mapUrl: "https://maps.google.com/?q=GNV+Jewellers+Paralakhemundi",
  },
];

/* ─── Star Rating Component ─────────────────────────── */
const StarRating = ({ rating = 4, reviews = 128 }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= Math.floor(rating)
                ? "fill-yellow-400 text-yellow-400"
                : star - 0.5 <= rating
                ? "fill-yellow-200 text-yellow-400"
                : "fill-none text-yellow-300"
            }`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
        ))}
      </div>
      <span className="text-sm text-[#7a5c3a]">
        {rating.toFixed(1)} · {reviews} reviews
      </span>
    </div>
  );
};

/* ─── WhatsApp Icon ─────────────────────────────────── */
const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M11.999 2C6.477 2 2 6.478 2 12.001c0 1.77.463 3.43 1.27 4.876L2 22l5.241-1.253A9.95 9.95 0 0012 22c5.522 0 10-4.477 10-9.999C22 6.477 17.523 2 11.999 2zm0 18.198c-1.644 0-3.18-.442-4.513-1.21l-.326-.193-3.11.742.782-3.015-.21-.34A8.168 8.168 0 013.802 12c0-4.524 3.674-8.198 8.198-8.198 4.523 0 8.198 3.674 8.198 8.199 0 4.523-3.675 8.197-8.199 8.197z" />
  </svg>
);

/* ─── Main Component ─────────────────────────────────── */
const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const allProducts = [
    ...goldProducts,
    ...silverProducts,
    ...diamondProducts,
    ...bridalProducts,
    ...coinProducts,
  ];

  const product = allProducts.find((p) => p.id === id);

  const images = product?.images?.length
    ? product.images
    : product?.image
    ? [product.image, product.image, product.image]
    : [];

  const [mainImage, setMainImage] = useState(images[0]);
  const [activeThumb, setActiveThumb] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#fdf8f0] flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-[#2c1a0e] font-serif mb-4">Product Not Found</p>
          <button
            onClick={() => navigate(-1)}
            className="text-[#c9a84c] underline text-sm"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  /* WhatsApp Buy Now */
  const handleBuyNow = () => {
    const phone = "916357123123";
    const productLink = window.location.href;
    const message = encodeURIComponent(
      `Hello, I'm interested in this product:\n\n*${product.name}*\n${productLink}\n\nPlease share more details.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  /* Call Now */
  const handleCallNow = () => {
    window.open("tel:+916357123123");
  };

  /* Thumbnail click */
  const handleThumb = (img, index) => {
    setMainImage(img);
    setActiveThumb(index);
  };

  return (
    <section className="bg-white min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto">

        {/* ── TOP BAR ── */}
        <div className="flex items-center justify-between mb-6">
          {/* Back / Cross Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 border border-[#d4b87a] text-[#2c1a0e] rounded-full px-4 py-2 text-sm hover:bg-[#f5e9cc] transition font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back
          </button>

          <p className="text-xs tracking-[3px] text-[#c28b00] uppercase font-medium">
            GNV Jewellers
          </p>

          {/* Wishlist Heart Button */}
          <button
            onClick={() => setWishlisted(!wishlisted)}
            className="w-10 h-10 rounded-full border border-[#c28b00] flex items-center justify-center hover:bg-[#ffe8e8] transition"
            title={wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          >
            <svg
              className="w-5 h-5 transition-all"
              viewBox="0 0 24 24"
              fill={wishlisted ? "#e74c3c" : "none"}
              stroke={wishlisted ? "#e74c3c" : "#c9a84c"}
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* ── LEFT: IMAGES ── */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#e8d5a3] shadow-sm h-[500px]">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>

            {/* Thumbnails — always 3 */}
            <div className="grid grid-cols-3 gap-3">
              {images.slice(0, 3).map((img, i) => (
                <div
                  key={i}
                  onClick={() => handleThumb(img, i)}
                  className={`rounded-xl overflow-hidden cursor-pointer h-20 border-2 transition-all duration-200 hover:scale-105 ${
                    activeThumb === i
                      ? "border-[#c9a84c] shadow-md"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: DETAILS ── */}
          <div className="space-y-5">

            {/* Ornament Label + Name */}
            <div>
              <p className="text-[10px] tracking-[2.5px] text-[#c28b00] uppercase font-semibold mb-1">
                ✦ {product.category || "Gold"} Ornament · GNV{product.id}
              </p>
              <h1 className="font-serif text-[#2c1a0e] text-2xl leading-snug">
                {product.name}
              </h1>
            </div>

            {/* Star Rating */}
            <StarRating rating={4.0} reviews={128} />

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl text-[#2c1a0e] font-semibold">
                Price on Request
              </span>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-[#e8d5a3]" />
              <div className="w-2 h-2 bg-[#c9a84c] rotate-45" />
              <div className="flex-1 h-px bg-[#e8d5a3]" />
            </div>

            {/* Specifications Grid */}
            <div>
              <p className="text-[10px] tracking-[2px] text-[#7a5c3a] uppercase font-semibold mb-2">
                Specifications
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Purity", value: product.purity || "22 Karat" },
                  { label: "Metal", value: product.category || "Gold" },
                  { label: "Gross Weight", value: product.weight || "N/A" },
                  { label: "Net Weight", value: product.weight || "N/A" },
                  { label: "Occasion", value: "Bridal / Festive" },
                  { label: "For", value: "Women" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="bg-white border border-[#c28b00] rounded-xl px-3 py-2.5"
                  >
                    <p className="text-[9px] tracking-[1.5px] uppercase text-[#c28b00] mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-[#2c1a0e]">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            {product.description && (
              <div className="bg-white border border-[#e8d5a3] rounded-xl p-4">
                <p className="text-[10px] tracking-[2px] uppercase text-[#c28b00] font-semibold mb-1">
                  Description
                </p>
                <p className="text-sm text-black leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              {/* WhatsApp Buy Now */}
              <button
                onClick={handleBuyNow}
                className="flex items-center gap-2 bg-[#25D366] text-white rounded-full px-5 py-2.5 text-sm font-semibold shadow hover:bg-[#1ebe5b] hover:scale-105 transition-all"
              >
                <WhatsAppIcon size={17} />
                Enquire Now
              </button>

              <button
                onClick={() => addToCart(product)}
                className="bg-[#c28b00] text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-[#a87600] transition"
              >
                Add To Cart
              </button>

              {/* Call Now */}
              <button
                onClick={handleCallNow}
                className="flex items-center gap-2 bg-[#2c1a0e] text-[#f5e9cc] rounded-full px-5 py-2.5 text-sm font-semibold shadow hover:bg-[#3d2512] hover:scale-105 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                </svg>
                Call Now
              </button>
            </div>

            {/* Secondary: Add to Wishlist */}
            <button
              onClick={() => setWishlisted(!wishlisted)}
              className={`flex items-center gap-2 border rounded-full px-5 py-2 text-sm transition-all ${
                wishlisted
                  ? "border-red-300 text-red-500 bg-red-50"
                  : "border-[#c9a84c] text-[#8a6820] hover:bg-[#fdf3dc]"
              }`}
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill={wishlisted ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {wishlisted ? "Wishlisted ✓" : "Add to Wishlist"}
            </button>

          </div>
        </div>

        {/* ── SHOWROOMS SECTION ── */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[#e8d5a3]">
            <svg className="w-5 h-5 text-[#c9a84c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
            <h2 className="font-serif text-xl text-[#2c1a0e]">
              Visit Us In Person
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {SHOWROOMS.map((store, i) => (
              <div
                key={i}
                className="bg-white border border-[#e8d5a3] rounded-2xl p-4 flex flex-col gap-3 hover:shadow-md transition"
              >
                <div>
                  <p className="text-sm font-semibold text-[#2c1a0e]">
                    {store.name}
                  </p>
                  <p className="text-xs text-[#7a5c3a] mt-0.5 leading-relaxed">
                    {store.address}
                  </p>
                </div>
                <a
                  href={store.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#8a6820] border border-[#d4b87a] rounded-full px-3 py-1.5 w-fit hover:bg-[#fdf3dc] transition"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  View Location
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductDetails;