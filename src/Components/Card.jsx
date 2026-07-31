import React from 'react'
import GmConsole from "../assets/GmConsole.png"
import { Rate } from 'antd';

const Card = () => {
  return (
    <div className='mt-10'>
      <div classname="shadow-[#f5f5f55b]">
        <img src={GmConsole}alt="" />
      </div>
      <div>
        <h3 className="text-[16px] font-medium mt-4 mb-2">HAVIT HV-G92 Gamepad</h3>
        <div className="flex gap-3 ">
        <h4 className="font-medium text-primary">$120</h4>
        <h4 className="line-through text-[#0000005e]">$160</h4>

        
        </div>
        <Rate allowHalf defaultValue={5} />;
      </div>
    </div>
  )
}

export default Card

