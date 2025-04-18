import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
    const {currency} = useContext(ShopContext) 
  return (
      <Link className='text-gray-600 cursor-pointer border border-gray-300' to={`/product/${id}`}>
          <div className='overflow-hidden '>
              <img src={image[0]} alt="" className='hover:scale-110 transition ease-in-out'/>
          </div>
          <p className='pt-3 px-1 pb-1 text-sm'>{name}</p>
          <p className='px-1 text-sm font-medium'>{currency}{price}</p>
      </Link>
  )
}

export default ProductItem