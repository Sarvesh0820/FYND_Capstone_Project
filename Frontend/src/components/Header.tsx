import React, { useState } from 'react'
import {assets} from "../assets/asset.js"
import { Link, NavLink } from 'react-router-dom';
// flex items-center justify-between py-5 font-medium bg-gray-800
const Header = () => {
  const[visible, setVisible] = useState(false)
  return (
    <div className=' flex items-center justify-between py-2 font-medium '>
      <Link to="/">
        <img src={assets.logo} alt="Shopwise" className='w-24' />
      </Link> 
      <div className='flex items-center gap-6'>
        <img src={assets.search} alt="search" className='w-5 cursor-text' />

      </div>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-800'>
        <NavLink to='/' className='flex flex-col items-center gap1'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collections' className='flex flex-col items-center gap1'>
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap1'>
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap1'>
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/product/:productId' className='flex flex-col items-center gap1'>
          <p>Products</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <div className='group relative'>
          <img src={assets.profile} alt="profile" className='w-5 cursor-pointer' />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Account</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className='relative'>
          <img src={assets.cart} alt="cart" className='w-5 min-w-5 cursor-pointer' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
        </Link>
        <img onClick={() => {setVisible(true)}} src={assets.menu} alt="" className='w-5 cursor-pointer sm:hidden ' />
      </div>
      <div className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div onClick={() => setVisible(false)} className='flex flex-col text-gray-600'>
          <div className='flex items-center gap-4 p-3 cursor-pointer'>
            <img src={assets.drop} alt="" className='h-4 rotate-180' />
            <p>Go Back</p>
          </div>
          <NavLink className="py-2 pl-6 border" to="/">Home</NavLink>
          <NavLink className="py-2 pl-6 border" to="/collections">Collection</NavLink>
          <NavLink className="py-2 pl-6 border" to='/contact'>Contact</NavLink>
          <NavLink className="py-2 pl-6 border" to="/about">About</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header;