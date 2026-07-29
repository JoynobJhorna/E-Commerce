import React from 'react'
import Container from './Container'
import { IoIosArrowForward } from "react-icons/io";
// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

 import BannerImg from "../assets/BannerImg.jpg"
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
import { Pagination } from 'swiper/modules';

 


const Banner = () => {
  
 
   
    return (
        <div className="pb-38.5">
            <Container>
                <div className="flex">
                    <div className="w-[20%] border-r  pr-4">
                        <ul className="pt-10 space-y-4">
                            <li className="flex items-center gap-12.75">Woman’s Fashion<IoIosArrowForward /></li>
                            <li className="flex items-center gap-18.5">Men’s Fashion<IoIosArrowForward /></li>
                            <li>Electronics</li>
                            <li>Home & Lifestyle</li>
                            <li>Medicine</li>
                            <li>Sports & Outdoor</li>
                            <li>Health & Beauty</li>
                            <li>Groceries</li>
                        </ul>
                    </div>

                    <div className="mt-10 w-[80%] pl-4">
                        <Swiper
                            spaceBetween={30}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src={BannerImg} alt="BannerImg" className="h-86 w-full rounded-lg object-cover" /></SwiperSlide>
                            <SwiperSlide><img src={BannerImg} alt="BannerImg" className="h-86 w-full rounded-lg object-cover" /></SwiperSlide>
                            <SwiperSlide><img src={BannerImg} alt="BannerImg" className="h-86 w-full rounded-lg object-cover" /></SwiperSlide>
                            <SwiperSlide><img src={BannerImg} alt="BannerImg" className="h-86 w-full rounded-lg object-cover" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Container>
        </div>
        
    )
}

export default Banner
