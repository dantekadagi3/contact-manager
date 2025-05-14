import React from 'react'
import checked from "../assets/images/checked.png"

const Success_display = () => {
  return (
    <div className='flex flex-col items-center justify-center shadow-lg p-6 rounded-xl bg-white w-full max-w-md mx-auto min-h-80 sm:min-h-96'>
      
      <div className='mb-4'>
        <img src={checked} alt="checked symbol" className='h-32 sm:h-48 object-contain' />
      </div>

      <div className='text-center'>
        <p className='text-lg sm:text-2xl text-gray-700 font-semibold'>
          Contact has been added successfully!
        </p>
      </div>
      
    </div>
  )
}

export default Success_display
