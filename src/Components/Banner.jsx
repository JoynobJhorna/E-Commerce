import React from 'react'
import Container from './Container'

const Banner = () => {
  return (
    <div className="pb-38.5">
      <Container>
        <div className="w-[20%] border-r ">
          <ul className="pt-10 space-y-4">
            <li>Woman’s Fashion</li>
            <li>Men’s Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Health & Beauty</li>
            <li>Groceries</li>
          </ul>
        </div>
        <div className="w-[80%] mt-10"></div>
      </Container>
    </div>
  )
}

export default Banner
