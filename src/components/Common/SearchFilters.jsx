import React from "react";

const SearchFilters = ({
  ornament,
  setOrnament,
  price,
  setPrice,
  applyFilters,
}) => {

  return (
    <div className="flex items-center gap-4 px-6 py-4 border-b bg-white">

      {/* ORNAMENT */}
      <select
        value={ornament}
        onChange={(e) => setOrnament(e.target.value)}
        className="border px-4 py-2 rounded-full outline-none text-sm"
      >
        <option value="All">All Ornaments</option>
        <option value="rings">Rings</option>
        <option value="chains">Chains</option>
        <option value="necklace">Necklace</option>
        <option value="bangles">Bangles</option>
        <option value="bracelets">Bracelets</option>
      </select>

      {/* PRICE */}
      <select
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border px-4 py-2 rounded-full outline-none text-sm"
      >
        <option value="All">All Prices</option>
        <option value="0-50000">Below ₹50K</option>
        <option value="50000-200000">₹50K - ₹2L</option>
        <option value="200000+">Above ₹2L</option>
      </select>

      {/* APPLY */}
      <button
        onClick={applyFilters}
        className="bg-[#c28b00] text-white px-6 py-2 rounded-full text-sm hover:bg-[#a87600]"
      >
        Apply Filters
      </button>

      

    </div>
  );
};

export default SearchFilters;