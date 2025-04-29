import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backend_url } from '../App'
import { toast } from 'react-toastify'
import { currency } from '../App'

const List = ({token}) => {
  const [list, setList] = useState([])
  
  const fetchList = async () => {
    try {
      const response = await axios.get(backend_url + '/api/product/list')

      console.log(response.data,"data")
      if (response.data.success) {
         setList(response.data.products)
      } else {
        toast.error(response.data.message)
      }
      console.log(list,"list")

     
    } catch (error) {
      console.log(error)
       toast.error(error.message)
    }

  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backend_url + '/api/product/remove', { id }, { headers: { token } })
      
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()

  },[])
  return (
    <>
      <p className='mt-3 mb-3 text-2xl text-gray-900 '>All Products</p>
      <div className='flex flex-col gap-2'>
        {/* list table title */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border border-gray-700 bg-orange-300 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>
        {/* product list  */}
        {
          list.map((item, index) => (
            <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border border-gray-700 bg-orange-50 text-black text-sm ' key={index}>
              <img className='w-12' src={item.image[0]} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p onClick={() => removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>

            </div>
          ))
        }
      </div>
    </>
  )
}

export default List