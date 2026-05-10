// import React, { useState } from "react";

// import {
//   User,
//   Heart,
//   ShoppingCart,
//   Menu,
// } from "lucide-react";

// import logo from "../../assets/images/GNV Logo.png";

// import { Link } from "react-router-dom";

// /* Search Components */
// import SearchBar from "../Common/SearchBar";
// import SearchPopup from "../Common/SearchPopup";

// /* Data + Hook */
// import products from "../../data/products";
// import useSearch from "../../hooks/useSearch";

// /* CART */
// import { useCart } from "../../context/CartContext";

// const MainNavbar = () => {

//   /* SEARCH */
//   const {
//     query,
//     setQuery,
//     filtered,

//     ornament,
//     setOrnament,

//     price,
//     setPrice,

//     setAppliedFilters,

//   } = useSearch(products);

//   /* POPUP */
//   const [showPopup, setShowPopup] = useState(false);

//   /* CART */
//   const { cartItems } = useCart();

//   return (
//     <div className="bg-[#fff8dc] border-b border-gray-200 shadow-sm relative z-50">

//       {/* TOP NAVBAR */}
//       <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

//         {/* LOGO */}
//         <Link to="/" className="flex items-center">
//           <img
//             src={logo}
//             alt="GNV Logo"
//             className="h-20 w-20 object-contain md:h-24 md:w-28 -my-3"
//           />
//         </Link>

//         {/* SEARCH */}
//         <div className="hidden md:block relative">

//           <SearchBar
//             query={query}
//             setQuery={setQuery}
//             setShowPopup={setShowPopup}

//             setOrnament={setOrnament}
//             setPrice={setPrice}
//           />

//           {/* SEARCH POPUP */}
//           {showPopup && query && (

//             <SearchPopup
//               results={filtered}

//               ornament={ornament}
//               setOrnament={setOrnament}

//               price={price}
//               setPrice={setPrice}

//               setAppliedFilters={setAppliedFilters}

//               setShowPopup={setShowPopup}
//               setQuery={setQuery}
//             />

//           )}

//         </div>

//         {/* DESKTOP ICONS */}
//         <div className="hidden md:flex items-center gap-10 text-gray-700">

//           {/* USER */}
//           <User
//             className="cursor-pointer hover:text-red-600 transition"
//             size={22}
//           />

//           {/* WISHLIST */}
//           <Heart
//             className="cursor-pointer hover:text-red-600 transition"
//             size={22}
//           />

//           {/* CART */}
//           <Link
//             to="/cart"
//             className="relative"
//           >

//             <ShoppingCart
//               className="cursor-pointer hover:text-red-600 transition"
//               size={22}
//             />

//             {/* CART COUNT */}
//             {cartItems.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-semibold">
//                 {cartItems.length}
//               </span>
//             )}

//           </Link>

//         </div>

//         {/* MOBILE */}
//         <div className="md:hidden flex items-center gap-4 text-gray-700">

//           <Link
//             to="/cart"
//             className="relative"
//           >

//             <ShoppingCart size={22} />

//             {cartItems.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
//                 {cartItems.length}
//               </span>
//             )}

//           </Link>

//           <Menu size={26} />

//         </div>
//       </div>

//       {/* BOTTOM MENU */}
//       <div className="border-t border-gray-200 hidden md:block">

//         <ul className="max-w-[1400px] mx-auto px-6 py-3 flex justify-center gap-8 lg:gap-15 text-[15px] font-medium text-gray-700 flex-wrap">

//           <li>
//             <Link to="/" className="hover:text-[#c28b00] transition">
//               Home
//             </Link>
//           </li>

//           <li>
//             <Link to="/products" className="hover:text-[#c28b00] transition">
//               All Jewellery
//             </Link>
//           </li>

//           <li>
//             <Link to="/gold" className="hover:text-[#c28b00] transition">
//               Gold
//             </Link>
//           </li>

//           <li>
//             <Link to="/silver" className="hover:text-[#c28b00] transition">
//               Silver
//             </Link>
//           </li>

//           <li>
//             <Link to="/diamond" className="hover:text-[#c28b00] transition">
//               Diamond
//             </Link>
//           </li>

//           <li>
//             <Link to="/bridal" className="hover:text-[#c28b00] transition">
//               Bridal
//             </Link>
//           </li>

//           <li>
//             <Link to="/coins" className="hover:text-[#c28b00] transition">
//               Coins
//             </Link>
//           </li>

//           <li>
//             <Link to="/about" className="hover:text-[#c28b00] transition">
//               About
//             </Link>
//           </li>

//           <li>
//             <Link to="/contact" className="hover:text-[#c28b00] transition">
//               Support
//             </Link>
//           </li>

//         </ul>

//       </div>

//     </div>
//   );
// };
// export default MainNavbar;









import React, { useState } from "react";

import {
  User,
  Heart,
  ShoppingCart,
  Menu,
  X,
  Search,
} from "lucide-react";

import logo from "../../assets/images/GNV Logo.png";

import { Link } from "react-router-dom";

/* Search Components */
import SearchBar from "../Common/SearchBar";
import SearchPopup from "../Common/SearchPopup";

/* Data + Hook */
import products from "../../data/products";
import useSearch from "../../hooks/useSearch";

/* CART */
import { useCart } from "../../context/CartContext";

const MainNavbar = () => {

  /* MOBILE MENU */
  const [mobileMenu, setMobileMenu] = useState(false);

  /* MOBILE SEARCH */
  const [mobileSearch, setMobileSearch] = useState(false);

  /* SEARCH */
  const {
    query,
    setQuery,
    filtered,

    ornament,
    setOrnament,

    price,
    setPrice,

    setAppliedFilters,

  } = useSearch(products);

  /* POPUP */
  const [showPopup, setShowPopup] = useState(false);

  /* CART */
  const { cartItems } = useCart();

  return (
    <div className="bg-[#fff8dc] border-b border-gray-200 shadow-sm relative z-50">

      {/* ================= TOP NAVBAR ================= */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

        {/* ================= LEFT SIDE ================= */}
        <div className="flex items-center gap-3">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="GNV Logo"
              className="h-20 w-20 object-contain md:h-24 md:w-28 -my-3"
            />
          </Link>

          {/* MOBILE SEARCH ICON */}
          <button
            onClick={() => setMobileSearch(!mobileSearch)}
            className="md:hidden text-[#0f2d68]"
          >
            <Search size={22} />
          </button>

        </div>

        {/* ================= DESKTOP SEARCH ================= */}
        <div className="hidden md:block relative">

          {/* SAME OLD SEARCHBAR */}
          <SearchBar
            query={query}
            setQuery={setQuery}
            setShowPopup={setShowPopup}

            setOrnament={setOrnament}
            setPrice={setPrice}
          />

          {/* SEARCH POPUP */}
          {showPopup && query && (

            <SearchPopup
              results={filtered}

              ornament={ornament}
              setOrnament={setOrnament}

              price={price}
              setPrice={setPrice}

              setAppliedFilters={setAppliedFilters}

              setShowPopup={setShowPopup}
              setQuery={setQuery}
            />

          )}

        </div>

        {/* ================= DESKTOP ICONS ================= */}
        <div className="hidden md:flex items-center gap-10 text-gray-700">

          {/* USER */}
          <User
            className="cursor-pointer hover:text-red-600 transition"
            size={22}
          />

          {/* WISHLIST */}
          <Heart
            className="cursor-pointer hover:text-red-600 transition"
            size={22}
          />

          {/* CART */}
          <Link
            to="/cart"
            className="relative"
          >

            <ShoppingCart
              className="cursor-pointer hover:text-red-600 transition"
              size={22}
            />

            {/* CART COUNT */}
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                {cartItems.length}
              </span>
            )}

          </Link>

        </div>

        {/* ================= MOBILE RIGHT SIDE ================= */}
        <div className="md:hidden flex items-center gap-4 text-[#0f2d68]">

          {/* USER */}
          <User size={21} />

          {/* WISHLIST */}
          <Heart size={21} />

          {/* CART */}
          <Link
            to="/cart"
            className="relative"
          >

            <ShoppingCart size={21} />

            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}

          </Link>

          {/* TOGGLE */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>

      </div>

      {/* ================= MOBILE SEARCH ================= */}
      {mobileSearch && (

        <div className="md:hidden px-4 pb-3">

          <div className="relative w-full flex items-center">

            <input
              type="text"
              placeholder="Search Jewellery..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowPopup(true);
              }}
              className="
                w-full
                h-[42px]
                rounded-full
                border
                border-gray-400
                bg-white
                px-4
                pr-12
                text-[14px]
                outline-none
                shadow-sm
              "
            />

            {/* SEARCH BUTTON */}
            <button
              className="
                absolute
                right-1
                h-[34px]
                w-[34px]
                rounded-full
                bg-[#cc3b40]
                flex
                items-center
                justify-center
                text-white
              "
            >
              <Search size={16} />
            </button>

          </div>

          {/* SEARCH POPUP */}
          {showPopup && query && (

            <SearchPopup
              results={filtered}

              ornament={ornament}
              setOrnament={setOrnament}

              price={price}
              setPrice={setPrice}

              setAppliedFilters={setAppliedFilters}

              setShowPopup={setShowPopup}
              setQuery={setQuery}
            />

          )}

        </div>

      )}

      {/* ================= DESKTOP MENU ================= */}
      <div className="border-t border-gray-200 hidden md:block">

        <ul className="max-w-[1400px] mx-auto px-6 py-3 flex justify-center gap-8 lg:gap-15 text-[15px] font-medium text-gray-700 flex-wrap">

          <li>
            <Link to="/" className="hover:text-[#c28b00] transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/products" className="hover:text-[#c28b00] transition">
              All Jewellery
            </Link>
          </li>

          <li>
            <Link to="/gold" className="hover:text-[#c28b00] transition">
              Gold
            </Link>
          </li>

          <li>
            <Link to="/silver" className="hover:text-[#c28b00] transition">
              Silver
            </Link>
          </li>

          <li>
            <Link to="/diamond" className="hover:text-[#c28b00] transition">
              Diamond
            </Link>
          </li>

          <li>
            <Link to="/bridal" className="hover:text-[#c28b00] transition">
              Bridal
            </Link>
          </li>

          <li>
            <Link to="/coins" className="hover:text-[#c28b00] transition">
              Coins
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-[#c28b00] transition">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-[#c28b00] transition">
              Support
            </Link>
          </li>

        </ul>

      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (

        <div className="md:hidden border-t border-gray-200 bg-[#fff8dc]">

          <ul
            className="
              flex
              items-center
              gap-6
              px-4
              py-3
              overflow-x-auto
              whitespace-nowrap
              text-[15px]
              font-medium
              text-gray-700
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >

            <style>
              {`
                ul::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>

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

      )}

    </div>
  );
};

export default MainNavbar;





