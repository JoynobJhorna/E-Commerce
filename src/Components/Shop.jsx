import React from 'react'
import Container from './Container'
import { IoIosArrowForward } from 'react-icons/io'

const Shop = () => {
  return (
    <div>
      <Container>
        <div className='flex gap-4'>
            <h4>home</h4>
            <h4>/</h4>
            <h4>shop</h4>
        </div>
        <div className="w-[20%] border-r  pr-4">
                                <h2 className='font-bold text-[20px]'>Shop by Category</h2>
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
                            <div className='w-[80%]'>

                            </div>
      </Container>
    </div>
  )
}

export default Shop
