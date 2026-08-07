import React from 'react'
import { useLocation } from 'react-router'

const BreadCrump = () => {
     let location = useLocation()

     let pathName = location.pathname.split("/")
  return (
    <div>
       <div className='flex gap-4'>
                    <h4>home</h4>
                    <h4>/</h4>
                    <h4>{pathName}</h4>
                </div>
    </div>
  )
}

export default BreadCrump
 