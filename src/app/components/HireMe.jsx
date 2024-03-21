"use client"
import React from 'react'

const HireMe = () => {
const handleClick = () => {
        window.location.href = 'mailto:evansabrahamj@gmail.com';
};
  return (
    <button onClick={handleClick} className='px-6 py-3 w-full sm:w-fit rounded-full  bg-gradient-to-br from-[#FFD700] via-[#8A2BE2] to-[#4169E1] hover:bg-slate-200 text-white mr-4'>Hire Me!</button>
  )
}

export default HireMe
