import React from 'react'
import Container from './Container'

const Header = () => {
  return (
    <div className="bg-black text-white py-3.75">
      <Container>
        <div className="flex justify-between items-center">
          <div/>
          <p className="text-sm space-x-2">
            <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
            <span className="border-b">ShopNow</span>
          </p>
          <select name="" id="" className='bg-black text-white text-sm'>
            <option value="">English</option>
            <option value="">Bangla</option>
            <option value="">spanish</option>
            <option value="">japanese</option>
            <option value="">urdu</option>

          </select>
        </div>
      </Container>
    </div>
  )
}

export default Header
