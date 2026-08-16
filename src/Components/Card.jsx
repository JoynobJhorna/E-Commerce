import React from 'react'

import { Rate } from 'antd'
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";



const Card = ({imgConsle,percentage,title,price,disprice,rating,review}) => {
  return (
    <>
    <div className='mt-10 w-67.5 h-87.5 group '>
      
        
        <div className="img-box relative overflow-hidden  bg-secondary p-4">
          <span className=" absolute left-3 top-3 py-2  px-3  text-xs bg-primary text-white ">{percentage}%</span>
          <div className='flex items-center justify-center h-40'>
          <img  src={imgConsle} alt="" className='h-full object-contain' />
        </div>
        <div className="absolute top-2 space-y-2 right-3">
            
          <div className="p-2.5 w-8.5 h-8.5  flex items-center justify-center bg-white rounded-full">

          <CiHeart  className='text-2xl'/>
          </div>
          <div className="p-2.5  w-8.5 h-8.5  flex items-center justify-center bg-white rounded-full">

          <FiEye  className='text-2xl'/>
          </div>
        </div>
        <div className="w-full">
          {/* <button className="text-white bg-black absolute -bottom-10 py-2  cursor-pointer group-hover:bottom-0 duration-390 ease-linear font-medium ">Add to card</button> */}
           <button className="text-white bg-black absolute -bottom-10 py-2 left-0 right-0 cursor-pointer group-hover:bottom-0 duration-390 ease-linear font-medium">Add to card</button>
        
        </div>
        </div>
      

      <div className='gap-2'>
        <h3 className="text-[16px] font-medium mt-4 mb-2">{title}</h3>
        <div className="flex gap-3 ">
          <h4 className="font-medium text-primary">{price}</h4>
          <h4 className="line-through text-[#0000005e]">{disprice}</h4>


        </div>
        <div className='flex mt-2'>
          <Rate allowHalf value={rating} />
          <h4 className="text-[#0000005e]">({review})</h4>
        </div>

      </div>
    </div>
    </>
  )
}

export default Card

