import React from 'react'
import Container from "./Container.jsx"
import Logo from "../assets/Logo.png"
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";




const NavBar = () => {
  return (
    <Container>


      <div className=''>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>

        </ul>
        <div>
          <div className="relative">


            <input type="text" placeholder='What are you looking for?' />
            <HiMagnifyingGlass className="absulote" />
          </div>

          <div className="flex justify-between">
            <CiHeart />
            <CiShoppingCart />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default NavBar
