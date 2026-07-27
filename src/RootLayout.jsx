import React from 'react'
import { Outlet } from 'react-router'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

const RootLayout = () => {
  return (
    <div>
        <Header/>
        <NavBar/>
        <Outlet/>
        <Footer/>
      
    </div>
  )
}

export default RootLayout
