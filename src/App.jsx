import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Products from './Products';
import Contact from './Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes> {/* Define your routes */}
        <Route path="/" element={<Products />} /> {/* Route for Home page */}
        <Route path="/Contact" element={<Contact />} /> {/* Route for Contact page */}
      </Routes>
    </>
  );
};

export default App;
