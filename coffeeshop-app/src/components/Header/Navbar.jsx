import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='grid grid-cols-3 bg-black opacity-90 pt-3 '>
      <div className='flex ml-28 items-center gap-3'>
        <img src="./mq5.png" alt="Logo" className='w-20 h-20' />
        <p className='text-2xl font-bold text-white font-caudex'>Sip Coffee</p>
      </div>
      <div className='col-span-2 flex justify-center items-center gap-10'>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => toggleDropdown('home')}
            className="text-white flex items-center gap-2 text-lg font-semibold font-caudex hover:text-white"
          >
            Home
            {/* <FaAngleDown /> */}
          </button>

          {/* Home Dropdown Menu */}
          {activeDropdown === 'home' && (
            <div className="absolute mt-5 w-40 border-t-4 border-t-[#6f3727] shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <Link
                  to="/"
                  onClick={closeDropdown}
                  className="block font-caudex px-4 py-2 text-lg border-b text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Home1
                </Link>
                <Link
                  to="/home"
                  onClick={closeDropdown}
                  className="block px-4 font-caudex py-2 text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Home2
                </Link>
              </div>
            </div>
          )}
        </div>

        <Link to='/about' className='text-white text-lg font-semibold font-caudex'>About</Link>
        <p className='text-white text-lg font-semibold font-caudex'>Menu</p>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => toggleDropdown('services')}
            className="text-white flex items-center gap-2 text-lg font-semibold font-caudex hover:text-white"
          >
            Services
            {/* <FaAngleDown /> */}
          </button>

          {/* Services Dropdown Menu */}
          {activeDropdown === 'services' && (
            <div className="absolute mt-5 w-40 border-t-4 border-t-[#6f3727] shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <Link 
                  to="/service"
                  onClick={closeDropdown}
                  className="block px-4 font-caudex py-2 text-lg border-b text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Services
                </Link>
                <Link
                  to="servicedetail"
                  onClick={closeDropdown}
                  className="block px-4 py-2 font-caudex text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Services Details
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => toggleDropdown('pages')}
            className="text-white flex items-center gap-2 text-lg font-semibold font-caudex hover:text-white"
          >
            Pages
            {/* <FaAngleDown /> */}
          </button>

          {/* Pages Dropdown Menu */}
          {activeDropdown === 'pages' && (
            <div className="absolute mt-5 border-t-4 border-t-[#6f3727] w-40 shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <Link
                  to="gallery"
                  onClick={closeDropdown}
                  className="block px-4 py-2 text-lg font-caudex border-b text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Gallery
                </Link>
                <Link
                  to="faq"
                  onClick={closeDropdown}
                  className="block px-4 py-2 font-caudex text-lg border-b text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Faq
                </Link>
                <Link
                  to="/team"
                  onClick={closeDropdown}
                  className="block px-4 py-2 text-lg font-caudex border-b text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Team
                </Link>
                <Link
                  to="/shop"
                  onClick={closeDropdown}
                  className="block px-4 py-2 text-lg font-caudex border-b pb-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Shop
                </Link>
                <Link
                  to="/shopdetail"
                  onClick={closeDropdown}
                  className="block px-4 py-2 text-lg font-caudex text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Shop Details
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => toggleDropdown('blog')}
            className="text-white flex items-center gap-2 text-lg font-semibold font-caudex hover:text-white"
          >
            Blog
            {/* <FaAngleDown /> */}
          </button>

          {/* Blog Dropdown Menu */}
          {activeDropdown === 'blog' && (
            <div className="absolute mt-5 w-40 border-t-4 border-t-[#6f3727] shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <Link
                  to="/Blog"
                  onClick={closeDropdown}
                  className="block px-4 py-2 text-lg border-b pb-3 font-caudex text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Blog
                </Link>
                <Link
                  to="/blogdetail"
                  onClick={closeDropdown}
                  className="block px-4 py-2 text-lg text-gray-700 font-caudex hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Blog Details
                </Link>
              </div>
            </div>
          )}
        </div>

        <Link to="/contact" className='text-white text-lg font-semibold font-caudex'>Contact</Link>
        <button className="text-md mx-8 font-semibold text-white bg-[#6f3727] px-6 py-3 rounded-md">BOOK A TABLE</button>
      </div>
    </div>
  );
};

export default Navbar;
