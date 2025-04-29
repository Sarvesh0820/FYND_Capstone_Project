import { useContext, useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { ShopContext } from '../context/ShopContext'
import Related from '../components/Related.js'

const Product = () => {
    const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const[size , setSize] = useState('')
  
  const fetProddata = () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    } )
  }

  useEffect(() => {
    fetProddata()
  }, [productId, products])
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onMouseOver={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded-md border border-gray-500' alt="" />
               ) )
            }
          </div>
          <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto' src={image} alt="" />

            </div>
        </div>
        {/* Product information */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          {/* <div className='flex items-center gap-1 mt-2'>
            <img src="" alt="" className="w-3 5" />
            <img src="" alt="" className="w-3 5" />
            <img src="" alt="" className="w-3 5" />
            <img src="" alt="" className="w-3 5" />
            <img src="" alt="" className="w-3 5" />
          </div> */}
          <p className='mt-5 text-sm'>{currency}<span className='text-2xl'>{productData.price}</span></p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {
                productData.sizes.map((item, index) => (
                  <button onClick={() => setSize(item)} className={`rounded-sm border border-gray-500 py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                ) )
              }
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm rounded-sm active:bg-gray-700'>Add To Cart</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1 '>
            <p>100% Original</p>
            <p>COD is available on this product</p>
            <p>7 Days return policy</p>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm '>Description</b>
          <p className='border px-5 py-3 text-sm '>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Discover the perfect blend of quality, style, and functionality with our latest collection. Crafted with attention to detail and designed to meet your everyday needs, this product offers unbeatable comfort and durability. Whether you’re upgrading your lifestyle or finding a thoughtful gift, it’s made to suit every occasion. Experience premium craftsmanship, modern aesthetics, and performance you can rely on — all in one perfect package.</p>
          <p>Elevate your everyday with a product designed to impress. Sleek, reliable, and made for modern living, it brings together high performance and elegant design. Whether you’re at home, at work, or on the move, it adds value and style to your routine. Engineered for satisfaction and built to last, this is more than just a purchase — it’s an upgrade to your lifestyle.</p>

          {/* realted products */}

          <Related category={productData.category} subCategory = {productData.subCategory} />

        </div>

      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product;