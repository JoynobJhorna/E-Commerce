import React from 'react'

const SecHead = ({title,heading}) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="w-5 h-10 bg-primary rounded-sm">  </div>
        <h4 className='text-primary font-semibold'>{title}</h4>
    
      
      </div>
      <h4 className='text-[36px] font-semibold mt-6'>{heading}</h4> 
     
    </div>
  )
}

export default SecHead
