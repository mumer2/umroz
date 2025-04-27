import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome
import golden from "./assets/golden.jpeg";
import goldenblue from "./assets/goldenblue.jpeg";
import silverwhite from "./assets/silver white 3.jpeg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Important for autoplay
import 'swiper/css';

const products = [
  {
    id: 1,
    name: "Classic Full Golden Watch",
    description: "Timeless design with Full Golden strap.",
    // price: "1999-Rs",
    salePrice: "1999 Rs",
    originalPrice: "2499 Rs",
    image: golden,
    category: "Men",
    stock: true,
    sale: true,
  },
  {
    id: 2,
    name: "Modern Golden Watch with Blue Dial",
    description: "Smart and sleek Golden watch with blue dial.",
    // price: "1999-Rs",
    salePrice: "1999 Rs",
    originalPrice: "2499 Rs",
    image: goldenblue,
    category: "Women",
    stock: true,
    sale: false,
  },
  {
    id: 3,
    name: "Elegant Silver Watch with White Dial",
    description: "Elegant watch with silver finish for special occasions.",
    // price: "1799-Rs",
    salePrice: "1799 Rs",
    originalPrice: "2499 Rs",
    image: silverwhite,
    category: "Men",
    stock: true,
    sale: false,
  },
  {
    id: 4,
    name: "Modern Golden Watch with Blue Dial",
    description: "Smart and sleek Golden watch with blue dial.",
    // price: "1999-Rs",
    salePrice: "1999 Rs",
    originalPrice: "2499 Rs",
    image: goldenblue,
    category: "Men",
    stock: true,
    sale: true,
  },
];

const sliderImages = [
  golden,
  goldenblue,
  silverwhite,
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const slides = [golden, goldenblue, silverwhite];
  const [selectedProduct, setSelectedProduct] = useState(null);
  const phoneNumber = "+923229199459";

  const handleOrder = (product) => {
    const message = `Hello! I'm interested in:\n\n*${product.name}*\n${product.description}\nPrice: ${product.price}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Social Links */}
      <div className="announcement bg-green-500 text-white text-center py-2 flex items-center justify-between px-4">
  {/* Left social icons */}
  <div className="flex items-center space-x-4 text-xl">
    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
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

    

      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-white shadow sticky top-0 z-50">
        <div className="text-2xl font-bold text-gray-800">⌚ UMROZ</div>
        <ul className="hidden md:flex gap-8 text-lg font-medium text-gray-700">
          <li className="hover:text-green-500 cursor-pointer">Home</li>
          <li className="hover:text-green-500 cursor-pointer">Products</li>
          <li className="hover:text-green-500 cursor-pointer">Contact</li>
        </ul>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="fas fa-bars text-gray-800 text-2xl"></i>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <ul className="md:hidden bg-white flex flex-col items-center py-4 shadow">
          <li className="hover:text-green-500 py-2">Home</li>
          <li className="hover:text-green-500 py-2">Products</li>
          <li className="hover:text-green-500 py-2">Contact</li>
        </ul>
      )}

      {/* Auto Image Slider */}
    
<Swiper
  modules={[Autoplay]}
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  loop={true}
>
  {slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <img src={slide} alt={`slide-${index}`} className="h-96 w-full object-cover" />
    </SwiperSlide>
  ))}
</Swiper>

      {/* Men's Collection */}
      <section className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Men's Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.filter(p => p.category === "Men").map(product => (
            <ProductCard key={product.id} product={product} onSelect={() => setSelectedProduct(product)} />
          ))}
        </div>
      </section>

      {/* Women's Collection */}
      <section className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Women's Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.filter(p => p.category === "Women").map(product => (
            <ProductCard key={product.id} product={product} onSelect={() => setSelectedProduct(product)} />
          ))}
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-10 max-w-md w-full relative">
            <button
              className="absolute top-2 right-3 text-black-800 text-2xl cursor-pointer"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover mb-4 rounded-md" />
            <h2 className="text-2xl font-bold text-gray-800">{selectedProduct.name}</h2>
            <p className="text-gray-600 my-2">{selectedProduct.description}</p>
            {/* <p className="text-xl font-bold text-green-600">{selectedProduct.price}</p> */}
            <p className="text-xl font-bold text-green-600">{selectedProduct.salePrice}</p>
            <p className="text-gray-400 line-through text-sm">{selectedProduct.originalPrice}</p>
            <div className="flex items-center gap-4 mt-4">
              <input type="number" min="1" defaultValue="1" className="w-20 p-2 border rounded" />
              <button
                onClick={() => handleOrder(selectedProduct)}
                className="bg-green-500 hover:bg-green-600 text-white w-full font-bold py-2 px-4 rounded"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center text-gray-600 text-sm py-6">
        © 2025 UMROZ. All rights reserved.
      </footer>
    </div>
  );
};

const ProductCard = ({ product, onSelect }) => (
  <div
    className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transform hover:scale-105 transition cursor-pointer relative"
    onClick={onSelect}
  >
    <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
      {/* <p className="text-green-600 font-semibold">{product.price}</p> */}
    </div>
    <div className="mb-6">
    <p className="text-xl font-bold text-green-600">{product.salePrice}</p>
    <p className="text-gray-400 line-through text-sm">{product.originalPrice}</p>
  </div>
    {/* Badges */}
    {product.stock && (
      <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">In Stock</span>
    )}
    {product.sale && (
      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Sale</span>
    )}
  </div>
);

export default App;
