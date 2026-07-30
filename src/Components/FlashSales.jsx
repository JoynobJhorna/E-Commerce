import React, { useEffect, useState } from 'react'
import Container from './Container'
import SecHead from './SecHead'
import { countDownDateAndTime } from 'countdown-date-time';     
import CountDown from './CountDown';


const FlashSales = () => {

    const conduct_date = '2026-08-30  23:59:59';

    const  countDown = countDownDateAndTime(conduct_date);
    const [count,setcount] = useState({})
   useEffect(()=>{
    setInterval(()=>{

        const countDown = countDownDateAndTime(conduct_date);
        setcount(countDown);

    },1000)
   
    
}, [])

const title="Today’s";
const heading="Flash Sales";

  return (
    <div>
        <Container >
            <div className='mb-20'>
                <div className="flex items-end gap-9.5">
                   
                <SecHead
            title={title}
            heading={heading}
                
                />
                <CountDown
                Days = {count.days}
                Hours = {count.hours}
                Minutes = {count.minutes}
                Seconds = {count.seconds}
                
                />
                </div>
              
            </div>
        </Container>
      
    </div>
  )
}

export default FlashSales

