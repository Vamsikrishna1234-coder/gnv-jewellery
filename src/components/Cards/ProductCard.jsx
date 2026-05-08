// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { useCart } from "../../context/CartContext";

// // const ProductCard = ({ item }) => {
// //   const { addToCart } = useCart();

// //   return (
// //     <Link to={`/product/${item.id}`}>
// //       <div className="text-center group cursor-pointer w-full">

// //         <div className="border border-gray-300 rounded-2xl p-5 flex items-center justify-center">
// //           <img
// //             src={item.image}
// //             className="h-[380px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-105 rounded-2xl"
// //             alt={item.name}
// //           />
// //         </div>

// //         <h3 className="mt-4 text-xl text-[#2c1f14]">
// //           {item.name}
// //         </h3>

// //       </div>
// //     </Link>
// //   );
// // };

// // export default ProductCard;



// import React from "react";
// import { Link } from "react-router-dom";

// import { useCart } from "../../context/CartContext";

// const ProductCard = ({ item }) => {

//   const { addToCart } = useCart();

//   return (
//     <div className="text-center group cursor-pointer w-full">

//       <Link to={`/product/${item.id}`}>

//         <div className="border border-gray-300 rounded-2xl p-5 flex items-center justify-center">
//           <img
//             src={item.image}
//             className="h-[380px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
//             alt={item.name}
//           />
//         </div>

//       </Link>

//       <h3 className="mt-4 text-xl text-[#2c1f14]">
//         {item.name}
//       </h3>

//       <button
//         onClick={() => addToCart(item)}
//         className="mt-4 bg-[#c28b00] text-white px-6 py-2 rounded-full hover:bg-[#a87600]"
//       >
//         Add To Cart
//       </button>

//     </div>
//   );
// };

// export default ProductCard;




import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";

const ProductCard = ({ item }) => {

  const {
    cartItems,
    addToCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  /* CHECK EXISTING */
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  return (
    <div className="text-center group cursor-pointer w-full">

      {/* IMAGE */}
      <Link to={`/product/${item.id}`}>

        <div className="border border-gray-300 rounded-2xl p-5 flex items-center justify-center">

          <img
            src={item.image}
            className="h-[380px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            alt={item.name}
          />

        </div>

      </Link>

      {/* NAME */}
      <h3 className="mt-4 text-xl text-[#2c1f14]">
        {item.name}
      </h3>

      {/* CART BUTTONS */}
      <div className="mt-4 flex justify-center">

        {!existingItem ? (

          <button
            onClick={() => addToCart(item)}
            className="bg-[#C28B00] text-white px-8 py-3 rounded-full hover:bg-[#a87600] transition"
          >
            Add To Cart
          </button>

        ) : (

          <div className="flex items-center gap-5 bg-[#c28b00] text-white px-6 py-3 rounded-full">

            {/* MINUS */}
            <button
              onClick={() =>
                decreaseQty(item.id)
              }
              className="text-2xl"
            >
              -
            </button>

            {/* QTY */}
            <span className="text-lg font-semibold">
              {existingItem.quantity}
            </span>

            {/* PLUS */}
            <button
              onClick={() =>
                increaseQty(item.id)
              }
              className="text-2xl"
            >
              +
            </button>

          </div>

        )}

      </div>

    </div>
  );
};

export default ProductCard;
