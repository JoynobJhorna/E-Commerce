import React from 'react'
import Banner from '../Components/Banner'
import FlashSales from '../Components/FlashSales'
import Categories from '../Components/Categories'
import BestSelling from '../Components/BestSelling'
import Enhance from '../Components/Enhance'
import OurProducts from '../Components/OurProducts'
import Featured from '../Components/Featured'



const Home = () => {
  return (
    <div>
      <Banner/>
      <FlashSales/>
      <Categories/>
      <BestSelling/>
      <Enhance/>
      <OurProducts/>
      <Featured/>
    </div>
  )
}

export default Home
