// import React from "react";
// import {
//   Search,
//   User,
//   Heart,
//   ShoppingCart,
//   Menu,
// } from "lucide-react";
// import logo from "../../assets/images/GNV Logo.png";

// const MainNavbar = () => {
//   return (
//     <div className="bg-[#fff8dc] border-b border-gray-200 shadow-sm">

//       {/* Top Main Navbar */}
//       <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src={logo}
//             alt="GNV Logo"
//             className="h-20 w-20 object-contain md:h-24 md:w-28 -my-3"
//           />
//         </div>

//         {/* Search */}
//         <div className="hidden md:flex w-[420px] lg:w-[520px] border border-gray-300 rounded-full overflow-hidden">
//           <input
//             type="text"
//             placeholder="Search for Gold, Diamond, Rings..."
//             className="w-full px-5 py-3 outline-none text-sm bg-white"
//           />

//           <button className="bg-red-600 px-6 text-white hover:bg-[#a87600] transition">
//             <Search size={20} />
//           </button>
//         </div>

//         {/* Desktop Icons */}
//         <div className="hidden md:flex items-center gap-10 text-gray-700">
//           <User className="cursor-pointer hover:text-red-600 transition" size={22} />
//           <Heart className="cursor-pointer hover:text-red-600 transition" size={22} />
//           <ShoppingCart className="cursor-pointer hover:text-red-600 transition" size={22} />
//         </div>

//         {/* Mobile Menu */}
//         <div className="md:hidden flex items-center gap-4 text-gray-700">
//           <ShoppingCart size={22} />
//           <Menu size={26} />
//         </div>
//       </div>

//       {/* Bottom Menu */}
//       <div className="border-t border-gray-200 hidden md:block">
//         <ul className="max-w-[1400px] mx-auto px-6 py-3 flex justify-center gap-8 lg:gap-15 text-[15px] font-medium text-gray-700 flex-wrap">
//           <li className="cursor-pointer hover:text-[#c28b00]">Home</li>
//           <li className="cursor-pointer hover:text-[#c28b00]">All Jewellery</li>
//           <li className="cursor-pointer hover:text-[#c28b00]">Gold</li>
//           <li className="cursor-pointer hover:text-[#c28b00]">Silver</li>
//           <li className="cursor-pointer hover:text-[#c28b00]">Diamond</li>
//           <li className="cursor-pointer hover:text-[#c28b00]">Bridal</li>
//           <li className="cursor-pointer hover:text-[#c28b00]">Coins</li>
//           <li className="cursor-pointer text-[#c28b00]">Purchase Plans</li>
//           <li className="cursor-pointer hover:text-[#c28b00]">Support</li>
//         </ul>
//       </div>

//     </div>
//   );
// };

// export default MainNavbar;




import React from "react";
import {
  User,
  Heart,
  ShoppingCart,
  Menu,
} from "lucide-react";

import logo from "../../assets/images/GNV Logo.png";
import { Link } from "react-router-dom";
/* Reusable Search Components */
import SearchBar from "../Common/SearchBar";
import SearchPopup from "../Common/SearchPopup";

/* Data + Hook */
import products from "../../data/products";
import useSearch from "../../hooks/useSearch";

const MainNavbar = () => {
  const { query, setQuery, filtered } = useSearch(products);

  return (
    <div className="bg-[#fff8dc] border-b border-gray-200 shadow-sm relative">

      {/* Top Main Navbar */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="GNV Logo"
            className="h-20 w-20 object-contain md:h-24 md:w-28 -my-3"
          />
        </div>

        {/* Search Section */}
        <div className="hidden md:block relative">

          {/* Reusable SearchBar */}
          <SearchBar query={query} setQuery={setQuery} />

          {/* Search Popup */}
          {query && (
            <SearchPopup results={filtered} />
          )}
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-10 text-gray-700">
          <User
            className="cursor-pointer hover:text-red-600 transition"
            size={22}
          />

          <Heart
            className="cursor-pointer hover:text-red-600 transition"
            size={22}
          />

          <ShoppingCart
            className="cursor-pointer hover:text-red-600 transition"
            size={22}
          />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4 text-gray-700">
          <ShoppingCart size={22} />
          <Menu size={26} />
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="border-t border-gray-200 hidden md:block">
        <ul className="max-w-[1400px] mx-auto px-6 py-3 flex justify-center gap-8 lg:gap-15 text-[15px] font-medium text-gray-700 flex-wrap">

          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">All Jewellery</Link></li>
          <li><Link to="/gold">Gold</Link></li>
          <li><Link to="/silver">Silver</Link></li>
          <li><Link to="/diamond">Diamond</Link></li>
          <li><Link to="/bridal">Bridal</Link></li>
          <li><Link to="/coins">Coins</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Support</Link></li>

        </ul>
      </div>

    </div>
  );
};

export default MainNavbar;

