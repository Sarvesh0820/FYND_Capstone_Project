import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'

const NewArrivals = () => {
    const { products } = useContext(ShopContext)
    const [newArrival, setNewArrival] = useState([])
    
    useEffect(() => {
        setNewArrival(products.slice(0,10))
    },[])
    
  return (
      <>
          <div  className='my-10'> 
              <h2 className='text-gray-400 text-center py-6 text-5xl'>New <span className='text-gray-600'>Arrivals</span></h2>
              
              <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6 '>
                  {
                      newArrival.map((item, index) => (
                          <ProductItem key={index} id={item._id} image={item.image} price={item.price} name={item.name} />
                      ))
                  }
              
          </div>
          </div>
          
          
      </>
    
  )
}

export default NewArrivals