import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="w-[520px] border rounded-full overflow-hidden flex bg-white">
      <input
        type="text"
        placeholder="Search Jewellery..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-5 py-3 outline-none"
      />

      <button className="bg-red-600 px-6 text-white">
        <Search size={20} />
      </button>
    </div>
  );
};

export default SearchBar;