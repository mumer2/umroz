import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const handleProductsClick = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <>
      {/* Social Links */}
      <div className="bg-green-500 sticky top-0 text-white text-center py-2 flex items-center justify-between px-4">
  {/* Left social icons */}
  <div className="flex items-center space-x-4 text-xl">
    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
  </div>

  {/* Marquee text */}
  <marquee className="flex-1 mx-4 text-lg font-semibold">
    <span className="mx-4 inline-block">
      Welcome to UMROZ!
    </span>
    <span className="mx-4 inline-block">
      Enjoy our exclusive collection of premium watches.
    </span>
    <span className="mx-4 font-bold text-blue-800">
      Limited Time Offer!
    </span>
    <b className="mx-4 text-red-600">
      UPTO 30% OFF
    </b>
  </marquee>
</div>
      <nav className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 left-0 w-full z-50">
      {/* Fixed Navbar */}
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">⌚ UMROZ</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium text-gray-700 items-center">
          <li className="hover:text-green-500 cursor-pointer">
            <Link to="/">Home</Link>
          </li>

          {/* Products with Dropdown */}
          <li className="relative cursor-pointer">
            <div onClick={handleProductsClick} className="flex items-center gap-1">
              <span className="hover:text-green-500">Products</span>
              <i className={`fas fa-chevron-${isProductsOpen ? "up" : "down"} text-sm`}></i>
            </div>

            {isProductsOpen && (
              <ul className="absolute top-full mt-2 bg-white shadow-lg rounded-lg flex flex-col text-gray-700 min-w-[150px]">
                <li className="px-6 py-2 hover:bg-green-100 whitespace-nowrap">Mens</li>
                <li className="px-6 py-2 hover:bg-green-100 whitespace-nowrap">Womens</li>
              </ul>
            )}
          </li>

          <li className="hover:text-green-500 cursor-pointer">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="fas fa-bars text-gray-800 text-2xl"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden sticky top-16 left-0 w-full bg-white shadow-lg z-50">
          <ul className="flex flex-col items-center py-4 space-y-2 text-lg font-medium text-gray-700">
            <li className="hover:text-green-500 py-2">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>

            {/* Products */}
            <li className="px-4">
              <div
                onClick={handleProductsClick}
                className="flex justify-between items-center cursor-pointer hover:text-green-500"
              >
                <span>Products</span>
                <span className="text-sm">{isProductsOpen ? "▲" : "▼"}</span>
              </div>

              {isProductsOpen && (
                <ul className="flex flex-col items-start pl-6 mt-2 text-base">
                  <li className="hover:text-green-500 py-1">Men</li>
                  <li className="hover:text-green-500 py-1">Women</li>
                </ul>
              )}
            </li>

            <li className="hover:text-green-500 py-2">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
