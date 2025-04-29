// @ts-nocheck
import { useContext, useState } from 'react'
import CartTotal from '../components/CartTotal'
import {assets} from "../assets/asset.js"
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const OrderPlace = () => {
  const [method, setMethod] = useState('cod')
   const {navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, products, gst} = useContext(ShopContext)
  const [formData, setFormData] = useState({
    country:'',
    fullName: '',
    email: '',
    mobile: '',
    pincode: '',
    add1: '',
    add2: '',
    landmark: '',
    city: '',
    state:''
  })

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value

    setFormData(data => ({...data,[name]:value}))
  }

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      reciept: order.receipt,
      handler: async (response) => {
        console.log(response)
        try {
          const { data } = await axios.post(backendUrl + '/api/order/verifyRazorpay', response, { headers: { token } })
          
          if (data.success) {
            navigate('/orders')
            setCartItems({})
          }
        } catch (error) {
          console.log(error)
          toast.error(error)
        }
      }

    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }


  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      let orderItems = []
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }

      console.log(orderItems)

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + gst
      }
      console.log(orderData)
      console.log(method)

      switch (method) {
        // api calls for cod 
        case 'cod':
          { const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } })
          console.log(response.data.success)
          if (response.data.success) {
            setCartItems({})
            navigate('/orders')
          } else {
            toast.error(response.data.message)
          }
            break;
          }
          
        case 'razorpay':
          {
            const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, { headers: { token } }) 
            if (responseRazorpay.data.success) {
              initPay(responseRazorpay.data.order)
              
            }
          break; }
        
        default:
          break;
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  
 
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <h2 className='text-gray-400 text-4xl'>Delivery <span className='text-gray-600'>Info</span></h2>
        </div>
        <div className="mb-4">
    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
    Country
  </label>
          <input
          required
            onChange={onChangeHandler}
            name='country'
            value={formData.country}
    id="country"
    type="text"
            className="border border-gray-500 rounded py-1.5 px-3.5 mb-2 w-full"
            
          />
  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
    First and Last Name
  </label>
          <input
          required
            onChange={onChangeHandler}
            name='fullName'
            value={formData.fullName}
    id="fullName"
    type="text"
    className="border border-gray-500 rounded py-1.5 px-3.5 mb-2 w-full"
          />
  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
    Email
  </label>
          <input
          required
             onChange={onChangeHandler}
            name='email'
            value={formData.email}    
    id="email"
    type="email"
    className="border border-gray-500 rounded mb-2 py-1.5 px-3.5 w-full"
          />
  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
    Mobile number
  </label>
          <input
          required
            onChange={onChangeHandler}
            name='mobile'
            value={formData.mobile}   
    id="mobile"
    type="text"
    className="border border-gray-500 rounded mb-2 py-1.5 px-3.5 w-full"
          />
  <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
    Pincode
  </label>
          <input
          required
            onChange={onChangeHandler}
            name='pincode'
            value={formData.pincode}
    id="pincode"
    type="text"
    placeholder='6 digits [0-9] PIN code'
    className="border border-gray-500 rounded mb-2 py-1.5 px-3.5 w-full"
          />
  <label htmlFor="add1" className="block text-sm font-medium text-gray-700 mb-1">
    Flat, House no., Building, Company, Apartment
  </label>
          <input
          required
            onChange={onChangeHandler}
            name='add1'
            value={formData.add1}
    id="add1"
    type="text"
    className="border border-gray-500 rounded mb-2 py-1.5 px-3.5 w-full"
          />
  <label htmlFor="add2" className="block text-sm font-medium text-gray-700 mb-1">
    Area, Street, Sector, Village
  </label>
          <input
            onChange={onChangeHandler}
            name='add2'
            value={formData.add2}
    id="add2"
    type="text"
    className="border border-gray-500 rounded mb-2 py-1.5 px-3.5 w-full"
          />
  <label htmlFor="landmark" className="block text-sm font-medium text-gray-700 mb-1">
    Landmark
  </label>
          <input
            onChange={onChangeHandler}
            name='landmark'
            value={formData.landmark}
    id="landmark"
            type="text"
            placeholder='E.g. near apollo hospital'
    className="border border-gray-500 rounded mb-2 py-1.5 px-3.5 w-full"
          />
    <div className='flex gap-3'>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
    City
  </label>
              <input
              required
                onChange={onChangeHandler}
            name='city'
            value={formData.city}
    id="city"
    type="text"
    className="border border-gray-500 rounded mb-2 py-1.5 px-3.5 w-full"
            />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
    State
  </label>
              <input
              required
                onChange={onChangeHandler}
            name='state'
            value={formData.state}
    id="state"
    type="text"
    className="border border-gray-500 rounded mb-2 py-1.5 px-3.5 w-full"
          />

            </div>
  
          </div>
</div>
      </div>

      {/* right side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
         <div className='text-xl sm:text-2xl my-3'>
          <h2 className='text-gray-400 text-2xl'>Payment <span className='text-gray-600'>Methods</span></h2>
        </div>
          <div className='flex gap-3 flex-col lg:flex-row '>
            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-500' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razor} alt="" />
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>COD</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
        <button type='submit'  className='bg-black text-white px-16 py-3 text-sm'>Place Order</button>

      </div>
        </div>
      </div>
    </form>
  )
}

export default OrderPlace