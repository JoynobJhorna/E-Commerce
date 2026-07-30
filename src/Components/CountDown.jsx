import React from 'react'

const CountDown = ({Days,Hours,Minutes,Seconds}) => {
  return (
    <div className='flex items-center gap-9.5'>
        <div>
            <h3 className="font-medium text-xm">Days</h3>
            <h2 className="font-bold text-3xl">{Days}</h2>
        </div>
        <div>
            <h3 className="font-medium text-xm">Hours</h3>
            <h2 className="font-bold text-3xl">{Hours}</h2>
        </div>
        <div>
            <h3 className="font-medium text-xm">Minutes</h3>
            <h2 className="font-bold text-3xl">{Minutes}</h2>
        </div>
        <div>
            <h3 className="font-medium text-xm">Seconds</h3>
            <h2 className="font-bold text-3xl">{Seconds}</h2>
        </div>
      
    </div>
  )
}

export default CountDown
