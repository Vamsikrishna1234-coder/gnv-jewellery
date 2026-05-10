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
import Locatestore from "./pages/Locatestore";
import Schemes from "./pages/Schemes";
import NeedHelp from "./pages/Needhelp";
import Cart from "./pages/Cart";
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
import Chatbot from "../src/components/Chatbot"
import About from "./pages/About";
import Contact from "./pages/Support";
import Footer from "./components/Footer";

/* Product Details */
import ProductDetails from "./pages/ProductDetails";

/* Scroll to Top */
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <Router>

      {/* Scroll to Top on Route Change */}
      <ScrollToTop />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />

      {/* Common Header */}
      <Navbar />

      <Chatbot/>

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

        <Route path="/locate-store" element={<Locatestore />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/need-help" element={<NeedHelp />} />

        <Route path="/cart" element={<Cart />} />
        {/* Static Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />

    </Router>
  );
}

export default App;