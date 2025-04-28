import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Important for autoplay
import 'swiper/css';
const Swiper = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    
    const handleProductsClick = () => {
        setIsProductsOpen(!isProductsOpen);
    };
    
    return (
        <div className="bg-white">
        <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
            <SwiperSlide>
            <img src="https://example.com/image1.jpg" alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://example.com/image2.jpg" alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://example.com/image3.jpg" alt="Slide 3" />
            </SwiperSlide>
        </Swiper>
        </div>
    );
};
export default Swiper;