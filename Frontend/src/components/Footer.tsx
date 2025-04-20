import React from 'react';
import { Link } from "react-router-dom";
import { assets } from "../assets/asset.js";

const Footer = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <footer className="bg-white text-gray-500 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:flex-row md:justify-between">

        {/* Logo & Description */}
        <div className="md:w-1/3 flex flex-col gap-3">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide uppercase text-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
          Shopwise
        </h2>
          <p className="text-sm text-gray-400 max-w-sm mt-2">
            Discover the latest trends in fashion for men and women, all in one place.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-10 text-sm">

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-500 font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
              <li><Link to="/collections" className="hover:text-gray-400">Shop</Link></li>
              <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
              <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-gray-500 font-semibold mb-3">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/category/men" className="hover:text-gray-400">Men</Link></li>
              <li><Link to="/category/women" className="hover:text-gray-400">Women</Link></li>
              <li><Link to="/category/accessories" className="hover:text-gray-400">Accessories</Link></li>
              <li><Link to="/" className="hover:text-gray-400">New Arrivals</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="md:w-1/3 max-w-sm">
          <h3 className="text-gray-500 font-semibold mb-3">Stay in Touch</h3>
          <p className="text-sm mb-4 text-gray-400">Get updates about new collections and offers.</p>
          <form onSubmit={onSubmitHandler} className="flex w-full">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-l bg-gray-200 text-gray-600 text-sm outline-none"
            />
            <button className="bg-pink-200 hover:bg-pink-400 px-4 py-2 rounded-r text-sm text-gray-600 transition-all">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom line */}
      <div className="text-center text-xs text-gray-500 mt-12 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Shopwise. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;