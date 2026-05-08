import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

import SearchFilters from "./SearchFilters";

const SearchPopup = ({
  results,

  ornament,
  setOrnament,

  price,
  setPrice,

  setAppliedFilters,

  setShowPopup,
  setQuery,
}) => {

  const popupRef = useRef();

  /* OUTSIDE CLICK CLOSE */
  useEffect(() => {

    const handler = (e) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target)
      ) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () =>
      document.removeEventListener("mousedown", handler);

  }, []);

  /* APPLY FILTERS */
  const applyFilters = () => {

    setAppliedFilters((prev) => ({
      ...prev,
      ornament,
      price,
    }));

  };
    
  return (
    <div
      ref={popupRef}
      className="absolute top-20 left-1/2 -translate-x-1/2 w-[780px] bg-white shadow-2xl z-50 rounded-sm overflow-hidden"
    >

      {/* TOP BAR */}
      <div className="flex justify-between items-center px-6 py-4 border-b bg-[#c28b00] text-white">

        <h2 className="font-semibold uppercase tracking-wide">
          Products
        </h2>

        <button
          onClick={() => setShowPopup(false)}
        >
          <X size={22} />
        </button>

      </div>

      {/* FILTERS */}
      <SearchFilters
        ornament={ornament}
        setOrnament={setOrnament}

        price={price}
        setPrice={setPrice}

        applyFilters={applyFilters}
        
      />

      {/* RESULTS */}
      <div className="max-h-[500px] overflow-y-auto">

        {results.length > 0 ? (

          results.map((item) => (

            <Link
              key={item.id}
              to={`/product/${item.id}`}
              onClick={() => {
                setShowPopup(false);
                setQuery("");
              }}
            >

              <div className="flex gap-5 p-5 border-b hover:bg-[#fafafa] transition">

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover"
                />

                {/* CONTENT */}
                <div>

                  <h3 className="font-semibold text-[18px] text-[#1e1e1e]">
                    {item.name}
                  </h3>

                  <p className="text-gray-500 uppercase text-sm mt-1">
                    {item.category}
                  </p>

                  <p className="text-[#c28b00] mt-2 font-medium">
                    ₹ {item.price.toLocaleString()}
                  </p>

                </div>

              </div>

            </Link>

          ))

        ) : (

          <div className="p-10 text-center text-gray-500">
            No Products Found
          </div>

        )}

      </div>

    </div>
  );
};

export default SearchPopup;
