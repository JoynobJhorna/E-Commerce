import React from 'react'
import Banner from '../Components/Banner'
import FlashSales from '../Components/FlashSales'
import Categories from '../Components/Categories'
import BestSelling from '../Components/BestSelling'
import Enhance from '../Components/Enhance'



const Home = () => {
  return (
    <div>
      <Banner/>
      <FlashSales/>
      <Categories/>
      <BestSelling/>
      <Enhance/>
    </div>
  )
}

export default Home
