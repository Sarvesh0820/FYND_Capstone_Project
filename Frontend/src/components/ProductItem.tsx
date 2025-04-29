import { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext)
 
  return (
      <Link className='text-gray-600 cursor-pointer border border-gray-300 rounded-sm' to={`/product/${id}`}>
          <div className='overflow-hidden w-full h-[300px] flex items-center justify-center '>
           {/* <div className='overflow-hidden '> */}
              <img src={image[0]} alt="" className='w-full h-full object-cover hover:scale-110 transition ease-in-out duration-300'/>
              {/* <img src={image[0]} alt="" className='w-full h-full object-cover hover:scale-110 transition ease-in-out duration-300'/> */}
          </div>
          <p className='pt-3 px-1 pb-1 text-sm'>{name}</p>
          <p className='text-black px-1 text-sm '>{currency}<span className='text-2xl'>{price}</span></p>
      </Link>
  )
}

export default ProductItem