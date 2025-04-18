import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
const Collections = () => {
  const{products} = useContext(ShopContext)
  return (
    <>
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-1 pt-10 border-t'>
        {/* filter options */}
        <div className='min-w-60'>
          <p className='my-2 text-xl flex items-center cursor-pointer gap-2'></p>

        </div>
      
    </div>
    </>
  )
}

export default Collections;