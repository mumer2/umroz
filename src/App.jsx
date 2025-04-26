import React, { useState } from "react";
import golden from "./assets/golden.jpeg";
import goldenblue from "./assets/goldenblue.jpeg";
import silverwhite from "./assets/silver white 3.jpeg";
const products = [
  {
    id: 1,
    name: "Classic Leather Watch",
    description: "Timeless design with genuine leather strap.",
    price: "$249",
    image: golden,
  },
  {
    id: 2,
    name: "Modern Digital Watch",
    description: "Smart and sleek digital watch with multiple features.",
    price: "$199",
    image: goldenblue,
  },
  {
    id: 3,
    name: "Elegant Silver Watch",
    description: "Elegant watch with silver finish for special occasions.",
    price: "$299",
    image: silverwhite,
  },
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "+923229199459"; // Replace with your number

  const handleOrder = (product) => {
    const message = `Hello! I'm interested in:\n\n*${product.name}*\n${product.description}\nPrice: ${product.price}\n\nImage: ${product.image}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      {/* Navbar */}
      <div className="announcement bg-green-500 text-white text-center py-2">
        <marquee className="text-lg font-semibold flex items-center justify-center space-x-6">
          <span className="inline-block">
          Welcome to UMROZ!
          </span>
          <span className="inline-block">
          Enjoy our exclusive collection of premium watches.
          </span>
          <span className="font-bold text-blue-800"> Limited Time Offer! </span>
          <b className="text-red-600">UPTO 30% OFF</b>
        </marquee>
      </div>
      <nav className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
        <div className="text-2xl font-bold text-gray-800">⌚ UMROZ</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium text-gray-700">
          <li className="hover:text-green-500 cursor-pointer transition">Home</li>
          <li className="hover:text-green-500 cursor-pointer transition">Products</li>
          <li className="hover:text-green-500 cursor-pointer transition">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-white shadow-md py-4 flex flex-col items-center gap-6 text-lg font-medium text-gray-700">
          <li className="hover:text-green-500 cursor-pointer transition">Home</li>
          <li className="hover:text-green-500 cursor-pointer transition">Products</li>
          <li className="hover:text-green-500 cursor-pointer transition">Contact</li>
        </ul>
      )}

      {/* Header */}
      <header className="text-center my-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-2 animate-bounce">Premium Watches</h1>
        <p className="text-gray-600 text-lg">Find the perfect watch for every occasion</p>
      </header>

      {/* Products */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto p-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-500"
          >
            <img
              src={product.image} 
              alt={product.name}
              className="w-full h-72 object-cover hover:opacity-90 transition duration-300"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-xl font-bold text-gray-800 mb-6">{product.price}</p>
              <button
                onClick={() => handleOrder(product)}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500 text-sm p-4">
        © 2025 <a href="http://">UMROZ</a>. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
