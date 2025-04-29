import  { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'


const BestSeller = ({id, name, image, price}) => {
    const { products } = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])
    
    useEffect(() => {
        const prod = products.filter((item) => (item.bestSeller))
        setBestSeller(prod.slice(0,15))

    },[products])
  return (
      <>
          <div className='my-10'>
              <h2 className='text-gray-400 text-center py-6 text-5xl'>Best <span className='text-gray-600'>Sellers</span></h2>
              <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6'>
                  {
                      bestSeller.map((item, index) => (
                          <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                      ))
                  }
                  
              </div>
          </div>
          
      </>
          
  )
}

export default BestSeller;