// src/App.jsx

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

/* Navbar */
import Navbar from "./components/Navbar/Navbar";

/* Main Pages */
import Home from "./pages/Home";
import Products from "./pages/Products";
import Gold from "./pages/Gold";
import GoldCategory from "./pages/GoldCategory";
import Silver from "./pages/Silver";
import SilverCategory from "./pages/SilverCategory";
import Diamond from "./pages/Diamond";
import DiamondCategory from "./pages/DiamondCategory";
import Coins from "./pages/Coins";
import CoinsCategory from "./pages/CoinsCategory";
import Bridal from "./pages/Bridal";
import BridalCategory from "./pages/BridalCategory";
import About from "./pages/About";
import Contact from "./pages/Support";

/* Product Details */
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>

      {/* Common Header */}
      <Navbar />

      {/* Website Routes */}
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Main Collections */}
        <Route path="/products" element={<Products />} />
        <Route path="/gold" element={<Gold />} />
        <Route path="/silver" element={<Silver />} />
        <Route path="/diamond" element={<Diamond />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/bridal" element={<Bridal />} />

        {/* Gold Category Pages */}
        <Route
          path="/gold/:category"
          element={<GoldCategory />}
        />

        {/* Silver Category Pages */}
        <Route
          path="/silver/:category"
          element={<SilverCategory />}
        />
        
        {/* Diamond Category Pages */}
        <Route
          path="/diamond/:category"
          element={<DiamondCategory />}
        />
        
        {/* Bridal Category Pages */}
        <Route
          path="/bridal/:category"
          element={<BridalCategory />}
        />

        {/* Coins Category Pages */}
        <Route
          path="/coins/:category"
          element={<CoinsCategory />}
        />

        {/* Product Details */}
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        {/* Static Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

    </Router>
  );
}

export default App;