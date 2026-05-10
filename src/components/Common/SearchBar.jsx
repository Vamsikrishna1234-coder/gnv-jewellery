// import React from "react";
// import { Search } from "lucide-react";

// const SearchBar = ({ 
//   query, 
//   setQuery, 
//   setShowPopup,
//   setOrnament,
//   setPrice 
// }) => {
  
//   /* Show popup when user types */
//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);
    
//     if (value.trim().length > 0) {
//       setShowPopup(true);
//     } else {
//       setShowPopup(false);
//     }
//   };

//   /* Handle search button click */
//   const handleSearch = () => {
//     // Popup already open, or user can press enter
//     if (query.trim().length > 0) {
//       setShowPopup(true);
//     }
//   };

//   /* Handle Enter key press */
//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && query.trim().length > 0) {
//       setShowPopup(true);
//     }
//   };

//   return (
//     <div className="w-[520px] border border-black rounded-full overflow-hidden flex bg-white">

//       <input
//         type="text"
//         placeholder="Search Jewellery..."
//         value={query}
//         onChange={handleInputChange}
//         onKeyPress={handleKeyPress}
//         className="w-full px-6 py-4 outline-none"
//       />

//       <button 
//         onClick={handleSearch}
//         className="bg-red-500 px-8 text-white hover:bg-red-600 transition"
//       >
//         <Search size={22} />
//       </button>

//     </div>
//   );
// };

// export default SearchBar;




import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({
  query,
  setQuery,
  setShowPopup,
  setOrnament,
  setPrice,
}) => {

  /* SHOW POPUP WHEN USER TYPES */
  const handleInputChange = (e) => {

    const value = e.target.value;

    setQuery(value);

    if (value.trim().length > 0) {

      setShowPopup(true);

    } else {

      setShowPopup(false);

    }

  };

  /* HANDLE SEARCH BUTTON */
  const handleSearch = () => {

    if (query.trim().length > 0) {

      setShowPopup(true);

    }

  };

  /* ENTER KEY */
  const handleKeyPress = (e) => {

    if (
      e.key === "Enter" &&
      query.trim().length > 0
    ) {

      setShowPopup(true);

    }

  };

  return (
    <div
      className="
        w-full
        sm:w-[420px]
        md:w-[520px]

        max-w-full

        border
        border-black

        rounded-full

        overflow-hidden

        flex

        bg-white
      "
    >

      {/* INPUT */}
      <input
        type="text"
        placeholder="Search Jewellery..."
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="
          w-full

          px-4
          sm:px-5
          md:px-6

          py-3
          sm:py-3.5
          md:py-4

          outline-none

          text-[14px]
          sm:text-[15px]
          md:text-base

          min-w-0
        "
      />

      {/* BUTTON */}
      <button
        onClick={handleSearch}
        className="
          bg-red-500

          px-5
          sm:px-6
          md:px-8

          text-white

          hover:bg-red-600

          transition

          flex
          items-center
          justify-center

          flex-shrink-0
        "
      >

        <Search
          size={20}
          className="sm:w-[22px] sm:h-[22px]"
        />

      </button>

    </div>
  );
};

export default SearchBar;
