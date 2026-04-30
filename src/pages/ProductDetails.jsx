// src/pages/ProductDetails.jsx

import React from "react";
import { useParams } from "react-router-dom";
import {
  ShieldCheck,
  Weight,
  Gem,
  ShoppingCart,
  Heart,
  Truck,
  BadgeCheck,
} from "lucide-react";

/* Product Data */
import goldProducts from "../data/goldProducts";
import silverProducts from "../data/silverProducts";
import diamondProducts from "../data/diamondProducts";
import bridalProducts from "../data/bridalProducts";
import coinProducts from "../data/coinsProducts";

const ProductDetails = () => {
  const { id } = useParams();

  /* Merge All Products */
  const allProducts = [
    ...goldProducts,
    ...silverProducts,
    ...diamondProducts,
    ...bridalProducts,
    ...coinProducts,
  ];

  const product = allProducts.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="max-w-[1400px] mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-red-600">
          Product Not Found
        </h1>

        <p className="text-gray-500 mt-4">
          The selected product does not exist.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-white min-h-screen py-14">

      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">

        {/* Left Image */}
        <div className="bg-[#fff8dc] rounded-3xl p-8 shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-2xl object-cover"
          />
        </div>

        {/* Right Details */}
        <div>

          <p className="uppercase tracking-[4px] text-red-600 font-semibold text-sm">
            GNV Jewellers
          </p>

          <h1 className="text-5xl font-bold text-gray-800 mt-4">
            {product.name}
          </h1>

          <p className="mt-5 text-gray-600 leading-8 text-lg">
            {product.description}
          </p>

          <h2 className="mt-8 text-4xl font-bold text-[#c28b00]">
            ₹ {product.price.toLocaleString()}
          </h2>

          {/* Specifications */}
          <div className="grid sm:grid-cols-2 gap-5 mt-10">

            <div className="border rounded-2xl p-5 flex gap-4 items-center">
              <ShieldCheck className="text-green-600" />
              <div>
                <p className="text-sm text-gray-500">Purity</p>
                <h4 className="font-semibold">
                  {product.purity}
                </h4>
              </div>
            </div>

            <div className="border rounded-2xl p-5 flex gap-4 items-center">
              <Weight className="text-red-600" />
              <div>
                <p className="text-sm text-gray-500">Weight</p>
                <h4 className="font-semibold">
                  {product.weight}
                </h4>
              </div>
            </div>

            <div className="border rounded-2xl p-5 flex gap-4 items-center">
              <Gem className="text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">
                  Making Charges
                </p>
                <h4 className="font-semibold">
                  {product.makingCharges}
                </h4>
              </div>
            </div>

            <div className="border rounded-2xl p-5 flex gap-4 items-center">
              <BadgeCheck className="text-yellow-600" />
              <div>
                <p className="text-sm text-gray-500">
                  Availability
                </p>
                <h4 className="font-semibold">
                  In Stock
                </h4>
              </div>
            </div>

          </div>

          {/* Benefits */}
          <div className="space-y-4 mt-10 text-gray-600">

            <div className="flex gap-3 items-center">
              <Truck size={18} />
              Free & Secure Shipping
            </div>

            <div className="flex gap-3 items-center">
              <ShieldCheck size={18} />
              Certified Jewellery
            </div>

            <div className="flex gap-3 items-center">
              <BadgeCheck size={18} />
              Easy Exchange Available
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition flex items-center gap-2">
              <ShoppingCart size={18} />
              Add To Cart
            </button>

            <button className="border px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition">
              <Heart size={18} />
              Wishlist
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductDetails;