import React from 'react'
import { NavLink } from 'react-router-dom';
import { asset } from '../assets/assets.js';

const Sidebar = () => {
  return (
      <div className='w-[18%] min-h-screen border-r-2 border-gray-800 text-white'>
          <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]  '>
          <NavLink to="/add" className="flex items-center gap-3 border border-gray-800 border-r-0 px-3 py-2 rounded-1">
              <img src={asset.add} alt="Add Icon" className='w-5 h-5' />
              <p className='hidden md:block'>Add Items</p>
              </NavLink>
          </div>
          <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
          <NavLink to="/list" className="flex items-center gap-3 border border-gray-800 border-r-0 px-3 py-2 rounded-1">
              <img src={asset.check} alt="Add Icon" className='w-5 h-5' />
              <p className='hidden md:block'>List Items</p>
              </NavLink>
          </div>
          <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
          <NavLink to="/orders" className="flex items-center gap-3 border border-gray-800 border-r-0 px-3 py-2 rounded-1">
              <img src={asset.cart} alt="Add Icon" className='w-5 h-5' />
              <p className='hidden md:block'>Orders</p>
              </NavLink>
          </div>
          
       </div>
//       <div className="w-[18%] min-h-screen bg-gray-100 border-r shadow-s">
//   <div className="flex flex-col gap-6 py-8 px-[15%] text-[15px] text-gray-800 font-medium">
//     <NavLink
//       to="/add"
//       className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-yellow-100 transition-colors"
//     >
//       <img src={asset.add} alt="Add Icon" className="w-5 h-5" />
//       <p className="hidden md:block">Add Items</p>
//     </NavLink>

//     <NavLink
//       to="/list"
//       className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-yellow-100 transition-colors"
//     >
//       <img src={asset.check} alt="List Icon" className="w-5 h-5" />
//       <p className="hidden md:block">List Items</p>
//     </NavLink>

//     <NavLink
//       to="/orders"
//       className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-yellow-100 transition-colors"
//     >
//       <img src={asset.cart} alt="Orders Icon" className="w-5 h-5" />
//       <p className="hidden md:block">Orders</p>
//     </NavLink>
//   </div>
// </div>
  )
}

export default Sidebar;