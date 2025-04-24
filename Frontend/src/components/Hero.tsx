import React from 'react'
import {Link} from "react-router-dom"
import hero from "../assets/hero.png"

const Hero = () => {
  return (
    <>
   <div className="w-full mx-auto">
  <h1 className="text-2xl sm:text-4xl lg:text-5xl leading-relaxed font-semibold text-center text-gray-600 bg-rose-100  py-4 sm:py-6 lg:py-8 px-4">
  Because You Deserve To Look Good
        </h1>
        </div>

    {/* <div className='flex flex-col sm:flex-row border border-gra my-2'>

      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-20 md:w-22 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>CHECK OUT OUR BESTSELLERS</p>
            </div>
            <h1 className='text-3xl sm:py-3 lg:text-5xl leading relaxed'>New Arrivals</h1>
            <div className='flex items-center gap-2'>
              <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
              <p></p>
            </div>
        </div>
        </div>

      </div> */}

      {/* <img src={hero} alt="New Arrivals Banner" className="w-full object-cover" /> */}
      
      <Link to="/collections">
  <img
    src={hero}
    alt="New Arrivals Banner"
    className="w-full object-cover cursor-pointer"
  />
</Link>
        
      </>
  )
}

export default Hero;