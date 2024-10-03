import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const togglePagesDropdown = () => {
    setIsPagesOpen(!isPagesOpen);
  };
  const toggleBlogDropdown = () => {
    setIsBlogOpen(!isBlogOpen);
  };

  return (
    <nav className="bg-black backdrop-blur-md sticky top-0 z-50 w-full">
      {/* Desktop and Tablet Navbar */}
      <div className="flex items-center justify-between px-6 py-4 lg:px-28">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="./mq5.png"
            alt="Logo"
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
          <p className="text-xl sm:text-2xl font-bold text-white font-caudex">
            Sip Coffee
          </p>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div className="hidden lg:flex items-center gap-10">
          <Link to="/" className="text-white text-lg font-semibold font-caudex">
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-lg font-semibold font-caudex"
          >
            About
          </Link>
          <Link
            to="/menu"
            className="text-white text-lg font-semibold font-caudex"
          >
            Menu
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              onClick={toggleServicesDropdown}
              className="text-white font-semibold py-6 text-lg"
            >
              Services
            </button>
            <div
              className={`absolute left-0 top-16 hidden group-hover:block bg-white divide-y border-t-4 border-t-[#6f3727] divide-gray-100 shadow-lg w-44 z-10`}
            >
              <ul className="py-2 text-md text-gray-700 dark:text-gray-200 pointer-events-auto">
                <li className="border-b border-b-gray-300">
                  <Link
                    to="/service"
                    className="block px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servicedetail"
                    className="block px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Service Detail
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Pages Dropdown */}
          <div className="relative group">
            <button
              onClick={togglePagesDropdown}
              className="text-white font-semibold py-6 text-lg"
            >
              Page
            </button>
            <div
              className={`absolute left-0 top-16 hidden group-hover:block bg-white divide-y border-t-4 border-t-[#6f3727] divide-gray-100 shadow-lg w-44 z-10`}
            >
              <ul className="py-2 text-md text-gray-700 dark:text-gray-200 pointer-events-auto">
                <li className="border-b border-b-gray-300">
                  <Link
                    to="/gallery"
                    className="block px-4 text-lg py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Gallery
                  </Link>
                </li>
                <li className="border-b border-b-gray-300">
                  <Link
                    to="/faq"
                    className="block px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="border-b border-b-gray-300">
                  <Link
                    to="/team"
                    className="block px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Team
                  </Link>
                </li>
                <li className="border-b border-b-gray-300">
                  <Link
                    to="/shop"
                    className="block px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shopdetail"
                    className="block px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Shop Detail
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button
              onClick={toggleBlogDropdown}
              className="text-white font-semibold py-6 text-lg"
            >
              Blog
            </button>
            <div
              className={`absolute left-0 top-16 hidden group-hover:block bg-white divide-y border-t-4 border-t-[#6f3727] divide-gray-100 shadow-lg w-44 z-10`}
            >
              <ul className="py-2 text-md text-gray-700 dark:text-gray-200 pointer-events-auto">
                <li className="border-b border-b-gray-300">
                  <Link
                    to="/blog"
                    className="block px-4 text-lg py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="/blogdetail"
                    className="block px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Blog Details
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link
            to="/contact"
            className="text-white text-lg font-semibold font-caudex"
          >
            Contact
          </Link>
          <Link
            to="/booktable"
            className="text-md mx-8 font-semibold text-white bg-[#6f3727] px-6 py-3 rounded-md"
          >
            BOOK A TABLE
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black bg-opacity-95">
          <ul className="flex flex-col items-start px-4 py-4">
            <li className="mb-3">
              <Link
                to="/"
                className="text-white text-xl font-semibold py-2"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="mb-3">
              <Link
                to="/about"
                className="text-white text-xl font-semibold py-2"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/menu"
                className="text-white text-xl font-semibold py-2"
                onClick={toggleMenu}
              >
                Menu
              </Link>
            </li>
            <li className="">
              <button
                onClick={toggleServicesDropdown}
                className="text-white text-lg font-semibold py-1"
              >
                Services
              </button>
              {isServicesOpen && (
                <ul className="flex flex-col items-start px-4 py-2 bg-white rounded-md bg-opacity-90">
                  <li className="mb-3">
                    <Link
                      to="/service"
                      className="text-black text-lg font-semibold py-2"
                      onClick={toggleMenu}
                    >
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicedetail"
                      className="text-black text-lg font-semibold py-2"
                      onClick={toggleMenu}
                    >
                      Service Detail
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={togglePagesDropdown}
                className="text-white text-lg font-semibold py-1"
              >
                Pages
              </button>
              {isPagesOpen && (
                <ul className="flex flex-col items-start px-4 bg-white rounded-md bg-opacity-90">
                  <li className="mb-3">
                    <Link
                      to="/gallery"
                      className="text-black text-lg font-semibold py-2"
                      onClick={toggleMenu}
                    >
                      Gallery
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to="/faq"
                      className="text-black text-lg font-semibold py-2"
                      onClick={toggleMenu}
                    >
                      FAQ
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to="/team"
                      className="text-black text-lg font-semibold py-2"
                      onClick={toggleMenu}
                    >
                      Team
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to="/shop"
                      className="text-black text-lg font-semibold py-2"
                      onClick={toggleMenu}
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to="/shopdetail"
                      className="text-black text-lg font-semibold py-2"
                      onClick={toggleMenu}
                    >
                      Shop Detail
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={toggleBlogDropdown}
                className="text-white text-lg font-semibold py-3"
              >
                Blog
              </button>
              {isBlogOpen && (
                <ul className="flex flex-col items-start px-4 py-1 rounded-md bg-white bg-opacity-90">
                  <li className="mb-3">
                    <Link
                      to="/blog"
                      className="text-black text-lg font-semibold py-2"
                      onClick={toggleMenu}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to="/blogdetail"
                      className="text-black text-lg font-semibold py-1"
                      onClick={toggleMenu}
                    >
                      Blog Detail
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-6">
              <Link
                to="/contact"
                className="text-white text-lg font-semibold py-2"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/booktable"
                className="text-md font-semibold text-white bg-[#6f3727] px-6 py-3 rounded-md"
                onClick={toggleMenu}
              >
                BOOK A TABLE
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
