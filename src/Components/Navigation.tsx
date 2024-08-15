import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Images/swift-logo.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 fixed top-0 left-0 w-full z-50 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <img className="w-10 h-10 rounded-full" src={logo} alt="swift-logo" />
          <h1 className="text-xl md:text-xl-custom font-bold text-[#7a1212]">Swift Delivery</h1>
        </div>
        <div className="hidden md:flex space-x-8 text-lg text-[#7a1212]">
          <Link
            to="/"
            className={`hover:text-[#7a1212] hover:underline transition-colors duration-300 ${
              location.pathname === "/" || location.pathname === "/home" ? "underline font-bold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/service"
            className={`hover:text-[#7a1212] hover:underline transition-colors duration-300 ${
              location.pathname === "/service" ? "underline font-bold" : ""
            }`}
          >
            Service
          </Link>
          <Link
            to="/about"
            className={`hover:text-[#7a1212] hover:underline transition-colors duration-300 ${
              location.pathname === "/about" ? "underline font-bold" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`hover:text-[#7a1212] hover:underline transition-colors duration-300 ${
              location.pathname === "/contact" ? "underline font-bold" : ""
            }`}
          >
            Contact
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center text-gray-900"
          aria-label="Toggle Navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white shadow-md mt-2 border-t border-gray-200`}>
        <ul className="space-y-4 px-4 py-2 text-lg text-gray-900">
          <li>
            <Link
              to="/"
              className={`block hover:text-[#7a1212] transition-colors duration-300 ${
                location.pathname === "/" || location.pathname === "/home" ? "underline font-bold" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              className={`block hover:text-[#7a1212] transition-colors duration-300 ${
                location.pathname === "/service" ? "underline font-bold" : ""
              }`}
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`block hover:text-[#7a1212] transition-colors duration-300 ${
                location.pathname === "/about" ? "underline font-bold" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`block hover:text-[#7a1212] transition-colors duration-300 ${
                location.pathname === "/contact" ? "underline font-bold" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;