import React, { useContext, useState } from 'react'
import {assets} from "../assets/asset.js"
import { Link, NavLink, useLocation} from 'react-router-dom';
import { ShopContext } from '../context/ShopContext.js';
// flex items-center justify-between py-5 font-medium bg-gray-800
const Header = () => {
  const [visible, setVisible] = useState(false)
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)
  const location = useLocation();

  const handleSearchClick = () => {
    if (!location.pathname.includes("collections")) {
      navigate("/collections"); // first navigate to collections page
    }
    setShowSearch(true); // then open search
  };
  
  const logOut = () => {
      navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }


  return (
    <div className=' flex items-center justify-between py-2 font-medium '>
      <Link to="/">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide uppercase text-yellow-500 bg-clip-text text-transparent drop-shadow-lg flex gap-[2px]">
  {'Shopwise'.split('').map((letter, index) => (
    <span
      key={index}
      className={`inline-block animate-wave`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {letter}
    </span>
  ))}
</h1>
      </Link> 
      {/* <div className='flex items-center gap-6'>
        <img src={assets.search} alt="search" className='w-5 cursor-text' />

      </div> */}
      <ul className='hidden sm:flex gap-5 text-md text-gray-800'>
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
        
      </ul>
      <div className='flex items-center gap-6'>
        <img onClick={handleSearchClick} src={assets.search} alt="search" className='w-5 cursor-pointer' />
        <div className='group relative'>
         <img onClick={() => token ? null : navigate('/login')} src={assets.profile} alt="profile" className='w-5 cursor-pointer' />
          {
            token && <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
              <p onClick={logOut} className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
          }
        </div>
        <Link to="/cart" className='relative'>
          <img src={assets.cart} alt="cart" className='w-5 min-w-5 cursor-pointer' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
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