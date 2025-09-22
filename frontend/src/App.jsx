import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPage from "./pages/Contact";
import BlogPage from "./pages/Blog";
import ShopPage from "./pages/Shop";
import ProductComparison from "./pages/ProductCompare";
import SingleProductPage from "./pages/SingleProduct";
import CheckoutPage from "./pages/Checkout";
import Card from "./pages/Card";
import Home from "./pages/Home"

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Main Page */}
        <Route path="/" element={<Home />} />

        {/* Other Pages */}
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/card" element={<Card />} />
        <Route path="/compare" element={<ProductComparison />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
