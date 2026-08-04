import React from 'react'
import Container from "./Container"
import SecHead from './SecHead'
import CategoriesItems from './CategoriesItems'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-11.5 h-11.5 rounded-full absolute -top-8 right-7 bg-secondary flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <GoArrowRight className="text-2xl text-black" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-11.5 h-11.5 rounded-full absolute -top-8 right-20 bg-secondary flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <GoArrowLeft className="text-2xl text-black" />
    </div>
  );
}

const SlickSlider = Slider?.default ?? Slider;

const PhoneIcon = () => (
  <svg className="mx-auto" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_13208_4097)">
      <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25.6666 7H31.1354" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 44.0052V44.0305" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="15.1666" y1="39.8334" x2="40.8333" y2="39.8334" stroke="black" strokeWidth="2" />
    </g>
    <defs>
      <clipPath id="clip0_13208_4097">
        <rect width="56" height="56" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ComputerIcon = () => (
  <svg className='mx-auto' width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_13208_4066)">
      <path d="M46.6667 9.33337H9.33333C8.04467 9.33337 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3334 9.33333 37.3334H46.6667C47.9553 37.3334 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33337 46.6667 9.33337Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.3334 46.6666H39.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 37.3334V46.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M35 37.3334V46.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 32H48" stroke="black" strokeWidth="2" strokeLinecap="round"/>
    </g>
    <defs>
      <clipPath id="clip0_13208_4066">
        <rect width="56" height="56" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

const Categories = () => {
  return (
    <div className="pb-20">
      <Container className="mt-15">
        <SecHead
          title="Categories"
          heading="Browse By Category"
        />
        <div className='mt-15 relative'>
          <SlickSlider {...settings}>
            <div>
              <CategoriesItems title="Phones"><PhoneIcon /></CategoriesItems>
            </div>
            <div>
              <CategoriesItems title="Computer"><ComputerIcon /></CategoriesItems>
            </div>
            <div>
              <CategoriesItems title="Phones"><PhoneIcon /></CategoriesItems>
            </div>
            <div>
              <CategoriesItems title="Phones"><PhoneIcon /></CategoriesItems>
            </div>
            <div>
              <CategoriesItems title="Phones"><PhoneIcon /></CategoriesItems>
            </div>
            <div>
              <CategoriesItems title="Phones"><PhoneIcon /></CategoriesItems>
            </div>
            <div>
              <CategoriesItems title="Phones"><PhoneIcon /></CategoriesItems>
            </div>
            <div>
              <CategoriesItems title="Phones"><PhoneIcon /></CategoriesItems>
            </div>
            <div>
              <CategoriesItems title="Phones"><PhoneIcon /></CategoriesItems>
            </div>
            
            
          </SlickSlider>
        </div>
        
         <div className=' border-b border-[#3e393949] mt-15 mb-20'></div>
      </Container>
    </div>
  )
}

export default Categories
