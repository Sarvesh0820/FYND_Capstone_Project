// @ts-nocheck
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import { useNavigate } from 'react-router-dom'

const Related = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext)
    const [related, setRelated] = useState([])
    const navigate = useNavigate()


    const handleClick = (id) => {
        navigate(`/product/${id}`)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    
    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice()
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory)

            setRelated(productsCopy.slice(0,5))
        }
    }, [products,category, subCategory])
    

  return (
      <div className='my-24 '>
          <div className='text-center text-3xl py-2'>
              <h2 className='text-gray-400 text-4xl'>Related <span className='text-gray-600'>Products</span></h2>
          </div>
          <div className='grid grid-cols-2 m:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
              {
                  related.map((item, index) => (
                      <div
            key={index}
            onClick={() => handleClick(item._id)}
            className='cursor-pointer'
          >
            <ProductItem
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          </div>
                  ))
              }
              
          </div>
    </div>
  )
}

export default Related