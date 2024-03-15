import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="bg-white/50 backdrop-blur-md shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <img src="/logo.png" alt="Bakery Logo" className="h-12 w-auto" />
        <Link to="/" className="flex justify-center items-center flex-grow">
          <h1 className="text-4xl font-handwritten text-bakery-brown">BakeMate</h1>
        </Link>
          <button
            className="outline-none mobile-menu-button"
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            <svg
              className="w-6 h-6 text-bakery-brown hover:text-bakery-gold hover:bg-opacity-50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
      </div>
      <div className={`${isNavExpanded ? "block" : "hidden"} px-4 py-2`}>
        <Link
          to="/"
          className="block py-2 px-4 text-sm text-grey-800 hover:text-white hover:bg-bakery-gold hover:bg-opacity-50"
          onClick={() => setIsNavExpanded(false)}
        >
          Home
        </Link>
        <Link
          to="/products"
          className="block py-2 px-4 text-sm text-grey-800 hover:text-white hover:bg-bakery-gold hover:bg-opacity-50"
          onClick={() => setIsNavExpanded(false)}
        >
          Products
        </Link>
        <Link
          to="/ordercreate"
          className="block py-2 px-4 text-sm text-grey-800 hover:text-white hover:bg-bakery-gold hover:bg-opacity-50"
          onClick={() => setIsNavExpanded(false)}
        >
          Create Order
        </Link>
      </div>
    </nav>
  );
};

export default Header;
