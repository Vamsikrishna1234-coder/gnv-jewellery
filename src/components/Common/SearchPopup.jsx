import React from "react";

const SearchPopup = ({ results }) => {
  return (
    <div className="absolute top-16 w-full bg-white shadow-xl rounded-xl z-50 max-h-[400px] overflow-y-auto">

      {results.length > 0 ? (
        results.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 px-5 py-4 border-b hover:bg-gray-50 cursor-pointer"
          >
            <img
              src={item.image}
              alt=""
              className="w-14 h-14 object-cover rounded"
            />
            <Link to={`/product/${item.id}`}></Link>
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">
                {item.category} · ₹{item.price}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="p-5 text-gray-500">No Products Found</p>
      )}
    </div>
  );
};

export default SearchPopup;
