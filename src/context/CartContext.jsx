// src/context/CartContext.jsx

import React, {
  createContext,
  useContext,
  useState,
} from "react";

const CartContext = createContext();

export const useCart = () =>
  useContext(CartContext);

const CartProvider = ({ children }) => {

  /* CART STATE */
  const [cartItems, setCartItems] = useState([]);

  /* =========================
     ADD TO CART
  ========================== */
  const addToCart = (product) => {

    const existing = cartItems.find(
      (item) => item.id === product.id
    );

    /* IF PRODUCT ALREADY EXISTS */
    if (existing) {

      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );

    } else {

      /* NEW PRODUCT */
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);

    }
  };

  /* =========================
     REMOVE ITEM
  ========================== */
  const removeFromCart = (id) => {

    setCartItems(
      cartItems.filter(
        (item) => item.id !== id
      )
    );

  };

  /* =========================
     INCREASE QUANTITY
  ========================== */
  const increaseQty = (id) => {

    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

  };

  /* =========================
     DECREASE QUANTITY
  ========================== */
  const decreaseQty = (id) => {

    const existing = cartItems.find(
      (item) => item.id === id
    );

    /* REMOVE IF QTY = 1 */
    if (existing.quantity === 1) {

      removeFromCart(id);

    } else {

      setCartItems(
        cartItems.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
      );

    }
  };

  /* =========================
     TOTAL PRICE
  ========================== */
  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  return (

    <CartContext.Provider
      value={{

        /* STATE */
        cartItems,

        /* FUNCTIONS */
        addToCart,
        removeFromCart,

        increaseQty,
        decreaseQty,

        /* TOTAL */
        totalPrice,

      }}
    >

      {children}

    </CartContext.Provider>

  );
};

export default CartProvider;