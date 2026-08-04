import React from 'react'
import Container from './Container'
import SecHead from './SecHead'
import Card from './Card'
import Cesar from '../assets/Cesar.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import Button from './Button'


const SlickSlider = Slider?.default ?? Slider;

const SampleNextArrow = (props) => {
  const { onClick } = props;

  return (
    <div
      className="absolute -top-10 right-0 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-secondary"
      onClick={onClick}
    >
      <GoArrowRight className="text-2xl text-black" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;

  return (
    <div
      className="absolute -top-10 right-14 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-secondary"
      onClick={onClick}
    >
      <GoArrowLeft className="text-2xl text-black" />
    </div>
  );
};

const OurProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="mb-42">
      <Container>
        <SecHead title="Our Products"
         heading="Explore Our Products" />

        <div className="relative overflow-visible ">
          <SlickSlider {...settings}>
            <div className=" gap-7.5">
              <Card imgConsle={Cesar}
               title="Breed Dry Dog Food"
                price="$100"
                 review="35" />
              <Card imgConsle={Cesar} 
              title="Breed Dry Dog Food" 
              price="$100" 
              review="35" />
            </div>
            <div className="gap-7.5 ">
              <Card imgConsle={Cesar} 
              title="Breed Dry Dog Food"
               price="$100"
                review="35" />
                
              <Card imgConsle={Cesar}
              
              title="Breed Dry Dog Food"
               price="$100"
                review="35" />
            </div>
            <div className=" gap-7.5">
              <Card imgConsle={Cesar}
               title="Breed Dry Dog Food" 
               price="$100" 
               review="35" />
              <Card imgConsle={Cesar} 
              title="Breed Dry Dog Food" 
              price="$100" 
              review="35" />
            </div>
            <div className=" gap-7.5">
              <Card imgConsle={Cesar}
               title="Breed Dry Dog Food"
                price="$100" 
                review="35" />
              <Card imgConsle={Cesar}
               title="Breed Dry Dog Food" 
               price="$100" 
               review="35" />
            </div>
            <div className="gap-7.5">
              <Card imgConsle={Cesar}
               title="Breed Dry Dog Food"
                price="$100" 
                review="35" />
              <Card imgConsle={Cesar}
               title="Breed Dry Dog Food"
                price="$100" 
                review="35" />
            </div>
          </SlickSlider>
        </div>
        <Button className='mx-auto block mt-15'>View All Products</Button>
      </Container>
    </div>
  );
};

export default OurProducts
