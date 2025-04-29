import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {backend_url, currency} from "../App"
import { toast } from 'react-toastify'
import { asset } from '../assets/assets.js'
const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])
  const fetchAllOrders = async () => {
    if (!token) {
      return null
    }

    try {
      const response = await axios.post(backend_url + '/api/order/list', {}, { headers: { token } })
      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(backend_url + '/api/order/status', { orderId, status: e.target.value }, { headers: { token } })
      
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

  }

  useEffect(() => {
    fetchAllOrders()
  },[token])
  return (
    <div>
      <p className='mt-3 mb-3 text-2xl text-gray-900 '>All Orders</p>
      <div>
        {
          orders.map((order, index) => (
            <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-700 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-black bg-orange-50' key={index}>
              <img className='w-12' src={asset.cart} alt="" />
              <div>
              <div>
                {
                  order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return <p className='py-0.5' key={index}>{item.name} x {item.quantity} <span>{item.size}</span></p>
                    } else {
                      return <p className='py-0.5' key={index}>{item.name} x {item.quantity} <span>{item.size}</span> ,</p>
                    }
                  })
                }
              </div>
              <p className='mt-3 mb-2 font-medium'>{order.address.fullName}</p>
              <div>
                <p>{order.address.add1 + ", "}</p>
                <p>{order.address.city + ", " + order.address.state + "," + order.address.country + ", " + order.address.pincode}</p>
              </div>
              <p>{order.address.mobile}</p>
              </div>
              <div>
                
                <p className='text-sm sm:text-[15px]'>Items: {order.items.length}</p>
                <p className='mt-3'>PaymentMethod: {order.paymentMethod}</p>
                <p>Payment: {order.payment ? 'Done' : 'Pending'}</p>
                <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                
              </div>
              <p className='text-sm sm:text-[15px]'>{currency}{order.amount}</p>
              <select onChange={(e) => statusHandler(e,order._id)} value={order.status} className='p-2 font-semibold bg-orange-300' >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out For Delivery">Out For Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
               </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders