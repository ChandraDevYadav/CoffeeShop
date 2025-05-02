import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const checkLoginStatus = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    checkLoginStatus();
    window.addEventListener("storage", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    // Trigger storage event to update all tabs
    window.dispatchEvent(new Event("storage"));
    setIsUserDropdownOpen(false);
    navigate("/login");
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between px-6 py-4 lg:px-28">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="./mq5.png" alt="Logo" className="w-16 h-16 sm:w-20 sm:h-20" />
          <p className="text-xl sm:text-2xl font-bold text-white font-caudex">Sip Coffee</p>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <Link to="/" className="text-white text-lg font-semibold font-caudex">Home</Link>
          <Link to="/about" className="text-white text-lg font-semibold font-caudex">About</Link>
          <Link to="/menu" className="text-white text-lg font-semibold font-caudex">Menu</Link>
          <Link to="/contact" className="text-white text-lg font-semibold font-caudex">Contact</Link>
          <Link to="/booktable" className="text-md mx-8 font-semibold text-white bg-[#6f3727] px-6 py-3 rounded-md">BOOK A TABLE</Link>

          {/* Auth Buttons or User Dropdown */}
          {!isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-white font-semibold text-lg hover:underline">Login</Link>
              <Link to="/register" className="text-white font-semibold text-lg hover:underline">Register</Link>
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="flex items-center text-white"
              >
                <FaUser className="text-xl" />
              </button>
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsUserDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsUserDropdownOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleLogoutClick}
                    className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black bg-opacity-95">
          <ul className="flex flex-col items-start px-4 py-4">
            <li className="mb-3">
              <Link to="/" className="text-white text-xl font-semibold py-2" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="mb-3">
              <Link to="/about" className="text-white text-lg font-semibold py-2" onClick={toggleMenu}>About</Link>
            </li>
            <li className="mb-3">
              <Link to="/menu" className="text-white text-lg font-semibold py-2" onClick={toggleMenu}>Menu</Link>
            </li>
            <li className="mb-3">
              <Link to="/contact" className="text-white text-lg font-semibold py-2" onClick={toggleMenu}>Contact</Link>
            </li>
            <li className="mb-3">
              <Link to="/booktable" className="text-md font-semibold text-white bg-[#6f3727] px-6 py-3 rounded-md" onClick={toggleMenu}>BOOK A TABLE</Link>
            </li>
            {!isLoggedIn ? (
              <>
                <li className="mb-3">
                  <Link to="/login" className="text-white text-lg font-semibold py-2" onClick={toggleMenu}>Login</Link>
                </li>
                <li className="mb-3">
                  <Link to="/register" className="text-white text-lg font-semibold py-2" onClick={toggleMenu}>Register</Link>
                </li>
              </>
            ) : (
              <>
                <li className="mb-3">
                  <Link to="/profile" className="text-white text-lg font-semibold py-2" onClick={toggleMenu}>Profile</Link>
                </li>
                <li className="mb-3">
                  <Link to="/settings" className="text-white text-lg font-semibold py-2" onClick={toggleMenu}>Settings</Link>
                </li>
                <li className="mb-3">
                  <button
                    onClick={() => { handleLogoutClick(); toggleMenu(); }}
                    className="text-white text-lg font-semibold py-2"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;