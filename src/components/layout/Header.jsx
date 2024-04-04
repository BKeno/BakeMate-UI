import { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return ( 
    <nav className="bg-white/50 backdrop-blur-sm shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <div className="logo-wrapper">
      <img src="/logo.png" alt="Bakery Logo" className="h-12 w-auto" />
      </div>
        <Link to="/" className="flex justify-center items-center flex-grow">
        <div className="logo-wrapper">
          <h1 className="p-2 text-4xl font-sans text-bakery-brown">BakeMate</h1>
          </div>
        </Link>
          <button
            className="outline-none mobile-menu-button"
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            <svg
              className="w-6 h-6 text-bakery-brown hover:text-bakery-cream hover:bg-opacity-50"
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
          className="block py-2 px-4 text-sm text-grey-800 hover:text-bakery-brown hover:bg-bakery-cream hover:bg-opacity-50"
          onClick={() => setIsNavExpanded(false)}
        >
          Home
        </Link>
        <Link
          to="/products"
          className="block py-2 px-4 text-sm text-grey-800 hover:text-bakery-brown hover:bg-bakery-cream hover:bg-opacity-50"
          onClick={() => setIsNavExpanded(false)}
        >
          Products
        </Link>
        <Link
          to="/ordercreate"
          className="block py-2 px-4 text-sm text-grey-800 hover:text-bakery-brown hover:bg-bakery-cream hover:bg-opacity-50"
          onClick={() => setIsNavExpanded(false)}
        >
          Create Order
        </Link>
        <Link
          to="/orderslist"
          className="block py-2 px-4 text-sm text-grey-800 hover:text-bakery-brown hover:bg-bakery-cream hover:bg-opacity-50"
          onClick={() => setIsNavExpanded(false)}
        >
          List Orders
        </Link>
        <Link
          to="/invoicecreate"
          className="block py-2 px-4 text-sm text-grey-800 hover:text-bakery-brown hover:bg-bakery-cream hover:bg-opacity-50"
          onClick={() => setIsNavExpanded(false)}
        >
          Create an Invoice
        </Link>
        <Link
          to="/invoiceslist"
          className="block py-2 px-4 text-sm text-grey-800 hover:text-bakery-brown hover:bg-bakery-cream hover:bg-opacity-50"
          onClick={() => setIsNavExpanded(false)}
        >
          List Invoices
        </Link>
      </div>
    </nav>
  );
};

export default Header;
