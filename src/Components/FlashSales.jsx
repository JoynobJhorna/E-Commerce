import React, { useEffect, useState } from 'react'
import Container from './Container'
import SecHead from './SecHead'
import { countDownDateAndTime } from 'countdown-date-time';
import CountDown from './CountDown';
import Card from './Card';
import Button from './Button';
import GmConsole from "../assets/GmConsole.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";




const SlickSlider = Slider?.default ?? Slider;

const FlashSales = () => {

    const conduct_date = '2026-08-30  23:59:59';

    const [count, setcount] = useState({})
    useEffect(() => {
        const timer = setInterval(() => {
            const countDown = countDownDateAndTime(conduct_date);
            setcount(countDown);
        }, 1000)

        return () => clearInterval(timer);
    }, [conduct_date])

     function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="w-11.5 h-11.5 rounded-full absolute -top-8 right-7 bg-[#f5f5f5] flex items-center justify-center cursor-pointer"
    //   style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}>
        <GoArrowRight className="text-2xl text-black "/>

        </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="w-11.5 h-11.5 rounded-full absolute  -top-8 right-20 bg-[#f5f5f5] flex items-center justify-center cursor-pointer"
    //   style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
        
        <GoArrowLeft className="text-2xl text-black "/>


        </div>
  );
}

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 640,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //         }
        //     }
        // ]
    };
    const title = "Today’s";
    const heading = "Flash Sales";

    return (
    <div>
        <Container>
            
                <div className='mb-20'>
                    <div className="flex items-end gap-9.5">

                        <SecHead
                            title={title}
                            heading={heading}

                        />
                        <CountDown
                            Days={count.days}
                            Hours={count.hours}
                            Minutes={count.minutes}
                            Seconds={count.seconds}

                        />
                    </div>
                    <SlickSlider {...settings}>
                        <div>

                            <Card
                                imgConsle={GmConsole}
                                percentage={-40}
                                title="HAVIT HV-G92 Gamepad"
                                price="120"
                                disprice="160"
                                review="88"
                            />
                        </div>
                        <div>

                            <Card
                                imgConsle={GmConsole}
                                percentage={-40}
                                title="HAVIT HV-G92 Gamepad"
                                price="120"
                                disprice="160"
                                review="88"
                            />
                        </div>
                        <div>

                            <Card
                                imgConsle={GmConsole}
                                percentage={-40}
                                title="HAVIT HV-G92 Gamepad"
                                price="120"
                                disprice="160"
                                review="88"
                            />
                        </div>
                        <div>

                            <Card
                                imgConsle={GmConsole}
                                percentage={-40}
                                title="HAVIT HV-G92 Gamepad"
                                price="120"
                                disprice="160"
                                review="88"
                            />
                        </div>
                        <div>

                            <Card
                                imgConsle={GmConsole}
                                percentage={-40}
                                title="HAVIT HV-G92 Gamepad"
                                price="120"
                                disprice="160"
                                review="88"
                            />
                        </div>
                        <div>

                            <Card
                                imgConsle={GmConsole}
                                percentage={-40}
                                title="HAVIT HV-G92 Gamepad"
                                price="120"
                                disprice="160"
                                review="88"
                            />
                        </div>

                    </SlickSlider>
                </div>
                
            
                 <Button className='mx-auto block mt-10'>View All Products</Button>
        <div className=' border-b border-[#3e393949] mt-15 mb-20'></div>
      </Container>
    </div>
                
);
};

export default FlashSales

