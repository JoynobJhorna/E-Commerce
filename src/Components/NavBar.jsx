import React from 'react'
import Container from "./Container.jsx"
import Logo from "../assets/Logo.png"
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { NavLink } from 'react-router';




const NavBar = () => {
  return (
    <div className="border-b">
    <Container>


      <div className="flex justify-between py-7 items-center">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <ul className="flex gap-12 ">
          <li><NavLink to="/"end>Home</NavLink></li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>

        </ul>
        <div className="flex items-center gap-6">
          <div className="relative flex justify-between items-center pl-7 py-1.75 bg-[#F5F5F5] ">


            <input type="text" className="[34]"placeholder='What are you looking for?' />
            <HiMagnifyingGlass className="absulote right-3 top-3 text-2xl" />
          </div>

          <div className="flex justify-between items-center gap-4">
            <CiHeart className="text-3xl" />
            <CiShoppingCart className="text-3xl"/>
          </div>
        </div>
      </div>
    </Container>
    </div>
  )
}

export default NavBar
